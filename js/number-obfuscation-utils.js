/**
 * NumberObfuscationUtils - Numeric obfuscation detection module
 *
 * Handles conversion between numeric digits and word forms to detect obfuscation
 * of numeric hate symbols (e.g., "1488" vs "fourteen eighty eight").
 *
 * Supports: 0-9999 range (4 digits max)
 * Features: Bidirectional matching, mixed forms, multiple word variations
 */

const NumberObfuscationUtils = {
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
     * Create segmented pattern for 2-4 digit numbers to support mixed forms
     * "28" → pattern matches "28", "2 8", "two 8", "2 eight", "two eight", "twenty eight"
     * "1488" → pattern matches "14 88", "fourteen 88", "14 eighty eight", "fourteen eighty eight", etc.
     *
     * @param {number} num - Number 10-9999
     * @returns {string} - Regex pattern
     */
    createSegmentedPattern(num) {
        const patterns = [];

        // DRY: Use shared flexible whitespace pattern
        // Use OPTIONAL to allow both "thirtythree" and "thirty three" to work
        const ws = typeof ObfuscationUtils !== 'undefined' ? ObfuscationUtils.FLEXIBLE_WHITESPACE_OPTIONAL : '[\\s\\-_#/]*';

        // Always include the full digit form
        patterns.push(String(num));

        // For 2-digit numbers (10-99): split into single digits
        if (num >= 10 && num < 100) {
            const tensDigit = Math.floor(num / 10);
            const onesDigit = num % 10;

            // Create pattern where each digit can be digit OR word (with character obfuscation)
            // First digit: "2" OR "two" (with obfuscation: "7w0")
            const firstDigitPatterns = [String(tensDigit)];
            const firstWords = this.numberToWords(tensDigit);
            firstWords.forEach(w => {
                // Apply character-level obfuscation if ObfuscationUtils is available
                if (typeof ObfuscationUtils !== 'undefined') {
                    firstDigitPatterns.push(ObfuscationUtils.createFlexiblePatternOriginal(w));
                } else {
                    firstDigitPatterns.push(w);
                }
            });
            const firstDigit = '(?:' + firstDigitPatterns.join('|') + ')';

            // Second digit: "8" OR "eight" (with obfuscation: "£igh7")
            const secondDigitPatterns = [String(onesDigit)];
            const secondWords = this.numberToWords(onesDigit);
            secondWords.forEach(w => {
                // Apply character-level obfuscation if ObfuscationUtils is available
                if (typeof ObfuscationUtils !== 'undefined') {
                    secondDigitPatterns.push(ObfuscationUtils.createFlexiblePatternOriginal(w));
                } else {
                    secondDigitPatterns.push(w);
                }
            });
            const secondDigit = '(?:' + secondDigitPatterns.join('|') + ')';

            // Combine with flexible whitespace between digits
            // Use OPTIONAL to allow "28", "2 8", "twentyeight", and "twenty eight"
            const ws = typeof ObfuscationUtils !== 'undefined' ? ObfuscationUtils.FLEXIBLE_WHITESPACE_OPTIONAL : '[\\s\\-_#/]*';
            patterns.push(firstDigit + ws + secondDigit);

            // Also add pattern for complete word form variants (e.g., "twenty 8", "7w£n7y eight")
            // This handles cases like "twenty eight" where the full word form can mix with digits
            const completeWords = this.numberToWords(num);
            if (completeWords.length > 0) {
                // "twenty eight" → extract "twenty" and "eight" parts
                const parts = completeWords[0].split(' ');
                if (parts.length === 2) {
                    // First part with obfuscation: "twenty"
                    const firstPartObfuscated = typeof ObfuscationUtils !== 'undefined'
                        ? ObfuscationUtils.createFlexiblePatternOriginal(parts[0])
                        : parts[0];
                    // Second part can be digit or word: "8" or "eight"
                    const secondPartPatterns = [String(onesDigit)];
                    if (typeof ObfuscationUtils !== 'undefined') {
                        secondPartPatterns.push(ObfuscationUtils.createFlexiblePatternOriginal(parts[1]));
                    } else {
                        secondPartPatterns.push(parts[1]);
                    }
                    const secondPart = '(?:' + secondPartPatterns.join('|') + ')';
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
                // Create pattern where each segment can be digit OR word (with character obfuscation)
                // First segment: "14" OR "fourteen"
                const firstSegmentPatterns = [String(firstTwo)];
                const firstWords = this.numberToWords(firstTwo);
                firstWords.forEach(w => {
                    if (typeof ObfuscationUtils !== 'undefined') {
                        // Apply obfuscation, then handle internal spaces
                        const obfuscated = ObfuscationUtils.createFlexiblePatternOriginal(w);
                        firstSegmentPatterns.push(obfuscated.split(' ').join(ws));
                    } else {
                        firstSegmentPatterns.push(w.split(' ').join(ws));
                    }
                });
                const firstSegment = '(?:' + firstSegmentPatterns.join('|') + ')';

                // Second segment: "88" OR "eighty eight"
                const lastSegmentPatterns = [String(lastTwo).padStart(2, '0')]; // Preserve leading zero
                const lastWords = this.numberToWords(lastTwo);
                lastWords.forEach(w => {
                    if (typeof ObfuscationUtils !== 'undefined') {
                        // Apply obfuscation, then handle internal spaces
                        const obfuscated = ObfuscationUtils.createFlexiblePatternOriginal(w);
                        lastSegmentPatterns.push(obfuscated.split(' ').join(ws));
                    } else {
                        lastSegmentPatterns.push(w.split(' ').join(ws));
                    }
                });
                const lastSegment = '(?:' + lastSegmentPatterns.join('|') + ')';

                // Combine with flexible whitespace between segments
                patterns.push(firstSegment + ws + lastSegment);

                // Also add "fourteen hundred eighty eight" style with obfuscated "hundred"
                const hundredPattern = typeof ObfuscationUtils !== 'undefined'
                    ? ObfuscationUtils.createFlexiblePatternOriginal('hundred')
                    : 'hundred';
                patterns.push(firstSegment + ws + hundredPattern + ws + lastSegment);
            } else {
                // Ends in 00: "1400" → "14 hundred" or "fourteen hundred"
                const firstSegmentPatterns = [String(firstTwo)];
                const firstWords = this.numberToWords(firstTwo);
                firstWords.forEach(w => {
                    if (typeof ObfuscationUtils !== 'undefined') {
                        const obfuscated = ObfuscationUtils.createFlexiblePatternOriginal(w);
                        firstSegmentPatterns.push(obfuscated.split(' ').join(ws));
                    } else {
                        firstSegmentPatterns.push(w.split(' ').join(ws));
                    }
                });
                const firstSegment = '(?:' + firstSegmentPatterns.join('|') + ')';
                const hundredPattern = typeof ObfuscationUtils !== 'undefined'
                    ? ObfuscationUtils.createFlexiblePatternOriginal('hundred')
                    : 'hundred';
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
                const hundredsObfuscated = typeof ObfuscationUtils !== 'undefined'
                    ? ObfuscationUtils.createFlexiblePatternOriginal(hundredsWord)
                    : hundredsWord;
                const remainderPatterns = [String(remainder)];
                const remainderWords = this.numberToWords(remainder);
                remainderWords.forEach(w => {
                    if (typeof ObfuscationUtils !== 'undefined') {
                        const obfuscated = ObfuscationUtils.createFlexiblePatternOriginal(w);
                        remainderPatterns.push(obfuscated.split(' ').join(ws));
                    } else {
                        remainderPatterns.push(w.split(' ').join(ws));
                    }
                });
                const remainderSegment = '(?:' + remainderPatterns.join('|') + ')';

                const hundredPattern = typeof ObfuscationUtils !== 'undefined'
                    ? ObfuscationUtils.createFlexiblePatternOriginal('hundred')
                    : 'hundred';
                patterns.push('(?:' + hundreds + '|' + hundredsObfuscated + ')[\\s\\-_#]+' + hundredPattern + ws + remainderSegment);
            }
        }

        // Also add complete word forms (without segmentation) with character obfuscation
        const completeWordForms = this.numberToWords(num);
        completeWordForms.forEach(wordForm => {
            if (typeof ObfuscationUtils !== 'undefined') {
                const obfuscated = ObfuscationUtils.createFlexiblePatternOriginal(wordForm);
                const flexibleForm = obfuscated.split(' ').join(ws);
                patterns.push(flexibleForm);
            } else {
                const flexibleForm = wordForm.split(' ').join(ws);
                patterns.push(flexibleForm);
            }
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
    module.exports = NumberObfuscationUtils;
}
