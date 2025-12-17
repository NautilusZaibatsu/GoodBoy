/**
 * GoodBoy Tooltip System
 *
 * Handles all tooltip behavior including:
 * - Pinning/unpinning tooltips
 * - Positioning tooltips
 * - Flag/unflag functionality
 * - Mobile touch support
 */

/**
 * DRY helper: Create tooltip category header (used by both flagged terms and category badges)
 * Requires global: escapeHtml, FLAG_SYMBOLS
 * @param {string} categoryColor - Background color for the header
 * @param {string} label - Category label text
 * @param {boolean} includeFlag - Whether to include the flag button
 * @returns {string} HTML string for tooltip header
 */
function createTooltipHeader(categoryColor, label, includeFlag = false) {
    let headerHtml = `<div class="tooltip-header" style="background-color: ${categoryColor}">`;
    headerHtml += escapeHtml(label);

    if (includeFlag) {
        headerHtml += `<button class="tooltip-flag-btn" data-flagged="true">${FLAG_SYMBOLS.FLAGGED}</button>`;
    }

    headerHtml += `</div>`;
    return headerHtml;
}

/**
 * Setup all tooltip behavior for flagged terms and info icons
 * Requires global variables: pinnedTooltip, isTouchDevice, FLAG_TOOLTIP_TEXT, FLAG_SYMBOLS, THEME_CONFIG
 */
