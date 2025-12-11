const HARMFUL_TERM_DATA = {
  generated: "2025-12-11T20:06:18.646Z",
  uniqueTerms: 612,
  totalTerms: 1186,
  categoryBreakdown: [
    { name: "racist", count: 737 },
    { name: "homophobic", count: 84 },
    { name: "disability", count: 66 },
    { name: "islamophobic", count: 46 },
    { name: "sectarian", count: 44 },
    { name: "antisemitic", count: 43 },
    { name: "sexual-objectification", count: 34 },
    { name: "non-believers", count: 17 },
    { name: "prostitution", count: 16 },
    { name: "anti-lgbtq", count: 15 },
    { name: "christophobic", count: 15 },
    { name: "misogynistic", count: 15 },
    { name: "ageist", count: 11 },
    { name: "xenophobic", count: 10 },
    { name: "mental-health", count: 8 },
    { name: "transphobic", count: 8 },
    { name: "hinduphobic", count: 6 },
    { name: "religious-minorities", count: 5 },
    { name: "misandristic", count: 3 },
    { name: "sikhophobic", count: 2 },
    { name: "alt-right", count: 1 },
    { name: "anti-conservative", count: 0 },
    { name: "anti-liberal", count: 0 },
    { name: "anti-science", count: 0 },
    { name: "bad-faith", count: 0 },
    { name: "climate-change-denial", count: 0 },
    { name: "conservative", count: 0 },
    { name: "conspiracy", count: 0 },
    { name: "deflection", count: 0 },
    { name: "dehumanization", count: 0 },
    { name: "drugs", count: 0 },
    { name: "emotional-dismissal", count: 0 },
    { name: "fascist", count: 0 },
    { name: "illegality", count: 0 },
    { name: "incel", count: 0 },
    { name: "liberal", count: 0 },
    { name: "localist", count: 0 },
    { name: "nationalist", count: 0 },
    { name: "paedophilia", count: 0 },
    { name: "personal-responsibility", count: 0 },
    { name: "pseudoscience", count: 0 },
    { name: "regionalist", count: 0 },
    { name: "religious-populism", count: 0 },
    { name: "self-harm", count: 0 },
    { name: "sexual-content", count: 0 },
    { name: "violence", count: 0 },
    { name: "welfare-chauvinism", count: 0 },
    { name: "white-supremacist", count: 0 }
  ],
  sourceBreakdown: [
    { name: "wiki", count: 824 },
    { name: "goodboy", count: 270 },
    { name: "wsp", count: 49 },
    { name: "citg", count: 36 },
    { name: "aos", count: 7 },
    { name: "adl", count: 0 },
    { name: "silent_signals", count: 0 },
    { name: "swu", count: 0 }
  ],

  terms: [
    {
      root: "Womxn",
      variations: [
        "Womyn",
        "Wymmin"
      ],
      category: "misogynistic",
      definition: "Alternative spelling of \"woman\" often used in anti-feminist or gender-critical discourse",
      source: "goodboy"
    },
    {
      root: "Blacks",
      variations: [],
      category: "racist",
      definition: "A term that reduces people to the color of their skin, treating them as a monolithic group rather than as full human beings, and is widely considered dehumanizing and offensive in most contexts",
      source: "goodboy"
    },
    {
      root: "Mulatto",
      variations: [
        "Mulatta",
        "Mulata",
        "Mulatto woman",
        "Mulatto man",
        "Mulatto people"
      ],
      category: "racist",
      definition: "A person of of mixed Black and white ancestry. Colonial-era slur originating from a term meaning \"mule\". Carries dehumanizing, anti-Black, and racist connotations",
      source: "goodboy"
    },
    {
      root: "Rheinlandbastard",
      variations: [
        "Rhineland bastard"
      ],
      category: "racist",
      definition: "A derogatory term used in Nazi Germany to describe Afro-Germans, born of mixed-race relationships between German women and black African men of the French Army who were stationed in the Rhineland during its occupation by France after World War I",
      source: "wiki"
    },
    {
      root: "Eskimo",
      variations: [],
      category: "racist",
      definition: "Inuit or Yupik people. This term is outdated and considered offensive",
      source: "goodboy"
    },
    {
      root: "Libtard",
      variations: [],
      category: "alt-right",
      definition: "A liberal person. Portmanteau of \"liberal\" and \"retard\"",
      source: "goodboy"
    },
    {
      root: "Backslider",
      variations: [
        "Backsliding"
      ],
      category: "non-believers",
      definition: "Someone who has left a faith or is viewed as abandoning religious morals",
      source: "goodboy"
    },
    {
      root: "Godless",
      variations: [],
      category: "non-believers",
      definition: "Someone who does not revere a deity. Implies a perceived lack of morality, based on the idea that belief in God is necessary for a moral compass",
      source: "goodboy"
    },
    {
      root: "Faithless",
      variations: [],
      category: "non-believers",
      definition: "Someone who does not follow a faith. Implies a lacks of principles or loyalty, based on the idea that belief in God is necessary for a moral compass",
      source: "goodboy"
    },
    {
      root: "Feminazi",
      variations: [
        "Feminid",
        "Femnazi",
        "Femoid",
        "Femtrash",
        "Femoid trash",
        "Feminazi-lite",
        "Mini-feminazi"
      ],
      category: "misogynistic",
      definition: "A woman, especially feminists",
      source: "goodboy"
    },
    {
      root: "Exotic",
      variations: [],
      category: "racist",
      definition: "When applied to a person, frames them as foreign or non-white in a way that reduces them to an ethnic stereotype or objectifies them",
      source: "goodboy"
    },
    {
      root: "Exotic beauty",
      variations: [],
      category: "racist",
      definition: "A racialised form of sexual objectification that frames someone as attractive because they are foreign, unusual, or non-white, reducing them to an ethnic stereotype",
      source: "goodboy"
    },
    {
      root: "Spicy Latina",
      variations: [
        "Fiery Latina"
      ],
      category: "racist",
      definition: "Reduction of a Latina woman to an exaggeratedd, hypersexualised and aggressive caricature",
      source: "goodboy"
    },
    {
      root: "Oriental",
      variations: [
        "Oriental beauty"
      ],
      category: "racist",
      definition: "An outdated and offensive term when used to describe people of Asian descent",
      source: "goodboy"
    },
    {
      root: "Jungle fever",
      variations: [],
      category: "racist",
      definition: "A person's preference for a sexual or romantic relationship that is interracial, especially the preference of a white person for a Black person",
      source: "goodboy"
    },
    {
      root: "Yellow Fever",
      variations: [],
      category: "racist",
      definition: "A sexual obsession with East Asian women",
      source: "goodboy"
    },
    {
      root: "Fuckboy",
      variations: [
        "F-boy"
      ],
      category: "misandristic",
      definition: "A promiscuous young man who does not respect women, but uses them for sexual gratification",
      source: "goodboy"
    },
    {
      root: "Himbo",
      variations: [],
      category: "misandristic",
      definition: "An attractive but unintelligent or frivolous young man, From \"Him\" and \"Bimbo\"",
      source: "goodboy"
    },
    {
      root: "Arm candy",
      variations: [],
      category: "sexual-objectification",
      definition: "Reduction of a partner to a status symbol",
      source: "wsp"
    },
    {
      root: "Trophy wife",
      variations: [],
      category: "sexual-objectification",
      definition: "Reduction of a female partner to a status symbol",
      source: "wsp"
    },
    {
      root: "Piece of ass",
      variations: [
        "Hot piece of ass",
        "Fuck toy",
        "Cum slut",
        "Cum dumpster",
        "Cum recepticle",
        "Cock sleeve",
        "Pornified",
        "Sex object",
        "Hole"
      ],
      category: "sexual-objectification",
      definition: "Reduction of a woman to purely sexual terms",
      source: "wsp"
    },
    {
      root: "Roastie",
      variations: [
        "Roasty"
      ],
      category: "misogynistic",
      definition: "A misogynistic incel slur claiming women's genitals become \"roast beef-like\" with sexual activity, used to shame and degrade",
      source: "goodboy"
    },
    {
      root: "Bitch",
      variations: [],
      category: "misogynistic",
      definition: "A derogatory term for a woman. From the name for a female dog",
      source: "goodboy"
    },
    {
      root: "Transvestite",
      variations: [],
      category: "transphobic",
      definition: "An outdated term for people who cross-dress; commonly used as a slur against trans people",
      source: "goodboy"
    },
    {
      root: "Trutranny",
      variations: [],
      category: "transphobic",
      definition: "A transgender person. Used to suggest deceit or illegitimacy",
      source: "goodboy"
    },
    {
      root: "Trap queen",
      variations: [],
      category: "transphobic",
      definition: "A transgender woman. Used to imply deception or trickery",
      source: "goodboy"
    },
    {
      root: "Shemale",
      variations: [],
      category: "transphobic",
      definition: "A transgender person, especially a trans woman. Reclaimed by some communities but generally considered highly offensive",
      source: "goodboy"
    },
    {
      root: "Fag",
      variations: [
        "Faggot"
      ],
      category: "homophobic",
      definition: "A historically derogatory slur for gay men, used to demean or dehumanize them. In some LGBTQ+ in-group contexts it has been reclaimed, but it remains offensive and harmful in general use",
      source: "goodboy"
    },
    {
      root: "Queer",
      variations: [],
      category: "anti-lgbtq",
      definition: "An LGBTQ+ person. Has been reclaimed but often still offensive depending on the context and speaker",
      source: "goodboy"
    },
    {
      root: "Nigga",
      variations: [],
      category: "racist",
      definition: "A Black person. Has been reclaimed, but still offensive depending on the speaker",
      source: "goodboy"
    },
    {
      root: "Wrinkled old prune",
      variations: [],
      category: "ageist",
      definition: "An old person. Reference to wrinkled skin and consumption of fiber, comparing them to dehydrated plums",
      source: "wiki"
    },
    {
      root: "Spinster",
      variations: [
        "Sheng nu"
      ],
      category: "ageist",
      definition: "A woman who, in her own culture, is single beyond the age at which most people get married",
      source: "wiki"
    },
    {
      root: "Old cow",
      variations: [],
      category: "ageist",
      definition: "An older woman, especially one who is overweight or obese and homely",
      source: "wiki"
    },
    {
      root: "Old bat",
      variations: [],
      category: "disability",
      definition: "A senile older woman",
      source: "wiki"
    },
    {
      root: "Old bag",
      variations: [
        "Old hag",
        "Crone"
      ],
      category: "ageist",
      definition: "An older, unappealing and ugly woman",
      source: "wiki"
    },
    {
      root: "Okay, boomer",
      variations: [],
      category: "ageist",
      definition: "A retort to opinions that are associated with the Baby boomer generation",
      source: "wiki"
    },
    {
      root: "MILF",
      variations: [],
      category: "sexual-objectification",
      definition: "\"Mother I'd like to fuck\". Used to fetishize middle aged women. Considered sexist and ageist by some and positive or neutral by others",
      source: "wsp"
    },
    {
      root: "DILF",
      variations: [],
      category: "sexual-objectification",
      definition: "\"Daddy I'd like to fuck\". Used to fetishize middle aged men. Considered sexist and ageist by some and positive or neutral by others",
      source: "wsp"
    },
    {
      root: "GILF",
      variations: [],
      category: "sexual-objectification",
      definition: "\"Granny I'd like to fuck\". Used to fetishize older women. Considered sexist and ageist by some and positive or neutral by others",
      source: "wsp"
    },
    {
      root: "Maggot in the rice",
      variations: [
        "Maggots in the rice"
      ],
      category: "ageist",
      definition: "Used in contemporary Chinese culture to refer to baby girls; the term is typically associated with 20th century China's authoritarian \"One Child Policy\", which limited birth of children per family and also favoured male children",
      source: "wiki"
    },
    {
      root: "Lolita",
      variations: [],
      category: "sexual-objectification",
      definition: "A term for a sexualized minor child, typically a girl; the term has pedophilic connotations and is often used to fetishize or exploit vulnerable preteen girls. From the book Lolita by Vladimir Nabokov",
      source: "wsp"
    },
    {
      root: "Jailbait",
      variations: [],
      category: "sexual-objectification",
      definition: "Used to identify a person who is under the age of consent as a sexual object",
      source: "wsp"
    },
    {
      root: "Barely legal",
      variations: [
        "Fresh meat",
        "Schoolgirl fantasy"
      ],
      category: "sexual-objectification",
      definition: "A fetishizing term used to market pornography featuring young people who are \"barely legal\" (only just reached legal age of majority or the age of consent, or both)",
      source: "wsp"
    },
    {
      root: "Bed blocker",
      variations: [],
      category: "ageist",
      definition: "An older person who takes up hospital beds in a healthcare system",
      source: "wiki"
    },
    {
      root: "Mushrik",
      variations: [],
      category: "non-believers",
      definition: "A person who doesn't believe in Tawhid and practices polytheism, worships idols, saints, ancestors or graves",
      source: "wiki"
    },
    {
      root: "Murtad",
      variations: [],
      category: "non-believers",
      definition: "A person who left Islam or criticizes Islam",
      source: "wiki"
    },
    {
      root: "Kafir",
      variations: [],
      category: "non-believers",
      definition: "A person who is not a Muslim",
      source: "wiki"
    },
    {
      root: "Infidel",
      variations: [],
      category: "non-believers",
      definition: "A person who is accused of disbelief in the central tenets of one's own religion, such as members of another religion, or irreligious people",
      source: "wiki"
    },
    {
      root: "Heathen",
      variations: [
        "Pagan"
      ],
      category: "non-believers",
      definition: "A person who does not belong to a major religion",
      source: "wiki"
    },
    {
      root: "Giaour",
      variations: [],
      category: "non-believers",
      definition: "A person who is not Muslim, but especially Christians. Adapted from the Turkish \"gâvur\"",
      source: "wiki"
    },
    {
      root: "Obeah",
      variations: [],
      category: "religious-minorities",
      definition: "Practitioners of Obeah or Black Jamaicans",
      source: "wiki"
    },
    {
      root: "Voodoo",
      variations: [],
      category: "religious-minorities",
      definition: "A Vodouist or African diaspora person, particularly Haitian Americans",
      source: "wiki"
    },
    {
      root: "Clam",
      variations: [],
      category: "religious-minorities",
      definition: "A Scientologist",
      source: "wiki"
    },
    {
      root: "Devil worshipper",
      variations: [],
      category: "religious-minorities",
      definition: "A Yazidi",
      source: "wiki"
    },
    {
      root: "Fire Worshipper",
      variations: [],
      category: "religious-minorities",
      definition: "A Zoroastrian",
      source: "wiki"
    },
    {
      root: "Lassi",
      variations: [],
      category: "sikhophobic",
      definition: "A Sikh",
      source: "wiki"
    },
    {
      root: "Khalistani",
      variations: [],
      category: "sikhophobic",
      definition: "A Khalsa Sikh",
      source: "wiki"
    },
    {
      root: "Cow piss drinker",
      variations: [
        "Guamutra"
      ],
      category: "hinduphobic",
      definition: "A Hindu",
      source: "wiki"
    },
    {
      root: "Bongal",
      variations: [],
      category: "hinduphobic",
      definition: "A Bangladeshi Hindu. Used in India",
      source: "wiki"
    },
    {
      root: "Wahhabi",
      variations: [],
      category: "sectarian",
      definition: "A Salafi Muslim. Derived from the name of Salafism's founder Muhammad ibn Abd al-Wahhab",
      source: "wiki"
    },
    {
      root: "Rapefugee",
      variations: [],
      category: "islamophobic",
      definition: "A Muslim. Portmanteau of \"rape\" + \"refugee\"",
      source: "wiki"
    },
    {
      root: "Rafida",
      variations: [
        "Rawafid"
      ],
      category: "sectarian",
      definition: "Sh īʿi Muslims. Term originally denoting extremist Shīʿites who reject \"rafd\" the caliphates of Abu Bakr and Umar",
      source: "wiki"
    },
    {
      root: "Qadiani",
      variations: [
        "Q-word"
      ],
      category: "sectarian",
      definition: "The Ahmadiyya Muslim Jama'at. Usied in Pakistan. The term originates from Qadian, a small town in present-day Indian Punjab, the birthplace of Mirza Ghulam Ahmad, the founder of the Ahmadiyya movement",
      source: "wiki"
    },
    {
      root: "Peacefool",
      variations: [
        "Pissful",
        "Shantidoot"
      ],
      category: "islamophobic",
      definition: "A Muslim. Derived from the common sarcastic coded term that Islam is a \"religion of peace\"",
      source: "goodboy"
    },
    {
      root: "Namazi",
      variations: [
        "Andhnamazi"
      ],
      category: "islamophobic",
      definition: "A Muslim. Used in India. Derived from \"namaz\", the Persian word for obligatory daily prayers",
      source: "wiki"
    },
    {
      root: "Mulla",
      variations: [
        "Mullah",
        "Kathmulla",
        "Sulla",
        "Bulla"
      ],
      category: "islamophobic",
      definition: "A Muslim. Used in India and Iran. Derived from \"mullah\"",
      source: "wiki"
    },
    {
      root: "Mujeet",
      variations: [
        "Abdul",
        "Adbool",
        "Bougnole",
        "Jihadi",
        "Muzzie",
        "Muslamic",
        "Moslem",
        "Osama"
      ],
      category: "islamophobic",
      definition: "A Muslim",
      source: "wiki"
    },
    {
      root: "Miya",
      variations: [],
      category: "islamophobic",
      definition: "A Bangladeshi Muslim. Use in Assam, India. Derived from the honorific \"Mian\"",
      source: "wiki"
    },
    {
      root: "Khatmal",
      variations: [],
      category: "islamophobic",
      definition: "A Sh īʿi Muslim. Derived from the Urdu word for \"bedbug\"",
      source: "wiki"
    },
    {
      root: "Kala",
      variations: [
        "Kaliya"
      ],
      category: "islamophobic",
      definition: "A Muslim or Rohingya person. Used in India and Myanmar. Means \"black\"",
      source: "wiki"
    },
    {
      root: "Kadrun",
      variations: [],
      category: "islamophobic",
      definition: "Islamic fundamentalism and reactionaries, sometimes Jokowi opposition although different religion. Used in Indonesia. Literally \"desert lizard\"",
      source: "wiki"
    },
    {
      root: "Chuslim",
      variations: [],
      category: "islamophobic",
      definition: "A Muslim. Used in India. Derived from \"chus\" or \"chusna\", meaning \"to suck\" in Hindi/Urdu",
      source: "wiki"
    },
    {
      root: "Bicot",
      variations: [],
      category: "islamophobic",
      definition: "A Muslim or any Arab. Clipping of \"arbicot\" (a diminutive of arbi - meaning Arab). French word usually used for Arabs/Maghrebis and Muslims",
      source: "wiki"
    },
    {
      root: "Mocky",
      variations: [
        "Red Sea pedestrian",
        "Sheenie",
        "Sheeny",
        "Hymie",
        "Heeb",
        "Hebe",
        "Feuj",
        "Christ Killer",
        "Oven Dodger",
        "Holocauster",
        "Shlomo",
        "Schlomo",
        "Skype",
        "Khazar"
      ],
      category: "antisemitic",
      definition: "A Jewish person",
      source: "wiki"
    },
    {
      root: "Molly Mormon",
      variations: [
        "Jack Mormon",
        "Peter Priesthood"
      ],
      category: "sectarian",
      definition: "A \"perfect\" member of the LDS Church",
      source: "wiki"
    },
    {
      root: "Nestorian",
      variations: [],
      category: "sectarian",
      definition: "The Assyrian Church of the East and the Ancient Church of the East. Originates from a historical misinterpretation of the Antiochene Dyophysite Christology of Theodore of Mopsuestia",
      source: "wiki"
    },
    {
      root: "Jacobite",
      variations: [],
      category: "sectarian",
      definition: "Syriac Orthodox. Named after Jacob Baradeus who liberated the Oriental Orthodox from persecution in the mid-6th century. This title is rejected by the Syriac Orthodox as it assumes that the Church had been started by Jacob",
      source: "wiki"
    },
    {
      root: "Shaveling",
      variations: [
        "Romanist",
        "Papist",
        "Mackerel Snapper",
        "Left footer",
        "Bead Rattler"
      ],
      category: "sectarian",
      definition: "A Roman Catholic",
      source: "goodboy"
    },
    {
      root: "Red Letter tribe",
      variations: [],
      category: "sectarian",
      definition: "Roman Catholics",
      source: "wiki"
    },
    {
      root: "Christfag",
      variations: [
        "Cross-hugger",
        "Jesus Freak",
        "Churchie"
      ],
      category: "christophobic",
      definition: "A Christian",
      source: "goodboy"
    },
    {
      root: "Wee Free",
      variations: [],
      category: "sectarian",
      definition: "A member of the Free Church of Scotland",
      source: "wiki"
    },
    {
      root: "Soup taker",
      variations: [],
      category: "sectarian",
      definition: "A Christian who has \"sold out\" their beliefs. Reference to the Great Famine of Ireland when some Catholics converted to a Protestant faith in order to gain access to a free meal",
      source: "wiki"
    },
    {
      root: "Shouting Methodist",
      variations: [],
      category: "sectarian",
      definition: "A Methodist",
      source: "wiki"
    },
    {
      root: "Shaker",
      variations: [],
      category: "sectarian",
      definition: "A Christian",
      source: "wiki"
    },
    {
      root: "Russellite",
      variations: [],
      category: "sectarian",
      definition: "A Jehovah's Wittness",
      source: "wiki"
    },
    {
      root: "Orangie",
      variations: [],
      category: "sectarian",
      definition: "An Ulster Protestant",
      source: "wiki"
    },
    {
      root: "Jaffa",
      variations: [
        "Proddy",
        "Prod",
        "Proddywhoddy",
        "Proddywoddy"
      ],
      category: "sectarian",
      definition: "A Christian Protestant",
      source: "wiki"
    },
    {
      root: "Zombie",
      variations: [],
      category: "sectarian",
      definition: "A Rangers Football Club fan",
      source: "aos"
    },
    {
      root: "Tattie muncher",
      variations: [
        "Tattie picker",
        "Tarrier",
        "Dogan",
        "Dogun",
        "Fenian"
      ],
      category: "sectarian",
      definition: "An Irish Catholic",
      source: "goodboy"
    },
    {
      root: "Pape",
      variations: [],
      category: "sectarian",
      definition: "A Catholic",
      source: "aos"
    },
    {
      root: "Jungle Jim",
      variations: [],
      category: "sectarian",
      definition: "A fan of Celtic Football Club. Cockney rhyming slang of \"Tim\"",
      source: "aos"
    },
    {
      root: "Tim",
      variations: [],
      category: "sectarian",
      definition: "A fan of Celtic Football Club. From \"Tim Malloys\", an Irish Catholic street gang that operated in Glasgow in the early 1900s. Can be offensive depending on the context and speaker",
      source: "aos"
    },
    {
      root: "Billy",
      variations: [],
      category: "sectarian",
      definition: "A fan of Rangers Football Club. From the loyalisy song \"Billy Boys\". Can be offensive depending on the context and speaker",
      source: "aos"
    },
    {
      root: "Current Bun",
      variations: [],
      category: "sectarian",
      definition: "A fan of Rangers Football Club. Cockney rhyming slang of \"hun\"",
      source: "aos"
    },
    {
      root: "Altar Boy",
      variations: [],
      category: "sectarian",
      definition: "A fan of Celtic Football Club",
      source: "aos"
    },
    {
      root: "Holly Roller",
      variations: [],
      category: "christophobic",
      definition: "Methodists of the Holiness Movement, Holiness Pentecostals. Named after church services involving spontaneous acts of worship, such as sobbing, wailing, groaning, and kneeling",
      source: "wiki"
    },
    {
      root: "Campbellite",
      variations: [],
      category: "christophobic",
      definition: "Followers of the Church of Christ, from American Restoration Movement leaders Thomas Campbell and Alexander Campbell, the latter being one of two key people considered the founders of the movement",
      source: "wiki"
    },
    {
      root: "Rice Christian",
      variations: [
        "Rice bag"
      ],
      category: "christophobic",
      definition: "A person who has formally declared themself a Christian for material benefits rather than for religious reasons. In India, the term has been extended to refer to any Christian convert",
      source: "wiki"
    },
    {
      root: "Isai",
      variations: [],
      category: "christophobic",
      definition: "A Christian. Used in Pakistan. From \"Isa Masih\", a name of Jesus Christ in the Hindi-language Bible",
      source: "wiki"
    },
    {
      root: "God botherer",
      variations: [],
      category: "christophobic",
      definition: "A Chtistian person",
      source: "wiki"
    },
    {
      root: "Fundie",
      variations: [],
      category: "christophobic",
      definition: "Christian fundamentalist",
      source: "wiki"
    },
    {
      root: "Chuhra",
      variations: [],
      category: "christophobic",
      definition: "A Christian. Used in Punjab. Derived from the Chuhra caste, a Dalit community whose traditional occupation was sweeping and cleaning. Most Christians in Punjab, along with many in Uttar Pradesh, are from the Chuhra and Chamar communities",
      source: "wiki"
    },
    {
      root: "Cafeteria Christian",
      variations: [],
      category: "sectarian",
      definition: "A Christian perceived \"pick and choose\" which Christian doctrines they believe and those they do not",
      source: "wiki"
    },
    {
      root: "Bible thumper",
      variations: [],
      category: "christophobic",
      definition: "A Christian, expecially fundamentalists",
      source: "wiki"
    },
    {
      root: "Bible basher",
      variations: [
        "Bible beater"
      ],
      category: "christophobic",
      definition: "A Baptist, Methodist or Pentecostal evangelical, or any evangelising christian",
      source: "wiki"
    },
    {
      root: "Bean flicker",
      variations: [
        "Carpet muncher",
        "Kitty Puncher",
        "Lesbo",
        "Lezzer",
        "Lezzie",
        "Lezzy",
        "Muff diver",
        "Pussy puncher",
        "Rug muncher",
        "Todger Dodger"
      ],
      category: "homophobic",
      definition: "A lesbian or masculine woman",
      source: "citg"
    },
    {
      root: "Arse bandit",
      variations: [
        "Ass fucker",
        "Booty bandit",
        "Bum bandit",
        "Bum boy",
        "Butt pirate",
        "Bender",
        "Bum chum",
        "Chutney ferret",
        "Cocksucker",
        "Effie",
        "Flit",
        "Flitty",
        "Girlyboy",
        "Light in the loafers",
        "Limp wristed",
        "Mincer",
        "Mincing",
        "Pansy",
        "Pillow biter",
        "Ponce",
        "Poncy",
        "Shirt lifter",
        "Shirtlfterish",
        "Sissy",
        "Sissified",
        "Three letter man",
        "Turd burglar",
        "Nancy boy",
        "Nancy",
        "Gaylord",
        "Gay lord",
        "Batty boy",
        "Batty bwoy",
        "Batty man",
        "Batiman",
        "Chi chi boy",
        "Chi chi bwoy",
        "Chi chi man",
        "Fairy",
        "Fairies",
        "Fruit",
        "Fruity",
        "Fudgepacker",
        "Poof",
        "Poofter",
        "Bufty",
        "Queen"
      ],
      category: "homophobic",
      definition: "A gay or feminine man",
      source: "goodboy"
    },
    {
      root: "Stoke-On-Trent",
      variations: [
        "Stoke"
      ],
      category: "homophobic",
      definition: "A gay man. Cockney rhyming slang for \"bent\"",
      source: "citg"
    },
    {
      root: "Bent",
      variations: [],
      category: "homophobic",
      definition: "Homosexual",
      source: "goodboy"
    },
    {
      root: "Lipstick lesbian",
      variations: [],
      category: "homophobic",
      definition: "Usually refers to a lesbian with a feminine gender expression. Can be used in a positive or a derogatory way, depending on who is using it. Is sometimes also used to refer to a lesbian who is seen as automatically \"passing\" for heterosexual",
      source: "citg"
    },
    {
      root: "Homo",
      variations: [],
      category: "homophobic",
      definition: "A homosexual person",
      source: "citg"
    },
    {
      root: "Harry Hoofter",
      variations: [
        "Iron hoofter",
        "Iron hoof",
        "Woolie woofter"
      ],
      category: "homophobic",
      definition: "A gay man. From Cockney rhyming slang for \"poofter\"",
      source: "citg"
    },
    {
      root: "Flame",
      variations: [
        "Flamer",
        "Flaming"
      ],
      category: "homophobic",
      definition: "\"Flaming\" can be used generally as an intensifier or curse, but has become especially associated with feminine gay men and campness. Often still used fondly, especially by older generations of gay men, but offensive if applied by others",
      source: "citg"
    },
    {
      root: "Fag Hag",
      variations: [],
      category: "homophobic",
      definition: "A woman, typically a heterosexual one, possibly ageing, who prefers, enjoys, or seeks out the company of homosexual men. This term is offensive to gay men and misogynistic to heterosexual women",
      source: "citg"
    },
    {
      root: "Faggotry",
      variations: [
        "Faggy"
      ],
      category: "homophobic",
      definition: "Used to imply someone is effeminate; lacking power or vigour; weak, cowardly; ineffectual. Hate speech when used about a gay man, especially in the US",
      source: "citg"
    },
    {
      root: "Bulldyke",
      variations: [
        "Bulldagger"
      ],
      category: "homophobic",
      definition: "A butch or masculine queer woman",
      source: "citg"
    },
    {
      root: "Dyke",
      variations: [],
      category: "homophobic",
      definition: "A lesbian or transmasc person. Term has been reclaimed by some lesbian communities",
      source: "citg"
    },
    {
      root: "Doric love",
      variations: [],
      category: "homophobic",
      definition: "Gay sex/romance, sometimes with overtones of pederasty. A reference to classical Greece",
      source: "citg"
    },
    {
      root: "Curry queen",
      variations: [],
      category: "racist",
      definition: "A gay man who is attracted to Indian men",
      source: "citg"
    },
    {
      root: "Cornholer",
      variations: [],
      category: "homophobic",
      definition: "A gay man or person who engages in anal sex",
      source: "citg"
    },
    {
      root: "Tranny chaser",
      variations: [
        "Chaser"
      ],
      category: "transphobic",
      definition: "A person who sees trans people (usually trans women) as inherently sexual, and sexually objectifies them. As opposed to someone who simply is predominantly attracted to trans women; a chaser does not view trans women respectfully as people with humanity and agency, but rather as players in a sexual fantasy",
      source: "citg"
    },
    {
      root: "Capon",
      variations: [],
      category: "homophobic",
      definition: "A young or inexperienced gay man. From a word for a castrated rooster",
      source: "citg"
    },
    {
      root: "Bean queen",
      variations: [],
      category: "racist",
      definition: "A Mexican homosexual, Latinx drag queen or white man who it attracted to Latino men",
      source: "citg"
    },
    {
      root: "Alphabet people",
      variations: [],
      category: "anti-lgbtq",
      definition: "LGBTQ+ people",
      source: "citg"
    },
    {
      root: "Zhyd",
      variations: [
        "Zhid",
        "Zhydovka",
        "Zhidovka"
      ],
      category: "antisemitic",
      definition: "A Jewish person. Used by East Slavic language speakers",
      source: "wiki"
    },
    {
      root: "Zuca",
      variations: [
        "Brazuca"
      ],
      category: "racist",
      definition: "A Brazilian person. Used in Portugal",
      source: "wiki"
    },
    {
      root: "Zip",
      variations: [
        "Zipperhead",
        "Pancake Face",
        "Pancake"
      ],
      category: "racist",
      definition: "An Asian person",
      source: "wiki"
    },
    {
      root: "Zanj",
      variations: [
        "Zang",
        "Zenj",
        "Zinj"
      ],
      category: "racist",
      definition: "A Black person. Used by Persian and Arabic people. A reference to the Zanj rebellion",
      source: "wiki"
    },
    {
      root: "Yuon",
      variations: [],
      category: "racist",
      definition: "A Vietnamese person. Used in Cambodia",
      source: "wiki"
    },
    {
      root: "Yid",
      variations: [],
      category: "antisemitic",
      definition: "A Jewish person. Derived from its use as an endonym among Yiddish-speaking Jews. In the United Kingdom, \"yid\" is also used to refer to supporters of the Tottenham Hotspur football club. Has been reclaimed in some communities",
      source: "wiki"
    },
    {
      root: "Yellow",
      variations: [
        "Yellow bone",
        "High Yellow"
      ],
      category: "racist",
      definition: "An Asian, mixed ethnicity or light-skin Black person",
      source: "wiki"
    },
    {
      root: "Yaposhka",
      variations: [],
      category: "racist",
      definition: "A Japanese person. Derived from the Russian word \"yaponets\" (Cyrillic: японец)",
      source: "wiki"
    },
    {
      root: "Yankee",
      variations: [],
      category: "racist",
      definition: "An American person. First applied by the Dutch colonists of New Amsterdam to Connecticuters and then to other residents of New England",
      source: "wiki"
    },
    {
      root: "Yank",
      variations: [],
      category: "racist",
      definition: "An American person. A contraction of \"Yankee\"",
      source: "wiki"
    },
    {
      root: "Yanacona",
      variations: [],
      category: "racist",
      definition: "A Mapuche person. Used in Chile. Means \"sellout\"",
      source: "wiki"
    },
    {
      root: "Yam Yam",
      variations: [],
      category: "racist",
      definition: "A resident of the Black Country in England. Used by people from Birmingham",
      source: "wiki"
    },
    {
      root: "Xing Ling",
      variations: [
        "Type C",
        "Chow",
        "Ching Chong"
      ],
      category: "racist",
      definition: "A Chinese person",
      source: "wiki"
    },
    {
      root: "Xiǎo Rìběn",
      variations: [],
      category: "racist",
      definition: "A Japenese person. Used in China. Literally translated, it means \"little Japan\"",
      source: "wiki"
    },
    {
      root: "Xarnego",
      variations: [
        "Xarnec"
      ],
      category: "racist",
      definition: "A non-Catalan Spanish person",
      source: "wiki"
    },
    {
      root: "Wop",
      variations: [],
      category: "racist",
      definition: "An Italian person. Derived from the Italian dialectism, \"guappo\", close to \"dude, swaggerer\" and other informal appellations, a greeting among male Neapolitans",
      source: "wiki"
    },
    {
      root: "Wog",
      variations: [],
      category: "racist",
      definition: "Depending on the speaker, either a dark-skinned foreigner or a Souther European / Mediterranean person",
      source: "wiki"
    },
    {
      root: "Wigger",
      variations: [
        "Whigger",
        "Wigga",
        "Whigga"
      ],
      category: "racist",
      definition: "An Irish person, or white youth that imitate urban Black youth by means of clothing style, mannerisms, and slang speech. Also used by radical Québécois in self-reference, as in the seminal 1968 book White Niggers of America",
      source: "wiki"
    },
    {
      root: "Whitey",
      variations: [
        "White interloper",
        "White ears",
        "Redleg",
        "Ofay",
        "Paleface",
        "Pink pig",
        "Mayonnaise Monkey"
      ],
      category: "racist",
      definition: "A white person",
      source: "wiki"
    },
    {
      root: "Whitexican",
      variations: [],
      category: "racist",
      definition: "A white mexican person",
      source: "wiki"
    },
    {
      root: "White trash",
      variations: [],
      category: "racist",
      definition: "A poor white person",
      source: "wiki"
    },
    {
      root: "White nigger",
      variations: [
        "Nigger wop"
      ],
      category: "racist",
      definition: "A Southern Italian",
      source: "wiki"
    },
    {
      root: "White ape",
      variations: [
        "White chimpanzee",
        "Paddy",
        "Paddy wagon",
        "Mick",
        "Bog",
        "Bog trotter"
      ],
      category: "racist",
      definition: "An Irish person",
      source: "wiki"
    },
    {
      root: "Wetback",
      variations: [],
      category: "racist",
      definition: "An undocumented immigrant, usually of Hispanic descent",
      source: "wiki"
    },
    {
      root: "West Brit",
      variations: [],
      category: "racist",
      definition: "An Irish person who is insufficiently Irish or too Anglophilic",
      source: "wiki"
    },
    {
      root: "Wasi'chu",
      variations: [],
      category: "racist",
      definition: "A non-Native white person. Used by Lakota and Dakota people. Means \"the one who takes the best meat for himself",
      source: "wiki"
    },
    {
      root: "Wagon burner",
      variations: [
        "Timber Nigger",
        "Injun",
        "Pocahontas",
        "Prairie nigger"
      ],
      category: "racist",
      definition: "A Native American person",
      source: "wiki"
    },
    {
      root: "Waach",
      variations: [],
      category: "racist",
      definition: "A non-Yucatec Mexican",
      source: "wiki"
    },
    {
      root: "Vuzvuz",
      variations: [],
      category: "antisemitic",
      definition: "An Ashkenai Jew. Used by Sephardi and Mizrahi Jews. Onomatopoeia of the Yiddish word for \"what\"",
      source: "wiki"
    },
    {
      root: "Veneco",
      variations: [],
      category: "racist",
      definition: "A Venezuelan person",
      source: "wiki"
    },
    {
      root: "Vanja",
      variations: [],
      category: "racist",
      definition: "A Russian person. Used in Finland",
      source: "wiki"
    },
    {
      root: "Uzkoglazyj",
      variations: [],
      category: "racist",
      definition: "An Asian person, particularly East and Central Asians. From the Russian for \"narrow-eyed\"",
      source: "wiki"
    },
    {
      root: "Ustaša",
      variations: [
        "Ustaše",
        "Ustaši",
        "Ustasha",
        "Ustashe"
      ],
      category: "racist",
      definition: "A Croatian person. Used in Serbia, and (to a lesser extent) Bosnia, Montenegro, Slovenia. Reference to the Independent State of Croatia and the fascist Ustaša movement during World War II in Yugoslavia",
      source: "wiki"
    },
    {
      root: "Uppity",
      variations: [],
      category: "racist",
      definition: "A Black person who is perceived as being insolent",
      source: "wiki"
    },
    {
      root: "UPAina",
      variations: [
        "UPAińcy",
        "UPAiniec",
        "UPAinka"
      ],
      category: "racist",
      definition: "A Ukrainian person. Used in Poland. Portmanteau of Ukraine + UPA (Ukrayins'ka Povstans'ka Armiia) responsible for Volhynia genocide",
      source: "wiki"
    },
    {
      root: "Unta",
      variations: [],
      category: "racist",
      definition: "An Arab Indonesian person. Means \"camel\"",
      source: "wiki"
    },
    {
      root: "Uncle Tom",
      variations: [],
      category: "racist",
      definition: "A Black person who behaves in a subservient manner to white authority figures",
      source: "wiki"
    },
    {
      root: "Ukrop",
      variations: [],
      category: "racist",
      definition: "A Ukrainian person. Means \"dill\" in Russian",
      source: "wiki"
    },
    {
      root: "Ukro Nazi",
      variations: [
        "Ukrofascist"
      ],
      category: "racist",
      definition: "A Ukrainian person. Used to link self-identifying Ukrainians during the Russo-Ukrainian War to Nazism, evoke Soviet victory in WWII, and justify Russian atrocities in Ukraine",
      source: "wiki"
    },
    {
      root: "Twinkie",
      variations: [],
      category: "racist",
      definition: "A European American or Asian American person",
      source: "wiki"
    },
    {
      root: "Twink",
      variations: [],
      category: "homophobic",
      definition: "A young, attractive gay man with a slim, boyish appearance. Reclaimed by the LGBTQ+ community",
      source: "goodboy"
    },
    {
      root: "Turko",
      variations: [],
      category: "antisemitic",
      definition: "An Ashkenazi Jew. Used by Sephardic Jews. From a Ladino word meaning \"Turk\"",
      source: "wiki"
    },
    {
      root: "Turkentrekker",
      variations: [],
      category: "racist",
      definition: "A Turkish person. A combination of the Dutch words for \"Turk\" and \"corkscrew\"",
      source: "wiki"
    },
    {
      root: "Turk",
      variations: [],
      category: "racist",
      definition: "A person from Llanelli, Wales. Used by South Walian people",
      source: "wiki"
    },
    {
      root: "Turčin",
      variations: [
        "Poturčin"
      ],
      category: "racist",
      definition: "A Bosniak person. Used by Serbs. A reference to the supposed ambiguity of Bosniaks and their ethnic origins",
      source: "wiki"
    },
    {
      root: "Turco",
      variations: [],
      category: "racist",
      definition: "A Syrian, Palestinian, Lebanese, Jewish or Armenian person. Used In Brazil and Chile. Means \"Turk\" in Potruguese",
      source: "wiki"
    },
    {
      root: "Tourk-alvanos",
      variations: [],
      category: "islamophobic",
      definition: "A Muslim Albanian person. Used in Greece",
      source: "wiki"
    },
    {
      root: "Tumba-Yumba",
      variations: [],
      category: "racist",
      definition: "An African person and by extension any person from a culture perceived as uncivilized. From the Russian for \"Mumbo-Jumbo\"",
      source: "wiki"
    },
    {
      root: "Tonto",
      variations: [],
      category: "racist",
      definition: "A Native American person. From the Native American character in the American television and radio programs The Lone Ranger. Spanish for \"Idiot\"",
      source: "wiki"
    },
    {
      root: "Toku-A",
      variations: [],
      category: "racist",
      definition: "A Chinese or Korean person. Used in Japan. Literally means \"specific Asia\"",
      source: "wiki"
    },
    {
      root: "Toad",
      variations: [
        "Thicklips",
        "Teapot",
        "Spook",
        "Sooty",
        "Groid",
        "Negroid",
        "8 ball",
        "Crow",
        "Blackie",
        "Nigger",
        "Nibba",
        "Negro",
        "Nig Nog",
        "Neeger",
        "Niger",
        "Nig",
        "Nigor",
        "Nigra",
        "Nigre",
        "Nigar",
        "Niggur",
        "Niggah",
        "Niggar",
        "Niglet",
        "Negrito",
        "Nigress",
        "Niggress",
        "Nigette",
        "Neger",
        "Darky",
        "Darkie",
        "Darkey",
        "Monkey",
        "Gorilla",
        "Moon Cricket",
        "Munt",
        "Dindu",
        "Dindu nuffin",
        "Porch monkey",
        "Bamboula"
      ],
      category: "racist",
      definition: "A Black person",
      source: "goodboy"
    },
    {
      root: "Tinker",
      variations: [
        "Tynekere",
        "Tinkere",
        "Tynkere",
        "Tynkare",
        "Tynker",
        "Tenker",
        "Tinkar",
        "Tyncar",
        "Tinkard",
        "Tynkard",
        "Tincker"
      ],
      category: "racist",
      definition: "A lower-class, Romani or native Scottish person, depending on the speaker",
      source: "wiki"
    },
    {
      root: "Ting tong",
      variations: [],
      category: "racist",
      definition: "A Chinese or East Asian person",
      source: "wiki"
    },
    {
      root: "Tiko",
      variations: [],
      category: "racist",
      definition: "A native Indonesian person. From \"Tikus kotor\" meaning \"Dirty rat\"",
      source: "wiki"
    },
    {
      root: "Tibla",
      variations: [],
      category: "racist",
      definition: "A Rusiian or Soviet person. Used in Estonia",
      source: "wiki"
    },
    {
      root: "Terrone",
      variations: [],
      category: "racist",
      definition: "A Southern Italian person",
      source: "wiki"
    },
    {
      root: "Thambi",
      variations: [
        "Thambiya"
      ],
      category: "islamophobic",
      definition: "A Muslim, especially Sri Lankan Moors. From the Tamil word தம்பி \"tambi\" meaning \"younger brother\"",
      source: "wiki"
    },
    {
      root: "Teuchter",
      variations: [],
      category: "racist",
      definition: "A northern or rural Scottish person",
      source: "wiki"
    },
    {
      root: "Teabag",
      variations: [],
      category: "racist",
      definition: "A member of the Cape Coloured or Coloured ethic group who has light skin",
      source: "wiki"
    },
    {
      root: "Tanka",
      variations: [],
      category: "racist",
      definition: "A Shuishangren person. Used in China. Name for an ethnic group which is now considered derogatory",
      source: "wiki"
    },
    {
      root: "Tai Ke",
      variations: [],
      category: "racist",
      definition: "A Taiwanese person of lower socio-economic status. Literally means \"Taiwan person\". Now reclaimed",
      source: "wiki"
    },
    {
      root: "Taig",
      variations: [
        "Teague",
        "Teg",
        "Teig"
      ],
      category: "racist",
      definition: "An Irish nationalist. Derived from the Irish name Tadhg",
      source: "wiki"
    },
    {
      root: "Taffy",
      variations: [
        "Taff"
      ],
      category: "racist",
      definition: "A Welsh person. A corruption of the name Dafydd",
      source: "wiki"
    },
    {
      root: "Szwab",
      variations: [],
      category: "racist",
      definition: "A German person. Used in Poland. Derived from Swabia",
      source: "wiki"
    },
    {
      root: "Szmatogłowy",
      variations: [],
      category: "racist",
      definition: "A Middle Easter or Arab person. Polish translation of \"Raghead\"",
      source: "wiki"
    },
    {
      root: "Szkop",
      variations: [
        "Skopčák"
      ],
      category: "racist",
      definition: "A German person. Used in Poland and the Czech Republic",
      source: "wiki"
    },
    {
      root: "Svenne",
      variations: [
        "Svenne banan"
      ],
      category: "racist",
      definition: "A Swedish person. Used in Sweden. A slang form of the word \"svensk\" which means \"swede\" in Swedish",
      source: "wiki"
    },
    {
      root: "Svartskalle",
      variations: [],
      category: "racist",
      definition: "A person with dark skin or dark hair",
      source: "wiki"
    },
    {
      root: "Sudaca",
      variations: [],
      category: "racist",
      definition: "A Latin American person. From the Spanish \"sudamericano\" meaning \"South American\"",
      source: "wiki"
    },
    {
      root: "Squaw",
      variations: [],
      category: "racist",
      definition: "A Native American woman. Derived from lower East Coast Algonquian (Massachusett: \"ussqua\"), which originally meant \"young woman\"",
      source: "wiki"
    },
    {
      root: "Square head",
      variations: [],
      category: "racist",
      definition: "A Nordic person",
      source: "wiki"
    },
    {
      root: "Spic",
      variations: [
        "Spick",
        "Spik",
        "Spig",
        "Spigotty",
        "Yahoo"
      ],
      category: "racist",
      definition: "A Hispanic person",
      source: "goodboy"
    },
    {
      root: "Spearchucker",
      variations: [],
      category: "racist",
      definition: "An African American or person of African descent",
      source: "wiki"
    },
    {
      root: "Spade",
      variations: [],
      category: "racist",
      definition: "A Black person. From the playing cards suit",
      source: "wiki"
    },
    {
      root: "Soutpiel",
      variations: [],
      category: "racist",
      definition: "A white English speaker. An Afrikaans term abbreviated from \"Salt-penis\"",
      source: "wiki"
    },
    {
      root: "Soosmar-khor",
      variations: [],
      category: "racist",
      definition: "An Arabian person. Persian for \"lizard eater\"",
      source: "wiki"
    },
    {
      root: "Somkhao",
      variations: [],
      category: "racist",
      definition: "A South Korean person. Literally \"white ginseng\" in Thai",
      source: "wiki"
    },
    {
      root: "Somdeang",
      variations: [],
      category: "racist",
      definition: "A North Korean person. Literally \"red ginseng\" in Thai",
      source: "wiki"
    },
    {
      root: "Smoked Irish",
      variations: [
        "Smoked Irishman"
      ],
      category: "racist",
      definition: "A Black person. A 19th-century term intended to insult both Black and Irish people but used primarily for Black people",
      source: "wiki"
    },
    {
      root: "Slope",
      variations: [
        "Slopy",
        "Slopey",
        "Sloper",
        "Slope head"
      ],
      category: "racist",
      definition: "An Asian person, especially Vietnamese in Australia; especially Chinese in America",
      source: "wiki"
    },
    {
      root: "Slobo",
      variations: [],
      category: "racist",
      definition: "A Russian or Slavic person. Used in Finland. From the Slavic word \"sloboda\" meaning \"freedom\"",
      source: "wiki"
    },
    {
      root: "Slant",
      variations: [
        "Slant eye"
      ],
      category: "racist",
      definition: "An East Asian person",
      source: "wiki"
    },
    {
      root: "Skævøjet",
      variations: [],
      category: "racist",
      definition: "An East Asian person. From the Danish meaning \"with crooked eyes\"",
      source: "wiki"
    },
    {
      root: "Skip",
      variations: [
        "Skippy"
      ],
      category: "racist",
      definition: "An Australian, especially one of British descent. Derived from the children's television series Skippy the Bush Kangaroo",
      source: "wiki"
    },
    {
      root: "Skopianoi",
      variations: [],
      category: "racist",
      definition: "An ethniic Macedonian person. Used in Greece. Derived from Skopje, the capital city of North Macedonia",
      source: "wiki"
    },
    {
      root: "Skinny",
      variations: [],
      category: "racist",
      definition: "A Somali person",
      source: "wiki"
    },
    {
      root: "Sideways vagina",
      variations: [
        "Sideways pussy",
        "Sideways cooter"
      ],
      category: "racist",
      definition: "An Asian woman, particularly Chinese women",
      source: "wiki"
    },
    {
      root: "Siamtue",
      variations: [],
      category: "racist",
      definition: "A Central Thai person. Used by Bankokers",
      source: "wiki"
    },
    {
      root: "Sí-a-la̍k",
      variations: [
        "426"
      ],
      category: "racist",
      definition: "A Chinese person. Used in Taiwan. Literally means \"damned mainlanders\"",
      source: "wiki"
    },
    {
      root: "Shylock",
      variations: [
        "Shyster"
      ],
      category: "antisemitic",
      definition: "A Jewish person perceived as greedy or usurious. From the antagonistic character of Shylock, a Jewish money-lender, in William Shakespeare's play The Merchant of Venice",
      source: "wiki"
    },
    {
      root: "Shumo",
      variations: [],
      category: "racist",
      definition: "An indigenous Guatemalan",
      source: "wiki"
    },
    {
      root: "Shoneen",
      variations: [],
      category: "racist",
      definition: "An Irish person who imitates English Customs. It means \"Little John\" in Irish language, referring to John Bull, a national personification of the British Empire in general",
      source: "wiki"
    },
    {
      root: "Shkutor",
      variations: [
        "Škutor"
      ],
      category: "racist",
      definition: "A West-Herzegovinian Croatian person",
      source: "wiki"
    },
    {
      root: "Shkije",
      variations: [
        "Shkinulkë"
      ],
      category: "racist",
      definition: "A Southern Slavic person, particularly Serbs, Macedonians, Montenegrins and Bosniaks",
      source: "wiki"
    },
    {
      root: "Shka i Velikës",
      variations: [],
      category: "racist",
      definition: "A Montenegrin from Velika. Used by Gheg Albanians",
      source: "wiki"
    },
    {
      root: "Shiptar",
      variations: [],
      category: "racist",
      definition: "An Albanian person. Used in Former Yugoslavia. From misspelled Albanian endonym \"Shqiptar\"",
      source: "wiki"
    },
    {
      root: "Shit skin",
      variations: [
        "Shit lip"
      ],
      category: "racist",
      definition: "A Muslim or Black person",
      source: "wiki"
    },
    {
      root: "Shine",
      variations: [],
      category: "racist",
      definition: "A Black person. Derived from shoeshiner",
      source: "wiki"
    },
    {
      root: "Zhina",
      variations: [],
      category: "racist",
      definition: "A Chinese person. Used in Taiwan and Hong Kong",
      source: "wiki"
    },
    {
      root: "Shina",
      variations: [],
      category: "racist",
      definition: "A Chinese person. Used in Japan",
      source: "wiki"
    },
    {
      root: "Shiksa",
      variations: [
        "Sheigetz",
        "Shegetz"
      ],
      category: "non-believers",
      definition: "A non-Jewish person",
      source: "wiki"
    },
    {
      root: "Shelta",
      variations: [],
      category: "racist",
      definition: "An Irish Traveller. Derived from \"siúilta\", which means \"The Walkers\" in Irish",
      source: "wiki"
    },
    {
      root: "Sheep Shagger",
      variations: [],
      category: "racist",
      definition: "A Welsh or New Zealander person",
      source: "wiki"
    },
    {
      root: "Sheboon",
      variations: [],
      category: "racist",
      definition: "A Black woman",
      source: "wiki"
    },
    {
      root: "Shangilla",
      variations: [
        "Shankilla"
      ],
      category: "racist",
      definition: "An Ethiopian person from one of the peoples of southwestern Ethiopia",
      source: "wiki"
    },
    {
      root: "Schwartze Khayeh",
      variations: [],
      category: "racist",
      definition: "A Mizrahi Jew. Literally translates to \"black animal\"",
      source: "wiki"
    },
    {
      root: "Schvartse",
      variations: [],
      category: "racist",
      definition: "A Mizrahi Jew. From the Yiddish for \"black\" ",
      source: "wiki"
    },
    {
      root: "Schwartze",
      variations: [],
      category: "racist",
      definition: "An African person. From the German for \"black\" ",
      source: "wiki"
    },
    {
      root: "Schluchtenscheißer",
      variations: [],
      category: "racist",
      definition: "An Austrian person. From the German for \"gorge shitter\"",
      source: "wiki"
    },
    {
      root: "Seppo",
      variations: [
        "Septic"
      ],
      category: "racist",
      definition: "An American person. From rhyming slang \"Septic tank\" meaning \"Yank\"",
      source: "wiki"
    },
    {
      root: "Scandihoovian",
      variations: [],
      category: "racist",
      definition: "A Scandinavian person living in the United States",
      source: "wiki"
    },
    {
      root: "Sawney",
      variations: [
        "Porridge Wog",
        "Krankie"
      ],
      category: "racist",
      definition: "A Scottish person",
      source: "wiki"
    },
    {
      root: "Savage",
      variations: [],
      category: "racist",
      definition: "An indigenous or non-Christian person. Used to describe a person or people considered primitive/uncivilized",
      source: "wiki"
    },
    {
      root: "Sassenach",
      variations: [],
      category: "racist",
      definition: "An English person. Used in Scotland or Gaelic speaking areas",
      source: "wiki"
    },
    {
      root: "Sarong Party Girl",
      variations: [],
      category: "racist",
      definition: "An Asian woman. Used to ridicule Asian women who exclusively dates, marries, or socializes with White men for ulterior motives (especially for sexual, social status, and monetary purpose)",
      source: "wiki"
    },
    {
      root: "Sangokujin",
      variations: [],
      category: "racist",
      definition: "A Korean or Taiwanese person. Used in Japan",
      source: "wiki"
    },
    {
      root: "Sand Nigger",
      variations: [],
      category: "racist",
      definition: "An Arab or Muslim",
      source: "wiki"
    },
    {
      root: "Sambo",
      variations: [],
      category: "racist",
      definition: "An African American or Black person",
      source: "wiki"
    },
    {
      root: "Safavid",
      variations: [],
      category: "sectarian",
      definition: "A Feyli Kurdish person. Mainly used by higher class Sunni Arabs during Ba'athist Iraq to insult Feyli Kurds for their belief in Shia Islam",
      source: "wiki"
    },
    {
      root: "Russki",
      variations: [
        "Ruski",
        "Ryssä"
      ],
      category: "racist",
      definition: "A Russian person",
      source: "wiki"
    },
    {
      root: "Roundeye",
      variations: [],
      category: "racist",
      definition: "A non-asian person, especially white people",
      source: "wiki"
    },
    {
      root: "Roto",
      variations: [],
      category: "racist",
      definition: "A Chilean person. Used in Peru and Bolivia. From \"roto\" meaning \"tattered\"",
      source: "wiki"
    },
    {
      root: "Rosuke",
      variations: [
        "Roske"
      ],
      category: "racist",
      definition: "A Russian person. Used in Japan",
      source: "wiki"
    },
    {
      root: "Rockspider",
      variations: [],
      category: "racist",
      definition: "An Afrikaner person",
      source: "wiki"
    },
    {
      root: "Risorse boldriniane",
      variations: [],
      category: "racist",
      definition: "A Maghrebi Arab person. Literally \"Boldrini's resources\" in Italian",
      source: "wiki"
    },
    {
      root: "Redskin",
      variations: [],
      category: "racist",
      definition: "A Native Amrican person",
      source: "wiki"
    },
    {
      root: "Redneck",
      variations: [],
      category: "racist",
      definition: "A white American person",
      source: "wiki"
    },
    {
      root: "Rastus",
      variations: [
        "Bluegum"
      ],
      category: "racist",
      definition: "An African American person",
      source: "wiki"
    },
    {
      root: "Ramasamy",
      variations: [],
      category: "racist",
      definition: "An Indian person. Used during British-ruled South Africa. From a common name used mostly by Tamil people",
      source: "wiki"
    },
    {
      root: "Raghead",
      variations: [
        "Towel head"
      ],
      category: "racist",
      definition: "An Arab, Indian or Sikh. Alternatively anyone who wears a traditional headdress such as a turban or keffiyeh",
      source: "wiki"
    },
    {
      root: "Quashie",
      variations: [
        "Quashi"
      ],
      category: "racist",
      definition: "A Black person. Used in the Caribbean. From the West African name Kwazi, often given to a child born on a Sunday",
      source: "wiki"
    },
    {
      root: "Pshek",
      variations: [],
      category: "racist",
      definition: "A Polish man",
      source: "wiki"
    },
    {
      root: "Promdi",
      variations: [],
      category: "racist",
      definition: "A Filipino from countryside who has limited or no knowledge about Metro Manila or other big cities",
      source: "wiki"
    },
    {
      root: "Prindapan",
      variations: [
        "Vrindavan"
      ],
      category: "racist",
      definition: "An Indian person. From the city of Vrindavan, popularized in Indonesia as the setting of the Indian animated show Little Krishna which aired in Indonesia during the 2010s",
      source: "wiki"
    },
    {
      root: "Potet",
      variations: [],
      category: "racist",
      definition: "A person from the Norwegian ethnic group. Means \"potato\" in Norwegian",
      source: "wiki"
    },
    {
      root: "Portagee",
      variations: [],
      category: "racist",
      definition: "A Portuguese or Portuguese-American person",
      source: "wiki"
    },
    {
      root: "Pom",
      variations: [
        "Pohm",
        "Pommy",
        "Pommie",
        "Pommie Grant"
      ],
      category: "racist",
      definition: "A British person",
      source: "wiki"
    },
    {
      root: "Polaca",
      variations: [],
      category: "prostitution",
      definition: "A woman who sells or exchanges sex. Used in Brazil. From the Brazilian Portuguese word for \"Polish woman\"",
      source: "wiki"
    },
    {
      root: "Polentone",
      variations: [],
      category: "racist",
      definition: "A Northern Italian. Referring to them as a \"polenta eater\"",
      source: "wiki"
    },
    {
      root: "Polaco",
      variations: [],
      category: "racist",
      definition: "A Catlan person",
      source: "wiki"
    },
    {
      root: "Polack",
      variations: [
        "Polacke",
        "Polak",
        "Polock"
      ],
      category: "racist",
      definition: "A Polish or Slavic person",
      source: "wiki"
    },
    {
      root: "Pocho",
      variations: [
        "Pocha"
      ],
      category: "racist",
      definition: " A person of Mexican heritage who is partially or fully assimilated into United States culture. Literally, \"diluted, watered down; undersized (clothing)\"",
      source: "wiki"
    },
    {
      root: "Plouc",
      variations: [],
      category: "racist",
      definition: "A Breton person. Used to mean Breton immigrants that came to Paris and extended to mean hillbillies. The term comes from the prefix \"plou\" found in many Breton city names and toponyms",
      source: "wiki"
    },
    {
      root: "Plastic Paddy",
      variations: [],
      category: "racist",
      definition: "An estranged Irish person who knows little of Irish culture but asserts their Irish identity",
      source: "wiki"
    },
    {
      root: "Pilak",
      variations: [],
      category: "racist",
      definition: "A Filipino. Used in Sabah, from a regional word for \"silver\" or \"money\". Particularly targets immigrants",
      source: "wiki"
    },
    {
      root: "Pindos",
      variations: [
        "Pendos",
        "Pindosiya",
        "Pindostan"
      ],
      category: "racist",
      definition: "An American person. Used in Russia",
      source: "wiki"
    },
    {
      root: "Pikey",
      variations: [
        "Piker",
        "Piky"
      ],
      category: "racist",
      definition: "An Irish Traveller, Romani or lower-class / poor person. Derived from \"turnpike\"",
      source: "wiki"
    },
    {
      root: "Piefke",
      variations: [],
      category: "racist",
      definition: "A Prussian or German person",
      source: "wiki"
    },
    {
      root: "Pickaninny",
      variations: [
        "Picaninny",
        "Piccaninny",
        "Pickininnie"
      ],
      category: "racist",
      definition: "An African American or West Indian child. From the Portuguese word \"pequenino\" (boy, child, very small, tiny etc)",
      source: "wiki"
    },
    {
      root: "Pepsi",
      variations: [
        "Pepper"
      ],
      category: "racist",
      definition: "A French Canadian or Québécois person",
      source: "wiki"
    },
    {
      root: "Peenoise",
      variations: [],
      category: "racist",
      definition: "An Arab or Middle Eastern person. Portmanteau of \"perser\" (Persian) and \"tyrker\" (Turk)",
      source: "wiki"
    },
    {
      root: "Paša",
      variations: [],
      category: "racist",
      definition: "A Bosniak person. Literally meaning \"Pasha\", used by Serbs originated during the Bosnian war to generally mock Bosniak Muslims who wanted keep Ottoman titles and place-names. The modern term is used to refer to old Bosniak men who were pictured in wartime cartoons as being \"fat as a pasha",
      source: "wiki"
    },
    {
      root: "Pastel de flango",
      variations: [],
      category: "racist",
      definition: "An East Asian Person. Used in Brazil. Pastel is Portuguese for any pastry and so is used for wonton. Flango is eye dialect of frango (Portuguese for chicken) ridiculing Asian pronunciation",
      source: "wiki"
    },
    {
      root: "Parsubang",
      variations: [
        "Parsolam"
      ],
      category: "islamophobic",
      definition: "A Batak Dalle or non-Batak person who refuses to consume pork, canine meat, blood, or alcoholic beverages",
      source: "wiki"
    },
    {
      root: "Papoose",
      variations: [],
      category: "racist",
      definition: "A Native American child",
      source: "wiki"
    },
    {
      root: "Panchito",
      variations: [],
      category: "racist",
      definition: "A Latin American person",
      source: "wiki"
    },
    {
      root: "Palagi",
      variations: [],
      category: "racist",
      definition: "A white person. Used in the Pacific Islands",
      source: "wiki"
    },
    {
      root: "Paki",
      variations: [
        "Pakki"
      ],
      category: "racist",
      definition: "A Pakistani person, or other South Asians. Has been reclaimed by some British Pakistanis",
      source: "wiki"
    },
    {
      root: "Pākehā",
      variations: [],
      category: "racist",
      definition: "A Newzealander of non-Māori origin",
      source: "wiki"
    },
    {
      root: "Overner",
      variations: [],
      category: "racist",
      definition: "A resident of the mainland United Kingdom. Used by residents of the Isle of Wight",
      source: "wiki"
    },
    {
      root: "Orc",
      variations: [],
      category: "racist",
      definition: "A Russian soldier",
      source: "wiki"
    },
    {
      root: "Oláh",
      variations: [],
      category: "racist",
      definition: "A Romanian person, used in Hungarian-speaking territories",
      source: "wiki"
    },
    {
      root: "Nusayri",
      variations: [],
      category: "sectarian",
      definition: "A member of the Alawite sect of Shi'a Islam. Derived from the name of Ibn Nusayr, the sect's founder",
      source: "wiki"
    },
    {
      root: "Southern Fairy",
      variations: [
        "Southern Faerie"
      ],
      category: "racist",
      definition: "A Southern English person",
      source: "wiki"
    },
    {
      root: "Northern Monkey",
      variations: [],
      category: "racist",
      definition: "A Northern English person",
      source: "wiki"
    },
    {
      root: "Non-Pri",
      variations: [
        "Non-Pribumi"
      ],
      category: "racist",
      definition: "An Indonesian of foreign descent, especially Chinese Indonesians",
      source: "wiki"
    },
    {
      root: "Nitchie",
      variations: [
        "Neche",
        "Neechee",
        "Neejee",
        "Nichi",
        "Nichiwa",
        "Nidge",
        "Nitchee",
        "Nitchy"
      ],
      category: "racist",
      definition: "A Native Canadian person, from the Algonquian word for \"friend\"",
      source: "wiki"
    },
    {
      root: "Transformer",
      variations: [
        "Tranny"
      ],
      category: "transphobic",
      definition: "A transgender person",
      source: "goodboy"
    },
    {
      root: "Nip",
      variations: [],
      category: "racist",
      definition: "A person of Japanese descent. A shortened version of Nipponese, from the Japanese name for Japan, Nippon",
      source: "wiki"
    },
    {
      root: "Niggeritis",
      variations: [
        "Negroitis"
      ],
      category: "racist",
      definition: "To feel sleepy after eating, a direct allusion to the stereotype of laziness of Black Africans. Used in the Caribbean",
      source: "wiki"
    },
    {
      root: "Niakoué",
      variations: [],
      category: "racist",
      definition: "An East of Southeast Asian person. Used in France. A corrupted Vietnamese word with a meaning similar to \"yokel\", \"country bumpkin\"",
      source: "wiki"
    },
    {
      root: "Nere",
      variations: [],
      category: "islamophobic",
      definition: "A Muslim. Used by Bengali Hindus",
      source: "wiki"
    },
    {
      root: "Němčour",
      variations: [
        "Nimchura",
        "Nemchura"
      ],
      category: "racist",
      definition: "A German person. Slavic term",
      source: "wiki"
    },
    {
      root: "Neftenya",
      variations: [
        "Neftegna",
        "Naftenya",
        "Naftegna"
      ],
      category: "racist",
      definition: "An Amharan person. An Ethiopian/Amharic term, literally means \"rifle bearer\"",
      source: "wiki"
    },
    {
      root: "Nawar",
      variations: [],
      category: "racist",
      definition: "A Romani person. Used in Levant",
      source: "wiki"
    },
    {
      root: "Namak Haram",
      variations: [],
      category: "racist",
      definition: "An Afghan person. Pakistani term",
      source: "wiki"
    },
    {
      root: "Mzungu",
      variations: [],
      category: "racist",
      definition: "A white person. Eastern and Southern African term also used in the Democratic Republic of the Congo",
      source: "wiki"
    },
    {
      root: "Maxhup",
      variations: [],
      category: "racist",
      definition: "A Romani person. Kosovan term",
      source: "wiki"
    },
    {
      root: "Mustalainen",
      variations: [],
      category: "racist",
      definition: "A Romani person. Finnish term, Literally \"blackling,\" \"blackie,\" \"the Black people\"",
      source: "wiki"
    },
    {
      root: "Mulignan",
      variations: [
        "Mulignon",
        "Moolinyan",
        "Mouli"
      ],
      category: "racist",
      definition: "A Black person. Used by Italian-Americans. Deriving from \"mulignana\" the word for eggplant in some South Italian linguistic variant",
      source: "wiki"
    },
    {
      root: "Muklo",
      variations: [],
      category: "islamophobic",
      definition: "A Filipino Muslim",
      source: "wiki"
    },
    {
      root: "MTN",
      variations: [],
      category: "racist",
      definition: "A Dinka person. Derived from MTN's slogan, “everywhere you go\". It was repurposed to suggest that the Dinka were encroaching on other groups’ territory to graze their animals everywhere",
      source: "wiki"
    },
    {
      root: "Mountain Turk",
      variations: [],
      category: "racist",
      definition: "A Kurdish person",
      source: "wiki"
    },
    {
      root: "Moskal",
      variations: [
        "Moskowiter"
      ],
      category: "racist",
      definition: "A Russian person. Historically a neutral designation for a person from Muscovy",
      source: "wiki"
    },
    {
      root: "Momo",
      variations: [],
      category: "racist",
      definition: "A Northeast Indian or Nepalese person. Based on momos, a dumpling",
      source: "wiki"
    },
    {
      root: "Mof",
      variations: [
        "Moffen"
      ],
      category: "racist",
      definition: "A German person. Dutch term",
      source: "wiki"
    },
    {
      root: "Mohamedaner",
      variations: [],
      category: "islamophobic",
      definition: "A Muslim. Danish term",
      source: "wiki"
    },
    {
      root: "Mocro",
      variations: [],
      category: "racist",
      definition: "A Dutch-Moroccan person",
      source: "wiki"
    },
    {
      root: "Milgorac",
      variations: [],
      category: "racist",
      definition: "A Montenegrin person. Deriving from Milo Đukanović (former president of Montenegro), used to refer to Montenegrin nationalists/Montenegrins who don't identify as Serbs",
      source: "wiki"
    },
    {
      root: "Mayate",
      variations: [
        "Mayatero"
      ],
      category: "racist",
      definition: "A Black person. From the Spanish colloquial name of the Figeater beetle",
      source: "wiki"
    },
    {
      root: "Mau-Mau",
      variations: [],
      category: "racist",
      definition: "A Black person. Derived from Kenyans of the Kikuyu tribe involved in the Mau Mau Rebellion in the 1950s",
      source: "wiki"
    },
    {
      root: "Maruta",
      variations: [],
      category: "racist",
      definition: "A Chinese person. Originally a Japanese term used by Unit 731 referring to its human test subjects",
      source: "wiki"
    },
    {
      root: "Marokaki",
      variations: [],
      category: "racist",
      definition: "A Moroccan Jewish person. Derived from \"Maroko\" (Hebrew pronunciation for \"Morocco\") + \"Kaki\" (which means \"shit\", \"crap\" in Hebrew slang)",
      source: "wiki"
    },
    {
      root: "Manne",
      variations: [],
      category: "racist",
      definition: "A Romani male. Used in Finland",
      source: "wiki"
    },
    {
      root: "Malon",
      variations: [],
      category: "racist",
      definition: "A Romani person. From Bulgarian \"мангал\" (mangal) - a type of pot. Some variants are derived from the similar-sounding loanwords \"манго\" (mango) - mango and \"мангуста\" (mangusta) - mongoose",
      source: "wiki"
    },
    {
      root: "Malingsia",
      variations: [
        "Malingsial",
        "Malingsialan"
      ],
      category: "racist",
      definition: "A Malaysian person. Derived from \"maling\" (Javanese for \"thief\") and \"Malaysia\"",
      source: "wiki"
    },
    {
      root: "Malaun",
      variations: [],
      category: "hinduphobic",
      definition: "A Hindu. Derived from Bengali মালাউন (maalaaun), which in turn was derived from Arabic \"ملعون\" (mal'un), which means \"cursed\" or deprived of God's mercy",
      source: "wiki"
    },
    {
      root: "Malakh-khor",
      variations: [],
      category: "racist",
      definition: "An Arab person. An Iranian term meaning \"locust eater\"",
      source: "wiki"
    },
    {
      root: "Maketo",
      variations: [],
      category: "racist",
      definition: "A non-Basque Spanish person who has migrated to the Basque Country",
      source: "wiki"
    },
    {
      root: "Majus",
      variations: [],
      category: "racist",
      definition: "A Persian person. An Arabic term meaning Zoroastrian, Magi, fire worshipper",
      source: "wiki"
    },
    {
      root: "Madrasi",
      variations: [],
      category: "racist",
      definition: "A South Indian person. Used mainly by some North Indian people against South Indians, and refers to a harmful stereotype of all South Indian people",
      source: "wiki"
    },
    {
      root: "Macaronar",
      variations: [],
      category: "racist",
      definition: "An Italian person. Used in Romania, roughly translates to \"macaroni eater/maker\"",
      source: "wiki"
    },
    {
      root: "Macaca",
      variations: [],
      category: "racist",
      definition: "An African person. Originally used by francophone colonists in North Africa, also used in Europe against Immigrants from Africa",
      source: "wiki"
    },
    {
      root: "Mabuno",
      variations: [
        "Mahbuno"
      ],
      category: "racist",
      definition: "A local European person held in contempt, commonly white Africans of European ancestry. Used in Zimbabwe",
      source: "wiki"
    },
    {
      root: "Lach",
      variations: [
        "Lyakh"
      ],
      category: "racist",
      definition: "A Polish person. A term that originally referred to a representative of Slav tribes living roughly in what is today eastern Poland and western Ukraine, more commonly known today as Lendians, but later became associated with all Polish tribes. In other languages, Lach and derived expressions are neutral",
      source: "wiki"
    },
    {
      root: "Lundy",
      variations: [],
      category: "racist",
      definition: "A Lithuanian person",
      source: "wiki"
    },
    {
      root: "Londo",
      variations: [],
      category: "racist",
      definition: "A white person. Commonly used by Javanese people. Derived from \"Belanda\" (Netherlands)",
      source: "wiki"
    },
    {
      root: "Lubra",
      variations: [],
      category: "racist",
      definition: "An Australian Aboriginal woman",
      source: "wiki"
    },
    {
      root: "Locust",
      variations: [],
      category: "racist",
      definition: "A person from the Chinese mainland. Used in Hong Kong",
      source: "wiki"
    },
    {
      root: "Limey",
      variations: [],
      category: "racist",
      definition: "A British person. Comes from the historical British naval practice of giving sailors limes to stave off scurvy",
      source: "wiki"
    },
    {
      root: "Leupe lonko",
      variations: [],
      category: "racist",
      definition: "A German person. Used by some Huilliche people of southern Chile. Means \"toasted heads\" in reference to the fair hair of many Germans",
      source: "wiki"
    },
    {
      root: "Lebo",
      variations: [
        "Leb"
      ],
      category: "racist",
      definition: "A Lebanese person, usually a Lebanese Australian",
      source: "wiki"
    },
    {
      root: "Lapp",
      variations: [],
      category: "racist",
      definition: "A Sámi person. Used mainly by Norwegians and Swedes. The word itself means \"patch\"",
      source: "wiki"
    },
    {
      root: "Laomaozi",
      variations: [],
      category: "racist",
      definition: "A Russian person. Term used in China",
      source: "wiki"
    },
    {
      root: "Landya",
      variations: [],
      category: "islamophobic",
      definition: "A Muslim. Used primarily by Marathi people; the term translates to \"small penis\", referring to circumcision",
      source: "wiki"
    },
    {
      root: "Land thief",
      variations: [],
      category: "racist",
      definition: "A white South African. The term implies that white people stole land from Black people during the Apartheid era, and are therefore responsible for the current economic and social inequalities in the country",
      source: "wiki"
    },
    {
      root: "Labas",
      variations: [],
      category: "racist",
      definition: "A Lithuanian person. Derived from greetings: Latvian \"labrīt\"/\"labdien\"/\"labvakar\" and Lithuanian \"labas rytas\"/\"laba diena\"/\"labas vakaras\", meaning \"good morning/day/evening\"",
      source: "wiki"
    },
    {
      root: "Kuronbō",
      variations: [],
      category: "racist",
      definition: "A Black person. Means \"darkie\" or \"nigga\" in Japanese",
      source: "wiki"
    },
    {
      root: "Curepí",
      variations: [
        "Kurepi"
      ],
      category: "racist",
      definition: "An Argentine person. A Guarani term derived from kure pire, which means \"pigskin\"",
      source: "wiki"
    },
    {
      root: "Kūpapa Māori",
      variations: [],
      category: "racist",
      definition: "A Māori person who cooperates with or is  subserviant to white authority figures",
      source: "wiki"
    },
    {
      root: "Kraut",
      variations: [],
      category: "racist",
      definition: "A German person, derived from sauerkraut, used most specifically during World War II",
      source: "wiki"
    },
    {
      root: "Krakkemut",
      variations: [],
      category: "racist",
      definition: "An Arab or Middle Eastern person. From the Greenlandic word \"Qaqqamut\" meaning \"to the mountain, up the mountain\". Its use spread throughout Denmark",
      source: "wiki"
    },
    {
      root: "Kozojeb",
      variations: [],
      category: "racist",
      definition: "An Albanian or Bosnian person, a Serbian term derived from local translations of \"goat fucker\"",
      source: "wiki"
    },
    {
      root: "Koyotl",
      variations: [],
      category: "racist",
      definition: "A non indigenous Mexican or foreigner. A Nahuatl term for non-indigenous/Mestizo/White Mexicans, foreigners, or those whose lifestyle is considered urban. The word koyotl literally means \"coyote\"",
      source: "wiki"
    },
    {
      root: "Kolorad",
      variations: [],
      category: "racist",
      definition: "A Ukrainian pro-Russian separatist or a Russian invader, a reference to Russian St. George ribbon whose coloration resembles the stripes of the Colorado beetle",
      source: "wiki"
    },
    {
      root: "Kojaengi",
      variations: [],
      category: "racist",
      definition: "A westerner. From the Korean 코 (\"nose\") and -쟁이 (derogatory suffix)",
      source: "wiki"
    },
    {
      root: "Knacker",
      variations: [],
      category: "racist",
      definition: "A member of the Irish Traveler ethnic group",
      source: "wiki"
    },
    {
      root: "Khamdungi",
      variations: [],
      category: "racist",
      definition: "A Black person, Korean for \"nigger\" or \"nigga\"",
      source: "wiki"
    },
    {
      root: "Kitazoya",
      variations: [],
      category: "racist",
      definition: "An East Asian person, especially the Chinese. Used in Russia",
      source: "wiki"
    },
    {
      root: "Kıro",
      variations: [],
      category: "racist",
      definition: "A Kurdish man. A Turkish word used to describe rude and hairy men",
      source: "wiki"
    },
    {
      root: "Kimchi",
      variations: [],
      category: "racist",
      definition: "A Korean person",
      source: "wiki"
    },
    {
      root: "Kike",
      variations: [
        "K word"
      ],
      category: "antisemitic",
      definition: "A Jewish person, possibly from the Yiddish word for  Yiddish for \"circle\". Immigrant Jews who could not read English often signed legal documents with an \"O\" (similar to an \"X\", to which Jews objected because \"X\" also symbolizes a cross)",
      source: "wiki"
    },
    {
      root: "Tàu khựa",
      variations: [
        "Khựa",
        "Tàu"
      ],
      category: "racist",
      definition: "A Chinese person, used in Vietnam",
      source: "wiki"
    },
    {
      root: "Khokol",
      variations: [],
      category: "racist",
      definition: "A Ukrainian person, derived from a term for a traditional Cossack-style haircut",
      source: "wiki"
    },
    {
      root: "Khawal",
      variations: [],
      category: "homophobic",
      definition: "A homosexual male, derived from a type of Egyptian cross-dressing dancer popular between the 1800s and 1900s",
      source: "wiki"
    },
    {
      root: "Kharkhuwa",
      variations: [],
      category: "racist",
      definition: "An Assamese person, an Assamese term which is used to signify a person necessarily having Assamese ethnicity and a descendant of people of medieval Assam, now a territory of India",
      source: "wiki"
    },
    {
      root: "Kharadim",
      variations: [],
      category: "racist",
      definition: "A Haredi Jewish person. Portmanteau of khara (shit in Hebrew) + Haredi",
      source: "wiki"
    },
    {
      root: "Khach",
      variations: [
        "Khachik"
      ],
      category: "racist",
      definition: "A Caucasian person (from the Caucasus), particularly the North Caucasus and Armenia. From the Amenian word for \"cross\"",
      source: "wiki"
    },
    {
      root: "Kettō",
      variations: [],
      category: "racist",
      definition: "A westerner. From the Japanese meaning \"foreigners full of body hair\"",
      source: "wiki"
    },
    {
      root: "Kemosabe",
      variations: [
        "Kemosahbee"
      ],
      category: "racist",
      definition: "A Native American, a term used by the fictional Native American sidekick Tonto as the \"Native American\" name for the Lone Ranger in American television and radio programs",
      source: "wiki"
    },
    {
      root: "Keling",
      variations: [
        "Kling"
      ],
      category: "racist",
      definition: "An Inddian person or, in Indonesian any person witth a dark complexion",
      source: "wiki"
    },
    {
      root: "Kebab",
      variations: [],
      category: "racist",
      definition: "A Muslim, usually of Arabian, Turkic or Iranian descent. From a 1990s Serbian nationalist song (“Remove Kebab”) created during the Yugoslav Wars",
      source: "wiki"
    },
    {
      root: "Katsap",
      variations: [
        "Kacap",
        "Kacapas"
      ],
      category: "racist",
      definition: "A Russian person. Likkely derived from the Turkic word \"kasap\", which means \"butcher\". Used in several former Soviet states",
      source: "goodboy"
    },
    {
      root: "Käskopp",
      variations: [],
      category: "racist",
      definition: "A Dutch person. From the German \"cheese head\"",
      source: "wiki"
    },
    {
      root: "Kaouiche",
      variations: [
        "Kawish"
      ],
      category: "racist",
      definition: "A Native American person, French Canadian term",
      source: "wiki"
    },
    {
      root: "Kano",
      variations: [],
      category: "racist",
      definition: "A white American, shortened form of the Filipino word \"Amerikano\"",
      source: "wiki"
    },
    {
      root: "Kanaka",
      variations: [],
      category: "racist",
      definition: "A Pacific Islander or a worker from various Pacific Islands employed in British Colonies. From a Hawaiian word used to refer to Native Hawaiians",
      source: "wiki"
    },
    {
      root: "Katwa",
      variations: [
        "Katwe",
        "Katuve",
        "Katua",
        "K2a",
        "K2o",
        "K2wa",
        "Kto"
      ],
      category: "islamophobic",
      definition: "A Muslim male. From a Hindi word meaning \"to cut\", a reference to having a circumcised penis",
      source: "wiki"
    },
    {
      root: "Kalia",
      variations: [
        "Kalu",
        "Kallu"
      ],
      category: "racist",
      definition: "A dark-skinned person. From the Sanskrit for \"black\" or \"dark colored\"",
      source: "goodboy"
    },
    {
      root: "Kalbit",
      variations: [],
      category: "racist",
      definition: "A Central Asian person, a term of Russian origin",
      source: "wiki"
    },
    {
      root: "Kalar",
      variations: [],
      category: "racist",
      definition: "A Burmese person of South Asian origin, especially Bengali, Rohingya, or any South Asian Muslim or Hindu",
      source: "wiki"
    },
    {
      root: "Kanglu",
      variations: [
        "Kangladeshi"
      ],
      category: "racist",
      definition: "A Bangladeshi person, a portmanteu of the Hindi word \"kaṅgāl\" (meaning poor, broke, pauper) and Bangladeshi",
      source: "wiki"
    },
    {
      root: "Kaffir boetie",
      variations: [],
      category: "racist",
      definition: "A person who sympathized with the Cape Coloured ethnic group during apartheid. From the Afrikaans for \"kaffir brothers\"",
      source: "wiki"
    },
    {
      root: "Kaffir",
      variations: [
        "Kaffer",
        "Kaffre",
        "Kuffar"
      ],
      category: "racist",
      definition: "A Black person from Cape Coloured or Coloured ethinic groups. From the Arabic \"kafir\", meaning \"disbeliever\"",
      source: "wiki"
    },
    {
      root: "Kaew",
      variations: [],
      category: "racist",
      definition: "A Vietnamese person. From the Thai word for \"glass\"",
      source: "wiki"
    },
    {
      root: "Jutku",
      variations: [
        "Jutsku"
      ],
      category: "antisemitic",
      definition: "A Jewish person. From the Finnish word for \"Jew\"",
      source: "wiki"
    },
    {
      root: "Jovenlandés",
      variations: [],
      category: "xenophobic",
      definition: "An alleged criminal non-European migrant. From the Spanish for \"younglander\"",
      source: "wiki"
    },
    {
      root: "Jock",
      variations: [
        "Jocky",
        "Jockie"
      ],
      category: "racist",
      definition: "A Scottish person. From the Scots language nickname for the name John",
      source: "wiki"
    },
    {
      root: "Jjokbari",
      variations: [],
      category: "racist",
      definition: "A Japanese person, or person of Japanese ancestry. From the Korean for \"cloven foot\"",
      source: "wiki"
    },
    {
      root: "Jjangkkae",
      variations: [],
      category: "racist",
      definition: "A Chinese person. From the Korean for \"shopkeeper\"",
      source: "wiki"
    },
    {
      root: "Jim Crow",
      variations: [],
      category: "racist",
      definition: "A Black person, a reference to Jim Crow laws",
      source: "wiki"
    },
    {
      root: "Jidan",
      variations: [
        "Jidov",
        "Jidovin",
        "Jidovină"
      ],
      category: "antisemitic",
      definition: "A Jewish person. From the Romanian word for \"yiddish\"",
      source: "wiki"
    },
    {
      root: "Jewboy",
      variations: [],
      category: "antisemitic",
      definition: "A Jewish boy",
      source: "wiki"
    },
    {
      root: "Jerry",
      variations: [],
      category: "racist",
      definition: "A German person, especially a soldier. Probably an alteration of \"German\"",
      source: "wiki"
    },
    {
      root: "Jawir",
      variations: [],
      category: "racist",
      definition: "A Javanese person, especially someone with darker skin. From the Indonesias words for \"Java\" and \"black\"",
      source: "wiki"
    },
    {
      root: "Japie",
      variations: [
        "Yarpie"
      ],
      category: "racist",
      definition: "A white, rural South African person. From the Afrikaans for \"farm boy\"",
      source: "wiki"
    },
    {
      root: "Jap",
      variations: [],
      category: "racist",
      definition: "A Japanese or Jewish person, depending on the context",
      source: "wiki"
    },
    {
      root: "Jamet",
      variations: [
        "Jamet kuproy"
      ],
      category: "racist",
      definition: "A Javanese person. From the Indonesian for \"a metalhead Javanese\"",
      source: "wiki"
    },
    {
      root: "Jakun",
      variations: [],
      category: "racist",
      definition: "The Malay name for an indigenous ethnic group, used to mean \"unsophisticated people\"",
      source: "wiki"
    },
    {
      root: "Jackeen",
      variations: [],
      category: "racist",
      definition: "A person from Dublin, believed to be in reference to the Union Jack",
      source: "wiki"
    },
    {
      root: "Itaker",
      variations: [
        "Bachicha"
      ],
      category: "racist",
      definition: "An Italian person",
      source: "wiki"
    },
    {
      root: "Itor",
      variations: [],
      category: "racist",
      definition: "A person from the Greater Cumilla region of Bangladesh. Borrowed from the English acronym for \"Information Technology Organiser\" was a title given by the British to people from the Tipperah district (now the districts of Cumilla, Brahmanbaria and Chandpur) in the Bengal province due to their quick thinking",
      source: "wiki"
    },
    {
      root: "Inu",
      variations: [],
      category: "racist",
      definition: "An Ainu person, literally means \"dog\" in Japanese",
      source: "wiki"
    },
    {
      root: "Inselaffe",
      variations: [],
      category: "racist",
      definition: "A British person, German for \"island monkey\"",
      source: "wiki"
    },
    {
      root: "Indian Giver",
      variations: [],
      category: "racist",
      definition: "A Native American. Presumes that when Native Americans give gifts they intend to take them back. It is applied to anyone who does this to paint them as performing an action akin to an \"Indian\"",
      source: "wiki"
    },
    {
      root: "Inyezi",
      variations: [],
      category: "racist",
      definition: "A Tutsi person. From the Kinyarwandan word for \"cockroach'",
      source: "wiki"
    },
    {
      root: "Intsik",
      variations: [],
      category: "racist",
      definition: "A Chinese Filipinio person, based on the Philippine Hokkien term meaning \"his/her/their uncle\"",
      source: "wiki"
    },
    {
      root: "Indognesial",
      variations: [
        "Indonesial"
      ],
      category: "racist",
      definition: "An Indonesian person, mixes \"Indonesia\" with the Malay words for \"dog\" and \"damn\"",
      source: "wiki"
    },
    {
      root: "Indon",
      variations: [],
      category: "racist",
      definition: "An Indonesian person",
      source: "wiki"
    },
    {
      root: "Indio",
      variations: [
        "Indito"
      ],
      category: "racist",
      definition: "An indigenous person",
      source: "wiki"
    },
    {
      root: "Ikey-mo",
      variations: [],
      category: "antisemitic",
      definition: "A Jewish person, derived from the names Isaac and Moses, two important figures in Hebrew culture",
      source: "wiki"
    },
    {
      root: "Ike",
      variations: [
        "Ikey",
        "Iky",
        "Itzig"
      ],
      category: "antisemitic",
      definition: "A Jewish person, derived from the name Isaac",
      source: "wiki"
    },
    {
      root: "Hurri",
      variations: [],
      category: "racist",
      definition: "A Swedish speaker who lives in Finland or a Swedish person",
      source: "wiki"
    },
    {
      root: "Hunk",
      variations: [
        "Hunky"
      ],
      category: "racist",
      definition: "A central European laborer",
      source: "wiki"
    },
    {
      root: "Hujaa",
      variations: [],
      category: "racist",
      definition: "A Chinese person, Mongolian for \"Chinese emigrant\"",
      source: "wiki"
    },
    {
      root: "Huinca",
      variations: [],
      category: "racist",
      definition: "A non-Mapuche Chilean or Argentine person",
      source: "wiki"
    },
    {
      root: "Huan-a",
      variations: [],
      category: "xenophobic",
      definition: "A non-Chinese native person, literally translates to \"foreigner\"",
      source: "wiki"
    },
    {
      root: "Houtkop",
      variations: [],
      category: "racist",
      definition: "A Black person. From the Afrikaans for \"wooden head\"",
      source: "wiki"
    },
    {
      root: "Hori",
      variations: [],
      category: "racist",
      definition: "A Māori person. From the formerly common Maorified version of the English name George",
      source: "wiki"
    },
    {
      root: "Honky",
      variations: [
        "Honkey",
        "Honkie"
      ],
      category: "racist",
      definition: "A white person, sometimes European New Zealanders if the speaker is Māori",
      source: "wiki"
    },
    {
      root: "Hillbilly",
      variations: [],
      category: "racist",
      definition: "An Appalachian or Ozark American",
      source: "wiki"
    },
    {
      root: "Hike",
      variations: [],
      category: "racist",
      definition: "An Italian immigrant",
      source: "wiki"
    },
    {
      root: "Hevosmies",
      variations: [],
      category: "racist",
      definition: "A Romani person. From the Finnish hevos- + mies, referring to Gypsy horsemanship",
      source: "wiki"
    },
    {
      root: "Hun",
      variations: [],
      category: "racist",
      definition: "A German person or a Christian Protestant",
      source: "wiki"
    },
    {
      root: "Heukhyeong",
      variations: [],
      category: "racist",
      definition: "A Black person, Korean for \"black brother\"",
      source: "wiki"
    },
    {
      root: "Heigui",
      variations: [],
      category: "racist",
      definition: "A Black person. Literally means \"black ghost\" or \"black devil\" in Mandarin",
      source: "wiki"
    },
    {
      root: "Haole",
      variations: [],
      category: "racist",
      definition: "A non-Hawaiian person. Can be used neutrally, intent is dependent on the context",
      source: "wiki"
    },
    {
      root: "Hambaya",
      variations: [
        "Hamba"
      ],
      category: "islamophobic",
      definition: "A Muslim in Sri Lanka, derived from the Sinhala word for sampan boats",
      source: "wiki"
    },
    {
      root: "Half-caste",
      variations: [],
      category: "racist",
      definition: "A mixed race person, usually between Australian Aboriginal and white people",
      source: "wiki"
    },
    {
      root: "Half-breed",
      variations: [],
      category: "racist",
      definition: "A multi-ethnic person",
      source: "wiki"
    },
    {
      root: "Hajji",
      variations: [
        "Hadji",
        "Haji"
      ],
      category: "xenophobic",
      definition: "An Iraqi person, but may also be used to describe anyone from a predominantly Muslim country. Derived from the honorific Al-Hajji, the title given to a Muslim who has completed the Hajj (pilgrimage to Mecca)",
      source: "wiki"
    },
    {
      root: "Hairyback",
      variations: [],
      category: "racist",
      definition: "A member of the Afrikaner ethic group",
      source: "wiki"
    },
    {
      root: "Coloured",
      variations: [],
      category: "racist",
      definition: "A Black person. When used in the name of the Cape Coloured or Coloured ethnic groups it's unlikely that any harm is intended",
      source: "goodboy"
    },
    {
      root: "Gypsy",
      variations: [
        "Gyppo",
        "Gippo",
        "Gypo",
        "Gyppie",
        "Gyppy",
        "Gipp"
      ],
      category: "racist",
      definition: "An Egyptian or Romani person, derived from \"Egyptian\"",
      source: "wiki"
    },
    {
      root: "Gyp",
      variations: [
        "Gip"
      ],
      category: "racist",
      definition: "A Romani person, shortened form of \"gypsy\"",
      source: "wiki"
    },
    {
      root: "Gweilo",
      variations: [
        "Gwailo",
        "Gwilo",
        "Kwai lo"
      ],
      category: "racist",
      definition: "A white man. From Cantonese 鬼佬, which loosely translates as \"foreign devil\" or \"ghost guy\"",
      source: "wiki"
    },
    {
      root: "Gusano",
      variations: [],
      category: "racist",
      definition: "A Cuban exile post-revolution, literally \"worm\"",
      source: "wiki"
    },
    {
      root: "Gummihals",
      variations: [],
      category: "racist",
      definition: "A German person, Swiss German for \"rubber neck\"",
      source: "wiki"
    },
    {
      root: "Guinea",
      variations: [
        "Ginzo"
      ],
      category: "racist",
      definition: "An Italian person. Most likely derived from \"Guinea Negro\", implying that Italians are dark or swarthy-skinned like the natives of Guinea",
      source: "wiki"
    },
    {
      root: "Guido",
      variations: [
        "Guidette"
      ],
      category: "racist",
      definition: "An Italian American Person. Derives from the Italian given name, Guido",
      source: "wiki"
    },
    {
      root: "Guiri",
      variations: [],
      category: "xenophobic",
      definition: "A foreigner. Originally described the supporters of Queen Maria Christina. Now describes White Northern Europeans",
      source: "wiki"
    },
    {
      root: "Gub",
      variations: [
        "Gubba"
      ],
      category: "racist",
      definition: "A white person. From the Australian Aboriginal term",
      source: "wiki"
    },
    {
      root: "Gringo",
      variations: [
        "Gringa"
      ],
      category: "racist",
      definition: "Depending on the speaker or location can refer to English speakers, foreigners or descendants of Italians. Used throughout Latin America and worldwide by Spanish speakers",
      source: "wiki"
    },
    {
      root: "Greenhorn",
      variations: [],
      category: "racist",
      definition: "A Portuguese person. This is not derogatory when referring to a non-Poruguese person who is inexperienced at something",
      source: "wiki"
    },
    {
      root: "Greaser",
      variations: [
        "Greaseball"
      ],
      category: "racist",
      definition: "A Mediterranean, Southern European or Hispanic person, particularly Italian people",
      source: "wiki"
    },
    {
      root: "Grago",
      variations: [
        "Gragok"
      ],
      category: "racist",
      definition: "A Eruasian person, particularly of the Kristang people. Means \"shrimp\"",
      source: "wiki"
    },
    {
      root: "Goy",
      variations: [
        "Goyim",
        "Goyum"
      ],
      category: "non-believers",
      definition: "A non-Jewish person. A Hebrew biblical term for \"Nation\" or \"People\". By Roman times it had also acquired the meaning of \"non-Jew\"",
      source: "wiki"
    },
    {
      root: "Gora",
      variations: [],
      category: "racist",
      definition: "A white person. From the Hindi \"gorā\", meaning \"fair, white\"",
      source: "wiki"
    },
    {
      root: "Goombah",
      variations: [],
      category: "racist",
      definition: "An Italian or Italian-American person. Originates from the Southern Italian word \"cumpa\" or \"cumpari\" and the Standard Italian equivalent, \"compare\", meaning \"godfather\" or \"partner-in-crime\"",
      source: "wiki"
    },
    {
      root: "Gook",
      variations: [
        "Gooky",
        "Gook eye"
      ],
      category: "racist",
      definition: "An East or Southeast Asian, but particularly a Korean person",
      source: "wiki"
    },
    {
      root: "Golliwog",
      variations: [
        "Golliwogg",
        "Golly"
      ],
      category: "racist",
      definition: "A Dark-skinned person, especially African-Caribbeans. Originally a children's literature character and type of black doll",
      source: "wiki"
    },
    {
      root: "Godon",
      variations: [],
      category: "racist",
      definition: "An English person",
      source: "wiki"
    },
    {
      root: "Godo",
      variations: [],
      category: "racist",
      definition: "A non-Canarian Spanish person. Literally means “Gothic,” originally referring to the Visigoths",
      source: "wiki"
    },
    {
      root: "Gin jockey",
      variations: [],
      category: "racist",
      definition: "A white person having casual sex with an Aboriginal woman",
      source: "wiki"
    },
    {
      root: "Gin",
      variations: [],
      category: "racist",
      definition: "An Aboriginal Australian woman",
      source: "wiki"
    },
    {
      root: "Ghati",
      variations: [],
      category: "racist",
      definition: "A Maharashtrian living in Ghats",
      source: "wiki"
    },
    {
      root: "Gexhë",
      variations: [],
      category: "racist",
      definition: "A Serb from Šumadija",
      source: "wiki"
    },
    {
      root: "Geomdung-i",
      variations: [],
      category: "racist",
      definition: "A Black person. From the Korean \"검둥이\" meaning \"coon\"",
      source: "wiki"
    },
    {
      root: "Garoi",
      variations: [],
      category: "racist",
      definition: "A Romani person, means \"crow\" in Romanian",
      source: "wiki"
    },
    {
      root: "Gans",
      variations: [],
      category: "racist",
      definition: "A German person, or uncommonly a Latvian person. Comes from a Russified form of the German name \"Hans\"",
      source: "wiki"
    },
    {
      root: "Gam",
      variations: [
        "Gammat"
      ],
      category: "racist",
      definition: "A member of the Cape Coloured or Coloured ethnic group, meaning \"a person who is low or of inferior status\" in Afrikaans",
      source: "wiki"
    },
    {
      root: "Galla",
      variations: [],
      category: "racist",
      definition: "An Oromo person or others in Ethiopia and Somalia",
      source: "wiki"
    },
    {
      root: "Gaijin",
      variations: [],
      category: "xenophobic",
      definition: "A foreigner, especially those of non-East Asian origin. From the Japanese \"外人\"",
      source: "wiki"
    },
    {
      root: "Gadjo",
      variations: [
        "Payo"
      ],
      category: "racist",
      definition: "A non-Romani person, technically a term for a person who does not possess Romanipen",
      source: "wiki"
    },
    {
      root: "Gabel",
      variations: [],
      category: "racist",
      definition: "A Romani person",
      source: "wiki"
    },
    {
      root: "Gabacho",
      variations: [],
      category: "racist",
      definition: "Depending on the speaker either a French or American person. From the Occitan \"gavach\", meaning \"one who speaks wrong\"",
      source: "wiki"
    },
    {
      root: "Fuzzy Wuzzy",
      variations: [],
      category: "racist",
      definition: "A Hadendoa person, a reference to their elaborate hairstyles",
      source: "wiki"
    },
    {
      root: "Frog",
      variations: [
        "Froggy",
        "Frogeater",
        "Froschfresser"
      ],
      category: "racist",
      definition: "A French or French Canadian person, or in the 19th century a Dutch person",
      source: "wiki"
    },
    {
      root: "Fritz",
      variations: [
        "Fricc",
        "Fryc",
        "Fricis"
      ],
      category: "racist",
      definition: "A German person. From the German name Friedrich",
      source: "wiki"
    },
    {
      root: "Franchute",
      variations: [],
      category: "racist",
      definition: "A french person, used in Chile and Argentina",
      source: "wiki"
    },
    {
      root: "Fodechincho",
      variations: [],
      category: "racist",
      definition: "A non-Galician Spaniard in Galicia. From the Galician for \"mackerel stealer\"",
      source: "wiki"
    },
    {
      root: "Flip",
      variations: [],
      category: "racist",
      definition: "A Filipino person",
      source: "wiki"
    },
    {
      root: "Fjellabe",
      variations: [],
      category: "racist",
      definition: "A Norwegian person. From the Danish for \"mountain ape\"",
      source: "wiki"
    },
    {
      root: "Fidschi",
      variations: [],
      category: "racist",
      definition: "An East or Southeast Asian person, particularly Vietnamese people. From the German for \"Fiji\"",
      source: "wiki"
    },
    {
      root: "Festival children",
      variations: [
        "Festival child"
      ],
      category: "racist",
      definition: "A child of mixed ancestry, usually with a father who is Black or of harmful-European origin. Not currently used, but popular in 1950s Russia",
      source: "wiki"
    },
    {
      root: "Farang khi nok",
      variations: [],
      category: "racist",
      definition: "A poor white person. From Thai: khi means \"feces\" and nok means \"bird\", referring to the color of bird-droppings",
      source: "wiki"
    },
    {
      root: "Fresh off the boat",
      variations: [
        "Off the boat",
        "FOB"
      ],
      category: "xenophobic",
      definition: "A recent immigrant who is still unfamiliar with the culture and language of their new country",
      source: "goodboy"
    },
    {
      root: "Fan Kui",
      variations: [
        "Fangui",
        "Gui zi",
        "Guizi",
        "Gui"
      ],
      category: "racist",
      definition: "Any of the non-Chinese native people of Southeast Asia. From \"gui\", meaning \"demon\"",
      source: "wiki"
    },
    {
      root: "Eye tie",
      variations: [],
      category: "racist",
      definition: "An Italian person. From a misponunciation of Italian",
      source: "wiki"
    },
    {
      root: "Engelsman",
      variations: [],
      category: "racist",
      definition: "A white South African of British descent whose first language is English. From the Afrikaans for Englishman",
      source: "wiki"
    },
    {
      root: "Dune coon",
      variations: [
        "Camel rider"
      ],
      category: "racist",
      definition: "An Arab person",
      source: "wiki"
    },
    {
      root: "Dothead",
      variations: [
        "Dot"
      ],
      category: "hinduphobic",
      definition: "A Hindu woman, in reference to the bindi",
      source: "wiki"
    },
    {
      root: "Dink",
      variations: [],
      category: "racist",
      definition: "A Southeast Asian person, particularly Vietnamese people",
      source: "wiki"
    },
    {
      root: "Dhoti",
      variations: [],
      category: "racist",
      definition: "An Indian or Madheshi person, a reference to indigenous Dhoti clothing",
      source: "wiki"
    },
    {
      root: "Dalle",
      variations: [
        "Batak Dalle"
      ],
      category: "racist",
      definition: "A Batak person",
      source: "wiki"
    },
    {
      root: "Dal Khor",
      variations: [],
      category: "racist",
      definition: "An Indian or Pakistani person, specifically Punjabis. Translates to \"dal eater\"",
      source: "wiki"
    },
    {
      root: "Dago",
      variations: [
        "Dego"
      ],
      category: "racist",
      definition: "An Italian, Spanish, Greek, Portuguese or Maltese person in the United States",
      source: "wiki"
    },
    {
      root: "Czarnuch",
      variations: [
        "Czarnucha"
      ],
      category: "racist",
      definition: "A Black person. From the Polish word \"czarny\", meaning \"black\"",
      source: "wiki"
    },
    {
      root: "Cushi",
      variations: [
        "Kushi"
      ],
      category: "racist",
      definition: "A dark-skinned person, used in the Hebrew Bible to refer to dark-skinne people of African descent but became pejorative in present-day Israel",
      source: "wiki"
    },
    {
      root: "Curry muncher",
      variations: [],
      category: "racist",
      definition: "A South Asian person",
      source: "wiki"
    },
    {
      root: "Culchie",
      variations: [],
      category: "racist",
      definition: "A rural Irish person",
      source: "wiki"
    },
    {
      root: "Crucco",
      variations: [
        "Crucca"
      ],
      category: "racist",
      definition: "A German person",
      source: "wiki"
    },
    {
      root: "Cracker",
      variations: [],
      category: "racist",
      definition: "A White person, especially poor Appalachian and Southern people",
      source: "wiki"
    },
    {
      root: "Cotton picker",
      variations: [],
      category: "racist",
      definition: "A person of African descent. Historically referred to someone who harvested cotton by hand, often used in the context of American slavery when enslaved Black people were forced to pick cotton on plantations. The phrase originally referred to the actual occupation of picking cotton on plantations in the American South, but that it later became a racial slur",
      source: "wiki"
    },
    {
      root: "Coreano",
      variations: [],
      category: "racist",
      definition: "A Chinese or Japanese person",
      source: "wiki"
    },
    {
      root: "Coon ass",
      variations: [],
      category: "racist",
      definition: "A Cajun person",
      source: "wiki"
    },
    {
      root: "Coon",
      variations: [
        "Cooney"
      ],
      category: "racist",
      definition: "A Black person, Aboriginal Australian or Pacific Islander depending on the speaker",
      source: "wiki"
    },
    {
      root: "Coolie",
      variations: [],
      category: "racist",
      definition: "An Asian person, usually Chinese or an Indo-Caribbean person depeding on the speaker",
      source: "wiki"
    },
    {
      root: "Coño",
      variations: [],
      category: "racist",
      definition: "A Spanish person",
      source: "wiki"
    },
    {
      root: "Colono",
      variations: [],
      category: "racist",
      definition: "An Italian Brazilian or German Brazilian. Although it is not generally considered an insult in other parts of Brazil, in Rio Grande do Sul it is considered pejorative because it is considered an offensive nickname and is given to those who are native to the Rio Grande do Sul countryside (mainly Caxias do Sul and Bento Gonçalves), who are descendants of Italians or Germans and who have a strong accent compared to those who are native to the state's capital, Porto Alegre",
      source: "wiki"
    },
    {
      root: "Coconut",
      variations: [],
      category: "racist",
      definition: "A Hispanic, Latino, South/Southeast Asian or Pacific Islander, someone who is \"brown on the outside and white on the inside\"",
      source: "wiki"
    },
    {
      root: "Cioară",
      variations: [],
      category: "racist",
      definition: "A Romani or Black person, means \"crow\" in Romanian",
      source: "wiki"
    },
    {
      root: "Cigányforma",
      variations: [],
      category: "racist",
      definition: "A person from an ethnic group or nation where the combination of black hair with brown eyes is dominant. Literal meaning is \"gypsy folks\"",
      source: "wiki"
    },
    {
      root: "Ciapaty",
      variations: [
        "Ciapak"
      ],
      category: "racist",
      definition: "A Middle Easter, North African, South Asian or Caucasian person. Derived from the Polish for \"chapati\"",
      source: "wiki"
    },
    {
      root: "Churka",
      variations: [
        "чурка"
      ],
      category: "racist",
      definition: "Western an Central Asians. From \"Chock of wood\" or \"Ignorant person\"",
      source: "wiki"
    },
    {
      root: "Chukhonets",
      variations: [
        "Chukhna",
        "Chukhoncy"
      ],
      category: "racist",
      definition: "A Finnic person",
      source: "wiki"
    },
    {
      root: "Chug",
      variations: [],
      category: "racist",
      definition: "A Canadian aboriginal person",
      source: "wiki"
    },
    {
      root: "Chuchmek",
      variations: [
        "Chechmek"
      ],
      category: "racist",
      definition: "A Middle or Central Asian person, sometimes a person from the Caucasus or simply non-Russians or non-European looking people. From Chichimec, a derogatory term used by the Aztecs and other Mesoamericans to describe the Chichimecs as \"uncivilized, aggressive savages\"",
      source: "wiki"
    },
    {
      root: "Chow mein",
      variations: [],
      category: "racist",
      definition: "A Chinese of Norheast Indian person",
      source: "wiki"
    },
    {
      root: "Chon",
      variations: [
        "Baka Chon"
      ],
      category: "racist",
      definition: "A Korean person, used by Japanese people",
      source: "wiki"
    },
    {
      root: "Cholo",
      variations: [
        "Chola"
      ],
      category: "racist",
      definition: "Depending on the speaker; a Bolivian / Peruvian, Mestizo / Indigenous or any Hispanic person. The level of harmful intent varies by speaker. Has been reclaimed in some Mexican subcultures, especially in Southern California",
      source: "wiki"
    },
    {
      root: "Chonky",
      variations: [],
      category: "racist",
      definition: "A person of Asian heritage with \"white attributes\", in either personality or appearance",
      source: "wiki"
    },
    {
      root: "Chirigüillo",
      variations: [
        "Chiriwillo"
      ],
      category: "racist",
      definition: "A non-White Mexican migrant",
      source: "wiki"
    },
    {
      root: "Chink",
      variations: [
        "Chinky",
        "Chinky Chonky"
      ],
      category: "racist",
      definition: "An East or South East Asian person",
      source: "wiki"
    },
    {
      root: "Chinaman",
      variations: [
        "Ching Chong Chinaman"
      ],
      category: "racist",
      definition: "A Chinese male",
      source: "goodboy"
    },
    {
      root: "Chilote",
      variations: [],
      category: "racist",
      definition: "A Chilean person",
      source: "wiki"
    },
    {
      root: "Chilango",
      variations: [],
      category: "racist",
      definition: "An inhabitant of Mexico City",
      source: "wiki"
    },
    {
      root: "Chernozhopy",
      variations: [
        "Chernomazy",
        "Chornaya zhopa"
      ],
      category: "racist",
      definition: "Black skinned person from the Caucasus",
      source: "wiki"
    },
    {
      root: "Chekwa",
      variations: [
        "Tsekwa"
      ],
      category: "racist",
      definition: "A Chinese Filipino person. From the late 19th century Cebuano Bisaya street children's limerick, \"Cebuano: Intsik, wákang, káun, kalibang!\"",
      source: "wiki"
    },
    {
      root: "Chefur",
      variations: [
        "čefur"
      ],
      category: "racist",
      definition: "A non-Slovenian person of former Yugoslavia (Serbs, Croats, Bosniaks, Montenegrins and Macedonians)",
      source: "wiki"
    },
    {
      root: "Cheese-eating surrender monkey",
      variations: [],
      category: "racist",
      definition: "A French person, originated with a 1995 episode of The Simpsons",
      source: "wiki"
    },
    {
      root: "Chee Chee",
      variations: [
        "Chi Chi"
      ],
      category: "racist",
      definition: "A Eurasian mixed-race person, especially Anglo-Indians, probably derived from Hindi chi-chi fie!, literally, dirt",
      source: "wiki"
    },
    {
      root: "China Swede",
      variations: [],
      category: "racist",
      definition: "A Finnish person",
      source: "wiki"
    },
    {
      root: "Charlie",
      variations: [],
      category: "racist",
      definition: "Depending on the speaker either White Americans or Vietnamese People",
      source: "wiki"
    },
    {
      root: "Chankoro",
      variations: [],
      category: "racist",
      definition: "A Chinese person. From チャンコロ, a Japanese reference to a Chinese person",
      source: "wiki"
    },
    {
      root: "Chakma",
      variations: [],
      category: "racist",
      definition: "A Jumma, Chinese and Burmese person, or any people with mongoloid features in Bangladesh",
      source: "wiki"
    },
    {
      root: "Chakhchakh",
      variations: [
        "Baboon"
      ],
      category: "racist",
      definition: "A Mizrahi Jew",
      source: "wiki"
    },
    {
      root: "Carcamano",
      variations: [],
      category: "racist",
      definition: "An Italian person. A term that originated in Brazil",
      source: "goodboy"
    },
    {
      root: "Camel driver",
      variations: [],
      category: "racist",
      definition: "An Arab or Turkish person",
      source: "wiki"
    },
    {
      root: "Camel Jockey",
      variations: [],
      category: "racist",
      definition: "A Middle Eastern person",
      source: "wiki"
    },
    {
      root: "Canaca",
      variations: [],
      category: "racist",
      definition: "A Chinese and Japanese person. The term originated in the Chilean territories in Oceania",
      source: "wiki"
    },
    {
      root: "Cabbage eater",
      variations: [],
      category: "racist",
      definition: "A German or Russian person",
      source: "wiki"
    },
    {
      root: "Bushy",
      variations: [
        "Bushies",
        "Amadushie",
        "Bushman"
      ],
      category: "racist",
      definition: "A Khoisan or San person, a reference to their nomadic lifestyle and reliance on the bush for survival",
      source: "wiki"
    },
    {
      root: "Burr head",
      variations: [],
      category: "racist",
      definition: "A Black person, a reference to Afro-textured hair",
      source: "wiki"
    },
    {
      root: "Bumbay",
      variations: [
        "Pajeet",
        "Jeet"
      ],
      category: "racist",
      definition: "An Indian person",
      source: "goodboy"
    },
    {
      root: "Buckra",
      variations: [
        "Bakra"
      ],
      category: "racist",
      definition: "A white person, of West African origin, likely derived from the Ibibio and Efik word mbakara, which means \"(white) European\" or \"master\"",
      source: "goodboy"
    },
    {
      root: "Buddhahead",
      variations: [],
      category: "racist",
      definition: "An Asian person, or Hawaiian Japanese Americans when used by Japanese Americans",
      source: "wiki"
    },
    {
      root: "Buckwheat",
      variations: [],
      category: "racist",
      definition: "The curly hair of a Black person. From the name of a Black character that appeared in the Our Gang (Little Rascals) short films",
      source: "wiki"
    },
    {
      root: "Brillo Pad",
      variations: [],
      category: "racist",
      definition: "The curly hair of a Black person",
      source: "wiki"
    },
    {
      root: "Brownie",
      variations: [],
      category: "racist",
      definition: "A Brown-skinned or Asian person",
      source: "wiki"
    },
    {
      root: "Bozgor",
      variations: [],
      category: "racist",
      definition: "A Hungarian person",
      source: "wiki"
    },
    {
      root: "Bounty Bar",
      variations: [
        "Choc ice",
        "Oreo"
      ],
      category: "racist",
      definition: "A Black person who is \"Black on the outside, white on the inside\"",
      source: "wiki"
    },
    {
      root: "Bougnoule",
      variations: [],
      category: "racist",
      definition: "An Arabian person, North Africans or Black people. Originally used against Black people but broadened to brown Arabs",
      source: "wiki"
    },
    {
      root: "Bootlip",
      variations: [],
      category: "racist",
      definition: "African American person",
      source: "wiki"
    },
    {
      root: "Bunga",
      variations: [
        "Boonie"
      ],
      category: "racist",
      definition: "A Pacific Islanders",
      source: "wiki"
    },
    {
      root: "Boong",
      variations: [
        "Boang",
        "Bung"
      ],
      category: "racist",
      definition: "A Pacific Islander or Aboriginal Australian, depending on the speaker",
      source: "wiki"
    },
    {
      root: "Bong",
      variations: [],
      category: "racist",
      definition: "A Bengali or Aboriginal Australian person, depending on the speaker",
      source: "wiki"
    },
    {
      root: "Bolita",
      variations: [],
      category: "racist",
      definition: "A Bolivian person",
      source: "wiki"
    },
    {
      root: "Bohunk",
      variations: [],
      category: "racist",
      definition: "A Bohemian person",
      source: "wiki"
    },
    {
      root: "Bogate",
      variations: [],
      category: "racist",
      definition: "A Yugoslavian person",
      source: "wiki"
    },
    {
      root: "Boerehater",
      variations: [
        "Boer hater"
      ],
      category: "racist",
      definition: "A British person, refers to a person who hates, prejudices, or criticizes the Boers, or Afrikaners",
      source: "wiki"
    },
    {
      root: "Boeotian",
      variations: [],
      category: "racist",
      definition: "Boeotian Greek person",
      source: "wiki"
    },
    {
      root: "Boche",
      variations: [
        "Bosche",
        "Bosch"
      ],
      category: "racist",
      definition: "A German person, shortened from the French term \"caboche dure\", meaning \"hard head\" or \"cabbage head\" with the influence of German surname Bosch",
      source: "wiki"
    },
    {
      root: "Blatte",
      variations: [],
      category: "racist",
      definition: "Foreigners with dark skin. From the Swedish word for \"dark-skinned\"",
      source: "goodboy"
    },
    {
      root: "Black buck",
      variations: [
        "Black Brute",
        "Brown Buck",
        "Brown Brute"
      ],
      category: "racist",
      definition: "A Black man",
      source: "wiki"
    },
    {
      root: "Bimbo",
      variations: [],
      category: "misogynistic",
      definition: "An attractive but unintelligent or frivolous young woman. Sometimes used as a racist slur for Africans, or people with very dark skin in general",
      source: "goodboy"
    },
    {
      root: "Beaner",
      variations: [
        "Beaney"
      ],
      category: "racist",
      definition: "A Hispanic or Latino person, especially Mexicans. Originates from the use of frijoles pintos and other beans that can be generally found in Mexican food or other Hispanic and Latino foods",
      source: "wiki"
    },
    {
      root: "Barbarian",
      variations: [],
      category: "racist",
      definition: "Someone who is perceived to be either uncivilized or primitive. βάρβαρος (barbaros pl. βάρβαροι barbaroi). In Ancient Greece, the Greeks used the term towards those who did not speak Greek and follow classical Greek customs",
      source: "wiki"
    },
    {
      root: "Banderite",
      variations: [],
      category: "racist",
      definition: "A Ukrainian person, a reference to the ultra-nationalist leader Stepan Bandera",
      source: "wiki"
    },
    {
      root: "Banana",
      variations: [],
      category: "racist",
      definition: "A East or Southeast Asian person, someone who is \"yellow on the outside, whitet on the inside\"",
      source: "wiki"
    },
    {
      root: "Banaan",
      variations: [],
      category: "racist",
      definition: "A Black person or someone of African descent. From the Dutch word for Banana",
      source: "wiki"
    },
    {
      root: "Bambus",
      variations: [],
      category: "racist",
      definition: "A Black person, sometimes Asian people. Literally it means \"bamboo\" in Polish but most probably it's derived from a popular children's poem Murzynek Bambo",
      source: "wiki"
    },
    {
      root: "Balija",
      variations: [],
      category: "racist",
      definition: "A Bonsian person",
      source: "wiki"
    },
    {
      root: "Baiano",
      variations: [],
      category: "racist",
      definition: "A Northeastern Brazilian person. From \"Bahia\", one of the 9 states in the Northeast Region of Brazil",
      source: "wiki"
    },
    {
      root: "Aunt Jemima",
      variations: [
        "Aunt Jane",
        "Aunt Mary",
        "Aunt Sally"
      ],
      category: "racist",
      definition: "A Black woman, specifically one how \"kisses up\" to whites. Female counterpar of Uncle Tom",
      source: "wiki"
    },
    {
      root: "Ashke Nazi",
      variations: [
        "Ashke Natzi"
      ],
      category: "antisemitic",
      definition: "An Ashkenazi Jew. Mostly used mostly by Mizrachi Jews",
      source: "wiki"
    },
    {
      root: "Asing",
      variations: [
        "Aseng"
      ],
      category: "racist",
      definition: "A non-Indonesian person, especially Chinese people. From \"[orang] asing\" (foreigner) that rhymed with \"Aseng\" (Chinese name). This word is often directed at Chinese people due to Indonesia's relationship with the PRC",
      source: "wiki"
    },
    {
      root: "Armo",
      variations: [],
      category: "racist",
      definition: "An Armenian or Armenian American person",
      source: "wiki"
    },
    {
      root: "Argie",
      variations: [],
      category: "racist",
      definition: "An Argentinian person",
      source: "wiki"
    },
    {
      root: "Arabush",
      variations: [
        "Araboosh",
        "Aravush"
      ],
      category: "racist",
      definition: "An Arab person, derived from the Herbrew \"Aravi\"",
      source: "wiki"
    },
    {
      root: "Arapis",
      variations: [
        "Arapissa",
        "Arapena"
      ],
      category: "racist",
      definition: "A Black or Arab person. From Turkish arap for \"Arab\" or, colloquially, \"dark-skinned-person\"",
      source: "wiki"
    },
    {
      root: "Ape",
      variations: [
        "Ape-like"
      ],
      category: "racist",
      definition: "A Black person - Referring to outdated theories ascribing cultural differences between racial groups as being linked to their evolutionary distance from chimpanzees, with which humans share common ancestry",
      source: "wiki"
    },
    {
      root: "Apple",
      variations: [],
      category: "racist",
      definition: "A Native American person who is \"red on the outside, white on the inside\"",
      source: "wiki"
    },
    {
      root: "Bing",
      variations: [
        "Binghi"
      ],
      category: "racist",
      definition: "An Aboriginal Australian person. From \"Binighi\", an aboriginal word for \"brother\"",
      source: "wiki"
    },
    {
      root: "Annamite",
      variations: [
        "Mite"
      ],
      category: "racist",
      definition: "A Vietnamese person",
      source: "wiki"
    },
    {
      root: "Miss Ann",
      variations: [
        "Ann"
      ],
      category: "racist",
      definition: "A White woman or \"white-acting\" Black woman",
      source: "wiki"
    },
    {
      root: "Ang Mo",
      variations: [],
      category: "racist",
      definition: "A European person, especially the Dutch. Hokkien for \"red hair\"",
      source: "wiki"
    },
    {
      root: "Hottentot",
      variations: [
        "Hotnot"
      ],
      category: "racist",
      definition: "Historically used by Europeans to refer to the Khoekhoe, the indigenous nomaic pastorialists in South Africa",
      source: "wiki"
    },
    {
      root: "AmaLawu",
      variations: [
        "AmaQheya",
        "Malau"
      ],
      category: "racist",
      definition: "A person from the Khoisan, Cape Coloureds or Coloureds ethnic groups. From the Xhosa words for Hottentot",
      source: "wiki"
    },
    {
      root: "Alligator bait",
      variations: [
        "Gator bait",
        "Tar baby"
      ],
      category: "racist",
      definition: "A Black person, especially Black children",
      source: "wiki"
    },
    {
      root: "Ali Baba",
      variations: [],
      category: "racist",
      definition: "An Iraqi suspected of criminal activity",
      source: "wiki"
    },
    {
      root: "Ah Chah",
      variations: [],
      category: "racist",
      definition: "A South Asian person. From \"阿差\"; Cantonese Yale: \"achā\"; from \"acchā\" meaning \"good\" or \"OK\" in Hindi",
      source: "wiki"
    },
    {
      root: "Afro engineering",
      variations: [
        "African engineering",
        "Nigger rigging"
      ],
      category: "racist",
      definition: "Shoddy, second-rate or unconventional, makeshift workmanship. Indirectly refers to Black American people as worse or lower-valued than white American people",
      source: "wiki"
    },
    {
      root: "Abo",
      variations: [
        "Abbo"
      ],
      category: "racist",
      definition: "An Australian Aboriginal person",
      source: "wiki"
    },
    {
      root: "Abid",
      variations: [
        "Abeed"
      ],
      category: "racist",
      definition: "A Black person. From the Arabic word for slave",
      source: "wiki"
    },
    {
      root: "ABCD",
      variations: [
        "American born confused Desi"
      ],
      category: "racist",
      definition: "\"American-Born Confused Desi\" - Indian Americans or other South Asian Americans who were born in the United States. Has been reclaimed, often now used positively to describe a shared experiencce",
      source: "wiki"
    },
    {
      root: "ABC",
      variations: [
        "American born Chinese"
      ],
      category: "racist",
      definition: "\"American-born Chinese\" - Han or other Chinese (including Taiwanese) born and raised in the United States",
      source: "wiki"
    },
    {
      root: "Abbie",
      variations: [
        "Abe",
        "Abie"
      ],
      category: "antisemitic",
      definition: "A Jewish man",
      source: "wiki"
    },
    {
      root: "Yuppie Flu",
      variations: [],
      category: "disability",
      definition: "Chronic Fatigue Syndrome (CFS)",
      source: "goodboy"
    },
    {
      root: "Supercrip",
      variations: [],
      category: "disability",
      definition: "Someone who overcomes their disability in ways that are often seen by the public as inspiring",
      source: "goodboy"
    },
    {
      root: "Schizo",
      variations: [],
      category: "mental-health",
      definition: "A person who has schizophrenia",
      source: "goodboy"
    },
    {
      root: "Mutant",
      variations: [
        "Freak"
      ],
      category: "disability",
      definition: "A person who has an uncommon genetic condition",
      source: "goodboy"
    },
    {
      root: "Junkie",
      variations: [],
      category: "mental-health",
      definition: "A person who has drug addiction issues",
      source: "goodboy"
    },
    {
      root: "Hunchback",
      variations: [
        "Humpback",
        "Quasimodo"
      ],
      category: "disability",
      definition: "A person who has scoliosis or kyphosis",
      source: "goodboy"
    },
    {
      root: "Gimp",
      variations: [],
      category: "disability",
      definition: "A person who has a limp",
      source: "goodboy"
    },
    {
      root: "The dumb",
      variations: [],
      category: "disability",
      definition: "People who can not speak",
      source: "goodboy"
    },
    {
      root: "Dwarf",
      variations: [
        "Midget",
        "Dwarves",
        "Dwarven",
        "Munchkin"
      ],
      category: "disability",
      definition: "Someone with restricted growth or short stature",
      source: "goodboy"
    },
    {
      root: "The blind",
      variations: [],
      category: "disability",
      definition: "People who have visual impairments",
      source: "goodboy"
    },
    {
      root: "Mental patient",
      variations: [
        "Lunatic",
        "Looney",
        "Mentally deficient",
        "Mental case",
        "Mentally ill"
      ],
      category: "mental-health",
      definition: "A person who has a mental health condition",
      source: "goodboy"
    },
    {
      root: "Able-bodied",
      variations: [],
      category: "disability",
      definition: "Non-disabled",
      source: "goodboy"
    },
    {
      root: "Invalid",
      variations: [],
      category: "disability",
      definition: "A person who has a physical disability",
      source: "goodboy"
    },
    {
      root: "Afflicted by",
      variations: [
        "Suffers from"
      ],
      category: "disability",
      definition: "Depersonalized term for people who have physical disabilities",
      source: "goodboy"
    },
    {
      root: "The handicapped",
      variations: [
        "The disabled",
        "The physically handicapped"
      ],
      category: "disability",
      definition: "Collective, depersonalized term for people who have physical disabilities",
      source: "goodboy"
    },
    {
      root: "Deaf and dumb",
      variations: [
        "Deaf mute"
      ],
      category: "disability",
      definition: "A person who is either deaf and uses sign language or both deaf and can not speak",
      source: "goodboy"
    },
    {
      root: "Downie",
      variations: [
        "Mong",
        "Mongol",
        "Mongoloid",
        "Mongolism"
      ],
      category: "disability",
      definition: "A person who has Down's Synrome",
      source: "goodboy"
    },
    {
      root: "Demented",
      variations: [],
      category: "disability",
      definition: "A person who has dementia",
      source: "goodboy"
    },
    {
      root: "Cripple",
      variations: [
        "Crip",
        "Crippled"
      ],
      category: "disability",
      definition: "A person who has a physical or mobility impairment. Has been reclaimed ny some people with disablities as a positive identity",
      source: "goodboy"
    },
    {
      root: "Challenged",
      variations: [
        "Mentally challenged",
        "Developmentally challenged",
        "Mentally handicapped",
        "Mentally defective",
        "Feeble-minded",
        "Feeb",
        "Imbecile",
        "Subnormal",
        "Special Needs",
        "SPED"
      ],
      category: "disability",
      definition: "A person who has a cognitive disability",
      source: "goodboy"
    },
    {
      root: "Acoustic",
      variations: [],
      category: "disability",
      definition: "Autistic",
      source: "goodboy"
    },
    {
      root: "Retard",
      variations: [
        "Retarded",
        "Retardedly",
        "Mentally retarded",
        "Rarted",
        "Retardedness",
        "Tard",
        "Tarded"
      ],
      category: "disability",
      definition: "A verb meaning to delay or slow a process, used as an harmful term for a person who has a cognitive disability",
      source: "goodboy"
    },
    {
      root: "Dotard",
      variations: [
        "Anecdotard",
        "Dotardly",
        "Dotardism",
        "Dotardness",
        "Dotardy",
        "Senile"
      ],
      category: "disability",
      definition: "An old person with impaired intellect; a senile person; one in their dotage",
      source: "goodboy"
    },
    {
      root: "Spastic",
      variations: [
        "Spas",
        "Spaz",
        "Spazzy",
        "Spack"
      ],
      category: "disability",
      definition: "A person who has spasticity; an intermittent or sustained involuntary contraction of muscles",
      source: "goodboy"
    },
    {
      root: "Prostitute",
      variations: [
        "Prozzy",
        "Prozzie",
        "Prossy",
        "Prossie",
        "Hooker",
        "Lady of the night",
        "Call girl",
        "Street walker",
        "Joytoy",
        "Working girl",
        "Whore",
        "Harlot",
        "Sex worker"
      ],
      category: "prostitution",
      definition: "A woman who sells or exchanges sex",
      source: "wsp"
    },
    {
      root: "Lot lizard",
      variations: [],
      category: "prostitution",
      definition: "A dehumanizing term for a woman who sells or exchanges sex, particularly at truck stops in the US",
      source: "wsp"
    },
    {
      root: "Slut",
      variations: [
        "Bop",
        "Slutty",
        "Jezebel",
        "Tart",
        "Trollop",
        "Hussy",
        "Tramp",
        "Skank",
        "Thot",
        "Sluzza",
        "Bicycle",
        "Ho",
        "Hoe"
      ],
      category: "sexual-objectification",
      definition: "A person, usually a woman, who is considered sexually promiscuous",
      source: "wsp"
    },
    {
      root: "Fagot",
      variations: [
        "Faget",
        "Fagged",
        "Fagala",
        "Feygele",
        "Faygele"
      ],
      category: "anti-lgbtq",
      definition: "A gay man or man who is effeminate; lacking power or vigour; weak, cowardly; ineffectual",
      source: "goodboy"
    },
    {
      root: "Faaq",
      variations: [
        "Faqq",
        "Phag",
        "Phagg",
        "Fagz"
      ],
      category: "anti-lgbtq",
      definition: "Obfuscated spelling of a homophobic slur, used to evade moderation filters while maintaining the same derogatory meaning",
      source: "goodboy"
    },
    {
      root: "Adam and Steve",
      variations: [
        "Adam and Eve, not Adam and Steve"
      ],
      category: "anti-lgbtq",
      definition: "A homosexual couple",
      source: "goodboy"
    }
  ]
};
