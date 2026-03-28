
/* ── DATA ──────────────────────────────────────────────────────────── */
const NEWS_ITEMS=[
  'Pope Leo XIV leads Angelus prayer — reflects on the Parable of the Sower',
  'Diocese of Lagos, Nigeria celebrates 200th anniversary with outdoor Mass of 150,000',
  'World Youth Day 2027 confirmed for Manila, Philippines — registration now open',
  'New martyrology: 22 martyrs of Korea beatified in Seoul',
  'Vatican Jubilee 2025: special plenary indulgence conditions announced',
  'Ascension of the Lord: Holy Day of Obligation this Thursday',
  'Carmelite Sisters announce full digital archive of St. Thérèse manuscripts',
  'EWTN: Mother Angelica canonisation cause formally opened',
  'Synod on Synodality: implementation phase launched in all dioceses worldwide',
  'St. Carlo Acutis: new shrine opened in Assisi following canonisation',
  'Nigerian Bishops\' Conference approves new Igbo translation of the Roman Missal',
  'International Eucharistic Congress: Indianapolis 2026 — global registration open',
];

const DAYS=[
  {short:"Sun",full:"Sunday, 22 March",season:"Ordinary Time XIV",colour:"Green",saint:"The Lord's Day",solemnity:false,
  readings:[
    {id:"first",label:"First Reading",ref:"Isaiah 55:10–11",text:"As the rain and the snow come down from heaven and do not return to it without watering the earth and making it bud and flourish... so is my word that goes out from my mouth: it will not return to me empty, but will accomplish what I desire and achieve the purpose for which I sent it.",response:null},
    {id:"psalm",label:"Responsorial Psalm",ref:"Ps 65:10–14",text:"You care for the land and water it; you enrich it abundantly. The streams of God are filled with water to provide the people with grain, for so you have ordained it. The year is crowned with your bounty, and your carts overflow with abundance.",response:"The seed that falls on good ground will yield a fruitful harvest."},
    {id:"second",label:"Second Reading",ref:"Romans 8:18–23",text:"I consider that our present sufferings are not worth comparing with the glory that will be revealed in us. For the creation waits in eager expectation for the children of God to be revealed...",response:null},
    {id:"gospel",label:"Holy Gospel",ref:"Mark 4:1–20",text:"Again Jesus began to teach by the lake. The crowd that gathered was so large that He got into a boat. He taught them many things by parables: 'Listen! A farmer went out to sow his seed...'",response:null},
  ],
  reflection:`<p>Jesus sits in a boat pushed out from the shore and the crowd presses against the water's edge to hear Him. He begins to speak in a parable — a sower goes out to sow. The seed is scattered with what looks like recklessness: on the path, on rocky ground, among thorns, and on good soil.</p><p>When the disciples ask Him privately what it means, He is explicit: the seed is the Word. The soils are not different categories of people so much as different conditions of the same heart on different days.</p>`,
  takeaway:"The Word is sown with extravagant generosity. The question is: what kind of ground am I offering Him today?",
  prayer:"Lord Jesus, Sower of the Word, prepare the soil of my heart this week. Root out the thorns of distraction and let what You speak bear fruit — thirty, sixty, a hundredfold. Amen.",
  discuss:["Which of the four soils feels closest to describing your heart right now?","The Sower scatters seed on every kind of ground without hesitation. What does this say about how God approaches every person?","Isaiah says God's Word accomplishes what He intends. Where have you seen this in your own life?"],
  ccc:"CCC §§101–141 — God's Word in Sacred Scripture",
  ccc_quote:"\"In Sacred Scripture, the Church constantly finds her nourishment and her strength.\" (CCC §104)"},
  {short:"Mon",full:"Monday, 23 March",season:"Ordinary Time XIV",colour:"Green",saint:"St. Turibius of Mogrovejo",saintKey:"turibius",
  readings:[
    {id:"first",label:"First Reading",ref:"Isaiah 50:4–7",text:"The Sovereign Lord has given me a well-instructed tongue, to know the word that sustains the weary. He wakens me morning by morning, wakens my ear to listen like one being instructed.",response:null},
    {id:"psalm",label:"Responsorial Psalm",ref:"Ps 22:8–9,17–18",text:"All who see me mock me; they hurl insults, shaking their heads: 'He trusts in the Lord; let the Lord rescue him.' Dogs surround me, a pack of villains encircles me.",response:"My God, my God, why have you abandoned me?"},
    {id:"gospel",label:"Holy Gospel",ref:"Mark 4:1–20",text:"He told them: 'Don't you understand this parable? The farmer sows the word. Some people are like seed along the path, where the word is sown. As soon as they hear it, Satan comes and takes away the word that was sown in them.'",response:null},
  ],
  reflection:`<p>Isaiah's Servant opens the week: <em>"Morning by morning He opens my ear to hear as those who are taught."</em> The image is not of a scholar with his books but of a learner who wakes each day to find a Teacher already present, already speaking. This is how God's Word comes to us — not as information to be mastered once, but as a living address that must be received anew every morning.</p>`,
  takeaway:"God speaks morning by morning. The discipline of the spiritual life is learning to listen before we speak.",
  prayer:"Father, open my ear each morning as You opened the ear of Your Servant. Make me a learner, not a teacher, before Your Word today. Amen.",
  discuss:["What would it mean practically to 'open your ear' before you speak today?","The Servant hears and then suffers for it. Have you experienced a cost for following what God asked?","How does St. Turibius's ministry across the mountains of Peru illustrate 'morning by morning' listening?"],
  ccc:"CCC §§142–175",ccc_quote:"\"By faith, man completely submits his intellect and his will to God.\" (CCC §143)"},
  {short:"Tue",full:"Tuesday, 24 March",season:"Ordinary Time XIV",colour:"Green",saint:"St. Óscar Romero",saintKey:"romero",
  readings:[
    {id:"first",label:"First Reading",ref:"Isaiah 50:4–9",text:"The Sovereign Lord has given me a well-instructed tongue. He wakens me morning by morning. I offered my back to those who beat me, my cheeks to those who pulled out my beard; I did not hide my face from mocking and spitting. Because the Sovereign Lord helps me, I will not be disgraced.",response:null},
    {id:"psalm",label:"Responsorial Psalm",ref:"Ps 69:8–10",text:"For I endure scorn for your sake, and shame covers my face. I am a foreigner to my own family, a stranger to my own mother's children; for zeal for your house consumes me.",response:"Lord, in your great love, answer me."},
    {id:"gospel",label:"Holy Gospel",ref:"Mark 4:26–34",text:"He also said: 'This is what the kingdom of God is like. A man scatters seed on the ground. Night and day, whether he sleeps or gets up, the seed sprouts and grows, though he does not know how.' Again: 'What shall we say the kingdom of God is like? It is like a mustard seed, which is the smallest of all seeds on earth.'",response:null},
  ],
  reflection:`<p>Today Jesus gives us two of the shortest parables in Mark, side by side: the seed that grows secretly and the mustard seed. Both are provocations against impatience. The farmer scatters seed and then sleeps. Rises. Sleeps again. <em>"He does not know how"</em> the seed sprouts.</p><p>The mustard seed is even more subversive. The smallest of all seeds becomes the greatest shrub, large enough for the birds to nest in its shade. Jesus is quietly saying: this small movement of twelve fishermen and sinners is the fulfilment of all the prophets saw.</p>`,
  takeaway:"The Kingdom grows in secret, beyond our management. Our task is to sow faithfully and trust the Sower.",
  prayer:"Lord, cure me of my need to see immediate results. Let me sow the small seeds of prayer, kindness, and fidelity today, and trust that You are growing them. Amen.",
  discuss:["Where are you tempted to dig up the seed to check on its progress?","St. Óscar Romero gave his life at the altar on this very day in 1980. How does his story illustrate the mustard seed?","What is the smallest act of faithfulness you feel called to today?"],
  ccc:"CCC §§541–556",ccc_quote:"\"The Kingdom of heaven is at hand.\" (CCC §541)"},
  {short:"Wed",full:"Wednesday, 25 March",season:"Solemnity of the Annunciation",colour:"White",saint:"Annunciation of the Lord",saintKey:"annunciation",solemnity:true,
  readings:[
    {id:"first",label:"First Reading",ref:"Isaiah 7:10–14",text:"Therefore the Lord himself will give you a sign: The virgin will conceive and give birth to a son, and will call him Immanuel.",response:null},
    {id:"psalm",label:"Responsorial Psalm",ref:"Ps 40:7–11",text:"Here I am, Lord; I come to do your will. I have desired to do your will, my God; your law is within my heart. I proclaim your saving acts in the great assembly.",response:"Here am I, Lord; I come to do your will."},
    {id:"second",label:"Second Reading",ref:"Hebrews 10:4–10",text:"It is impossible for the blood of bulls and goats to take away sins. Therefore, when Christ came into the world, he said: 'Here I am — I have come to do your will, my God.'",response:null},
    {id:"gospel",label:"Holy Gospel",ref:"Luke 1:26–38",text:"God sent the angel Gabriel to Nazareth. The angel went to her and said: 'Greetings, you who are highly favoured! The Lord is with you.' Mary was greatly troubled at his words and wondered what kind of greeting this might be. The angel said to her: 'Do not be afraid, Mary; you have found favour with God. You will conceive and give birth to a son, and you are to call him Jesus.'",response:null},
  ],
  reflection:`<p>Today Ordinary Time pauses entirely. The Solemnity of the Annunciation falls on Wednesday and the whole Church rings with the moment when human history turned on the word of a young woman in Nazareth. Gabriel enters. He speaks. And everything hangs in the air until Mary responds.</p><p>She says one of the most consequential sentences in the history of the universe: <em>"Behold, I am the handmaid of the Lord. Let it be done to me according to Your word."</em> This is the week's entire meditation made flesh. Mary heard. She received. The Word became flesh.</p>`,
  takeaway:"Mary's fiat is the perfect answer to every question this week has raised: what does it look like to truly hear and receive the Word of God?",
  prayer:"Hail Mary, full of grace, the Lord is with thee. Blessed art thou among women, and blessed is the fruit of thy womb, Jesus. Holy Mary, Mother of God, pray for us sinners now and at the hour of our death. Amen.",
  discuss:["Where is God asking you to say yes to something you don't fully understand?","The prophecy was given 700 years before the Annunciation. How does this deepen your trust in God's promises?","Why is Our Lady the perfect centre of a week about hearing the Word?"],
  ccc:"CCC §§484–511",ccc_quote:"\"The Virgin Mary most perfectly embodies the obedience of faith.\" (CCC §148)"},
  {short:"Thu",full:"Thursday, 26 March",season:"Ordinary Time XIV",colour:"Green",saint:"St. Ludger of Münster",saintKey:"ludger",
  readings:[
    {id:"first",label:"First Reading",ref:"Genesis 17:3–9",text:"Abram fell facedown, and God said to him: 'As for me, this is my covenant with you: You will be the father of many nations. No longer will you be called Abram; your name will be Abraham.'",response:null},
    {id:"psalm",label:"Responsorial Psalm",ref:"Ps 105:4–9",text:"Look to the Lord and his strength; seek his face always. Remember the wonders he has done. He remembers his covenant forever, the promise he made for a thousand generations.",response:"The Lord remembers his covenant for ever."},
    {id:"gospel",label:"Holy Gospel",ref:"Mark 4:21–25",text:"He said to them: 'Do you bring in a lamp to put it under a bowl or a bed? Instead, don't you put it on its stand? For whatever is hidden is meant to be disclosed. If anyone has ears to hear, let them hear.'",response:null},
  ],
  reflection:`<p>Jesus asks: <em>"Is a lamp brought in to be put under a bushel, or under a bed?"</em> Obviously not. Yet in this week's context the lamp is the Word itself. Those who have heard the Word in Mass year after year carry a lamp. The question He is asking is whether we are hiding it — under the bushel of privacy, under the bed of embarrassment — or placing it on the stand.</p>`,
  takeaway:"Faith received but never shared gradually dims. The Word grows by being spoken.",
  prayer:"Lord, give me the courage to place the lamp where it belongs — in my family, my workplace, my friendships. Take away the bushel of my embarrassment. Amen.",
  discuss:["In what area of your life do you tend to hide the lamp?","How does St. Ludger's missionary work illustrate placing the lamp on the stand?","Jesus says the measure you give is the measure you get. Have you experienced this?"],
  ccc:"CCC §§897–913",ccc_quote:"\"By their vocation, the laity are called to be present in those places where only through them can the Church be the salt of the earth.\" (CCC §900)"},
  {short:"Fri",full:"Friday, 27 March",season:"Ordinary Time XIV",colour:"Green",saint:"St. Rupert of Salzburg",saintKey:"rupert",
  readings:[
    {id:"first",label:"First Reading",ref:"Jeremiah 20:10–13",text:"I hear many whispering, 'Terror on every side! Denounce him! Let's denounce him!' All my friends are waiting for me to slip. But the Lord is with me like a mighty warrior; so my persecutors will stumble and not prevail.",response:null},
    {id:"psalm",label:"Responsorial Psalm",ref:"Ps 18:2–7",text:"I love you, Lord, my strength. The Lord is my rock, my fortress and my deliverer; my God is my rock, in whom I take refuge, my shield and the horn of my salvation, my stronghold.",response:"I love you, Lord, my strength."},
    {id:"gospel",label:"Holy Gospel",ref:"John 7:1–2,10,25–30",text:"Jesus went around in Galilee purposely staying away from Judea because the Jewish leaders there were looking for a way to kill Him. However, He went also, not publicly, but in secret.",response:null},
  ],
  reflection:`<p>Friday deepens the week's mood. Jeremiah cries out: <em>"Terror is on every side! Denounce him!"</em> His trusted friends wait for him to stumble. And yet he praises in the middle of suffering: <em>"Sing to the Lord; praise the Lord!"</em> This is not optimism but faith anchored in a track record: God has rescued before, and will again.</p>`,
  takeaway:"Faithfulness to the Word will sometimes cost us. Jeremiah shows it is worth it.",
  prayer:"Lord, when faithfulness to Your Word brings opposition, let me sing with Jeremiah: 'The Lord is with me as a dread warrior.' Amen.",
  discuss:["Have you experienced opposition for living your faith openly?","Jeremiah praises God in the middle of suffering. What enables that kind of praise?","Why does Jesus move in secret in today's Gospel?"],
  ccc:"CCC §§2471–2474",ccc_quote:"\"The duty of Christians to take part in the life of the Church impels them to act as witnesses of the Gospel.\" (CCC §2472)"},
  {short:"Sat",full:"Saturday, 28 March",season:"Saturday memorial of Our Lady",colour:"White",saint:"Saturday Memorial of Our Lady",saintKey:"our_lady_sat",
  readings:[
    {id:"first",label:"First Reading",ref:"Jeremiah 11:18–20",text:"The Lord revealed their plot to me. I had been like a gentle lamb led to the slaughter; I did not realize that they had plotted against me. But, Lord Almighty, you who judge righteously and test the heart and mind, let me see your vengeance on them.",response:null},
    {id:"psalm",label:"Responsorial Psalm",ref:"Ps 7:2–3,9–12",text:"Lord my God, I take refuge in you; save and deliver me from all who pursue me. You are a righteous God who searches minds and hearts.",response:"Lord, my God, I take refuge in you."},
    {id:"gospel",label:"Holy Gospel",ref:"John 7:40–53",text:"On hearing his words, some of the people said, 'Surely this man is the Prophet.' Others said, 'He is the Messiah.' Even the officers sent to arrest Him returned empty-handed: 'No one ever spoke the way this man does.'",response:null},
  ],
  reflection:`<p>On Saturdays through Ordinary Time the Church keeps a quiet memorial of Our Lady. Today's Gospel shows the crowd bitterly divided over Jesus. Even the officers sent to arrest Him return empty-handed: <em>"No one ever spoke like this man."</em> Our Lady heard the Word before anyone else. She stood at the foot of the Cross. The week closes not with doctrine but with a person — the woman who shows us what it looks like to receive the Word completely.</p>`,
  takeaway:"Our Lady is the model of every disciple: she heard the Word, received the Word, and bore the Word into the world.",
  prayer:"Hail, Holy Queen, Mother of Mercy, our life, our sweetness and our hope. To thee do we cry. O clement, O loving, O sweet Virgin Mary. Amen.",
  discuss:["The week began with Our Lady at the Annunciation and ends with her today. What thread do you see?","What have you been pondering in your heart this week?","What would it mean to close the week by simply holding what you have received?"],
  ccc:"CCC §§963–975",ccc_quote:"\"Mary's role in the Church is inseparable from her union with Christ and flows directly from it.\" (CCC §964)"}
];

