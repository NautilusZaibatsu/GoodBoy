/**
 * GoodBoy Dog Whistle Database
 * Generated from SALT-NLP Silent Signals dataset
 * Source: https://huggingface.co/datasets/SALT-NLP/silent_signals
 *
 * Dataset size: 16258 entries
 * Unique terms: 298
 * Total variations: 705 (redundant variations filtered client-side)
 * Last generated: 2025-11-27 22:32:59
 *
 * NOTE: This file contains ALL variations from the source dataset.
 *       Redundant variations (punctuation, case, hyphenation, plurals) are
 *       filtered client-side using ObfuscationUtils to maintain DRY principle.
 *
 * After manual inspection, copy this file to the /data directory
 * to replace the existing dogwhistle_data.js
 */

const GOODBOY_DATA = {
    version: "1.0.0",
    generated: "2025-11-27T22:32:59.055379",
    datasetSize: 16258,
    uniqueTerms: 298,

    // Category metadata for severity scoring
    categories: {
  "anti-liberal": {
    "count": 1255
  },
  "antisemitic": {
    "count": 2156
  },
  "transphobic": {
    "count": 1807
  },
  "racist": {
    "count": 5129
  },
  "Islamophobic": {
    "count": 1075
  },
  "white supremacist": {
    "count": 2229
  },
  "anti-Latino": {
    "count": 721
  },
  "anti-LGBTQ": {
    "count": 130
  },
  "liberal": {
    "count": 77
  },
  "anti-vax": {
    "count": 140
  },
  "homophobic": {
    "count": 273
  },
  "anti-Asian": {
    "count": 117
  },
  "conservative": {
    "count": 768
  },
  "religious": {
    "count": 18
  },
  "anti-GMO": {
    "count": 70
  },
  "xenophobic": {
    "count": 75
  },
  "climate change denier": {
    "count": 208
  },
  "misogynistic": {
    "count": 10
  }
},

    // Dog whistle terms with definitions (examples removed for size optimization)
    terms: [
  {
    "root": "#GenderWooWoo",
    "variations": [
      "gender woo woo"
    ],
    "category": "Transphobic",
    "definition": "Trans people want to escape reality"
  },
  {
    "root": "109",
    "variations": [
      "109",
      "110"
    ],
    "category": "Antisemitic",
    "definition": "Antisemitic signal that is a reference to number of countries Jews have been expelled from"
  },
  {
    "root": "1290",
    "variations": [
      "1290"
    ],
    "category": "Antisemitic",
    "definition": "Antisemitic signal that is a reference to the year Jews were expelled from England"
  },
  {
    "root": "13%",
    "variations": [
      "13%",
      "13/50",
      "13/52"
    ],
    "category": "Racist",
    "definition": "Racist signal that is a reference to the false statistic that African Americans are only 13% of the US population but commit a disproprotionate number of violent crimes"
  },
  {
    "root": "1488",
    "variations": [
      "14 words",
      "14/88",
      "1488",
      "88",
      "hh"
    ],
    "category": "White supremacist",
    "definition": "White supremacist signal that refers to the 14 Words by white supremacist David Lane and the number 88, or HH, as code for Heil Hitler"
  },
  {
    "root": "41%",
    "variations": [
      "41",
      "41%"
    ],
    "category": "Transphobic",
    "definition": "Transphobic reference to statistic that 41% of trans people have attempted suicide, often used to imply trans people should kill themselves"
  },
  {
    "root": "A Leppo",
    "variations": [
      "a leppo"
    ],
    "category": "White supremacist",
    "definition": "Libertarian"
  },
  {
    "root": "abolish birthright citizenship",
    "variations": [
      "end birthright citizenship"
    ],
    "category": "Anti-latino",
    "definition": "We should have fewer Latinos in the US"
  },
  {
    "root": "absent fathers",
    "variations": [
      "absent father",
      "absentee father",
      "lack of fathers"
    ],
    "category": "Racist",
    "definition": "Black men are irresponsible"
  },
  {
    "root": "actual woman",
    "variations": [
      "actual woman",
      "actual women"
    ],
    "category": "Transphobic",
    "definition": "Transphobic signal that the speaker is a cis woman, with implication that trans women aren't \"real women\""
  },
  {
    "root": "adult human female",
    "variations": [
      "adult human female",
      "adult human females"
    ],
    "category": "Transphobic",
    "definition": "Transphobic signal that the speaker is a cis woman, with implication that trans women aren't \"real women\""
  },
  {
    "root": "AFAB trans woman",
    "variations": [
      "afab trans woman"
    ],
    "category": "Transphobic",
    "definition": "Transphobic joke that a cis woman can claim to identify as a trans woman"
  },
  {
    "root": "affirmative action",
    "variations": [
      "affirmative action"
    ],
    "category": "Racist",
    "definition": "White people are victims of racial mistreatment"
  },
  {
    "root": "agender",
    "variations": [
      "agender"
    ],
    "category": "Transphobic",
    "definition": "Gender isn't real"
  },
  {
    "root": "Aiden",
    "variations": [
      "aiden"
    ],
    "category": "Transphobic",
    "definition": "Trans man"
  },
  {
    "root": "alarmism",
    "variations": [
      "alarmism",
      "climate alarmism"
    ],
    "category": "Climate change denier",
    "definition": "People are overreacting about climate change being a problem"
  },
  {
    "root": "alarmist",
    "variations": [
      "alarmist",
      "alarmists",
      "climate alarmist",
      "climate alarmists"
    ],
    "category": "Climate change denier",
    "definition": "Person who is overreacting about climate change, which the speaker does not view as a major problem"
  },
  {
    "root": "All Lives Matter",
    "variations": [
      "#alllivesmatter",
      "all lives matter",
      "alm"
    ],
    "category": "Racist",
    "definition": "Black lives don't matter"
  },
  {
    "root": "alt-right",
    "variations": [
      "alt-right",
      "alternative right",
      "dissident right"
    ],
    "category": "White supremacist",
    "definition": "White supremacist"
  },
  {
    "root": "America First",
    "variations": [
      "#americafirst",
      "america first"
    ],
    "category": "Nationalist",
    "definition": "A nationalist/localist statement with a history tied to racism",
    "categoryMode": "dynamic",
    "placesFound": [
      {
        "match_type": "direct",
        "place": "America",
        "type": "countries"
      }
    ]
  },
  {
    "root": "Amerimutt",
    "variations": [
      "56%",
      "amerimutt",
      "la creatura"
    ],
    "category": "White supremacist",
    "definition": "Americans aren't really white",
    "categoryMode": "original",
    "placesFound": [
      {
        "match_type": "direct",
        "place": "LA",
        "type": "cities"
      }
    ]
  },
  {
    "root": "Amish",
    "variations": [
      "amish"
    ],
    "category": "Racist",
    "definition": "The perpetrator is exactly the demographic you expect"
  },
  {
    "root": "anchor babies",
    "variations": [
      "anchor babies",
      "anchor baby"
    ],
    "category": "Anti-latino",
    "definition": "Mexicans are manipulating the immigration system"
  },
  {
    "root": "anointed",
    "variations": [
      "anointed",
      "anointing"
    ],
    "category": "Religious",
    "definition": "I believe in and practice Pentecostal Christian beliefs"
  },
  {
    "root": "attacks on or imagery of Jewish financial leaders",
    "variations": [
      "janet yellen",
      "lloyd blankfein"
    ],
    "category": "Antisemitic",
    "definition": "Jewish people control all the money"
  },
  {
    "root": "attacks on or imagery of Jewish political leaders",
    "variations": [
      "bernie sanders",
      "volodymyr zelensky"
    ],
    "category": "Antisemitic",
    "definition": "Jewish people control world politics"
  },
  {
    "root": "autoandrophile",
    "variations": [
      "aap"
    ],
    "category": "Transphobic",
    "definition": "Trans man"
  },
  {
    "root": "autoandrophilia",
    "variations": [
      "autoandrophilia"
    ],
    "category": "Transphobic",
    "definition": "Trans men are just women who have a fetish for being viewed as men"
  },
  {
    "root": "autogynephile",
    "variations": [
      "agp",
      "agps",
      "autogynephile",
      "autogynephiles",
      "autogynophile",
      "autogynophiles"
    ],
    "category": "Transphobic",
    "definition": "Trans woman"
  },
  {
    "root": "autogynephilia",
    "variations": [
      "autogynephilia",
      "autogynophilia"
    ],
    "category": "Transphobic",
    "definition": "Trans women are just men who have a fetish for being viewed as women"
  },
  {
    "root": "baby daddies",
    "variations": [
      "baby daddies",
      "baby daddy"
    ],
    "category": "Racist",
    "definition": "Black men are irresponsible"
  },
  {
    "root": "baby mama",
    "variations": [
      "baby mama",
      "baby mamas",
      "baby momma",
      "baby mommas"
    ],
    "category": "Racist",
    "definition": "Black women are irresponsible"
  },
  {
    "root": "Back the Blue",
    "variations": [
      "back the blue"
    ],
    "category": "Racist",
    "definition": "Enforce white supremacy"
  },
  {
    "root": "balance the budget",
    "variations": [
      "balance the budget",
      "balancing the budget"
    ],
    "category": "Conservative",
    "definition": "Cut public services and aid to vulnerable populations"
  },
  {
    "root": "bankers",
    "variations": [
      "banker",
      "bankers"
    ],
    "category": "Antisemitic",
    "definition": "Jewish people"
  },
  {
    "root": "banksters",
    "variations": [
      "bankster",
      "banksters"
    ],
    "category": "Antisemitic",
    "definition": "Jewish people"
  },
  {
    "root": "Barack Hussein Obama",
    "variations": [
      "barack hussein",
      "hussein obama"
    ],
    "category": "Islamophobic",
    "definition": "Obama has a connection to Islam and is therefore threatening and untrustworthy"
  },
  {
    "root": "based",
    "variations": [
      "based"
    ],
    "category": "White supremacist",
    "definition": "Endorsement of someone promoting racism or other bigotry"
  },
  {
    "root": "bear emoji",
    "variations": [
      "bear emoji",
      "🐻"
    ],
    "category": "White supremacist",
    "definition": "White supremacist signal representing fans of far-right internet personality Owen Benjamin"
  },
  {
    "root": "beta",
    "variations": [
      "beta",
      "beta male"
    ],
    "category": "White supremacist",
    "definition": "Liberal men"
  },
  {
    "root": "big government",
    "variations": [
      "big government"
    ],
    "category": "Conservative",
    "definition": "Federal assistance"
  },
  {
    "root": "big pharma",
    "variations": [
      "big pharma"
    ],
    "category": "Anti-vax",
    "definition": "Evil pharmaceutical companies sell poison for profit"
  },
  {
    "root": "Bing",
    "variations": [
      "bing"
    ],
    "category": "Anti-asian",
    "definition": "Asian person"
  },
  {
    "root": "biological man",
    "variations": [
      "biological male",
      "biological males",
      "biological man",
      "biological men",
      "natal men"
    ],
    "category": "Transphobic",
    "definition": "Cisgender man"
  },
  {
    "root": "biological realism",
    "variations": [
      "biological realism",
      "biological reality"
    ],
    "category": "Transphobic",
    "definition": "Trans people aren't real"
  },
  {
    "root": "biological realist",
    "variations": [
      "biological realist"
    ],
    "category": "Transphobic",
    "definition": "Signal that the speaker doesn't believe that trans people are real"
  },
  {
    "root": "biological woman",
    "variations": [
      "biological female",
      "biological females",
      "biological woman",
      "biological women",
      "natal woman",
      "natal women"
    ],
    "category": "Transphobic",
    "definition": "Cisgender woman"
  },
  {
    "root": "bix nood",
    "variations": [
      "bix nood"
    ],
    "category": "Racist",
    "definition": "mock-AAVE to make fun of Black people"
  },
  {
    "root": "black and orange square emojis",
    "variations": [
      "super straight"
    ],
    "category": "Transphobic",
    "definition": "Signal that the speaker is straight and cisgender and would not date a transgender person"
  },
  {
    "root": "black-on-black crime",
    "variations": [
      "black on black crime",
      "black on black homicide",
      "black on black violence",
      "black-on-black crime",
      "black-on-black homicide",
      "black-on-black violence"
    ],
    "category": "Racist",
    "definition": "Black people are criminals"
  },
  {
    "root": "Blue Lives Matter",
    "variations": [
      "#bluelivesmatter",
      "blue lives matter"
    ],
    "category": "Racist",
    "definition": "Black lives don't matter"
  },
  {
    "root": "blueish",
    "variations": [
      "blue",
      "blueish",
      "bluish"
    ],
    "category": "Antisemitic",
    "definition": "Jewish"
  },
  {
    "root": "Boogaloo",
    "variations": [
      "big igloo",
      "big luau",
      "boogalo",
      "boogaloo",
      "the hawaiian shirt"
    ],
    "category": "White supremacist",
    "definition": "Race war"
  },
  {
    "root": "bop",
    "variations": [
      "bop",
      "bopped",
      "bops"
    ],
    "category": "White supremacist",
    "definition": "Kill or attack, particularly political opponents"
  },
  {
    "root": "brave and stunning",
    "variations": [
      "brave and stunning"
    ],
    "category": "Transphobic",
    "definition": "Trans women are showered with undue praise just for existing"
  },
  {
    "root": "broken family",
    "variations": [
      "broken families",
      "broken family",
      "broken home",
      "broken homes"
    ],
    "category": "Racist",
    "definition": "Black families are dysfunctional"
  },
  {
    "root": "bugman",
    "variations": [
      "bugman",
      "bugmen"
    ],
    "category": "Anti-liberal",
    "definition": "Left-wingers who are hollow, technology- and trend-obsessed consumerists."
  },
  {
    "root": "burning coal",
    "variations": [
      "burn coal",
      "burn the coal",
      "burned coal",
      "burning coal",
      "burns coal"
    ],
    "category": "Racist",
    "definition": "White woman having sex with a Black man"
  },
  {
    "root": "butterfly",
    "variations": [
      "butterflies",
      "butterfly"
    ],
    "category": "Homophobic",
    "definition": "Gay man"
  },
  {
    "root": "cabal",
    "variations": [
      "banking cabal",
      "cabal",
      "elitist cabal",
      "global cabal",
      "shadowy cabal"
    ],
    "category": "Antisemitic",
    "definition": "Powerful group of Jewish people who control the world"
  },
  {
    "root": "car salesman",
    "variations": [
      "car salesman",
      "car salesmen"
    ],
    "category": "Anti-liberal",
    "definition": "Liberal"
  },
  {
    "root": "Carolus Rex",
    "variations": [
      "carolus rex",
      "charles xii",
      "karl xii"
    ],
    "category": "White supremacist",
    "definition": "White supremacist signal referring to a former king of Sweden long ideolized by far-right groups"
  },
  {
    "root": "centipede",
    "variations": [
      "centipede",
      "centipedes",
      "nimble navigator",
      "nimble navigators",
      "pede",
      "pedes"
    ],
    "category": "White supremacist",
    "definition": "Trump supporter"
  },
  {
    "root": "central bankers",
    "variations": [
      "central banker",
      "central bankers"
    ],
    "category": "Antisemitic",
    "definition": "Jewish people who control all the money"
  },
  {
    "root": "checkered flag emoji",
    "variations": [
      "🏁"
    ],
    "category": "Transphobic",
    "definition": "Transphobic signal representing idea that there are only two sexes"
  },
  {
    "root": "cherry emoji",
    "variations": [
      "🍒"
    ],
    "category": "Transphobic",
    "definition": "Transphobic signal representing Joanna Cherry, an anti-trans activist and Scottish politician"
  },
  {
    "root": "China Virus",
    "variations": [
      "china virus",
      "kung flu",
      "wuhan virus"
    ],
    "category": "Anti-asian",
    "definition": "Chinese people are infectious diseases and to blame for covid",
    "categoryMode": "original",
    "placesFound": [
      {
        "match_type": "direct",
        "place": "China",
        "type": "countries"
      }
    ]
  },
  {
    "root": "cleaning up our streets",
    "variations": [
      "clean up our streets"
    ],
    "category": "Racist",
    "definition": "over-policing of Black and Latino neighborhoods and mass incarceration of their residents"
  },
  {
    "root": "Clown World",
    "variations": [
      "clown world",
      "honkler",
      "🤡 🌎"
    ],
    "category": "White supremacist",
    "definition": "White supremacist signal originating in 4chan troll meme that clowns are racist"
  },
  {
    "root": "clownfish",
    "variations": [
      "clownfish"
    ],
    "category": "Transphobic",
    "definition": "Trans people are ridiculous for thinking that humans can change sex"
  },
  {
    "root": "coal burner",
    "variations": [
      "coal burner",
      "coal burners",
      "mud shark",
      "mud sharks"
    ],
    "category": "Racist",
    "definition": "white women who have sexwith black men"
  },
  {
    "root": "coastal elite",
    "variations": [
      "coastal elite",
      "coastal elites"
    ],
    "category": "Antisemitic",
    "definition": "Jewish people"
  },
  {
    "root": "COIN",
    "variations": [
      "co-opting intersex narratives",
      "coin",
      "coining"
    ],
    "category": "Transphobic",
    "definition": "Trans people are liars who appropriate intersex people's struggles"
  },
  {
    "root": "coincidence",
    "variations": [
      "cohencidence",
      "cohencidences",
      "coincidence",
      "coincidences"
    ],
    "category": "Antisemitic",
    "definition": "Jewish conspiracy"
  },
  {
    "root": "colorblind",
    "variations": [
      "color-blind society",
      "colorblind",
      "colorblindness",
      "don't see color"
    ],
    "category": "Racist",
    "definition": "Opposition to race-based affirmative action"
  },
  {
    "root": "controlled media",
    "variations": [
      "controlled media",
      "media control"
    ],
    "category": "Antisemitic",
    "definition": "Jewish people control the media"
  },
  {
    "root": "cosmopolitan",
    "variations": [
      "cosmopolitan",
      "cosmopolitans"
    ],
    "category": "Antisemitic",
    "definition": "Jewish"
  },
  {
    "root": "cosmopolitan elite",
    "variations": [
      "cosmopolitan elite"
    ],
    "category": "Antisemitic",
    "definition": "Jewish"
  },
  {
    "root": "critical race theory",
    "variations": [
      "critical race theory",
      "crt"
    ],
    "category": "Racist",
    "definition": "Teaching anything about race and American history"
  },
  {
    "root": "cuck",
    "variations": [
      "cuck",
      "cuckold",
      "cuckolds",
      "cucks",
      "cuckservative",
      "cuckservatives"
    ],
    "category": "White supremacist",
    "definition": "liberal or establishment Republican men"
  },
  {
    "root": "cultural enrichment",
    "variations": [
      "cultural enrichment"
    ],
    "category": "Islamophobic",
    "definition": "Muslims create problems in society"
  },
  {
    "root": "cultural Marxism",
    "variations": [
      "cultural marxism"
    ],
    "category": "Antisemitic",
    "definition": "Jewish people are upending society"
  },
  {
    "root": "cultural Marxists",
    "variations": [
      "cultural marxist"
    ],
    "category": "Antisemitic",
    "definition": "Jewish people are upending society"
  },
  {
    "root": "cut taxes",
    "variations": [
      "cut taxes",
      "cutting taxes",
      "tax cut",
      "tax cuts"
    ],
    "category": "Racist",
    "definition": "Don't spend tax money on minorities"
  },
  {
    "root": "deadbeat dad",
    "variations": [
      "deadbeat",
      "deadbeat dad",
      "deadbeat dads",
      "deadbeats"
    ],
    "category": "Racist",
    "definition": "Black men are irresponsible"
  },
  {
    "root": "deep state",
    "variations": [
      "deep state"
    ],
    "category": "Antisemitic",
    "definition": "Jewish people are manipulating and controlling the government"
  },
  {
    "root": "Deus Vult",
    "variations": [
      "deus vult"
    ],
    "category": "Islamophobic",
    "definition": "Islamophobic signal referring to battle cry by Christian crusaders"
  },
  {
    "root": "dindu",
    "variations": [
      "dindu",
      "dindus"
    ],
    "category": "Racist",
    "definition": "Black person"
  },
  {
    "root": "dindu nuffin",
    "variations": [
      "dindu nuffin"
    ],
    "category": "Racist",
    "definition": "Black person"
  },
  {
    "root": "dinosaur emojis",
    "variations": [
      "🦕",
      "🦖"
    ],
    "category": "Transphobic",
    "definition": "Transphobic signal reclaiming MP David Lammy's denouncement of transphobes as \"dinosaurs\""
  },
  {
    "root": "Dred Scott",
    "variations": [
      "dred scott",
      "dred scott decision"
    ],
    "category": "Conservative",
    "definition": "Signal opposition to abortion by equating it to slavery"
  },
  {
    "root": "dual citizen",
    "variations": [
      "dual citizen",
      "dual citizens",
      "dual citizenship"
    ],
    "category": "Antisemitic",
    "definition": "Jewish person"
  },
  {
    "root": "dual loyalty",
    "variations": [
      "disloyalty",
      "dual loyalties",
      "dual loyalty"
    ],
    "category": "Antisemitic",
    "definition": "Jews are disloyal to their country"
  },
  {
    "root": "Durden",
    "variations": [
      "durden"
    ],
    "category": "Transphobic",
    "definition": "transgender person"
  },
  {
    "root": "early life",
    "variations": [
      "early life",
      "early life section"
    ],
    "category": "Antisemitic",
    "definition": "the person being talked about is Jewish"
  },
  {
    "root": "economic anxiety",
    "variations": [
      "economic anxiety"
    ],
    "category": "Racist",
    "definition": "Anxiety about non-white people becoming equal economically and socially"
  },
  {
    "root": "election integrity",
    "variations": [
      "election integrity",
      "rigged election"
    ],
    "category": "Racist",
    "definition": "Voter suppression that targets people of color"
  },
  {
    "root": "entitlement programs",
    "variations": [
      "entitlement",
      "entitlement program",
      "entitlement programs",
      "entitlements"
    ],
    "category": "Racist",
    "definition": "People who receive aid from government social aid programs, primarily minorities, are lazy and undeserving"
  },
  {
    "root": "entitlement spending",
    "variations": [
      "entitlement spending",
      "government spending"
    ],
    "category": "Racist",
    "definition": "Government social aid programs, perceived to primarily help minorities, are destroying the country's economy"
  },
  {
    "root": "erasing women",
    "variations": [
      "erasing women",
      "erasure of women"
    ],
    "category": "Transphobic",
    "definition": "Trans people are threatening cis women's rights"
  },
  {
    "root": "every single time",
    "variations": [
      "est"
    ],
    "category": "White supremacist",
    "definition": "Jewish people cause all the problems"
  },
  {
    "root": "FAFO",
    "variations": [
      "fafo"
    ],
    "category": "White supremacist",
    "definition": "White supremacist signal originating from \"fuck around and find out\""
  },
  {
    "root": "family values",
    "variations": [
      "family values",
      "traditional family values"
    ],
    "category": "Homophobic",
    "definition": "Opposition to gay marriage"
  },
  {
    "root": "fatherless",
    "variations": [
      "fatherless",
      "fatherless child",
      "fatherless children",
      "fatherless home",
      "fatherless homes"
    ],
    "category": "Racist",
    "definition": "Black men are irresponsible"
  },
  {
    "root": "Federal Reserve",
    "variations": [
      "federal reserve",
      "the fed"
    ],
    "category": "Antisemitic",
    "definition": "Jewish people control all the money"
  },
  {
    "root": "fellow white people",
    "variations": [
      "(((fellow whites)))",
      "as a white person",
      "fellow white people",
      "fellow whites"
    ],
    "category": "Antisemitic",
    "definition": "Jewish people are masquerading as white people in order to tell them what to do"
  },
  {
    "root": "food stamps",
    "variations": [
      "food stamp",
      "food stamps"
    ],
    "category": "Racist",
    "definition": "Government assistance for minorities"
  },
  {
    "root": "forced busing",
    "variations": [
      "forced busing",
      "forced bussing"
    ],
    "category": "Racist",
    "definition": "Opposition to racial integration"
  },
  {
    "root": "forced diversity",
    "variations": [
      "forced diversity"
    ],
    "category": "Racist",
    "definition": "Diversity is making things worse"
  },
  {
    "root": "free helicopter rides",
    "variations": [
      "helicopter rides"
    ],
    "category": "White supremacist",
    "definition": "Let's kill our political opponents"
  },
  {
    "root": "freedom of association",
    "variations": [
      "freedom of association"
    ],
    "category": "Racist",
    "definition": "Support for racial segregation"
  },
  {
    "root": "fren",
    "variations": [
      "fren",
      "fren world",
      "frens"
    ],
    "category": "White supremacist",
    "definition": "Self-referential term for white supremacists on the internet"
  },
  {
    "root": "frog emoji",
    "variations": [
      "frog emoji",
      "🐸"
    ],
    "category": "White supremacist",
    "definition": "White supremacist signal, representing Pepe the Frog"
  },
  {
    "root": "gangbanger",
    "variations": [
      "gang banger",
      "gang bangers",
      "gangbanger",
      "gangbangers"
    ],
    "category": "Racist",
    "definition": "Black man"
  },
  {
    "root": "gender abolition",
    "variations": [
      "abolish gender",
      "gender abolition"
    ],
    "category": "Transphobic",
    "definition": "Only sex assigned at birth matters"
  },
  {
    "root": "gender abolitionist",
    "variations": [
      "gender abolitionist",
      "gender abolitionists"
    ],
    "category": "Transphobic",
    "definition": "Transphobic signal based on belief that only sex assigned at birth matters"
  },
  {
    "root": "gender critical",
    "variations": [
      "gc",
      "gender crit",
      "gender-critical feminism"
    ],
    "category": "Transphobic",
    "definition": "Self-referential term for transphobic people"
  },
  {
    "root": "gender fandom",
    "variations": [
      "gender fandom"
    ],
    "category": "Transphobic",
    "definition": "Trans people are ridiculous"
  },
  {
    "root": "gender ideology",
    "variations": [
      "gender identity ideology",
      "gender ideology",
      "radical gender ideology"
    ],
    "category": "Transphobic",
    "definition": "Trans people are threatening our way of life"
  },
  {
    "root": "gender socialization",
    "variations": [
      "female socialisation",
      "female socialization",
      "gender socialisation",
      "gender socialization",
      "male socialisation",
      "male socialization",
      "socialised as female",
      "socialised as male",
      "socialized as female",
      "socialized as male"
    ],
    "category": "Transphobic",
    "definition": "Trans men will always be women, and trans women will always be men"
  },
  {
    "root": "genderfree",
    "variations": [
      "genderfree",
      "genderless"
    ],
    "category": "Transphobic",
    "definition": "Self-referential term for transphobic people"
  },
  {
    "root": "genderist",
    "variations": [
      "genderist",
      "genderists"
    ],
    "category": "Transphobic",
    "definition": "Trans people and allies"
  },
  {
    "root": "George Soros",
    "variations": [
      "george soros",
      "soros"
    ],
    "category": "Antisemitic",
    "definition": "Jewish person who controls the world"
  },
  {
    "root": "ghetto",
    "variations": [
      "ghetto",
      "ghettoes",
      "ghettos"
    ],
    "category": "Racist",
    "definition": "Low-income Black neighborhood"
  },
  {
    "root": "gibsmedat",
    "variations": [
      "gib me dat",
      "gibs",
      "gibsmedat"
    ],
    "category": "Racist",
    "definition": "Black people are entitled and depend on government benefits"
  },
  {
    "root": "global elite",
    "variations": [
      "global elite",
      "global elites",
      "international elite"
    ],
    "category": "Antisemitic",
    "definition": "Jewish people"
  },
  {
    "root": "globalism",
    "variations": [
      "globalism"
    ],
    "category": "Antisemitic",
    "definition": "Jewish interests"
  },
  {
    "root": "globalist",
    "variations": [
      "globalist",
      "globalists"
    ],
    "category": "Antisemitic",
    "definition": "Jewish people"
  },
  {
    "root": "Goody",
    "variations": [
      "goody"
    ],
    "category": "Transphobic",
    "definition": "Transphobic signal insinuating that cis women are being persecuted"
  },
  {
    "root": "Google",
    "variations": [
      "google",
      "googles"
    ],
    "category": "Racist",
    "definition": "Black person"
  },
  {
    "root": "government handout",
    "variations": [
      "government handout",
      "government handouts",
      "handout",
      "handouts"
    ],
    "category": "Racist",
    "definition": "Any money that the government gives to support vulnerable people"
  },
  {
    "root": "goy",
    "variations": [
      "goy",
      "goyim"
    ],
    "category": "Antisemitic",
    "definition": "a non-Jew"
  },
  {
    "root": "groomers",
    "variations": [
      "groomer",
      "groomers"
    ],
    "category": "Anti-lgbtq",
    "definition": "LGBTQ people are predators"
  },
  {
    "root": "grooming",
    "variations": [
      "anti-grooming",
      "grooming"
    ],
    "category": "Anti-lgbtq",
    "definition": "LGBTQ people are predators"
  },
  {
    "root": "hard-working Americans",
    "variations": [
      "hard-working american",
      "hard-working americans",
      "hardworking american",
      "hardworking americans"
    ],
    "category": "Nationalist",
    "definition": "Depending on the context, can be used in a way that implies a racial hierarchy or nationalist/localist exclusion",
    "categoryMode": "dynamic",
    "placesFound": [
      {
        "demonym": "americans",
        "match_type": "demonym",
        "place": "America",
        "type": "countries"
      },
      {
        "demonym": "american",
        "match_type": "demonym",
        "place": "America",
        "type": "countries"
      }
    ]
  },
  {
    "root": "he wuz a good boy",
    "variations": [
      "he was a good boy"
    ],
    "category": "Racist",
    "definition": "Black people are unintelligent and/or criminals"
  },
  {
    "root": "health freedom",
    "variations": [
      "health freedom",
      "medical freedom"
    ],
    "category": "Anti-vax",
    "definition": "Anti-vax"
  },
  {
    "root": "healthy tissue",
    "variations": [
      "healthy tissue"
    ],
    "category": "Anti-vax",
    "definition": "gender-confirming surgery is bad"
  },
  {
    "root": "Hollywood elite",
    "variations": [
      "hollywood",
      "hollywood elite",
      "hollywood elites",
      "hollywood liberals",
      "hollywood moguls"
    ],
    "category": "Antisemitic",
    "definition": "Jewish people who control the media"
  },
  {
    "root": "Holocauster",
    "variations": [
      "holocauster"
    ],
    "category": "Antisemitic",
    "definition": "Jewish person"
  },
  {
    "root": "hygienic",
    "variations": [
      "hygienic"
    ],
    "category": "Transphobic",
    "definition": "Term for cis people, implying that trans people are unhygienic"
  },
  {
    "root": "identify as",
    "variations": [
      "identify as"
    ],
    "category": "Transphobic",
    "definition": "Trans people are ridiculous"
  },
  {
    "root": "identitarianism",
    "variations": [
      "identitarian",
      "identitarianism",
      "identitarians"
    ],
    "category": "White supremacist",
    "definition": "Nazism"
  },
  {
    "root": "illegal aliens",
    "variations": [
      "criminal alien",
      "criminal aliens",
      "criminal illegal alien",
      "illegal alien",
      "illegal aliens"
    ],
    "category": "Anti-latino",
    "definition": "Dangerous undocumented brown people"
  },
  {
    "root": "illegal immigrant",
    "variations": [
      "illegal immigrant",
      "illegal immigrants",
      "illegals"
    ],
    "category": "Anti-latino",
    "definition": "Latino, especially Mexican, immigrants regardless of documentation"
  },
  {
    "root": "Illuminati",
    "variations": [
      "illuminati"
    ],
    "category": "Antisemitic",
    "definition": "Jewish people who control the world"
  },
  {
    "root": "implicit bias",
    "variations": [
      "implicit bias",
      "implicit biases"
    ],
    "category": "Liberal",
    "definition": "Racism"
  },
  {
    "root": "inner city",
    "variations": [
      "inner cities",
      "inner city",
      "inner-city",
      "urban"
    ],
    "category": "Racist",
    "definition": "African American neighborhoods"
  },
  {
    "root": "institution of marriage",
    "variations": [
      "institution of marriage",
      "traditional marriage"
    ],
    "category": "Homophobic",
    "definition": "Opposition to gay marriage"
  },
  {
    "root": "intact",
    "variations": [
      "intact",
      "intact female",
      "intact male",
      "intact man"
    ],
    "category": "Transphobic",
    "definition": "Trans people who haven't had bottom surgery aren't real trans people"
  },
  {
    "root": "international bankers",
    "variations": [
      "international banker",
      "international bankers",
      "international banks"
    ],
    "category": "Antisemitic",
    "definition": "Jewish people who control all the money"
  },
  {
    "root": "Islamic extremism",
    "variations": [
      "extremism",
      "islamic extremism"
    ],
    "category": "Islamophobic",
    "definition": "Muslim people as a whole are a threat"
  },
  {
    "root": "Islamic extremists",
    "variations": [
      "extremist",
      "extremists",
      "islamic extremist",
      "islamic extremists"
    ],
    "category": "Islamophobic",
    "definition": "Muslim people as a whole are a threat"
  },
  {
    "root": "Islamic terrorism",
    "variations": [
      "islamic terrorism",
      "terrorism"
    ],
    "category": "Islamophobic",
    "definition": "Muslim people as a whole are a threat"
  },
  {
    "root": "Islamic terrorists",
    "variations": [
      "islamic terrorist",
      "islamic terrorists",
      "radical islamic terrorists",
      "terrorist",
      "terrorists"
    ],
    "category": "Islamophobic",
    "definition": "Muslim people as a whole are a threat"
  },
  {
    "root": "Islamists",
    "variations": [
      "islamist",
      "islamists",
      "radical islamist",
      "radical islamists"
    ],
    "category": "Islamophobic",
    "definition": "Muslim people as a whole are a threat"
  },
  {
    "root": "Israel Lobby",
    "variations": [
      "israel lobby"
    ],
    "category": "Antisemitic",
    "definition": "Jews control US politics",
    "categoryMode": "antisemitic",
    "placesFound": [
      {
        "match_type": "direct",
        "place": "Israel",
        "type": "countries"
      }
    ]
  },
  {
    "root": "it's okay to be white",
    "variations": [
      "#itsokaytobewhite",
      "#itsoktobewhite",
      "it's ok to be white",
      "it's okay to be white"
    ],
    "category": "White supremacist",
    "definition": "White supremacist slogan"
  },
  {
    "root": "job creators",
    "variations": [
      "job creation",
      "job creator",
      "job creators"
    ],
    "category": "Conservative",
    "definition": "Wealthy people"
  },
  {
    "root": "jogger",
    "variations": [
      "jogger",
      "joggers"
    ],
    "category": "Racist",
    "definition": "Black person"
  },
  {
    "root": "Judas",
    "variations": [
      "30 pieces of silver",
      "judas",
      "thirty pieces of silver"
    ],
    "category": "Antisemitic",
    "definition": "Jews are not to be trusted"
  },
  {
    "root": "Judeo-Christian",
    "variations": [
      "judeo-christian",
      "judeo-christian values",
      "judeo-christianity"
    ],
    "category": "Islamophobic",
    "definition": "Muslims threaten Christian society"
  },
  {
    "root": "judicial activism",
    "variations": [
      "activist judge",
      "activist judges",
      "judicial activism",
      "judicial activist",
      "judicial activists"
    ],
    "category": "Conservative",
    "definition": "Judges ruling in liberals' favor"
  },
  {
    "root": "Jwoke",
    "variations": [
      "jq",
      "jwoke"
    ],
    "category": "Antisemitic",
    "definition": "Antisemitic self-referential signal"
  },
  {
    "root": "Kalergi Plan",
    "variations": [
      "kalergi plan"
    ],
    "category": "Antisemitic",
    "definition": "Jewish people are conspiring to rule the world"
  },
  {
    "root": "Kek",
    "variations": [
      "kek",
      "kekistan"
    ],
    "category": "White supremacist",
    "definition": "White supremacist signal meaning \"lol\" that became an alt-right 4chan meme"
  },
  {
    "root": "Khazars",
    "variations": [
      "khazar",
      "khazars"
    ],
    "category": "Antisemitic",
    "definition": "Jewish people"
  },
  {
    "root": "law and order",
    "variations": [
      "law and order"
    ],
    "category": "Racist",
    "definition": "Black and Latino people are lawless and commit crimes"
  },
  {
    "root": "lesbian erasure",
    "variations": [
      "erasing lesbians",
      "lesbian erasure"
    ],
    "category": "Transphobic",
    "definition": "Trans people are threatening cis lesbians"
  },
  {
    "root": "lesbophobia",
    "variations": [
      "lesbophobia"
    ],
    "category": "Transphobic",
    "definition": "Trans people are threatening cis lesbians"
  },
  {
    "root": "Let's Go Brandon",
    "variations": [
      "let's go brandon"
    ],
    "category": "Conservative",
    "definition": "Conservative signal that originally meant Fuck Joe Biden"
  },
  {
    "root": "LGB rights",
    "variations": [
      "drop the t",
      "lgb",
      "lgb rights"
    ],
    "category": "Transphobic",
    "definition": "Lesbian, gay, and bisexual, but not trans, rights"
  },
  {
    "root": "lifelong bachelor",
    "variations": [
      "confirmed bachelor",
      "has no children",
      "lifelong bachelor",
      "limp-wristed",
      "never married",
      "never-married",
      "single"
    ],
    "category": "Homophobic",
    "definition": "Gay person"
  },
  {
    "root": "lizard emoji",
    "variations": [
      "🦎"
    ],
    "category": "Transphobic",
    "definition": "Self-referential signal for detransitioners that are now anti-trans"
  },
  {
    "root": "loxism",
    "variations": [
      "loxism"
    ],
    "category": "Antisemitic",
    "definition": "Jews hate non-Jews"
  },
  {
    "root": "MAGA",
    "variations": [
      "maga",
      "make america great again"
    ],
    "category": "Nationalist",
    "definition": "A form of nationalism/localism that has been linked to racist ideologies",
    "categoryMode": "dynamic",
    "placesFound": [
      {
        "match_type": "direct",
        "place": "America",
        "type": "countries"
      }
    ]
  },
  {
    "root": "magapede",
    "variations": [
      "magapede",
      "magapedes"
    ],
    "category": "White supremacist",
    "definition": "Trump supporters who are not antisemitic or racist enough"
  },
  {
    "root": "majority-minorit y",
    "variations": [
      "majority minority",
      "majority-minority"
    ],
    "category": "Racist",
    "definition": "White hegemony in America is threatened"
  },
  {
    "root": "male violence",
    "variations": [
      "male violence"
    ],
    "category": "Transphobic",
    "definition": "Trans women are violent"
  },
  {
    "root": "male-friendly content",
    "variations": [
      "male-friendly"
    ],
    "category": "Misogynistic",
    "definition": "Rape jokes and threats about domestic violence, other content that features abuse of women"
  },
  {
    "root": "mass immigration",
    "variations": [
      "mass immigration",
      "mass migration"
    ],
    "category": "Xenophobic",
    "definition": "Non-white immigration"
  },
  {
    "root": "merit-based immigration policy",
    "variations": [
      "merit-based immigration",
      "merit-based immigration policy",
      "points-based immigration"
    ],
    "category": "Xenophobic",
    "definition": "stop non-white immigration"
  },
  {
    "root": "middle class",
    "variations": [
      "middle class",
      "middle class americans",
      "middle-class americans"
    ],
    "category": "Racist",
    "definition": "White middle class",
    "categoryMode": "original",
    "placesFound": [
      {
        "demonym": "americans",
        "match_type": "demonym",
        "place": "America",
        "type": "countries"
      }
    ]
  },
  {
    "root": "milk emoji",
    "variations": [
      "milk emoji",
      "🥛"
    ],
    "category": "White supremacist",
    "definition": "White supremacist signal"
  },
  {
    "root": "mixed sex",
    "variations": [
      "mixed sex",
      "mixed-sex"
    ],
    "category": "Transphobic",
    "definition": "Environment that accommodates both trans and cis women"
  },
  {
    "root": "multiculturalism",
    "variations": [
      "multi-kulti",
      "multiculti",
      "multicultural",
      "multiculturalism"
    ],
    "category": "Islamophobic",
    "definition": "Too many Muslims"
  },
  {
    "root": "neoliberal",
    "variations": [
      "neolib",
      "neoliberal",
      "neoliberalism",
      "neoliberals",
      "neolibs"
    ],
    "category": "Liberal",
    "definition": "Non-leftist liberals"
  },
  {
    "root": "New World Order",
    "variations": [
      "new world order",
      "nwo"
    ],
    "category": "Antisemitic",
    "definition": "Jewish people control the world"
  },
  {
    "root": "New York elite",
    "variations": [
      "manhattan elite",
      "new york elite"
    ],
    "category": "Antisemitic",
    "definition": "Jewish people"
  },
  {
    "root": "New York intellectuals",
    "variations": [
      "new york intellectuals"
    ],
    "category": "Antisemitic",
    "definition": "Jewish people"
  },
  {
    "root": "New York values",
    "variations": [
      "new york values"
    ],
    "category": "Antisemitic",
    "definition": "Jewishness"
  },
  {
    "root": "nibba",
    "variations": [
      "nibba",
      "nibbas"
    ],
    "category": "Racist",
    "definition": "N-word"
  },
  {
    "root": "NPC",
    "variations": [
      "npc",
      "npcs",
      "wojak",
      "wojaks"
    ],
    "category": "Anti-liberal",
    "definition": "Liberal person"
  },
  {
    "root": "octopus",
    "variations": [
      "octopus"
    ],
    "category": "Antisemitic",
    "definition": "Jewish people control the world"
  },
  {
    "root": "OK sign emoji",
    "variations": [
      "ok sign",
      "👌"
    ],
    "category": "White supremacist",
    "definition": "White supremacist signal"
  },
  {
    "root": "open borders for Israel",
    "variations": [
      "open borders for israel"
    ],
    "category": "Antisemitic",
    "definition": "Jews are pushing for immigration to ruin other countries except for Israel",
    "categoryMode": "antisemitic",
    "placesFound": [
      {
        "match_type": "direct",
        "place": "Israel",
        "type": "countries"
      }
    ]
  },
  {
    "root": "our guy",
    "variations": [
      "/our guy/",
      "our guy"
    ],
    "category": "White supremacist",
    "definition": "Someone who holds alt-right or \"red-pilled\" political beliefs, often referring to Trump"
  },
  {
    "root": "out of wedlock",
    "variations": [
      "out of wedlock"
    ],
    "category": "Racist",
    "definition": "Black women are irresponsible and their children are less valuable to society"
  },
  {
    "root": "overpopulation",
    "variations": [
      "overpopulating the planet",
      "overpopulation"
    ],
    "category": "Racist",
    "definition": "There are too many non-white people in the world"
  },
  {
    "root": "oy vey",
    "variations": [
      "oy vey"
    ],
    "category": "Antisemitic",
    "definition": "Antisemitic signal that mocks Jewish people and language"
  },
  {
    "root": "Pajeet",
    "variations": [
      "pajeet",
      "pajeets"
    ],
    "category": "Anti-asian",
    "definition": "Indian person"
  },
  {
    "root": "Pepe the Frog",
    "variations": [
      "feels good man",
      "pepe",
      "pepe the frog"
    ],
    "category": "White supremacist",
    "definition": "White supremacist signal"
  },
  {
    "root": "personal responsibility",
    "variations": [
      "individual responsibility",
      "personal responsibility"
    ],
    "category": "Racist",
    "definition": "Opposition to public spending perceived to benefit racial minorities over white people"
  },
  {
    "root": "physical removal",
    "variations": [
      "physical removal"
    ],
    "category": "White supremacist",
    "definition": "Kill political opponents or non-white people"
  },
  {
    "root": "pilpul",
    "variations": [
      "pilpul"
    ],
    "category": "Antisemitic",
    "definition": "Jews are bad, and any counterargument is nonsense"
  },
  {
    "root": "pine tree emoji",
    "variations": [
      "🌲"
    ],
    "category": "White supremacist",
    "definition": "White supremacist signal connected to ecofascism"
  },
  {
    "root": "poisoning the well",
    "variations": [
      "poisoning the well"
    ],
    "category": "Antisemitic",
    "definition": "Jewish people infect non-Jews with diseases and/or harmful ideas"
  },
  {
    "root": "political correctness",
    "variations": [
      "political correctness",
      "politically correct"
    ],
    "category": "Racist",
    "definition": "We should let people be openly racist"
  },
  {
    "root": "power level",
    "variations": [
      "power level"
    ],
    "category": "White supremacist",
    "definition": "How deeply someone has fallen into fascist ideology"
  },
  {
    "root": "preemptive strike",
    "variations": [
      "pre-emptive strike",
      "preemptive strike"
    ],
    "category": "Conservative",
    "definition": "Unprovoked attack"
  },
  {
    "root": "prefix \"super\"",
    "variations": [
      "superlesbian",
      "superstraight"
    ],
    "category": "Transphobic",
    "definition": "Trans-exclusionary sexual preference"
  },
  {
    "root": "pro-family",
    "variations": [
      "pro-family"
    ],
    "category": "Homophobic",
    "definition": "Anti-gay"
  },
  {
    "root": "property rights",
    "variations": [
      "property rights",
      "protecting property rights"
    ],
    "category": "Racist",
    "definition": "Right of property owners to discriminate racially"
  },
  {
    "root": "protecting women and girls",
    "variations": [
      "protect women and girls",
      "protecting women and girls",
      "protecting women's spaces"
    ],
    "category": "Transphobic",
    "definition": "Trans women are predatory men"
  },
  {
    "root": "public school",
    "variations": [
      "public school",
      "public schools"
    ],
    "category": "Racist",
    "definition": "Dangerous place with nonwhite kids that wastes tax dollars"
  },
  {
    "root": "pulling strings",
    "variations": [
      "pull the strings",
      "pulling strings",
      "pulling the strings"
    ],
    "category": "Antisemitic",
    "definition": "Jewish people control the world"
  },
  {
    "root": "puppet masters",
    "variations": [
      "puppet master",
      "puppet masters"
    ],
    "category": "Antisemitic",
    "definition": "Jewish people control the world"
  },
  {
    "root": "quotas",
    "variations": [
      "diversity quotas",
      "quota",
      "quotas",
      "racial quotas"
    ],
    "category": "Racist",
    "definition": "Opposition to efforts to achieve gender or racial parity"
  },
  {
    "root": "race realism",
    "variations": [
      "hbd",
      "human biodiversity",
      "race realism",
      "race realist",
      "race realists",
      "racial realism",
      "scientific racism"
    ],
    "category": "Racist",
    "definition": "White people are better than other races"
  },
  {
    "root": "radical Islam",
    "variations": [
      "radical islam"
    ],
    "category": "Islamophobic",
    "definition": "Muslim people as a whole are a threat"
  },
  {
    "root": "RaHoWa",
    "variations": [
      "rahowa"
    ],
    "category": "White supremacist",
    "definition": "Racial holy war"
  },
  {
    "root": "Reagan",
    "variations": [
      "reagan",
      "reagans"
    ],
    "category": "White supremacist",
    "definition": "Conservative person"
  },
  {
    "root": "references to cities with large racial minority populations being overrun by crime, drugs, rodents",
    "variations": [
      "baltimore",
      "chicago",
      "cleveland",
      "detroit"
    ],
    "category": "Racist",
    "definition": "Minorities are dirty and criminals",
    "categoryMode": "original",
    "placesFound": [
      {
        "match_type": "direct",
        "place": "Detroit",
        "type": "cities"
      },
      {
        "match_type": "direct",
        "place": "Baltimore",
        "type": "cities"
      },
      {
        "match_type": "direct",
        "place": "Chicago",
        "type": "cities"
      }
    ]
  },
  {
    "root": "religious freedom",
    "variations": [
      "freedom of religion",
      "god-given liberties",
      "religious freedom",
      "religious liberties",
      "religious liberty"
    ],
    "category": "Homophobic",
    "definition": "Discrimination against LGBTQ people"
  },
  {
    "root": "Remove Kebab",
    "variations": [
      "kebab removal",
      "remove kebab",
      "removing kebab",
      "serbia strong"
    ],
    "category": "Islamophobic",
    "definition": "Kill Muslims",
    "categoryMode": "original",
    "placesFound": [
      {
        "match_type": "direct",
        "place": "Serbia",
        "type": "countries"
      }
    ]
  },
  {
    "root": "right to know",
    "variations": [
      "right to know"
    ],
    "category": "Anti-gmo",
    "definition": "Eliminating genetic engineering in the food industry"
  },
  {
    "root": "right to work",
    "variations": [
      "economic freedom",
      "freedom to work",
      "right to work",
      "right-to-work laws"
    ],
    "category": "Anti-gmo",
    "definition": "Union-busting"
  },
  {
    "root": "rootless cosmopolitan",
    "variations": [
      "rootless cosmopolitan",
      "rootless cosmopolitans"
    ],
    "category": "Antisemitic",
    "definition": "Jewish person"
  },
  {
    "root": "Rothschilds",
    "variations": [
      "rothschild",
      "rothschild family",
      "rothschilds"
    ],
    "category": "Antisemitic",
    "definition": "Jewish people control all the money"
  },
  {
    "root": "RWDS",
    "variations": [
      "rwds"
    ],
    "category": "White supremacist",
    "definition": "Right Wing Death Squads\n/ kill all opponents"
  },
  {
    "root": "safeguarding",
    "variations": [
      "child safeguarding",
      "safeguard",
      "safeguarding",
      "safeguarding children"
    ],
    "category": "Transphobic",
    "definition": "Young people should not have access to\ngender-affirming care"
  },
  {
    "root": "save women's sports",
    "variations": [
      "protect women's sports"
    ],
    "category": "Transphobic",
    "definition": "Trans women are a threat to cis women"
  },
  {
    "root": "school choice",
    "variations": [
      "education reform",
      "educational choice",
      "parental choice",
      "school choice",
      "school vouchers"
    ],
    "category": "Racist",
    "definition": "Racial segregation in schools"
  },
  {
    "root": "secure the border",
    "variations": [
      "secure our border",
      "secure the border",
      "securing our border",
      "securing the border"
    ],
    "category": "Anti-latino",
    "definition": "Keep out Latinos"
  },
  {
    "root": "sex is real",
    "variations": [
      "biological sex is real",
      "sex is real"
    ],
    "category": "Transphobic",
    "definition": "Gender identities are not real, and trans people are erasing realities of biological sex"
  },
  {
    "root": "sex not gender",
    "variations": [
      "sex not gender"
    ],
    "category": "Transphobic",
    "definition": "Trans people aren't real"
  },
  {
    "root": "sex-based rights",
    "variations": [
      "sex-based rights"
    ],
    "category": "Transphobic",
    "definition": "trans people threaten women's rights"
  },
  {
    "root": "Sharia law",
    "variations": [
      "sharia",
      "sharia law",
      "shariah",
      "shariah law"
    ],
    "category": "Islamophobic",
    "definition": "Muslims are violent and present a threat to Americans"
  },
  {
    "root": "shekels",
    "variations": [
      "shekel",
      "shekels"
    ],
    "category": "Antisemitic",
    "definition": "Money with the connotation that Jews are greedy"
  },
  {
    "root": "Shlomo",
    "variations": [
      "schlomo",
      "shlomo"
    ],
    "category": "Antisemitic",
    "definition": "Jewish person"
  },
  {
    "root": "shoah",
    "variations": [
      "shoah",
      "shoah'd",
      "shoahed"
    ],
    "category": "Antisemitic",
    "definition": "Shut down, especially alt-right social media accounts by referencing the Holocaust"
  },
  {
    "root": "silent majority",
    "variations": [
      "silent majority"
    ],
    "category": "Racist",
    "definition": "Conservative white Americans who are threatened by racial minorities"
  },
  {
    "root": "single parent",
    "variations": [
      "single mom",
      "single mother",
      "single parent",
      "single-parent household"
    ],
    "category": "Racist",
    "definition": "Blaming Black parents (especially women) for poverty, crime, and dependence on public assistance"
  },
  {
    "root": "Skittle",
    "variations": [
      "skittle",
      "skittles"
    ],
    "category": "Islamophobic",
    "definition": "Muslim person"
  },
  {
    "root": "Skype",
    "variations": [
      "skype",
      "skypes"
    ],
    "category": "Antisemitic",
    "definition": "Jewish person"
  },
  {
    "root": "snowflake",
    "variations": [
      "snowflake",
      "snowflakes"
    ],
    "category": "Anti-liberal",
    "definition": "liberals"
  },
  {
    "root": "social justice warrior",
    "variations": [
      "sjw",
      "sjws",
      "social justice warrior",
      "social justice warriors"
    ],
    "category": "Anti-liberal",
    "definition": "liberals"
  },
  {
    "root": "Sonnenrad",
    "variations": [
      "black sun",
      "sonnenrad",
      "sunwheel"
    ],
    "category": "White supremacist",
    "definition": "White supremacist signal"
  },
  {
    "root": "soy boy",
    "variations": [
      "soy",
      "soy boy",
      "soy boys",
      "soyboi",
      "soybois"
    ],
    "category": "Anti-liberal",
    "definition": "liberal or establishment Republican men"
  },
  {
    "root": "special interests",
    "variations": [
      "global special interests",
      "special interest",
      "special interests"
    ],
    "category": "Antisemitic",
    "definition": "Jewish interests"
  },
  {
    "root": "SPQR",
    "variations": [
      "spqr"
    ],
    "category": "White supremacist",
    "definition": "White supremacist signal based on phrase associated with Roman Empire"
  },
  {
    "root": "states' rights",
    "variations": [
      "states' rights"
    ],
    "category": "Racist",
    "definition": "Racial segregation"
  },
  {
    "root": "steroids",
    "variations": [
      "steroids"
    ],
    "category": "Transphobic",
    "definition": "Trans people are drug abusers"
  },
  {
    "root": "strapping young buck",
    "variations": [
      "buck",
      "young buck"
    ],
    "category": "Racist",
    "definition": "young Black man"
  },
  {
    "root": "string puller",
    "variations": [
      "string puller",
      "string pullers",
      "string-pullers"
    ],
    "category": "Antisemitic",
    "definition": "Jewish people who control the world"
  },
  {
    "root": "superpredators",
    "variations": [
      "super predator",
      "super predators",
      "superpredator",
      "superpredators"
    ],
    "category": "Racist",
    "definition": "Black men are threatening"
  },
  {
    "root": "surgical wound",
    "variations": [
      "surgical wound",
      "surgical wounds"
    ],
    "category": "Transphobic",
    "definition": "Trans woman's neovagina"
  },
  {
    "root": "SWPL",
    "variations": [
      "swpl"
    ],
    "category": "Anti-liberal",
    "definition": "Politically progressive white person"
  },
  {
    "root": "take back",
    "variations": [
      "take back",
      "take back our country",
      "take our country back"
    ],
    "category": "White supremacist",
    "definition": "Give white Americans back full social and political control over the country"
  },
  {
    "root": "the goyim know",
    "variations": [
      "da goyim know",
      "shut it down",
      "the goyim know"
    ],
    "category": "Antisemitic",
    "definition": "Jewish people control the world"
  },
  {
    "root": "thin blue line",
    "variations": [
      "thin blue line",
      "thin blue line flag"
    ],
    "category": "Racist",
    "definition": "Protect white people from non-white people"
  },
  {
    "root": "Three Percenters",
    "variations": [
      "3%ers",
      "iii%ers",
      "three percenters"
    ],
    "category": "White supremacist",
    "definition": "Far-right militia movement"
  },
  {
    "root": "three strikes laws",
    "variations": [
      "three strikes",
      "three strikes law",
      "three strikes policy"
    ],
    "category": "Racist",
    "definition": "Mass incarceration of Black people"
  },
  {
    "root": "thug",
    "variations": [
      "thug",
      "thugs"
    ],
    "category": "Racist",
    "definition": "Black men are criminals or violent"
  },
  {
    "root": "tiny minority of men",
    "variations": [
      "tiny minority of men"
    ],
    "category": "Transphobic",
    "definition": "Trans women"
  },
  {
    "root": "tough on crime",
    "variations": [
      "tough on crime"
    ],
    "category": "Racist",
    "definition": "Mass incarceration of Black and Latinx people"
  },
  {
    "root": "Trans Identified Female",
    "variations": [
      "tif",
      "tifs",
      "trans identified female",
      "trans identified females",
      "trans-identified female"
    ],
    "category": "Transphobic",
    "definition": "Trans man"
  },
  {
    "root": "Trans Identified Male",
    "variations": [
      "tim",
      "tims",
      "trans identified male",
      "trans identified males",
      "trans-identified male"
    ],
    "category": "Transphobic",
    "definition": "Trans woman"
  },
  {
    "root": "TRAs",
    "variations": [
      "tra",
      "trans activist",
      "trans rights activist",
      "trans rights activists",
      "trans-rights activist",
      "tras"
    ],
    "category": "Transphobic",
    "definition": "person who supports the transgender rights movement"
  },
  {
    "root": "Trilateral Commission",
    "variations": [
      "trilateral commission"
    ],
    "category": "Antisemitic",
    "definition": "Institution by which Jewish people control the world"
  },
  {
    "root": "triple parentheses",
    "variations": [
      "((()))",
      "(((echo)))",
      "echo",
      "triple brackets",
      "triple parentheses"
    ],
    "category": "Antisemitic",
    "definition": "Symbol used to identify and harass Jewish people online"
  },
  {
    "root": "troon",
    "variations": [
      "troon",
      "troons"
    ],
    "category": "Transphobic",
    "definition": "Trans person"
  },
  {
    "root": "two lightning bolt emojis",
    "variations": [
      "⚡ ⚡"
    ],
    "category": "White supremacist",
    "definition": "White supremacist symbol representing the insignia of the Nazi SS"
  },
  {
    "root": "uterus-haver",
    "variations": [
      "uterus haver",
      "uterus-havers",
      "vagina haver"
    ],
    "category": "Transphobic",
    "definition": "Either trans women are not women because they don't have a uterus, or that trans people are trying to reduce cis women to reproductive organs"
  },
  {
    "root": "vaccine safety",
    "variations": [
      "vaccine safety"
    ],
    "category": "Anti-vax",
    "definition": "Opposition to vaccines"
  },
  {
    "root": "vegan cat",
    "variations": [
      "vegan cat"
    ],
    "category": "Transphobic",
    "definition": "Trans children were brainwashed by their parents"
  },
  {
    "root": "Vinland",
    "variations": [
      "vinland"
    ],
    "category": "White supremacist",
    "definition": "White supremacist signal referencing short-lived Viking settlement in North America"
  },
  {
    "root": "voter fraud",
    "variations": [
      "fraudulent voting",
      "voter fraud",
      "voting fraud"
    ],
    "category": "Racist",
    "definition": "Disenfranchisement of minority voters"
  },
  {
    "root": "war on Christmas",
    "variations": [
      "war on christmas"
    ],
    "category": "Conservative",
    "definition": "America is a country for white Christians and only white Christians"
  },
  {
    "root": "war on crime",
    "variations": [
      "war on crime"
    ],
    "category": "Racist",
    "definition": "mass incarceration and disenfranchisement of racial minorities, particularly Black men"
  },
  {
    "root": "war on drugs",
    "variations": [
      "war on drugs"
    ],
    "category": "Racist",
    "definition": "Harsh punishments for Black people who use drugs, but not for white people"
  },
  {
    "root": "war on terror",
    "variations": [
      "war on terror",
      "war on terrorism"
    ],
    "category": "Islamophobic",
    "definition": "War on Arab and Muslim people"
  },
  {
    "root": "we wuz kangz",
    "variations": [
      "we wuz kangs",
      "we wuz kangz",
      "we wuz kings"
    ],
    "category": "Racist",
    "definition": "mocks claims of black nationalism by using mock AAVE"
  },
  {
    "root": "welfare",
    "variations": [
      "welfare",
      "welfare reform"
    ],
    "category": "Racist",
    "definition": "racial minorities receive government aid that they don't deserve"
  },
  {
    "root": "welfare cheats",
    "variations": [
      "welfare cheat",
      "welfare cheats"
    ],
    "category": "Racist",
    "definition": "Black people who are lazy and take advantage of government social aid"
  },
  {
    "root": "welfare queen",
    "variations": [
      "the welfare queen",
      "welfare queen",
      "welfare queens"
    ],
    "category": "Racist",
    "definition": "Black woman who are lazy and take advantage of government social aid"
  },
  {
    "root": "White Lives Matter",
    "variations": [
      "white lives matter",
      "wlm"
    ],
    "category": "Racist",
    "definition": "Black lives don't matter"
  },
  {
    "root": "Willie Horton",
    "variations": [
      "willie horton"
    ],
    "category": "Racist",
    "definition": "Convicted murderer whose imagery is used to link blackness with criminality and threat"
  },
  {
    "root": "windmill",
    "variations": [
      "windmill",
      "windmill of friendship"
    ],
    "category": "White supremacist",
    "definition": "a swastika (aka I am a white supremacist)"
  },
  {
    "root": "womanface",
    "variations": [
      "womanface"
    ],
    "category": "Transphobic",
    "definition": "trans people treat womanhood as a costume"
  },
  {
    "root": "womyn",
    "variations": [
      "womxn",
      "womyn"
    ],
    "category": "Transphobic",
    "definition": "cis women"
  },
  {
    "root": "working class",
    "variations": [
      "working class",
      "working class communities",
      "working class families",
      "working families",
      "working-class",
      "working-class communities"
    ],
    "category": "Racist",
    "definition": "white working class"
  },
  {
    "root": "XX",
    "variations": [
      "xx"
    ],
    "category": "Transphobic",
    "definition": "I am a transphobic cis woman"
  },
  {
    "root": "Yahoo",
    "variations": [
      "yahoo",
      "yahoos"
    ],
    "category": "Anti-latino",
    "definition": "Hispanic person"
  },
  {
    "root": "YKW",
    "variations": [
      "ykw",
      "you know who"
    ],
    "category": "Antisemitic",
    "definition": "Jewish person"
  },
  {
    "root": "YWNBAW",
    "variations": [
      "ywnbaw"
    ],
    "category": "Transphobic",
    "definition": "trans women are not women"
  },
  {
    "root": "Zionist",
    "variations": [
      "zio",
      "zionist",
      "zionists",
      "zios"
    ],
    "category": "Antisemitic",
    "definition": "Jewish people"
  },
  {
    "root": "Zionist Occupation Government",
    "variations": [
      "zionist occupation government",
      "zog"
    ],
    "category": "Antisemitic",
    "definition": "Jewish people control the world"
  }
]
};

// Export for use in modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = GOODBOY_DATA;
}
