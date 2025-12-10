/**
 * Matchers for GoodBoy
 * Contains PatternMatcher, CodedTermMatcher, and HarmfulTermMatcher
 * Shared between webapp and tests for consistent behavior
 */

/**
 * Shared helper to trim matched text (DRY)
 * Removes trailing punctuation and non-alphanumeric chars after newlines
 */
function trimMatchedText(matchedText) {
    // Convert to array of proper Unicode characters (handles emojis correctly)
    const chars = Array.from(matchedText);
    let trimmedCount = chars.length;

    // Trim trailing non-alphanumeric characters (spaces, punctuation, etc.)
    // BUT preserve valid plurals and handle newline cases
    while (trimmedCount > 0) {
        const lastChar = chars[trimmedCount - 1];

        // SPECIAL CASE: trailing "s" or "S"
        if (lastChar.toLowerCase() === 's' && trimmedCount > 1) {
            let foundAlphanumeric = false;
            let foundWhitespace = false;

            // Look backwards for an alphanumeric with NO whitespace between it and the 's'
            for (let i = trimmedCount - 2; i >= 0; i--) {
                const ch = matchedText[i];

                if (/\s/.test(ch)) {
                    // ANY whitespace breaks the plural logic
                    foundWhitespace = true;
                    break;
                } else if (/[a-zA-Z0-9]/.test(ch)) {
                    foundAlphanumeric = true;
                    break;
                }
            }

            // Keep 's' only if it is directly attached (no whitespace) to an alphanumeric
            if (foundAlphanumeric && !foundWhitespace) {
                break; // Valid plural
            } else {
                trimmedCount--; // Not a plural → trim the 's'
                continue;
            }
        }

        // Stop trimming when encountering alphanumeric or emoji
        // Check alphanumeric first (fast), then check emoji using DRY system
        if (/[a-zA-Z0-9]/u.test(lastChar) || TextUtils.EMOJI_CONTAINS_REGEX.test(lastChar)) {
            break;
        }

        // Otherwise trim punctuation / whitespace / symbols
        trimmedCount--;
    }


    // Return the byte length of the trimmed string (not character count)
    // For emojis, we need to join the chars array and get its actual length
    const trimmedString = chars.slice(0, trimmedCount).join('');
    return trimmedString.length;
}

/**
 * Shared helper to analyze text and find matches (DRY)
 * Used by both CodedTermMatcher and HarmfulTermMatcher
 */
