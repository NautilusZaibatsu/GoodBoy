/**
 * GoodBoy ObfuscationUtils
 * Shared obfuscation detection utilities
 * Single source of truth for pattern matching logic
 */

const ObfuscationUtils = {
    // Flexible whitespace pattern - matches any non-alphanumeric characters INCLUDING underscores
    // Used consistently across all pattern matching (DRY principle)
    // * = zero or more (for character-level obfuscation: "blo/od", "bl.oo.d")
    // + = one or more (for word separation: "inner city", "inner_city")
    // [^a-zA-Z0-9] matches anything except letters and digits (includes _, -, /, etc.)
    FLEXIBLE_WHITESPACE_OPTIONAL: '[^a-zA-Z0-9]*',  // Zero or more (character-level obfuscation)
    FLEXIBLE_WHITESPACE_REQUIRED: '[^a-zA-Z0-9]+',  // One or more (word separation)

    // ===== CACHE =====

    _reverseMapCache: null,  // Cached reverse mapping for bidirectional normalizations

    // ===== BIDIRECTIONAL NORMALIZATIONS (pattern must match BOTH forms) =====

    // UK → US spelling mappings
    UK_TO_US_WORDS: {
        'colour': 'color',
        'flavour': 'flavor',
        'honour': 'honor',
        'neighbour': 'neighbor',
        'favourite': 'favorite',
        'behaviour': 'behavior',
        'labour': 'labor',
        'rumour': 'rumor',
        'valour': 'valor',
        'centre': 'center',
        'metre': 'meter',
        'litre': 'liter',
        'theatre': 'theater',
        'fibre': 'fiber',
        'licence': 'license',
        'defence': 'defense',
        'offence': 'offense',
        'practise': 'practice',
        'pretence': 'pretense',
        'catalogue': 'catalog',
        'dialogue': 'dialog',
        'aeroplane': 'airplane',
        'aluminium': 'aluminum',
        'cheque': 'check',
        'tyre': 'tire',
        'mum': 'mom'
    },

    // UK/US suffix mappings (bidirectional - both forms valid)
    // Used to generate pattern alternatives for words with UK/US spelling variants
    // Example: "socialization" will also match "socialisation"
    US_TO_UK_SUFFIXES: {
        'ize': 'ise',
        'ization': 'isation',
        'izing': 'ising',
        'ized': 'ised',
        'yze': 'yse',
        'yzing': 'ysing',
        'yzed': 'ysed',
        'yzes': 'yses'
    },

    // Simple word substitutions (bidirectional - both forms valid)
    BIDIRECTIONAL_SUBSTITUTIONS: {
        '&': 'and',
        '=': 'is',
        'an': 'a',
        'u': 'you',
        'r': 'are',
        '4': 'for',
        '2': 'to',
        'ok': 'okay',
        // coded language specific
        'gov': 'government',
        'govt': 'government',
        'lib' : 'liberal',
        'libs' : 'liberals',
        'vs' : 'v'
    },

    // Contractions (bidirectional - both forms valid)
    CONTRACTIONS: {
        "isn't": 'is not',
        "aren't": 'are not',
        "can't": 'cannot',
        "won't": 'will not',
        "i'm": 'i am',
        "they're": 'they are',
        "we're": 'we are',
        "it's": 'it is',
        "i've": 'i have',
        "they've": 'they have',
        "doesn't": 'does not',
        "didn't": 'did not',
        "shouldn't": 'should not',
        "wouldn't": 'would not',
        "couldn't": 'could not'
    },

    // Character substitution map for obfuscation detection
    // Only includes visually similar characters and common leet speak
    CHARACTER_SUBSTITUTIONS: {
        'a': '[aáàâäãăå@4ΑаᴀΔ0^]', // 0 to catch "Khaz0r"
        'b': '[b8ß฿]',
        'c': '[cç¢(<{Ссk]',
        'd': '[dđð]',
        'e': '[eéèêë3€£Ееє0]', // 0 to catch "groom0r"
        'f': '[fƒ]',
        'g': '[g69]',
        'h': '[hɦħ#]',
        'i': '[iíìîï1!|¡ɨ]',
        'k': '[kκ]',
        'l': '[l1|£w]', // w to catch uwu speak
        'm': '[mᴍrn]',
        'n': '[nñη]',
        'o': '[oóòôöõø0°○●Оо]',
        'p': '[pрР]',
        's': '[s$5§śš]',
        'r': '[r]', // need to add w to catch uwu speak
        't': '[t7+†]',
        'u': '[uúùûüū]',
        'v': '[v∨]',
        'w': '[w]',
        'x': '[x×х]',
        'y': '[yýÿҮу]',
        'z': '[z2žż]'
    },

    /**
     * Get the character substitution class for a character
     * Handles both direct lookups (e.g., 'a') and reverse lookups (e.g., 'å' → finds 'a' class)
     */
    getCharSubstitution(char) {
        const lower = char.toLowerCase();

        // Direct lookup
        if (this.CHARACTER_SUBSTITUTIONS[lower]) {
            return this.CHARACTER_SUBSTITUTIONS[lower];
        }

        // Reverse lookup: find which base character this variant belongs to
        for (const [baseChar, charClass] of Object.entries(this.CHARACTER_SUBSTITUTIONS)) {
            // Remove the brackets and check if our char is in the class
            const charsInClass = charClass.slice(1, -1); // Remove [ and ]
            if (charsInClass.includes(lower)) {
                return charClass;
            }
        }

        return null;
    },

    // Slang normalizations (one-way: non-standard → standard)
    SLANG_NORMALIZATIONS: {
        'wus': 'was',
        'wuz': 'was',
        'woz': 'was',
        'waz': 'was',
        'da': 'the',
        'yer': 'you',
        'thou': 'you',
        'tho': 'though',
        'thru': 'through',
        'ya': 'you',
        'tha': 'the',
        'bruv': 'brother',
        'fam': 'friend',
        'em': 'them'
    },

    // Meme speak normalizations (one-way: meme → standard)
    MEME_NORMALIZATIONS: {
        'ze': 'the',
        'le': 'the',
        'teh': 'the',
        'sez': 'says',
        'srs': 'serious',
        'srsly': 'seriously',
        'pls': 'please',
        'plz': 'please',
        'thx': 'thanks',
        'thanx': 'thanks',
        'kthx': 'thanks',
        'gud': 'good',
        '4u': 'for you',
        '4r': 'for',
        '2day': 'today',
        '2moro': 'tomorrow',
        'gr8': 'great',
        'h8': 'hate',
        'hooman': 'human',
        'smol': 'small',
        'boi': 'boy',
        'b4': 'before',
        'gr8': 'great'
    },

    // Ordinal numbers - (one-way: numeric → standard)
    ORDINAL_NUMBERS: {
        "1st": "first",
        "2nd": "second",
        "3rd": "third",
        "4th": "fourth",
        "5th": "fifth"
    },

    // ===== HELPER FUNCTIONS FOR NORMALIZATION =====

    /**
     * Apply bidirectional substitutions using BIDIRECTIONAL_SUBSTITUTIONS constant
     */
    applyBidirectionalSubs(text) {
        for (const [from, to] of Object.entries(this.BIDIRECTIONAL_SUBSTITUTIONS)) {
            const escapedFrom = from.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            const re = /^\w+$/.test(from)
                ? new RegExp(`\\b${escapedFrom}\\b`, 'g')
                : new RegExp(escapedFrom, 'g');
            text = text.replace(re, to);
        }
        return text;
    },

    /**
     * Apply slang normalizations using SLANG_NORMALIZATIONS constant
     */
    applySlangNormalizations(text) {
        for (const [from, to] of Object.entries(this.SLANG_NORMALIZATIONS)) {
            const re = new RegExp(`\\b${from}\\b`, 'g');
            text = text.replace(re, to);
        }
        return text;
    },

    /**
     * Apply meme speak normalizations using MEME_NORMALIZATIONS constant
     */
    applyMemeNormalizations(text) {
        for (const [from, to] of Object.entries(this.MEME_NORMALIZATIONS)) {
            const re = new RegExp(`\\b${from}\\b`, 'g');
            text = text.replace(re, to);
        }
        return text;
    },

    /**
    * Apply ordinal number normalizations using ORDINAL_NUMBERS constant
    */
    applyOrdinalNormalizations(text) {
        for (const [from, to] of Object.entries(this.ORDINAL_NUMBERS)) {
            const re = new RegExp(`\\b${from}\\b`, 'g');
            text = text.replace(re, to);
        }
        return text;
    },

    /**
     * Apply contractions using CONTRACTIONS constant
     */
    applyContractions(text) {
        for (const [from, to] of Object.entries(this.CONTRACTIONS)) {
            const re = new RegExp(`\\b${from}\\b`, 'gi');
            text = text.replace(re, to);
        }
        return text;
    },

    /**
     * Apply UK to US suffix transformations using US_TO_UK_SUFFIXES constant (DRY)
     */
    applySuffixes(text) {
        // Iterate through all suffix pairs in US_TO_UK_SUFFIXES (single source of truth)
        for (const [usSuffix, ukSuffix] of Object.entries(this.US_TO_UK_SUFFIXES)) {
            // Convert UK form to US form (e.g., "ise" → "ize")
            const re = new RegExp(`\\b(\\w+)${ukSuffix}\\b`, 'g');
            text = text.replace(re, `$1${usSuffix}`);
        }
        return text;
    },

    /**
     * Apply UK to US word replacements using UK_TO_US_WORDS constant
     */
    applyUkToUsWords(text) {
        for (const [uk, us] of Object.entries(this.UK_TO_US_WORDS)) {
            const re = new RegExp(`\\b${uk.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'g');
            text = text.replace(re, us);
        }
        return text;
    },

    /**
     * Clean up punctuation and whitespace
     */
    cleanupPunctuation(text) {
        return text
            // Keep: word chars, accented letters, whitespace, hyphens, quotes, emojis
            // Remove: other punctuation only
            .replace(/[^\w\s\-"'`áàâäãăåçđðéèêëƒɦħíìîïκñηóòôöõøрРśšúùûüū∨×хýÿҮжżΑаᴀΔΕеєɨ\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/giu, '')
            .replace(/\s+/g, ' ')
            .trim();
    },

    /**
     * Build reverse mapping for bidirectional normalizations (cached)
     * Maps normalized form → all possible original forms
     * Returns base reverse map (without suffix variants which are word-specific)
     */
    buildReverseMap() {
        if (this._reverseMapCache) {
            return this._reverseMapCache;
        }

        const reverseMap = new Map();

        // Simple substitutions (& → and, an → a)
        for (const [from, to] of Object.entries(this.BIDIRECTIONAL_SUBSTITUTIONS)) {
            if (!reverseMap.has(to)) {
                reverseMap.set(to, [to]);
            }
            reverseMap.get(to).push(from);
        }

        // UK → US words (honour → honor)
        for (const [uk, us] of Object.entries(this.UK_TO_US_WORDS)) {
            if (!reverseMap.has(us)) {
                reverseMap.set(us, [us]);
            }
            reverseMap.get(us).push(uk);
        }

        // Contractions (isn't → is not)
        for (const [from, to] of Object.entries(this.CONTRACTIONS)) {
            if (!reverseMap.has(to)) {
                reverseMap.set(to, [to]);
            }
            reverseMap.get(to).push(from);
        }

        this._reverseMapCache = reverseMap;
        return reverseMap;
    },

    /**
     * Get suffix variants for a word (bidirectional - single source of truth)
     * Examples:
     *   "socialization" → ["socialization", "socialisation"]
     *   "socialisation" → ["socialization", "socialisation"]
     */
    getSuffixVariants(word) {
        for (const [usSuffix, ukSuffix] of Object.entries(this.US_TO_UK_SUFFIXES)) {
            // Check if word has US suffix
            if (word.endsWith(usSuffix)) {
                const stem = word.slice(0, -usSuffix.length);
                const ukForm = stem + ukSuffix;
                return [word, ukForm];
            }
            // Check if word has UK suffix (bidirectional!)
            if (word.endsWith(ukSuffix)) {
                const stem = word.slice(0, -ukSuffix.length);
                const usForm = stem + usSuffix;
                return [usForm, word];
            }
        }
        return [word];
    },

    /**
     * Normalize text for comparison by removing/standardizing punctuation and substituting common spelling variations
     * This allows us to match variations without storing them all in the database
     *
     * Handles:
     * - Unicode normalization to NFC (composed form)
     * - Hashtags: "#innercity" → "innercity"
     * - & to and: "black & white" → "black and white"
     * - All other punctuation removal (except hyphens/spaces which we handle separately)
     * - Multiple spaces → single space
     * - Trim whitespace
     * - Slang / Eye dialect 
     * - Meme speak
     */
    normalizeText(text) {
        // Initial cleanup
        text = text
            .normalize('NFC')
            .toLowerCase()
            .replace(/^#/, '');

        // Apply all normalizations using helper functions (DRY)
        text = this.applyBidirectionalSubs(text);
        text = this.applySlangNormalizations(text);
        text = this.applyMemeNormalizations(text);
        text = this.applyOrdinalNormalizations(text);
        text = this.applyContractions(text);
        text = this.applySuffixes(text);
        text = this.applyUkToUsWords(text);
        text = this.cleanupPunctuation(text);

        return text;
    },

    /**
     * Create flexible regex pattern that handles ALL variations INCLUDING numbers
     *
     * Handles:
     * - Character substitution (leet speak): "soy" → "s[s$5][oóòôöõø0]y"
     * - Obfuscation: accented chars, numbers as letters
     * - Whitespace/hyphen/underscore interchangeability: "inner city" matches "inner-city", "innercity"
     * - Hashtags: pattern will work with or without #
     * - & vs "and": "black & white" matches "black and white"
     * - All punctuation: stripped in normalization
     * - NUMBER OBFUSCATION: "1488" matches "fourteen eighty eight", etc. (requires NumberObfuscationUtils)
     *
     * This is the SINGLE source of truth for pattern matching.
     */
    createFlexiblePattern(variation) {
        // Check if NumberObfuscationUtils is available and if term contains numbers
        if (typeof NumberObfuscationUtils !== 'undefined' && /\d/.test(variation)) {
            const numbers = NumberObfuscationUtils.extractNumbers(variation);

            if (numbers.length > 0) {
                // Build pattern with number alternations
                let pattern = '';
                let lastIndex = 0;

                numbers.forEach(num => {
                    // Add text before number (with character obfuscation)
                    if (num.start > lastIndex) {
                        const textPart = variation.substring(lastIndex, num.start);
                        // If text between numbers is just whitespace/punctuation, treat as flexible whitespace
                        // This allows "33/6" to match "thirty three six", "33 6", AND "336" (optional separator)
                        if (/^[\s\-_\/]+$/.test(textPart)) {
                            pattern += this.FLEXIBLE_WHITESPACE_OPTIONAL;
                        } else {
                            pattern += this.createFlexiblePatternOriginal(textPart);
                        }
                    }

                    // Add number pattern (digit OR word forms)
                    pattern += NumberObfuscationUtils.createNumberPattern(num.value);

                    lastIndex = num.end;
                });

                // Add remaining text after last number
                if (lastIndex < variation.length) {
                    pattern += this.createFlexiblePatternOriginal(variation.substring(lastIndex));
                }

                // If we have multiple numbers separated ONLY by punctuation (like "33/6"),
                // also match the concatenated form (like "336" → "three hundred thirty six")
                if (numbers.length > 1) {
                    // Check if numbers are only separated by punctuation/whitespace
                    let allPunctSeparated = true;
                    for (let i = 1; i < numbers.length; i++) {
                        const betweenText = variation.substring(numbers[i - 1].end, numbers[i].start);
                        if (betweenText && !/^[\s\-_\/]+$/.test(betweenText)) {
                            allPunctSeparated = false;
                            break;
                        }
                    }

                    if (allPunctSeparated) {
                        // Concatenate all the numbers
                        const concatenated = numbers.map(n => n.value).join('');
                        const concatenatedNum = parseInt(concatenated, 10);

                        // Add alternation for concatenated form
                        const concatenatedPattern = NumberObfuscationUtils.createNumberPattern(concatenatedNum);
                        pattern = `(?:${pattern}|${concatenatedPattern})`;

                    }
                }

                // Add optional 's' at the end to catch plurals (DRY principle)
                // But don't match 's' across newlines: use non-newline flexible whitespace before 's'
                const finalPattern = pattern + `(?:[^a-zA-Z0-9\\n\\r]*s)?`;

                return finalPattern;
            }
        }

        // No numbers or NumberObfuscationUtils not available - use original logic
        // Add optional 's' at the end to catch plurals (DRY principle)
        // But don't match 's' across newlines: use non-newline flexible whitespace before 's'
        const finalPattern = this.createFlexiblePatternOriginal(variation) + `(?:[^a-zA-Z0-9\\n\\r]*s)?`;

        return finalPattern;
    },

    /**
     * Original createFlexiblePattern implementation (character-level only)
     * Used internally when no number obfuscation needed
     */
    createFlexiblePatternOriginal(variation) {
        // Special handling for emojis - match them literally but allow flexible spacing between them
        // Emoji regex: matches common emoji ranges
        const emojiRegex = /[\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/ug;

        if (emojiRegex.test(variation)) {
            // Reset regex lastIndex after test
            emojiRegex.lastIndex = 0;

            // Split into emoji and non-emoji parts
            const parts = [];
            let lastIndex = 0;
            let match;

            while ((match = emojiRegex.exec(variation)) !== null) {
                // Add non-emoji text before this emoji (if any)
                if (match.index > lastIndex) {
                    parts.push(variation.substring(lastIndex, match.index));
                }
                // Add the emoji itself
                parts.push(match[0]);
                lastIndex = match.index + match[0].length;
            }
            // Add any remaining text after last emoji
            if (lastIndex < variation.length) {
                parts.push(variation.substring(lastIndex));
            }

            // Join parts with flexible whitespace pattern, escaping special regex chars
            return parts.map(p => p.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join(this.FLEXIBLE_WHITESPACE_OPTIONAL);
        }

        // Normalize the variation
        const normalized = this.normalizeText(variation);

        // Empty string check - if normalization resulted in empty string, match literally
        // This handles pure punctuation terms like "((()))" or "–"
        if (!normalized || normalized.length === 0) {
            // Return escaped original to match literally (e.g., triple parentheses, em dash)
            return variation.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        }

        // Get cached reverse mapping (DRY - built once, reused)
        // Note: We clone it because we'll add word-specific suffix variants
        const reverseMap = new Map(this.buildReverseMap());

        // Add suffix-based variants for words in this specific normalized text
        const words = normalized.split(/[\s\-]+/);
        words.forEach(word => {
            const suffixVariants = this.getSuffixVariants(word);
            if (suffixVariants.length > 1) {
                reverseMap.set(word, suffixVariants);
            }
        });

        // Build pattern word by word
        let i = 0;
        const result = [];
        const chars = normalized.split('');

        while (i < chars.length) {
            const char = chars[i];
            const lower = char.toLowerCase();

            // Check if we're at the start of a word with alternatives
            let matchedWord = null;
            let alternatives = null;

            // Try to match multi-word phrases and long words (e.g., "is not", "socialization")
            for (let len = 20; len >= 1; len--) {  // Try up to 20 chars
                if (i + len <= chars.length) {
                    const testWord = chars.slice(i, i + len).join('');
                    const alts = reverseMap.get(testWord);

                    if (alts && alts.length > 1) {
                        // Check if this is a complete word (bounded by spaces/boundaries)
                        const prevOk = i === 0 || chars[i - 1] === ' ' || chars[i - 1] === '-';
                        const nextOk = i + len >= chars.length || chars[i + len] === ' ' || chars[i + len] === '-';

                        if (prevOk && nextOk) {
                            matchedWord = testWord;
                            alternatives = alts;
                            break;
                        }
                    }
                }
            }

            if (matchedWord && alternatives) {
                // Create pattern that matches ALL alternatives (DRY!)
                const patterns = alternatives.map(alt => {
                    // Build obfuscation pattern for each alternative
                    return alt.split('').map(c => {
                        const lc = c.toLowerCase();
                        return this.CHARACTER_SUBSTITUTIONS[lc] || c.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
                    }).join(this.FLEXIBLE_WHITESPACE_OPTIONAL);
                });

                result.push(`(?:${patterns.join('|')})`);
                i += matchedWord.length; // Skip past the matched word
                continue;
            }

            // Spaces and hyphens become OPTIONAL flexible whitespace pattern
            if (char === ' ' || char === '-' || char === "'" || char === "'") {
                result.push(this.FLEXIBLE_WHITESPACE_OPTIONAL);
            }
            // If we have a substitution class for this character, use it
            else {
                const charClass = this.getCharSubstitution(char);
                if (charClass) {
                    result.push(charClass);
                    // After each character, allow optional punctuation/separators
                    // This catches things like "blo/od", "bl.oo.d", etc.
                    result.push(this.FLEXIBLE_WHITESPACE_OPTIONAL);
                }
                // Otherwise, escape special regex chars and return
                else {
                    result.push(char.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
                    // After each character, allow optional punctuation/separators
                    result.push(this.FLEXIBLE_WHITESPACE_OPTIONAL);
                }
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
     * DRY helper - used by all matchers (CodedTermMatcher, HarmfulTermMatcher, etc.)
     */
    buildVariationMap(terms) {
        const variationMap = new Map();
        terms.forEach(term => {
            // Always add the root term (lowercase only - normalization happens in createFlexiblePattern)
            // We just lowercase, not normalize, to preserve numbers and important punctuation
            variationMap.set(term.root.toLowerCase(), term);

            // Add all variations to the map (lowercase only - normalization happens in createFlexiblePattern)
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
