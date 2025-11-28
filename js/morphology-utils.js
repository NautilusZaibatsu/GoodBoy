/**
 * GoodBoy Morphology Utilities
 *
 * Shared utilities for generating and detecting demonyms (place-based identity words)
 * Used by both the webapp and dev-tools
 *
 * Examples:
 * - America → American, Americans
 * - England → English, Englander, Englanders
 * - India → Indian, Indians
 */

const MorphologyUtils = {
    // Irregular demonyms that don't follow standard patterns
    // Maps place names to their actual demonyms
    demonymExceptions: {
        // UK & Ireland
        england: ['english', 'englishman', 'englishwoman', 'anglo-saxon'],
        scotland: ['scottish', 'scot', 'scots', 'scotch', 'scotsman', 'scotswoman'],
        wales: ['welsh', 'welshman', 'welshwoman'],
        britain: ['british', 'briton', 'brit'],
        ireland: ['irish', 'irishman', 'irishwoman'],

        // Cities
        manchester: ['mancunian', 'manc'],
        liverpool: ['liverpudlian', 'scouser', 'scouse'],
        glasgow: ['glaswegian'],
        dublin: ['dubliner'],

        // Major irregular country-level demonyms
        germany: ['german', 'teutonic'],       // “german” not derived from “germany”
        france: ['french', 'francophone'],     // “french” is irregular to “france”
        spain: ['spanish', 'spaniard'],
        denmark: ['danish', 'dane'],
        sweden: ['swedish', 'swede'],
        norway: ['norwegian', 'norse'],        // “norse” counts as a historical ethnonym
        finland: ['finnish', 'finn'],
        poland: ['polish', 'pole'],
        greece: ['greek', 'hellene'],          // “hellene” = ethnonym
        netherlands: ['dutch'],                // *fully irregular*
        turkey: ['turkish', 'turk'],

        // Other true irregulars / ethnonyms
        basque_country: ['basque'],
        catalonia: ['catalan'],
        occitania: ['occitan'],
        bavaria: ['bavarian'],                 // irregular enough to include
        bohemia: ['bohemian'],
        morocco: ['moroccan', 'maghrebi'],     // “maghrebi” = regional ethnonym
        egypt: ['egyptian', 'copt'],           // “copt” = ethnoreligious group
        persia: ['persian'],                   // alternative demonym to “iran”
        iraq: ['iraqi', 'mesopotamian'],       // historic
        israel: ['israeli', 'sabran'],         // “sabra” is an Israeli-born ethnonym
        china: ['chinese', 'han'],             // “han” = ethnicity
        japan: ['japanese', 'ainu'],           // Ainu is ethnonym tied to region
        korea: ['korean', 'choson'],           // Choson/Chosŏn as historical
        india: ['indian', 'desi'],             // “desi” = diaspora ethnonym
        pakistan: ['pakistani', 'punjabi', 'sindhi', 'pashtun'], // major ethnolinguistic identities
        afghanistan: ['afghan', 'pashtun', 'tajik', 'hazara'],   // irregular ethnonyms
        mongolia: ['mongolian', 'mongol'],
        tibet: ['tibetan'],

        // Historical / ethnocultural terms
        saxony: ['saxon'],
        normandy: ['norman'],
        brittany: ['breton'],
        cornwall: ['cornish'],
        galicia: ['galician'],               // irregular enough (not simple -ian)
        armenia: ['armenian', 'armenian highlander'],
        kurdistan: ['kurd'],
        romany: ['romani', 'roma', 'sinti']  // true ethnonyms not algorithmic
    },

    // Generate demonym variants for a place name
    generateDemonyms(placeName) {
        const variants = new Set();
        const lower = placeName.toLowerCase();

        // Add the place name itself
        variants.add(placeName);
        variants.add(lower);

        // Check for irregular demonyms first
        if (this.demonymExceptions[lower]) {
            this.demonymExceptions[lower].forEach(d => variants.add(d));
        }

        // Also try algorithmic suffix rules as fallback
        // Simple American pattern
        if (lower.endsWith('a')) {
            const base = lower.slice(0, -1);
            variants.add(base + 'an');
            variants.add(base + 'ans');
        }

        // Simple -ian pattern
        variants.add(lower + 'ian');
        variants.add(lower + 'ians');

        // Simple -ish pattern
        variants.add(lower + 'ish');

        // Simple -ese pattern
        variants.add(lower + 'ese');

        // Simple -i pattern
        variants.add(lower + 'i');
        variants.add(lower + 'is');

        return Array.from(variants);
    },

    // Find demonym in text and return place + form info
    // NOTE: This only returns actual demonyms, not the place name itself
    findDemonymInText(text, allPlaces) {
        const lowerText = text.toLowerCase();

        for (const place of allPlaces) {
            const demonyms = this.generateDemonyms(place);
            for (const demonym of demonyms) {
                // Skip if this is just the place name itself
                const form = this.identifyForm(demonym, place);
                if (form === 'place') continue;

                const regex = new RegExp(`\\b${demonym}\\b`, 'i');
                if (regex.test(lowerText)) {
                    return {
                        demonym: demonym,
                        place: place,
                        form: form
                    };
                }
            }
        }
        return null;
    },

    // Identify what form a demonym takes
    identifyForm(demonym, place) {
        const lower = demonym.toLowerCase();
        const placeLower = place.toLowerCase();

        // Check if it's the place name itself
        if (lower === placeLower) return 'place';

        // Safety feature: filters out algorithmic plurals
        if (lower.endsWith('s') && !lower.endsWith('ese') && !lower.endsWith('ish')) {
            return 'plural';
        }

        // Everything else is adjective/singular form
        // Trust the curated exceptions dictionary
        return 'adjective';
    },

    // Reverse lookup: given a demonym, find the place it refers to
    reverseLookupPlace(demonym, allPlaces) {
        const lowerDemonym = demonym.toLowerCase();

        for (const place of allPlaces) {
            const demonyms = this.generateDemonyms(place);
            const lowerDemonyms = demonyms.map(d => d.toLowerCase());

            if (lowerDemonyms.includes(lowerDemonym)) {
                return {
                    place: place,
                    form: this.identifyForm(demonym, place)
                };
            }
        }
        return null;
    }
};

// Export for Node.js (dev-tools)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = MorphologyUtils;
}
