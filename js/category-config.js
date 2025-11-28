/**
 * GoodBoy Category Configuration
 *
 * Centralized category hierarchy for dog whistles and offensive terms.
 * Used by both the webapp and dev-tools.
 *
 * Single source of truth for all category-related logic.
 */

const CATEGORY_HIERARCHY = {
    race: {
        label: "Race & Ethnicity",
        lightColor: "#ffcdd2",      // Red - for racist content
        hoverColor: "#ef9a9a",
        darkColor: "#e57373",
        sub: {
            "racist": { label: "Racist", darkColor: "#e57373" },
            "white supremacist": { label: "White Supremacist", darkColor: "#ef5350" },
            "anti-latino": { label: "Anti-Latino", darkColor: "#f44336" },
            "antisemitic": { label: "Antisemitic", darkColor: "#d32f2f" },
            "anti-asian": { label: "Anti-Asian", darkColor: "#ba1e1e" },
            "xenophobic": { label: "Xenophobic", darkColor: "#a71e1e" }
        }
    },

    religion: {
        label: "Religion",
        lightColor: "#e1bee7",      // Purple - for religious intolerance
        hoverColor: "#ce93d8",
        darkColor: "#ba68c8",
        sub: {
            "islamophobic": { label: "Islamophobic", darkColor: "#ab47bc" }
        }
    },

    gender: {
        label: "Gender & Sexuality",
        lightColor: "#f8bbd0",      // Pink - for gender/sexuality based
        hoverColor: "#f48fb1",
        darkColor: "#f06292",
        sub: {
            "transphobic": { label: "Transphobic", darkColor: "#ec407a" },
            "homophobic": { label: "Homophobic", darkColor: "#e91e63" },
            "anti-lgbtq": { label: "Anti-LGBTQ", darkColor: "#d81b60" },
            "misogynistic": { label: "Misogynistic", darkColor: "#c2185b" },
            "misandristic": { label: "Misandrinistic", darkColor: "#861643" },
            "prostitution": { label: "Prostitution", darkColor: "#880e4f" }
        }
    },

    disability: {
        label: "Ableist",
        lightColor: "#b0bec5",      // Blue-grey - for ableist
        hoverColor: "#90a4ae",
        darkColor: "#78909c",
        sub: {
            "disability-cognitive": { label: "Cognitive Disability", darkColor: "#607d8b" },
            "disability-physical": { label: "Physical Disability", darkColor: "#507689" }
        }
    },

    ideology: {
        label: "Ideological",
        lightColor: "#bbdefb",      // Blue - for ideological
        hoverColor: "#90caf9",
        darkColor: "#64b5f6",
        sub: {
            "conservative": { label: "Conservative", darkColor: "#5c6bc0" },
            "liberal": { label: "Liberal", darkColor: "#3f51b5" },
            "anti-liberal": { label: "Anti-Liberal", darkColor: "#3949ab" }
        }
    },

    geography: {
        label: "Populist",
        lightColor: "#c5e1a5",      // Green - for populist
        hoverColor: "#aed581",
        darkColor: "#9ccc65",
        sub: {
            "nationalist": { label: "Nationalist", darkColor: "#8bc34a" },
            "localist": { label: "Localist", darkColor: "#7cb342" }
        }
    },

    antiIntellectualist: {
        label: "Anti-Intellectualist",
        lightColor: "#ffe0b2",      // Orange - for anti-intellectualist
        hoverColor: "#ffcc80",
        darkColor: "#ffb74d",
        sub: {
            "anti-gmo": { label: "Anti-GMO", darkColor: "#ffb74d" },
            "anti-vax": { label: "Anti-Vax", darkColor: "#ffa726" },
            "climate change denier": { label: "Climate Change Denier", darkColor: "#ff9800" }
        }
    },

    fundamentalist: {
        label: "Fundamentalist",
        lightColor: "#d7ccc8",      // Brown - for fundamentalist
        hoverColor: "#bcaaa4",
        darkColor: "#a1887f",
        sub: {
            "religious": { label: "Religious", darkColor: "#a1887f" }
        }
    }
};

