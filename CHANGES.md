# GoodBoy Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.4.71] - 2025-12-08
### Hotfix
  - Single word terms immediately followed by an emoji were not matching

## [0.4.7] - 2025-12-08

### Added
- **Webapp** 
  - New tooltip item for flagged terms that clearly displays whether the term is a "🔣 Coded Term" or "☣️ Harmful Term"
  - News ticker at the bottom of the page
- **Detection**
  -  Smarter emoji detection. Emojis entered into the text box will be flagged when they appear in a whitespace position of a term, but will stop a match from happening if they appear in the middle of a word. Eg False🐑Flag → [False][🐑][Flag], ZO🐑G → ZO[🐑]G

- **Databases** 
  - ~90 new coded terms 
  - ~20 new harmful terms
- **Text Substitution**
  - Additional coded language specific bidirectional substitutions, eg. ppl → people

### Changed
- **Detection**
  - Stacked non-numeric terms are now flagged correctly instead of ignored. eg. ZIOHH matches Zio and HH

### Fixes
  - Emojis were not being detected properly due to a bug
  - Pluralization rules were greedily grabbing 's' from following words
  - Fixed a bug with how coded term weight contributed to signal score

### Known Issues
- **Database character issues** 
  - Database entries with an extreme amount of 'unusual' characters such as Аляска are currently not supported as the obfuscation utils pattern match too greedily. All examples have been commented out of the data for now

## [0.4.6] - 2025-12-06

### Added
- **Databases** 
  - ~300 new coded terms 
  - ~50 new harmful terms
  - Sexual Objectification sub-category
  - Alt-right sub-category
- **Normalization**
  - Ordinal normalization. eg 1st → first
- **Text Substitution**
  - Coded language specific bidirectional substitutions, eg. govt → government, libs → liberals

### Changed
- **General** 
- Changed all instances of "dog whistle" to use the phrase "coded term" instead, unless the codedd term is specifically a ddog whistle
- **Databases** 
  - Combined Cognitive and Physical disability sub-categories due to the huge crossover in coded language
  - Combined Anti-GMO and Anti-vax sub-categories into a broader Pseudoscience category
  - More obfuscation rules

## [0.4.5] - 2025-12-06

### Added
- **Detection**
  - The coded term matcher now recognises use of religionyms in place of demonyms, for example "Keep England Protestant" will now be flagged as it is essentially a derivation of the "Keep England English" pattern
- **Databases** 
  - New database: religionym_lookup.js
  - Christophobia, Sikhophobia, Religious Minorities, Non-Believers, Religious Populism and Ageist sub-categories
  - Harmful Gender & Sexuality terms from the Chew Inclusive Terminology Glossary
  - Harmful sectarian terms from the Action on Sectarianism Glossary
  - Harmful religious terms (all sub-categories)
  - Harmful Ageist terms
  - Additional curated coded and harmful terms
- **Obfuscation**
  - UK / US spellings and contractions
  - Slang / Eye dialect 
  - Meme speak
- **Webapp** 
  - On touch enabled devices you can now touch a term or icon to open the tooltip, then touch anywhere else to close the tooltip.

### Changed
- **Performance**
  - Analysis now happens much faster due to major refactoring
- **Signal Score Calculation** 
  - Total rework of the calculation system, it should now give much more useful results.
- **Databases** 
  - Reclassified Jew-to-Jew harmful terms under the antisemitic subcategory to ensure consistent treatment of all antisemitic content, regardless of speaker identity
  - Removed the Pseudoscience subcategory as it was too broad, moved all pseudoscientific terms into other cattegories
  - Category color tweaks to improve readability
- **Detection**
  - Dynamically detected populist phrases that include both a location and an identity are now correctly categorised using the demonym:
    - "Liverpool is for Liverpudlians" → localist ✓
    - "Liverpool is for Englishmen" → nationalist ✓
    - "Liverpool is for Europeans" → regionalist ✓

## [0.4.0] - 2025-12-04

### Added
- **Databases** 
  - Mental health condition subcategory
  - Rhetorical Manipulation category, including the sub-categories Bad Faith, Deflection/Performative, Personal-Responsibility, Dehumanization and Emotional Dismissal
  - Sectarian and hinduphobic sub categories to the religion category - more to come as the database expands