const SAINTS={
  turibius:{init:"T",rank:"Bishop · Confessor",bio:"Turibius of Mogrovejo (1538–1606) was appointed Archbishop of Lima as a layman and became one of the great missionary bishops of the Americas, travelling thousands of miles on horseback to bring the sacraments to indigenous peoples.",patronage:"Patron of Latin American bishops and the indigenous peoples of the Americas",prayer:"St. Turibius, apostle to the forgotten, pray for us. Give us your perseverance and your tenderness for the poor. Amen."},
  romero:{init:"ÓR",rank:"Bishop · Martyr",bio:"Óscar Arnulfo Romero (1917–1980) was Archbishop of San Salvador, martyred while celebrating Mass. Transformed by the assassination of his friend Fr. Rutilio Grande into a fearless prophet for the poor, he was canonised in 2018.",patronage:"Patron of the Americas, the persecuted Church, and El Salvador",prayer:"St. Óscar Romero, martyr of the altar, pray for us. Help us to offer our lives with the same completeness. Amen."},
  annunciation:{init:"✝",rank:"Solemnity",bio:"On this day the archangel Gabriel appeared to the Virgin Mary in Nazareth, announcing that she would conceive and bear the Son of God. Her fiat — 'Let it be done to me according to Your word' — is the hinge of human history.",patronage:"This Solemnity takes precedence over any feast on 25 March",prayer:"Lord who took flesh in the womb of the Virgin Mary — grant us a spirit of humble obedience to match hers. Amen."},
  ludger:{init:"L",rank:"Bishop · Missionary",bio:"Ludger of Münster (742–809) was a Frisian missionary who evangelised the pagan Saxons, founded monasteries, trained clergy, and became the first Bishop of Münster.",patronage:"Patron of the Diocese of Münster and of missionaries to Northern Europe",prayer:"St. Ludger, apostle of the Saxons, pray for us. Give us your patience in sowing the Word on ground that is slow to receive it. Amen."},
  rupert:{init:"R",rank:"Bishop",bio:"Rupert of Salzburg (c.650–718) was a Frankish bishop who evangelised Bavaria, founding the monastery of St. Peter at Salzburg and the Abbey of Nonnberg.",patronage:"Patron of Salzburg and of Austria",prayer:"St. Rupert, builder of the Church in Bavaria, pray for us. May we build faithfully in our own small sphere. Amen."},
  our_lady_sat:{init:"M",rank:"Saturday Memorial",bio:"Each Saturday in Ordinary Time is kept as a quiet memorial of Our Lady — the tradition going back to Holy Saturday, when she alone held the faith of the whole Church while the Apostles hid in fear.",patronage:"Our Lady, Mother of the Church, Queen of the Apostles, Our Lady of Sorrows",prayer:"We fly to thy patronage, O holy Mother of God. Despise not our petitions, but deliver us from all dangers, O glorious Virgin. Amen."}
};

const DEPTHS=[
  {id:"beginner",name:"Beginner — I'm new to this",desc:"Readings with accessible paraphrase. Short welcoming reflection. Saint in three sentences. One highlighted takeaway. No jargon without explanation.",ideal:"New or returning Catholics · RCIA candidates · teenagers"},
  {id:"growing",name:"Growing — I attend Mass regularly",desc:"Full RSVCE text. Medium reflection. Saint biography with historical context. Catechism link. Discussion questions.",ideal:"Regular Mass-goers · families · small faith groups"},
  {id:"devout",name:"Devout — I pray daily and study",desc:"Extended reflection drawing on Church Fathers. Catechism paragraph numbers. Typology cross-references.",ideal:"Daily Mass-goers · Third Order members · those in spiritual direction"},
  {id:"scholar",name:"Scholar — theological training",desc:"Greek/Hebrew word studies. Patristic commentary with full citations. Lectionary cross-references. Denzinger sources.",ideal:"Priests · seminarians · theology students · permanent deacons"}
];

