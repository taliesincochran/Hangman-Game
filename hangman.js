// Define variables at initial value
// Arrays of Random Words
var UScityNames = ["Aberdeen", "Abilene", "Akron", "Albany", "Albuquerque", "Alexandria", "Amarillo", "Anaheim", "Anchorage", "Ann Arbor", "Arlington", "Arvada", "Asheville", "Athens", "Atlanta", "Atlantic City", "Augusta", "Aurora", "Austin", "Bakersfield", "Baltimore", "Baton Rouge", "Beaumont", "Bel Air", "Bellevue", "Berkeley", "Birmingham", "Bloomington", "Boise", "Boston", "Boulder", "Bridgeport", "Brownsville", "Buffalo", "Burbank", "Burlington", "Canton", "Cape Coral", "Cary", "Charleston", "Charlotte", "Chattanooga", "Chicago", "Cincinnati", "Clarksville", "Clearwater", "Cleveland", "Colorado Springs", "Columbia", "Columbus", "Concord", "Corpus Christi", "Dallas", "Dayton", "Daytona Beach", "Denton", "Denver", "Des Moines", "Detroit", "Duluth", "Durham", "El Paso", "Elizabeth", "Erie", "Eugene", "Fairfield", "Fargo", "Fayetteville", "Flint", "Fort Collins", "Fort Lauderdale", "Fort Worth", "Frederick", "Fresno", "Gainesville", "Gastonia", "Grand Rapids", "Green Bay", "Greensboro", "Greenville", "Hampton", "Harrisburg", "Henderson", "Hickory", "High Point", "Hollywood", "Honolulu", "Houston", "Huntington", "Huntsville", "Indianapolis", "Inglewood", "Irvine", "Irving", "Jackson", "Jacksonville", "Jefferson", "Jersey City", "Johnson City", "Kalamazoo", "Kansas City", "Knoxville", "Lafayette", "Lancaster", "Lansing", "Las Vegas", "Lewisville", "Lexington", "Lincoln", "Little Rock", "Long Beach", "Los Angeles", "Louisville", "Madison", "Memphis", "Miami", "Milwaukee", "Minneapolis", "Mobile", "Modesto", "Monroe", "Monterey", "Montgomery", "Myrtle Beach", "Naples", "Nashville", "New Haven", "New Orleans", "New York", "New York City", "Newark", "Newport News", "Norfolk", "Oakland", "Odessa", "Ogden", "Oklahoma City", "Olympia", "Omaha", "Orlando", "Panama City", "Pasadena", "Pensacola", "Peoria", "Philadelphia", "Phoenix", "Pittsburgh", "Plano", "Portland", "Portsmouth", "Providence", "Raleigh", "Reading", "Reno", "Richmond", "Roanoke", "Rochester", "Sacramento", "Saint Louis", "Saint Paul", "Salem", "Salt Lake City", "San Antonio", "San Bernardino", "San Diego", "San Francisco", "San Jose", "Santa Ana", "Santa Barbara", "Santa Clara", "Santa Cruz", "Santa Maria", "Santa Rosa", "Sarasota", "Savannah", "Scottsdale", "Scranton", "Seattle", "Sioux City", "Sioux Falls", "Spartanburg", "Spokane", "Springdale", "Springfield", "St. Louis", "St. Paul", "Stockton", "Syracuse", "Tacoma", "Tallahassee", "Tampa", "Thornton", "Toledo", "Topeka", "Trenton", "Tucson", "Tulsa", "Tuscaloosa", "Utica", "Virginia Beach", "Waco", "Washington", "Waterloo", "Westminster", "Wichita", "Wilmington", "Winston", "Worcester", "Yonkers", "York", "Youngstown"];
var countryList = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Anguilla", "Antigua and Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "British Virgin Islands", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Cape Verde", "Cayman Islands", "Chad", "Chile", "China", "Colombia", "Congo", "Cook Islands", "Costa Rica", "Cote D Ivoire", "Croatia", "Cruise Ship", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Estonia", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Greenland", "Grenada", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea Bissau", "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kuwait", "Kyrgyzistan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Mauritania", "Mauritius", "Mexico", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Namibia", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Norway", "Oman", "Pakistan", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Samoa", "San Marino", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", "St Kitts and Nevis", "St Lucia", "St Vincent", "St. Lucia", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "East Timor", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks and Caicos", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "Uruguay", "Uzbekistan", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"];
var usStatesList = ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Guam", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Puerto Rico", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virgin Island", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"];
var seasAndOceans = ["Atlantic Ocean", "Pacific Ocean", "Indian Ocean", "Arctic Ocean", "Southern Ocean", "Mediteranean Sea", "Red Sea", "Persian Gulf", "North Sea", "Sea of Japan", "Carribean Sea", "Baltic Sea", "Irish Sea", "Adriatic Sea", "Aegean Sea", "Black Sea", "South China Sea"];
var worldCapitals = ["Kabul", "Buenos Aires", "Canberra", "Vienna", "Dhaka", "Minsk", "Brussels", "Sarajevo", "Brasilia", "Sofia", "Ottawa", "Santiago", "Beijing", "Bogota", "San Jose", "Zagreb", "Havana", "Prague", "Kinshasa", "Copenhagen", "Santo Domingo", "Cairo", "San Salvador", "Asmara", "Addis Ababa", "Helsinki", "Paris", "Tbilisi", "Berlin", "Athens", "Georgetown", "Budapest", "Reykjavik", "New Delhi", "Jakarta", "Tehran", "Baghdad", "Jerusalem", "Rome", "Kingston", "Tokyo", "Amman", "Nairobi", "Bishkek", "Riga", "Beirut", "Monrovia", "Tripoli", "Vilnius", "Luxembourg City", "Kuala Lumpur", "Mexico City", "Ulaanbaatar", "Rabat", "Windhoek", "Kathmandu", "Amsterdam", "Wellington", "Pyongyang", "Oslo", "Muscat", "Islamabad", "Panama City", "Port Moresby", "Lima", "Manila", "Warsaw", "Lisbon", "San Juan", "Dublin", "Skopje", "Brazzaville", "Bucharest", "Moscow", "San Marino", "Riyadh", "Dakar", "Belgrade", "Freetown", "Singapore", "Bratislava", "Mogadishu", "Pretoria", "Seoul", "Madrid", "Khartoum", "Stockholm", "Bern", "Damascus", "Taipei", "Bangkok", "Tunis", "Ankara", "Kampala", "Kiev", "Abu Dhabi", "London", "Washington", "Montevideo", "Vatican City", "Caracas", "Hanoi"];
//Array of word arrays
var catagories = ["UScityNames", "countryList", "usStatesList", "seasAndOceans", "worldCapitals"];
//Array of hints, matched to catagories array
var hints = ["US City", "Nation", "US State", "Large Body of Water", "World Capitals"];
// Array of potential letters
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// Array of used letters
var usedLetters = [];
// Other Variables
var Lives = 0;
// var userGuess = " ";
// var randomWord = " ";
var letterIndex = " ";

