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
            "alt": ["Christian believer", "follower of Christ", "followers of Christ"]
        },
        "catholicism": {
            "canonical": "Catholicism",
            "religionym": "Catholic",
            "alt": ["Roman Catholic", "Catholic believer"]
        },
        "protestantism": {
            "canonical": "Protestantism",
            "religionym": "Protestant",
            "alt": ["Protestant Christian"]
        },
        "anglicanism": {
            "canonical": "Anglicanism",
            "religionym": "Anglican",
            "alt": ["Episcopalian"]
        },
        "lutheranism": {
            "canonical": "Lutheranism",
            "religionym": "Lutheran",
            "alt": []
        },
        "methodism": {
            "canonical": "Methodism",
            "religionym": "Methodist",
            "alt": []
        },
        "baptist": {
            "canonical": "Baptist",
            "religionym": "Baptist",
            "alt": []
        },
        "presbyterianism": {
            "canonical": "Presbyterianism",
            "religionym": "Presbyterian",
            "alt": []
        },
        "pentecostalism": {
            "canonical": "Pentecostalism",
            "religionym": "Pentecostal",
            "alt": []
        },
        "evangelicalism": {
            "canonical": "Evangelicalism",
            "religionym": "Evangelical",
            "alt": ["Born-again Christian"]
        },
        "seventh_day_adventist": {
            "canonical": "Seventh-day Adventism",
            "religionym": "Seventh-day Adventist",
            "alt": ["Adventist"]
        },
        "jehovahs_witnesses": {
            "canonical": "Jehovah's Witnesses",
            "religionym": "Jehovah's Witness",
            "alt": ["JW"]
        },
        "mormonism": {
            "canonical": "The Church of Jesus Christ of Latter-day Saints",
            "religionym": "Latter-day Saint",
            "alt": ["Mormon", "LDS"]
        },
        "orthodox_christianity": {
            "canonical": "Eastern Orthodox Christianity",
            "religionym": "Orthodox Christian",
            "alt": ["Greek Orthodox", "Russian Orthodox", "Orthodox"]
        },
        "oriental_orthodoxy": {
            "canonical": "Oriental Orthodoxy",
            "religionym": "Oriental Orthodox",
            "alt": ["Coptic Orthodox", "Ethiopian Orthodox", "Armenian Apostolic"]
        },

        "judaism": {
            "canonical": "Judaism",
            "religionym": "Jew",
            "alt": ["Jewish", "Jewish person"]
        },
        "reform_judaism": {
            "canonical": "Reform Judaism",
            "religionym": "Reform Jew",
            "alt": ["Liberal Jew"]
        },
        "orthodox_judaism": {
            "canonical": "Orthodox Judaism",
            "religionym": "Orthodox Jew",
            "alt": ["Haredi", "Hasidic", "Modern Orthodox"]
        },

        "islam": {
            "canonical": "Islam",
            "religionym": "Muslim",
            "alt": ["Muslim person", "Islamic adherent"]
        },
        "sunni_islam": {
            "canonical": "Sunni Islam",
            "religionym": "Sunni",
            "alt": []
        },
        "shia_islam": {
            "canonical": "Shia Islam",
            "religionym": "Shia",
            "alt": ["Shi'a", "Shiite"]
        },
        "sufi": {
            "canonical": "Sufism",
            "religionym": "Sufi",
            "alt": []
        },
        "ahmadiyya": {
            "canonical": "Ahmadiyya",
            "religionym": "Ahmadi",
            "alt": ["Ahmadi Muslim"]
        },

        "hinduism": {
            "canonical": "Hinduism",
            "religionym": "Hindu",
            "alt": []
        },
        "sikhism": {
            "canonical": "Sikhism",
            "religionym": "Sikh",
            "alt": []
        },

        "buddhism": {
            "canonical": "Buddhism",
            "religionym": "Buddhist",
            "alt": []
        },
        "theravada_buddhism": {
            "canonical": "Theravada Buddhism",
            "religionym": "Theravada Buddhist",
            "alt": []
        },
        "mahayana_buddhism": {
            "canonical": "Mahayana Buddhism",
            "religionym": "Mahayana Buddhist",
            "alt": []
        },
        "vajrayana_buddhism": {
            "canonical": "Vajrayana Buddhism",
            "religionym": "Vajrayana Buddhist",
            "alt": ["Tibetan Buddhist"]
        },

        "jainism": {
            "canonical": "Jainism",
            "religionym": "Jain",
            "alt": []
        },
        "zoroastrianism": {
            "canonical": "Zoroastrianism",
            "religionym": "Zoroastrian",
            "alt": ["Parsi", "Parsee"]
        },
        "bahai": {
            "canonical": "Bahá'í Faith",
            "religionym": "Bahá'í",
            "alt": ["Baha'i"]
        },
        "taoism": {
            "canonical": "Taoism",
            "religionym": "Taoist",
            "alt": []
        },
        "Daoism": {
            "canonical": "Daoism",
            "religionym": "Daoist",
            "alt": []
        },
        "confucianism": {
            "canonical": "Confucianism",
            "religionym": "Confucian",
            "alt": []
        },
        "shinto": {
            "canonical": "Shinto",
            "religionym": "Shintoist",
            "alt": []
        },

        "paganism": {
            "canonical": "Paganism",
            "religionym": "Pagan",
            "alt": ["Neo-pagan"]
        },
        "wicca": {
            "canonical": "Wicca",
            "religionym": "Wiccan",
            "alt": []
        },
        "heathenry": {
            "canonical": "Heathenry / Germanic Neopaganism",
            "religionym": "Heathen",
            "alt": ["Asatru"]
        },
        "druidry": {
            "canonical": "Druidry",
            "religionym": "Druid",
            "alt": []
        },

        "rastafarianism": {
            "canonical": "Rastafarianism",
            "religionym": "Rastafarian",
            "alt": ["Rasta"]
        },

        "university_unitarianism": {
            "canonical": "Unitarian Universalism",
            "religionym": "Unitarian Universalist",
            "alt": ["UU"]
        },

        "atheism": {
            "canonical": "Atheism",
            "religionym": "Atheist",
            "alt": ["Non-believer", "Godless"]
        },
        "agnosticism": {
            "canonical": "Agnosticism",
            "religionym": "Agnostic",
            "alt": []
        },
        "humanism": {
            "canonical": "Secular Humanism",
            "religionym": "Humanist",
            "alt": []
        },
        "secular": {
            "canonical": "Secular / Non-religious",
            "religionym": "Non-religious",
            "alt": ["Irreligious", "Non-believer"]
        },

        "vodou": {
            "canonical": "Vodou",
            "religionym": "Vodou practitioner",
            "alt": ["Voodooist", "Houngan", "Mambo"]
        },
        "obeah": {
            "canonical": "Obeah",
            "religionym": "Obeah practitioner",
            "alt": ["Obeahman", "Obeah woman"]
        },
        "santeria": {
            "canonical": "Santería",
            "religionym": "Santero / Santera",
            "alt": ["Santerian"]
        },
        "candomble": {
            "canonical": "Candomblé",
            "religionym": "Candomblecista",
            "alt": []
        },
        "yoruba_religions": {
            "canonical": "Yoruba Traditional Religion",
            "religionym": "Yoruba practitioner",
            "alt": []
        },

        "traditional_african_religions": {
            "canonical": "Traditional African Religions",
            "religionym": "Traditionalist",
            "alt": ["African Traditional Religion practitioner"]
        },
        "native_american_spirituality": {
            "canonical": "Native American / Indigenous Spirituality",
            "religionym": "Indigenous practitioner",
            "alt": ["Native spiritual practitioner"]
        },
        "shamanism": {
            "canonical": "Shamanism",
            "religionym": "Shaman",
            "alt": []
        },

        "scientology": {
            "canonical": "Scientology",
            "religionym": "Scientologist",
            "alt": []
        },

        "bon": {
            "canonical": "Bon",
            "religionym": "Bonpo",
            "alt": []
        },
        "caodaism": {
            "canonical": "Cao Dai",
            "religionym": "Caodaist",
            "alt": []
        },
        "tenrikyo": {
            "canonical": "Tenrikyo",
            "religionym": "Tenrikyo follower",
            "alt": []
        },

        "cao_dai": {
            "canonical": "Cao Dai",
            "religionym": "Caodaist",
            "alt": []
        },

        "new_religious_movements": {
            "canonical": "New Religious Movements",
            "religionym": "NRM adherent",
            "alt": ["new religious movement follower"]
        },

        "other_minor_religions": {
            "canonical": "Other Minority / Indigenous Religions",
            "religionym": "Religious minority adherent",
            "alt": ["minority religion practitioner"]
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

            // Map primary religionym
            const religionymLower = religion.religionym.toLowerCase();
            this._indices.religionymToReligion.set(religionymLower, key);
            this._indices.allReligionyms.push(religion.religionym);

            // Map alt religionyms
            if (religion.alt && religion.alt.length > 0) {
                religion.alt.forEach(altReligionym => {
                    const altLower = altReligionym.toLowerCase();
                    this._indices.religionymToReligion.set(altLower, key);
                    this._indices.allReligionyms.push(altReligionym);
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
            alt: this.religions[key].alt
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