const LIVE_STREAMS=[
  {id:"ewtn",title:"EWTN — Daily Mass",source:"Eternal Word Television Network",thumb:"⛪",ytId:"nImIq-C1Bco",viewers:"12,400 watching"},
  {id:"vatican",title:"Vatican — St. Peter's Basilica",source:"Vatican Media",thumb:"🏛",ytId:"ILnSB8G3TiI",viewers:"8,200 watching"},
  {id:"dominican",title:"Dominican House of Studies",source:"Dominican Friars of Washington",thumb:"📿",ytId:"live",viewers:"3,100 watching"},
  {id:"carmelite",title:"Carmelite Monastery — Morning Mass",source:"Carmelite Sisters",thumb:"🕯",ytId:"live",viewers:"1,800 watching"},
  {id:"mercy",title:"National Shrine of Divine Mercy",source:"Marian Fathers",thumb:"🙏",ytId:"live",viewers:"4,600 watching"},
  {id:"knock",title:"Knock Shrine — Ireland",source:"Knock National Shrine",thumb:"✝",ytId:"live",viewers:"2,300 watching"},
];

const MASS_PARTS=[
  {num:"I",title:"The Entrance Procession & Entrance Hymn",body:"<p>The Mass begins with movement — the priest processes from the sacristy to the altar while the assembly sings. This is theology enacted in space and time. The procession echoes the priestly procession into the Temple. The altar is reverenced with a bow and, on solemn occasions, incensed. The altar represents Christ Himself — simultaneously the table of the Last Supper and the stone of sacrifice. Every act of reverence toward it is reverence toward Him.</p>",scripture:"Psalm 24:3 — 'Who shall ascend the hill of the Lord?'"},
  {num:"II",title:"The Sign of the Cross & Greeting",body:"<p>\"In the name of the Father, and of the Son, and of the Holy Spirit.\" We mark ourselves with the instrument of our salvation. The Sign of the Cross is simultaneously a summary of the Gospel, a prayer, and a physical act involving the whole body.</p><p>\"The Lord be with you / And with your spirit\" — this exchange appears in Ruth 2:4 and in 2 Timothy 4:22. \"And with your spirit\" refers to the ordained spirit the priest received at ordination, enabling him to act <em>in persona Christi</em>.</p>",scripture:"Matthew 28:19 · Ruth 2:4 · 2 Timothy 4:22"},
  {num:"III",title:"The Penitential Act & Kyrie",body:"<p>\"I confess to Almighty God...\" The triple striking of the breast — \"through my fault, through my fault, through my most grievous fault\" — is an ancient gesture of compunction. The Kyrie retains its Greek: it is the cry of the blind men calling to Jesus (Matthew 20:30), the Canaanite woman (Matthew 15:22), and the ten lepers (Luke 17:13). We are those beggars.</p>",scripture:"Luke 18:13 — 'God, be merciful to me, a sinner.'"},
  {num:"IV",title:"The Gloria",body:"<p>On Sundays and feast days (not Advent or Lent) the assembly sings the Gloria — the angelic hymn from Bethlehem (Luke 2:14), expanded into a great hymn of praise to all three Persons of the Trinity. It dates to the second or third century. Its absence in Advent and Lent is a liturgical fast — its return at Christmas Midnight Mass all the more powerful.</p>",scripture:"Luke 2:14 — 'Glory to God in the highest.'"},
  {num:"V",title:"The Liturgy of the Word",body:"<p>The First Reading is almost always from the Old Testament — because the Old Testament is our Scripture. The Responsorial Psalm is Scripture sung in response to Scripture — the prayer book of Jesus Himself. The Alleluia welcomes the Gospel standing, as the most solemn moment of the Liturgy of the Word.</p>",scripture:"Romans 10:17 — 'Faith comes from what is heard.'"},
  {num:"VI",title:"The Gospel & Homily",body:"<p>The Gospel is treated differently: the book is processed, the assembly stands, it is incensed, the deacon or priest signs himself on forehead, lips, and heart — asking that the Word be in his mind, on his lips, and in his heart. The homily is part of the liturgical action itself (Sacrosanctum Concilium §52) — the continuation of Christ's own proclamation.</p>",scripture:"Luke 4:21 — 'Today this scripture has been fulfilled in your hearing.'"},
  {num:"VII",title:"The Creed",body:"<p>The Nicene Creed was formulated at Nicaea (325 AD) and expanded at Constantinople (381 AD) to address the Arian heresy. Every phrase was hard-won. At the words \"and by the Holy Spirit was incarnate of the Virgin Mary, and became man,\" the assembly bows — and kneels on the Annunciation and Christmas — marking in our bodies the moment all creation had been awaiting.</p>",scripture:"1 Corinthians 15:3–5 — the earliest creedal formula in the New Testament."},
  {num:"VIII",title:"Preparation of Gifts",body:"<p>The priest prays over the bread in language from the Jewish Passover table blessing: \"Blessed are you, Lord God of all creation.\" A drop of water is mixed into the wine: \"By the mystery of this water and wine may we come to share in the divinity of Christ, who humbled Himself to share in our humanity.\"</p>",scripture:"Psalm 26:6 — 'I will wash my hands in innocence.'"},
  {num:"IX",title:"The Eucharistic Prayer — Preface & Sanctus",body:"<p>\"Lift up your hearts / We lift them up to the Lord\" — these exact words go back to Hippolytus of Rome (c.215 AD). The Sanctus: <em>\"Holy, Holy, Holy Lord God of hosts. Heaven and earth are full of Your glory.\"</em> The first line is Isaiah's vision of the seraphim (Isaiah 6:3); the second is the Palm Sunday crowd (Matthew 21:9). Heaven and Jerusalem — meeting at every altar.</p>",scripture:"Isaiah 6:3 · Matthew 21:9 — Heaven and Jerusalem united at every Mass."},
  {num:"X",title:"The Consecration",body:"<p>The priest extends his hands over the bread and wine — the epiclesis, invoking the Holy Spirit. Then the words of Christ at the Last Supper. The bell rings. We adore. The Church teaches that transubstantiation occurs: the substance of bread and wine is wholly converted into the Body, Blood, Soul, and Divinity of Jesus Christ, while the appearances remain. This is the teaching of the Council of Trent (1551), rooted in John 6.</p>",scripture:"John 6:55–56 — 'My flesh is real food and my blood is real drink.'"},
  {num:"XI",title:"Memorial Acclamation, Doxology & Great Amen",body:"<p><em>\"We proclaim Your death, O Lord, and profess Your resurrection until You come again.\"</em> This single sentence holds all of time: the past sacrifice of Calvary, His present Body on the altar, and His future return. The Great Doxology concludes with the assembly's most important Amen — St. Augustine called it \"signing your name to a great document.\"</p>",scripture:"Romans 11:36 — 'For from Him and through Him and for Him are all things.'"},
  {num:"XII",title:"Our Father, Peace & Breaking of Bread",body:"<p>\"Give us this day our daily bread\" — the Fathers understood this as the Eucharist itself. The Breaking of the Bread was the name the earliest Christians gave to the entire celebration (Acts 2:42). The two disciples at Emmaus recognised the Risen Christ in this gesture (Luke 24:35).</p>",scripture:"Acts 2:42 · Luke 24:35 · John 1:29"},
  {num:"XIII",title:"Holy Communion",body:"<p>\"Behold the Lamb of God...\" — Revelation 19:9 and John 1:29 in a single breath. The assembly responds with the centurion's prayer (Matthew 8:8): <em>\"Lord, I am not worthy that You should enter under my roof, but only say the word and my soul shall be healed.\"</em> — a Roman officer's faith, placed on the lips of every Catholic at every Mass on earth.</p>",scripture:"Matthew 8:8 · Revelation 19:9"},
  {num:"XIV",title:"The Blessing & Dismissal",body:"<p><em>Ite, missa est</em> — from which the word \"Mass\" itself comes. <em>Missa</em> from <em>mittere</em>: to send. Three forms: \"Go forth, the Mass is ended.\" \"Go and announce the Gospel of the Lord.\" \"Go in peace, glorifying the Lord by your life.\" We do not leave the liturgy behind when we leave the building. The Mass ends; the mission begins.</p>",scripture:"Matthew 28:19 — 'Go therefore and make disciples of all nations.'"}
];

/* ── STATE ─────────────────────────────────────────────────────────── */
let curDay=new Date().getDay(), depth='growing', pDepth='growing';
let curReading=0, isPlaying=false, isMuted=false;
let progTimer=null, progPct=0;
let selVoice=0, synth=window.speechSynthesis;
let isSpeaking=false, ttsOpen=false;
let litCandles=new Set();

/* ── INIT ──────────────────────────────────────────────────────────── */
window.addEventListener('DOMContentLoaded',()=>{
  setLiveDate();
  buildTicker();
  buildDayStrip();
  buildReadingTabs(curDay);
  renderDay(curDay);
  buildWeekList();
  buildMassAcc();
  buildStreamGrid();
  buildStoryGrids();
  buildFormationList();
  buildPodcastList();
  buildSeekerContent();
  buildVocList();
  buildNewsList();
  buildArticlesList();
  buildLibGrid();
  buildStoreGrid();
  buildQAContent();
  buildDepthCards();
  buildCommunityContent('testimonies');
  checkTTSSupport();
});

/* ── DATE ──────────────────────────────────────────────────────────── */
function setLiveDate(){
  try {
    const now=new Date();
    const dn=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    const mn=['January','February','March','April','May','June','July','August','September','October','November','December'];
    const el=document.getElementById('h-date');
    if(el) el.textContent=dn[now.getDay()]+', '+now.getDate()+' '+mn[now.getMonth()]+' '+now.getFullYear();
  } catch(e) { console.log('date error',e); }
}

/* ── TICKER ────────────────────────────────────────────────────────── */
function buildTicker(){
  const track=document.getElementById('ticker-track');
  const items=[...NEWS_ITEMS,...NEWS_ITEMS];
  track.innerHTML=items.map(n=>`<span style="cursor:pointer" onclick="handleNewsClick()">${n}</span><span class="ticker-sep"> ✦ </span>`).join('');
}
function handleNewsClick(){showPage('news');}

/* ── PAGE NAV ──────────────────────────────────────────────────────── */
function showPage(id){
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.getElementById('page-'+id).classList.add('active');
  const pageOrder=['today','week','mass','live','adoration','community','children','formation','podcasts','seeker','vocations','news','articles','library','store','qa'];
  const idx=pageOrder.indexOf(id);
  document.querySelectorAll('.nav-tab').forEach((b,i)=>b.classList.toggle('active',i===idx));
  document.querySelectorAll('.bn-btn').forEach((b,i)=>{
    const bmap={0:'today',1:'live',2:'adoration',3:'community',4:'seeker'};
    b.classList.toggle('active',bmap[i]===id);
  });
  window.scrollTo(0,0);
  if(isSpeaking){ttsStop();}
}

