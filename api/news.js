// Vercel Serverless Function — Catholic News RSS Fetcher
// File location in your GitHub repo: /api/news.js
// Once deployed, accessible at: companion.anthonyhq.com/api/news

const https = require('https');

const FEEDS = [
  { url:'https://www.vaticannews.va/en.rss.xml', source:'Vatican News', color:'#c00' },
  { url:'https://catholicherald.co.uk/feed/', source:'Catholic Herald', color:'#003580' },
  { url:'https://zenit.org/feed/', source:'Zenit', color:'#336' },
  { url:'https://www.ncregister.com/feeds/rss', source:'NC Register', color:'#8b0000' }
];

function fetchUrl(url){
  return new Promise((resolve,reject)=>{
    const req = https.get(url,{
      headers:{'User-Agent':'CatholicCompanion/1.0 (+https://companion.anthonyhq.com)'},
      timeout:8000
    },(res)=>{
      let data='';
      res.on('data',c=>data+=c);
      res.on('end',()=>resolve(data));
    });
    req.on('error',reject);
    req.on('timeout',()=>{req.destroy();reject(new Error('timeout'));});
  });
}

function parseRSS(xml,source,color){
  const items=[];
  const re=/<item>([\s\S]*?)<\/item>/g;
  let m;
  while((m=re.exec(xml))!==null && items.length<6){
    const b=m[1];
    const t=(b.match(/<title><!\[CDATA\[(.*?)\]\]><\/title>/)||b.match(/<title>(.*?)<\/title>/))?.[1]?.trim()||'';
    const l=(b.match(/<link>(.*?)<\/link>/))?.[1]?.trim()||'';
    const d=(b.match(/<pubDate>(.*?)<\/pubDate>/))?.[1]?.trim()||'';
    if(t.length>10) items.push({title:t,link:l,date:d,source,color});
  }
  return items;
}

module.exports = async(req,res)=>{
  res.setHeader('Access-Control-Allow-Origin','*');
  res.setHeader('Cache-Control','s-maxage=600,stale-while-revalidate');
  const all=[];
  for(const feed of FEEDS){
    try{ const xml=await fetchUrl(feed.url); all.push(...parseRSS(xml,feed.source,feed.color)); }
    catch(e){ console.error(`${feed.source}:`,e.message); }
  }
  res.status(200).json(all.length>0
    ?{ok:true,count:all.length,items:all,fetched:new Date().toISOString()}
    :{ok:false,items:[],error:'All feeds unavailable'});
};
