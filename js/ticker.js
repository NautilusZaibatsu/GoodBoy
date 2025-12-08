const VERSION = "0.4.7";
const RELEASE_DATE = "Dec 8th 26";
const NEWEST_TERM = "Newest coded term: \"" + GOODBOY_DATA.terms[0].root + "\" : " + GOODBOY_DATA.terms[0].definition;

const TICKER_TEXT = "This project is currently in beta. If you see a mistake or wish to contribute to the project please get in touch, links are in the About section.";

function initTicker() {
    const ticker = document.getElementById("ticker-text");
    const duplicate = document.getElementById("ticker-text-duplicate");

    const ticker_content = "🐾 GoodBoy v." + VERSION + " released " + RELEASE_DATE + " | " + TICKER_TEXT + " | " + NEWEST_TERM;
    ticker.textContent = ticker_content;
    duplicate.textContent = ticker_content;

    // Wait for text to render and measure width
    function startTicker() {
        const tickerWidth = ticker.offsetWidth;
        const speed = 50;
        const duration = tickerWidth / speed;
        const wrapper = document.getElementById("ticker-wrapper");

        setTimeout(() => {
            wrapper.style.animation = `scroll ${duration}s linear infinite`;
        }, 3000); // wait 3 seconds
    }

    window.addEventListener("load", startTicker);
    window.addEventListener("resize", startTicker);
}