// Set initial html

 // Set the inner HTML contents of the #game div to html string

// Function to start game when key is pressed
document.onkeyup = function (event) {
// maybe a do while lives are > 0. This way values return to normal at end
var userGuess = event.key;
//do (
// Function to choose random catagory using math.random and math.floor
var catagoryChoosen = catagories[Math.floor(Math.random() * catagories.length)];
console.log("hints[catagoryChoosen]");
var randomWord = catagoryChoosen[Math.floor(Math.random() * catagoryChoosen.length)];
console.log("randomWord");
// Function to choose random word from the catagory using math.random and math.floor


// remove word from array of random words using splice (i,1)
// Function to display hint using html as var and indexOf
// Display word as blanks using .legth and indexOf " " to make a new array of "_"s and " " 
// maybe with splice
//  

// Function to get user guess by capturing key.

console.log("userGuess");
};
// define guess as var 
// Remove userGuess from letters using splice (i,1)

// Function to compare user guess to index of random word, letter by letter using indexOf userGuess
// get value of index of. Set to Var  Use that value to exchange corisponding blank with userGuess

// If guess is wrong draw next piece and decrease lives by one, 
// reset user guess to " "
// remove letter from array of possible guesses
// add letter to array of guesses using push or shift method
// print guesses using tostring method


// If guess is right make that letter visible, 
// reset user guess to " "
// remove letter from array of possible guesses using delete method

// If lives equals zero, show game over

while (lives >= 0)
// reset word
// reset lives
// reset possible guesses

// If all letters are visible increase wins by onecfy

// Creating a variable to hold our new HTML. Our HTML now keeps track of the user and computer guesses, and wins/losses/ties.
var html =
    "<p>You chose: " + userGuess + "</p>" +
    "<p>: " + usedLetters[0]  + "</p>" +
    "<p>wins: " + wins + "</p>" +
    "<p>losses: " + losses + "</p>" +
    "<p>ties: " + ties + "</p>";

        // Set the inner HTML contents of the #game div to our html string
        document.querySelector("#game").innerHTML = html;
      }






getElementByID(#startButton).onclick.function() {

	var getRandomNumber = return (Math.floor(Math.random() * cityNames.length);
	console.log (getRandomNumber);