### Changed
- **Webapp** 
  - Buttons now scale to fit smaller screens, the UI should be much tidier on mobile devices now
  - Changed the way we calculate the number of coded and harmful terms in the databases
  - Modified about section to include a mission statement, and some notes on use
  - Color theming changes
  - Removed links from tooltips, please use the attributions section to visit sources instead
  - When generating a tooltip for a flagged coded term up to 6 random variations are displayed instead of an exhaustive list. If the list has been cut for brevity the label will be "Variations include" instead of "Variations"
- **Unified place-demonym lookup system**
  - Now matches place/demonyms hierarchically such that 'Keep Liverpool Liverpudlian' still matches but now 'Keep Liverpool English', 'Keep Liverpool British' and 'Keep Liverpool European' now match as well
  - Dynamically detected regionalist phrases are now correctly categorized by the matcher
- **Databases** 
  - +700 Ethnic slurs added to harmful language database
  - Additional curated coded terms and harmful language
  - Added transcontinental cities and islands and correctly tagged transcontinental countries
  - Combined anti-asian and anti-latino into a broader racism category
  - Changed all references to "offensive language" to "harmful language"
- **Obfuscation**
  - If an obfuscated word or phrase matches with a term in the harmful language database, then the tooltip will clearly display the unobfuscated term
  - Obfuscation algorithm now handles replacement of C with K to catch more meme speak
  - Random punctuaton inserted mid word will now allow matching,for example "b/l/o/o/d & h/o/n/o/r"
  - Stacked numeric hate symbols are now properly flagged when appended to other coded terms and hateful terms, eg "hh13" and "2813" with both be flagged as two matches
  - Spaces and special chararacters between emojis are now ignored, so "🤡 🌎" and "🤡/🌎" now match 🤡🌎
  - **Numeric-to-Word Obfuscation System** (`/js/number-obfuscation-utils.js`):
    - Automatically detects and matches numeric hate symbols in both digit and word forms
    - Bidirectional matching: "1488" matches "fourteen eighty eight" and vice versa
    - Mixed-form support: "1488" matches "14 eighty eight", "fourteen 88", "14 hundred 88", etc.
    - Supports 0-9999 range (covers all numeric codes in database)
    - Multiple word variations: formal ("one thousand four hundred eighty eight"), informal ("fourteen eighty eight"), with/without "and" conjunction
    - Segmented pattern generation: breaks 4-digit numbers into parts where each segment can be digit OR word
    - Flexible whitespace: matches spaces, hyphens, underscores ("eighty-eight", "eighty_eight", "eighty eight")
    - Zero memory overhead: uses lazy pattern generation instead of pre-computing all variations
    - Examples detected:
      - "1488" matches: "1488", "14 88", "fourteen eighty eight", "14 eighty eight", "fourteen 88", "fourteen hundred eighty eight"
      - "88" matches: "88", "eighty eight", "eighty-eight"
      - "14" matches: "14", "fourteen"

## [0.3.1] - 2025-12-03

### Changed
- **Databases** 
  - 50+ coded terms from ADL's hate symbols database Hate On Display
  - Fixed spelling errors in coded term data

## [0.3.0] - 2025-12-02

### Added
- **Database expansion** 
  - Additional coded and harmful terms
- **Additonal sections** 
  - Help section with instructions and main category legend
  - About section

### Changed
- **New Tagline** 
  - Sniffing out coded language
- **Unified place-demonym lookup system** (`/data/place_demonym_lookup.js`):
  - Replaced `/data/gazetteer.js` and `/js/morphology-utils.js` with pre-computed lookup table
  - Links place variants to canonical names (USA/US/America/United States → "United States" → "American")
  - Bidirectional O(1) hash lookups (311x performance improvement over runtime generation)
  - Fixes "USA is for Americans" matching (variant linking prevents incorrect demonym generation)
  - Removed substateNations entirely as they are functionally the same as countries
  - Fixed an issue causing derivation info in coded term tooltips to be lowercase.
- **Source database** (`/data/source_data.js`):
  - Reworked tooltip source attribution to use database
  - Reworked attribution section to read from database
  - Updated all databases to use source ids
- **Obfuscation**
  - Obfuscation algorithm now handles replacement of A and E with 0 to catch more meme speak
- **Harmful term tooltip** 
  - Removed variations and root term as this feature was too open to exploitation. This tool is not supposed to be a slur thesaurus
- **Contextual button behavior** 
  - All buttons are now visually disabled when unavailable

## [0.2.0] - 2025-11-28