/* ── DAY STRIP ─────────────────────────────────────────────────────── */
function buildDayStrip(){
  document.getElementById('day-strip').innerHTML=DAYS.map((d,i)=>`
    <button class="dp${i===curDay?' active':''}" onclick="switchDay(${i})">
      <span class="dn">${d.short}</span>
      <span class="ds">${d.saint}</span>
    </button>`).join('');
}
function switchDay(i){curDay=i;buildDayStrip();buildReadingTabs(i);renderDay(i);window.scrollTo(0,0);if(isSpeaking)ttsStop();}

/* ── VIDEO PLAYER ──────────────────────────────────────────────────── */
function buildReadingTabs(di){
  const d=DAYS[di];
  document.getElementById('reading-tabs').innerHTML=d.readings.map((r,i)=>`
    <button class="rtab${i===0?' active':''}${r.id==='psalm'?' psalm':''}" id="rt${i}" onclick="selectReading(${i})">
      <span class="rtn">${r.label}</span>
      <span class="rtr">${r.ref}</span>
    </button>`).join('');
  selectReading(0);
}
function selectReading(i){
  curReading=i;
  stopProg();progPct=0;
  document.getElementById('prog-fill').style.width='0%';
  document.getElementById('vtime').textContent='0:00 / 2:30';
  document.querySelectorAll('.rtab').forEach((t,idx)=>t.classList.toggle('active',idx===i));
  const r=DAYS[curDay].readings[i];
  document.getElementById('vo-ref').textContent=r.ref+(r.id==='psalm'?' — Responsorial Psalm':'');
  const resp=document.getElementById('vo-response');
  if(r.id==='psalm'&&r.response){resp.style.display='block';resp.textContent='Response: "'+r.response+'"';}
  else resp.style.display='none';
  document.getElementById('vo-text').textContent='"'+r.text.substring(0,130)+'..."';
  document.getElementById('play-btn').textContent='▶';isPlaying=false;
}
function togglePlay(){isPlaying=!isPlaying;document.getElementById('play-btn').textContent=isPlaying?'⏸':'▶';if(isPlaying)startProg();else stopProg();}
function toggleMute(){isMuted=!isMuted;document.getElementById('mute-btn').textContent=isMuted?'🔇':'🔊';document.getElementById('mute-btn').classList.toggle('muted',isMuted);}
function startProg(){
  progTimer=setInterval(()=>{
    progPct+=100/150;
    if(progPct>=100){progPct=100;stopProg();isPlaying=false;document.getElementById('play-btn').textContent='▶';setTimeout(()=>nextReading(),1000);return;}
    const s=Math.floor(progPct*150/100),m=Math.floor(s/60);
    document.getElementById('prog-fill').style.width=progPct+'%';
    document.getElementById('vtime').textContent=m+':'+String(s%60).padStart(2,'0')+' / 2:30';
  },1000);
}
function stopProg(){clearInterval(progTimer);}
function seekTo(e){const p=e.offsetX/e.currentTarget.offsetWidth*100;progPct=Math.max(0,Math.min(100,p));document.getElementById('prog-fill').style.width=progPct+'%';}
function nextReading(){const d=DAYS[curDay];if(curReading<d.readings.length-1){selectReading(curReading+1);}else{alert('You have heard all of today\'s readings.\nGlory be to God!');}}
function shareVideo(platform){
  const r=DAYS[curDay].readings[curReading];
  const msgs={download:`Downloading: ${r.ref} reading video\n\nIn production, the AI-illustrated video will download to your device ready to share on any platform.`,youtube:`Sharing ${r.ref} to YouTube\n\nIn production: the video downloads then uploads to YouTube Studio with pre-filled title and hashtags.`,tiktok:`Sharing ${r.ref} to TikTok\n\nIn production: formatted as vertical video (9:16) with caption and Catholic hashtags pre-filled.`,facebook:`Sharing ${r.ref} to Facebook\n\nIn production: direct share link to Facebook with reading text as caption.`,rumble:`Sharing ${r.ref} to Rumble\n\nIn production: video file downloads with Rumble-optimised metadata.`};
  alert(msgs[platform]||'Sharing...');
}

/* ── DAY RENDER ────────────────────────────────────────────────────── */
function renderDay(i){
  const d=DAYS[i],s=d.saintKey?SAINTS[d.saintKey]:null;
  document.getElementById('h-season').textContent=d.season+(d.solemnity?' · Solemnity':'');
  document.getElementById('h-liturgy').textContent=(d.solemnity?'Solemnity':'Feria')+' · Liturgical colour: '+d.colour;
  let h=`<div class="content"><div class="share-strip ri">
    <button class="sbtn" onclick="doShare()">⤴ Share today</button>
    <button class="sbtn" onclick="togglePlay()">▷ Play readings</button>
    <button class="sbtn" onclick="showPage('live')">📺 Watch Live Mass</button>
  </div>`;
  h+=`<div class="slabel ri">Full readings — RSVCE</div>`;
  d.readings.forEach((r,idx)=>{
    const isPs=r.id==='psalm';
    const pStyle=isPs?'style="background:rgba(61,8,8,.03);border-color:rgba(201,150,58,.3)"':'';
    const resp=isPs&&r.response?`<p style="font-family:'Cinzel',serif;font-size:.65rem;letter-spacing:.1em;text-transform:uppercase;color:var(--gt);margin-bottom:.5rem;font-style:normal">Response: <em style="font-family:'EB Garamond',serif;font-size:1rem;text-transform:none;letter-spacing:0;color:var(--cr)">"${r.response}"</em></p>`:'';
    h+=`<div class="card ri2" ${pStyle} onclick="selectReading(${idx});document.querySelector('.vplayer-section').scrollIntoView({behavior:'smooth'})">
      <div class="card-ref">${r.label} — ${r.ref}${isPs?' · Responsorial Psalm':''}</div>
      ${resp}<div class="card-text"><p>${r.text}</p></div></div>`;
  });
  h+=`<div class="pull-quote ri3">${d.takeaway}</div>`;
  h+=`<div class="slabel ri3">Reflection</div><div style="font-size:1rem;color:var(--is);line-height:1.88;margin-bottom:1.1rem" class="ri3">${d.reflection}</div>`;
  if(s){
    h+=`<div class="slabel ri3">Saint of the day</div>
    <div class="saint-card ri3"><div class="medallion"><span class="med-init">${s.init}</span></div>
    <div><div style="font-family:'Cinzel',serif;font-size:.6rem;letter-spacing:.1em;text-transform:uppercase;color:var(--cr);margin-bottom:.2rem">${s.rank}</div>
    <div style="font-family:'Cinzel',serif;font-size:.95rem;color:var(--ink);margin-bottom:.38rem">${d.saint}</div>
    <div style="font-size:.9rem;color:var(--im);line-height:1.65">${s.bio}</div>
    <div style="margin-top:.42rem;font-size:.8rem;color:var(--gld);font-style:italic">${s.patronage}</div></div></div>`;
  }
  if(depth!=='beginner'){
    h+=`<div class="slabel ri4">Discussion questions</div>
    <div class="card ri4" style="padding:1rem 1.35rem"><ol style="padding-left:1.2rem;font-size:.9rem;color:var(--im);line-height:1.75">${d.discuss.map(q=>`<li style="margin-bottom:.42rem">${q}</li>`).join('')}</ol></div>`;
  }
  if(depth==='devout'||depth==='scholar'){
    h+=`<div class="slabel ri4">Catechism connection</div>
    <div style="background:rgba(139,26,14,.04);border:1px solid rgba(139,26,14,.14);border-radius:var(--r);padding:.9rem 1.1rem;margin-bottom:1.1rem;font-size:.88rem;line-height:1.7;color:var(--im)" class="ri4">
    <span style="font-family:'Cinzel',serif;font-size:.6rem;letter-spacing:.1em;text-transform:uppercase;color:var(--cr);display:block;margin-bottom:.42rem">${d.ccc}</span>
    <em>${d.ccc_quote}</em></div>`;
  }
  h+=`<div class="slabel ri5">Closing prayer</div>
  <div class="prayer-panel ri5">
    <svg class="pp-cx" width="48" height="67" viewBox="0 0 60 90" fill="var(--gp)"><use href="#cx"/></svg>
    <div class="p-lbl">A prayer for today</div>
    <div class="p-txt">${d.prayer}</div>
  </div></div>`;
  document.getElementById('day-body').innerHTML=h;
}

/* ── WEEK LIST ─────────────────────────────────────────────────────── */
function buildWeekList(){
  document.getElementById('week-list').innerHTML=DAYS.map((d,i)=>`
    <div style="background:#fff;border:1px solid var(--vs)${d.solemnity?';border-color:rgba(201,150,58,.35);background:linear-gradient(90deg,rgba(201,150,58,.07),#fff 50%)':''};border-radius:var(--r);padding:.9rem 1.1rem;display:grid;grid-template-columns:68px 1fr 22px;gap:.75rem;align-items:center;cursor:pointer;transition:all .12s;margin-bottom:.65rem" onclick="showPage('today');switchDay(${i})" onmouseover="this.style.transform='translateX(3px)'" onmouseout="this.style.transform=''">
      <div><div style="font-family:'Cinzel',serif;font-size:.68rem;color:var(--cr);letter-spacing:.05em">${d.short}</div><div style="font-size:.78rem;color:var(--if)">${d.full.split(',')[1]?.trim()||''}</div></div>
      <div><div style="font-size:.92rem;color:var(--is);margin-bottom:.12rem">${d.readings[0]?.ref} · ${d.readings[d.readings.length-1]?.ref}</div><div style="font-size:.8rem;color:var(--il);font-style:italic">${d.saint}</div></div>
      <div style="color:var(--gt);font-size:.95rem">›</div>
    </div>`).join('');
}

/* ── MASS ACCORDION ────────────────────────────────────────────────── */
function buildMassAcc(){
  document.getElementById('mass-acc').innerHTML=MASS_PARTS.map((p,i)=>`
    <div class="acc-item" id="mi${i}">
      <div class="acc-head" onclick="tog('mi${i}')">
        <span class="acc-num">${p.num}</span><span class="acc-title">${p.title}</span><span class="acc-arr">›</span>
      </div>
      <div class="acc-body">${p.body}<div class="acc-scripture">${p.scripture}</div></div>
    </div>`).join('');
}

