# GoodBoy Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.4.8.6] - 2025-12-15
### Fixes
  - Fixed an issue causing harmful terms to not be correctly underlined
  - Fixed a matching error that occured when a numerical string could be unobfuscated into letters that prevented the numerical checker running
  - Fixed an issue where numerical obfuscations of letters were not being highlighted

## [0.4.8.5] - 2025-12-15
### Changed
- **Webapp**
  - Theme tweaks and improvements
  - Visual improvements for mobile / small screens
  
- **Database**
  - Cleaner database loading procedure

## [0.4.8.4] - 2025-12-14
### Added
- **Webapp**
  - Progress bar added to give better feedback during analysis
  - Logo at bottom right of webapp, auto fades when under page content
  - Favicons
  - Small visual improvements

## [0.4.8.3] - 2025-12-12
### Added
- **Webapp** 
  - Analysis progress is now tracked and visible to the user. This feature will be expanded upon in subsequent releases
  - User may now abort an analysis which is taking too long by clicking the clear button

### Changed
- **Technical**
  - Pattern matching performance upgrade, you should notice an improvement for long text with multiple places, demonyms and religionyms

## [0.4.8.2] - 2025-12-11
### Changed
- **Detection**
  - Added match ranking, so that if a term matches more than one item from the databases we are able to discern which term is closest, and present that match to the user. Eg Turko v Turco, Kurepi v Curepí, Kanaka v Canaca, TIM v Tim etc. Due to normalization and de-obfuscation the system was unable to tell these pairs apart until now
  - Demonym/religionym plurals are now detected properly
  - Religionist terms are now categorized properly

### Added
- **Databases** 
  - Incel sub-category added
  - 33 new terms

- **Technical**
  - Refactored tooltips creation to their own script
  - Refactored signal score and category functions into signal_score.js and category_config.js respectively

## [0.4.8.1] - 2025-12-10
### Changed
- **Technical**
  - Refactor of text_utils, number_utils and matchers

- **Databases** 
  - Algospeak main category added
  - Over 100 new terms

## [0.4.8] - 2025-12-10
### Added
- **Unflag Terms**
  - You can now click the flag icon in the top right of a term tooltip to manually unflag it. This is useful if you think the term was not used in the flagged context and wish tto exclude it from the result
  - Unflagged terms have a gray highlight or underline. You can still see the term tooltip by clicking/hovering on unflagged terms
  - You can reflag a term by clicking the flag icon in the tooltip again
  - On unflag / reflag the signal score and breakdown will be recalculated

### Changed
- **Signal Score** 
  - Signal score calculation has been tweaked slightly

- **Webapp** 
  - You may now click on a term to pin its tooltip open. Click anywhere else to close it again. You may also pin the signal score info this way
  - Sources in tooltips are now clickable urls
  - Cursor now changes to the not allowed symbol when hovering on a button you cannot currently click
  - Removed database filtering on load. This is not necessary due to new in-house tools
  - Harmful term underlining color is now set by the main category color, rather than sub category color. This now matches the behavior of coded term 

## [0.4.7.6] - 2025-12-10
### Added
- **Databases** 
  - Anti-science and Anti-Conservative sub-categories added
  - 33 new terms

 - **Text Utilities**
  - ~30 new contractions added to text matching system, including pronouns (Eg. you'll → you will, he'd → he would, she's → she is)

## [0.4.7.5] - 2025-12-09
### Changed
- **Detection** 
  - Emoji detection now properly covers all emojis, including skincolor variations and ZWJ sequences

- **Technical**
  - All emoji regexes are now built once at runtime to improve performance and reduce posibility of duplication errors
  - Cleaner reverse map and text substitution system for detection
  - Clearer filenames for scripts

- **Webapp** 
  - New title font - Magic Red by si.jalembe
  - Ticker animation now properly pauses on hover
  - Removed ability to overscroll
  - Replaced stop cursor with wait cursor during analysis

### Bug fixes
  - Fixed an issue affecting matching for ordinal variations
  - Fixed an issue where auto-plural detection was getting preferential treatment over another match. eg oneship would match [ones]hip instead of [one][ship]

## [0.4.7.1] - 2025-12-08
### Hotfix
  - Single word terms immediately followed by an emoji were not matching

## [0.4.7] - 2025-12-08

### Added
- **Webapp** 
  - New tooltip item for flagged terms that clearly displays whether the term is a "🔣 Coded Term" or "☣️ Harmful Term"
  - User can now not select text outside of the text area
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
- **Text Utilities**
  - UK / US spellings and contractions
  - Slang / Eye dialect 
  - Meme speak
- **Webapp** 
  - On touch enabled devices you can now touch a term or icon to open the tooltip, then touch anywhere else to close the tooltip.

### Changed
- **Performance**
  - Analysis now happens much faster due to major refactoring
- **Signal Score** 
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
- **Text Utilities**
  - If an obfuscated word or phrase matches with a term in the harmful language database, then the tooltip will clearly display the unobfuscated term
  - Obfuscation algorithm now handles replacement of C with K to catch more meme speak
  - Random punctuaton inserted mid word will now allow matching,for example "b/l/o/o/d & h/o/n/o/r"
  - Stacked numeric hate symbols are now properly flagged when appended to other coded terms and hateful terms, eg "hh13" and "2813" with both be flagged as two matches
  - Spaces and special chararacters between emojis are now ignored, so "🤡 🌎" and "🤡/🌎" now match 🤡🌎
  - **Numeric-to-Word Obfuscation System** (`/js/number_utils.js`):
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
- **Text Utilities**
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
  - Full TextUtils integration (case-insensitive, hyphen variations, plural handling)
- Signal score breakdown tooltip: Info icon (ⓘ) next to signal score severity indicator
  - Displays match density (70%), match type weight (20%), and category diversity (10%) components
  - Shows underlying metrics: match count, word count, harmful vs coded term counts, unique categories
  - DRY implementation: pulls from existing `calculateSignalScore()` logic
- Category configuration module (/js/category_config.js): Centralized category hierarchy
  - CATEGORY_HIERARCHY now shared between webapp and internal tooling
  - Helper functions for category management
  - Supports dynamic category creation with placeholder colors
- Theme configuration module (/js/theme_config.js) for webapp theming
- Database expansion: Additional coded terms, irregular demonyms, and curated terms

### Changed
- **PatternMatcher complete rewrite**:
  - Removed form-based filtering (was incorrectly excluding plural matches)
  - Now uses ALL generated demonyms with TextUtils for flexible matching
  - Pattern extraction processes both root and variation terms with deduplication
  - Collect-then-filter architecture (gather all potential matches, sort by length, filter overlaps)
  - Added 's?' suffix to patterns for proper plural matching (consistent with CodedTermMatcher/HarmfulTermMatcher)
- `calculateSignalScore()` now returns object with `total` and `breakdown` properties
  - Maintains backward compatibility through structured return value
  - Enables transparent, dynamic tooltip updates
- Refactored category system architecture
  - Extracted CATEGORY_HIERARCHY from index.html to /js/category_config.js
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
- MorphologyUtils follows Node.js/browser dual-export pattern (same as text_utils.js)
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
