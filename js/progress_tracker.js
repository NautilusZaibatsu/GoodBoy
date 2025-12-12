/**
 * GoodBoy Progress Tracker
 *
 * Lightweight progress tracking system that calculates accurate completion percentages
 * during text analysis based on actual database sizes and computational complexity.
 *
 * Features:
 * - Dynamic weight allocation based on variation counts and pattern complexity
 * - Configurable update intervals and complexity multipliers
 * - Minimal overhead (< 1% of analysis time)
 * - Backward compatible (optional progress callbacks)
 */

// Configuration constants
const PROGRESS_UPDATE_INTERVAL = 50; // Report progress every N variations (for term matchers)
// Balancing
const CODED_COMPLEXITY_MULTIPLIER = 1;
const HARMFUL_COMPLEXITY_MULTIPLIER = 0.4;
const PATTERN_COMPLEXITY_MULTIPLIER = 3.6;
// Fixed percentages for final steps
const FIXED_DEDUP_PERCENT = 9;
const FIXED_RENDER_PERCENT = 1;
const FIXED_TAIL_PERCENT = FIXED_DEDUP_PERCENT + FIXED_RENDER_PERCENT;

/**
 * Progress Tracker Singleton
 * Manages progress state and calculates dynamic weights based on database sizes
 */
const ProgressTracker = {
    state: {
        percent: 0,
        startTime: null
    },

    weights: null, // Calculated once on page load

    /**
     * Calculate progress weights based on actual database sizes
     * Called once during page load after matchers are initialized
     *
     * @param {number} codedVariationCount - Number of variations in coded term database
     * @param {number} harmfulVariationCount - Number of variations in harmful term database
     * @param {number} patternCount - Number of patterns in pattern matcher
     */
    calculateWeights(codedVariationCount, harmfulVariationCount, patternCount) {
        // Calculate work units for each component
        const codedWork = codedVariationCount * CODED_COMPLEXITY_MULTIPLIER;
        const harmfulWork = harmfulVariationCount * HARMFUL_COMPLEXITY_MULTIPLIER;
        const patternWork = patternCount * PATTERN_COMPLEXITY_MULTIPLIER;

        // Calculate remaining % available after tail
        const remainingPercent = 100 - FIXED_TAIL_PERCENT;

        // Total work for the proportional section
        const totalWork = codedWork + harmfulWork + patternWork;

        const codedPercent = (codedWork / totalWork) * remainingPercent;
        const harmfulPercent = (harmfulWork / totalWork) * remainingPercent;
        const patternPercent = (patternWork / totalWork) * remainingPercent;

        // Store weights with cumulative ranges for easy lookup
        this.weights = {
            coded: {
                allocation: codedPercent,
                start: 0,
                end: codedPercent
            },
            harmful: {
                allocation: harmfulPercent,
                start: codedPercent,
                end: codedPercent + harmfulPercent
            },
            pattern: {
                allocation: patternPercent,
                start: codedPercent + harmfulPercent,
                end: codedPercent + harmfulPercent + patternPercent
            },
            deduplication: {
                allocation: FIXED_DEDUP_PERCENT,
                start: 100 - FIXED_TAIL_PERCENT,
                end: 100 - FIXED_RENDER_PERCENT
            },
            rendering: {
                allocation: FIXED_RENDER_PERCENT,
                start: 100 - FIXED_RENDER_PERCENT,
                end: 100
            }
        };
    },

    /**
     * Get weight configuration for a specific matcher
     * Returns basePercent and allocatedPercent for progress callback
     *
     * @param {string} matcherType - One of: 'coded', 'harmful', 'pattern', 'deduplication', 'rendering'
     * @returns {{basePercent: number, allocatedPercent: number}} Weight config object
     */
    getWeightConfig(matcherType) {
        if (!this.weights) {
            console.error('Progress weights not initialized! Call calculateWeights() first.');
            return { basePercent: 0, allocatedPercent: 100 };
        }

        const weight = this.weights[matcherType];
        if (!weight) {
            console.error(`Unknown matcher type: ${matcherType}`);
            return { basePercent: 0, allocatedPercent: 100 };
        }

        return {
            basePercent: weight.start,
            allocatedPercent: weight.allocation
        };
    },

    /**
     * Start progress tracking
     * Initializes state to 0% and records start time
     */
    start() {
        this.state.percent = 0;
        this.state.startTime = Date.now();
    },

    /**
     * Update progress percentage
     * Automatically clamps value between 0-100 and rounds to integer
     *
     * @param {number} percent - New progress percentage (0-100)
     */
    updateProgress(percent) {
        // Clamp to 0-100 range and round to integer
        this.state.percent = Math.min(100, Math.max(0, Math.round(percent)));
    },

    /**
     * Get current progress state
     *
     * @returns {{percent: number, elapsedMs: number}} Current progress percentage and elapsed time
     */
    getProgress() {
        return {
            percent: this.state.percent,
            elapsedMs: Date.now() - this.state.startTime
        };
    },

    /**
     * Mark progress as complete
     * Forces progress to 100%
     */
    complete() {
        this.state.percent = 100;
    }
};

// Browser exports
if (typeof window !== 'undefined') {
    window.ProgressTracker = ProgressTracker;
    window.PROGRESS_UPDATE_INTERVAL = PROGRESS_UPDATE_INTERVAL;
}