/**
 * Get the full category hierarchy
 * @returns {Object} The complete CATEGORY_HIERARCHY object
 */
function getCategoryHierarchy() {
    return CATEGORY_HIERARCHY;
}

/**
 * Get all subcategories as a flat list with parent info
 * @returns {Array} Array of subcategory objects with mainCategory, mainLabel, etc.
 */
function getAllSubcategories() {
    const subcategories = [];
    Object.keys(CATEGORY_HIERARCHY).forEach(mainKey => {
        const mainCat = CATEGORY_HIERARCHY[mainKey];
        Object.keys(mainCat.sub).forEach(subKey => {
            subcategories.push({
                key: subKey,
                label: mainCat.sub[subKey].label,
                mainCategory: mainKey,
                mainLabel: mainCat.label,
                darkColor: mainCat.sub[subKey].darkColor
            });
        });
    });
    return subcategories;
}

/**
 * Get main category key for a given subcategory
 * @param {string} subcategory - The subcategory key (e.g., "racist", "antisemitic")
 * @returns {string|null} The main category key or null if not found
 */
function getMainCategoryForSub(subcategory) {
    const normalized = subcategory?.toLowerCase();
    for (const [mainKey, mainCat] of Object.entries(CATEGORY_HIERARCHY)) {
        if (mainCat.sub[normalized]) {
            return mainKey;
        }
    }
    return null;
}

/**
 * Get color values for a subcategory
 * @param {string} subcategory - The subcategory key
 * @returns {Object|null} Object with light, hover, dark colors or null if not found
 */
function getCategoryColors(subcategory) {
    const mainKey = getMainCategoryForSub(subcategory);
    if (!mainKey) return null;

    const mainCat = CATEGORY_HIERARCHY[mainKey];
    const subCat = mainCat.sub[subcategory.toLowerCase()];

    return {
        light: mainCat.lightColor,
        hover: mainCat.hoverColor,
        dark: subCat.darkColor
    };
}

/**
 * Add a new subcategory to an existing main category
 * @param {string} mainKey - The main category key (e.g., "race", "gender")
 * @param {string} subKey - The subcategory key (e.g., "anti-roma")
 * @param {string} label - The display label (e.g., "Anti-Roma")
 * @param {string|null} darkColor - Optional dark color hex code
 */
function addNewSubcategory(mainKey, subKey, label, darkColor = null) {
    if (!CATEGORY_HIERARCHY[mainKey]) {
        throw new Error(`Main category '${mainKey}' does not exist`);
    }

    // Use main category's light color if no dark color provided
    const color = darkColor || CATEGORY_HIERARCHY[mainKey].lightColor;

    CATEGORY_HIERARCHY[mainKey].sub[subKey] = {
        label: label,
        darkColor: color
    };
}

/**
 * Add a new main category
 * @param {string} key - The main category key (e.g., "anti-corporate")
 * @param {string} label - The display label (e.g., "Anti-Corporate")
 * @param {string} lightColor - Light color hex code (defaults to #888888)
 * @param {string} hoverColor - Hover color hex code (defaults to #888888)
 * @param {string} darkColor - Dark color hex code (defaults to #888888)
 */
function addNewMainCategory(key, label, lightColor = '#888888', hoverColor = '#888888', darkColor = '#888888') {
    CATEGORY_HIERARCHY[key] = {
        label: label,
        lightColor: lightColor,
        hoverColor: hoverColor,
        darkColor: darkColor,
        sub: {}
    };
}

// Export for Node.js (dev-tools)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        CATEGORY_HIERARCHY,
        getCategoryHierarchy,
        getAllSubcategories,
        getMainCategoryForSub,
        getCategoryColors,
        addNewSubcategory,
        addNewMainCategory
    };
}
