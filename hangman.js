<script>
// Define variables at initial value
// Arrays of Random Words
var usCityNames = ["Aberdeen", "Abilene", "Akron", "Albany", "Albuquerque", "Alexandria", "Amarillo", "Anaheim", "Anchorage", "Ann Arbor", "Arlington", "Arvada", "Asheville", "Athens", "Atlanta", "Atlantic City", "Augusta", "Aurora", "Austin", "Bakersfield", "Baltimore", "Baton Rouge", "Beaumont", "Bel Air", "Bellevue", "Berkeley", "Birmingham", "Bloomington", "Boise", "Boston", "Boulder", "Bridgeport", "Brownsville", "Buffalo", "Burbank", "Burlington", "Canton", "Cape Coral", "Cary", "Charleston", "Charlotte", "Chattanooga", "Chicago", "Cincinnati", "Clarksville", "Clearwater", "Cleveland", "Colorado Springs", "Columbia", "Columbus", "Concord", "Corpus Christi", "Dallas", "Dayton", "Daytona Beach", "Denton", "Denver", "Des Moines", "Detroit", "Duluth", "Durham", "El Paso", "Elizabeth", "Erie", "Eugene", "Fairfield", "Fargo", "Fayetteville", "Flint", "Fort Collins", "Fort Lauderdale", "Fort Worth", "Frederick", "Fresno", "Gainesville", "Gastonia", "Grand Rapids", "Green Bay", "Greensboro", "Greenville", "Hampton", "Harrisburg", "Henderson", "Hickory", "High Point", "Hollywood", "Honolulu", "Houston", "Huntington", "Huntsville", "Indianapolis", "Inglewood", "Irvine", "Irving", "Jackson", "Jacksonville", "Jefferson", "Jersey City", "Johnson City", "Kalamazoo", "Kansas City", "Knoxville", "Lafayette", "Lancaster", "Lansing", "Las Vegas", "Lewisville", "Lexington", "Lincoln", "Little Rock", "Long Beach", "Los Angeles", "Louisville", "Madison", "Memphis", "Miami", "Milwaukee", "Minneapolis", "Mobile", "Modesto", "Monroe", "Monterey", "Montgomery", "Myrtle Beach", "Naples", "Nashville", "New Haven", "New Orleans", "New York", "New York City", "Newark", "Newport News", "Norfolk", "Oakland", "Odessa", "Ogden", "Oklahoma City", "Olympia", "Omaha", "Orlando", "Panama City", "Pasadena", "Pensacola", "Peoria", "Philadelphia", "Phoenix", "Pittsburgh", "Plano", "Portland", "Portsmouth", "Providence", "Raleigh", "Reading", "Reno", "Richmond", "Roanoke", "Rochester", "Sacramento", "Saint Louis", "Saint Paul", "Salem", "Salt Lake City", "San Antonio", "San Bernardino", "San Diego", "San Francisco", "San Jose", "Santa Ana", "Santa Barbara", "Santa Clara", "Santa Cruz", "Santa Maria", "Santa Rosa", "Sarasota", "Savannah", "Scottsdale", "Scranton", "Seattle", "Sioux City", "Sioux Falls", "Spartanburg", "Spokane", "Springdale", "Springfield", "St. Louis", "St. Paul", "Stockton", "Syracuse", "Tacoma", "Tallahassee", "Tampa", "Thornton", "Toledo", "Topeka", "Trenton", "Tucson", "Tulsa", "Tuscaloosa", "Utica", "Virginia Beach", "Waco", "Washington", "Waterloo", "Westminster", "Wichita", "Wilmington", "Winston", "Worcester", "Yonkers", "York", "Youngstown"];
var countryList = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Anguilla", "Antigua and Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "British Virgin Islands", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Cape Verde", "Cayman Islands", "Chad", "Chile", "China", "Colombia", "Congo", "Cook Islands", "Costa Rica", "Cote D Ivoire", "Croatia", "Cruise Ship", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Estonia", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Greenland", "Grenada", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea Bissau", "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kuwait", "Kyrgyzistan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Mauritania", "Mauritius", "Mexico", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Namibia", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Norway", "Oman", "Pakistan", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Samoa", "San Marino", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", "St Kitts and Nevis", "St Lucia", "St Vincent", "St. Lucia", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "East Timor", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks and Caicos", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "Uruguay", "Uzbekistan", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"];
var usStatesList = ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Guam", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Puerto Rico", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virgin Island", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"];
var seasAndOceans = ["Atlantic Ocean", "Pacific Ocean", "Indian Ocean", "Arctic Ocean", "Southern Ocean", "Mediteranean Sea", "Red Sea", "Persian Gulf", "North Sea", "Sea of Japan", "Carribean Sea", "Baltic Sea", "Irish Sea", "Adriatic Sea", "Aegean Sea", "Black Sea", "South China Sea"];
var worldCapitals = ["Kabul", "Buenos Aires", "Canberra", "Vienna", "Dhaka", "Minsk", "Brussels", "Sarajevo", "Brasilia", "Sofia", "Ottawa", "Santiago", "Beijing", "Bogota", "San Jose", "Zagreb", "Havana", "Prague", "Kinshasa", "Copenhagen", "Santo Domingo", "Cairo", "San Salvador", "Asmara", "Addis Ababa", "Helsinki", "Paris", "Tbilisi", "Berlin", "Athens", "Georgetown", "Budapest", "Reykjavik", "New Delhi", "Jakarta", "Tehran", "Baghdad", "Jerusalem", "Rome", "Kingston", "Tokyo", "Amman", "Nairobi", "Bishkek", "Riga", "Beirut", "Monrovia", "Tripoli", "Vilnius", "Luxembourg City", "Kuala Lumpur", "Mexico City", "Ulaanbaatar", "Rabat", "Windhoek", "Kathmandu", "Amsterdam", "Wellington", "Pyongyang", "Oslo", "Muscat", "Islamabad", "Panama City", "Port Moresby", "Lima", "Manila", "Warsaw", "Lisbon", "San Juan", "Dublin", "Skopje", "Brazzaville", "Bucharest", "Moscow", "San Marino", "Riyadh", "Dakar", "Belgrade", "Freetown", "Singapore", "Bratislava", "Mogadishu", "Pretoria", "Seoul", "Madrid", "Khartoum", "Stockholm", "Bern", "Damascus", "Taipei", "Bangkok", "Tunis", "Ankara", "Kampala", "Kiev", "Abu Dhabi", "London", "Washington", "Montevideo", "Vatican City", "Caracas", "Hanoi"];
//Array of word arrays
var catagories = ["usCityNames", "countryList", "usStatesList", "seasAndOceans", "worldCapitals"];
//Array of hints, matched to catagories array
var hints = ["US City", "Nation", "US State", "Large Body of Water", "World Capitals"];
// Array of potential letters
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// Array of used letters
var usedLetters = [];
// Other Variables
var Lives = 9;

