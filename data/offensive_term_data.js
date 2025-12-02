/**
 * GoodBoy Offensive Term Database
 * A curated dataset of offensive terms for detection and education
 */

const GOODBOY_OFFENSIVE_TERM_DATA = {
    version: "1.0.0",
    generated: new Date().toISOString(),
    uniqueTerms: 15,

    // Offensive terms with definitions
    terms: [
        {
            "root": "Prostitute",
            "variations": [
                "Prozzy",
                "Prozzie",
                "Prossy",
                "Prossie",
                "Hooker",
                "Lady of the night",
                "Call girl",
                "Street walker",
                "Joytoy",
                "Lot lizard",
                "Working girl",
                "Whore",
                "Harlot",
                "Sex worker"
            ],
            "category": "prostitution",
            "definition": "A woman who sells or exchanges sex",
            "source": "goodboy"
        },

        {
            "root": "Slut",
            "variations": [
                "Bop",
                "Slutty",
                "Jezebel",
                "Tart",
                "Trollop",
                "Hussy",
                "Tramp",
                "Skank",
                "Thot",
                "Sluzza"
            ],
            "category": "misogynistic",
            "definition": "A person, usually a woman, who is considered sexually promiscuous",
            "source": "wsp"
        },
        {
            "root": "Nigger",
            "variations": [
                "Nigga",
                "Nibba",
                "Negro",
                "Nig Nog",
                "Niglet",
                "Nigress",
                "Nigette"
            ],
            "category": "racist",
            "definition": "A black person",
            "source": "goodboy"
        },
        {
            "root": "Faggot",
            "variations": [
                "Fag",
                "Fagot",
                "Faget",
                "Faggy",
                "Fagala",
                "Feygele",
                "Faygele"

            ],
            "category": "anti-lgbtq",
            "definition": "A homosexual or feminine male",
            "source": "goodboy"
        },
        {
            "root": "Batty boy",
            "variations": [
                "Batty bwoy",
                "Batty man",
                "Batiman",
                "Chi chi boy",
                "Chi chi bwoy",
                "Chi chi man"
            ],
            "category": "anti-lgbtq",
            "definition": "A homosexual male",
            "source": "goodboy"
        },
        {
            "root": "Adam and Steve",
            "variations": [],
            "category": "anti-lgbtq",
            "definition": "A homosexual couple",
            "source": "goodboy"
        },
        {
            "root": "dyke",
            "variations": [],
            "category": "anti-lgbtq",
            "definition": "A homosexual female",
            "source": "goodboy"
        },
        {
            "root": "Fairy",
            "variations": [
                "Fairies"
            ],
            "category": "anti-lgbtq",
            "definition": "A homosexual male",
            "source": "goodboy"
        },
        {
            "root": "Fruit",
            "variations": [
                "Fruity"
            ],
            "category": "anti-lgbtq",
            "definition": "A homosexual male",
            "source": "goodboy"
        },
        {
            "root": "Fudgepacker",
            "variations": [],
            "category": "anti-lgbtq",
            "definition": "A homosexual male",
            "source": "goodboy"
        },
        {
            "root": "Lesbo",
            "variations": [
                "Lezzer"
            ],
            "category": "anti-lgbtq",
            "definition": "A homosexual female",
            "source": "goodboy"
        },
        {
            "root": "Poof",
            "variations": [
                "Poofter",
                "Bufty"
            ],
            "category": "anti-lgbtq",
            "definition": "A homosexual male",
            "source": "goodboy"
        },
        {
            "root": "Queen",
            "variations": [],
            "category": "anti-lgbtq",
            "definition": "A homosexual male",
            "source": "goodboy"
        },
        {
            "root": "Sissy",
            "variations": [],
            "category": "anti-lgbtq",
            "definition": "A homosexual or feminine male",
            "source": "goodboy"
        }
    ]
};

// Export for use in modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = GOODBOY_OFFENSIVE_TERM_DATA;
}