/* ── LIVE STREAMS ──────────────────────────────────────────────────── */
function buildStreamGrid(){
  document.getElementById('stream-grid').innerHTML=LIVE_STREAMS.map(s=>`
    <div class="sc" id="sc-${s.id}" onclick="watchStream('${s.id}','${s.ytId}','${s.title}')">
      <div class="sc-thumb">${s.thumb}<div class="sc-live">${'● LIVE'}</div></div>
      <div class="sc-info">
        <div class="sc-title">${s.title}</div>
        <div class="sc-src">${s.source}</div>
        <div style="font-family:'Cinzel',serif;font-size:.6rem;color:var(--live);margin-top:.18rem">${s.viewers}</div>
        <button class="sc-btn">Watch now →</button>
      </div>
    </div>`).join('');
}
function watchStream(id,ytId,title){
  const v=document.getElementById('stream-viewer');
  const iframe=document.getElementById('sv-iframe');
  v.style.display='block';
  document.getElementById('sv-title').textContent=title;
  iframe.src=ytId!=='live'?`https://www.youtube.com/embed/${ytId}?autoplay=1&rel=0`:`https://www.youtube.com/embed?listType=search&list=catholic+mass+live&autoplay=1`;
  document.querySelectorAll('.sc').forEach(c=>c.classList.remove('active-sc'));
  document.getElementById('sc-'+id)?.classList.add('active-sc');
  v.scrollIntoView({behavior:'smooth'});
}
function closeStream(){document.getElementById('stream-viewer').style.display='none';document.getElementById('sv-iframe').src='';}
function switchAdoration(t){
  const src={ewtn:'https://www.youtube.com/embed/live_stream?channel=UCnGVBmvzaehUxhK3sTOJexg&autoplay=1&mute=1',carmelite:'https://www.youtube.com/embed/live_stream?channel=carmelitesisters&autoplay=1&mute=1',rome:'https://www.youtube.com/embed/live_stream?channel=vaticannews&autoplay=1&mute=1',mercy:'https://www.youtube.com/embed/live_stream?channel=divinemercysanctuary&autoplay=1&mute=1'};
  document.getElementById('adora-iframe').src=src[t]||src.ewtn;
}
function lightCandle(i){document.getElementById('cf'+i).classList.add('lit');litCandles.add(i);if(litCandles.size===5)setTimeout(()=>alert('All five candles lit 🕯\n\nYour intention is offered before the Blessed Sacrament.\n\n"O Lord, I believe, I adore, I hope, and I love Thee."'),500);}

/* ── COMMUNITY ─────────────────────────────────────────────────────── */
function showCommTab(tab,btn){
  document.querySelectorAll('.ctab').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  buildCommunityContent(tab);
}
function buildCommunityContent(tab){
  const el=document.getElementById('comm-content');
  if(tab==='testimonies'){
    el.innerHTML=[
      {name:"Chioma O.",loc:"Lagos, Nigeria",text:"I started using Catholic Companion three weeks ago. For the first time in years I actually understand what the priest is reading at Mass on Sunday. The week narrative changed everything — I see how it all connects now.",reactions:["🙏 95 praying","❤️ 142 moved","✝️ 67 shared"]},
      {name:"Patrick M.",loc:"Dublin, Ireland",text:"My daughter is 8 and she showed me the Children's World section. She now knows more about St. Patrick than I do. She's been asking questions I can't answer — which means I'm learning too.",reactions:["🙏 44 praying","❤️ 88 moved","✝️ 23 shared"]},
      {name:"Fr. Emmanuel A.",loc:"Enugu Diocese, Nigeria",text:"I use the Scholar level to prepare my homilies. The patristic citations and Catechism cross-references save me hours every week. I have recommended this to all my brother priests.",reactions:["🙏 178 praying","❤️ 231 moved","✝️ 95 shared"]},
      {name:"Sofia R.",loc:"São Paulo, Brazil",text:"I was away from the Church for ten years. I found this through a friend's Instagram post. I clicked 'New here?' and just started reading. I went to confession for the first time in a decade last month.",reactions:["🙏 312 praying","❤️ 445 moved","✝️ 187 shared"]},
    ].map(t=>`<div class="testimony-card">
      <div class="tc-name">${t.name}</div>
      <div class="tc-location">${t.loc}</div>
      <div class="tc-text">${t.text}</div>
      <div class="tc-reaction">${t.reactions.map(r=>`<button class="tc-react" onclick="this.style.background='var(--gt)';this.style.color='#fff'">${r}</button>`).join('')}</div>
    </div>`).join('');
  }else if(tab==='prayer'){
    el.innerHTML=[
      {name:"Anonymous",req:"Please pray for my mother who is very ill. She received the Anointing of the Sick yesterday.",count:243},
      {name:"Michael T.",req:"Pray for my son who has left the faith. I ask for the intercession of St. Monica.",count:187},
      {name:"Sr. Immaculata",req:"Prayer for vocations to religious life — we need young women and men to hear the call.",count:156},
      {name:"A family in Poland",req:"Pray for peace in our region. Our parish has taken in three refugee families.",count:312},
    ].map(p=>`<div class="prayer-req-card">
      <div class="pr-name">${p.name}</div>
      <div class="pr-req">${p.req}</div>
      <div class="pr-count">🙏 ${p.count} people praying<button class="pr-pray-btn" onclick="this.parentNode.innerHTML='🙏 You are praying with '+(${p.count}+1)+' others'">I will pray →</button></div>
    </div>`).join('');
  }else if(tab==='groups'){
    el.innerHTML=`<p style="font-size:.95rem;color:var(--im);margin-bottom:1rem;line-height:1.7">Parish and diocese groups allow communities to share the week's lesson, post their pastor's reflections, and discuss the readings together. Coming in Stage 2.</p>
    <div style="background:var(--vw);border:1px solid var(--vs);border-radius:var(--r);padding:1rem 1.1rem;font-size:.9rem;color:var(--im)">
    <div style="font-family:'Cinzel',serif;font-size:.72rem;color:var(--cr);margin-bottom:.35rem">Pilot parishes</div>
    Three parishes in Nigeria, one in Ireland, and two in the Philippines are piloting parish groups ahead of Stage 2 launch. Interested in joining the pilot? Email: parishes@catholiccompanion.com
    </div>`;
  }else{
    el.innerHTML=`<div class="submit-box">
    <div style="font-family:'Cinzel',serif;font-size:.82rem;color:var(--cr);margin-bottom:.5rem">Share your story</div>
    <p style="font-size:.88rem;color:var(--im);margin-bottom:.75rem;line-height:1.65">Has Catholic Companion made a difference to your faith, your family, or someone you shared it with? Tell us.</p>
    <input type="text" placeholder="Your name (or Anonymous)">
    <textarea rows="4" placeholder="Your story..."></textarea>
    <button onclick="alert('Thank you for sharing. Your testimony will be reviewed and may be featured with your permission. God bless you.')">Share your story →</button>
    </div>`;
  }
}

/* ── CHILDREN ──────────────────────────────────────────────────────── */
function buildStoryGrids(){
  const stories=[
    {emoji:"🌊",title:"Noah and the Rainbow",desc:"A story about trust in God",age:"Ages 4–8"},
    {emoji:"🌟",title:"The Star of Bethlehem",desc:"The night Jesus was born",age:"Ages 3–7"},
    {emoji:"🦁",title:"Daniel in the Lions' Den",desc:"When God protects the faithful",age:"Ages 5–9"},
    {emoji:"🍞",title:"The Feeding of the Five Thousand",desc:"How Jesus fed a hungry crowd",age:"Ages 4–8"},
    {emoji:"🚪",title:"The Good Shepherd",desc:"How Jesus never stops looking for us",age:"Ages 3–7"},
    {emoji:"🌅",title:"The Resurrection",desc:"The best Sunday morning ever",age:"Ages 5–10"},
  ];
  document.getElementById('story-grid').innerHTML=stories.map(s=>`
    <div class="story-card" onclick="alert('${s.title}\\n\\nThis animated story will play in the full app with narration, colourful illustrations, and a short prayer at the end.\\n\\nAge: ${s.age}')">
      <span class="story-emoji">${s.emoji}</span>
      <div class="story-title">${s.title}</div>
      <div class="story-desc">${s.desc}</div>
      <div class="story-age">${s.age}</div>
    </div>`).join('');
  const saints=[
    {emoji:"🌹",title:"St. Thérèse",desc:"The Little Flower",age:"Ages 6–12"},
    {emoji:"⚡",title:"St. Patrick",desc:"Apostle of Ireland",age:"Ages 5–10"},
    {emoji:"📖",title:"St. Thomas Aquinas",desc:"The Dumb Ox who filled the world",age:"Ages 8–14"},
    {emoji:"🎨",title:"Bl. Fra Angelico",desc:"The monk who painted heaven",age:"Ages 7–13"},
    {emoji:"💻",title:"Bl. Carlo Acutis",desc:"The modern saint",age:"Ages 8–16"},
    {emoji:"🌍",title:"St. Francis Xavier",desc:"Apostle of the East",age:"Ages 8–14"},
  ];
  document.getElementById('saints-grid').innerHTML=saints.map(s=>`
    <div class="story-card" onclick="alert('${s.title}\\n\\nThis saint adventure story will play in the full app with animated illustrations, a quiz, and the saint\\'s special prayer.\\n\\n${s.age}')">
      <span class="story-emoji">${s.emoji}</span>
      <div class="story-title">${s.title}</div>
      <div class="story-desc">${s.desc}</div>
      <div class="story-age">${s.age}</div>
    </div>`).join('');
}

