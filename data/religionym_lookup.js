/**
 * GoodBoy Religionym Lookup
 */

const RELIGION_RELIGIONYM_LOOKUP = {
    version: "1.0.0",
    generated: "2025-12-05T11:00:00.000Z",
    religions: {
        "christianity": {
            "canonical": "Christianity",
            "religionym": "Christian",
            "alt": ["Christian believer", "follower of Christ", "followers of Christ"],
            "category": "christophobic"
        },
        "catholicism": {
            "canonical": "Catholicism",
            "religionym": "Catholic",
            "alt": ["Roman Catholic", "Catholic believer"],
            "category": "christophobic"
        },
        "protestantism": {
            "canonical": "Protestantism",
            "religionym": "Protestant",
            "alt": ["Protestant Christian"],
            "category": "christophobic"
        },
        "anglicanism": {
            "canonical": "Anglicanism",
            "religionym": "Anglican",
            "alt": ["Episcopalian"],
            "category": "christophobic"
        },
        "lutheranism": {
            "canonical": "Lutheranism",
            "religionym": "Lutheran",
            "alt": [],
            "category": "christophobic"
        },
        "methodism": {
            "canonical": "Methodism",
            "religionym": "Methodist",
            "alt": [],
            "category": "christophobic"
        },
        "baptist": {
            "canonical": "Baptist",
            "religionym": "Baptist",
            "alt": [],
            "category": "christophobic"
        },
        "presbyterianism": {
            "canonical": "Presbyterianism",
            "religionym": "Presbyterian",
            "alt": [],
            "category": "christophobic"
        },
        "pentecostalism": {
            "canonical": "Pentecostalism",
            "religionym": "Pentecostal",
            "alt": [],
            "category": "christophobic"
        },
        "evangelicalism": {
            "canonical": "Evangelicalism",
            "religionym": "Evangelical",
            "alt": ["Born-again Christian"],
            "category": "christophobic"
        },
        "seventh_day_adventist": {
            "canonical": "Seventh-day Adventism",
            "religionym": "Seventh-day Adventist",
            "alt": ["Adventist"],
            "category": "christophobic"
        },
        "jehovahs_witnesses": {
            "canonical": "Jehovah's Witnesses",
            "religionym": "Jehovah's Witness",
            "alt": ["JW"],
            "category": "christophobic"
        },
        "mormonism": {
            "canonical": "The Church of Jesus Christ of Latter-day Saints",
            "religionym": "Latter-day Saint",
            "alt": ["Mormon", "LDS"],
            "category": "christophobic"
        },
        "orthodox_christianity": {
            "canonical": "Eastern Orthodox Christianity",
            "religionym": "Orthodox Christian",
            "alt": ["Greek Orthodox", "Russian Orthodox", "Orthodox"],
            "category": "christophobic"
        },
        "oriental_orthodoxy": {
            "canonical": "Oriental Orthodoxy",
            "religionym": "Oriental Orthodox",
            "alt": ["Coptic Orthodox", "Ethiopian Orthodox", "Armenian Apostolic"],
            "category": "christophobic"
        },

        "judaism": {
            "canonical": "Judaism",
            "religionym": "Jew",
            "alt": ["Jewish", "Jewish person"],
            "category": "antisemitic"
        },
        "reform_judaism": {
            "canonical": "Reform Judaism",
            "religionym": "Reform Jew",
            "alt": ["Liberal Jew"],
            "category": "antisemitic"
        },
        "orthodox_judaism": {
            "canonical": "Orthodox Judaism",
            "religionym": "Orthodox Jew",
            "alt": ["Haredi", "Hasidic", "Modern Orthodox"],
            "category": "antisemitic"
        },

        "islam": {
            "canonical": "Islam",
            "religionym": "Muslim",
            "alt": ["Muslim person", "Islamic adherent"],
            "category": "islamophobic"
        },
        "sunni_islam": {
            "canonical": "Sunni Islam",
            "religionym": "Sunni",
            "alt": [],
            "category": "islamophobic"
        },
        "shia_islam": {
            "canonical": "Shia Islam",
            "religionym": "Shia",
            "alt": ["Shi'a", "Shiite"],
            "category": "islamophobic"
        },
        "sufi": {
            "canonical": "Sufism",
            "religionym": "Sufi",
            "alt": [],
            "category": "islamophobic"
        },
        "ahmadiyya": {
            "canonical": "Ahmadiyya",
            "religionym": "Ahmadi",
            "alt": ["Ahmadi Muslim"],
            "category": "islamophobic"
        },

        "hinduism": {
            "canonical": "Hinduism",
            "religionym": "Hindu",
            "alt": [],
            "category": "hinduphobic"

        },
        "sikhism": {
            "canonical": "Sikhism",
            "religionym": "Sikh",
            "alt": [],
            "category": "sikhophobic"
        },

        "buddhism": {
            "canonical": "Buddhism",
            "religionym": "Buddhist",
            "alt": [],
            "category": "religious-minorities"
        },
        "theravada_buddhism": {
            "canonical": "Theravada Buddhism",
            "religionym": "Theravada Buddhist",
            "alt": [],
            "category": "religious-minorities"
        },
        "mahayana_buddhism": {
            "canonical": "Mahayana Buddhism",
            "religionym": "Mahayana Buddhist",
            "alt": [],
            "category": "religious-minorities"
        },
        "vajrayana_buddhism": {
            "canonical": "Vajrayana Buddhism",
            "religionym": "Vajrayana Buddhist",
            "alt": ["Tibetan Buddhist"],
            "category": "religious-minorities"
        },

        "jainism": {
            "canonical": "Jainism",
            "religionym": "Jain",
            "alt": [],
            "category": "religious-minorities"
        },
        "zoroastrianism": {
            "canonical": "Zoroastrianism",
            "religionym": "Zoroastrian",
            "alt": ["Parsi", "Parsee"],
            "category": "religious-minorities"
        },
        "bahai": {
            "canonical": "Bahá'í Faith",
            "religionym": "Bahá'í",
            "alt": ["Baha'i"],
            "category": "religious-minorities"
        },
        "taoism": {
            "canonical": "Taoism",
            "religionym": "Taoist",
            "alt": [],
            "category": "religious-minorities"
        },
        "Daoism": {
            "canonical": "Daoism",
            "religionym": "Daoist",
            "alt": [],
            "category": "religious-minorities"
        },
        "confucianism": {
            "canonical": "Confucianism",
            "religionym": "Confucian",
            "alt": [],
            "category": "religious-minorities"
        },
        "shinto": {
            "canonical": "Shinto",
            "religionym": "Shintoist",
            "alt": [],
            "category": "religious-minorities"
        },

        "paganism": {
            "canonical": "Paganism",
            "religionym": "Pagan",
            "alt": ["Neo-pagan"],
            "category": "religious-minorities"
        },
        "wicca": {
            "canonical": "Wicca",
            "religionym": "Wiccan",
            "alt": [],
            "category": "religious-minorities"
        },
        "heathenry": {
            "canonical": "Heathenry / Germanic Neopaganism",
            "religionym": "Heathen",
            "alt": ["Asatru"],
            "category": "religious-minorities"
        },
        "druidry": {
            "canonical": "Druidry",
            "religionym": "Druid",
            "alt": [],
            "category": "religious-minorities"
        },

        "rastafarianism": {
            "canonical": "Rastafarianism",
            "religionym": "Rastafarian",
            "alt": ["Rasta"],
            "category": "religious-minorities"
        },

        "university_unitarianism": {
            "canonical": "Unitarian Universalism",
            "religionym": "Unitarian Universalist",
            "alt": ["UU"],
            "category": "non-believers"
        },

        "atheism": {
            "canonical": "Atheism",
            "religionym": "Atheist",
            "alt": ["Non-believer", "Godless"],
            "category": "non-believers"
        },
        "agnosticism": {
            "canonical": "Agnosticism",
            "religionym": "Agnostic",
            "alt": [],
            "category": "non-believers"
        },
        "humanism": {
            "canonical": "Secular Humanism",
            "religionym": "Humanist",
            "alt": [],
            "category": "non-believers"
        },
        "secular": {
            "canonical": "Secular / Non-religious",
            "religionym": "Non-religious",
            "alt": ["Irreligious", "Non-believer"],
            "category": "non-believers"
        },

        "vodou": {
            "canonical": "Vodou",
            "religionym": "Vodou practitioner",
            "alt": ["Voodooist", "Houngan", "Mambo"],
            "category": "religious-minorities"
        },
        "obeah": {
            "canonical": "Obeah",
            "religionym": "Obeah practitioner",
            "alt": ["Obeahman", "Obeah woman"],
            "category": "religious-minorities"
        },
        "santeria": {
            "canonical": "Santería",
            "religionym": "Santero / Santera",
            "alt": ["Santerian"],
            "category": "religious-minorities"
        },
        "candomble": {
            "canonical": "Candomblé",
            "religionym": "Candomblecista",
            "alt": [],
            "category": "religious-minorities"
        },
        "yoruba_religions": {
            "canonical": "Yoruba Traditional Religion",
            "religionym": "Yoruba practitioner",
            "alt": [],
            "category": "religious-minorities"
        },

        "traditional_african_religions": {
            "canonical": "Traditional African Religions",
            "religionym": "Traditionalist",
            "alt": ["African Traditional Religion practitioner"],
            "category": "religious-minorities"
        },
        "native_american_spirituality": {
            "canonical": "Native American / Indigenous Spirituality",
            "religionym": "Indigenous practitioner",
            "alt": ["Native spiritual practitioner"],
            "category": "religious-minorities"
        },
        "shamanism": {
            "canonical": "Shamanism",
            "religionym": "Shaman",
            "alt": [],
            "category": "religious-minorities"
        },

        "scientology": {
            "canonical": "Scientology",
            "religionym": "Scientologist",
            "alt": [],
            "category": "religious-minorities"
        },

        "bon": {
            "canonical": "Bon",
            "religionym": "Bonpo",
            "alt": [],
            "category": "religious-minorities"
        },
        "caodaism": {
            "canonical": "Cao Dai",
            "religionym": "Caodaist",
            "alt": [],
            "category": "religious-minorities"
        },
        "tenrikyo": {
            "canonical": "Tenrikyo",
            "religionym": "Tenrikyo follower",
            "alt": [],
            "category": "religious-minorities"
        },
        "new_religious_movements": {
            "canonical": "New Religious Movements",
            "religionym": "NRM adherent",
            "alt": ["new religious movement follower"],
            "category": "religious-minorities"
        },

        "other_minor_religions": {
            "canonical": "Other Minority / Indigenous Religions",
            "religionym": "Religious minority adherent",
            "alt": ["minority religion practitioner"],
            "category": "religious-minorities"
        }
    },

    // Internal indices for fast lookup
    _indices: null,

    /**
     * Build internal indices for fast lookup
     * Maps religionyms to religions and creates flat arrays
     */
    buildIndices() {
        if (this._indices) return; // Already built

        this._indices = {
            religionymToReligion: new Map(),    // "Christian" → "christianity"
            religionVariants: new Map(),        // All variants of religion names
            allReligionyms: []                  // Flat array of all religionyms
        };

        Object.keys(this.religions).forEach(key => {
            const religion = this.religions[key];

            // Map primary religionym (singular and plural forms)
            const religionymLower = religion.religionym.toLowerCase();
            this._indices.religionymToReligion.set(religionymLower, key);
            this._indices.allReligionyms.push(religion.religionym);

            // Also index plural form (add 's' if not already ending in 's')
            // This makes the system agnostic about +s pluralization
            if (!religionymLower.endsWith('s')) {
                this._indices.religionymToReligion.set(religionymLower + 's', key);
            }

            // Map alt religionyms (singular and plural forms)
            if (religion.alt && religion.alt.length > 0) {
                religion.alt.forEach(altReligionym => {
                    const altLower = altReligionym.toLowerCase();
                    this._indices.religionymToReligion.set(altLower, key);
                    this._indices.allReligionyms.push(altReligionym);

                    // Also index plural form
                    if (!altLower.endsWith('s')) {
                        this._indices.religionymToReligion.set(altLower + 's', key);
                    }
                });
            }

            // Store canonical name as variant
            const canonicalLower = religion.canonical.toLowerCase();
            this._indices.religionVariants.set(canonicalLower, key);
        });
    },

    /**
     * Get all religionyms (primary + alt)
     * @returns {Array<string>} Array of all religionym strings
     */
    getAllReligionyms() {
        this.buildIndices();
        return this._indices.allReligionyms;
    },

    /**
     * Find religion by religionym (primary or alt)
     * @param {string} religionym - The religionym to look up
     * @returns {Object|null} Religion object or null if not found
     */
    findReligionByReligionym(religionym) {
        this.buildIndices();
        const key = this._indices.religionymToReligion.get(religionym.toLowerCase());
        if (!key) return null;

        return {
            key: key,
            canonical: this.religions[key].canonical,
            religionym: this.religions[key].religionym,
            alt: this.religions[key].alt,
            category: this.religions[key].category  // Include category for pattern matching
        };
    },

    /**
     * Get all variants (religion names + religionyms) for registry interface
     * @returns {Array<string>} Array of all variants (lowercase)
     */
    getAllVariants() {
        this.buildIndices();
        // Return both religion names and religionyms
        return [
            ...Array.from(this._indices.religionVariants.keys()),
            ...this._indices.allReligionyms.map(r => r.toLowerCase())
        ];
    },

    /**
     * Get all religionyms with hierarchy for a given religion
     * Currently no hierarchy (future-proof method)
     * @param {string} religion - The religion name
     * @returns {Array<Object>} Array of religionym objects with metadata
     */
    getAllReligionymsWithHierarchy(religion) {
        this.buildIndices();
        const key = this._indices.religionVariants.get(religion.toLowerCase());
        if (!key) {
            // Try looking up by religionym instead
            const religionData = this.findReligionByReligionym(religion);
            if (!religionData) return [];

            const result = [];
            // Add primary religionym
            result.push({
                religionym: religionData.religionym,
                religion: religionData.canonical,
                level: 0,
                isDirect: true
            });

            // Add alt religionyms
            if (religionData.alt && religionData.alt.length > 0) {
                religionData.alt.forEach(altReligionym => {
                    result.push({
                        religionym: altReligionym,
                        religion: religionData.canonical,
                        level: 0,
                        isDirect: false
                    });
                });
            }

            return result;
        }

        const religionData = this.religions[key];
        const result = [];

        // Add primary religionym
        result.push({
            religionym: religionData.religionym,
            religion: religionData.canonical,
            level: 0,
            isDirect: true
        });

        // Add alt religionyms
        if (religionData.alt && religionData.alt.length > 0) {
            religionData.alt.forEach(altReligionym => {
                result.push({
                    religionym: altReligionym,
                    religion: religionData.canonical,
                    level: 0,
                    isDirect: false
                });
            });
        }

        return result;
    }
};

// Node.js export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = RELIGION_RELIGIONYM_LOOKUP;
}