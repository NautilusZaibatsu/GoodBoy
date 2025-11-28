var GAZETTEER = {
  countries: [
    // Official country names
    "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda",
    "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain",
    "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia",
    "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso",
    "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic",
    "Chad", "Chile", "China", "Colombia", "Comoros", "Congo", "Costa Rica", "Croatia",
    "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica",
    "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea",
    "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France", "Gabon",
    "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea",
    "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India",
    "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan",
    "Kazakhstan", "Kenya", "Kiribati", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon",
    "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar",
    "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania",
    "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro",
    "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands",
    "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "South Korea",
    "North Macedonia", "Norway", "Oman", "Pakistan", "Palestine", "Palau", "Panama", "Papua New Guinea",
    "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia",
    "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines",
    "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia",
    "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands",
    "Somalia", "South Africa", "Spain", "Sri Lanka", "Sudan", "South Sudan", "Suriname",
    "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand",
    "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey",
    "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "Uruguay",
    "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia",
    "Zimbabwe", "Kosovo", "Northern Cyprus", "Western Sahara", "South Ossetia", "Abkhazia",
    "Nagorno-Karabakh", "Donetsk", "Luhansk", "Crimea", "Transnistria", "Somaliland", "Tibet",
    "Hong Kong", "Macau", "Kurdistan", "Balochistan", "Aceh", "West Papua",

    // Common / colloquial names
    "America", "USA", "US", "Britain", "UK", "GB", "Great Britain", "Holland", "Burma", "Swaziland",
    "Czechia", "Deutschland", "Russian Federation", "Democratic People's Republic of Korea",
    "Republic of Korea", "UAE", "Palestinian Territories", "West Bank", "Gaza"
  ],

  substateNations: [
    // Official substate nations
    "Abkhazia", "Aceh", "Åland", "Aotearoa", "Aragon", "Balochistan", "Basque Country",
    "Bavaria", "Biafra", "Brittany", "Catalonia", "Chechnya", "Corsica", "Crimea",
    "England", "Flanders", "Friesland", "Galicia", "Greenland", "Hong Kong", "Kurdistan",
    "Lombardy", "Quebec", "Sardinia", "Scotland", "Sicily", "Somaliland", "Tibet",
    "Transnistria", "Valencia", "Wallonia", "Wales", "West Papua", "Nagorno-Karabakh", 
    "Donetsk", "Luhansk",

    // Common / colloquial names
    "Euskadi", "Bretagne", "Catalunya", "Bayern", "Lombardia", "València", "New Zealand Māori",
    "Al-Quds"
  ],

  regions: [
    // Official / formal regions
    "Texas", "California", "Bavaria", "Catalonia", "Quebec", "Sicily", "Sardinia",
    "Andalusia", "Brittany", "Cornwall", "Flanders", "Wallonia", "Lombardy", "Galicia",
    "Kurdistan", "Tibet", "Greenland", "Hong Kong", "Aceh", "Balochistan", "Somaliland",
    "Transnistria", "Basque Country", "Scania", "Karelia", "Crimea",

    // More general geographic regions often used in exclusionary statements
    "Midlands", "New England", "Great Lakes", "Pacific Northwest", "Appalachia",
    "Balkans", "Baltic States", "Iberia", "Levant", "Caucasus", "Maghreb", "Sahel",

    // Common / colloquial names / abbreviations
    "PNW", "Skåne"
  ],

  cities: [
    // Official city names
    "Amsterdam", "Athens", "Atlanta", "Auckland", "Baghdad", "Baku", "Baltimore",
    "Bangkok", "Barcelona", "Beijing", "Beirut", "Belfast", "Belgrade", "Berlin",
    "Birmingham", "Bogotá", "Boston", "Brasília", "Brussels", "Bucharest", "Budapest",
    "Buenos Aires", "Cairo", "Calgary", "Cape Town", "Caracas", "Casablanca", "Chicago",
    "Copenhagen", "Dallas", "Delhi", "Detroit", "Doha", "Dubai", "Dublin", "Edinburgh",
    "Frankfurt", "Geneva", "Glasgow", "Hamburg", "Havana", "Helsinki", "Hong Kong",
    "Houston", "Istanbul", "Jakarta", "Jerusalem", "Johannesburg", "Karachi",
    "Kathmandu", "Kiev", "Kuala Lumpur", "Kolkata", "Kyoto", "Lagos", "Lahore",
    "Las Vegas", "Leeds", "Lima", "Lisbon", "Liverpool", "London", "Los Angeles",
    "Madrid", "Manchester", "Manila", "Melbourne", "Mexico City", "Miami", "Milan",
    "Minneapolis", "Moscow", "Mumbai", "Munich", "Nairobi", "New Orleans", "New York",
    "Osaka", "Oslo", "Ottawa", "Paris", "Philadelphia", "Phoenix", "Prague", "Qingdao",
    "Reykjavik", "Rio de Janeiro", "Rome", "San Diego", "San Francisco", "San Jose",
    "Santiago", "São Paulo", "Seoul", "Shanghai", "Singapore", "Stockholm", "Stuttgart",
    "Sydney", "Taipei", "Tallinn", "Tehran", "Tokyo", "Toronto", "Vancouver", "Vienna",
    "Vilnius", "Warsaw", "Washington", "Wellington", "Zürich",
    "Ramallah", "Gaza City", "Hebron", "Jericho", "Luhansk", "Donetsk", "Mariupol",
    "Sevastopol", "Simferopol", "Pristina", "Stepanakert", "Shusha", "Taipei", "Hong Kong",
    "Karachi", "Lahore", "Islamabad", "Srinagar", "Beirut", "Damascus", "Baghdad",
    "Yerevan", "Baku", "Tabriz", "Tehran", "Ankara", "Istanbul",

    // Common / colloquial names
    "Peking", "Bombay", "NYC", "LA", "Philly", "SF", "Mexico D.F.", "Joburg", "New Delhi",
    "Al-Quds"
  ]
};
