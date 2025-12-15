/**
 * GoodBoy Theme Configuration
 *
 * Centralized design system configuration for colors, typography, and spacing.
 * All theme values are injected as CSS custom properties on page load.
 *
 * Usage: Modify values here to theme the entire application.
 */

const THEME_CONFIG = {
    // ============================================================
    // COLORS - Brand & UI
    // ============================================================

    // Primary brand colors
    colors: {
        primary: '#fd8b5b',                 // Main brand color
        secondary: '#7d756c',               // Secondary/inactive elements
    },

    // Background colors
    backgrounds: {
        page: '#444444',                    // Page background
        card: 'rgba(249, 250, 251, 0.9)',   // Card background
        input: '#f8f9fa',                   // Input fields background
        tooltip: '#2c3e50',                 // Tooltip background
    },

    // Text colors
    text: {
        primary: '#444',
        muted: '#666',                      // De-emphasized text
        white: '#ffffff',                   // Dark background text
    },

    // Link colors
    link: {
        unvisited: '#fd8b5b',
        visited: '#dd7d34',
        hover: '#7d756c',
        active: '#7d756c',
        tooltip: '#fd8b5b',
    },

    // Border colors
    borders: {
        default: '#cccccc',                 // Standard borders
        focus: '#fd8b5b',                   // Focused inputs
    },

    // State colors (success, warning, danger)
    states: {
        success: {
            bg: '#c5eec7',                  // Light green background
            text: '#4c804f',                // Dark green text
            border: '#88c88b',              // Green border/button
        },
        warning: {
            bg: '#fff3cd',                  // Light yellow background
            text: '#856404',                // Brown/tan text
            border: '#ffc107',              // Yellow border
        },
        danger: {
            bg: '#f8d7da',                  // Light red background
            text: '#721c24',                // Dark red text
            border: '#d6293e',              // Severe red (for critical warnings)
        },
    },

    // Unflagged term colors
    unflagged: {
        color: '#dddddd',                   // Un-flagged highlight/underline color
        hover: '#bbbbbb'                    // Un-flagged highlight/underline hover color
    },

    // Demo colors
    demo: '#fd8b5b',

    // Progress bar
    progress: {
        height: '25px',
        track: '#cccccc',
        bar: '#fd8b5b'
    },

    // Ticker
    ticker: {
        text: '#fd8b5b',
        background: '#282828',
        height: '30px',
    },

    // Button colors
    buttons: {
        primary: {
            background: '#fd8b5b',       // Primary button color
            clicked: '#ffa782',          // Primary button feedback colour
            text: '#ffffff',             // Button text
        },
        disabled: {
            background: '#7d756c',       // Disabled button color
            text: '#ffffff',             // Button text
        },
    },

    // Shadow & overlay colors (rgba for transparency)
    effects: {
        shadowLight: 'rgba(0, 0, 0, 0.2)',              // Light shadows on text
        shadowMedium: 'rgba(154, 154, 154, 0.4)',       // Button hover shadow
        tooltipText: 'rgba(255, 255, 255, 0.9)',
        tooltipTextMuted: 'rgba(255, 255, 255, 0.7)',   // More transparent for secondary tooltip text
        tooltipBorder: 'rgba(255, 255, 255, 0.2)',      // Subtle borders in tooltips
    },

    // ============================================================
    // TYPOGRAPHY
    // ============================================================

    typography: {
        // Font family stack (system fonts for performance)
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, sans-serif',

        // Font sizes (em-based for scalability and accessibility)
        sizes: {
            xxl: '5em',         // 80px Title
            xl: '2em',          // 32px - Stat values, large numbers
            lg: '1.2em',        // ~19px - Taglines, subheadings
            md: '1em',          // 16px - Base/body text (reference size)
            sm: '0.9em',        // ~14px - Small text, labels, footer
            xs: '0.85em',       // ~13px - Tooltips, badges, category labels
            xxs: '0.75em',      // ~12px - Signal indicators, tiny labels
            tiny: '0.8em',      // ~13px - Tooltip sources, attribution
        },

        // Font weights
        weights: {
            normal: 400,        // Regular text
            medium: 500,        // Slightly emphasized
            semibold: 600,      // Labels, headings
            bold: 700,          // Strong emphasis
        },
    },

    // ============================================================
    // SPACING
    // ============================================================

    spacing: {
        // Padding/margin scale (px for precision in layout)
        xxs: '2px',         // Tiniest spacing
        xs: '4px',          // Minimal spacing (tight grouping)
        sm: '8px',          // Small spacing (compact elements)
        md: '12px',         // Medium spacing (standard padding)
        lg: '15px',         // Large spacing (comfortable padding)
        xl: '20px',         // Extra large (section spacing)
        xxl: '30px',        // Very large (major sections, cards)
        xxxl: '40px',       // Largest (top-level spacing)
        tagline: '-10px',   // Negative margin for tagline

        // Border radius scale
        radius: {
            sm: '2px',      // Highlights, minimal rounding
            md: '4px',      // Small indicators, subtle rounding
            lg: '8px',      // Standard (cards, inputs, tooltips)
            xl: '12px',     // Large (cards, signal pills, prominent elements)
        },
    },

    // ============================================================
    // BOX SHADOWS
    // ============================================================

    shadow: {
        horizontal: '0px',
        verticalSmall: '5px',
        verticalLarge: '10px',
        blurSmall: '15px',
        blurMedium: '20px',
        blurLarge: '40px',
    },

    // ============================================================
    // TRANSITIONS
    // ============================================================

    transition: {
        fast: '0.2s',
        medium: '0.3s',
        slow: '0.5s',
    },

    // ============================================================
    // IMAGES
    // ============================================================

    logo: {
        size: '100px',
    },

    // ============================================================
    // FLAGGED TERMS
    // ============================================================

    flagged: {
        underline: '3px',
    }

};

