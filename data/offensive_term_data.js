/**
 * GoodBoy Offensive Term Database
 * A curated dataset of offensive terms for detection and education
 *
 * Last generated: 2025-11-27
 */

const GOODBOY_OFFENSIVE_TERM_DATA = {
    version: "1.0.0",
    generated: new Date().toISOString(),
    uniqueTerms: 11,

    // Offensive terms with definitions
    terms: [
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
            "category": "Anti-lgbtq",
            "definition": "A homosexual male"
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
            "category": "Anti-lgbtq",
            "definition": "A homosexual male"
        },
        {
            "root": "adam and steve",
            "variations": [],
            "category": "Anti-lgbtq",
            "definition": "A homosexual couple"
        },
        {
            "root": "dyke",
            "variations": [],
            "category": "Anti-lgbtq",
            "definition": "A homosexual female"
        },
        {
            "root": "fairy",
            "variations": [
                "fairies"
            ],
            "category": "Anti-lgbtq",
            "definition": "A homosexual male"
        },
        {
            "root": "fruit",
            "variations": [
                "fruity"
            ],
            "category": "Anti-lgbtq",
            "definition": "A homosexual male"
        },
        {
            "root": "fudgepacker",
            "variations": [],
            "category": "Anti-lgbtq",
            "definition": "A homosexual male"
        },
        {
            "root": "lesbo",
            "variations": [
                "lezzer"
            ],
            "category": "Anti-lgbtq",
            "definition": "A homosexual female"
        },
        {
            "root": "poof",
            "variations": [
                "poofter",
                "bufty"
            ],
            "category": "Anti-lgbtq",
            "definition": "A homosexual male"
        },
        {
            "root": "queen",
            "variations": [],
            "category": "Anti-lgbtq",
            "definition": "A homosexual male"
        },
        {
            "root": "sissy",
            "variations": [],
            "category": "Anti-lgbtq",
            "definition": "A homosexual or feminine male"
        }
    ]
};

// Export for use in modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = GOODBOY_OFFENSIVE_TERM_DATA;
}
