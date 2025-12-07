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
    let trimmedLength = matchedText.length;

    // Trim trailing non-alphanumeric characters (spaces, punctuation, etc.)
    // BUT preserve valid plurals and handle newline cases
    while (trimmedLength > 0) {
        const lastChar = matchedText[trimmedLength - 1];

        // IMPORTANT: Check for 's' BEFORE checking if it's alphanumeric
        // If it's 's' or 'S', check if it's a valid plural (preceded by alphanumeric WITHOUT newline between)
        if (lastChar.toLowerCase() === 's' && trimmedLength > 1) {
            // Look backwards to see if preceded by alphanumeric (valid plural)
            let foundAlphanumeric = false;
            let foundNewline = false;
            for (let i = trimmedLength - 2; i >= 0; i--) {
                if (/[\n\r]/.test(matchedText[i])) {
                    // 's' after newline - not a valid plural, trim it
                    foundNewline = true;
                    break;
                } else if (/[a-zA-Z0-9]/.test(matchedText[i])) {
                    foundAlphanumeric = true;
                    break;
                }
            }

            // Only keep 's' if there's alphanumeric before it AND no newline between
            if (foundAlphanumeric && !foundNewline) {
                // Valid plural, keep it
                break;
            } else {
                // Trim the 's' and continue
                trimmedLength--;
                continue;
            }
        }

        // If it's alphanumeric (but not 's', which we handled above), we're done
        if (/[a-zA-Z0-9]/.test(lastChar)) {
            break;
        }

        // Otherwise, it's punctuation/whitespace/newline - trim it
        trimmedLength--;
    }

    return trimmedLength;
}

/**
 * Shared helper to analyze text and find matches (DRY)
 * Used by both CodedTermMatcher and HarmfulTermMatcher
 */
