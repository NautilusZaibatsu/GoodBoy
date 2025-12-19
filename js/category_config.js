/**
 * GoodBoy Category Configuration
 *
 * Centralized category hierarchy for coded and harmful terms.
 * Used by both the webapp and dev-tools.
 *
 * Single source of truth for all category-related logic.
 */

const CATEGORY_HIERARCHY = {
    "race": {
        "label": "Race & Ethnicity",
        "lightColor": "#f79b9b",
        "hoverColor": "#f18585",
        "darkColor": "#e75959",
        "sub": {
            "racist": {
                "label": "Racist",
                "darkColor": "#f44336"
            },
            "white-supremacist": {
                "label": "White Supremacist",
                "darkColor": "#ef5350"
            },
            "xenophobic": {
                "label": "Xenophobic",
                "darkColor": "#a71e1e"
            },
            "antisemitic": {
                "label": "Antisemitic",
                "darkColor": "#c22a2a"
            }
        }
    },
    "religion": {
        "label": "Religion",
        "lightColor": "#e1bee7",
        "hoverColor": "#ce93d8",
        "darkColor": "#ba68c8",
        "sub": {
            "islamophobic": {
                "label": "Islamophobic",
                "darkColor": "#ab47bc"
            },
            "sectarian": {
                "label": "Sectarian",
                "darkColor": "#903aa0"
            },
            "hinduphobic": {
                "label": "Hinduphobic",
                "darkColor": "#d385e0"
            },
            "christophobic": {
                "label": "Christophobic",
                "darkColor": "#ae80b6"
            },
            "sikhophobic": {
                "label": "Sikhophobic",
                "darkColor": "#b274bd"
            },
            "religious-minorities": {
                "label": "Religious Minorities",
                "darkColor": "#b36dc0"
            },
            "non-believers": {
                "label": "Non-Believers",
                "darkColor": "#ae63bc"
            }
        }
    },
    "gender": {
        "label": "Gender, Sex & Sexuality",
        "lightColor": "#ffe000",
        "hoverColor": "#ffcc00",
        "darkColor": "#ffb700",
        "sub": {
            "transphobic": {
                "label": "Transphobic",
                "darkColor": "#e1a305"
            },
            "homophobic": {
                "label": "Homophobic",
                "darkColor": "#d49b0b"
            },
            "anti-lgbtq": {
                "label": "Anti-LGBTQ",
                "darkColor": "#c48e07"
            },
            "misogynistic": {
                "label": "Misogynistic",
                "darkColor": "#cd9710"
            },
            "misandristic": {
                "label": "Misandrinistic",
                "darkColor": "#d8a423"
            },
            "prostitution": {
                "label": "Prostitution Stigma",
                "darkColor": "#e8ab11"
            },
            "sexual-objectification": {
                "label": "Sexual Objectification",
                "darkColor": "#c7920d"
            },
            "incel": {
                "label": "Incel",
                "darkColor": "#a87b0a"
            }
        }
    },
    "disability": {
        "label": "Ableist",
        "lightColor": "#b0bec5",
        "hoverColor": "#90a4ae",
        "darkColor": "#78909c",
        "sub": {
            "disability": {
                "label": "Cognitive Disability",
                "darkColor": "#607d8b"
            },
            "mental-health": {
                "label": "Mental Health Condition",
                "darkColor": "#6fa3bd"
            },
            "ageist": {
                "label": "Ageist",
                "darkColor": "#5b8397"
            }
        }
    },
    "ideology": {
        "label": "Ideological",
        "lightColor": "#bbdefb",
        "hoverColor": "#90caf9",
        "darkColor": "#64b5f6",
        "sub": {
            "conservative": {
                "label": "Conservative",
                "darkColor": "#5c6bc0"
            },
            "anti-conservative": {
                "label": "Anti-Conservative",
                "darkColor": "#4a58a4",
            },
            "liberal": {
                "label": "Liberal",
                "darkColor": "#3f51b5"
            },
            "anti-liberal": {
                "label": "Anti-Liberal",
                "darkColor": "#4856ad"
            },
            "fascist": {
                "label": "Fascist",
                "darkColor": "#2b367f"
            },
            "alt-right": {
                "label": "Alt-right",
                "darkColor": "#333e87"
            }
        }
    },
    "populism": {
        "label": "Populist",
        "lightColor": "#c5e1a5",
        "hoverColor": "#aed581",
        "darkColor": "#9ccc65",
        "sub": {
            "nationalist": {
                "label": "Nationalist",
                "darkColor": "#8bc34a"
            },
            "localist": {
                "label": "Localist",
                "darkColor": "#7cb342"
            },
            "regionalist": {
                "label": "Regionalist",
                "darkColor": "#6a9a36"
            },
            "religious-populism": {
                "label": "Religious Populism",
                "darkColor": "#649431"
            },
            "welfare-chauvinism": {
                "label": "Welfare Chauvinism",
                "darkColor": "#749253"
            }

        }
    },
    "antiIntellectualist": {
        "label": "Anti-Intellectualist",
        "lightColor": "#f8d9bb",
        "hoverColor": "#f3b577",
        "darkColor": "#f1963a",
        "sub": {
            "pseudoscience": {
                "label": "Pseudoscience",
                "darkColor": "#d27e29"
            },
            "anti-science": {
                "label": "Anti-Science",
                "darkColor": "#be6c1a"
            },
            "climate-change-denial": {
                "label": "Climate Change Denial",
                "darkColor": "#e9821b"
            },
            "conspiracy": {
                "label": "Conspiracy",
                "darkColor": "#d88028"
            }
        }
    },
    "rhetoricalManipulation": {
        "label": "Rhetorical Manipulation",
        "lightColor": "#9f91c9",
        "hoverColor": "#a48ee5",
        "darkColor": "#7d68ba",
        "sub": {
            "bad-faith": {
                "label": "Bad Faith",
                "darkColor": "#755bc2"
            },
            "deflection": {
                "label": "Deflection/Performative",
                "darkColor": "#5b4795"
            },
            "personal-responsibility": {
                "label": "Personal Responsibility",
                "darkColor": "#5d43ac"
            },
            "dehumanization": {
                "label": "Dehumanization",
                "darkColor": "#7660b8"
            },
            "emotional-dismissal": {
                "label": "Emotional Dismissal",
                "darkColor": "#987cec"
            }
        }
    },
    "algospeak": {
        "label": "Algospeak",
        "lightColor": "#91c9b7",
        "hoverColor": "#75b9a4",
        "darkColor": "#3aa885",
        "sub": {
            "sexual-content": {
                "label": "Sexual Content",
                "darkColor": "#2e9171"
            }, "self-harm": {
                "label": "Self-Harm",
                "darkColor": "#28896a"
            }, "violence": {
                "label": "Violence",
                "darkColor": "#309474"
            }, "drugs": {
                "label": "Drugs",
                "darkColor": "#3e9479"
            }, "illegality": {
                "label": "Illegality",
                "darkColor": "#4aaa8c"
            }, "paedophilia": {
                "label": "Paedophilia",
                "darkColor": "#3cad89"
            }, "identity": {
                "label": "Identity",
                "darkColor": "#2c9272"
            }, "other": {
                "label": "Other",
                "darkColor": "#308566"
            }
        }
    }
};