function analyzeTextWithVariations(text, variationMap, matchType) {
    // Normalize Unicode only (don't modify the text)
    const originalText = text.normalize('NFC');

    // For non-emoji matches, replace emojis with spaces to allow matching across emoji boundaries
    // This allows "False🐑Flag" to match "False Flag"
    // Use EMOJI_AT_START_REGEX to match complete emoji sequences at the start of substrings
    const emojiRegex = TextUtils.EMOJI_AT_START_REGEX;

    let textWithEmojiAsSpace = '';
    const positionMap = new Map(); // Maps position in textWithEmojiAsSpace -> position in originalText
    const reverseMap = new Map(); // Maps position in originalText -> position in textWithEmojiAsSpace
    const spaceInfo = new Map(); // Maps position in textWithEmojiAsSpace -> 'real' or 'emoji'

    let modifiedPos = 0;
    let originalPos = 0;

    while (originalPos < originalText.length) {
        const remainingText = originalText.substring(originalPos);
        const emojiMatch = remainingText.match(emojiRegex);

        // Check if there's an emoji at the current position
        if (emojiMatch) {
            // Found emoji at current position - replace with space
            const emojiLength = emojiMatch[0].length;
            textWithEmojiAsSpace += ' ';
            positionMap.set(modifiedPos, originalPos);
            reverseMap.set(originalPos, modifiedPos);
            spaceInfo.set(modifiedPos, 'emoji'); // Mark as emoji space
            modifiedPos++;
            originalPos += emojiLength;
        } else {
            // Regular character
            textWithEmojiAsSpace += originalText[originalPos];
            positionMap.set(modifiedPos, originalPos);
            reverseMap.set(originalPos, modifiedPos);
            // Track real spaces
            if (originalText[originalPos] === ' ') {
                spaceInfo.set(modifiedPos, 'real');
            }
            modifiedPos++;
            originalPos++;
        }
    }


    const allMatches = [];

    variationMap.forEach((termData, variation) => {
        const flexiblePattern = TextUtils.createFlexiblePattern(variation);
        const pluralPattern = flexiblePattern;

        // Check if variation contains any emoji (simple boolean check)
        const isEmoji = TextUtils.EMOJI_CONTAINS_REGEX.test(variation);

        const isNumericTerm = /^\d+$/.test(variation);
        const isLetterTerm = /^[a-z]+$/i.test(variation);
        const isMultiWord = /\s/.test(variation);

        // Use originalText for emoji matches, textWithEmojiAsSpace for non-emoji matches
        const searchText = isEmoji ? originalText : textWithEmojiAsSpace;
        const usePositionMap = !isEmoji; // Only use position map when searching in textWithEmojiAsSpace

        let regex;
        if (isNumericTerm) {
            regex = new RegExp(`${pluralPattern}`, 'gi');
        } else if (isEmoji) {
            // Emojis match anywhere - no word boundaries needed
            regex = new RegExp(`${pluralPattern}`, 'gi');
        } else if (isLetterTerm) {
            // Letter terms match without boundaries - filtering happens later
            regex = new RegExp(`${pluralPattern}`, 'gi');
        } else if (isMultiWord) {
            // Multi-word terms: require boundaries on BOTH sides to prevent matching across word boundaries
            // "inner city" matches standalone or in "stop inner city crime", but not "stopinnercitycrime" or "yet in these"
            regex = new RegExp(`(?:^|(?<![a-z0-9]))${pluralPattern}(?:(?![a-z0-9])|$)`, 'gi');
        } else {
            regex = new RegExp(`(?:^|(?<![a-z0-9]))${pluralPattern}(?:(?![a-z0-9])|$)`, 'gi');
        }

        let match;
        let lastIndex = -1;
        while ((match = regex.exec(searchText)) !== null) {

            if (match.index === lastIndex && match[0].length === 0) {
                regex.lastIndex++;
                continue;
            }
            lastIndex = match.index;

            // Convert position to original text if we're using position map
            let actualStartIndex, actualEndIndex;
            let matchStart = match.index;
            let matchEnd = match.index + match[0].length;

            if (usePositionMap) {
                // For single-word letter terms, skip leading/trailing emoji-spaces when mapping positions
                if (!isMultiWord && isLetterTerm) {
                    // Trim leading non-letter characters (both real spaces and emoji-spaces)
                    while (matchStart < matchEnd && !/[a-z]/i.test(textWithEmojiAsSpace[matchStart])) {
                        matchStart++;
                    }

                    // Trim trailing non-letter characters (both real spaces and emoji-spaces)
                    while (matchEnd > matchStart && !/[a-z]/i.test(textWithEmojiAsSpace[matchEnd - 1])) {
                        matchEnd--;
                    }
                }

                // Map from textWithEmojiAsSpace position to originalText position
                actualStartIndex = positionMap.get(matchStart) || 0;

                // Find end position: get the original position of the last character + 1
                const lastModifiedPos = matchEnd - 1;
                const lastOriginalPos = positionMap.get(lastModifiedPos) || originalText.length - 1;

                // End position is after the last character
                // We need to find how long the character at lastOriginalPos is
                const charAtEnd = originalText[lastOriginalPos];
                const codePoint = originalText.codePointAt(lastOriginalPos);

                // Check if it's a surrogate pair (emoji)
                if (codePoint >= 0x10000) {
                    actualEndIndex = lastOriginalPos + 2; // Surrogate pair
                } else {
                    actualEndIndex = lastOriginalPos + 1; // Regular character
                }

            } else {
                // Emoji matching - use direct positions from originalText
                actualStartIndex = match.index;
                actualEndIndex = match.index + match[0].length;
            }

            // Extract the matched text from original
            // For non-emoji matches, replace emoji-as-space with actual space for multi-word terms
            let matchedText;
            let actualEndIndexAdjusted = actualEndIndex;

            if (usePositionMap) {
                // Build the matched text character by character
                matchedText = '';
                let lastNonEmojiPos = actualStartIndex;

                // Loop through TRIMMED range (matchStart to matchEnd), not full match[0].length
                for (let modPos = matchStart; modPos < matchEnd; modPos++) {
                    const origPos = positionMap.get(modPos);

                    if (origPos !== undefined) {
                        const codePoint = originalText.codePointAt(origPos);
                        const isEmojiPos = (codePoint >= 0x1F300 && codePoint <= 0x1F9FF) ||
                            (codePoint >= 0x2600 && codePoint <= 0x26FF) ||
                            (codePoint >= 0x2700 && codePoint <= 0x27BF);

                        if (isEmojiPos && match[0][modPos - match.index] === ' ') {
                            // This is an emoji that's acting as whitespace
                            if (isMultiWord) {
                                // Multi-word term: replace emoji with space
                                matchedText += ' ';
                            } else {
                                // Single-word term: adjust end position to exclude emoji
                                actualEndIndexAdjusted = origPos;
                            }
                            // Don't add emoji itself
                        } else if (!isEmojiPos) {
                            // Regular character - add it
                            if (codePoint >= 0x10000) {
                                // Surrogate pair
                                matchedText += String.fromCodePoint(codePoint);
                                lastNonEmojiPos = origPos + 2;
                            } else {
                                matchedText += originalText[origPos];
                                lastNonEmojiPos = origPos + 1;
                            }
                        }
                    }
                }

                // If we didn't adjust for emoji, use the last non-emoji position
                if (actualEndIndexAdjusted === actualEndIndex && !isMultiWord) {
                    actualEndIndexAdjusted = lastNonEmojiPos;
                }
            } else {
                matchedText = originalText.substring(actualStartIndex, actualEndIndex);
            }

            // Check if match contains emoji (skip if so, to prevent "Campbe🐑llite" matching "Campbellite")
            // Use EMOJI_CONTAINS_REGEX for simple boolean check
            if (TextUtils.EMOJI_CONTAINS_REGEX.test(matchedText)) {
                if (!isEmoji) {
                    continue;
                }
            }

            if (isMultiWord && usePositionMap && match[0].includes(' ')) {
                let hasEmojiSpace = false;
                const spacePositions = [];

                // Find all spaces and check if they're emojis
                for (let i = 0; i < match[0].length; i++) {
                    if (match[0][i] === ' ') {
                        const spacePos = match.index + i;
                        if (spaceInfo.get(spacePos) === 'emoji') {
                            hasEmojiSpace = true;
                            spacePositions.push({ modPos: spacePos, origPos: positionMap.get(spacePos) });
                        }
                    }
                }

                if (hasEmojiSpace) {
                    // Split at emoji positions to create separate match objects for each word segment
                    // This handles both:
                    // - All spaces are emojis: "all🐑men👃are🐑trash" → [all][men][are][trash]
                    // - Mixed emoji and real spaces: "all🐑men are trash" → [all][men are trash]

                    // Sort emoji positions by their original text position
                    spacePositions.sort((a, b) => a.origPos - b.origPos);

                    let currentOrigPos = actualStartIndex;

                    for (let i = 0; i <= spacePositions.length; i++) {
                        let segmentEnd;

                        if (i < spacePositions.length) {
                            // End at the emoji position
                            segmentEnd = spacePositions[i].origPos;
                        } else {
                            // Last segment - end at the match end
                            segmentEnd = actualEndIndex;
                        }

                        // Skip if empty segment
                        if (currentOrigPos >= segmentEnd) {
                            if (i < spacePositions.length) {
                                // Skip the emoji and continue to next segment
                                const emojiLength = originalText.substring(spacePositions[i].origPos).match(emojiRegex)?.[0]?.length || 2;
                                currentOrigPos = spacePositions[i].origPos + emojiLength;
                            }
                            continue;
                        }

                        // Create a match object for this segment
                        const segmentText = originalText.substring(currentOrigPos, segmentEnd);
                        const segmentMatch = {
                            start: currentOrigPos,
                            end: segmentEnd,
                            length: segmentText.length,
                            text: matchedText,  // Keep original matched text
                            type: matchType,
                            term: termData.root,
                            category: termData.category,
                            definition: termData.definition,
                            variations: termData.variations,
                            source: termData.source,
                            isNumeric: isNumericTerm,
                            isSegment: true,  // Mark as a segment of a multi-word match
                            parentTerm: termData.root  // Track the parent term
                        };

                        allMatches.push(segmentMatch);

                        // Move past this segment and the emoji
                        if (i < spacePositions.length) {
                            const emojiLength = originalText.substring(spacePositions[i].origPos).match(emojiRegex)?.[0]?.length || 2;
                            currentOrigPos = spacePositions[i].origPos + emojiLength;
                        }
                    }

                    // Skip creating the full match object since we created segments
                    continue;
                }
            }

            // For single-word terms, check if the match contains a space that's actually an emoji IN THE MIDDLE
            // Emojis at the start/end are OK, but emojis in the middle break the word
            // (e.g., "zo🐑g" should NOT match "zog", but "zog🐑" or "🐑zog" should match "zog")
            if (!isMultiWord && usePositionMap && match[0].includes(' ')) {
                // Trim leading and trailing non-letter characters to find the actual term boundaries
                let trimStart = 0;
                let trimEnd = 0;

                while (trimStart < match[0].length && !/[a-z]/i.test(match[0][trimStart])) {
                    trimStart++;
                }
                while (trimEnd < match[0].length && !/[a-z]/i.test(match[0][match[0].length - 1 - trimEnd])) {
                    trimEnd++;
                }

                // After trimming, check if there are STILL spaces in the trimmed portion
                // Those would be IN THE MIDDLE of the term
                const trimmedPortion = match[0].substring(trimStart, match[0].length - trimEnd);

                if (trimmedPortion.includes(' ')) {
                    // Check if those middle spaces are emojis
                    let hasMiddleEmojiSpace = false;
                    for (let i = trimStart; i < match[0].length - trimEnd; i++) {
                        if (match[0][i] === ' ') {
                            const origPos = positionMap.get(match.index + i);
                            if (origPos !== undefined) {
                                const codePoint = originalText.codePointAt(origPos);
                                if (codePoint >= 0x1F300 && codePoint <= 0x1F9FF ||
                                    codePoint >= 0x2600 && codePoint <= 0x26FF ||
                                    codePoint >= 0x2700 && codePoint <= 0x27BF) {
                                    hasMiddleEmojiSpace = true;
                                    break;
                                }
                            }
                        }
                    }

                    if (hasMiddleEmojiSpace) {
                        continue; // Skip this match
                    }
                }
            }

            // Use shared trimming logic (DRY)
            let trimmedLength = trimMatchedText(matchedText);

            if (trimmedLength < matchedText.length) {
                const originalMatchedText = matchedText;
                matchedText = matchedText.substring(0, trimmedLength);

                // For position-mapped matches, we need to adjust actualEndIndexAdjusted
                // Walk back from the end position for each trimmed character
                if (usePositionMap) {
                    const charsTrimmed = originalMatchedText.length - trimmedLength;
                    // Walk back from the end position
                    let tempEndIndex = actualEndIndexAdjusted;
                    for (let i = 0; i < charsTrimmed; i++) {
                        tempEndIndex--;
                        // Skip over surrogate pairs
                        const prevCodePoint = originalText.codePointAt(tempEndIndex - 1);
                        if (prevCodePoint >= 0x10000) {
                            tempEndIndex--;
                        }
                    }
                    actualEndIndexAdjusted = tempEndIndex;
                }

                if (matchedText.length === 0) {
                    continue;
                }
            }

            // Numeric validation
            const matchIsDigits = /^\d+$/.test(matchedText);
            const matchIsMultiDigit = matchIsDigits && matchedText.length >= 2;
            const matchContainsDigit = /\d/.test(matchedText);

            // Check if the match location in the ORIGINAL text is part of a number sequence
            // This catches cases like "abo" matching inside "4809" where the pattern matched
            // letters but the actual text at that position is digits
            const originalTextAtMatch = originalText.substring(actualStartIndex, actualEndIndex);
            // Remove commas before checking if it's digits (to handle "4,809" as "4809")
            const originalWithoutCommas = originalTextAtMatch.replace(/,/g, '');
            const matchedOriginalIsDigits = /^\d+$/.test(originalWithoutCommas);
            const matchedOriginalContainsDigit = /\d/.test(originalTextAtMatch);

            const isExactVariationMatch = matchedText.toLowerCase() === variation.toLowerCase();
            const variationHasPunctSeparatedNumbers = /\d[\s\-_\/]+\d/.test(variation);
            const matchHasSpaceSeparatedNumbers = /\d\s+\d/.test(matchedText);

            // Skip numeric validation if:
            // 1. It's an exact match to a non-numeric variation, OR
            // 2. The variation itself has punctuation-separated numbers (like "33/6"), OR
            // 3. It's NOT a purely numeric term AND NOT purely digits AND the original text at match position is also not digits
            const skipValidation = (isExactVariationMatch && !isNumericTerm && !matchIsDigits) ||
                (variationHasPunctSeparatedNumbers && matchHasSpaceSeparatedNumbers) ||
                (!isNumericTerm && !matchIsDigits && !matchedOriginalIsDigits);

            if (!skipValidation && (isNumericTerm || matchIsMultiDigit || matchContainsDigit || matchedOriginalContainsDigit)) {
                const matchStart = actualStartIndex;
                const matchEnd = actualEndIndex;

                let countBefore = 0;
                let countAfter = 0;

                const isDigitMatch = /^\d+$/.test(matchedText);
                const isLetterMatch = /^[a-z]+$/i.test(matchedText);
                const isMixedMatch = !isDigitMatch && !isLetterMatch;

                if (isDigitMatch) {
                    // Count digits before, skipping commas in numbers (e.g., "4,809")
                    for (let i = matchStart - 1; i >= 0; i--) {
                        if (/\d/.test(originalText[i])) {
                            countBefore++;
                        } else if (originalText[i] === ',' && i > 0 && /\d/.test(originalText[i - 1])) {
                            // Skip comma if it's between digits (thousands separator)
                            continue;
                        } else {
                            break; // Stop at non-digit, non-comma
                        }
                    }
                    // Count digits after, skipping commas
                    for (let i = matchEnd; i < originalText.length; i++) {
                        if (/\d/.test(originalText[i])) {
                            countAfter++;
                        } else if (originalText[i] === ',' && i + 1 < originalText.length && /\d/.test(originalText[i + 1])) {
                            // Skip comma if it's between digits
                            continue;
                        } else {
                            break;
                        }
                    }
                } else if (isLetterMatch) {
                    // Same logic for letter matches that might be in numbers
                    for (let i = matchStart - 1; i >= 0; i--) {
                        if (/\d/.test(originalText[i])) {
                            countBefore++;
                        } else if (originalText[i] === ',' && i > 0 && /\d/.test(originalText[i - 1])) {
                            continue;
                        } else {
                            break;
                        }
                    }
                    for (let i = matchEnd; i < originalText.length; i++) {
                        if (/\d/.test(originalText[i])) {
                            countAfter++;
                        } else if (originalText[i] === ',' && i + 1 < originalText.length && /\d/.test(originalText[i + 1])) {
                            continue;
                        } else {
                            break;
                        }
                    }
                } else if (isMixedMatch) {
                    for (let i = 0; i < matchedText.length; i++) {
                        if (/\d/.test(matchedText[i])) {
                            const digitPos = matchStart + i;
                            let digitCountBefore = 0;
                            for (let j = digitPos - 1; j >= 0; j--) {
                                if (/\d/.test(originalText[j])) {
                                    digitCountBefore++;
                                } else if (originalText[j] === ',' && j > 0 && /\d/.test(originalText[j - 1])) {
                                    continue;
                                } else {
                                    break;
                                }
                            }
                            let digitCountAfter = 0;
                            for (let j = digitPos + 1; j < originalText.length; j++) {
                                if (/\d/.test(originalText[j])) {
                                    digitCountAfter++;
                                } else if (originalText[j] === ',' && j + 1 < originalText.length && /\d/.test(originalText[j + 1])) {
                                    continue;
                                } else {
                                    break;
                                }
                            }
                            countBefore = Math.max(countBefore, digitCountBefore);
                            countAfter = Math.max(countAfter, digitCountAfter);
                        }
                    }
                }

                const extraChars = countBefore + countAfter;
                const seqStart = matchStart - countBefore;
                const seqEnd = matchEnd + countAfter;
                const charBefore = seqStart > 0 ? originalText[seqStart - 1] : '';
                const charAfter = seqEnd < originalText.length ? originalText[seqEnd] : '';

                const hasLetterBefore = /[a-z]/i.test(charBefore);
                const hasLetterAfter = /[a-z]/i.test(charAfter);

                if (!hasLetterBefore && !hasLetterAfter && extraChars > 0) {
                    let hasKnownOverlap = false;

                    if (countBefore > 0 && variationMap.has(originalText.substring(seqStart, matchStart))) {
                        hasKnownOverlap = true;
                    }
                    if (countAfter > 0 && variationMap.has(originalText.substring(matchEnd, seqEnd))) {
                        hasKnownOverlap = true;
                    }

                    if (!hasKnownOverlap) {
                        continue;
                    }
                }
            }

            const matchObj = {
                start: actualStartIndex,
                end: usePositionMap ? actualEndIndexAdjusted : actualEndIndex,
                length: matchedText.length,
                text: matchedText,
                type: matchType,
                term: termData.root,
                category: termData.category,
                definition: termData.definition,
                variations: termData.variations,
                source: termData.source,
                isNumeric: isNumericTerm,
                isLetterTerm: isLetterTerm  // For overlap detection (like isNumeric)
            };

            allMatches.push(matchObj);
        }
    });

    return allMatches;
}