const buttonClickTimeout = 200;

/**
 * Initialize Theme - Inject CSS Custom Properties
 *
 * Converts THEME_CONFIG values into CSS variables on the :root element.
 * This allows CSS to reference theme values using var(--variable-name).
 *
 * Called automatically on page load (DOMContentLoaded).
 */
function initializeTheme() {
    const root = document.documentElement;

    // ============================================================
    // COLORS
    // ============================================================

    // Brand colors
    root.style.setProperty('--color-primary', THEME_CONFIG.colors.primary);
    root.style.setProperty('--color-primary-dark', THEME_CONFIG.colors.primaryDark);
    root.style.setProperty('--color-secondary', THEME_CONFIG.colors.secondary);

    // Backgrounds
    root.style.setProperty('--bg-page', THEME_CONFIG.backgrounds.page);
    root.style.setProperty('--bg-card', THEME_CONFIG.backgrounds.card);
    root.style.setProperty('--bg-input', THEME_CONFIG.backgrounds.input);
    root.style.setProperty('--bg-tooltip', THEME_CONFIG.backgrounds.tooltip);

    // Text
    root.style.setProperty('--text-primary', THEME_CONFIG.text.primary);
    root.style.setProperty('--text-muted', THEME_CONFIG.text.muted);
    root.style.setProperty('--text-white', THEME_CONFIG.text.white);

    // Links
    root.style.setProperty('--link-unvisited', THEME_CONFIG.link.unvisited);
    root.style.setProperty('--link-visited', THEME_CONFIG.link.visited);
    root.style.setProperty('--link-hover', THEME_CONFIG.link.hover);
    root.style.setProperty('--link-active', THEME_CONFIG.link.active);
    root.style.setProperty('--link-tooltip', THEME_CONFIG.link.tooltip);

    // Borders
    root.style.setProperty('--border-default', THEME_CONFIG.borders.default);
    root.style.setProperty('--border-focus', THEME_CONFIG.borders.focus);

    // Progress bar
    root.style.setProperty('--progress-height', THEME_CONFIG.progress.height);
    root.style.setProperty('--progress-track', THEME_CONFIG.progress.track);
    root.style.setProperty('--progress-bar', THEME_CONFIG.progress.bar);

    // Ticker
    root.style.setProperty('--ticker-text', THEME_CONFIG.ticker.text);
    root.style.setProperty('--ticker-background', THEME_CONFIG.ticker.background);
    root.style.setProperty('--ticker-height', THEME_CONFIG.ticker.height);

    // States - Success
    root.style.setProperty('--state-success-bg', THEME_CONFIG.states.success.bg);
    root.style.setProperty('--state-success-text', THEME_CONFIG.states.success.text);
    root.style.setProperty('--state-success-border', THEME_CONFIG.states.success.border);

    // States - Warning
    root.style.setProperty('--state-warning-bg', THEME_CONFIG.states.warning.bg);
    root.style.setProperty('--state-warning-text', THEME_CONFIG.states.warning.text);
    root.style.setProperty('--state-warning-border', THEME_CONFIG.states.warning.border);

    // States - Danger
    root.style.setProperty('--state-danger-bg', THEME_CONFIG.states.danger.bg);
    root.style.setProperty('--state-danger-text', THEME_CONFIG.states.danger.text);
    root.style.setProperty('--state-danger-border', THEME_CONFIG.states.danger.border);

    // Unflagged
    root.style.setProperty('--unflagged-color', THEME_CONFIG.unflagged.color);
    root.style.setProperty('--unflagged-hover', THEME_CONFIG.unflagged.hover);

    // Flagging demos for about section
    root.style.setProperty('--color-demo', THEME_CONFIG.demo);

    // Buttons
    root.style.setProperty('--btn-primary-bg', THEME_CONFIG.buttons.primary.background);
    root.style.setProperty('--btn-clicked-bg', THEME_CONFIG.buttons.primary.clicked);
    root.style.setProperty('--btn-primary-text', THEME_CONFIG.buttons.primary.text);
    root.style.setProperty('--btn-disabled-bg', THEME_CONFIG.buttons.disabled.background);
    root.style.setProperty('--btn-disabled-text', THEME_CONFIG.buttons.disabled.text);

    // Effects (shadows, overlays)
    root.style.setProperty('--shadow-light', THEME_CONFIG.effects.shadowLight);
    root.style.setProperty('--shadow-medium', THEME_CONFIG.effects.shadowMedium);
    root.style.setProperty('--tooltip-text', THEME_CONFIG.effects.tooltipText);
    root.style.setProperty('--tooltip-text-muted', THEME_CONFIG.effects.tooltipTextMuted);
    root.style.setProperty('--tooltip-border', THEME_CONFIG.effects.tooltipBorder);

    // ============================================================
    // TYPOGRAPHY
    // ============================================================

    // Font family
    root.style.setProperty('--font-family', THEME_CONFIG.typography.fontFamily);

    // Font sizes
    root.style.setProperty('--font-size-xxl', THEME_CONFIG.typography.sizes.xxl);
    root.style.setProperty('--font-size-xl', THEME_CONFIG.typography.sizes.xl);
    root.style.setProperty('--font-size-lg', THEME_CONFIG.typography.sizes.lg);
    root.style.setProperty('--font-size-md', THEME_CONFIG.typography.sizes.md);
    root.style.setProperty('--font-size-sm', THEME_CONFIG.typography.sizes.sm);
    root.style.setProperty('--font-size-xs', THEME_CONFIG.typography.sizes.xs);
    root.style.setProperty('--font-size-xxs', THEME_CONFIG.typography.sizes.xxs);
    root.style.setProperty('--font-size-tiny', THEME_CONFIG.typography.sizes.tiny);

    // Font weights
    root.style.setProperty('--font-weight-normal', THEME_CONFIG.typography.weights.normal);
    root.style.setProperty('--font-weight-medium', THEME_CONFIG.typography.weights.medium);
    root.style.setProperty('--font-weight-semibold', THEME_CONFIG.typography.weights.semibold);
    root.style.setProperty('--font-weight-bold', THEME_CONFIG.typography.weights.bold);

    // ============================================================
    // SPACING
    // ============================================================

    // Padding/margin scale
    root.style.setProperty('--spacing-xxs', THEME_CONFIG.spacing.xxs);
    root.style.setProperty('--spacing-xs', THEME_CONFIG.spacing.xs);
    root.style.setProperty('--spacing-sm', THEME_CONFIG.spacing.sm);
    root.style.setProperty('--spacing-md', THEME_CONFIG.spacing.md);
    root.style.setProperty('--spacing-lg', THEME_CONFIG.spacing.lg);
    root.style.setProperty('--spacing-xl', THEME_CONFIG.spacing.xl);
    root.style.setProperty('--spacing-xxl', THEME_CONFIG.spacing.xxl);
    root.style.setProperty('--spacing-xxxl', THEME_CONFIG.spacing.xxxl);
    root.style.setProperty('--spacing-tagline', THEME_CONFIG.spacing.tagline);

    // Border radius scale
    root.style.setProperty('--radius-md', THEME_CONFIG.spacing.radius.md);
    root.style.setProperty('--radius-lg', THEME_CONFIG.spacing.radius.lg);
    root.style.setProperty('--radius-xl', THEME_CONFIG.spacing.radius.xl);

    // ============================================================
    // BOX SHADOW
    // ============================================================

    root.style.setProperty('--box-shadow-h', THEME_CONFIG.shadow.horizontal);
    root.style.setProperty('--box-shadow-v-sm', THEME_CONFIG.shadow.verticalSmall);
    root.style.setProperty('--box-shadow-v-lg', THEME_CONFIG.shadow.verticalLarge);
    root.style.setProperty('--box-shadow-b-sm', THEME_CONFIG.shadow.blurSmall);
    root.style.setProperty('--box-shadow-b-md', THEME_CONFIG.shadow.blurMedium);
    root.style.setProperty('--box-shadow-b-lg', THEME_CONFIG.shadow.blurLarge);

    // ============================================================
    // TRANSITIONS
    // ============================================================

    root.style.setProperty('--transition-fs', THEME_CONFIG.transition.fast);
    root.style.setProperty('--transition-md', THEME_CONFIG.transition.medium);
    root.style.setProperty('--transition-sl', THEME_CONFIG.transition.slow);

    // ============================================================
    // IMAGES
    // ============================================================

    // Logo
    root.style.setProperty('--logo-size', THEME_CONFIG.logo.size);

    // ============================================================
    // FLAGGED TERMS
    // ============================================================

    root.style.setProperty('--flagged-underline', THEME_CONFIG.flagged.underline);


}

// Export for use in modules (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { THEME_CONFIG, initializeTheme };
}
