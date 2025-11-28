/**
 * GoodBoy Offensive Term Database
 * A curated dataset of offensive terms for detection and education
 */

const GOODBOY_OFFENSIVE_TERM_DATA = {
    version: "1.0.0",
    generated: new Date().toISOString(),
    uniqueTerms: 12,

    // Offensive terms with definitions
    terms: [
        {
            "root": "Nigger",
            "variations": [
                "Nigga",
                "Negro",
                "Nig Nog",
                "Nignog",
                "Niglet",
                "Nigress",
                "Nigette"
            ],
            "category": "racist",
            "definition": "A black person",
            "source": "GoodBoy Curated"
        },

        {
            "root": "faggot",
            "variations": [
                "fag",
                "fagot",
                "faget",
                "faggy",
                "fagala",
                "feygele",
                "faygele"

            ],
            "category": "anti-lgbtq",
            "definition": "A homosexual or feminine male",
            "source": "GoodBoy Curated"
        },
        {
            "root": "batty boy",
            "variations": [
                "batty bwoy",
                "batty man",
                "batiman",
                "chi chi boy",
                "chi chi bwoy",
                "chi chi man"
            ],
            "category": "anti-lgbtq",
            "definition": "A homosexual male",
            "source": "GoodBoy Curated"
        },
        {
            "root": "adam and steve",
            "variations": [],
            "category": "anti-lgbtq",
            "definition": "A homosexual couple",
            "source": "GoodBoy Curated"
        },
        {
            "root": "dyke",
            "variations": [],
            "category": "anti-lgbtq",
            "definition": "A homosexual female",
            "source": "GoodBoy Curated"
        },
        {
            "root": "fairy",
            "variations": [
                "fairies"
            ],
            "category": "anti-lgbtq",
            "definition": "A homosexual male",
            "source": "GoodBoy Curated"
        },
        {
            "root": "fruit",
            "variations": [
                "fruity"
            ],
            "category": "anti-lgbtq",
            "definition": "A homosexual male",
            "source": "GoodBoy Curated"
        },
        {
            "root": "fudgepacker",
            "variations": [],
            "category": "anti-lgbtq",
            "definition": "A homosexual male",
            "source": "GoodBoy Curated"
        },
        {
            "root": "lesbo",
            "variations": [
                "lezzer"
            ],
            "category": "anti-lgbtq",
            "definition": "A homosexual female",
            "source": "GoodBoy Curated"
        },
        {
            "root": "poof",
            "variations": [
                "poofter",
                "bufty"
            ],
            "category": "anti-lgbtq",
            "definition": "A homosexual male",
            "source": "GoodBoy Curated"
        },
        {
            "root": "queen",
            "variations": [],
            "category": "anti-lgbtq",
            "definition": "A homosexual male",
            "source": "GoodBoy Curated"
        },
        {
            "root": "sissy",
            "variations": [],
            "category": "anti-lgbtq",
            "definition": "A homosexual or feminine male",
            "source": "GoodBoy Curated"
        }
    ]
};

// Export for use in modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = GOODBOY_OFFENSIVE_TERM_DATA;
}
