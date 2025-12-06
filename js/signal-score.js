/**
 * GoodBoy Signal Score Calculator
 *
 * Calculates signal strength score (0-100) based on three weighted components:
 * - Match Density (25%): Percentage of words that are problematic
 * - Match Type Weight (37.5%): Harmful terms weighted higher than dog whistles
 * - Category Diversity (37.5%): Clustering in fewer main categories = more problematic
 *
 * Dependencies:
 * - CATEGORY_HIERARCHY (from category-config.js)
 * - getMainCategoryForSub() (from category-config.js)
 *
 * @author GoodBoy Team
 * @version 1.0.0
 */

/**
 * Configuration object for signal score calculation
 * Single source of truth for all weights and thresholds
 */
const SIGNAL_SCORE_CONFIG = {
    // Weight Distribution (out of 100 total points)
    weights: {
        DENSITY_MAX: 60,        // Match density component
        TYPE_WEIGHT_MAX: 20,    // Match type component
        CATEGORY_MAX: 20        // Category diversity component
    },

    // How many flagged words per x words it takes to get the maximum math density
    flaggedWordsPerTotalMultiplier: 15,

    // Match type multipliers for type weight calculation
    typeMultipliers: {
        HARMFUL_TERM: 2.0,      // Explicit offensive terms weighted higher
        DOG_WHISTLE: 1.0        // Coded language baseline
    },

    // Get the total number of categories
    numberOfCategories: Object.keys(CATEGORY_HIERARCHY).length,

    // Signal level thresholds for classification
    signalLevels: {
        CLEAN: 0,               // Exactly 0
        LOW: 25,                // 1-25
        MODERATE: 50,           // 26-50
        HIGH: 75,               // 51-75
        SEVERE: 100             // 76-100
    }
};

/**
 * Signal Score Calculator Module
 * Global object providing signal scoring functionality
 */
