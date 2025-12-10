/**
 * NumberUtils - Numeric obfuscation detection module
 *
 * Handles conversion between numeric digits and word forms to detect obfuscation
 * of numeric hate symbols (e.g., "1488" vs "fourteen eighty eight").
 *
 * Supports: 0-9999 range (4 digits max)
 * Features: Bidirectional matching, mixed forms, multiple word variations
 */

const NumberUtils = {
    /**
     * Extract all numeric sequences from text
     * Returns array of {value, start, end} objects
     *
     * Examples:
     *   "1488" → [{value: 1488, start: 0, end: 4}]
     *   "14/88" → [{value: 14, start: 0, end: 2}, {value: 88, start: 3, end: 5}]
     *   "C18" → [{value: 18, start: 1, end: 3}]
     */
    extractNumbers(text) {
        const numbers = [];
        const regex = /\d+/g;
        let match;

        while ((match = regex.exec(text)) !== null) {
            const value = parseInt(match[0], 10);
            // Only handle numbers in our supported range (0-9999)
            if (value <= 9999) {
                numbers.push({
                    value: value,
                    start: match.index,
                    end: match.index + match[0].length
                });
            }
        }

        return numbers;
    },

    /**
     * Convert number to word form variations
     * Returns array of word strings
     *
     * Supports:
     * - Standard form: "one thousand four hundred eighty eight"
     * - With 'and': "one thousand four hundred and eighty eight"
     * - Informal grouping: "fourteen eighty eight"
     * - Informal with hundred: "fourteen hundred eighty eight"
     *
     * @param {number} num - Number to convert (0-9999)
     * @returns {string[]} - Array of word form variations
     */
    numberToWords(num) {
        if (num < 0 || num > 9999) {
            return [];
        }

        const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
        const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen',
                       'sixteen', 'seventeen', 'eighteen', 'nineteen'];
        const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

        // Helper: Convert 0-99 to words
        const twoDigitToWords = (n) => {
            if (n === 0) return '';
            if (n < 10) return ones[n];
            if (n < 20) return teens[n - 10];
            const tensDigit = Math.floor(n / 10);
            const onesDigit = n % 10;
            return tens[tensDigit] + (onesDigit ? ' ' + ones[onesDigit] : '');
        };

        // Helper: Convert 0-999 to words
        const threeDigitToWords = (n, includeAnd) => {
            if (n === 0) return '';

            const hundreds = Math.floor(n / 100);
            const remainder = n % 100;

            let result = '';
            if (hundreds > 0) {
                result = ones[hundreds] + ' hundred';
                if (remainder > 0) {
                    result += (includeAnd ? ' and ' : ' ') + twoDigitToWords(remainder);
                }
            } else {
                result = twoDigitToWords(remainder);
            }
            return result;
        };

        const variations = new Set();

        // Special case: zero
        if (num === 0) {
            variations.add('zero');
            return Array.from(variations);
        }

        const thousands = Math.floor(num / 1000);
        const remainder = num % 1000;

        // Standard forms (for all numbers)
        if (thousands > 0) {
            // "one thousand four hundred eighty eight" (without 'and')
            let standard = ones[thousands] + ' thousand';
            if (remainder > 0) {
                standard += ' ' + threeDigitToWords(remainder, false);
            }
            variations.add(standard);

            // "one thousand four hundred and eighty eight" (with 'and' before last two digits)
            if (remainder > 0 && remainder < 100) {
                // 'and' only before final two digits if remainder < 100
                variations.add(ones[thousands] + ' thousand and ' + twoDigitToWords(remainder));
            } else if (remainder >= 100) {
                // 'and' after hundreds if remainder >= 100
                variations.add(ones[thousands] + ' thousand ' + threeDigitToWords(remainder, true));
            }
        } else {
            // Less than 1000
            const standard = threeDigitToWords(num, false);
            if (standard) variations.add(standard);

            // With 'and' for 100-999
            if (num >= 100) {
                const withAnd = threeDigitToWords(num, true);
                if (withAnd) variations.add(withAnd);
            }
        }

        // Informal groupings for 3-4 digit numbers
        // "1488" → "fourteen eighty eight", "fourteen hundred eighty eight"
        if (num >= 100 && num <= 9999) {
            if (num >= 1000) {
                // 4-digit: split as "14 88" style
                const firstTwo = Math.floor(num / 100);
                const lastTwo = num % 100;

                if (firstTwo < 100 && lastTwo > 0) {
                    // "fourteen eighty eight"
                    variations.add(twoDigitToWords(firstTwo) + ' ' + twoDigitToWords(lastTwo));

                    // "fourteen hundred eighty eight"
                    if (lastTwo > 0) {
                        variations.add(twoDigitToWords(firstTwo) + ' hundred ' + twoDigitToWords(lastTwo));
                    }
                    // "fourteen hundred" (if last two digits are 00)
                } else if (firstTwo < 100 && lastTwo === 0) {
                    variations.add(twoDigitToWords(firstTwo) + ' hundred');
                }
            } else if (num >= 100) {
                // 3-digit: "hundred" forms already covered above
                // But add informal "X hundred Y" form
                const hundreds = Math.floor(num / 100);
                const remainder = num % 100;
                if (remainder > 0) {
                    variations.add(ones[hundreds] + ' hundred ' + twoDigitToWords(remainder));
                }
            }
        }

        // Remove any empty strings or undefined
        return Array.from(variations).filter(v => v && v.trim().length > 0);
    },

    /**
     * Create regex pattern that matches both digit and word forms
     * Supports MIXED forms like "14 eighty eight" by breaking number into segments
     *
     * @param {number} num - Number to create pattern for
     * @returns {string} - Regex pattern string (without delimiters)
     */
    createNumberPattern(num) {
        if (num < 0 || num > 9999) {
            // Fallback: just match the digits literally
            return String(num);
        }

        // For 2-4 digit numbers, create segmented pattern to support mixing
        // "28" → allows "2" OR "two", then space, then "8" OR "eight"
        // "1488" → allows "14" OR "fourteen", then space, then "88" OR "eighty eight"
        if (num >= 10 && num <= 9999) {
            return this.createSegmentedPattern(num);
        }

        // For single-digit numbers (0-9), simpler alternation is sufficient
        const wordForms = this.numberToWords(num);
        const patterns = [];

        // Add digit form
        patterns.push(String(num));

        // Add each word form
        wordForms.forEach(wordForm => {
            patterns.push(wordForm);
        });

        // Create alternation pattern: (?:pattern1|pattern2|...)
        return '(?:' + patterns.join('|') + ')';
    },

    /**
     * Helper: Apply character-level obfuscation and join multi-word forms
     * DRY helper to avoid repetition throughout createSegmentedPattern
     */
    obfuscateAndJoin(text, separator) {
        if (typeof TextUtils !== 'undefined') {
            const obfuscated = TextUtils.createCharacterPattern(text);
            return obfuscated.split(' ').join(separator);
        }
        return text.split(' ').join(separator);
    },

    /**
     * Helper: Create patterns for a digit value (digit OR word forms with obfuscation)
     * DRY helper to avoid repetition in segment pattern generation
     */
    createDigitPatterns(digitValue, separator) {
        const patterns = [String(digitValue)];
        const words = this.numberToWords(digitValue);
        words.forEach(w => {
            patterns.push(this.obfuscateAndJoin(w, separator));
        });
        return '(?:' + patterns.join('|') + ')';
    },

    /**
     * Create segmented pattern for 2-4 digit numbers to support mixed forms
     * "28" → pattern matches "28", "2 8", "two 8", "2 eight", "two eight", "twenty eight"
     * "1488" → pattern matches "14 88", "fourteen 88", "14 eighty eight", "fourteen eighty eight", etc.
     *
     * @param {number} num - Number 10-9999
     * @returns {string} - Regex pattern
     */
    createSegmentedPattern(num) {
        const patterns = [];

        // DRY: Use shared flexible word separator pattern (allows spaces between number segments)
        // Use FLEXIBLE_WORD_SEPARATOR to allow "thirty three six" to match "33/6"
        const ws = typeof TextUtils !== 'undefined' ? TextUtils.FLEXIBLE_WORD_SEPARATOR : '[\\s\\-_#/]*';

        // Always include the full digit form
        patterns.push(String(num));

        // For 2-digit numbers (10-99): split into single digits
        if (num >= 10 && num < 100) {
            const tensDigit = Math.floor(num / 10);
            const onesDigit = num % 10;

            // Use DRY helper to create patterns for each digit
            const firstDigit = this.createDigitPatterns(tensDigit, ws);
            const secondDigit = this.createDigitPatterns(onesDigit, ws);

            // Combine with flexible whitespace between digits
            // Allows "28", "2 8", "twentyeight", and "twenty eight"
            patterns.push(firstDigit + ws + secondDigit);

            // Also add pattern for complete word form variants (e.g., "twenty 8", "7w£n7y eight")
            // This handles cases like "twenty eight" where the full word form can mix with digits
            const completeWords = this.numberToWords(num);
            if (completeWords.length > 0) {
                // "twenty eight" → extract "twenty" and "eight" parts
                const parts = completeWords[0].split(' ');
                if (parts.length === 2) {
                    // First part with obfuscation: "twenty"
                    const firstPartObfuscated = this.obfuscateAndJoin(parts[0], ws);
                    // Second part can be digit or word: "8" or "eight"
                    const secondPart = this.createDigitPatterns(onesDigit, ws);
                    // Create pattern: (twenty)[\s\-_#]+(8|eight)
                    patterns.push(firstPartObfuscated + ws + secondPart);
                }
            }
        }

        // For 4-digit numbers: split into two 2-digit segments
        if (num >= 1000) {
            const firstTwo = Math.floor(num / 100);
            const lastTwo = num % 100;

            if (lastTwo > 0) {
                // Use DRY helpers to create segment patterns
                const firstSegment = this.createDigitPatterns(firstTwo, ws);
                const lastSegment = this.createDigitPatterns(lastTwo, ws);

                // Combine with flexible whitespace between segments
                patterns.push(firstSegment + ws + lastSegment);

                // Also add "fourteen hundred eighty eight" style with obfuscated "hundred"
                const hundredPattern = this.obfuscateAndJoin('hundred', ws);
                patterns.push(firstSegment + ws + hundredPattern + ws + lastSegment);
            } else {
                // Ends in 00: "1400" → "14 hundred" or "fourteen hundred"
                const firstSegment = this.createDigitPatterns(firstTwo, ws);
                const hundredPattern = this.obfuscateAndJoin('hundred', ws);
                patterns.push(firstSegment + ws + hundredPattern);
            }
        }

        // For 3-digit numbers: handle hundreds + remainder
        else if (num >= 100) {
            const hundreds = Math.floor(num / 100);
            const remainder = num % 100;

            if (remainder > 0) {
                // "X hundred Y" where X and Y can be digit or word (with character obfuscation)
                const hundredsWord = this.numberToWords(hundreds)[0]; // "one", "two", etc.
                const hundredsObfuscated = this.obfuscateAndJoin(hundredsWord, ws);
                const remainderSegment = this.createDigitPatterns(remainder, ws);
                const hundredPattern = this.obfuscateAndJoin('hundred', ws);

                // Pattern: (1|one)[\s\-_#]+(hundred)(remainder)
                patterns.push('(?:' + hundreds + '|' + hundredsObfuscated + ')' + ws + hundredPattern + ws + remainderSegment);
            }
        }

        // Also add complete word forms (without segmentation) with character obfuscation
        const completeWordForms = this.numberToWords(num);
        completeWordForms.forEach(wordForm => {
            patterns.push(this.obfuscateAndJoin(wordForm, ws));
        });

        return '(?:' + patterns.join('|') + ')';
    },

    /**
     * Expand a term containing numbers into all word form variations
     *
     * Examples:
     *   "1488" → ["1488", "fourteen eighty eight", "fourteen hundred eighty eight", ...]
     *   "88" → ["88", "eighty eight"]
     *   "14 words" → ["14 words", "fourteen words"]
     *
     * Note: This does NOT generate mixed forms (those are handled by createNumberPattern)
     *
     * @param {string} term - Term that may contain numbers
     * @returns {string[]} - Array of expanded variations
     */
    expandNumericTerm(term) {
        const numbers = this.extractNumbers(term);

        if (numbers.length === 0) {
            return [term];
        }

        // For each number, we'll generate variations
        // If multiple numbers exist, we generate all combinations
        const variations = new Set();
        variations.add(term); // Always include original

        // For simplicity, we'll only expand single-number terms or simple cases
        // Complex multi-number terms (like "14/88") rely on pattern matching
        if (numbers.length === 1) {
            const num = numbers[0];
            const wordForms = this.numberToWords(num.value);

            wordForms.forEach(wordForm => {
                // Replace the number in the original term with the word form
                const before = term.substring(0, num.start);
                const after = term.substring(num.end);
                const expanded = before + wordForm + after;
                variations.add(expanded);
            });
        }

        return Array.from(variations);
    }
};

// Export for use in modules (Node.js compatibility)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = NumberUtils;
}
