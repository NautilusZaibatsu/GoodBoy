/**
 * GoodBoy Dog Whistle Database
 * Generated from SALT-NLP Silent Signals dataset
 * Source: https://huggingface.co/datasets/SALT-NLP/silent_signals
 *
 * Dataset size: 16258 entries
 * Unique terms: 298
 * Total variations: 705 (redundant variations filtered client-side)
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
  generated: "2025-11-28T22:40:58.702Z",
  datasetSize: 16258,
  uniqueTerms: 304,

  // Dog whistle terms with definitions
  terms: [
    {
      "root": "Keep England English",
      "variations": [
        "England is for the English",
        "England is for English",
        "Keep England English"
      ],
      "category": "racist",
      "definition": "This nation belongs only to an ethnically defined 'native' group",
      "source": "GoodBoy Curated",
      "categoryMode": "dynamic",
      "placesFound": [
        {
          "match_type": "direct",
          "place": "England",
          "type": "substateNations"
        }
      ],
      "demonymsFound": [
        {
          "demonym": "English",
          "place": "England",
          "type": "substateNations",
        }
      ]
    },

    {
      "root": "Stop the boats",
      "variations": [
        "Stop small boats",
        "Stop the small boats",
        "Illegal boats",
        "Stop the channel crossings",
        "Stop channel crossings"
      ],
      "category": "xenophobic",
      "definition": "A political slogan used to frame asylum seekers and migrants arriving by small boats as a security threat",
      "source": "GoodBoy Curated"
    },

    {
      "root": "Carrot emoji",
      "variations": [
        "🥕"
      ],
      "category": "anti-vax",
      "definition": "Vaccine",
      "source": "GoodBoy Curated"
    },

    {
      "root": "What is a woman?",
      "variations": [
        "What really is a woman?",
        "What's a woman?",
        "Define woman",
        "Biological definition of woman",
        "Biological definition of female",
        "What makes someone a woman",
        "What makes someone female",
        "What is a man?",
        "What really is a man?",
        "What's a man?",
        "Define man",
        "Biological definition of man",
        "Biological definition of male",
        "What makes someone a man",
        "What makes someone male"
      ],
      "category": "transphobic",
      "definition": "A rhetorical demand for an oversimplified biological definition used in bad-faith arguments to delegitimise transgender people or deny gender identity",
      "source": "GoodBoy Curated"
    },

    {
      "root": "Jewish Question",
      "variations": [
        "jew question",
        "judenfrage",
        "jq"
      ],
      "category": "antisemitic",
      "definition": "An antisemitic idea that the Jewish minority was a problem that needed a solution",
      "source": "GoodBoy Curated"
    },

    {
      "root": "gender woo woo",
      "variations": [],
      "category": "transphobic",
      "definition": "Trans people want to escape reality"
    },
    {
      "root": "109",
      "variations": [
        "110"
      ],
      "category": "antisemitic",
      "definition": "Antisemitic signal that is a reference to number of countries Jews have been expelled from"
    },
    {
      "root": "1290",
      "variations": [],
      "category": "antisemitic",
      "definition": "Antisemitic signal that is a reference to the year Jews were expelled from England"
    },
    {
      "root": "13%",
      "variations": [
        "13",
        "13/50",
        "1350",
        "13/52",
        "1352"
      ],
      "category": "racist",
      "definition": "Racist signal that is a reference to the false statistic that African Americans are only 13% of the US population but commit a disproprotionate number of violent crimes"
    },
    {
      "root": "1488",
      "variations": [
        "14 words",
        "14/88",
        "88",
        "hh"
      ],
      "category": "white supremacist",
      "definition": "White supremacist signal that refers to the 14 Words by white supremacist David Lane and the number 88, or HH, as code for Heil Hitler"
    },
    {
      "root": "41%",
      "variations": [
        "41"
      ],
      "category": "transphobic",
      "definition": "Transphobic reference to statistic that 41% of trans people have attempted suicide, often used to imply trans people should kill themselves"
    },
    {
      "root": "Leppo",
      "variations": [],
      "category": "white supremacist",
      "definition": "Libertarian"
    },
    {
      "root": "abolish birthright citizenship",
      "variations": [
        "end birthright citizenship"
      ],
      "category": "racist",
      "definition": "We should have fewer people of different races to mine in this country"
    },
    {
      "root": "absent fathers",
      "variations": [
        "absent father",
        "absentee father",
        "lack of fathers"
      ],
      "category": "racist",
      "definition": "Black men are irresponsible"
    },
    {
      "root": "actual woman",
      "variations": [
        "actual women",
        "real woman",
        "real women"
      ],
      "category": "transphobic",
      "definition": "Transphobic signal that the speaker is a cis woman, with implication that trans women aren't \"real women\""
    },
    {
      "root": "adult human female",
      "variations": [
        "adult human female",
        "adult human females"
      ],
      "category": "transphobic",
      "definition": "Transphobic signal that the speaker is a cis woman, with implication that trans women aren't \"real women\""
    },
    {
      "root": "AFAB trans woman",
      "variations": [
        "afab trans woman"
      ],
      "category": "transphobic",
      "definition": "Transphobic joke that a cis woman can claim to identify as a trans woman"
    },
    {
      "root": "affirmative action",
      "variations": [
        "affirmative action"
      ],
      "category": "racist",
      "definition": "White people are victims of racial mistreatment"
    },
    {
      "root": "agender",
      "variations": [
        "agender"
      ],
      "category": "transphobic",
      "definition": "Gender isn't real"
    },
    {
      "root": "Aiden",
      "variations": [
        "aiden"
      ],
      "category": "transphobic",
      "definition": "Trans man"
    },
    {
      "root": "alarmism",
      "variations": [
        "alarmism",
        "climate alarmism"
      ],
      "category": "climate change denier",
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
      "category": "climate change denier",
      "definition": "Person who is overreacting about climate change, which the speaker does not view as a major problem"
    },
    {
      "root": "All Lives Matter",
      "variations": [
        "#alllivesmatter",
        "all lives matter",
        "alm"
      ],
      "category": "racist",
      "definition": "Black lives don't matter"
    },
    {
      "root": "alt-right",
      "variations": [
        "alt-right",
        "alternative right",
        "dissident right"
      ],
      "category": "white supremacist",
      "definition": "White supremacist"
    },
    {
      "root": "America First",
      "variations": [
        "#americafirst",
        "america first"
      ],
      "category": "nationalist",
      "definition": "A nationalist/localist statement with a history tied to racism",
      "categoryMode": "dynamic",
      "placesFound": [
        {
          "match_type": "direct",
          "place": "America",
          "type": "countries"
        }
      ],
      "demonymsFound": []
    },
    {
      "root": "Amerimutt",
      "variations": [
        "56%",
        "amerimutt",
        "la creatura"
      ],
      "category": "white supremacist",
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
      "category": "racist",
      "definition": "The perpetrator is exactly the demographic you expect"
    },
    {
      "root": "anchor babies",
      "variations": [
        "anchor babies",
        "anchor baby"
      ],
      "category": "anti-latino",
      "definition": "Mexicans are manipulating the immigration system"
    },
    {
      "root": "anointed",
      "variations": [
        "anointed",
        "anointing"
      ],
      "category": "religious",
      "definition": "I believe in and practice Pentecostal Christian beliefs"
    },
    {
      "root": "attacks on or imagery of Jewish financial leaders",
      "variations": [
        "janet yellen",
        "lloyd blankfein"
      ],
      "category": "antisemitic",
      "definition": "Jewish people control all the money"
    },
    {
      "root": "attacks on or imagery of Jewish political leaders",
      "variations": [
        "bernie sanders",
        "volodymyr zelensky"
      ],
      "category": "antisemitic",
      "definition": "Jewish people control world politics"
    },
    {
      "root": "autoandrophile",
      "variations": [
        "aap"
      ],
      "category": "transphobic",
      "definition": "Trans man"
    },
    {
      "root": "autoandrophilia",
      "variations": [
        "autoandrophilia"
      ],
      "category": "transphobic",
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
      "category": "transphobic",
      "definition": "Trans woman"
    },
    {
      "root": "autogynephilia",
      "variations": [
        "autogynephilia",
        "autogynophilia"
      ],
      "category": "transphobic",
      "definition": "Trans women are just men who have a fetish for being viewed as women"
    },
    {
      "root": "baby daddies",
      "variations": [
        "baby daddies",
        "baby daddy"
      ],
      "category": "racist",
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
      "category": "racist",
      "definition": "Black women are irresponsible"
    },
    {
      "root": "Back the Blue",
      "variations": [
        "back the blue"
      ],
      "category": "racist",
      "definition": "Enforce white supremacy"
    },
    {
      "root": "balance the budget",
      "variations": [
        "balance the budget",
        "balancing the budget"
      ],
      "category": "conservative",
      "definition": "Cut public services and aid to vulnerable populations"
    },
    {
      "root": "bankers",
      "variations": [
        "banker",
        "bankers"
      ],
      "category": "antisemitic",
      "definition": "Jewish people"
    },
    {
      "root": "banksters",
      "variations": [
        "bankster",
        "banksters"
      ],
      "category": "antisemitic",
      "definition": "Jewish people"
    },
    {
      "root": "Barack Hussein Obama",
      "variations": [
        "barack hussein",
        "hussein obama"
      ],
      "category": "islamophobic",
      "definition": "Obama has a connection to Islam and is therefore threatening and untrustworthy"
    },
    {
      "root": "based",
      "variations": [
        "based"
      ],
      "category": "white supremacist",
      "definition": "Endorsement of someone promoting racism or other bigotry"
    },
    {
      "root": "bear emoji",
      "variations": [
        "bear emoji",
        "🐻"
      ],
      "category": "white supremacist",
      "definition": "White supremacist signal representing fans of far-right internet personality Owen Benjamin"
    },
    {
      "root": "beta",
      "variations": [
        "beta",
        "beta male"
      ],
      "category": "white supremacist",
      "definition": "Liberal men"
    },
    {
      "root": "big government",
      "variations": [
        "big government"
      ],
      "category": "conservative",
      "definition": "Federal assistance"
    },
    {
      "root": "big pharma",
      "variations": [
        "big pharma"
      ],
      "category": "anti-vax",
      "definition": "Evil pharmaceutical companies sell poison for profit"
    },
    {
      "root": "Bing",
      "variations": [
        "bing"
      ],
      "category": "anti-asian",
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
      "category": "transphobic",
      "definition": "Cisgender man"
    },
    {
      "root": "biological realism",
      "variations": [
        "biological realism",
        "biological reality"
      ],
      "category": "transphobic",
      "definition": "Trans people aren't real"
    },
    {
      "root": "biological realist",
      "variations": [
        "biological realist"
      ],
      "category": "transphobic",
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
      "category": "transphobic",
      "definition": "Cisgender woman"
    },
    {
      "root": "bix nood",
      "variations": [
        "bix nood"
      ],
      "category": "racist",
      "definition": "mock-AAVE to make fun of Black people"
    },
    {
      "root": "black and orange square emojis",
      "variations": [
        "super straight"
      ],
      "category": "transphobic",
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
      "category": "racist",
      "definition": "Black people are criminals"
    },
    {
      "root": "Blue Lives Matter",
      "variations": [
        "#bluelivesmatter",
        "blue lives matter"
      ],
      "category": "racist",
      "definition": "Black lives don't matter"
    },
    {
      "root": "blueish",
      "variations": [
        "blue",
        "blueish",
        "bluish"
      ],
      "category": "antisemitic",
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
      "category": "white supremacist",
      "definition": "Race war"
    },
    {
      "root": "bop",
      "variations": [
        "bop",
        "bopped",
        "bops"
      ],
      "category": "white supremacist",
      "definition": "Kill or attack, particularly political opponents"
    },
    {
      "root": "brave and stunning",
      "variations": [
        "brave and stunning"
      ],
      "category": "transphobic",
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
      "category": "racist",
      "definition": "Black families are dysfunctional"
    },
    {
      "root": "bugman",
      "variations": [
        "bugman",
        "bugmen"
      ],
      "category": "anti-liberal",
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
      "category": "racist",
      "definition": "White woman having sex with a Black man"
    },
    {
      "root": "butterfly",
      "variations": [
        "butterflies",
        "butterfly"
      ],
      "category": "homophobic",
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
      "category": "antisemitic",
      "definition": "Powerful group of Jewish people who control the world"
    },
    {
      "root": "car salesman",
      "variations": [
        "car salesman",
        "car salesmen"
      ],
      "category": "anti-liberal",
      "definition": "Liberal"
    },
    {
      "root": "Carolus Rex",
      "variations": [
        "carolus rex",
        "charles xii",
        "karl xii"
      ],
      "category": "white supremacist",
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
      "category": "white supremacist",
      "definition": "Trump supporter"
    },
    {
      "root": "central bankers",
      "variations": [
        "central banker",
        "central bankers"
      ],
      "category": "antisemitic",
      "definition": "Jewish people who control all the money"
    },
    {
      "root": "checkered flag emoji",
      "variations": [
        "🏁"
      ],
      "category": "transphobic",
      "definition": "Transphobic signal representing idea that there are only two sexes"
    },
    {
      "root": "cherry emoji",
      "variations": [
        "🍒"
      ],
      "category": "transphobic",
      "definition": "Transphobic signal representing Joanna Cherry, an anti-trans activist and Scottish politician"
    },
    {
      "root": "China Virus",
      "variations": [
        "china virus",
        "kung flu",
        "wuhan virus"
      ],
      "category": "anti-asian",
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
      "category": "racist",
      "definition": "over-policing of Black and Latino neighborhoods and mass incarceration of their residents"
    },
    {
      "root": "Clown World",
      "variations": [
        "clown world",
        "honkler",
        "🤡 🌎"
      ],
      "category": "white supremacist",
      "definition": "White supremacist signal originating in 4chan troll meme that clowns are racist"
    },
    {
      "root": "clownfish",
      "variations": [
        "clownfish"
      ],
      "category": "transphobic",
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
      "category": "racist",
      "definition": "white women who have sexwith black men"
    },
    {
      "root": "coastal elite",
      "variations": [
        "coastal elite",
        "coastal elites"
      ],
      "category": "antisemitic",
      "definition": "Jewish people"
    },
    {
      "root": "COIN",
      "variations": [
        "co-opting intersex narratives",
        "coin",
        "coining"
      ],
      "category": "transphobic",
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
      "category": "antisemitic",
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
      "category": "racist",
      "definition": "Opposition to race-based affirmative action"
    },
    {
      "root": "controlled media",
      "variations": [
        "controlled media",
        "media control"
      ],
      "category": "antisemitic",
      "definition": "Jewish people control the media"
    },
    {
      "root": "cosmopolitan",
      "variations": [
        "cosmopolitan",
        "cosmopolitans"
      ],
      "category": "antisemitic",
      "definition": "Jewish"
    },
    {
      "root": "cosmopolitan elite",
      "variations": [
        "cosmopolitan elite"
      ],
      "category": "antisemitic",
      "definition": "Jewish"
    },
    {
      "root": "critical race theory",
      "variations": [
        "critical race theory",
        "crt"
      ],
      "category": "racist",
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
      "category": "white supremacist",
      "definition": "liberal or establishment Republican men"
    },
    {
      "root": "cultural enrichment",
      "variations": [
        "cultural enrichment"
      ],
      "category": "islamophobic",
      "definition": "Muslims create problems in society"
    },
    {
      "root": "cultural Marxism",
      "variations": [
        "cultural marxism"
      ],
      "category": "antisemitic",
      "definition": "Jewish people are upending society"
    },
    {
      "root": "cultural Marxists",
      "variations": [
        "cultural marxist"
      ],
      "category": "antisemitic",
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
      "category": "racist",
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
      "category": "racist",
      "definition": "Black men are irresponsible"
    },
    {
      "root": "deep state",
      "variations": [
        "deep state"
      ],
      "category": "antisemitic",
      "definition": "Jewish people are manipulating and controlling the government"
    },
    {
      "root": "Deus Vult",
      "variations": [
        "deus vult"
      ],
      "category": "islamophobic",
      "definition": "Islamophobic signal referring to battle cry by Christian crusaders"
    },
    {
      "root": "dindu",
      "variations": [
        "dindu",
        "dindus"
      ],
      "category": "racist",
      "definition": "Black person"
    },
    {
      "root": "dindu nuffin",
      "variations": [
        "dindu nuffin"
      ],
      "category": "racist",
      "definition": "Black person"
    },
    {
      "root": "dinosaur emojis",
      "variations": [
        "🦕",
        "🦖"
      ],
      "category": "transphobic",
      "definition": "Transphobic signal reclaiming MP David Lammy's denouncement of transphobes as \"dinosaurs\""
    },
    {
      "root": "Dred Scott",
      "variations": [
        "dred scott",
        "dred scott decision"
      ],
      "category": "conservative",
      "definition": "Signal opposition to abortion by equating it to slavery"
    },
    {
      "root": "dual citizen",
      "variations": [
        "dual citizen",
        "dual citizens",
        "dual citizenship"
      ],
      "category": "antisemitic",
      "definition": "Jewish person"
    },
    {
      "root": "dual loyalty",
      "variations": [
        "disloyalty",
        "dual loyalties",
        "dual loyalty"
      ],
      "category": "antisemitic",
      "definition": "Jews are disloyal to their country"
    },
    {
      "root": "Durden",
      "variations": [
        "durden"
      ],
      "category": "transphobic",
      "definition": "transgender person"
    },
    {
      "root": "early life",
      "variations": [
        "early life",
        "early life section"
      ],
      "category": "antisemitic",
      "definition": "the person being talked about is Jewish"
    },
    {
      "root": "economic anxiety",
      "variations": [
        "economic anxiety"
      ],
      "category": "racist",
      "definition": "Anxiety about non-white people becoming equal economically and socially"
    },
    {
      "root": "election integrity",
      "variations": [
        "election integrity",
        "rigged election"
      ],
      "category": "racist",
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
      "category": "racist",
      "definition": "People who receive aid from government social aid programs, primarily minorities, are lazy and undeserving"
    },
    {
      "root": "entitlement spending",
      "variations": [
        "entitlement spending",
        "government spending"
      ],
      "category": "racist",
      "definition": "Government social aid programs, perceived to primarily help minorities, are destroying the country's economy"
    },
    {
      "root": "erasing women",
      "variations": [
        "erasing women",
        "erasure of women"
      ],
      "category": "transphobic",
      "definition": "Trans people are threatening cis women's rights"
    },
    {
      "root": "every single time",
      "variations": [
        "est"
      ],
      "category": "white supremacist",
      "definition": "Jewish people cause all the problems"
    },
    {
      "root": "FAFO",
      "variations": [
        "fafo"
      ],
      "category": "white supremacist",
      "definition": "White supremacist signal originating from \"fuck around and find out\""
    },
    {
      "root": "family values",
      "variations": [
        "family values",
        "traditional family values"
      ],
      "category": "homophobic",
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
      "category": "racist",
      "definition": "Black men are irresponsible"
    },
    {
      "root": "Federal Reserve",
      "variations": [
        "federal reserve",
        "the fed"
      ],
      "category": "antisemitic",
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
      "category": "antisemitic",
      "definition": "Suggests that Jewish people are merely masquerading as white people"
    },
    {
      "root": "food stamp",
      "variations": [],
      "category": "racist",
      "definition": "Government assistance for minorities"
    },
    {
      "root": "forced busing",
      "variations": [
        "forced bussing"
      ],
      "category": "racist",
      "definition": "Opposition to racial integration"
    },
    {
      "root": "forced diversity",
      "variations": [],
      "category": "racist",
      "definition": "Diversity is making things worse"
    },
    {
      "root": "free helicopter rides",
      "variations": [
        "helicopter rides"
      ],
      "category": "white supremacist",
      "definition": "Let's kill our political opponents"
    },
    {
      "root": "freedom of association",
      "variations": [],
      "category": "racist",
      "definition": "Support for racial segregation"
    },
    {
      "root": "fren",
      "variations": [
        "fren world",
        "frens"
      ],
      "category": "white supremacist",
      "definition": "Self-referential term for white supremacists on the internet"
    },
    {
      "root": "frog emoji",
      "variations": [
        "🐸"
      ],
      "category": "white supremacist",
      "definition": "White supremacist signal, representing Pepe the Frog"
    },
    {
      "root": "gangbanger",
      "variations": [
        "gang banger"
      ],
      "category": "racist",
      "definition": "Black man"
    },
    {
      "root": "gender abolition",
      "variations": [
        "abolish gender"
      ],
      "category": "transphobic",
      "definition": "Only sex assigned at birth matters"
    },
    {
      "root": "gender abolitionist",
      "variations": [],
      "category": "transphobic",
      "definition": "Transphobic signal based on belief that only sex assigned at birth matters"
    },
    {
      "root": "gender critical",
      "variations": [
        "gc",
        "gender crit",
      ],
      "category": "transphobic",
      "definition": "Self-referential term for transphobic people"
    },
    {
      "root": "gender fandom",
      "variations": [
        "gender fandom"
      ],
      "category": "transphobic",
      "definition": "Trans people are ridiculous"
    },
    {
      "root": "gender ideology",
      "variations": [
        "gender identity ideology",
        "radical gender ideology"
      ],
      "category": "transphobic",
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
        "socialized as male",
        "socialised female",
        "socialised male",
        "socialized female",
        "socialized male"
      ],
      "category": "transphobic",
      "definition": "Trans men will always be women, and trans women will always be men"
    },
    {
      "root": "genderfree",
      "variations": [
        "genderless"
      ],
      "category": "transphobic",
      "definition": "Self-referential term for transphobic people"
    },
    {
      "root": "genderist",
      "variations": [],
      "category": "transphobic",
      "definition": "Trans people and allies"
    },
    {
      "root": "George Soros",
      "variations": [
        "soros"
      ],
      "category": "antisemitic",
      "definition": "The Jewish person who controls the world"
    },
    {
      "root": "ghetto",
      "variations": [
        "ghettoes",
      ],
      "category": "racist",
      "definition": "Low-income Black neighborhood"
    },
    {
      "root": "gibsmedat",
      "variations": [
        "gib me dat",
        "gibs"
      ],
      "category": "racist",
      "definition": "Black people are entitled and depend on government benefits"
    },
    {
      "root": "global elite",
      "variations": [
        "international elite"
      ],
      "category": "antisemitic",
      "definition": "Jewish people"
    },
    {
      "root": "globalism",
      "variations": [],
      "category": "antisemitic",
      "definition": "Jewish interests"
    },
    {
      "root": "globalist",
      "variations": [],
      "category": "antisemitic",
      "definition": "Jewish people"
    },
    {
      "root": "Goody",
      "variations": [],
      "category": "transphobic",
      "definition": "Transphobic signal insinuating that cis women are being persecuted"
    },
    {
      "root": "Google",
      "variations": [
        "google",
        "googles"
      ],
      "category": "racist",
      "definition": "Black person"
    },
    {
      "root": "government handout",
      "variations": [
        "handout"
      ],
      "category": "racist",
      "definition": "Any money that the government gives to support vulnerable people"
    },
    {
      "root": "goy",
      "variations": [
        "goyim"
      ],
      "category": "antisemitic",
      "definition": "a non-Jew"
    },
    {
      "root": "groomers",
      "variations": [],
      "category": "anti-lgbtq",
      "definition": "LGBTQ people are predators"
    },
    {
      "root": "grooming",
      "variations": [
        "anti-grooming"
      ],
      "category": "anti-lgbtq",
      "definition": "LGBTQ people are predators"
    },
    {
      "root": "hard-working American",
      "variations": [
        "hardworking american"
      ],
      "category": "racist",
      "definition": "Depending on the context, can be used in a way that implies a racial hierarchy or nationalist/localist exclusion",
      "categoryMode": "dynamic",
      "demonymsFound": [
        {
          "demonym": "american",
          "place": "America",
          "type": "countries",
        }
      ]
    },
    {
      "root": "he wuz a good boy",
      "variations": [
        "he was a good boy"
      ],
      "category": "racist",
      "definition": "Black people are unintelligent and/or criminals"
    },
    {
      "root": "health freedom",
      "variations": [
        "medical freedom"
      ],
      "category": "anti-vax",
      "definition": "Anti-vax"
    },
    {
      "root": "healthy tissue",
      "variations": [],
      "category": "anti-vax",
      "definition": "Used to imply that vaccines damage an otherwise healthy body"
    },
    {
      "root": "Hollywood elite",
      "variations": [
        "hollywood",
        "hollywood liberals",
        "hollywood moguls"
      ],
      "category": "antisemitic",
      "definition": "Jewish people who control the media"
    },
    {
      "root": "Holocauster",
      "variations": [],
      "category": "antisemitic",
      "definition": "Jewish person"
    },
    {
      "root": "hygienic",
      "variations": [],
      "category": "transphobic",
      "definition": "Term often used to imply that trans people are unhygienic"
    },
    {
      "root": "identify as",
      "variations": [],
      "category": "transphobic",
      "definition": "Trans people are ridiculous"
    },
    {
      "root": "identitarianism",
      "variations": [
        "identitarian"
      ],
      "category": "white supremacist",
      "definition": "Nazism"
    },
    {
      "root": "illegal alien",
      "variations": [
        "criminal illegal alien",
        "criminal alien",
      ],
      "category": "xenophobic",
      "definition": "Dangerous undocumented brown people"
    },
    {
      "root": "illegal immigrant",
      "variations": [
        "illegal immigrant",
        "illegal migrants",
        "illegals"
      ],
      "category": "xenophobic",
      "definition": "Dangerous undocumented brown people"
    },
    {
      "root": "Illuminati",
      "variations": [],
      "category": "antisemitic",
      "definition": "Jewish people who control the world"
    },
    {
      "root": "implicit bias",
      "variations": [
        "implicit biases"
      ],
      "category": "liberal",
      "definition": "Racism"
    },
    {
      "root": "inner city",
      "variations": [
        "inner cities",
        "urban"
      ],
      "category": "racist",
      "definition": "African American neighborhoods"
    },
    {
      "root": "institution of marriage",
      "variations": [
        "institution of marriage",
        "traditional marriage"
      ],
      "category": "homophobic",
      "definition": "Opposition to gay marriage"
    },
    {
      "root": "intact",
      "variations": [
        "intact female",
        "intact male",
        "intact man"
      ],
      "category": "transphobic",
      "definition": "Trans people who haven't had bottom surgery aren't real trans people"
    },
    {
      "root": "international bankers",
      "variations": [
        "international banker",
        "international bankers",
        "international banks"
      ],
      "category": "antisemitic",
      "definition": "Jewish people who control all the money"
    },
    {
      "root": "Islamic extremism",
      "variations": [
        "extremism",
        "islamic extremism"
      ],
      "category": "islamophobic",
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
      "category": "islamophobic",
      "definition": "Muslim people as a whole are a threat"
    },
    {
      "root": "Islamic terrorism",
      "variations": [
        "islamic terrorism",
        "terrorism"
      ],
      "category": "islamophobic",
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
      "category": "islamophobic",
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
      "category": "islamophobic",
      "definition": "Muslim people as a whole are a threat"
    },
    {
      "root": "Israel Lobby",
      "variations": [
        "israel lobby"
      ],
      "category": "antisemitic",
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
      "category": "white supremacist",
      "definition": "White supremacist slogan"
    },
    {
      "root": "job creators",
      "variations": [
        "job creation",
        "job creator",
        "job creators"
      ],
      "category": "conservative",
      "definition": "Wealthy people"
    },
    {
      "root": "jogger",
      "variations": [
        "jogger",
        "joggers"
      ],
      "category": "racist",
      "definition": "Black person"
    },
    {
      "root": "Judas",
      "variations": [
        "30 pieces of silver",
        "judas",
        "thirty pieces of silver"
      ],
      "category": "antisemitic",
      "definition": "Jews are not to be trusted"
    },
    {
      "root": "Judeo-Christian",
      "variations": [
        "judeo-christian",
        "judeo-christian values",
        "judeo-christianity"
      ],
      "category": "islamophobic",
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
      "category": "conservative",
      "definition": "Judges ruling in liberals' favor"
    },
    {
      "root": "Jwoke",
      "variations": [],
      "category": "antisemitic",
      "definition": "Antisemitic self-referential signal"
    },
    {
      "root": "Kalergi Plan",
      "variations": [
        "kalergi plan"
      ],
      "category": "antisemitic",
      "definition": "Jewish people are conspiring to rule the world"
    },
    {
      "root": "Kek",
      "variations": [
        "kek",
        "kekistan"
      ],
      "category": "white supremacist",
      "definition": "White supremacist signal meaning \"lol\" that became an alt-right 4chan meme"
    },
    {
      "root": "Khazars",
      "variations": [
        "khazar",
        "khazars"
      ],
      "category": "antisemitic",
      "definition": "Jewish people"
    },
    {
      "root": "law and order",
      "variations": [
        "law and order"
      ],
      "category": "racist",
      "definition": "Black and Latino people are lawless and commit crimes"
    },
    {
      "root": "lesbian erasure",
      "variations": [
        "erasing lesbians",
        "lesbian erasure"
      ],
      "category": "transphobic",
      "definition": "Trans people are threatening cis lesbians"
    },
    {
      "root": "lesbophobia",
      "variations": [
        "lesbophobia"
      ],
      "category": "transphobic",
      "definition": "Trans people are threatening cis lesbians"
    },
    {
      "root": "Let's Go Brandon",
      "variations": [
        "let's go brandon"
      ],
      "category": "conservative",
      "definition": "Conservative signal that originally meant Fuck Joe Biden"
    },
    {
      "root": "LGB rights",
      "variations": [
        "drop the t",
        "lgb",
        "lgb rights"
      ],
      "category": "transphobic",
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
      "category": "homophobic",
      "definition": "Gay person"
    },
    {
      "root": "lizard emoji",
      "variations": [
        "🦎"
      ],
      "category": "transphobic",
      "definition": "Self-referential signal for detransitioners that are now anti-trans"
    },
    {
      "root": "loxism",
      "variations": [
        "loxism"
      ],
      "category": "antisemitic",
      "definition": "Jews hate non-Jews"
    },
    {
      "root": "MAGA",
      "variations": [
        "maga",
        "make america great again"
      ],
      "category": "nationalist",
      "definition": "A form of nationalism/localism that has been linked to racist ideologies",
      "categoryMode": "dynamic",
      "placesFound": [
        {
          "match_type": "direct",
          "place": "America",
          "type": "countries"
        }
      ],
      "demonymsFound": []
    },
    {
      "root": "magapede",
      "variations": [
        "magapede",
        "magapedes"
      ],
      "category": "white supremacist",
      "definition": "Trump supporters who are not antisemitic or racist enough"
    },
    {
      "root": "majority-minority",
      "variations": [],
      "category": "racist",
      "definition": "White hegemony in America is threatened"
    },
    {
      "root": "male violence",
      "variations": [
        "male violence"
      ],
      "category": "transphobic",
      "definition": "Trans women are violent"
    },
    {
      "root": "male-friendly content",
      "variations": [
        "male-friendly"
      ],
      "category": "misogynistic",
      "definition": "Rape jokes and threats about domestic violence, other content that features abuse of women"
    },
    {
      "root": "mass immigration",
      "variations": [
        "mass migration"
      ],
      "category": "xenophobic",
      "definition": "Non-white immigration"
    },
    {
      "root": "merit-based immigration policy",
      "variations": [
        "merit-based immigration",
        "points-based immigration"
      ],
      "category": "xenophobic",
      "definition": "Stop non-white immigration"
    },
    {
      "root": "middle class",
      "variations": [
      ],
      "category": "racist",
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
        "🥛"
      ],
      "category": "white supremacist",
      "definition": "White supremacist signal"
    },
    {
      "root": "mixed sex",
      "variations": [],
      "category": "transphobic",
      "definition": "Environment that accommodates both trans and cis women"
    },
    {
      "root": "multiculturalism",
      "variations": [
        "multi-kulti",
        "multiculti",
        "multicultural"
      ],
      "category": "islamophobic",
      "definition": "Too many Muslims"
    },
    {
      "root": "neoliberal",
      "variations": [
        "neolib",
        "neoliberalism",
      ],
      "category": "liberal",
      "definition": "Non-leftist liberals"
    },
    {
      "root": "New World Order",
      "variations": [
        "new world order",
        "nwo"
      ],
      "category": "antisemitic",
      "definition": "Jewish people control the world"
    },
    {
      "root": "New York elite",
      "variations": [
        "manhattan elite",
        "new york elite"
      ],
      "category": "antisemitic",
      "definition": "Jewish people"
    },
    {
      "root": "New York intellectuals",
      "variations": [
        "new york intellectuals"
      ],
      "category": "antisemitic",
      "definition": "Jewish people"
    },
    {
      "root": "New York values",
      "variations": [
        "new york values"
      ],
      "category": "antisemitic",
      "definition": "Jewishness"
    },
    {
      "root": "nibba",
      "variations": [
        "nibba",
        "nibbas"
      ],
      "category": "racist",
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
      "category": "anti-liberal",
      "definition": "Liberal person"
    },
    {
      "root": "octopus",
      "variations": [
        "octopus"
      ],
      "category": "antisemitic",
      "definition": "Jewish people control the world"
    },
    {
      "root": "OK sign emoji",
      "variations": [
        "ok sign",
        "👌"
      ],
      "category": "white supremacist",
      "definition": "White supremacist signal"
    },
    {
      "root": "open borders for Israel",
      "variations": [
        "open borders for israel"
      ],
      "category": "antisemitic",
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
      "category": "white supremacist",
      "definition": "Someone who holds alt-right or \"red-pilled\" political beliefs, often referring to Trump"
    },
    {
      "root": "out of wedlock",
      "variations": [
        "out of wedlock"
      ],
      "category": "racist",
      "definition": "Black women are irresponsible and their children are less valuable to society"
    },
    {
      "root": "overpopulation",
      "variations": [
        "overpopulating the planet",
        "overpopulation"
      ],
      "category": "racist",
      "definition": "There are too many non-white people in the world"
    },
    {
      "root": "oy vey",
      "variations": [
        "oy vey"
      ],
      "category": "antisemitic",
      "definition": "Antisemitic signal that mocks Jewish people and language"
    },
    {
      "root": "Pajeet",
      "variations": [
        "pajeet",
        "pajeets"
      ],
      "category": "anti-asian",
      "definition": "Indian person"
    },
    {
      "root": "Pepe the Frog",
      "variations": [
        "feels good man",
        "pepe",
        "pepe the frog"
      ],
      "category": "white supremacist",
      "definition": "White supremacist signal"
    },
    {
      "root": "personal responsibility",
      "variations": [
        "individual responsibility",
        "personal responsibility"
      ],
      "category": "racist",
      "definition": "Opposition to public spending perceived to benefit racial minorities over white people"
    },
    {
      "root": "physical removal",
      "variations": [
        "physical removal"
      ],
      "category": "white supremacist",
      "definition": "Kill political opponents or non-white people"
    },
    {
      "root": "pilpul",
      "variations": [
        "pilpul"
      ],
      "category": "antisemitic",
      "definition": "Jews are bad, and any counterargument is nonsense"
    },
    {
      "root": "pine tree emoji",
      "variations": [
        "🌲"
      ],
      "category": "white supremacist",
      "definition": "White supremacist signal connected to ecofascism"
    },
    {
      "root": "poisoning the well",
      "variations": [
        "poisoning the well"
      ],
      "category": "antisemitic",
      "definition": "Jewish people infect non-Jews with diseases and/or harmful ideas"
    },
    {
      "root": "political correctness",
      "variations": [
        "political correctness",
        "politically correct"
      ],
      "category": "racist",
      "definition": "We should let people be openly racist"
    },
    {
      "root": "power level",
      "variations": [
        "power level"
      ],
      "category": "white supremacist",
      "definition": "How deeply someone has fallen into fascist ideology"
    },
    {
      "root": "preemptive strike",
      "variations": [
        "pre-emptive strike",
        "preemptive strike"
      ],
      "category": "conservative",
      "definition": "Unprovoked attack"
    },
    {
      "root": "prefix \"super\"",
      "variations": [
        "superlesbian",
        "superstraight"
      ],
      "category": "transphobic",
      "definition": "Trans-exclusionary sexual preference"
    },
    {
      "root": "pro-family",
      "variations": [
        "pro-family"
      ],
      "category": "homophobic",
      "definition": "Anti-gay"
    },
    {
      "root": "property rights",
      "variations": [
        "property rights",
        "protecting property rights"
      ],
      "category": "racist",
      "definition": "Right of property owners to discriminate racially"
    },
    {
      "root": "protecting women and girls",
      "variations": [
        "protect women and girls",
        "protecting women and girls",
        "protecting women's spaces"
      ],
      "category": "transphobic",
      "definition": "Trans women are predatory men"
    },
    {
      "root": "public school",
      "variations": [
        "public school",
        "public schools"
      ],
      "category": "racist",
      "definition": "Dangerous place with nonwhite kids that wastes tax dollars"
    },
    {
      "root": "pulling strings",
      "variations": [
        "pull the strings",
        "pulling strings",
        "pulling the strings"
      ],
      "category": "antisemitic",
      "definition": "Jewish people control the world"
    },
    {
      "root": "puppet masters",
      "variations": [
        "puppet master",
        "puppet masters"
      ],
      "category": "antisemitic",
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
      "category": "racist",
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
      "category": "racist",
      "definition": "White people are better than other races"
    },
    {
      "root": "radical Islam",
      "variations": [
        "radical islam"
      ],
      "category": "islamophobic",
      "definition": "Muslim people as a whole are a threat"
    },
    {
      "root": "RaHoWa",
      "variations": [
        "rahowa"
      ],
      "category": "white supremacist",
      "definition": "Racial holy war"
    },
    {
      "root": "Reagan",
      "variations": [
        "reagan",
        "reagans"
      ],
      "category": "white supremacist",
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
      "category": "racist",
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
      "category": "homophobic",
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
      "category": "islamophobic",
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
      "category": "anti-gmo",
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
      "category": "anti-gmo",
      "definition": "Union-busting"
    },
    {
      "root": "rootless cosmopolitan",
      "variations": [
        "rootless cosmopolitan",
        "rootless cosmopolitans"
      ],
      "category": "antisemitic",
      "definition": "Jewish person"
    },
    {
      "root": "Rothschilds",
      "variations": [
        "rothschild",
        "rothschild family",
        "rothschilds"
      ],
      "category": "antisemitic",
      "definition": "Jewish people control all the money"
    },
    {
      "root": "RWDS",
      "variations": [
        "rwds"
      ],
      "category": "white supremacist",
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
      "category": "transphobic",
      "definition": "Young people should not have access to\ngender-affirming care"
    },
    {
      "root": "save women's sports",
      "variations": [
        "protect women's sports"
      ],
      "category": "transphobic",
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
      "category": "racist",
      "definition": "Racial segregation in schools"
    },
    {
      "root": "secure the border",
      "variations": [
        "secure our border",
        "securing our border"
      ],
      "category": "racist",
      "definition": "Keep out foreigners"
    },
    {
      "root": "sex is real",
      "variations": [
        "biological sex is real",
        "sex is real"
      ],
      "category": "transphobic",
      "definition": "Gender identities are not real, and trans people are erasing realities of biological sex"
    },
    {
      "root": "sex not gender",
      "variations": [
        "sex not gender"
      ],
      "category": "transphobic",
      "definition": "Trans people aren't real"
    },
    {
      "root": "sex-based rights",
      "variations": [
        "sex-based rights"
      ],
      "category": "transphobic",
      "definition": "trans people threaten women's rights"
    },
    {
      "root": "Sharia law",
      "variations": [
        "sharia",
        "shakira law",
        "shariah",
        "shariah law"
      ],
      "category": "islamophobic",
      "definition": "Muslims are violent and present a threat to Americans"
    },
    {
      "root": "shekels",
      "variations": [],
      "category": "antisemitic",
      "definition": "Money with the connotation that Jews are greedy"
    },
    {
      "root": "Shlomo",
      "variations": [
        "schlomo"
      ],
      "category": "antisemitic",
      "definition": "Jewish person"
    },
    {
      "root": "shoah",
      "variations": [
        "shoah'd",
        "shoahed"
      ],
      "category": "antisemitic",
      "definition": "Shut down, especially alt-right social media accounts by referencing the Holocaust"
    },
    {
      "root": "silent majority",
      "variations": [],
      "category": "racist",
      "definition": "Conservative white Americans who are threatened by racial minorities"
    },
    {
      "root": "single parent",
      "variations": [
        "single mom",
        "single mum",
        "single mother",
        "single parent",
        "single-parent household"
      ],
      "category": "racist",
      "definition": "Blaming Black parents (especially women) for poverty, crime, and dependence on public assistance"
    },
    {
      "root": "Skittle",
      "variations": [],
      "category": "islamophobic",
      "definition": "Muslim person"
    },
    {
      "root": "Skype",
      "variations": [],
      "category": "antisemitic",
      "definition": "Jewish person"
    },
    {
      "root": "snowflake",
      "variations": [],
      "category": "anti-liberal",
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
      "category": "anti-liberal",
      "definition": "liberals"
    },
    {
      "root": "Sonnenrad",
      "variations": [
        "black sun",
        "sunwheel"
      ],
      "category": "white supremacist",
      "definition": "White supremacist signal"
    },
    {
      "root": "soy boy",
      "variations": [
        "soy",
        "soyboi",
      ],
      "category": "anti-liberal",
      "definition": "liberal or establishment Republican men"
    },
    {
      "root": "special interest",
      "variations": [
        "global special interests"
      ],
      "category": "antisemitic",
      "definition": "Jewish interests"
    },
    {
      "root": "SPQR",
      "variations": [],
      "category": "white supremacist",
      "definition": "White supremacist signal based on phrase associated with Roman Empire"
    },
    {
      "root": "states' rights",
      "variations": [
        "states rights"
      ],
      "category": "racist",
      "definition": "Racial segregation"
    },
    {
      "root": "steroids",
      "variations": [],
      "category": "transphobic",
      "definition": "Trans people are drug abusers"
    },
    {
      "root": "strapping young buck",
      "variations": [
        "buck",
        "young buck"
      ],
      "category": "racist",
      "definition": "young Black man"
    },
    {
      "root": "string puller",
      "variations": [],
      "category": "antisemitic",
      "definition": "Jewish people who control the world"
    },
    {
      "root": "superpredator",
      "variations": [
        "super predator"
      ],
      "category": "racist",
      "definition": "Black men are threatening"
    },
    {
      "root": "surgical wound",
      "variations": [],
      "category": "transphobic",
      "definition": "Trans woman's neovagina"
    },
    {
      "root": "SWPL",
      "variations": [],
      "category": "anti-liberal",
      "definition": "Politically progressive white person"
    },
    {
      "root": "take back",
      "variations": [
        "take back our country",
        "take our country back",
        "take back the country",
        "take the country back"
      ],
      "category": "white supremacist",
      "definition": "Give white Americans back full social and political control over the country"
    },
    {
      "root": "the goyim know",
      "variations": [
        "da goyim know",
        "shut it down",
        "the goyim know"
      ],
      "category": "antisemitic",
      "definition": "Jewish people control the world"
    },
    {
      "root": "thin blue line",
      "variations": [
        "thin blue line flag"
      ],
      "category": "racist",
      "definition": "Protect white people from non-white people"
    },
    {
      "root": "Three Percenters",
      "variations": [
        "3%ers",
        "iii%ers"
      ],
      "category": "white supremacist",
      "definition": "Far-right militia movement"
    },
    {
      "root": "three strikes laws",
      "variations": [
        "three strikes",
        "three strikes policy"
      ],
      "category": "racist",
      "definition": "Mass incarceration of Black people"
    },
    {
      "root": "thug",
      "variations": [],
      "category": "racist",
      "definition": "Black men are criminals or violent"
    },
    {
      "root": "tiny minority of men",
      "variations": [
        "small minority of men"
      ],
      "category": "transphobic",
      "definition": "Trans women"
    },
    {
      "root": "tough on crime",
      "variations": [
        "tuff on crime"
      ],
      "category": "racist",
      "definition": "Mass incarceration of Black and Latinx people"
    },
    {
      "root": "Trans Identified Female",
      "variations": [
        "tif"
      ],
      "category": "transphobic",
      "definition": "Trans man"
    },
    {
      "root": "Trans Identified Male",
      "variations": [
        "tim",
      ],
      "category": "transphobic",
      "definition": "Trans woman"
    },
    {
      "root": "TRAs",
      "variations": [
        "tra",
        "trans activist",
        "trans rights activist"
      ],
      "category": "transphobic",
      "definition": "person who supports the transgender rights movement"
    },
    {
      "root": "Trilateral Commission",
      "variations": [],
      "category": "antisemitic",
      "definition": "Institution by which Jewish people control the world"
    },
    {
      "root": "triple parentheses",
      "variations": [
        "((()))",
        "(((echo)))",
        "echo",
        "triple brackets"
      ],
      "category": "antisemitic",
      "definition": "Symbol used to identify and harass Jewish people online"
    },
    {
      "root": "troon",
      "variations": [],
      "category": "transphobic",
      "definition": "Trans person"
    },
    {
      "root": "two lightning bolt emojis",
      "variations": [
        "⚡⚡"
      ],
      "category": "white supremacist",
      "definition": "White supremacist symbol representing the insignia of the Nazi SS"
    },
    {
      "root": "uterus-haver",
      "variations": [
        "vagina haver"
      ],
      "category": "transphobic",
      "definition": "Either trans women are not women because they don't have a uterus, or that trans people are trying to reduce cis women to reproductive organs"
    },
    {
      "root": "vaccine safety",
      "variations": [],
      "category": "anti-vax",
      "definition": "Opposition to vaccines"
    },
    {
      "root": "vegan cat",
      "variations": [],
      "category": "transphobic",
      "definition": "Trans children were brainwashed by their parents"
    },
    {
      "root": "Vinland",
      "variations": [],
      "category": "white supremacist",
      "definition": "White supremacist signal referencing short-lived Viking settlement in North America"
    },
    {
      "root": "Voter fraud",
      "variations": [
        "Fraudulent voting",
        "Voting fraud",
        "Fraudulent voter"
      ],
      "category": "racist",
      "definition": "Disenfranchisement of minority voters"
    },
    {
      "root": "War on Christmas",
      "variations": [],
      "category": "conservative",
      "definition": "This is a country for white Christians and only white Christians"
    },
    {
      "root": "War on crime",
      "variations": [],
      "category": "racist",
      "definition": "Mass incarceration and disenfranchisement of racial minorities, particularly Black men"
    },
    {
      "root": "War on drugs",
      "variations": [],
      "category": "racist",
      "definition": "Harsh punishments for Black people who use drugs, but not for white people"
    },
    {
      "root": "War on terror",
      "variations": [
        "war on terrorism"
      ],
      "category": "islamophobic",
      "definition": "War on Arab and Muslim people"
    },
    {
      "root": "we wuz kangz",
      "variations": [
        "we wuz kangs",
        "we wuz kings",
        "we wus kangs",
        "we wus kangz",
        "we wus kings"
      ],
      "category": "racist",
      "definition": "mocks claims of black nationalism by using mock AAVE"
    },
    {
      "root": "welfare",
      "variations": [
        "welfare reform"
      ],
      "category": "racist",
      "definition": "racial minorities receive government aid that they don't deserve"
    },
    {
      "root": "welfare cheat",
      "variations": [],
      "category": "racist",
      "definition": "Black people who are lazy and take advantage of government social aid"
    },
    {
      "root": "welfare queen",
      "variations": [],
      "category": "racist",
      "definition": "Black woman who are lazy and take advantage of government social aid"
    },
    {
      "root": "White Lives Matter",
      "variations": [
        "wlm"
      ],
      "category": "racist",
      "definition": "Black lives don't matter"
    },
    {
      "root": "Willie Horton",
      "variations": [],
      "category": "racist",
      "definition": "Convicted murderer whose imagery is used to link blackness with criminality and threat"
    },
    {
      "root": "windmill",
      "variations": [
        "windmill of friendship"
      ],
      "category": "white supremacist",
      "definition": "a swastika"
    },
    {
      "root": "womanface",
      "variations": [],
      "category": "transphobic",
      "definition": "trans people treat womanhood as a costume"
    },
    {
      "root": "womyn",
      "variations": [
        "womxn"
      ],
      "category": "transphobic",
      "definition": "Cis women"
    },
    {
      "root": "working class",
      "variations": [
        "working class communities",
        "working class families",
        "working families"
      ],
      "category": "racist",
      "definition": "white working class"
    },
    {
      "root": "XX",
      "variations": [],
      "category": "transphobic",
      "definition": "I am a transphobic cis woman"
    },
    {
      "root": "Yahoo",
      "variations": [],
      "category": "anti-latino",
      "definition": "Hispanic person"
    },
    {
      "root": "YKW",
      "variations": [
        "you know who"
      ],
      "category": "antisemitic",
      "definition": "Jewish person"
    },
    {
      "root": "YWNBAW",
      "variations": [],
      "category": "transphobic",
      "definition": "You will never be a woman",
      "source": "GoodBoy Curated"
    },
    {
      "root": "Zio",
      "variations": [],
      "category": "antisemitic",
      "definition": "Short for Zionist, but usually used as a dog whistle for 'Jewish person'",
      "source": "GoodBoy Curated"
    },
    {
      "root": "Zionist Occupation Government",
      "variations": [
        "zog"
      ],
      "category": "antisemitic",
      "definition": "Conspiracy theory claiming that Jews secretly control a country's government",
      "source": "GoodBoy Curated"
    }
  ]
};

// Export for use in modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = GOODBOY_DATA;
}