// var randomWord = " ";
// var letterIndex = " ";

// Set initial html

 // Set the inner HTML contents of the #game div to html string

// Function to start game when key is pressed
document.onkeydown = function(event)
{
// maybe a do while lives are > 0. This way values return to normal at end
    var userGuess = event.key;
    console.log(userGuess);
// Function to choose random catagory using math.random and math.floor
    var random1 = Math.floor(Math.random() * catagories.length);
    var catagoryChoosen = catagories[random1];
    console.log(catagoryChoosen);
// function to get hint for user
    var userHint = hints[catagories.indexOf(catagoryChoosen)];
    console.log(userHint);
    console.log(catagoryChoosen);
// Function to choose random word from the catagory
    if (catagoryChoosen === catagories[0])
    {
        var randomWord = usCityNames[Math.floor(Math.random() * catagoryChoosen.length)];
        console.log(randomWord);
    }
    else if (catagoryChoosen === catagories[1])
    {
        var randomWord = countryList[Math.floor(Math.random() * catagoryChoosen.length)];
        console.log(randomWord);
    }
    else if (catagoryChoosen === catagories[2])
    {
        var randomWord = usStatesList[Math.floor(Math.random() * catagoryChoosen.length)];
        console.log(randomWord);
    }
    else if (catagoryChoosen === catagories[3])
    {
        var randomWord = seasAndOceans[Math.floor(Math.random() * catagoryChoosen.length)];
        console.log(randomWord);
    }
    else 
    {
        var randomWord = worldCapitals[Math.floor(Math.random() * catagoryChoosen.length)];
        console.log(randomWord);
    }
// Display word as blanks   
    console.log(randomWord.length);
    var blankWord = [];
    for (i = 0; i < randomWord.length; i++) 
    { 
        if (randomWord[i] !== " ")
        { 
            blankWord.push("_");
        }
        else 
        {
            blankWord.push(" ");
        }
    }
    blankImage = blankWord.join (" ");
    console.log(blankImage);
    var wins = 0;
    var losses = 0;
    var usedLetters = [];
    var lives = 6; 
    var html =
          "<p>Welcome to Hangman, Geographic Edition</p>" +
          "<p>press any letter to continue</p>" +
          "<p>" + blankImage +"</p>" +
          "<p>Lives:" + lives + "</p>" +
          "<p>Used letters: " + usedLetters.join (" "); + "</p>" +
          "<p>Wins: " + wins + "</p>" +
          "<p>Losses: " + losses + "</p>"
          

        // Set the inner HTML contents of the #game div to our html string
    document.querySelector("#game").innerHTML = html;
};
document.onkeydown = null;
document.onkeydown = function(event)
{

    var userGuess = event.key;
    console.log(userGuess);
    if (letters.Contains(userGuess.toLowerCase) === false)
    {
        console.log("not a valid guess");
    }
    else if (randomWord.Contains(userGuess.toLowerCase) || randomWord.Contains(userGuess.toUppercase))
    {
        blankImage.splice(randomWord.indexOf(userGuess.toLowerCase), 1);
        usedLetters.push(userGuess.toLowerCase);
        var html =
        "<p>Welcome to Hangman, Geographic Edition</p>" +
        "<p>press any letter to continue</p>" +
        "<p>" + blankImage +"</p>" +
        "<p>Chances Left:" + lives + "</p>" +
        "<p>Used letters: " + usedLetters.join (" "); + "</p>" +
        "<p>Wins: " + wins + "</p>" +
        "<p>Losses: " + losses + "</p>"
        document.querySelector("#game").innerHTML = html;
        }
        else
        {
            lives--
        };
    };
};



    // document.onkeyup = function (event) {









// Function to display hint using html as var
 // Function to get user guess by capturing key.