function analyzeTextWithVariations(text, variationMap, matchType) {
    // Normalize Unicode only (don't modify the text)
    text = text.normalize('NFC');

    const allMatches = [];

    variationMap.forEach((termData, variation) => {
        const flexiblePattern = ObfuscationUtils.createFlexiblePattern(variation);
        const pluralPattern = flexiblePattern;

        const isNumericTerm = /^\d+$/.test(variation);
        const isLetterTerm = /^[a-z]+$/i.test(variation);
        const isMultiWord = /\s/.test(variation);

        let regex;
        if (isNumericTerm) {
            regex = new RegExp(`${pluralPattern}`, 'gi');
        } else if (isLetterTerm) {
            regex = new RegExp(`(?:^|(?<![a-z]))${pluralPattern}(?:(?![a-z])|$)`, 'gi');
        } else if (isMultiWord) {
            // Multi-word terms: no end boundary so they can match in compound words like "#innercityproblems"
            // Improved trimming will remove trailing punctuation
            regex = new RegExp(`(?:^|(?<![a-z0-9]))${pluralPattern}`, 'gi');
        } else {
            regex = new RegExp(`(?:^|(?<![a-z0-9]))${pluralPattern}(?:(?![a-z0-9])|$)`, 'gi');
        }

        let match;
        let lastIndex = -1;
        while ((match = regex.exec(text)) !== null) {

            if (match.index === lastIndex && match[0].length === 0) {
                regex.lastIndex++;
                continue;
            }
            lastIndex = match.index;

            let matchedText = match[0];

            // Use shared trimming logic (DRY)
            let trimmedLength = trimMatchedText(matchedText);

            if (trimmedLength < matchedText.length) {
                matchedText = matchedText.substring(0, trimmedLength);
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
            const originalTextAtMatch = text.substring(match.index, match.index + matchedText.length);
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
                const matchStart = match.index;
                const matchEnd = match.index + match[0].length;

                let countBefore = 0;
                let countAfter = 0;

                const isDigitMatch = /^\d+$/.test(matchedText);
                const isLetterMatch = /^[a-z]+$/i.test(matchedText);
                const isMixedMatch = !isDigitMatch && !isLetterMatch;

                if (isDigitMatch) {
                    // Count digits before, skipping commas in numbers (e.g., "4,809")
                    for (let i = matchStart - 1; i >= 0; i--) {
                        if (/\d/.test(text[i])) {
                            countBefore++;
                        } else if (text[i] === ',' && i > 0 && /\d/.test(text[i - 1])) {
                            // Skip comma if it's between digits (thousands separator)
                            continue;
                        } else {
                            break; // Stop at non-digit, non-comma
                        }
                    }
                    // Count digits after, skipping commas
                    for (let i = matchEnd; i < text.length; i++) {
                        if (/\d/.test(text[i])) {
                            countAfter++;
                        } else if (text[i] === ',' && i + 1 < text.length && /\d/.test(text[i + 1])) {
                            // Skip comma if it's between digits
                            continue;
                        } else {
                            break;
                        }
                    }
                } else if (isLetterMatch) {
                    // Same logic for letter matches that might be in numbers
                    for (let i = matchStart - 1; i >= 0; i--) {
                        if (/\d/.test(text[i])) {
                            countBefore++;
                        } else if (text[i] === ',' && i > 0 && /\d/.test(text[i - 1])) {
                            continue;
                        } else {
                            break;
                        }
                    }
                    for (let i = matchEnd; i < text.length; i++) {
                        if (/\d/.test(text[i])) {
                            countAfter++;
                        } else if (text[i] === ',' && i + 1 < text.length && /\d/.test(text[i + 1])) {
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
                                if (/\d/.test(text[j])) {
                                    digitCountBefore++;
                                } else if (text[j] === ',' && j > 0 && /\d/.test(text[j - 1])) {
                                    continue;
                                } else {
                                    break;
                                }
                            }
                            let digitCountAfter = 0;
                            for (let j = digitPos + 1; j < text.length; j++) {
                                if (/\d/.test(text[j])) {
                                    digitCountAfter++;
                                } else if (text[j] === ',' && j + 1 < text.length && /\d/.test(text[j + 1])) {
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
                const charBefore = seqStart > 0 ? text[seqStart - 1] : '';
                const charAfter = seqEnd < text.length ? text[seqEnd] : '';

                const hasLetterBefore = /[a-z]/i.test(charBefore);
                const hasLetterAfter = /[a-z]/i.test(charAfter);

                if (!hasLetterBefore && !hasLetterAfter && extraChars > 0) {
                    let hasKnownOverlap = false;

                    if (countBefore > 0 && variationMap.has(text.substring(seqStart, matchStart))) {
                        hasKnownOverlap = true;
                    }
                    if (countAfter > 0 && variationMap.has(text.substring(matchEnd, seqEnd))) {
                        hasKnownOverlap = true;
                    }

                    if (!hasKnownOverlap) {
                        continue;
                    }
                }
            }

            allMatches.push({
                start: match.index,
                end: match.index + matchedText.length,
                length: matchedText.length,
                text: matchedText,
                type: matchType,
                term: termData.root,
                category: termData.category,
                definition: termData.definition,
                variations: termData.variations,
                source: termData.source,
                isNumeric: isNumericTerm
            });
        }
    });

    return allMatches;
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
                const flexiblePattern = ObfuscationUtils.createFlexiblePattern(variantLower);
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
                            const itemFlexiblePattern = ObfuscationUtils.createFlexiblePattern(itemTextLower);
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
                const allDemonyms = allDemonymObjs.map(d => d.demonym);
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
                    const patternString = ObfuscationUtils.createFlexiblePattern(expectedText);
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
                    const flexPattern = ObfuscationUtils.createFlexiblePattern(expectedText);
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

class CodedTermMatcher {
    constructor(codedTermData) {
        // Store coded term data
        this.codedTermData = codedTermData;
        this.codedTermTerms = codedTermData.terms;

        // Build lookup map for coded terms using DRY helper
        this.variationMap = ObfuscationUtils.buildVariationMap(this.codedTermTerms);
    }

    analyze(text) {
        // Use shared DRY helper
        const allMatches = analyzeTextWithVariations(text, this.variationMap, 'codedTerm');

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
                if (ObfuscationUtils.overlaps(match, range)) {
                    // Allow overlap if BOTH terms are purely numeric
                    const rangeIsNumeric = range.isNumeric;
                    if (!(isNumericMatch && rangeIsNumeric)) {
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
                    isNumeric: isNumericMatch
                });
            }
        }

        // Sort final matches by position for display
        matches.sort((a, b) => a.start - b.start);

        // Count unique categories
        const foundCategories = new Set(matches.map(m => m.category));

        return {
            matches,
            categoryCount: foundCategories.size,
            categories: Array.from(foundCategories)
        };
    }
}

class HarmfulTermMatcher {
    constructor(harmfulTermData) {
        // Store harmful term data
        this.harmfulTermData = harmfulTermData;
        this.harmfulTermTerms = harmfulTermData.terms;

        // Build lookup map for harmful terms using DRY helper
        this.variationMap = ObfuscationUtils.buildVariationMap(this.harmfulTermTerms);
    }

    analyze(text) {
        // Use shared DRY helper
        const allMatches = analyzeTextWithVariations(text, this.variationMap, 'harmfulTerm');

        // Remove overlapping matches, keeping the longest/most specific ones
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
                if (ObfuscationUtils.overlaps(match, range)) {
                    // Allow overlap if BOTH terms are purely numeric
                    const rangeIsNumeric = range.isNumeric;
                    if (!(isNumericMatch && rangeIsNumeric)) {
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
                    isNumeric: isNumericMatch
                });
            }
        }

        // Sort final matches by position for display
        matches.sort((a, b) => a.start - b.start);

        // Count unique categories
        const foundCategories = new Set(matches.map(m => m.category));

        return {
            matches,
            categoryCount: foundCategories.size,
            categories: Array.from(foundCategories)
        };
    }
}