function setupTooltips() {
    const flaggedTerms = document.querySelectorAll('.flagged');
    const infoIcons = document.querySelectorAll('.info-icon');

    // Setup click/touch behavior for pinning flagged term tooltips
    flaggedTerms.forEach(flaggedTerm => {
        const tooltip = flaggedTerm.querySelector('.tooltip');
        if (!tooltip) return;

        // Click/touch handler to pin tooltip
        const pinHandler = (e) => {
            e.preventDefault();
            e.stopPropagation();

            // Hide previous tooltip if different
            if (pinnedTooltip && pinnedTooltip !== tooltip) {
                hideTooltip(pinnedTooltip);
            }

            // Show this tooltip
            showTooltip(flaggedTerm, tooltip);
            pinnedTooltip = tooltip;
        };

        // Add click handler (desktop)
        flaggedTerm.addEventListener('click', pinHandler);

        // Add touch handler (mobile)
        if (isTouchDevice) {
            flaggedTerm.addEventListener('touchstart', pinHandler);
        }

        // Flag button click handler (using DRY toggleFlagState function)
        const flagBtn = tooltip.querySelector('.tooltip-flag-btn');
        if (flagBtn) {
            // Create flag button tooltip as a sibling of .tooltip
            const flagTooltip = document.createElement('span');
            flagTooltip.className = 'flag-button-tooltip';
            flagTooltip.textContent = flagBtn.dataset.flagTooltipText || FLAG_TOOLTIP_TEXT.UNFLAG;
            flaggedTerm.appendChild(flagTooltip);

            // Measure width with both possible texts to prevent resizing
            const originalText = flagTooltip.textContent;
            flagTooltip.style.display = 'block';
            flagTooltip.style.visibility = 'hidden';
            const width1 = flagTooltip.offsetWidth;
            flagTooltip.textContent = FLAG_TOOLTIP_TEXT.REFLAG;
            const width2 = flagTooltip.offsetWidth;
            flagTooltip.textContent = originalText;
            flagTooltip.style.width = `${Math.max(width1, width2)}px`;
            flagTooltip.style.display = 'none';
            flagTooltip.style.visibility = 'visible';

            // Store reference for later updates
            flagBtn.flagTooltipElement = flagTooltip;

            // Store timeout IDs for clearing
            let showTimeout = null;
            let hideTimeout = null;

            const flagHandler = (e) => {
                e.preventDefault();
                e.stopPropagation();

                const isFlagged = flagBtn.dataset.flagged === 'true';
                toggleFlagState(flaggedTerm, tooltip, isFlagged); // DRY!
            };

            flagBtn.addEventListener('click', flagHandler);
            if (isTouchDevice) {
                flagBtn.addEventListener('touchstart', flagHandler);
            }

            // Position flag tooltip on flag button hover
            flagBtn.addEventListener('mouseenter', function () {
                // Clear any pending hide
                if (hideTimeout) {
                    clearTimeout(hideTimeout);
                    hideTimeout = null;
                }

                // Only show if main tooltip is visible
                if (tooltip.classList.contains('tooltip-pinned') || tooltip.style.opacity === '1') {
                    positionFlagTooltip(flagBtn, tooltip, flagTooltip);
                    flagTooltip.style.display = 'block';
                    // Trigger animation after display change
                    showTimeout = setTimeout(() => {
                        flagTooltip.classList.add('visible');
                        showTimeout = null;
                    }, 10);
                }
            });

            flagBtn.addEventListener('mouseleave', function () {
                // Clear any pending show
                if (showTimeout) {
                    clearTimeout(showTimeout);
                    showTimeout = null;
                }

                flagTooltip.classList.remove('visible');
                // Hide after animation completes
                hideTimeout = setTimeout(() => {
                    flagTooltip.style.display = 'none';
                    hideTimeout = null;
                }, 500);
            });
        }

        // Hover behavior only when no tooltip is pinned (desktop only)
        if (!isTouchDevice) {
            flaggedTerm.addEventListener('mouseenter', function (e) {
                if (!pinnedTooltip) {
                    positionTooltip(flaggedTerm, tooltip);
                }
            });
        }
    });

    // Setup info icon tooltips (signal score breakdown)
    infoIcons.forEach(infoIcon => {
        const tooltip = infoIcon.querySelector('.tooltip');
        if (!tooltip) return;

        // Click/touch handler to pin tooltip
        const pinHandler = (e) => {
            e.preventDefault();
            e.stopPropagation();

            // Hide previous tooltip if different
            if (pinnedTooltip && pinnedTooltip !== tooltip) {
                hideTooltip(pinnedTooltip);
            }

            // Show this tooltip
            showTooltip(infoIcon, tooltip);
            pinnedTooltip = tooltip;
        };

        // Add click handler (desktop)
        infoIcon.addEventListener('click', pinHandler);

        // Add touch handler (mobile)
        if (isTouchDevice) {
            infoIcon.addEventListener('touchstart', pinHandler);
        }

        // Hover behavior only when no tooltip is pinned (desktop only)
        if (!isTouchDevice) {
            infoIcon.addEventListener('mouseenter', function (e) {
                if (!pinnedTooltip) {
                    positionTooltip(infoIcon, tooltip);
                }
            });
        }
    });

    // Setup category badge tooltips (results only, not legend)
    const categoryBadges = document.querySelectorAll('#mainCategoryList .category-badge, #subCategoryList .category-badge');

    categoryBadges.forEach(badge => {
        const tooltip = badge.querySelector('.tooltip');
        if (!tooltip) {
            return;
        }

        // Get category info from data attributes
        const categoryKey = badge.dataset.categoryKey;
        const categoryType = badge.dataset.categoryType;

        // Build tooltip content using helper function
        if (categoryKey && categoryType && typeof createCategoryTooltipContent === 'function') {
            const content = createCategoryTooltipContent(categoryKey, categoryType);
            tooltip.innerHTML = content;
        }

        // Click/touch handler to pin tooltip
        const pinHandler = (e) => {
            e.preventDefault();
            e.stopPropagation();

            // Hide previous tooltip if different
            if (pinnedTooltip && pinnedTooltip !== tooltip) {
                hideTooltip(pinnedTooltip);
            }

            // Show this tooltip
            showTooltip(badge, tooltip);
            pinnedTooltip = tooltip;
        };

        // Add click handler (desktop)
        badge.addEventListener('click', pinHandler);

        // Add touch handler (mobile)
        if (isTouchDevice) {
            badge.addEventListener('touchstart', pinHandler);
        }

        // Hover behavior only when no tooltip is pinned (desktop only)
        if (!isTouchDevice) {
            badge.addEventListener('mouseenter', function (e) {
                if (!pinnedTooltip) {
                    positionTooltip(badge, tooltip);
                }
            });
        }
    });

    // Prevent tooltip clicks from closing the tooltip
    document.querySelectorAll('.tooltip').forEach(tooltip => {
        const preventClose = (e) => {
            e.stopPropagation();
        };
        tooltip.addEventListener('click', preventClose);
        if (isTouchDevice) {
            tooltip.addEventListener('touchstart', preventClose);
        }
    });

    // Click/touch anywhere else: hide pinned tooltip
    const closeHandler = (e) => {
        if (pinnedTooltip) {
            hideTooltip(pinnedTooltip);
            pinnedTooltip = null;
        }
    };

    document.addEventListener('click', closeHandler);
    if (isTouchDevice) {
        document.addEventListener('touchstart', closeHandler);
    }
}

/**
 * Show and pin a tooltip
 * @param {HTMLElement} flaggedTerm - The flagged term or info icon element
 * @param {HTMLElement} tooltip - The tooltip element to show
 */
function showTooltip(flaggedTerm, tooltip) {
    tooltip.classList.add('tooltip-pinned');
    document.body.classList.add('tooltip-is-pinned'); // Disable hover on other terms
    positionTooltip(flaggedTerm, tooltip);
}

/**
 * Hide and unpin a tooltip
 * @param {HTMLElement} tooltip - The tooltip element to hide
 */
