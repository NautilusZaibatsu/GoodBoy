# 🐕 GoodBoy - Sniffing out coded language

A free, lightweight, browser-based tool that detects coded and harmful language.

## Support

Support this project: https://ko-fi.com/nautiluszaibatsu

## Quick Start

1. **Open `index.html`** in your web browser
2. Paste text into the input area
3. Click "Analyze"
4. Hover over highlighted or underlined terms to see their meanings

That's it! No installation, no cookies, no server, no dependencies, no LLMs

## Project Structure

```
goodboy/
├── index.html                        # Main application
├── js/                               # JavaScript utilities
│   ├── text_utils.js                 # Text obfuscation detection logic
│   ├── number_utils.js               # Number obfuscation detection logic
│   ├── theme_config.js               # Webapp theme configuration 
│   ├── matchers.js                   # Pattern/term matchers
│   ├── signal_score.js               # Signal score calculations
│   ├── category_config.js            # Category hierarchy
│   ├── tooltips.js                   # Tooltip creation
│   ├── progress_tracker.js           # Analysis progress tracker
│   └── ticker.js                     # Ticker contents
├── data/                             # Databases
│   ├── coded_term_data.js            # Coded term database
│   ├── harmful_term_data.js          # Harmful term database
│   ├── place_demonym_lookup.js       # Place/demonym lookup for pattern matching
│   ├── religionym_lookup.js          # Religionym lookup for pattern matching
│   └── source_data.js                # Source database  
└── README.md                         # This file
```

## Datasets

**Coded Term Database**:
- Curated list of coded language

**Harmful Term Database** 
- Curated list of harmful and hateful language

**Place-Demonym Lookup**:
- Curated list of places and demonyms

**Religionym Lookup**:
- Curated list of religionyms

## Features Implemented

✅ **Dual Detection System**
- Coded language - background color highlights
- Harmful terms (explicit language) - colored underlines
- Clear visual distinction between the two types

✅ **Advanced Pattern Matching**
- Obfuscation detection (leet speak, character substitution, accented characters)
- Plural matching
- Whitespace variation handling ("soyboy", "soy-boy", "soy boy")
- Root term matching with variation support

✅ **Populist Language Detection**
- Template-based pattern matching for place-based coded language
- Automatically generates demonyms (America → American, Americans)
- Detects global variations of nationalist expressions
- Examples detected:
  - "America First" pattern matches "Britain First", "India First", etc.
  - "Make America Great Again" matches "Make Liverpool Great Again", "Make Scotland Great Again"
  - "hard-working Americans" matches "hard-working Indians", "hard-working Scots"
- Intelligent categorization: Countries → Nationalist, Regions/Cities → Localist
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
⏳ **Harmful Term Database Expansion** - Currently in active development

## Technical Details

### Pattern Matching Architecture
- **Triple Matcher System**: Separate classes for coded terms, harmful terms, and pattern-based detection
  - `CodedTermMatcher`: Coded language from Silent Signals dataset
  - `HarmfulTermMatcher`: Explicit hateful language from curated database
  - `PatternMatcher`: Template-based detection for populist variations
- **Shared Obfuscation Utils**: DRY principle with single source of truth
- **Category Hierarchy System**: Centralized category configuration
  - 8 main categories with numerous subcategories
  - Hierarchical structure: main categories (for highlight colors) and subcategories (for detailed classification)

### Obfuscation Detection
Prevents evasion through multiple techniques:
- **Character Substitution (Leet Speak)**: Detects "$oyboy", "f@g", "cukk", "s0yboy" with comprehensive character mappings
- **Accented Characters**: Catches "søyboy", "sōyboy", "cūck", unicode variants
- **Whitespace Variations**: Matches "soyboy", "soy-boy", "soy_boy", "soy boy", "#soyboy"
- **Punctuation Normalization**: Removes redundant variations while preserving meaning
- **Plural Forms**: Automatically adds optional 's' to all patterns
- **Unicode Normalization**: Uses NFC normalization to ensure consistent character encoding

### Text Substitution
Creates matches without requiring an enormous database
- **Word Substitution**: Slang, eye dialect, meme speech, ordinal numbers, contractions and UK spellings
- **Suffix Substitution**: Bidirectional UK and US suffix handling

### Signal Scoring Algorithm
Calculates 0-100% score based on three factors:
- **Match Density**: Percentage of words that are problematic
- **Match Type Weight**: Harmful an coded terms are weighted
- **Category Diversity**: Diversity of problematic categories

### Performance
- Databases: <450 KB (compresses well with gzip)
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

## Roadmap

We are currently in Phase 1: Proof of concept
- Phase 2: URL Analysis (analyze entire webpages)
- Phase 3: Browser Extension
- Phase 4: Crowdsourced Database Expansion
- Phase 5: Logical Fallacy Detection
- Phase 6: Platform Analysis Tools

## Contributing

This is currently in proof-of-concept phase. Future contributions welcome for:
- Signal scoring algorithm design
- Analytics implementation
- UI/UX improvements
- Database expansion

## Support

GoodBoy will always be free
- Donations welcome: https://ko-fi.com/nautiluszaibatsu
Future funding through:
- Grants (digital democracy, media literacy orgs)
- NGO partnerships
- Foundation sponsorships (Mozilla, EFF, etc.)

---

**Built with:** Pure HTML, CSS, and JavaScript
**No frameworks, no dependencies, no build process**

## License

GoodBoy Source-Available License (GSAL-1.0)
© GoodBoy 2026. All rights reserved.

**GoodBoy** is source-available: you may read the code and contribute improvements, but you may not host, sell, redistribute, or modify the tool outside the official project.
1. Permission to Use
You are permitted to:
- Use the GoodBoy website and tool for free.
- View and study the source code.
- Fork the repository for personal use or to submit contributions.
Create pull requests or issues to improve the official project.
2. Restrictions
You may NOT:
- Host or deploy GoodBoy (modified or unmodified) on any domain, server, platform, or service.
- Redistribute the software or database in any form.
- Modify the codebase and publish, distribute, or host the modified version.
- Sell, license, rent, or commercially exploit GoodBoy or any derivative.
- Use the GoodBoy name, branding, or likeness for any software deployment, service, or product.
- The official and only permitted public version of GoodBoy is hosted at: https://nautiluszaibatsu.github.io/GoodBoy/
3. Collaboration Clause
You may fork the repository solely for:
- personal study,
- experimentation,
- contribution back to the official project via pull requests.
- Forks must remain private and may not be deployed publicly.
4. Intellectual Property
All rights, title, and interest in GoodBoy — including the database, code, wording, model definitions, and branding — remain the exclusive property of the copyright holder.
No rights are granted except those expressly listed in this license.
5. No Warranty
GoodBoy is provided “as is,” without warranty of any kind.
Use at your own risk.
6. Termination
Any violation of this license immediately and automatically terminates your permissions.
Upon termination, you must delete all copies and forks of the software.
7. Contact / Permission Requests
If you wish to:
build integrations,
use parts of the dataset,
or negotiate a special license,
contact: https://github.com/NautilusZaibatsu
