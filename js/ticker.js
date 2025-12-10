const VERSION = "0.4.7.6";
const RELEASE_DATE = "Dec 10th 26";
const NEWEST_TERM = "Newest coded term: \"" + CODED_TERM_DATA.terms[0].root + "\" : " + CODED_TERM_DATA.terms[0].definition;
const TICKER_TEXT = "This project is currently in beta. If you see a mistake or wish to contribute to the project please get in touch, links are in the About section.";

let tickerAnimation = null;

function initTicker() {
    const ticker   = document.getElementById("ticker-text");
    const duplicate = document.getElementById("ticker-text-duplicate");
    const wrapper  = document.getElementById("ticker-wrapper");
    const container = document.getElementById("ticker-container");

    const ticker_content =
        `🐾 GoodBoy v.${VERSION} released ${RELEASE_DATE} | `
      + `${TICKER_TEXT} | ${NEWEST_TERM}`;

    ticker.textContent = ticker_content;
    duplicate.textContent = ticker_content;

    function startTicker() {
        const tickerWidth = ticker.offsetWidth;
        const speed = 50; // px per second
        const duration = (tickerWidth / speed) * 1000; // ms

        // Clear old animation if resize calls it again
        if (tickerAnimation) tickerAnimation.cancel();

        tickerAnimation = wrapper.animate(
            [
                { transform: "translateX(0)" },
                { transform: `translateX(-${tickerWidth}px)` }
            ],
            {
                duration: duration,
                iterations: Infinity,
                easing: "linear"
            }
        );
    }

    // Smooth pause on hover
    container.addEventListener("mouseenter", () => {
        if (tickerAnimation) tickerAnimation.pause();
    });

    container.addEventListener("mouseleave", () => {
        if (tickerAnimation) tickerAnimation.play();
    });

    window.addEventListener("load", startTicker);
}