/**
 * Filter letter terms to only keep those where entire word is made of database letter terms
 * Shared by both CodedTermMatcher and HarmfulTermMatcher (DRY)
 * @param {Array} matches - Array of matches to filter
 * @param {string} text - Original text being analyzed
 * @returns {Array} Filtered matches
 */
function filterLetterTerms(matches, text) {
    const filteredMatches = [];
    // Use EMOJI_AT_START_REGEX to match complete emoji sequences at the start of substrings
    const emojiRegex = TextUtils.EMOJI_AT_START_REGEX;

    let textForBoundaryCheck = '';
    const originalToNormalized = new Map(); // Maps original position to normalized position

    let normalizedPos = 0;
    let originalPos = 0;
    while (originalPos < text.length) {
        const remainingText = text.substring(originalPos);
        const emojiMatch = remainingText.match(emojiRegex);

        if (emojiMatch) {
            // Emoji found - replace with single space
            const emojiLength = emojiMatch[0].length;
            // Map all positions in the emoji to the same normalized position
            for (let i = 0; i < emojiLength; i++) {
                originalToNormalized.set(originalPos + i, normalizedPos);
            }
            textForBoundaryCheck += ' ';
            normalizedPos++;
            originalPos += emojiLength;
        } else {
            // Regular character
            originalToNormalized.set(originalPos, normalizedPos);
            textForBoundaryCheck += text[originalPos];
            normalizedPos++;
            originalPos++;
        }
    }

    for (const match of matches) {
        if (match.isLetterTerm) {

            // Map match positions from original text to normalized text
            const normalizedStart = originalToNormalized.get(match.start);
            const normalizedEnd = originalToNormalized.get(match.end - 1) + 1; // End is exclusive, so map (end-1) and add 1

            // Find word boundaries in the emoji-normalized text
            let wordStart = normalizedStart;
            while (wordStart > 0 && /[a-z]/i.test(textForBoundaryCheck[wordStart - 1])) {
                wordStart--;
            }
            let wordEnd = normalizedEnd;
            while (wordEnd < textForBoundaryCheck.length && /[a-z]/i.test(textForBoundaryCheck[wordEnd])) {
                wordEnd++;
            }

            const word = textForBoundaryCheck.substring(wordStart, wordEnd);

            // Check if entire word is covered by letter-term matches
            const wordLength = wordEnd - wordStart;
            const coverage = new Array(wordLength).fill(false);

            for (const m of matches) {
                if (m.isLetterTerm) {
                    const mNormStart = originalToNormalized.get(m.start);
                    const mNormEnd = originalToNormalized.get(m.end - 1) + 1;

                    if (mNormStart >= wordStart && mNormEnd <= wordEnd) {
                        for (let i = mNormStart; i < mNormEnd; i++) {
                            coverage[i - wordStart] = true;
                        }
                    }
                }
            }

            const fullyCovered = coverage.every(c => c);

            if (fullyCovered) {
                // Entire word is covered by database letter terms - allow it
                filteredMatches.push(match);
            }
            // else: reject - word isn't entirely made of database terms
        } else {
            // Not a letter term, keep it
            filteredMatches.push(match);
        }
    }
    return filteredMatches;
}

