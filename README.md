# 🐕 GoodBoy - Coded & Offensive Language Detection Tool

A free, lightweight, browser-based tool that detects coded and offensive language.

## Quick Start

1. **Open `index.html`** in your web browser
2. Paste text into the input area
3. Click "Analyze Text"
4. Hover over highlighted terms to see their meanings

That's it! No installation, no server, no dependencies.

## Project Structure

```
goodboy/
├── index.html                   # Main application
├── js/                          # JavaScript utilities (required)
│   ├── obfuscation-utils.js     # Shared obfuscation detection logic
│   ├── morphology-utils.js      # Demonym generation and detection
│   ├── theme-config.js          # Theme configuration (design system)
│   └── category-config.js       # Category hierarchy (single source of truth)
├── data/                        # Databases
│   ├── dogwhistle_data.js       # Dog whistle database (from Silent Signals)
│   ├── offensive_term_data.js   # Offensive term database (custom curated)
│   └── gazetteer.js             # Geographic database for pattern matching
├── docs/                        # Documentation
│   └── GoodBoy_Design_Document_v0.5.md
└── README.md                    # This file
```

## Datasets

**Dog Whistle Database**:
- Based on SALT-NLP's "Silent Signals: Disambiguated Dog Whistle Usage Dataset" with additional curated terms
- 299+ unique dog whistle terms
- 20 categories (racist, antisemitic, transphobic, ableist, anti-intellectualist, fundamentalist, etc.)
- Primary source: https://huggingface.co/datasets/SALT-NLP/silent_signals
- Continuously expanded with community-sourced additions

**GoodBoy Offensive Term Database** (custom curated):
- Curated list of offensive and hateful language
- Complementary to dog whistle detection

**Geographic Gazetteer** (custom curated):
- 195 countries
- 33 substate nations (Scotland, Catalonia, Quebec, Kurdistan, etc.)
- 52 identity-relevant regions (Texas, Bavaria, Balkans, etc.)
- 135 major global cities
- Used for pattern-matching nationalist and localist language globally

## Features Implemented

✅ **Dual Detection System**
- Dog whistles (coded language) - background color highlights
- Offensive terms (explicit language) - colored underlines
- Clear visual distinction between the two types

✅ **Advanced Pattern Matching**
- Obfuscation detection (leet speak, character substitution, accented characters)
- Plural matching
- Whitespace variation handling ("soyboy", "soy-boy", "soy boy")
- Root term matching with variation support

✅ **Populist Language Detection**
- Template-based pattern matching for place-based dog whistles
- Automatically generates demonyms (America → American, Americans)
- Detects global variations of nationalist expressions
- Examples detected:
  - "America First" pattern matches "Britain First", "India First", etc.
  - "Make America Great Again" matches "Make Liverpool Great Again", "Make Scotland Great Again"
  - "hard-working Americans" matches "hard-working Indians", "hard-working Scots"
- Intelligent categorization: Countries/Substate Nations → Nationalist, Regions/Cities → Localist
- Ensures the tool works globally, not just for American-centric expressions

✅ **Interactive UI**
- Category-specific color coding (18 different categories)
- Hover tooltips with detailed information
- Smart tooltip positioning (stays within viewport)

✅ **Statistics & Scoring**
- Terms flagged count with type breakdown
- Category distribution display
- Signal score (0-100%) with severity indicator
- Interactive score breakdown tooltip showing calculation details
- Proper pluralization in all displays

✅ **Technical Excellence**
- 100% client-side processing (privacy-first)
- Zero dependencies, no build process
- DRY code architecture with shared utilities
- Theme configuration for easy customization
- Responsive design (desktop and mobile)

✅ **Proper Attribution**
- Silent Signals dataset citation
- GoodBoy database documentation

## Features Pending / In Progress

⏳ **Analytics Tracking** - Metrics defined but not yet implemented (privacy-first approach)
⏳ **Offensive Term Database Expansion** - Currently in active development

## Deployment

The app is 100% static and can be deployed to:
- **GitHub Pages** (recommended, free)
- **Netlify** (free tier)
- **Vercel** (free tier)
- Any static hosting service
- Even opened directly from filesystem