/* ── FORMATION ─────────────────────────────────────────────────────── */
function buildFormationList(){
  const paths=[
    {icon:"✝",bg:"rgba(139,26,14,.1)",title:"RCIA — Journey into the Church",desc:"A complete companion for adults exploring or entering the Catholic faith. 32 weeks of guided formation with readings, reflections, and discussion.",weeks:"32 weeks · self-paced · with human guide option"},
    {icon:"🕊",bg:"rgba(26,58,107,.1)",title:"Confirmation Preparation",desc:"For young people and adults preparing for the Sacrament of Confirmation. Scripture, Catechism, the gifts of the Holy Spirit, and choosing a patron saint.",weeks:"12 weeks · youth and adult versions"},
    {icon:"💍",bg:"rgba(42,100,42,.1)",title:"Marriage Preparation",desc:"A rich course for engaged couples: the theology of marriage, Natural Family Planning, communication, and the sacramental life of a Catholic home.",weeks:"8 weeks · for engaged couples"},
    {icon:"📖",bg:"rgba(107,84,26,.1)",title:"Lay Ministry Formation",desc:"For parish catechists, readers, Extraordinary Ministers, and those called to serve in parish life. Grounded in Scripture, Tradition, and practical ministry.",weeks:"16 weeks · certificate on completion"},
    {icon:"🔥",bg:"rgba(139,26,14,.08)",title:"Deep Discipleship",desc:"For devout Catholics who want to go further: the interior life, lectio divina, the Liturgy of the Hours, spiritual direction, and the great mystics.",weeks:"Ongoing · for those already committed to daily prayer"},
  ];
  document.getElementById('formation-list').innerHTML=paths.map(p=>`
    <div class="formation-card" onclick="alert('${p.title}\\n\\n${p.desc}\\n\\n${p.weeks}\\n\\nFull formation courses launch in Stage 2. Register your interest at: formation@catholiccompanion.com')">
      <div class="fc-icon" style="background:${p.bg}">${p.icon}</div>
      <div>
        <div class="fc-title">${p.title}</div>
        <div class="fc-desc">${p.desc}</div>
        <div class="fc-weeks">${p.weeks}</div>
      </div>
    </div>`).join('');
}

/* ── PODCASTS ──────────────────────────────────────────────────────── */
function buildPodcastList(){
  const pods=[
    {thumb:"📖",title:"Bible in a Year",host:"Fr. Mike Schmitz · Ascension Press",latest:"Ep. 365: The Book of Revelation — the Wedding Feast of the Lamb",cat:"Scripture"},
    {thumb:"🙏",title:"The Catholic Moment",host:"Bishop Robert Barron · Word on Fire",latest:"Episode 122: Why the New Atheists Still Haven't Won",cat:"Apologetics"},
    {thumb:"✝",title:"The Good Catholic",host:"Nick Carpenter · Good Catholic",latest:"Ep. 88: How to Pray When Prayer Feels Impossible",cat:"Spirituality"},
    {thumb:"📿",title:"Pints with Aquinas",host:"Matt Fradd",latest:"Ep. 301: Is Purgatory in the Bible? With Dr. Scott Hahn",cat:"Theology"},
    {thumb:"🌍",title:"Catholic Sprouts",host:"Jennifer Milius",latest:"Ep. 45: Teaching children about the saints",cat:"Family"},
    {thumb:"⚜",title:"EWTN Daily Radio",host:"EWTN Global Catholic Radio",latest:"Today's Mass and Morning Prayer live from EWTN",cat:"Daily Mass"},
  ];
  document.getElementById('podcast-list').innerHTML=pods.map(p=>`
    <div class="pod-card">
      <div class="pod-thumb">${p.thumb}</div>
      <div style="flex:1">
        <div class="pod-title">${p.title}</div>
        <div class="pod-host">${p.host}</div>
        <div class="pod-latest">${p.latest}</div>
      </div>
      <button class="pod-play" onclick="alert('Opening ${p.title}\\n\\nIn production: the episode plays directly in the Catholic Companion audio player. You can also find this podcast on Apple Podcasts, Spotify, and all major podcast apps.')">▶ Play</button>
    </div>`).join('');
}

/* ── SEEKER ────────────────────────────────────────────────────────── */
function buildSeekerContent(){
  const qs=[
    {q:"Is there actually a God?",a:"This is the most honest question you can ask. Philosophers, scientists, and ordinary people have wrestled with it for millennia. The Catholic tradition doesn't ask you to suspend your reason — it asks you to use it fully. From the universe's beginning to the fine-tuning that makes life possible, from the human capacity for love and beauty to the deep sense of moral obligation most people feel — there are serious arguments that point toward a Creator. We recommend starting with one simple question: why is there something rather than nothing?"},
    {q:"Who was Jesus — really?",a:"Jesus of Nazareth is the best-documented figure of the ancient world. His existence is not in serious historical dispute. What is disputed is His claim — recorded in multiple early sources — to be the Son of God. C.S. Lewis put it simply: a man who said the things Jesus said was either a liar, a lunatic, or exactly who He claimed to be. The evidence — His teachings, the empty tomb, the transformation of His frightened disciples into people who died for their testimony — points in one direction."},
    {q:"Why is there so much suffering if God is good?",a:"This is the most serious objection to faith, and it deserves an honest answer rather than a quick one. The Catholic tradition does not explain suffering away — it walks into it. God did not watch from a distance while humanity suffered. He entered suffering Himself, in the person of Jesus Christ, who was tortured and executed. The Cross is not God's absence from suffering — it is His presence in its deepest depths. The question is not whether suffering makes sense of God, but whether God makes sense of suffering."},
    {q:"What happens when we die?",a:"The Catholic faith teaches that death is not the end of a person but a transition. What you are — your memory, your relationships, your capacity for love and knowledge — does not simply stop. The resurrection of Jesus Christ is the evidence for this claim: a bodily resurrection, witnessed by hundreds, recorded in documents written within decades of the event. Heaven is not a vague spiritual state but a real encounter with the Source of all love, truth, and beauty — the God who made you for Himself."},
    {q:"How do I start? Where do I go?",a:"You're already starting — by asking questions. The next step is simply this: find a Catholic church near you and attend a Sunday Mass. You don't need to understand everything. You don't need to be perfect. Come, sit at the back if you want, and just watch and listen. You will be welcome. If you want to learn more formally, ask about RCIA — the Church's formation process for those exploring the faith. There is no obligation, no pressure, and no judgement. Just an open door."},
  ];
  document.getElementById('seeker-content').innerHTML=qs.map((q,i)=>`
    <div class="seeker-card" id="sq${i}" onclick="tog('sq${i}');this.classList.toggle('open')">
      <span class="seeker-arr">›</span>
      <div class="seeker-q">${q.q}</div>
      <div class="seeker-a">${q.a}</div>
    </div>`).join('')+
    `<div class="prayer-panel" style="margin-top:1.25rem">
      <svg class="pp-cx" width="48" height="67" viewBox="0 0 60 90" fill="var(--gp)"><use href="#cx"/></svg>
      <div class="p-lbl">If you want to pray — here is a beginning</div>
      <div class="p-txt">God, if you are there, I want to know the truth. I am not sure what I believe. But I am looking. Help me to find what is real. Amen.</div>
    </div>`;
}

/* ── VOCATIONS ─────────────────────────────────────────────────────── */
function buildVocList(){
  const vocs=[
    {type:"Ordained Ministry",title:"The Diocesan Priesthood",desc:"Called to serve God's people in a diocese — celebrating the sacraments, preaching the Word, and accompanying the faithful through every stage of life. Formation typically takes 6–8 years in seminary.",link:"Find seminaries in your diocese"},
    {type:"Ordained Ministry",title:"The Permanent Diaconate",desc:"Married or single men called to serve as deacons — baptising, witnessing marriages, proclaiming the Gospel, preaching, and serving the poor as a 'servant of the servants of God'.",link:"Find diaconate formation programmes"},
    {type:"Consecrated Life",title:"Religious Life — Men",desc:"Called to live in community under the vows of poverty, chastity, and obedience. Hundreds of active orders from Dominicans and Franciscans to Benedictines and Jesuits — each with a distinct charism.",link:"Find religious communities for men"},
    {type:"Consecrated Life",title:"Religious Life — Women",desc:"The Church has hundreds of active women's religious communities — contemplative, apostolic, and mixed — each offering a different path of total consecration to God.",link:"Find religious communities for women"},
    {type:"Lay Vocation",title:"Marriage and Family",desc:"The most common vocation — the domestic Church, where husband and wife make Christ's love visible, and where children first encounter God through the love of their parents.",link:"Marriage preparation resources"},
    {type:"Lay Vocation",title:"Consecrated Virginity",desc:"A little-known vocation — women consecrated by the bishop to live in the world as brides of Christ, without entering a religious community. One of the oldest vocations in the Church.",link:"Learn about consecrated virginity"},
  ];
  document.getElementById('voc-list').innerHTML=vocs.map(v=>`
    <div class="voc-card">
      <div class="voc-type">${v.type}</div>
      <div class="voc-title">${v.title}</div>
      <div class="voc-desc">${v.desc}</div>
      <div class="voc-link" onclick="alert('${v.link}\\n\\nVocations directory with search by location and order launches in Stage 2.\\n\\nFor immediate help: vocations@catholiccompanion.com')">${v.link} →</div>
    </div>`).join('');
}

/* ── NEWS ROOM ─────────────────────────────────────────────────────── */
function buildNewsList(){
  const news=[
    {cat:"Vatican",headline:"Pope Leo XIV leads Angelus prayer — reflects on the Parable of the Sower",source:"Vatican News",time:"2h ago"},
    {cat:"Africa",headline:"Diocese of Lagos, Nigeria celebrates 200th anniversary — 150,000 attend outdoor Mass",source:"Catholic Herald",time:"4h ago"},
    {cat:"Asia Pacific",headline:"World Youth Day 2027 confirmed for Manila — registration opens",source:"Agenzia Fides",time:"6h ago"},
    {cat:"Beatification",headline:"22 martyrs of Korea beatified by Pope Leo XIV in Seoul",source:"Vatican News",time:"1d ago"},
    {cat:"Jubilee",headline:"Vatican announces conditions for Jubilee 2025 special plenary indulgence",source:"Vatican News",time:"1d ago"},
    {cat:"Canonisation",headline:"EWTN: Diocese of Birmingham opens Mother Angelica's canonisation cause",source:"EWTN News",time:"2d ago"},
    {cat:"Nigeria",headline:"Nigerian Bishops' Conference approves new Igbo translation of the Roman Missal",source:"Catholic Bishops' Conference of Nigeria",time:"3d ago"},
    {cat:"Mission",headline:"Synod on Synodality: all dioceses now entering implementation phase",source:"Vatican News",time:"3d ago"},
  ];
  document.getElementById('news-list').innerHTML=news.map(n=>`
    <div class="news-card" onclick="alert('${n.headline}\\n\\nFull article available at ${n.source}\\n\\nIn production, this links directly to the verified Catholic news source.')">
      <div><div class="news-category">${n.cat}</div></div>
      <div style="flex:1">
        <div class="news-headline">${n.headline}</div>
        <div class="news-source">${n.source}</div>
      </div>
      <div class="news-time">${n.time}</div>
    </div>`).join('');
}