const PatternMatcher = {
    patterns: [],
    place_demonym_lookup_loaded: false,
    lookupRegistry: {}, // Store all lookup tables here for extensibility

    // Register a lookup table (places, religionyms, etc.)
    registerLookup(name, lookupTable, options = {}) {
        this.lookupRegistry[name] = {
            table: lookupTable,
            getAllVariants: options.getAllVariants || (() => lookupTable.getAllVariants()),
            findByVariant: options.findByVariant || ((v) => lookupTable.findPlaceByVariant(v)),
            getHierarchicalItems: options.getHierarchicalItems || ((v) => lookupTable.getAllDemonymsWithHierarchy(v)),
            typeMapping: {} // Will store variant -> type mapping
        };
    },

    // Scan text for all registered lookup types
    // Returns: { place: Set([...]), demonym: Set([...]), religionym: Set([...]), ... }
    scanTextForLookups(text) {
        const lowerText = text.toLowerCase();
        const found = {};

        Object.keys(this.lookupRegistry).forEach(lookupName => {
            const lookup = this.lookupRegistry[lookupName];
            found[lookupName] = new Map(); // variant -> {data, hierarchical items}

            const allVariants = lookup.getAllVariants();
            allVariants.forEach(variant => {
                // Use flexible pattern matching to detect obfuscated place names
                // e.g., "7éx@$" should match "texas"
                const variantLower = variant.toLowerCase();
                const flexiblePattern = TextUtils.createFlexiblePattern(variantLower);
                const regex = new RegExp(flexiblePattern, 'gi');

                if (regex.test(lowerText)) {
                    const variantData = lookup.findByVariant(variant);
                    const hierarchicalItems = lookup.getHierarchicalItems(variant);

                    found[lookupName].set(variant, {
                        data: variantData,
                        hierarchical: hierarchicalItems
                    });

                    // Also check if any hierarchical items are in text
                    hierarchicalItems.forEach(item => {
                        const itemText = item.demonym || item.religionym || item.name; // Generic: works for demonyms, religionyms, etc.
                        if (itemText) {
                            const itemTextLower = itemText.toLowerCase();
                            const itemFlexiblePattern = TextUtils.createFlexiblePattern(itemTextLower);
                            const itemRegex = new RegExp(itemFlexiblePattern, 'gi');

                            if (itemRegex.test(lowerText)) {
                                // Store found hierarchical items too
                                if (!found[lookupName + '_hierarchical']) {
                                    found[lookupName + '_hierarchical'] = new Map();
                                }
                                if (!found[lookupName + '_hierarchical'].has(itemTextLower)) {
                                    found[lookupName + '_hierarchical'].set(itemTextLower, []);
                                }
                                found[lookupName + '_hierarchical'].get(itemTextLower).push({
                                    variant: variant,
                                    item: item
                                });
                            }
                        }
                    });
                }
            });
        });

        return found;
    },

    // Initialize by extracting patterns from coded terms
    initialize(codedTerms) {
        if (typeof PLACE_DEMONYM_LOOKUP === 'undefined') {
            console.warn('Place-demonym lookup not loaded yet, pattern matching disabled');
            return;
        }

        // Build indices for fast lookups
        PLACE_DEMONYM_LOOKUP.buildIndices();

        // Register place/demonym lookup (can add more lookups in the future)
        this.registerLookup('place_demonym', PLACE_DEMONYM_LOOKUP);

        // Register religionym lookup
        if (typeof RELIGION_RELIGIONYM_LOOKUP !== 'undefined') {
            RELIGION_RELIGIONYM_LOOKUP.buildIndices();
            this.registerLookup('religion_religionym', RELIGION_RELIGIONYM_LOOKUP, {
                getAllVariants: () => RELIGION_RELIGIONYM_LOOKUP.getAllVariants(),
                findByVariant: (v) => RELIGION_RELIGIONYM_LOOKUP.findReligionByReligionym(v),
                getHierarchicalItems: (v) => RELIGION_RELIGIONYM_LOOKUP.getAllReligionymsWithHierarchy(v)
            });
        }

        this.place_demonym_lookup_loaded = true;
        this.allPlaces = PLACE_DEMONYM_LOOKUP.getAllVariants();

        // Build place → type mapping for backward compatibility
        this.placeTypes = {};
        ['country', 'region', 'city'].forEach(type => {
            const places = PLACE_DEMONYM_LOOKUP.getPlacesByType(type);
            places.forEach(place => {
                place.variants.forEach(variant => {
                    this.placeTypes[variant.toLowerCase()] = type;
                });
            });
        });

        // Extract patterns from coded terms
        this.extractPatterns(codedTerms);
    },

    // Extract patterns from existing coded terms
    extractPatterns(codedTerms) {
        const seenPatterns = new Set(); // Deduplicate by pattern text

        codedTerms.forEach(dw => {
            // SKIP if not dynamic mode - location-specific patterns shouldn't generate variations
            if (!dw.categoryMode || dw.categoryMode !== 'dynamic') {
                return; // Don't extract pattern - location-specific (e.g., "Israel Lobby", "China Virus")
            }

            // Process root AND all variations
            const termsToCheck = [dw.root, ...(dw.variations || [])];

            termsToCheck.forEach(term => {
                let placeFound = this.findPlaceInText(term);
                let demonymFound = this.findDemonymInText(term);
                let religionymFound = this.findReligionymInText(term);

                // If both place and demonym found, check if they overlap
                // If they overlap, choose the longer match (e.g., "Americans" over "America")
                if (placeFound && demonymFound) {
                    const lowerTerm = term.toLowerCase();
                    const placeIndex = lowerTerm.indexOf(placeFound.place.toLowerCase());
                    const demonymIndex = lowerTerm.indexOf(demonymFound.demonym.toLowerCase());
                    const placeEnd = placeIndex + placeFound.place.length;
                    const demonymEnd = demonymIndex + demonymFound.demonym.length;

                    // Check for overlap: ranges overlap if start < otherEnd AND end > otherStart
                    if (placeIndex < demonymEnd && placeEnd > demonymIndex) {
                        // They overlap - choose the longer one
                        if (demonymFound.demonym.length > placeFound.place.length) {
                            placeFound = null; // Keep demonym
                        } else {
                            demonymFound = null; // Keep place
                        }
                    }
                    // If no overlap, keep both (e.g., "Keep England English")
                }

                // 3. Create pattern with placeholders
                let patternText = term.toLowerCase();
                let placeholders = [];
                let demonymForm = null;
                let basePlace = null;

                if (placeFound && demonymFound) {
                    // Both place and demonym → two placeholders
                    // Replace place first, then demonym to avoid conflicts
                    patternText = patternText
                        .replace(placeFound.matchedText.toLowerCase(), '[place]')
                        .replace(demonymFound.demonym.toLowerCase(), '[demonym]');

                    placeholders = ['place', 'demonym'];
                    demonymForm = demonymFound.form;

                } else if (placeFound) {
                    // Only place → single placeholder (like "America First")
                    patternText = patternText.replace(placeFound.matchedText.toLowerCase(), '[place]');
                    placeholders = ['place'];

                } else if (demonymFound) {
                    // Only demonym → reverse-lookup place, single placeholder
                    patternText = patternText.replace(demonymFound.demonym.toLowerCase(), '[demonym]');
                    placeholders = ['demonym'];
                    demonymForm = demonymFound.form;
                    basePlace = demonymFound.place;
                }

                // RELIGIONYM PATTERN EXTRACTION
                // If we found a demonym, ALSO create a [religionym] pattern variant
                // This allows "England for the English" to match "Wales for Christians"
                if (demonymFound && religionymFound === null) {
                    // Start from the ALREADY PROCESSED patternText that has place/demonym replaced
                    // Then replace [demonym] (or demonym if only demonym found) with [religionym]
                    let religionymPatternText;

                    if (placeFound && demonymFound) {
                        // Pattern already has [place] and [demonym], replace [demonym] with [religionym]
                        religionymPatternText = patternText.replace('[demonym]', '[religionym]');
                    } else if (demonymFound) {
                        // Pattern has [demonym], replace it with [religionym]
                        religionymPatternText = patternText.replace('[demonym]', '[religionym]');
                    }

                    if (religionymPatternText) {
                        // Check that there's context around the placeholder
                        const hasContext = religionymPatternText
                            .replace(/\[place\]/g, '')
                            .replace(/\[religionym\]/g, '')
                            .trim().length > 0;

                        if (hasContext && !seenPatterns.has(religionymPatternText)) {
                            seenPatterns.add(religionymPatternText);
                            const religionymPattern = {
                                original: term,
                                pattern: religionymPatternText,
                                placeholders: placeFound ? ['place', 'religionym'] : ['religionym'],
                                religionymForm: demonymFound.demonym,  // Store what demonym was replaced
                                basePlace: placeFound ? null : basePlace,  // Keep basePlace for demonym-only patterns
                                codedTerm: dw
                            };
                            this.patterns.push(religionymPattern);
                        }
                    }
                }

                // Only add pattern if we found at least one placeholder and there's context
                if (placeholders.length > 0) {
                    // Check that there's context around the placeholder(s)
                    const hasContext = patternText.replace(/\[place\]/g, '').replace(/\[demonym\]/g, '').trim().length > 0;

                    if (hasContext) {
                        // Deduplicate: only add if we haven't seen this pattern text before
                        if (!seenPatterns.has(patternText)) {
                            seenPatterns.add(patternText);
                            const pattern = {
                                original: term,
                                pattern: patternText,
                                placeholders: placeholders,
                                demonymForm: demonymForm,
                                basePlace: basePlace, // For demonym-only patterns
                                originalPlace: placeFound ? placeFound.matchedText : null, // Store original place name
                                originalDemonym: demonymFound ? demonymFound.demonym : null, // Store original demonym
                                codedTerm: dw
                            };
                            this.patterns.push(pattern);
                        }
                    }
                }
            });
        });
        console.log(`✓ Extracted ${this.patterns.length} dynamic patterns`);
    },

    // Find place names in text
    findPlaceInText(text) {
        const lowerText = text.toLowerCase();

        // Iterate through all place variants and check if they appear in text
        for (const placeVariant of this.allPlaces) {
            const lowerPlace = placeVariant.toLowerCase();
            const regex = new RegExp(`\\b${lowerPlace}\\b`, 'i');

            if (regex.test(text)) {
                const placeData = PLACE_DEMONYM_LOOKUP.findPlaceByVariant(placeVariant);
                if (placeData) {
                    return {
                        place: placeData.canonical,
                        type: placeData.type,
                        isGroup: false,
                        matchedText: placeVariant  // Add the actual matched variant
                    };
                }
            }
        }

        return null;
    },

    // Find demonym in text and return place info (includes hierarchical demonyms)
    findDemonymInText(text) {
        const lowerText = text.toLowerCase();

        // Iterate through all places and check if any of their demonyms (including hierarchical) appear in text
        for (const placeVariant of this.allPlaces) {
            // Get ALL demonyms including hierarchical ones (e.g., Rome → Italian, European)
            const allDemonyms = PLACE_DEMONYM_LOOKUP.getAllDemonymsWithHierarchy(placeVariant);

            for (const demonymObj of allDemonyms) {
                const regex = new RegExp(`\\b${demonymObj.demonym}\\b`, 'i');
                if (regex.test(text)) {
                    return {
                        demonym: demonymObj.demonym,
                        place: demonymObj.place,  // The place this demonym comes from (could be parent)
                        type: PLACE_DEMONYM_LOOKUP.findPlaceByVariant(placeVariant).type,
                        basePlace: placeVariant  // The base place we're checking
                    };
                }
            }
        }

        return null;
    },

    // Find religionym in text and return religion info
    findReligionymInText(text) {
        if (!RELIGION_RELIGIONYM_LOOKUP) return null;

        const lowerText = text.toLowerCase();
        const allReligionyms = RELIGION_RELIGIONYM_LOOKUP.getAllReligionyms();

        // Sort by length (longest first) to match multi-word religionyms first
        const sortedReligionyms = allReligionyms.sort((a, b) => b.length - a.length);

        for (const religionym of sortedReligionyms) {
            const religionymLower = religionym.toLowerCase();
            // Escape special regex characters
            const escapedReligionym = religionymLower.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            const regex = new RegExp(`\\b${escapedReligionym}\\b`, 'i');

            if (regex.test(lowerText)) {
                const religionData = RELIGION_RELIGIONYM_LOOKUP.findReligionByReligionym(religionym);

                return {
                    religionym: religionym,
                    religion: religionData ? religionData.canonical : null,
                    matchedText: religionym
                };
            }
        }

        return null;
    },

    // Analyze text for pattern matches
    analyze(text) {

        if (!this.place_demonym_lookup_loaded || this.patterns.length === 0) {
            console.log(
                'Pattern matching skipped:',
                !this.place_demonym_lookup_loaded ? 'place_demonym_lookup not loaded' : 'no patterns'
            );
            return { matches: [] };
        }

        const potentialMatches = [];
        const lowerText = text.toLowerCase();

        // PERFORMANCE OPTIMIZATION: Scan text once for all lookups
        const foundInText = this.scanTextForLookups(text);
        const foundPlaces = foundInText.place_demonym || new Map();
        const foundDemonyms = foundInText.place_demonym_hierarchical || new Map();

        // Early exit if no places or demonyms found
        if (foundPlaces.size === 0 && foundDemonyms.size === 0) {
            return { matches: [] };
        }

        // Only check patterns for places we actually found in the text
        this.patterns.forEach(pattern => {
            const placesToCheck = Array.from(foundPlaces.keys());

            placesToCheck.forEach(placeVariant => {
                const placeData = PLACE_DEMONYM_LOOKUP.findPlaceByVariant(placeVariant);
                if (!placeData) return;

                // Get ALL demonyms including hierarchical ones (e.g., Rome → Roman, Italian, European)
                const allDemonymObjs = PLACE_DEMONYM_LOOKUP.getAllDemonymsWithHierarchy(placeVariant);
                let expectedTexts = [];

                if (pattern.placeholders.includes('place') && pattern.placeholders.includes('demonym')) {
                    allDemonymObjs.forEach(demonymObj => {
                        const expected = pattern.pattern
                            .replace('[place]', placeVariant)    // preserve dataset variant capitalization
                            .replace('[demonym]', demonymObj.demonym);     // preserve demonym capitalization
                        expectedTexts.push({ text: expected, demonym: demonymObj.demonym, demonymObj: demonymObj, isGroup: true });
                    });

                } else if (pattern.placeholders.includes('place')) {
                    const expected = pattern.pattern.replace('[place]', placeVariant);
                    expectedTexts.push({ text: expected, demonym: null, demonymObj: null, isGroup: false });

                } else if (pattern.placeholders.includes('demonym')) {
                    allDemonymObjs.forEach(demonymObj => {
                        const expected = pattern.pattern.replace('[demonym]', demonymObj.demonym);
                        expectedTexts.push({ text: expected, demonym: demonymObj.demonym, demonymObj: demonymObj, isGroup: true });
                    });
                }

                expectedTexts.forEach(({ text: expectedText, demonym, demonymObj, isGroup }) => {
                    // Case-insensitive flexible matching (includes plural handling)
                    const patternString = TextUtils.createFlexiblePattern(expectedText);
                    // No end boundary - rely on improved trimming to remove trailing punctuation
                    const flexiblePattern = new RegExp(`(?:^|(?<![a-z0-9]))${patternString}`, 'gi');

                    let match;
                    while ((match = flexiblePattern.exec(text)) !== null) {
                        const start = match.index;
                        let end = start + match[0].length;
                        let actualMatchedText = text.substring(start, end); // preserves input capitalization

                        // Use shared trimming logic (DRY)
                        let trimmedLength = trimMatchedText(actualMatchedText);

                        if (trimmedLength < actualMatchedText.length) {
                            actualMatchedText = actualMatchedText.substring(0, trimmedLength);
                            end = start + trimmedLength;
                            if (actualMatchedText.length === 0) continue;
                        }

                        // When both place and demonym exist, use demonym's type for categorization
                        // (e.g., "Liverpool is for Liverpudlians" → city demonym → localist)
                        // (e.g., "Liverpool is for Englishmen" → country demonym → nationalist)
                        // (e.g., "Liverpool is for Europeans" → country demonym → regionalist)
                        let typeToUse;
                        if (demonymObj && pattern.placeholders.includes('place') && pattern.placeholders.includes('demonym')) {
                            // Find the type of the place the demonym comes from
                            const demonymPlace = demonymObj.place; // Canonical name like "England", "Liverpool"
                            const demonymPlaceData = PLACE_DEMONYM_LOOKUP.findPlaceByVariant(demonymPlace);
                            typeToUse = demonymPlaceData ? demonymPlaceData.type : this.placeTypes[placeVariant.toLowerCase()];
                        } else {
                            // Use the place type when no demonym or only one placeholder
                            typeToUse = this.placeTypes[placeVariant.toLowerCase()];
                        }

                        const placeInfo = {
                            place: placeData.canonical,
                            type: typeToUse,
                            isGroup: isGroup
                        };

                        const category = this.determineCategoryForMatch(pattern, placeInfo);

                        // Create display term with detected place, preserving original capitalization
                        // e.g., "Make America Great Again" → "Make Texas Great Again"
                        let displayTerm = pattern.original;

                        // Find and replace the original place with the detected place
                        // Need to handle case-insensitive search but preserve capitalization pattern
                        if (pattern.originalPlace) {
                            const originalPlaceRegex = new RegExp(
                                pattern.originalPlace.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), // Escape special chars
                                'gi'
                            );

                            // Replace while preserving capitalization of the first letter
                            displayTerm = displayTerm.replace(originalPlaceRegex, (matched) => {
                                // If matched is capitalized, capitalize the replacement
                                if (matched[0] === matched[0].toUpperCase()) {
                                    return placeVariant.charAt(0).toUpperCase() + placeVariant.slice(1).toLowerCase();
                                }
                                return placeVariant.toLowerCase();
                            });
                        }

                        // Also replace demonym if present
                        if (demonym && pattern.originalDemonym) {
                            const originalDemonymRegex = new RegExp(
                                pattern.originalDemonym.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), // Escape special chars
                                'gi'
                            );
                            displayTerm = displayTerm.replace(originalDemonymRegex, (matched) => {
                                if (matched[0] === matched[0].toUpperCase()) {
                                    return demonym.charAt(0).toUpperCase() + demonym.slice(1).toLowerCase();
                                }
                                return demonym.toLowerCase();
                            });
                        }

                        potentialMatches.push({
                            type: 'codedTerm',
                            text: actualMatchedText,                       // use matched text for UI highlighting
                            term: displayTerm,                             // clean text with detected place/demonym
                            category: category,
                            definition: pattern.codedTerm.definition,
                            variations: [],  // Don't show variations - not relevant for derived matches
                            isPatternMatch: true,
                            originalPattern: pattern.original,
                            detectedPlace: placeVariant,                  // preserve dataset variant for reference
                            isDerived: true,
                            derivedFrom: pattern.codedTerm.root,
                            start: start,
                            end: end,
                            source: pattern.codedTerm.source
                        });
                    }
                });
            });
        });

        // RELIGIONYM PATTERN PROCESSING
        // Process patterns with [religionym] placeholder
        const foundReligionyms = foundInText.religion_religionym_hierarchical || new Map();

        if (foundReligionyms.size > 0) {
            // Filter patterns that have [religionym] placeholder
            const religionymPatterns = this.patterns.filter(p =>
                p.placeholders && p.placeholders.includes('religionym')
            );
            religionymPatterns.forEach(pattern => {
                // Check if pattern also needs a place
                const needsPlace = pattern.placeholders.includes('place');

                // Build list of expected texts to check
                const expectedTexts = [];

                if (needsPlace) {
                    // Pattern has both [place] and [religionym]
                    // Need to iterate through found places too
                    const foundPlaces = foundInText.place_demonym || new Map();

                    Array.from(foundPlaces.keys()).forEach(placeVariant => {
                        Array.from(foundReligionyms.keys()).forEach(religionymVariant => {
                            // Replace both [place] and [religionym]
                            const expectedText = pattern.pattern
                                .replace(/\[place\]/gi, placeVariant)
                                .replace(/\[religionym\]/gi, religionymVariant);
                            expectedTexts.push({ expectedText, religionymVariant });
                        });
                    });
                } else {
                    // Pattern only has [religionym]
                    Array.from(foundReligionyms.keys()).forEach(religionymVariant => {
                        // Build expected text by replacing [religionym] with found religionym
                        const expectedText = pattern.pattern.replace(
                            /\[religionym\]/gi,
                            religionymVariant
                        );
                        expectedTexts.push({ expectedText, religionymVariant });
                    });
                }

                // Now match all expected texts
                expectedTexts.forEach(({ expectedText, religionymVariant }) => {

                    // Create flexible regex pattern (includes plural handling)
                    const flexPattern = TextUtils.createFlexiblePattern(expectedText);
                    const regex = new RegExp(flexPattern, 'gi');

                    let match;
                    while ((match = regex.exec(lowerText)) !== null) {
                        const start = match.index;
                        let actualMatchedText = text.substring(start, start + match[0].length);
                        let end = start + actualMatchedText.length;

                        // Trim trailing punctuation
                        let trimmedLength = actualMatchedText.length;
                        while (trimmedLength > 0 && /[^a-zA-Z0-9]/.test(actualMatchedText[trimmedLength - 1])) {
                            trimmedLength--;
                        }
                        if (trimmedLength < actualMatchedText.length) {
                            actualMatchedText = actualMatchedText.substring(0, trimmedLength);
                            end = start + trimmedLength;
                            if (actualMatchedText.length === 0) continue;
                        }

                        // Create match with religious-populism category
                        potentialMatches.push({
                            type: 'codedTerm',
                            text: actualMatchedText,
                            term: actualMatchedText,  // Standalone, not showing derivation
                            category: 'religious-populism',  // ALWAYS religious-populism
                            definition: pattern.codedTerm.definition,
                            variations: [],  // Don't show variations - not relevant for religionym matches
                            isPatternMatch: true,
                            originalPattern: pattern.original,
                            detectedReligionym: religionymVariant,
                            isDerived: true,
                            derivedFrom: pattern.codedTerm.root,
                            start: start,
                            end: end,
                            source: pattern.codedTerm.source
                        });
                    }
                });
            });
        }

        // Filter overlapping matches - keep longest ones
        const matches = [];
        potentialMatches.sort((a, b) => (b.end - b.start) - (a.end - a.start)); // Sort by length (longest first)

        potentialMatches.forEach(match => {
            // Check if this match overlaps with any already-kept match
            const hasOverlap = matches.some(existing => {
                return match.start < existing.end && match.end > existing.start;
            });

            if (!hasOverlap) {
                matches.push(match);
            }
        });
        return { matches };
    },

    // Determine category based on place type
    determineCategory(placeInfo) {
        // Check place type (countries = nationalist, regions = regionalist, cities = localist)
        if (placeInfo.type === 'country') {
            return 'nationalist';
        } else if (placeInfo.type === 'region') {
            return 'regionalist';
        } else if (placeInfo.type === 'city') {
            return 'localist';
        }
        return 'nationalist'; // Default
    },

    // Determine category for a match using hybrid logic
    determineCategoryForMatch(pattern, placeInfo) {
        const originalCategory = pattern.codedTerm.category;

        // For dynamic patterns, use hybrid approach:
        // - If original is nationalist/localist → auto-categorize by place type
        // - Otherwise (racist, antisemitic, etc.) → preserve original category
        if (originalCategory === 'nationalist' || originalCategory === 'localist') {
            // Auto-categorize based on place type
            return this.determineCategory(placeInfo);
        }

        // For all other categories, preserve the original
        // This ensures racist patterns stay racist, antisemitic stay antisemitic, etc.
        return originalCategory;
    }
};

