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
var randomWord = "";
var userHint = "";
var blankWord = [];
var blankImage = "";
var wins = 0;
var losses = 0;
var usedLetters = [];
var usedImage = "";
var lives = 6; 
var html = "<p>Pick a letter to play</p>" +
            "<p>Hint: " + userHint + "</p>" +
            "<p>Word: " + blankImage + "</p>" +
            "<p>Guesses Left: " + lives + "</p>" +
            "<p>Used letters: " + usedImage + "</p>" + 
            "<p>Wins: " + wins + "</p>" +
            "<p>Losses: " + losses + "</p>";
// function to get random word
var changeText = function () {
    html = "<p>press any letter to continue</p>" + "<p>Hint: " + userHint + "</p>" + "<p>Word: " + blankImage +"</p>" + "<p>Guesses Left: " + lives + "</p>" + "<p>Used letters: " + usedImage + "</p>" + "<p>Wins: " + wins + "</p>" + "<p>Losses: " + losses + "</p>";
        document.querySelector("#game").innerHTML = html;
}
var getWord = function () {
    var catagoryChoosen = catagories[Math.floor(Math.random() * catagories.length)];
    userHint = hints[catagories.indexOf(catagoryChoosen)];
    console.log(userHint);   
    var tempRandomWord = "";
    if (catagoryChoosen === catagories[0]) {
        tempRandomWord = usCityNames[Math.floor(Math.random() * catagoryChoosen.length)].toLowerCase();
    } else if (catagoryChoosen === catagories[1]) {
        tempRandomWord = countryList[Math.floor(Math.random() * catagoryChoosen.length)].toLowerCase();
    } else if (catagoryChoosen === catagories[2]) {
        tempRandomWord = usStatesList[Math.floor(Math.random() * catagoryChoosen.length)].toLowerCase();
    } else if (catagoryChoosen === catagories[3]) {
        tempRandomWord = seasAndOceans[Math.floor(Math.random() * catagoryChoosen.length)].toLowerCase();
    } else {
            tempRandomWord = worldCapitals[Math.floor(Math.random() * catagoryChoosen.length)].toLowerCase();
    }    
    randomWord = tempRandomWord.toLowerCase();
    console.log(randomWord); 
    for (i = 0; i < randomWord.length; i++) { 
        if (randomWord[i] !== " ") { 
            blankWord.push("_");
        } else {
            blankWord.push(" ");
        }
    }
    blankImage = blankWord.join (" ");
    console.log(blankImage);
    changeText();
}
var checkMatch = function () {
    if (letters.includes(userGuess.toLowerCase()) === false) {
        console.log("not a valid guess");
    } else if (randomWord.indexOf(userGuess.toLowerCase() !== -1)) {       
        for (i = 0; randomWord.indexOf(userGuess.toLowerCase(), i) !== -1; i++) {
        blankWord.splice(randomWord.indexOf(userGuess.toLowerCase(), i), 1, userGuess.toLowerCase());
        blankImage = blankWord.join(" ");
        testWord = blankWord.join ("");
        console.log(blankImage)
        changeText();
        }
    } else {
        if (usedLetters.indexOf(userGuess.toLowerCase()) === -1) {
            usedLetters.push(userGuess.toLowerCase());
            usedImage = usedLetters.join(',');
            lives--;
        }
        changeText();
    }
}

var clearWord = function () {
        var tempRandomWord = "";
        var randomWord = "";
        var usedLetters = [];
        var userHint = "";
        var blankWord = [];
        var blankImage = "";
        var usedLetters = [];
        var usedImage = "";
        var lives = 6; 
}

var restart = function () {
    clearWord();
    getWord();
}
var checkWin = function () {
    testWord = blankWord.join ("");
    if (randomWord === testWord) {
        wins++;
        alert("<h1>You Win</p>");
        document.querySelector("#game").innerHTML = html;
        restart();
    }
    else if (lives === 0) {
        alert("You Lose!");
        losses++;
        restart();}
    else {
        console.log("Choose the next letter");
    }
}
// var drawHead = function () {
//     var context = document.getElementById('canvas').getContext('2d');
// }
document.addEventListener('DOMContentLoaded', function() {
    getWord();
}, false);
document.onkeyup = function gameon(event) {
    userGuess = event.key;
    html = "<p>press any letter to continue</p>" + "<p>Hint: " + userHint + "</p>" + "<p>Word: " + blankImage +"</p>" + "<p>Guesses Left: " + lives + "</p>" + "<p>Used letters: " + usedImage + "</p>" + "<p>Wins: " + wins + "</p>" + "<p>Losses: " + losses + "</p>"; 
    document.querySelector("#game").innerHTML = html;
	checkMatch();
    checkWin();
}