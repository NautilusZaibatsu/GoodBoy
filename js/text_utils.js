/**
 * GoodBoy TextUtils
 * Shared obfuscation detection utilities
 * Single source of truth for pattern matching logic
 */

const TextUtils = {
    // Flexible whitespace patterns - used consistently across all pattern matching (DRY principle)
    // [^a-zA-Z0-9\s] matches anything except letters, digits, and whitespace (includes _, -, /, etc.)
    // [^a-zA-Z0-9] matches anything except letters and digits (includes _, -, /, spaces, etc.)
    FLEXIBLE_WHITESPACE_OPTIONAL: '[^a-zA-Z0-9\\s]*',  // Zero or more, NO spaces (character-level obfuscation: "bl-o-od")
    FLEXIBLE_WORD_SEPARATOR: '[^a-zA-Z0-9]*',  // Zero or more, WITH spaces (multi-word terms: "false flag")
    FLEXIBLE_WHITESPACE_REQUIRED: '[^a-zA-Z0-9]+',  // One or more (word separation)

    // ===== CACHE =====

    _reverseMapCache: null,  // Cached reverse mapping for bidirectional normalizations

    // ===== SYMBOL WHITELIST =====

    SYMBOL_WHITELIST: ['-', "'", '"', '`', '=', '≠'],

    // ===== EMOJI RANGE/REGEX =====

    EMOJI_RANGES: [
        '\\u{1F300}-\\u{1F5FF}',
        '\\u{1F600}-\\u{1F64F}',
        '\\u{1F680}-\\u{1F6FF}',
        '\\u{1F700}-\\u{1F77F}',
        '\\u{1F780}-\\u{1F7FF}',
        '\\u{1F800}-\\u{1F8FF}',
        '\\u{1F900}-\\u{1F9FF}',
        '\\u{1FA00}-\\u{1FA6F}',
        '\\u{1FA70}-\\u{1FAFF}',
        '\\u{2600}-\\u{26FF}',
        '\\u{2700}-\\u{27BF}'
    ],

    // Modifiers (variation selectors + skin tones)
    EMOJI_MODIFIER_RANGES: [
        '\\u{FE00}-\\u{FE0F}',
        '\\u{1F3FB}-\\u{1F3FF}'
    ],

    // Zero-width joiner
    EMOJI_ZWJ: '\\u{200D}',

    // ===== EMOJI REGEX OBJECTS (Four purpose-specific regexes) =====

    // 1. Simple contains-check: Does text contain ANY emoji?
    EMOJI_CONTAINS_REGEX: null,     // Pattern: [ranges], flags: 'u'

    // 2. Start-of-substring matching: Match complete emoji sequence at start
    EMOJI_AT_START_REGEX: null,     // Pattern: ^(?:base(?:mod)?(?:zwj...)*), flags: 'u' (NOT global)

    // 3. Iterate all emojis: Find ALL emoji sequences in text
    EMOJI_MATCHALL_REGEX: null,     // Pattern: (?:base(?:mod)?(?:zwj...)*), flags: 'gu'

    // 4. Single-char check: Is this single character an emoji base?
    EMOJI_BASE_REGEX: null,         // Pattern: ^[ranges]$, flags: 'u'

    /**
     * Initialize all emoji regex objects (called once on load)
     * Creates four purpose-specific regex patterns for different use cases
     */
    initEmojiRegex() {
        // For character class (ranges must be inside [...])
        const BASE_CLASS = `[${this.EMOJI_RANGES.join('')}]`;  // Join without separator for character class
        const MOD = `(?:${this.EMOJI_MODIFIER_RANGES.join('|')})`;  // Modifiers can use alternation
        const ZWJ = this.EMOJI_ZWJ;

        // Full emoji sequence pattern (base + optional modifiers + optional ZWJ sequences)
        const SEQUENCE = `${BASE_CLASS}(?:${MOD})?(?:${ZWJ}${BASE_CLASS}(?:${MOD})?)*`;

        // 1. Simple contains-check (character class only, no anchors, no global)
        this.EMOJI_CONTAINS_REGEX = new RegExp(BASE_CLASS, 'u');

        // 2. Match emoji at start of substring (anchored, NOT global)
        this.EMOJI_AT_START_REGEX = new RegExp(`^${SEQUENCE}`, 'u');

        // 3. Iterate all emojis in text (NOT anchored, global for iteration)
        this.EMOJI_MATCHALL_REGEX = new RegExp(SEQUENCE, 'gu');

        // 4. Single-character emoji base check (anchored both ends, NOT global)
        this.EMOJI_BASE_REGEX = new RegExp(`^${BASE_CLASS}$`, 'u');
    },

    // Single-character check (used in your "stop trimming" loop)
    isEmojiChar(ch) {
        if (!ch) return false;
        return this.EMOJI_BASE_REGEX.test(ch);
    },

    // ===== BIDIRECTIONAL WORD NORMALIZATIONS (pattern must match BOTH forms) =====

    // Simple word substitutions (bidirectional - both forms valid)
    SHORTHAND: {
        '&': 'and',
        'is': '=', // in SYMBOL_WHITELIST
        'means': '=',
        'is not': '≠', // in SYMBOL_WHITELIST
        'doesn\'t mean': '≠',
        'an': 'a',
        'u': 'you',
        'r': 'are',
        '4': 'for',
        '2': 'to',
        'ok': 'okay',
        // Coded language specific
        'gov': 'government',
        'govt': 'government',
        'lib': 'liberal',
        'libs': 'liberals',
        'vs': 'v',
        'ppl': 'people',
    },

    // Contractions (bidirectional - both forms valid)
    CONTRACTIONS: {
        "isn't": 'is not',
        "aren't": 'are not',
        "can't": 'cannot',
        "won't": 'will not',
        "it's": 'it is',
        "it'll": 'it will',
        "doesn't": 'does not',
        "didn't": 'did not',
        "shouldn't": 'should not',
        "should've": 'should have',
        "shouldn't've": 'should not have',
        "wouldn't": 'would not',
        "would've": 'would have',
        "wouldn't've": 'would not have',
        "couldn't": 'could not',
        "could've": 'could have',
        "couldn't've": 'could not have',
        "i'm": 'i am',
        "i'll": 'i will',
        "i'd": 'i would',
        "i've": 'i have',
        "i'd've": 'i would have',
        "we're": 'we are',
        "we'll": 'we will',
        "we'd": 'we would',
        "we've": 'we have',
        "we'd've": 'we would have',
        "you're": 'you are',
        "you'll": 'you will',
        "you'd": 'you would',
        "you've": 'you have',
        "you'd've": 'you would have',
        "he's": 'he is',
        "he'll": 'he will',
        "he'd": 'he would',
        "he'd've": 'he would have',
        "she's": 'she is',
        "she'll": 'she will',
        "she'd": 'she would',
        "she'd've": 'she would have',
        "they're": 'they are',
        "they'll": 'they will',
        "they'd": 'they would',
        "they've": 'they have',
        "they'd've": 'they would have',
    },

    // Ordinal numbers (bidirectional - both forms valid)
    ORDINAL_NUMBERS: {
        '1st': 'first',
        '2nd': 'second',
        '3rd': 'third',
        '4th': 'fourth',
        '5th': 'fifth'
    },

    // UK → US spelling mappings
    UK_TO_US: {
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
    UK_TO_US_SUFFIXES: {
        'ise': 'ize',
        'isation': 'ization',
        'ising': 'izing',
        'ised': 'ized',
        'yse': 'yze',
        'ysing': 'yzing',
        'ysed': 'yzed',
        'yses': 'yzes',
        'iser': 'izer'
    },

    // ===== ONE WAY WORD NORMALIZATIONS substitute for textinput only =====

    // Slang normalizations (one-way: non-standard → standard)
    SLANG: {
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
    MEMESPEAK: {
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

    // ===== HELPER FUNCTIONS FOR NORMALIZATION =====

    /**
     * Apply bidirectional substitutions using SHORTHAND constant
     */
    applyBidirectionalSubs(text, substitutions) {
        for (const [from, to] of Object.entries(substitutions)) {
            const escapedFrom = from.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            const re = /^\w+$/.test(from)
                ? new RegExp(`\\b${escapedFrom}\\b`, 'g')
                : new RegExp(escapedFrom, 'g');
            text = text.replace(re, to);
        }
        return text;
    },

    // Apply one-way word substitutions
    applyOneWaySubs(text, substitutions) {
        for (const [from, to] of Object.entries(substitutions)) {
            const re = new RegExp(`\\b${from}\\b`, 'g');
            text = text.replace(re, to);
        }
        return text;
    },

    /**
     * Apply UK to US suffix transformations using UK_TO_US_SUFFIXES constant (DRY)
     */
    applySuffixes(text) {
        // Iterate through all suffix pairs in UK_TO_US_SUFFIXES (single source of truth)
        for (const [ukSuffix, usSuffix] of Object.entries(this.UK_TO_US_SUFFIXES)) {
            // Convert UK form to US form (e.g., "ise" → "ize")
            const re = new RegExp(`\\b(\\w+)${usSuffix}\\b`, 'g');
            text = text.replace(re, `$1${ukSuffix}`);
        }
        return text;
    },

    /**
     * Get suffix variants for a word (bidirectional - single source of truth)
     * Examples:
     *   "socialization" → ["socialization", "socialisation"]
     *   "socialisation" → ["socialization", "socialisation"]
     */
    getSuffixVariants(word) {
        for (const [usSuffix, ukSuffix] of Object.entries(this.UK_TO_US_SUFFIXES)) {
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
    */
    normalizeText(text) {
        // Initial cleanup
        text = text
            .normalize('NFC')
            .toLowerCase()
            .replace(/^#/, '');
        // Apply all substitutions using helper functions
        text = this.applyBidirectionalSubs(text, this.SHORTHAND);
        text = this.applyOneWaySubs(text, this.ORDINAL_NUMBERS);
        text = this.applyOneWaySubs(text, this.SLANG);
        text = this.applyOneWaySubs(text, this.MEMESPEAK);
        text = this.applyOneWaySubs(text, this.CONTRACTIONS);
        text = this.applySuffixes(text);
        text = this.cleanupText(text);
        return text;
    },

    reverseMapSubstitutions(map, substitutions) {
        for (const [from, to] of Object.entries(substitutions)) {
            if (!map.has(to)) {
                map.set(to, [to]);
            }
            map.get(to).push(from);
        }
    },

    /**
   * Build reverse mapping for substitutions (cached)
   * Maps normalized form → all possible original forms
   * Returns base reverse map (without suffix variants which are word-specific)
   */
    buildReverseMap() {
        if (this._reverseMapCache) {
            return this._reverseMapCache;
        }
        const reverseMap = new Map();
        this.reverseMapSubstitutions(reverseMap, this.SHORTHAND);
        this.reverseMapSubstitutions(reverseMap, this.ORDINAL_NUMBERS);
        this.reverseMapSubstitutions(reverseMap, this.UK_TO_US);
        this.reverseMapSubstitutions(reverseMap, this.CONTRACTIONS);
        this._reverseMapCache = reverseMap;
        return reverseMap;
    },

    /**
     * Clean up punctuation and whitespace
     * Keeps:
     * - word characters (letters, digits, underscore)
     * - whitespace
     * - hyphens, quotes, backticks
     * - symbols in SYMBOL_WHITELIST
     * - accented letters from CHARACTER_VARIANTS
     * - emojis in EMOJI_RANGES
     */
    cleanupText(text) {
        // 1. Preserve accented chars and whitelist symbols
        const accentsEscaped = this.escapeForRegex(Object.values(this.CHARACTER_VARIANTS).join(''));
        const whitelistEscaped = this.escapeForRegex(this.SYMBOL_WHITELIST.join(''));

        const regex = new RegExp(`[^\\w\\s${whitelistEscaped}${accentsEscaped}]`, 'gu');
        text = text.replace(regex, '');

        // 2. Preserve emojis (use EMOJI_MATCHALL_REGEX for finding all emoji sequences)
        const preservedEmojis = [...text.matchAll(this.EMOJI_MATCHALL_REGEX)];
        text = text.replace(this.EMOJI_MATCHALL_REGEX, '');

        // 3. Reattach preserved emojis
        text = (text + ' ' + preservedEmojis).trim();

        // 4. Normalize whitespace
        text = text.replace(/\s+/g, ' ').trim();

        return text;
    },

    // ===== CHARACTER NORMALIZATION =====

    // Character substitution map for accented letter detection
    CHARACTER_VARIANTS: {
        'a': 'áàâäãăåΑаᴀ',
        'c': 'çСс',
        'd': 'đð',
        'e': 'éèêëЕеє',
        'f': 'ƒ',
        'g': '',
        'h': 'ɦħ',
        'i': 'íìîïɨ¡',
        'k': 'κ',
        'm': 'ᴍ',
        'n': 'ñη',
        'o': 'óòôöõøОо',
        'p': 'рР',
        's': 'śš',
        'u': 'úùûüū',
        'v': '∨',
        'x': '×х',
        'y': 'ýÿҮу',
        'z': 'žż'
    },

    // Character substitution map for obfuscation detection
    CHARACTER_OBFUSCATION: {
        'a': '@4^0Δ',
        'b': '8฿ß',
        'c': '¢(<{k',
        'e': '3€£0',
        'g': '69',
        'h': '#',
        'i': '1!|',
        'l': '1|£',
        'o': '0°○●',
        's': '$5§',
        't': '7+†',
        'z': '2'
    },

    /** 
     * Character subsitution map, will init this on load
    * combines CHARACTER_VARIANTS and CHARACTER_OBFUSCATION
    */
    CHARACTER_SUBSTITUTIONS: {},

    initCharacterSubstitutions() {
        const variants = this.CHARACTER_VARIANTS || {};
        const obf = this.CHARACTER_OBFUSCATION || {};

        // Combine with all variant/obfuscation keys
        const allKeys = new Set([
            ...Object.keys(variants),
            ...Object.keys(obf)
        ]);

        this.CHARACTER_SUBSTITUTIONS = {}; // rebuild

        for (const ch of allKeys) {
            const v = variants[ch] || '';
            const o = obf[ch] || '';

            // Always include the base character itself
            this.CHARACTER_SUBSTITUTIONS[ch] = `[${ch}${v}${o}]`;
        }
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

    // Helpers to escape Unicode characters and punctuation
    escapeForCharacterClass(str) {
        return [...str].map(c => '\\u{' + c.codePointAt(0).toString(16) + '}').join('');
    },
    escapeForRegex(str) {
        return str.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    },

    /**
     * Create flexible regex pattern that handles ALL variations INCLUDING numbers
     *
     * Main entry point for pattern creation. Orchestrates number and character-level obfuscation.
     *
     * Handles:
     * - Character substitution (leet speak): "soy" → "s[s$5][oóòôöõø0]y"
     * - Obfuscation: accented chars, numbers as letters
     * - Whitespace/hyphen/underscore interchangeability: "inner city" matches "inner-city", "innercity"
     * - Hashtags: pattern will work with or without #
     * - & vs "and": "black & white" matches "black and white"
     * - All punctuation: stripped in normalization
     * - NUMBER OBFUSCATION: "1488" matches "fourteen eighty eight", etc. (requires NumberUtils)
     *
     * This is the SINGLE source of truth for pattern matching.
     */
    createFlexiblePattern(variation) {
        // Check if NumberUtils is available and if term contains numbers
        if (typeof NumberUtils !== 'undefined' && /\d/.test(variation)) {
            const numbers = NumberUtils.extractNumbers(variation);

            if (numbers.length > 0) {
                // Build pattern with number alternations
                let pattern = '';
                let lastIndex = 0;

                numbers.forEach(num => {
                    // Add text before number (with character obfuscation)
                    if (num.start > lastIndex) {
                        const textPart = variation.substring(lastIndex, num.start);
                        // If text between numbers is just whitespace/punctuation, treat as flexible word separator
                        // This allows "33/6" to match "thirty three six", "33 6", AND "336" (optional separator)
                        // Use FLEXIBLE_WORD_SEPARATOR (allows spaces) for number separators
                        if (/^[\s\-_\/]+$/.test(textPart)) {
                            pattern += this.FLEXIBLE_WORD_SEPARATOR;
                        } else {
                            pattern += this.createCharacterPattern(textPart);
                        }
                    }

                    // Add number pattern (digit OR word forms)
                    pattern += NumberUtils.createNumberPattern(num.value);

                    lastIndex = num.end;
                });

                // Add remaining text after last number
                if (lastIndex < variation.length) {
                    pattern += this.createCharacterPattern(variation.substring(lastIndex));
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
                        const concatenatedPattern = NumberUtils.createNumberPattern(concatenatedNum);
                        pattern = `(?:${pattern}|${concatenatedPattern})`;

                    }
                }

                // Add optional 's' at the end to catch plurals (DRY principle)
                // But don't match 's' across newlines or when followed by another letter
                // Negative lookahead (?![a-z]) prevents consuming 's' that's part of next word
                const finalPattern = pattern + `(?:[^a-zA-Z0-9\\n\\r]*s(?![a-z]))?`;

                return finalPattern;
            }
        }

        // No numbers or NumberUtils not available - use character-level pattern only
        // Add optional 's' at the end to catch plurals (DRY principle)
        // But don't match 's' across newlines or when followed by another letter
        // Negative lookahead (?![a-z]) prevents consuming 's' that's part of next word
        const finalPattern = this.createCharacterPattern(variation) + `(?:[^a-zA-Z0-9\\n\\r]*s(?![a-z]))?`;

        return finalPattern;
    },

    /**
     * Create character-level flexible pattern (no number obfuscation)
     *
     * Handles emojis, text normalization, character substitutions, and bidirectional word replacements.
     * Used internally by createFlexiblePattern() for text portions of patterns.
     */
    createCharacterPattern(variation) {
        // Special handling for emojis - match them literally but allow flexible spacing between them

        if (this.EMOJI_CONTAINS_REGEX.test(variation)) {
            // Split into emoji and non-emoji parts using matchAll
            const parts = [];
            let lastIndex = 0;

            // Use EMOJI_MATCHALL_REGEX to find all emoji sequences
            // This regex has global flag and no anchors, perfect for iteration
            for (const match of variation.matchAll(this.EMOJI_MATCHALL_REGEX)) {
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
            const pattern = parts.map(p => p.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join(this.FLEXIBLE_WHITESPACE_OPTIONAL);
            return pattern;
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

            // Spaces and hyphens become OPTIONAL flexible word separator
            // Use FLEXIBLE_WORD_SEPARATOR (allows spaces) for intentional spaces in multi-word terms
            if (char === ' ' || char === '-' || char === "'" || char === "'") {
                result.push(this.FLEXIBLE_WORD_SEPARATOR);
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

    // Helper function to check if ranges overlap
    overlaps(range1, range2) {
        return !(range1.end <= range2.start || range1.start >= range2.end);
    },

    /**
     * Check if two characters are semantic variants of each other
     * (i.e., only differ by accents/diacritics)
     *
     * @param {string} char1 - First character
     * @param {string} char2 - Second character
     * @returns {boolean} True if characters are semantic variants
     */
    isSemanticVariant(char1, char2) {
        const c1 = char1.toLowerCase();
        const c2 = char2.toLowerCase();

        if (c1 === c2) return true;

        // Check if both characters are in the same CHARACTER_VARIANTS group
        for (const [base, variants] of Object.entries(this.CHARACTER_VARIANTS)) {
            const allChars = base + variants;
            if (allChars.includes(c1) && allChars.includes(c2)) {
                return true;
            }
        }
        return false;
    },

    /**
     * Check if two characters are obfuscation variants of each other
     * (i.e., leet speak substitutions like 'a' and '@')
     *
     * @param {string} char1 - First character
     * @param {string} char2 - Second character
     * @returns {boolean} True if characters are obfuscation variants
     */
    isObfuscationVariant(char1, char2) {
        const c1 = char1.toLowerCase();
        const c2 = char2.toLowerCase();

        if (c1 === c2) return true;

        // Check if both characters are in the same CHARACTER_OBFUSCATION group
        for (const [base, variants] of Object.entries(this.CHARACTER_OBFUSCATION)) {
            const allChars = base + variants;
            if (allChars.includes(c1) && allChars.includes(c2)) {
                return true;
            }
        }
        return false;
    },

    /**
     * Check if two strings differ only by semantic variants (accented characters)
     *
     * @param {string} text1 - First text
     * @param {string} text2 - Second text
     * @returns {boolean} True if differences are only semantic variants
     */
    isOnlySemanticDifference(text1, text2) {
        if (text1.length !== text2.length) return false;

        for (let i = 0; i < text1.length; i++) {
            if (!this.isSemanticVariant(text1[i], text2[i])) {
                return false;
            }
        }
        return true;
    },

    /**
     * Check if two strings differ only by obfuscation variants
     * (excluding semantic variants)
     *
     * @param {string} text1 - First text
     * @param {string} text2 - Second text
     * @returns {boolean} True if differences are only obfuscation variants
     */
    isOnlyObfuscationDifference(text1, text2) {
        if (text1.length !== text2.length) return false;

        for (let i = 0; i < text1.length; i++) {
            const c1 = text1[i];
            const c2 = text2[i];

            // If characters are the same, continue
            if (c1.toLowerCase() === c2.toLowerCase()) continue;

            // If semantic variant, that's not obfuscation-only
            if (this.isSemanticVariant(c1, c2)) {
                return false;
            }

            // Check if obfuscation variant
            if (!this.isObfuscationVariant(c1, c2)) {
                return false;
            }
        }
        return true;
    },

    /**
     * Count how many characters match exactly between two strings
     *
     * @param {string} text1 - First text
     * @param {string} text2 - Second text
     * @returns {number} Count of exactly matching characters
     */
    countExactCharMatches(text1, text2) {
        const minLen = Math.min(text1.length, text2.length);
        let count = 0;

        for (let i = 0; i < minLen; i++) {
            if (text1[i] === text2[i]) {
                count++;
            }
        }
        return count;
    },

    /**
     * Select the best match when multiple database terms match the same input text
     * with identical length and position. Prioritizes matches closer to original text.
     *
     * Priority hierarchy (exits as soon as winner found):
     * 1. Exact match (case-sensitive)
     * 2. Exact match (case-insensitive)
     * 3. Semantic variants only (accented characters)
     * 4. Obfuscation variants only (leet speak)
     * 5. Exact character count (highest score wins)
     *
     * @param {string} originalText - The actual text from input (not normalized)
     * @param {Array} matches - Array of match objects with same length and position
     * @returns {Object} The best match object
     */
    selectBestMatch(originalText, matches) {
        if (matches.length === 1) return matches[0];

        // 1. Exact match (case-sensitive)
        // Compare against the actual database variation that was matched, not the root
        for (const match of matches) {
            if (match.matchedVariation && match.matchedVariation === originalText) {
                return match;
            }
        }

        // 2. Exact match (case-insensitive)
        const lowerOriginal = originalText.toLowerCase();
        for (const match of matches) {
            if (match.matchedVariation && match.matchedVariation.toLowerCase() === lowerOriginal) {
                return match;
            }
        }

        // 3. Semantic variants only (accented characters)
        const semanticMatches = [];
        for (const match of matches) {
            if (this.isOnlySemanticDifference(originalText, match.term)) {
                semanticMatches.push(match);
            }
        }
        if (semanticMatches.length === 1) return semanticMatches[0];
        if (semanticMatches.length > 1) {
            matches = semanticMatches; // Narrow down for next level
        }

        // 4. Obfuscation variants only
        const obfuscationMatches = [];
        for (const match of matches) {
            if (this.isOnlyObfuscationDifference(originalText, match.term)) {
                obfuscationMatches.push(match);
            }
        }
        if (obfuscationMatches.length === 1) return obfuscationMatches[0];
        if (obfuscationMatches.length > 1) {
            matches = obfuscationMatches;
        }

        // 5. Count exact character matches
        let bestMatch = matches[0];
        let bestScore = this.countExactCharMatches(originalText, matches[0].term);

        for (let i = 1; i < matches.length; i++) {
            const score = this.countExactCharMatches(originalText, matches[i].term);
            if (score > bestScore) {
                bestScore = score;
                bestMatch = matches[i];
            }
        }

        return bestMatch;
    },

    /**
     * Build variation map for a term database
     * DRY helper - used by all matchers (CodedTermMatcher, HarmfulTermMatcher, etc.)
     */
    buildVariationMap(terms) {
        const variationMap = new Map();

        // Helper to add a variation and optionally its numeric-only form
        const addVariation = (varText, term) => {
            const lowerText = varText.toLowerCase();
            variationMap.set(lowerText, term);

            // If variation has numbers followed by trailing punctuation,
            // also add the numeric-only form
            // E.g., "13%" → also add "13"
            if (typeof NumberUtils !== 'undefined' && /\d/.test(varText)) {
                const numbers = NumberUtils.extractNumbers(varText);
                if (numbers.length > 0) {
                    const lastNum = numbers[numbers.length - 1];
                    // Check if there's trailing non-alphanumeric text after the last number
                    if (lastNum.end < varText.length) {
                        const trailingText = varText.substring(lastNum.end);
                        // If trailing text is just punctuation/symbols (no letters/digits),
                        // also add the form without the trailing text
                        if (/^[^\w]+$/.test(trailingText)) {
                            const withoutTrailing = varText.substring(0, lastNum.end);
                            if (withoutTrailing && withoutTrailing !== varText) {
                                variationMap.set(withoutTrailing.toLowerCase(), term);
                            }
                        }
                    }
                }
            }
        };

        terms.forEach(term => {
            // Always add the root term (lowercase only - normalization happens in createFlexiblePattern)
            // We just lowercase, not normalize, to preserve numbers and important punctuation
            addVariation(term.root, term);

            // Add all variations to the map (lowercase only - normalization happens in createFlexiblePattern)
            if (term.variations && term.variations.length > 0) {
                term.variations.forEach(variation => {
                    addVariation(variation, term);
                });
            }
        });
        return variationMap;
    }
};

// Build full character substitution, semantic maps and emoji regex
TextUtils.initCharacterSubstitutions();
TextUtils.initEmojiRegex();

// Export for use in modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = TextUtils;
}