/**
 * Base class for term matchers (DRY - eliminates duplication between CodedTermMatcher and HarmfulTermMatcher)
 * Provides shared matching logic with configurable match type for styling
 */
class BaseTermMatcher {
    constructor(termData, matchType) {
        // Store term data
        this.termData = termData;
        this.terms = termData.terms;
        this.matchType = matchType;  // 'codedTerm' or 'harmfulTerm'

        // Build lookup map using DRY helper
        this.variationMap = TextUtils.buildVariationMap(this.terms);
    }

    analyze(text) {
        // Use shared DRY helper
        const allMatches = analyzeTextWithVariations(text, this.variationMap, this.matchType);

        // Remove overlapping matches, keeping the longest/most specific ones
        // Sort by: 1) length (descending), 2) position (ascending)
        allMatches.sort((a, b) => {
            if (b.length !== a.length) return b.length - a.length;
            return a.start - b.start;
        });

        const matches = [];
        const usedRanges = [];

        // Keep matches that don't overlap with already-selected matches
        // EXCEPT: allow numeric terms to overlap with each other (e.g., "1813" can match both "18" and "13")
        for (const match of allMatches) {
            const isNumericMatch = match.isNumeric || false;

            // Check if this match overlaps with any already-selected match
            let hasBlockingOverlap = false;
            for (const range of usedRanges) {
                if (TextUtils.overlaps(match, range)) {
                    // Allow overlap if BOTH terms are same type (numeric-numeric OR letter-letter)
                    const rangeIsNumeric = range.isNumeric;
                    const rangeIsLetterTerm = range.isLetterTerm || false;
                    const isLetterTermMatch = match.isLetterTerm || false;

                    if (!((isNumericMatch && rangeIsNumeric) || (isLetterTermMatch && rangeIsLetterTerm))) {
                        hasBlockingOverlap = true;
                        break;
                    }
                }
            }

            if (!hasBlockingOverlap) {
                matches.push(match);
                usedRanges.push({
                    start: match.start,
                    end: match.end,
                    isNumeric: isNumericMatch,
                    isLetterTerm: match.isLetterTerm || false
                });
            }
        }

        // Filter letter terms using shared DRY helper
        const filteredMatches = filterLetterTerms(matches, text);

        // Sort final matches by position for display
        filteredMatches.sort((a, b) => a.start - b.start);

        // Count unique categories
        const foundCategories = new Set(filteredMatches.map(m => m.category));

        return {
            matches: filteredMatches,
            categoryCount: foundCategories.size,
            categories: Array.from(foundCategories)
        };
    }
}

/**
 * Coded term matcher - detects dog whistle/coded language
 * Uses background highlighting for matches
 */
class CodedTermMatcher extends BaseTermMatcher {
    constructor(codedTermData) {
        super(codedTermData, 'codedTerm');
        // Preserve original property names for backwards compatibility
        this.codedTermData = codedTermData;
        this.codedTermTerms = codedTermData.terms;
    }
}

/**
 * Harmful term matcher - detects explicit offensive language
 * Uses underline styling for matches
 */
class HarmfulTermMatcher extends BaseTermMatcher {
    constructor(harmfulTermData) {
        super(harmfulTermData, 'harmfulTerm');
        // Preserve original property names for backwards compatibility
        this.harmfulTermData = harmfulTermData;
        this.harmfulTermTerms = harmfulTermData.terms;
    }
}