// Used for deciding what to do with terms that have place/demonyms/religionyms
const CATEGORY_MODES = {
    UNIQUE: "unique",                   // NO substitutions - only matches exact place/demonym/religionym
    FIXED: "fixed",                     // YES substitutions - category NEVER changes (always use original)
    RELIGIONYM_ONLY: "religionym-only", // YES substitutions - use religionym's category property when substituted
    DYNAMIC: "dynamic"                  // YES substitutions - place type determines category, religionyms get "religious-populism"
};

/**
 * Check if a category mode allows pattern substitution
 * @param {string} categoryMode - The category mode
 * @returns {boolean} True if mode allows substitutions
 */
function allowsPatternSubstitution(categoryMode) {
    return categoryMode === CATEGORY_MODES.FIXED ||
        categoryMode === CATEGORY_MODES.RELIGIONYM_ONLY ||
        categoryMode === CATEGORY_MODES.DYNAMIC;
}

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

/**
 * Get subcategory info (label, colors, main category)
 * @param {string} subcategory - The subcategory key
 * @returns {Object|null} Object with label, darkColor, mainLabel, mainKey or null if not found
 */
function getSubcategoryInfo(subcategory) {
    const mainKey = getMainCategoryForSub(subcategory);
    if (!mainKey) return null;

    const mainCat = CATEGORY_HIERARCHY[mainKey];
    const subInfo = mainCat.sub[subcategory.toLowerCase()];

    return subInfo ? {
        label: subInfo.label,
        darkColor: subInfo.darkColor,
        mainLabel: mainCat.label,
        mainKey: mainKey
    } : null;
}

