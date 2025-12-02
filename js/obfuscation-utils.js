/**
 * GoodBoy ObfuscationUtils
 * Shared obfuscation detection utilities
 * Single source of truth for pattern matching logic
 */

const ObfuscationUtils = {
    // Character substitution map for obfuscation detection
    // Only includes visually similar characters and common leet speak
    charSubstitutions: {
        'a': '[aáàâäã@4ΑаᴀΔ0^-]', // 0 to catch "Khaz0r"
        'b': '[b8ß฿]',
        'c': '[cç¢(<{Сс]',
        'd': '[dđðcl]',
        'e': '[eéèêë3€Ееє0]', // 0 to catch "groom0r"
        'f': '[fƒ]',
        'g': '[g69]',
        'h': '[hɦħ#]',
        'i': '[iíìîï1!|¡ɨ]',
        'k': '[kκ]',
        'l': '[l1|£]',
        'm': '[mᴍrn]',
        'n': '[nñη]',
        'o': '[oóòôöõø0°○●Оо]',
        'p': '[pрР]',
        's': '[s$5§śš]',
        't': '[t7+†]',
        'u': '[uúùûüū]',
        'v': '[v∨]',
        'w': '[wvv]',
        'x': '[x×х]',
        'y': '[yýÿҮу]',
        'z': '[z2žż]'
    },

    /**
     * Normalize text for comparison by removing/standardizing punctuation
     * This allows us to match variations without storing them all in the database
     *
     * Handles:
     * - Unicode normalization to NFC (composed form)
     * - Hashtags: "#innercity" → "innercity"
     * - & to and: "black & white" → "black and white"
     * - All other punctuation removal (except hyphens/spaces which we handle separately)
     * - Multiple spaces → single space
     * - Trim whitespace
     */
    normalizeText(text) {
        return text
            .normalize('NFC')  // Normalize Unicode to composed form
            .toLowerCase()
            // Remove hashtag at start
            .replace(/^#/, '')
            // Replace & with "and" (with optional spaces around it)
            .replace(/\s*&\s*/g, ' and ')
            // Remove most punctuation (but keep hyphens, spaces, quotes, and emojis)
            // Preserves: word chars, whitespace, hyphens, all types of quotes, and emojis
            // Emoji ranges: 1F300-1F9FF (misc symbols), 2600-26FF (misc symbols), 2700-27BF (dingbats)
            .replace(/[^\w\s\-"""'''`\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/gu, '')
            // Normalize multiple spaces to single space
            .replace(/\s+/g, ' ')
            .trim();
    },

    /**
     * Create flexible regex pattern that handles ALL variations
     *
     * Handles:
     * - Character substitution (leet speak): "soy" → "s[s$5][oóòôöõø0]y"
     * - Obfuscation: accented chars, numbers as letters
     * - Whitespace/hyphen/underscore interchangeability: "inner city" matches "inner-city", "innercity"
     * - Hashtags: pattern will work with or without #
     * - & vs "and": "black & white" matches "black and white"
     * - All punctuation: stripped in normalization
     *
     * This is the SINGLE source of truth for pattern matching.
     */
    createFlexiblePattern(variation) {
        // Special handling for emojis - match them literally without flexible pattern
        // Emoji regex: matches common emoji ranges
        const emojiRegex = /[\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/u;

        if (emojiRegex.test(variation)) {
            // For emoji variations, escape special regex chars but don't normalize
            // This preserves the emoji for literal matching
            return variation.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        }

        // Normalize the variation
        const normalized = this.normalizeText(variation);

        // Empty string check - if normalization resulted in empty string, match literally
        // This handles pure punctuation terms like "((()))" or "–"
        if (!normalized || normalized.length === 0) {
            // Return escaped original to match literally (e.g., triple parentheses, em dash)
            return variation.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        }

        // Build pattern character by character
        let i = 0;
        const result = [];
        const chars = normalized.split('');

        while (i < chars.length) {
            const char = chars[i];
            const lower = char.toLowerCase();

            // Check if this is the word "and" (surrounded by spaces or at boundaries)
            // We want "and" to match both "and" (with obfuscation) OR &
            const prevIsSpace = i === 0 || chars[i-1] === ' ' || chars[i-1] === '-';
            const nextIsSpace = i + 3 >= chars.length || chars[i+3] === ' ' || chars[i+3] === '-';

            if (prevIsSpace && nextIsSpace && i <= chars.length - 3 &&
                chars.slice(i, i + 3).join('').toLowerCase() === 'and') {
                // Create pattern that matches both "and" (with obfuscation) OR &
                const a = this.charSubstitutions['a'] || 'a';
                const n = this.charSubstitutions['n'] || 'n';
                const d = this.charSubstitutions['d'] || 'd';
                result.push(`(?:${a}${n}${d}|&)`);
                i += 3; // Skip past 'and'
                continue;
            }

            // Spaces and hyphens become OPTIONAL flexible whitespace pattern
            if (char === ' ' || char === '-') {
                result.push('[\\s\\-_#]*');
            }
            // If we have a substitution class for this character, use it
            else if (this.charSubstitutions[lower]) {
                result.push(this.charSubstitutions[lower]);
            }
            // Otherwise, escape special regex chars and return
            else {
                result.push(char.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
            }

            i++;
        }

        return result.join('');
    },

    /**
     * Check if a term is just a punctuation/case/hyphenation variant of another
     * Used to filter redundant variations from the database
     */
    isPunctuationVariant(term1, term2) {
        const norm1 = this.normalizeText(term1);
        const norm2 = this.normalizeText(term2);

        // Further normalize by removing all hyphens and spaces for comparison
        const clean1 = norm1.replace(/[\s\-_]/g, '');
        const clean2 = norm2.replace(/[\s\-_]/g, '');

        return clean1 === clean2;
    },

    // Helper function to check if ranges overlap
    overlaps(range1, range2) {
        return !(range1.end <= range2.start || range1.start >= range2.end);
    },

    /**
     * Build variation map for a term database
     * DRY helper - used by all matchers (DogWhistleMatcher, OffensiveTermMatcher, etc.)
     */
    buildVariationMap(terms) {
        const variationMap = new Map();
        terms.forEach(term => {
            // Always add the root term
            variationMap.set(term.root.toLowerCase(), term);

            // Add all variations to the map
            if (term.variations && term.variations.length > 0) {
                term.variations.forEach(variation => {
                    variationMap.set(variation.toLowerCase(), term);
                });
            }
        });
        return variationMap;
    }
};

// Export for use in modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ObfuscationUtils;
}