/* ── ARTICLES ──────────────────────────────────────────────────────── */
function buildArticlesList(){
  const arts=[
    {cat:"Scripture",title:"Why the Responsorial Psalm Is Not an Interruption",author:"Fr. Timothy O'Brien, STL",excerpt:"The Psalm is not a pause between the readings. It is the assembly's inspired response to what God has just said — and understanding this changes everything about how we pray the Mass."},
    {cat:"Theology",title:"Seven Reasons the Eucharist Cannot Be Merely Symbolic",author:"Dr. Adaeze Nwosu, University of Ibadan",excerpt:"The historical, scriptural, and patristic case for the Real Presence is overwhelming. Here is why the symbolic interpretation requires us to ignore what the early Church actually believed."},
    {cat:"Spirituality",title:"What St. Thérèse Really Means by the Little Way",author:"Sr. Maria Consolata, OCD",excerpt:"'Little' does not mean 'easy.' The Little Way is a radical programme of love — one that demands everything and offers everything in return."},
    {cat:"Apologetics",title:"On the Silence of God — An Honest Response to Doubt",author:"A lay contributor (anonymous)",excerpt:"I lost my faith for five years. This is what brought me back — not a clever argument, but a rereading of the Book of Job."},
  ];
  document.getElementById('articles-list').innerHTML=arts.map(a=>`
    <div class="article-card">
      <div class="art-category">${a.cat}</div>
      <div class="art-title">${a.title}</div>
      <div class="art-author">By ${a.author}</div>
      <div class="art-excerpt">${a.excerpt}</div>
      <div class="art-read-more" onclick="alert('Full article available in the Catholic Companion Review.\\n\\nThis is a demo. In production, full articles are published with rich formatting, footnotes, and author profiles.')">Read full article →</div>
    </div>`).join('');
}

/* ── LIBRARY ───────────────────────────────────────────────────────── */
function buildLibGrid(){
  const items=[
    {g:"🔗",t:"Biblical Typology",d:"OT types and their NT fulfilments",b:"live"},
    {g:"📖",t:"Catechism (CCC)",d:"All 2,865 paragraphs, searchable",b:"s2"},
    {g:"🏛",t:"Councils of the Church",d:"All 21 Ecumenical Councils",b:"s2"},
    {g:"✨",t:"Approved Apparitions",d:"Guadalupe · Lourdes · Fátima · Akita",b:"s2"},
    {g:"📜",t:"Papal Encyclicals",d:"Rerum Novarum to today",b:"live"},
    {g:"📿",t:"Catholic Devotions",d:"Rosary · Divine Mercy · Stations",b:"s2"},
    {g:"🙏",t:"The Seven Sacraments",d:"Biblical foundations and Rites",b:"s2"},
    {g:"⛪",t:"Pilgrimage Sites",d:"Global guide with indulgences",b:"s2"},
    {g:"📜",t:"Indulgences",d:"What they are · conditions · list",b:"s2"},
  ];
  document.getElementById('lib-grid').innerHTML=items.map(item=>`
    <div style="background:#fff;border:1px solid ${item.b==='live'?'rgba(201,150,58,.3)':'var(--vs)'};border-radius:var(--r);padding:1.1rem;cursor:pointer;transition:all .12s;display:flex;flex-direction:column;gap:.35rem" onclick="alert('${item.t}\\n\\n${item.b==='live'?'Available now — explore in the full platform.':'Coming in Stage 2. Email: hello@catholiccompanion.com to be notified.'}')" onmouseover="this.style.transform='translateY(-2px)';this.style.borderColor='var(--gt)'" onmouseout="this.style.transform='';this.style.borderColor='${item.b==='live'?'rgba(201,150,58,.3)':'var(--vs)'}'">
      <div style="font-size:1.4rem">${item.g}</div>
      <div style="font-family:'Cinzel',serif;font-size:.82rem;color:var(--ink)">${item.t}</div>
      <div style="font-size:.82rem;color:var(--il);flex:1">${item.d}</div>
      <div style="font-family:'Cinzel',serif;font-size:.58rem;letter-spacing:.06em;text-transform:uppercase;color:${item.b==='live'?'var(--cr)':'var(--if)'}">${item.b==='live'?'Available now →':'Coming Stage 2'}</div>
    </div>`).join('');
}

/* ── STORE ─────────────────────────────────────────────────────────── */
function buildStoreGrid(){
  const items=[
    {g:"📖",t:"Catholic Bible: RSVCE",by:"Ignatius Press",p:"From £24.99",c:"Bibles"},
    {g:"📚",t:"Introduction to the Devout Life",by:"St. Francis de Sales",p:"From £9.99",c:"Books"},
    {g:"📚",t:"The Story of a Soul",by:"St. Thérèse of Lisieux",p:"From £8.99",c:"Books"},
    {g:"✝",t:"Crucifix — San Damiano",by:"Franciscan Friars",p:"From £18.99",c:"Sacramentals"},
    {g:"📿",t:"Rosary — olive wood",by:"Bethlehem Artisans",p:"From £14.99",c:"Rosaries"},
    {g:"⚜",t:"Chasuble — Roman cut, green",by:"Slabbinck",p:"From £189.99",c:"Vestments"},
    {g:"🖼",t:"Icon of Christ Pantocrator",by:"Sacred Images",p:"From £89.99",c:"Icons"},
    {g:"⭐",t:"Miraculous Medal — gold-plated",by:"Ghirelli",p:"From £9.99",c:"Devotional"},
  ];
  document.getElementById('store-grid').innerHTML=items.map(item=>`
    <div style="background:#fff;border:1px solid var(--vs);border-radius:var(--r);overflow:hidden;cursor:pointer;transition:all .12s" onclick="alert('In production: opens to verified Catholic retailer. Catholic Companion earns a small commission.')" onmouseover="this.style.transform='translateY(-2px)';this.style.borderColor='var(--gt)'" onmouseout="this.style.transform='';this.style.borderColor='var(--vs)'">
      <div style="background:var(--vw);height:100px;display:flex;align-items:center;justify-content:center;font-size:2rem;border-bottom:1px solid var(--vs)">${item.g}</div>
      <div style="padding:.75rem .85rem">
        <div style="font-family:'Cinzel',serif;font-size:.58rem;letter-spacing:.08em;text-transform:uppercase;color:var(--cr);margin-bottom:.15rem">${item.c}</div>
        <div style="font-size:.88rem;color:var(--ink);margin-bottom:.18rem;line-height:1.3">${item.t}</div>
        <div style="font-size:.78rem;color:var(--if);font-style:italic;margin-bottom:.28rem">${item.by}</div>
        <div style="font-family:'Cinzel',serif;font-size:.82rem;color:var(--gld);margin-bottom:.38rem">${item.p}</div>
        <button style="width:100%;background:var(--cd);color:var(--gp);border:none;border-radius:5px;padding:.35rem;font-family:'Cinzel',serif;font-size:.62rem;letter-spacing:.06em;cursor:pointer">View & Buy →</button>
      </div>
    </div>`).join('');
}

/* ── Q&A ───────────────────────────────────────────────────────────── */
function buildQAContent(){
  const qas=[
    {c:"Doctrine",q:"Is the Pope infallible about everything he says?",a:"<p>No. Papal infallibility is precisely defined (Vatican I, 1870) — it applies only when the Pope speaks <em>ex cathedra</em>, deliberately defining a doctrine of faith or morals as binding on the whole Church. This has happened very rarely: the Immaculate Conception (1854) and the Assumption of Our Lady (1950) are the clearest modern examples. Most of what the Pope says does not qualify, though it deserves the respect owed to the Vicar of Christ.</p>"},
    {c:"Sacraments",q:"Can I receive Holy Communion at a Protestant church?",a:"<p>Generally, no. The Eucharist is the sacrament of unity, and full unity between Catholics and most Protestant communities has not yet been achieved. Receiving Communion at a Protestant service would imply a unity that does not yet exist. Certain exceptions exist in emergencies for Eastern Churches whose Eucharist the Catholic Church recognises as valid (CIC can.844).</p>"},
    {c:"Prayer",q:"Does God hear the prayers of non-Catholics?",a:"<p>Yes. God hears the sincere prayer of every person who turns to Him. He is the Father of all humanity and His Son died for all people. The Church teaches that the Holy Spirit works beyond the visible boundaries of the Church (CCC §819, §843). The Church believes she holds the fullness of the means of salvation — but this does not mean God is deaf to sincere prayer wherever it is offered.</p>"},
    {c:"Moral theology",q:"Is it a sin to miss Mass on Sunday?",a:"<p>Deliberately missing Mass on Sunday or a Holy Day of Obligation without a serious reason is a grave matter. The Catechism states that those who deliberately fail in this obligation commit a grave sin (CCC §2181). However, illness, care of the sick, genuine impossibility, and similar reasons excuse the obligation. Scrupulosity should always be addressed with a good confessor.</p>"},
    {c:"Scripture",q:"Why do Catholics have extra books in their Bible?",a:"<p>The Catholic Old Testament contains seven Deuterocanonical books — Tobit, Judith, 1 and 2 Maccabees, Wisdom, Sirach, and Baruch — plus additional sections of Esther and Daniel, not in most Protestant Bibles. These were part of the Greek Old Testament (the Septuagint) used by the early Church and quoted by the New Testament authors. Luther removed them partly because they support doctrines he was questioning — including prayers for the dead (2 Maccabees 12:46).</p>"},
    {c:"Prayer",q:"What is Lectio Divina and how do I practise it?",a:"<p>Lectio Divina moves through four movements: <strong>Lectio</strong> (read slowly, notice any word that catches you); <strong>Meditatio</strong> (stay with that word, let it resonate); <strong>Oratio</strong> (respond to God — let meditation become conversation); <strong>Contemplatio</strong> (rest in His presence without words). A fifth movement is sometimes added: <strong>Actio</strong> — what does God's word ask of me today?</p>"},
  ];
  document.getElementById('qa-content').innerHTML=
    qas.map((q,i)=>`<div class="acc-item" id="qa${i}">
      <div class="acc-head" onclick="tog('qa${i}')">
        <span class="acc-num" style="font-size:.58rem;background:rgba(139,26,14,.08);padding:2px 8px;border-radius:10px;color:var(--cr);letter-spacing:.07em">${q.c}</span>
        <span class="acc-title">${q.q}</span><span class="acc-arr">›</span></div>
      <div class="acc-body">${q.a}</div></div>`).join('')+
    `<div class="prayer-panel" style="margin-top:1.1rem">
      <svg class="pp-cx" width="48" height="67" viewBox="0 0 60 90" fill="var(--gp)"><use href="#cx"/></svg>
      <div class="p-lbl">Have a question not answered here?</div>
      <div class="p-txt" style="font-size:.88rem">Complex questions are reviewed by a qualified theologian. Email: questions@catholiccompanion.com</div>
    </div>`;
}