/**
 * Get the dark color for a subcategory (used in tooltips)
 * @param {string} subcategory - The subcategory key
 * @returns {string} Hex color code
 */
function getCategoryColor(subcategory) {
    const info = getSubcategoryInfo(subcategory);
    return info ? info.darkColor : '#888888';
}

/**
 * Get the CSS class for a subcategory (based on main category)
 * @param {string} subcategory - The subcategory key
 * @returns {string} CSS class name
 */
function getCategoryClass(subcategory) {
    const mainKey = getMainCategoryForSub(subcategory);
    return mainKey ? mainKey.toLowerCase().replace(/\s+/g, '-') : 'unknown';
}

/**
 * Get the main category label for a subcategory
 * @param {string} subcategory - The subcategory key
 * @returns {string} Main category label
 */
function getCategoryLabel(subcategory) {
    const info = getSubcategoryInfo(subcategory);
    return info ? info.mainLabel : subcategory;
}

/**
 * Get the subcategory label (just the subcategory, not "Main : Sub")
 * @param {string} subcategory - The subcategory key
 * @returns {string} Subcategory label
 */
function getSubcategoryLabel(subcategory) {
    const info = getSubcategoryInfo(subcategory);
    return info ? info.label : subcategory;
}

/**
 * Inject dynamic CSS for category colors
 * Generates CSS rules for flagging terms with category-specific colors
 */
function injectCategoryStyles() {
    const styleEl = document.createElement('style');
    let css = '';

    // Generate CSS for each MAIN category
    Object.keys(CATEGORY_HIERARCHY).forEach(mainKey => {
        const mainCat = CATEGORY_HIERARCHY[mainKey];
        const className = mainKey.toLowerCase().replace(/\s+/g, '-');

        css += `
            .flagged.codedTerm.${className} {
                background-color: ${mainCat.lightColor};
            }
            .flagged.codedTerm.${className}:hover {
                background-color: ${mainCat.hoverColor};
            }
            .flagged.harmfulTerm.${className} {
                border-bottom: var(--flagged-underline) solid ${mainCat.lightColor};
                text-decoration: none;
            }
            .flagged.harmfulTerm.${className}:hover {
                border-bottom-color: ${mainCat.hoverColor};
            }
        `;
    });

    // Unflagged state styles (applies to both coded and harmful terms)
    css += `
        .flagged.codedTerm[data-unflagged="true"] {
            background-color: var(--unflagged-color) !important;
        }
        .flagged.codedTerm[data-unflagged="true"]:hover {
            background-color: var(--unflagged-hover) !important;
        }
        .flagged.harmfulTerm[data-unflagged="true"] {
            border-bottom-color: var(--unflagged-color) !important;
        }
        .flagged.harmfulTerm[data-unflagged="true"]:hover {
            border-bottom-color: var(--unflagged-hover) !important;
        }
    `;

    styleEl.textContent = css;
    document.head.appendChild(styleEl);
}

// Export for Node.js (dev-tools)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        CATEGORY_HIERARCHY,
        CATEGORY_MODES,
        getCategoryHierarchy,
        getAllSubcategories,
        getMainCategoryForSub,
        getCategoryColors,
        addNewSubcategory,
        addNewMainCategory,
        getSubcategoryInfo,
        getCategoryColor,
        getCategoryClass,
        getCategoryLabel,
        getSubcategoryLabel,
        injectCategoryStyles,
        allowsPatternSubstitution
    };
}