Just upload these files:
- `index.html`
- `/js/` (obfuscation-utils.js, morphology-utils.js, theme-config.js, category-config.js)
- `/data/` (dogwhistle_data.js, offensive_term_data.js, gazetteer.js)
- `/images/` (background image)

## Technical Details

### Pattern Matching Architecture
- **Triple Matcher System**: Separate classes for dog whistles, offensive terms, and pattern-based detection
  - `DogWhistleMatcher`: Coded language from Silent Signals dataset
  - `OffensiveTermMatcher`: Explicit hateful language from curated database
  - `PatternMatcher`: Template-based detection for populist variations
- **Shared Obfuscation Utils**: DRY principle with single source of truth
- **Category Hierarchy System**: Centralized category configuration
  - Single source of truth for all categories in `/js/category-config.js`
  - 8 main categories with 24 subcategories (expandable)
  - Hierarchical structure: main categories (for highlight colors) and subcategories (for detailed classification)
  - Shared between webapp and internal tooling
  - Helper functions for category lookups and management
- **MorphologyUtils**: Generates demonyms from place names for pattern matching
- Case-insensitive flexible regex patterns
- Lookahead/lookbehind for accurate boundary detection
- Groups variations under root terms (e.g., "SJW", "SJWs" → "social justice warrior")
- Template extraction and cross-reference matching for place-based patterns

### Obfuscation Detection
Prevents evasion through multiple techniques:
- **Character Substitution (Leet Speak)**: Detects "$oyboy", "f@g", "cukk", "s0yboy" with comprehensive character mappings
- **Accented Characters**: Catches "søyboy", "sōyboy", "cūck", unicode variants
- **Whitespace Variations**: Matches "soyboy", "soy-boy", "soy_boy", "soy boy", "#soyboy"
- **Ampersand Handling**: "law and order" matches both "law and order" and "law & order"
- **Punctuation Normalization**: Removes redundant variations while preserving meaning
- **Plural Forms**: Automatically adds optional 's' to all patterns
- **Unicode Normalization**: Uses NFC normalization to ensure consistent character encoding

### Signal Scoring Algorithm
Calculates 0-100% score based on three factors:
- **Match Density (70%)**: Percentage of words that are problematic
- **Match Type Weight (20%)**: Offensive terms weighted 1.5x, dog whistles 1.0x
- **Category Diversity (10%)**: Diversity of problematic categories

### Performance
- Databases: ~100KB (compresses well with gzip)
- Load time: Instant on modern browsers
- Analysis time: Near-instant for typical text lengths
- Memory usage: Minimal (~2-3 MB)

### Browser Compatibility
- Chrome/Edge: ✅
- Firefox: ✅
- Safari: ✅
- Mobile browsers: ✅
- IE11: ❌ (not supported, uses modern JS)

## Privacy

- **No tracking currently implemented**
- **No cookies**
- **No external requests** (except for future optional analytics)
- **No data storage** (all processing is ephemeral)
- **All analysis happens locally** in your browser

## License & Attribution

The dog whistle database is primarily based on the Silent Signals dataset with additional curated terms:

**Primary Source:** SALT-NLP, "Silent Signals: Disambiguated Dog Whistle Usage Dataset," https://huggingface.co/datasets/SALT-NLP/silent_signals

**Research Paper:** https://aclanthology.org/2024.acl-long.675/

**Additional Terms:** Community-curated additions marked with source attribution

## Roadmap

See `GoodBoy_Design_Document_v0.4.md` for full roadmap including:
- Phase 2: URL Analysis (analyze entire webpages)
- Phase 3: Browser Extension
- Phase 4: Crowdsourced Database Expansion
- Phase 5: Logical Fallacy Detection (with LLM)
- Phase 6: Platform Analysis Tools

## Contributing

This is currently in proof-of-concept phase. Future contributions welcome for:
- Confidence scoring algorithm design
- Analytics implementation
- UI/UX improvements
- Database expansion methodology

## Support

GoodBoy will always be free. Future funding through:
- Donations (Patreon, Ko-fi)
- Grants (digital democracy, media literacy orgs)
- NGO partnerships
- Foundation sponsorships (Mozilla, EFF, etc.)

---

**Built with:** Pure HTML, CSS, and JavaScript
**No frameworks, no dependencies, no build process**