/* ── DEPTH ─────────────────────────────────────────────────────────── */
function buildDepthCards(){
  const DEPTHS=[
    {id:"beginner",name:"Beginner — I'm new to this",desc:"Accessible paraphrase alongside RSVCE. Short welcoming reflection. Saint in three sentences. One highlighted takeaway.",ideal:"New or returning Catholics · RCIA candidates · teenagers"},
    {id:"growing",name:"Growing — I attend Mass regularly",desc:"Full RSVCE reading. Medium reflection. Saint biography. Catechism link. Discussion questions.",ideal:"Regular Mass-goers · families · small faith groups"},
    {id:"devout",name:"Devout — I pray daily",desc:"Extended reflection from Church Fathers. Catechism §§ numbers. Typology cross-references.",ideal:"Daily Mass-goers · Third Order · those in spiritual direction"},
    {id:"scholar",name:"Scholar — theological training",desc:"Greek/Hebrew word studies. Patristic citations. Lectionary cross-references. Denzinger sources.",ideal:"Priests · seminarians · theology students · permanent deacons"}
  ];
  document.getElementById('depth-cards').innerHTML=DEPTHS.map(d=>`
    <div class="dc${d.id===depth?' sel':''}" data-d="${d.id}" onclick="selDepth('${d.id}')">
      <div class="dc-name">${d.name}</div>
      <div class="dc-desc">${d.desc}</div>
      <div class="dc-ideal">${d.ideal}</div>
    </div>`).join('');
}
function openDepth(){pDepth=depth;buildDepthCards();document.getElementById('depth-overlay').classList.add('open');}
function closeDepth(){document.getElementById('depth-overlay').classList.remove('open');}
function selDepth(d){pDepth=d;document.querySelectorAll('.dc').forEach(c=>c.classList.toggle('sel',c.dataset.d===d));}
function confirmDepth(){depth=pDepth;document.getElementById('depth-btn').textContent={beginner:'Beginner',growing:'Growing',devout:'Devout',scholar:'Scholar'}[depth]+' ▾';closeDepth();renderDay(curDay);}

/* ── TEXT-TO-SPEECH ────────────────────────────────────────────────── */
function checkTTSSupport(){
  if(!('speechSynthesis' in window)){
    document.getElementById('tts-btn').style.display='none';
  }
}
function toggleTTSPanel(){ttsOpen=!ttsOpen;document.getElementById('tts-panel').classList.toggle('open',ttsOpen);}
function selectVoice(idx,btn){
  selVoice=idx;
  document.querySelectorAll('.tts-voice-btn').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
}
function getVoiceForIdx(idx){
  const voices=synth.getVoices();
  if(!voices.length)return null;
  const en=voices.filter(v=>v.lang.startsWith('en'));
  const pool=en.length?en:voices;
  // Sort to prefer local/natural voices over remote
  const local=pool.filter(v=>v.localService);
  const all=local.length?local:pool;
  // Voice preference strategies
  const male=all.filter(v=>/male|man|james|george|david|daniel|thomas|arthur|ryan/i.test(v.name)&&!/female/i.test(v.name));
  const female=all.filter(v=>/female|woman|karen|samantha|victoria|lisa|alice|emily|kate|fiona/i.test(v.name));
  const slow=all.filter(v=>/slow|elder|senior|albert|fred/i.test(v.name));
  const warm=female.length?female:all;
  const young=all.filter(v=>/junior|child|young|zoe|moira/i.test(v.name));
  const picks=[
    male.length?male[0]:all[0],
    female.length?female[0]:all[Math.min(1,all.length-1)],
    slow.length?slow[0]:(male.length>1?male[1]:all[0]),
    warm.length?warm[0]:all[0],
    young.length?young[0]:all[Math.min(all.length-1,all.length-1)]
  ];
  const v=picks[idx]||all[0];
  return v;
}
function ttsRead(){
  if(isSpeaking){ttsStop();}
  // Get readable text from current page
  const activePage=document.querySelector('.page.active');
  if(!activePage)return;
  const textNodes=activePage.querySelectorAll('p,.card-text,.reflection,.acc-body,.p-txt,.seeker-a,.voc-desc,.fc-desc,.tc-text,.art-excerpt,.pr-req,.pod-latest,.news-headline');
  let text='';
  textNodes.forEach(n=>{if(n.offsetParent!==null)text+=n.textContent.trim()+'. ';});
  if(!text.trim()){alert('No readable text found on this page.');return;}
  const utt=new SpeechSynthesisUtterance(text.substring(0,5000));
  // Rate and pitch per voice type for smoother delivery
  const rateMap=[0.88,0.9,0.78,0.85,0.95];
  const pitchMap=[0.95,1.05,0.85,1.0,1.15];
  utt.rate=rateMap[selVoice]||0.88;
  utt.pitch=pitchMap[selVoice]||1.0;
  utt.volume=1.0;
  const voice=getVoiceForIdx(selVoice);
  if(voice)utt.voice=voice;
  utt.onstart=()=>{isSpeaking=true;document.getElementById('tts-btn').classList.add('speaking');};
  utt.onend=()=>{isSpeaking=false;document.getElementById('tts-btn').classList.remove('speaking');};
  utt.onerror=()=>{isSpeaking=false;document.getElementById('tts-btn').classList.remove('speaking');};
  synth.speak(utt);
  document.getElementById('tts-panel').classList.remove('open');ttsOpen=false;
}
function ttsPause(){synth.paused?synth.resume():synth.pause();}
function ttsStop(){synth.cancel();isSpeaking=false;document.getElementById('tts-btn').classList.remove('speaking');}

/* ── FULLSCREEN ────────────────────────────────────────────────────── */
function toggleFullscreen(){
  const vp=document.querySelector('.vplayer');
  if(!document.fullscreenElement){
    if(vp.requestFullscreen)vp.requestFullscreen();
    else if(vp.webkitRequestFullscreen)vp.webkitRequestFullscreen();
    document.getElementById('fs-btn').textContent='✕';
  }else{
    if(document.exitFullscreen)document.exitFullscreen();
    document.getElementById('fs-btn').textContent='⛶';
  }
}
document.addEventListener('fullscreenchange',()=>{
  if(!document.fullscreenElement)document.getElementById('fs-btn').textContent='⛶';
});

/* ── UTILS ─────────────────────────────────────────────────────────── */
function tog(id){document.getElementById(id).classList.toggle('open');}
function openSearch(){document.getElementById('search-overlay').classList.add('open');setTimeout(()=>document.getElementById('search-input').focus(),100);}
function closeSearch(){document.getElementById('search-overlay').classList.remove('open');}
function doSearch(q){
  const el=document.getElementById('search-results');
  if(!q.trim()){el.innerHTML='';return;}
  const items=[
    {label:'Today's readings',desc:'Daily scripture — First Reading, Psalm, Gospel',page:'today'},
    {label:'This week',desc:'The week's narrative arc and all seven days',page:'week'},
    {label:'The Holy Mass',desc:'Every part of Mass explained from Scripture',page:'mass'},
    {label:'Live Mass',desc:'24/7 live Mass streams worldwide',page:'live'},
    {label:'Adoration',desc:'Perpetual Eucharistic adoration streams',page:'adoration'},
    {label:'Community Hub',desc:'Testimonies, prayer requests, faith sharing',page:'community'},
    {label:'Children's World',desc:'Bible stories and saint adventures for children',page:'children'},
    {label:'Formation Paths',desc:'RCIA, Confirmation, Marriage prep, Lay ministry',page:'formation'},
    {label:'Catholic Podcasts',desc:'Top Catholic podcasts in one place',page:'podcasts'},
    {label:'New here?',desc:'Seeker journey — start with honest questions',page:'seeker'},
    {label:'Vocations Centre',desc:'Discernment tools and religious life guide',page:'vocations'},
    {label:'Catholic News Room',desc:'Verified, curated Catholic news',page:'news'},
    {label:'Curated Articles',desc:'Theology, Scripture, spirituality from contributors',page:'articles'},
    {label:'Library',desc:'Typology, encyclicals, catechism, devotions',page:'library'},
    {label:'Catholic Store',desc:'Bibles, books, sacramentals, vestments, rosaries',page:'store'},
    {label:'Q&A',desc:'Common questions answered by theologians',page:'qa'},
    {label:'Isaiah',desc:'First Reading — Isaiah 50:4–9',page:'today'},
    {label:'Psalm',desc:'Responsorial Psalm — Ps 69:8–10',page:'today'},
    {label:'Gospel',desc:'Holy Gospel — Mark 4:26–34',page:'today'},
    {label:'Rosary',desc:'Devotions section in the Library',page:'library'},
    {label:'Confession',desc:'Sacraments section in the Library',page:'library'},
    {label:'Saints',desc:'Saints of the day in Today's readings',page:'today'},
    {label:'St. Óscar Romero',desc:'Saint of Tuesday — martyr, Archbishop',page:'today'},
  ];
  const results=items.filter(i=>i.label.toLowerCase().includes(q.toLowerCase())||i.desc.toLowerCase().includes(q.toLowerCase()));
  if(!results.length){el.innerHTML='<p style="font-size:.9rem;color:var(--if);text-align:center;padding:1rem">No results found for "'+q+'"</p>';return;}
  el.innerHTML=results.slice(0,8).map(r=>`<div onclick="showPage('${r.page}');closeSearch()" style="padding:.75rem .9rem;border:1px solid var(--vs);border-radius:8px;margin-bottom:.45rem;cursor:pointer;transition:border-color .12s" onmouseover="this.style.borderColor='var(--gt)'" onmouseout="this.style.borderColor='var(--vs)'">
    <div style="font-family:'Cinzel',serif;font-size:.82rem;color:var(--ink);margin-bottom:.15rem">${r.label}</div>
    <div style="font-size:.82rem;color:var(--if)">${r.desc}</div>
  </div>`).join('');
}

function doShare(){
  const msg='Daily Catholic readings — '+DAYS[curDay].full;
  if(navigator.share)navigator.share({title:'Catholic Companion',text:msg,url:window.location.href});
  else if(navigator.clipboard)navigator.clipboard.writeText(window.location.href).then(()=>alert('Link copied!'));
  else alert('Share: '+window.location.href);
}