### Added
- **Enhanced Demonym Pattern Matching System**: Complete rewrite of populist language detection
  - Dual-placeholder support: Patterns with both `[place]` AND `[demonym]` (e.g., "Keep England English" → "Keep Scotland Scottish")
  - MorphologyUtils module (/js/morphology-utils.js): Shared demonym generation and detection library
    - Generates demonyms from place names (America → American, Americans; Scotland → Scottish, Scot, Scots)
    - Irregular demonym dictionary (72+ entries covering major nations, regions, cities, and ethnic groups)
    - Form identification (adjective, plural, place name)
    - Reverse lookup (demonym → place)
    - Dual-export pattern for Node.js and browser compatibility
  - Hybrid categorization logic:
    - Nationalist/localist patterns auto-categorize by place type (countries → nationalist, cities → localist)
    - Other categories (racist, antisemitic, etc.) preserve original category
    - Location-specific patterns (e.g., "Israel Lobby") never generate variations
  - Examples detected:
    - "Keep England English" → "Keep Scotland Scottish", "Keep Manchester Mancunian" (preserves "racist" category)
    - "hard-working Americans" → "hardworking Scots", "hard-working Mancunians" (all case/hyphen/plural variations)
  - Overlap detection with longest-match priority (prevents "scot" from blocking "scots")
  - Global regex matching (finds ALL occurrences in text, not just first)
  - Full ObfuscationUtils integration (case-insensitive, hyphen variations, plural handling)
- Signal score breakdown tooltip: Info icon (ⓘ) next to signal score severity indicator
  - Displays match density (70%), match type weight (20%), and category diversity (10%) components
  - Shows underlying metrics: match count, word count, harmful vs coded term counts, unique categories
  - DRY implementation: pulls from existing `calculateSignalScore()` logic
- Category configuration module (/js/category-config.js): Centralized category hierarchy
  - CATEGORY_HIERARCHY now shared between webapp and internal tooling
  - Helper functions for category management
  - Supports dynamic category creation with placeholder colors
- Theme configuration module (/js/theme-config.js) for webapp theming
- Database expansion: Additional coded terms, irregular demonyms, and curated terms

### Changed
- **PatternMatcher complete rewrite**:
  - Removed form-based filtering (was incorrectly excluding plural matches)
  - Now uses ALL generated demonyms with ObfuscationUtils for flexible matching
  - Pattern extraction processes both root and variation terms with deduplication
  - Collect-then-filter architecture (gather all potential matches, sort by length, filter overlaps)
  - Added 's?' suffix to patterns for proper plural matching (consistent with CodedTermMatcher/HarmfulTermMatcher)
- `calculateSignalScore()` now returns object with `total` and `breakdown` properties
  - Maintains backward compatibility through structured return value
  - Enables transparent, dynamic tooltip updates
- Refactored category system architecture
  - Extracted CATEGORY_HIERARCHY from index.html to /js/category-config.js
  - Webapp now imports category configuration instead of defining inline
- Database cleanup: Removed unused `categories` metadata field from coded_term_data.js
  - Category statistics now calculated dynamically from actual matches
  - Reduces file size and eliminates metadata/data inconsistency

### Fixes
- Demonym patterns now correctly match all case/hyphen/plural variations
- Multiple occurrences of same pattern in text now all detected (was only finding first)
- Plural 's' now properly highlighted in matches (was being excluded)
- Overlapping matches now resolved by keeping longest match (e.g., "Scots" not "Scot")

### Technical
- MorphologyUtils follows Node.js/browser dual-export pattern (same as obfuscation-utils.js)
- Category hierarchy follows dual-export pattern
- Improved code organization: category logic and morphology logic separated from application
- Foundation for future extensibility (easier to add new categories, demonyms, and maintain patterns)

## [0.1.0] - 2025-11-28 (Initial Internal Release)

### Added
- Initial proof-of-concept implementation
- Dual detection system: coded terms (Silent Signals dataset) and harmful terms (GoodBoy database) -  homophobic terms only at this stage, proof of concept
- Advanced pattern matching with obfuscation detection
- Populist language detection with global place-based patterns
- Signal scoring algorithm (70% density, 20% type weight, 10% category diversity)
- Interactive UI with category-specific color coding
- Statistics panel with term counts, categories, and signal score with severity indicator
- 100% client-side processing (privacy-first)
- Zero dependencies, no build process required