function hideTooltip(tooltip) {
    tooltip.classList.remove('tooltip-pinned');
    document.body.classList.remove('tooltip-is-pinned'); // Re-enable hover
}

/**
 * Toggle flag state for a term (DRY helper for unflag/reflag)
 * Requires global: FLAG_SYMBOLS, FLAG_TOOLTIP_TEXT, recalculateAllStats()
 * @param {HTMLElement} flaggedSpan - The .flagged span element
 * @param {HTMLElement} tooltip - The tooltip element
 * @param {boolean} shouldUnflag - true to unflag, false to reflag
 */
function toggleFlagState(flaggedSpan, tooltip, shouldUnflag) {
    // Update data attribute
    flaggedSpan.dataset.unflagged = shouldUnflag ? 'true' : 'false';

    // Update button in tooltip
    const flagBtn = tooltip.querySelector('.tooltip-flag-btn');
    if (flagBtn) {
        // Update icon
        flagBtn.textContent = shouldUnflag ? FLAG_SYMBOLS.UNFLAGGED : FLAG_SYMBOLS.FLAGGED;

        // Update flagged state
        flagBtn.dataset.flagged = shouldUnflag ? 'false' : 'true';

        // Update data attribute for tooltip text
        flagBtn.dataset.flagTooltipText = !shouldUnflag
            ? FLAG_TOOLTIP_TEXT.UNFLAG
            : FLAG_TOOLTIP_TEXT.REFLAG;

        // Update the flag tooltip element if it exists
        if (flagBtn.flagTooltipElement) {
            flagBtn.flagTooltipElement.textContent = flagBtn.dataset.flagTooltipText;
        }
    }


    // Recalculate signal score and stats (requires global function)
    if (typeof recalculateAllStats === 'function') {
        recalculateAllStats();
    }
}

/**
 * Position the flag button tooltip next to the main tooltip
 * Requires global: THEME_CONFIG
 * @param {HTMLElement} flagBtn - The flag button element
 * @param {HTMLElement} tooltip - The main tooltip element
 * @param {HTMLElement} flagTooltip - The flag button tooltip element
 */
function positionFlagTooltip(flagBtn, tooltip, flagTooltip) {
    const tooltipRect = tooltip.getBoundingClientRect();

    // Position: left edge at tooltip's right edge, top edge at tooltip's top edge
    flagTooltip.style.position = 'fixed';
    flagTooltip.style.left = `${tooltipRect.right - parseFloat(THEME_CONFIG.spacing.radius.lg)}px`;
    flagTooltip.style.top = `${tooltipRect.top}px`;
}

/**
 * Position a tooltip relative to a flagged term, handling viewport overflow
 * @param {HTMLElement} flaggedTerm - The flagged term or info icon element
 * @param {HTMLElement} tooltip - The tooltip element to position
 */
function positionTooltip(flaggedTerm, tooltip) {
    // Get flaggedTerm position
    const flaggedTermRect = flaggedTerm.getBoundingClientRect();
    const tooltipWidth = 320; // Match CSS width
    const tooltipHeight = tooltip.offsetHeight || 150; // Estimate if not rendered
    const margin = 10;
    const arrowHeight = 8;

    // Viewport dimensions
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    // Calculate initial centered position
    let left = flaggedTermRect.left + (flaggedTermRect.width / 2) - (tooltipWidth / 2);
    let top = flaggedTermRect.top - tooltipHeight - arrowHeight - margin;

    // Reset classes
    tooltip.classList.remove('top', 'bottom', 'align-left', 'align-right');

    // Check if tooltip fits above
    if (top < margin) {
        // Place below instead
        top = flaggedTermRect.bottom + arrowHeight + margin;
        tooltip.classList.add('bottom');
    } else {
        tooltip.classList.add('top');
    }

    // Check horizontal overflow
    if (left < margin) {
        // Align to left edge
        left = margin;
        tooltip.classList.add('align-left');
    } else if (left + tooltipWidth > viewportWidth - margin) {
        // Align to right edge
        left = viewportWidth - tooltipWidth - margin;
        tooltip.classList.add('align-right');
    }

    // Apply position
    tooltip.style.left = `${left}px`;
    tooltip.style.top = `${top}px`;
}

// Browser export (for use in index.html)
if (typeof window !== 'undefined') {
    window.setupTooltips = setupTooltips;
    window.showTooltip = showTooltip;
    window.hideTooltip = hideTooltip;
    window.toggleFlagState = toggleFlagState;
    window.positionFlagTooltip = positionFlagTooltip;
    window.positionTooltip = positionTooltip;
}

// Node.js export (for potential future use)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        setupTooltips,
        showTooltip,
        hideTooltip,
        toggleFlagState,
        positionFlagTooltip,
        positionTooltip
    };
}
