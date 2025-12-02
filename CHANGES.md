# GoodBoy Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.3.0] - 2025-12-04

### Added
- **Database expansion** 
  - Additional dog whistles and harmful terms
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
  - Fixed an issue causing derivation info in dogwhistle tooltips to be lowercase.
- **Source database** (`/data/source_data.js`):
  - Reworked tooltip source attribution to use database
  - Reworked attribution section to read from database
  - Updated all databases to use source ids
- **Obfuscatioin**
  - Obfuscation algorithm now handles replacement of A and E with 0 to catch more meme speak
- **Harmful term tooltip** 
  - Removed variations and root term as this feature was too open to exploitation. This tool is not supposed to be a slur thesaurus
- **Contextual button behavior** 
  - All buttons are now visually disabled when unavailable

### Known Issues
- **Place-demonym system issues** 
  - Place names or demonyms with an extreme amount of 'unusual' characters such as Аляска are currently not supported as the obfuscation utils pattern match too greedily. All examples have been commented out of the data for now

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
  - Shows underlying metrics: match count, word count, harmful vs dog whistle counts, unique categories
  - DRY implementation: pulls from existing `calculateSignalScore()` logic
- Category configuration module (/js/category-config.js): Centralized category hierarchy
  - CATEGORY_HIERARCHY now shared between webapp and internal tooling
  - Helper functions for category management
  - Supports dynamic category creation with placeholder colors
- Theme configuration module (/js/theme-config.js) for webapp theming
- Database expansion: Additional dog whistles, irregular demonyms, and curated terms

### Changed
- **PatternMatcher complete rewrite**:
  - Removed form-based filtering (was incorrectly excluding plural matches)
  - Now uses ALL generated demonyms with ObfuscationUtils for flexible matching
  - Pattern extraction processes both root and variation terms with deduplication
  - Collect-then-filter architecture (gather all potential matches, sort by length, filter overlaps)
  - Added 's?' suffix to patterns for proper plural matching (consistent with DogWhistleMatcher/OffensiveTermMatcher)
- `calculateSignalScore()` now returns object with `total` and `breakdown` properties
  - Maintains backward compatibility through structured return value
  - Enables transparent, dynamic tooltip updates
- Refactored category system architecture
  - Extracted CATEGORY_HIERARCHY from index.html to /js/category-config.js
  - Webapp now imports category configuration instead of defining inline
- Database cleanup: Removed unused `categories` metadata field from dogwhistle_data.js
  - Category statistics now calculated dynamically from actual matches
  - Reduces file size and eliminates metadata/data inconsistency

### Fixed
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
- Dual detection system: Dog whistles (Silent Signals dataset) and harmful terms (GoodBoy database) -  homophobic terms only at this stage, proof of concept
- Advanced pattern matching with obfuscation detection
- Populist language detection with global place-based patterns
- Signal scoring algorithm (70% density, 20% type weight, 10% category diversity)
- Interactive UI with category-specific color coding
- Statistics panel with term counts, categories, and signal score with severity indicator
- 100% client-side processing (privacy-first)
- Zero dependencies, no build process required