const SignalScore = {
    // Expose configuration for advanced users
    config: SIGNAL_SCORE_CONFIG,

    /**
     * Calculate signal strength score for analyzed text
     * @param {string} text - The original text being analyzed
     * @param {Array} matches - Array of match objects from matchers
     * @returns {Object} Score result with total and breakdown
     */
    calculate: function (text, matches) {
        // Count words in text
        const wordCount = text.trim().split(/\s+/).length;

        // Handle edge case: no matches or empty text
        if (matches.length === 0 || wordCount === 0) {
            return {
                total: 0,
                breakdown: {
                    densityScore: 0,
                    typeWeight: 0,
                    categoryScore: 0,
                    densityPercent: this.config.weights.DENSITY_MAX,
                    typePercent: this.config.weights.TYPE_WEIGHT_MAX,
                    categoryPercent: this.config.weights.CATEGORY_MAX,
                    matchCount: 0,
                    wordCount: 0,
                    harmfulCount: 0,
                    dogWhistleCount: 0,
                    uniqueCategories: 0,
                    mainCategories: []
                }
            };
        }

        // Calculate three components
        const densityResult = this._calculateDensityScore(matches, wordCount);
        const typeWeight = this._calculateTypeWeight(matches);
        const categoryResult = this._calculateCategoryScore(matches);

        // Calculate final score
        const totalScore = Math.round(densityResult.score + typeWeight + categoryResult.score);

        // Get match type counts for breakdown
        const harmfulCount = matches.filter(m => m.type === 'harmfulTerm').length;
        const dogWhistleCount = matches.filter(m => m.type === 'dogwhistle').length;

        return {
            total: Math.min(totalScore, 100), // Cap at 100
            breakdown: {
                densityScore: Math.round(densityResult.score),
                typeWeight: Math.round(typeWeight),
                categoryScore: Math.round(categoryResult.score),
                densityPercent: this.config.weights.DENSITY_MAX,
                typePercent: this.config.weights.TYPE_WEIGHT_MAX,
                categoryPercent: this.config.weights.CATEGORY_MAX,
                matchCount: matches.length,
                flaggedWordCount: densityResult.flaggedWordCount,
                wordCount: wordCount,
                harmfulCount: harmfulCount,
                dogWhistleCount: dogWhistleCount,
                uniqueCategories: categoryResult.count,
                mainCategories: categoryResult.categories
            }
        };
    },

    /**
     * Map signal score to level and CSS class
     * @param {number} score - Signal score (0-100)
     * @returns {Object} Level name and CSS class
     */
    getSignalLevel: function (score) {
        const levels = this.config.signalLevels;

        if (score === levels.CLEAN) {
            return { level: 'Clean', className: 'signal-low' };
        } else if (score <= levels.LOW) {
            return { level: 'Low', className: 'signal-low' };
        } else if (score <= levels.MODERATE) {
            return { level: 'Moderate', className: 'signal-moderate' };
        } else if (score <= levels.HIGH) {
            return { level: 'High', className: 'signal-high' };
        } else {
            return { level: 'Severe', className: 'signal-severe' };
        }
    },

    /**
     * Update signal score breakdown tooltip
     * @param {Object} breakdown - Breakdown object from calculate()
     */
    updateTooltip: function (breakdown) {
        const tooltip = document.querySelector('.info-icon .tooltip');
        if (!tooltip) return;

        const total = breakdown.densityScore +
            breakdown.typeWeight +
            breakdown.categoryScore;

        // Generate tooltip HTML with auto-calculated percentages
        tooltip.innerHTML = `
            <div class="tooltip-item">
                <div class="tooltip-item-label">Signal Score Breakdown</div>
            </div>
            <div class="tooltip-item">
                <div class="tooltip-item-label">Match Density (${breakdown.densityPercent}%)</div>
                <div class="tooltip-item-value">${breakdown.densityScore} points</div>
                <div class="tooltip-item-value" style="font-size: 0.9em; opacity: 0.8;">
                    ${breakdown.flaggedWordCount} matched words / ${breakdown.wordCount} words
                </div>
            </div>
            <div class="tooltip-item">
                <div class="tooltip-item-label">Match Type Weight (${breakdown.typePercent}%)</div>
                <div class="tooltip-item-value">${breakdown.typeWeight} points</div>
                <div class="tooltip-item-value" style="font-size: 0.9em; opacity: 0.8;">
                    ${breakdown.harmfulCount} harmful, ${breakdown.dogWhistleCount} dog whistles
                </div>
            </div>
            <div class="tooltip-item">
                <div class="tooltip-item-label">Category Diversity (${breakdown.categoryPercent}%)</div>
                <div class="tooltip-item-value">${breakdown.categoryScore} points</div>
                <div class="tooltip-item-value" style="font-size: 0.9em; opacity: 0.8;">
                    ${breakdown.uniqueCategories} main categories
                </div>
            </div>
            <div class="tooltip-source" style="text-align: center;">
                <strong>Total: ${total} points</strong>
            </div>
        `;
    },

    /**
     * Calculate density score component
     * @private
     * @param {Array} matches - Array of match objects
     * @param {number} wordCount - Total word count in text
     * @returns {number} Density score (0 to DENSITY_MAX)
     */
    _calculateDensityScore: function (matches, wordCount) {
        // Count total flagged words (not just number of matches)
        // Each match can contain multiple words (e.g., "blood and honor" = 3 words)
        let flaggedWordCount = 0;

        matches.forEach(match => {
            // Count words in the matched text
            const matchText = match.text.trim();
            const wordsInMatch = matchText.split(/\s+/).length;
            flaggedWordCount += wordsInMatch;
        });

        // Percentage of words that are flagged
        const matchDensity = (flaggedWordCount / wordCount) * this.config.flaggedWordsPerTotalMultiplier;

        return {
            score: Math.min(matchDensity * 100, this.config.weights.DENSITY_MAX),
            flaggedWordCount: flaggedWordCount
        };
    },

    /**
     * Calculate type weight component
     * @private
     * @param {Array} matches - Array of match objects
     * @returns {number} Type weight score (0 to TYPE_WEIGHT_MAX)
     */
    _calculateTypeWeight: function (matches) {
        // Count match types
        const harmfulCount = matches.filter(m => m.type === 'harmfulTerm').length;
        const dogWhistleCount = matches.filter(m => m.type === 'dogwhistle').length;

        // Calculate weighted average
        const weightedMatches =
            (harmfulCount * this.config.typeMultipliers.HARMFUL_TERM) +
            (dogWhistleCount * this.config.typeMultipliers.DOG_WHISTLE);

        const avgWeight = weightedMatches / matches.length;
        const normalizedWeight = avgWeight / 2;
        return normalizedWeight * this.config.weights.TYPE_WEIGHT_MAX;
    },

    /**
     * Calculate category diversity score component
     * Uses main categories (not subcategories) for semantic correctness
     * @private
     * @param {Array} matches - Array of match objects
     * @returns {Object} Score, count, and categories array
     */
    _calculateCategoryScore: function (matches) {
        const mainCategories = this._getMainCategories(matches);
        const count = mainCategories.size;
        const maxScore = this.config.weights.CATEGORY_MAX;

        let score = (maxScore / this.config.numberOfCategories) * (this.config.numberOfCategories - count);

        return {
            score: score,
            count: count,
            categories: Array.from(mainCategories)
        };
    },

    /**
     * Extract unique main categories from matches
     * Maps subcategories (racist, antisemitic) to main categories (race)
     * @private
     * @param {Array} matches - Array of match objects
     * @returns {Set} Set of unique main category keys
     */
    _getMainCategories: function (matches) {
        const mainCategories = new Set();

        matches.forEach(match => {
            const subcategory = match.category.toLowerCase();

            // Use category-config.js function to get main category
            const mainCategory = getMainCategoryForSub(subcategory);

            if (mainCategory) {
                mainCategories.add(mainCategory);
            }
        });

        return mainCategories;
    }
};
