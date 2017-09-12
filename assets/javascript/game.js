var game = {
// Arrays of Random Words
    "usCities" : ["Aberdeen", "Akron", "Albany", "Albuquerque", "Alexandria", "Amarillo", "Anaheim", 
        "Anchorage", "Ann Arbor", "Arlington", "Arvada", "Asheville", "Athens", "Atlanta", "Atlantic City", "Augusta", 
        "Aurora", "Austin", "Bakersfield", "Baltimore", "Baton Rouge", "Beaumont", "Bel Air", "Bellevue", "Berkeley", 
        "Birmingham", "Bloomington", "Boise", "Boston", "Boulder", "Bridgeport", "Brownsville", "Buffalo", "Burbank", 
        "Burlington", "Canton", "Cape Coral", "Cary", "Charleston", "Charlotte", "Chattanooga", "Chicago", "Cincinnati", 
        "Clarksville", "Clearwater", "Cleveland", "Colorado Springs", "Columbia", "Columbus", "Concord", "Corpus Christi", 
        "Dallas", "Dayton", "Daytona Beach", "Denton", "Denver", "Des Moines", "Detroit", "Duluth", "Durham", "El Paso", 
        "Elizabeth", "Erie", "Eugene", "Fairfield", "Fargo", "Fayetteville", "Flint", "Fort Collins", "Fort Lauderdale", 
        "Fort Worth", "Frederick", "Fresno", "Gainesville", "Gastonia", "Grand Rapids", "Green Bay", "Greensboro", 
        "Greenthville", "Hampton", "Harrisburg", "Henderson", "Hickory", "High Point", "Hollywood", "Honolulu", "Houston", 
        "Huntington", "Huntsville", "Indianapolis", "Inglewood", "Irvine", "Irving", "Jackson", "Jacksonville", "Jefferson", 
        "Jersey City", "Johnson City", "Kalamazoo", "Kansas City", "Knoxville", "Lafayette", "Lancaster", "Lansing", "Las Vegas", 
        "Lewisville", "Lexington", "Lincoln", "Little Rock", "Long Beach", "Los Angeles", "Louisville", "Madison", "Memphis", 
        "Miami", "Milwaukee", "Minneapolis", "Mobile", "Modesto", "Monroe", "Monterey", "Montgomery", "Myrtle Beach", "Naples", 
        "Nashville", "New Haven", "New Orleans", "New York", "New York City", "Newark", "Newport News", "Norfolk", "Oakland", 
        "Odessa", "Ogden", "Oklahoma City", "Olympia", "Omaha", "Orlando", "Panama City", "Pasadena", "Pensacola", "Peoria", 
        "Philadelphia", "Phoenix", "Pittsburgh", "Plano", "Portland", "Portsmouth", "Providence", "Raleigh", "Reading", "Reno", 
        "Richmond", "Roanoke", "Rochester", "Sacramento", "Saint Louis", "Saint Paul", "Salem", "Salt Lake City", "San Antonio", 
        "San Bernardino", "San Diego", "San Francisco", "San Jose", "Santa Ana", "Santa Barbara", "Santa Clara", "Santa Cruz", 
        "Santa Maria", "Santa Rosa", "Sarasota", "Savannah", "Scottsdale", "Scranton", "Seattle", "Sioux City", "Sioux Falls", 
        "Spartanburg", "Spokane", "Springdale", "Springfield", "St. Louis", "St. Paul", "Stockton", "Syracuse", "Tacoma", 
        "Tallahassee", "Tampa", "Thornton", "Toledo", "Topeka", "Trenton", "Tucson", "Tulsa", "Tuscaloosa", "Utica", 
        "Virginia Beach", "Waco", "Washington", "Waterloo", "Westminster", "Wichita", "Wilmington", "Winston", "Worcester", 
        "Yonkers", "York", "Youngstown"],

    "countries" : ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Anguilla", "Antigua and Barbuda", "Argentina", 
        "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", 
        "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", 
        "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Cape Verde", "Cayman Islands", "Chad", "Chile", "China", 
        "Colombia", "Congo", "Cook Islands", "Costa Rica", "Cote D Ivoire", "Croatia", "Cruise Ship", "Cuba", "Cyprus", 
        "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", 
        "Estonia", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", 
        "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea Bissau", "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", 
        "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", 
        "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", 
        "Macau", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Mauritania", "Mauritius", "Mexico", 
        "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Namibia", "Nepal", "Netherlands", "New Zealand", 
        "Nicaragua", "Niger", "Nigeria", "Norway", "Oman", "Pakistan", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", 
        "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Samoa", "San Marino", "Saudi Arabia", "Senegal", 
        "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "South Africa", "South Korea", "South Sudan", 
        "Spain", "Sri Lanka", "St Kitts and Nevis", "St Lucia", "St Vincent", "St. Lucia", "Sudan", "Suriname", "Swaziland", "Sweden", 
        "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "East Timor", "Togo", "Tonga", "Trinidad and Tobago", 
        "Tunisia", "Turkey", "Turkmenistan", "Turks and Caicos", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "Uruguay", 
        "Uzbekistan", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"],

    "usStates" : ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia",  
        "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", 
        "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", 
        "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Puerto Rico", "Rhode Island", 
        "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virgin Island", "Virginia", "Washington", "West Virginia", 
        "Wisconsin", "Wyoming"],
 
    "seasAndOceans" : ["Atlantic Ocean", "Pacific Ocean", "Indian Ocean", "Arctic Ocean", "Southern Ocean", "Mediterranean Sea", 
        "Caspian Sea", "Gulf of Mexico", "Red Sea", "Persian Gulf", "North Sea", "Sea of Japan", "Caribbean Sea", "Baltic Sea", 
        "Adriatic Sea", "Aegean Sea", "Black Sea", "South China Sea", "Arabian Sea", "Aral Sea", "Dead Sea", "Hudson Bay"],
 
    "worldCapitals" : ["Abu Dhabi", "Addis Ababa", "Amman", "Amsterdam", "Ankara", "Asmara", "Athens", "Baghdad", "Bangkok", "Beijing", 
        "Beirut", "Belgrade", "Berlin", "Bern", "Bishkek", "Bogota", "Brasilia", "Bratislava", "Brazzaville", "Brussels", "Bucharest", 
        "Budapest", "Buenos Aires", "Cairo", "Canberra", "Caracas", "Copenhagen", "Damascus", "Dhaka", "Dublin", "Freetown", "Georgetown", 
        "Hanoi", "Havana", "Helsinki", "Islamabad", "Jakarta", "Jerusalem", "Kabul", "Kampala", "Kathmandu", "Khartoum", "Kiev", "Kingston", 
        "Kinshasa", "Kuala Lumpur", "Lima", "Lisbon", "London", "Luxembourg City", "Madrid", "Manila", "Mexico City", "Minsk", "Mogadishu", 
        "Monrovia", "Montevideo", "Moscow", "Muscat", "Nairobi", "New Delhi", "Oslo", "Ottawa", "Panama City", "Paris", "Port Moresby", 
        "Prague", "Pretoria", "Pyongyang", "Rabat", "Reykjavik", "Riga", "Riyadh", "Rome", "San Jose", "San Juan", "San Marino", "San Salvador", 
        "Santiago", "Santo Domingo", "Sarajevo", "Seoul", "Singapore", "Skopje", "Sofia", "Stockholm", "Taipei", "Tbilisi", "Tehran", "Tokyo", 
        "Tripoli", "Tunis", "Ulaanbaatar", "Vatican City", "Vienna", "Vilnius", "Warsaw", "Washington", "Wellington", "Windhoek", "Zagreb"],

    "worldCities" : ["Accra","Baku", "Bangalore", "Bangkok", "Barcelona", "Beijing", "Beirut", "Birmingham", "Bogota", "Brasilia", "Brisbane", 
        "Calcutta", "Campinas", "Cape Town", "Chennai", "Cologne", "Copenhagen", "Damman", "Delhi", "Dubai", "Durban", "Dusseldorf", "Frankfurt", 
        "Guadalajara", "Hamburg", "Harare", "Ho Chi Minh City", "Hyderabad", "Istanbul", "Jeddah", "Johannesburg", "Karachi", "Khartoum", 
        "Kuala Lumpur", "Kyoto", "Lagos", "Lahore", "Manchester", "Melbourne", "Milan", "Monterey", "Montreal", "Mumbai", "Munich", "Nagoya", 
        "Naples", "Osaka", "Recife", "Rio de Janeiro", "Riyadh", "Saint Petersburg", "Sao Paulo", "Sapporo", "Shanghai", "Shenyang", "Shenzhen", 
        "Sydney", "Taichung", "Taipei", "Tel Aviv", "Toronto", "Vancouver", "Warsaw"],

    "USstateCapitals" : ["Montgomery", "Juneau", "Phoenix", "Little Rock", "Sacramento", "Denver", "Hartford", "Dover", "Tallahassee", "Atlanta", 
        "Honolulu", "Boise", "Springfield", "Indianapolis", "Des Moines", "Topeka", "Frankfort", "Baton Rouge", "Augusta", "Annapolis", "Boston", 
        "Lansing", "Saint Paul", "Jackson", "Jefferson City", "Helena", "Lincoln", "Carson City", "Concord", "MontgomeryA2:A42", "Juneau", "Phoenix", 
        "Little Rock", "Sacramento", "Denver", "Hartford", "Dover", "Tallahassee", "Atlanta", "Honolulu", "Boise", "Springfield", "Indianapolis", 
        "Des Moines", "Topeka", "Frankfort", "Baton Rouge", "Augusta", "Annapolis", "Boston"],

    //Array of hints, matched to categories array
    "hints" : ["US city", "nation", "US state", "Large body of water", "world capital","world city","US state capital"],

    // Array of potential letters   
    "letters" : ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],

    // Array of used letters
    "usedLetters" : [],

    // Other Variables
    "randomWord" : "",
    "userHint" : "",
    "blankWord" : [],
    "blankImage" : "",
    "wins" : 0,
    "losses" : 0,
    "usedLetters" : [],
    "usedImage" : "",
    "lives" : 6, 
    "userGuess" : "",
    "tempWord": "",
    "hmImage": document.getElementById('hangedMan'),

    // flag to stop input if false
    "flag" : true,

    //Sounds 
    "rightSound" : document.getElementById("right"),
    "wrongSound" : document.getElementById("wrong"),
    "incorrectSound" : document.getElementById("incorrect"),
    "correctSound" : document.getElementById("correct"),

    //Function to preload sounds to hopefully help with delay
    "loadSounds" : function () {
        this.rightSound.load();
        this.wrongSound.load();
        this.correctSound.load();
        this.incorrectSound.load();
    },

    //Function to update text after change in all cases but a win or loss
    "changeText" : function () {
        var html = "<p>Press any letter to continue</p>" + 
            "<p>Hint: " + this.userHint + "</p>" + 
            "<p>Word: " + this.blankImage +"</p>" + 
            "<p>Guesses Left: " + this.lives + "</p>" + 
            "<p>Used letters: " + this.usedImage + "</p>" + 
            "<p>Wins: " + this.wins + "</p>" + 
            "<p>Losses: " + this.losses + "</p>";
        document.querySelector("#game").innerHTML = html;
    },

    //Function to get a random word and turn it into blanks
    "getWord" : function () {
        //Choosing the catagory randomly from the associated hint array and setting the hint
        var catagoryChoosen = this.hints[Math.floor(Math.random() * this.hints.length)];
        this.userHint = this.hints[this.hints.indexOf(catagoryChoosen)]; 
        
        //Picking the random word from the choosen catagory and change the background
        if (catagoryChoosen === this.hints[0]) {
            this.tempWord= this.usCities[Math.floor(Math.random() * this.usCities.length)];
            document.getElementById("bg").style.backgroundImage = "url('assets/images/usCities.png')";
        } else if (catagoryChoosen === this.hints[1]) {
            this.tempWord= this.countries[Math.floor(Math.random() * this.countries.length)];
            document.getElementById("bg").style.backgroundImage = "url('assets/images/countries.png')";
        } else if (catagoryChoosen === this.hints[2]) {
            this.tempWord= this.usStates[Math.floor(Math.random() * this.usStates.length)];
            document.getElementById("bg").style.backgroundImage = "url('assets/images/usStates.png')";
        } else if (catagoryChoosen === this.hints[3]) {
            this.tempWord= this.seasAndOceans[Math.floor(Math.random() * this.seasAndOceans.length)];
            document.getElementById("bg").style.backgroundImage = "url('assets/images/seasAndOceans.png')";
        } else if (catagoryChoosen === this.hints[4]) {
            this.tempWord= this.worldCapitals[Math.floor(Math.random() * this.worldCapitals.length)];
            document.getElementById("bg").style.backgroundImage = "url('assets/images/capitalCities.png')";
        } else if (catagoryChoosen === this.hints[5]) {
            this.tempWord= this.worldCities[Math.floor(Math.random() * this.worldCities.length)];
            document.getElementById("bg").style.backgroundImage = "url('assets/images/capitalCities.png')";
        } else {
            this.tempWord= this.USstateCapitals[Math.floor(Math.random() * this.USstateCapitals.length)];
            document.getElementById("bg").style.backgroundImage = "url('assets/images/usStates.png')";
        }    
        //Transforming random word into an array of _ and &nbsp's and joinging that into a string that is shown to the player   
        this.randomWord = this.tempWord.toLowerCase();
        for (i = 0; i < this.randomWord.length; i++) { 
            if (this.randomWord[i] !== " ") { 
                this.blankWord.push("_");
            } else {
                this.blankWord.push("&nbsp;");
            }
        }
        this.blankImage = this.blankWord.join ("&nbsp;");
        this.changeText();
    },

    //Function to draw body as guesses fail
    "execution" : function () { 
        switch (this.lives) {
            case 6:
                this.hmImage.src = "assets/images/hangman6.png";
                break;
            case 5:
                this.hmImage.src = "assets/images/hangman5.png";
                break;
            case 4:
                this.hmImage.src = "assets/images/hangman4.png";
                break;
            case 3:
                this.hmImage.src = "assets/images/hangman3.png";
                break;
            case 2:
                this.hmImage.src = "assets/images/hangman2.png";
                break;
            case 1:
                this.hmImage.src = "assets/images/hangman1.png";
                break;
            case 0:
                this.hmImage.src = "assets/images/hangman0.png";

                break;
        }
    },

    //Function to see if guess matches a letter from the random word 
    "checkMatch" : function () {
        var uGuess = this.userGuess.toLowerCase();
        var letInc = this.letters.includes(uGuess);
        var rwIndex = this.randomWord.indexOf(uGuess);
        var ulIndex = this.usedLetters.indexOf(uGuess);
        if (letInc === false) {
            console.log("not a valid guess");
        } else if (rwIndex !== -1) {       
            for (i = 0; this.randomWord.indexOf(uGuess, i) !== -1; i++) {
                this.blankWord.splice(this.randomWord.indexOf(uGuess, i), 1, uGuess);
                this.blankImage = this.blankWord.join(" ");
                testWord = this.blankWord.join ("");  
                this.correctSound.play();
                }
        } else if (rwIndex === -1 && ulIndex === -1) {
                this.usedLetters.push(uGuess);
                this.usedImage = this.usedLetters.join(',');
                this.lives--;
                this.incorrectSound.play();
            }
            this.changeText();
    },

    //Function to reset variables.
    "clearWord" : function () {
            this.randomWord = "";
            this.usedLetters = [];
            this.userHint = "";
            this.blankWord = [];
            this.blankImage = "";
            this.usedLetters = [];
            this.usedImage = "";
            this.lives = 6;
            this.changeText(); 
            this.tempWord = "";
    },

    //Displays on win, adds win to counter and sets flag to false to prevent input 
     "youWin" : function () {
        this.wins++; 
        var html = "";
        document.querySelector("#game").innerHTML = html;
        var html = "<h1>You Win!</h1>" + "<p>The "+ this.userHint + " was " + this.tempWord +"</p>";
        document.querySelector("#game").innerHTML = html;
        this.rightSound.play();
        this.flag = false;
        window.setTimeout(this.restart, 1000);

    },

    //Displays on loss, adds loss to counter and sets flag to false to prevent input
    "onLose" : function () {
        this.losses++;
        var html = "";
        document.querySelector("#game").innerHTML = html;
        html = "<h1>You Lose!</h1>" + "<p>The " + this.userHint + " was " + this.tempWord +"</p>" 
        document.querySelector("#game").innerHTML = html;
        this.wrongSound.play();
        this.flag = false
        window.setTimeout(this.restart, 1000)
    },

    //Function to check if player won or lost
    "checkWin" : function () {
        //replacing &nbsp to a space so that it will match random word exactly when compared
        var testWord = this.blankWord.join("").replace(/&nbsp;/gi,' ');
        if (this.randomWord === testWord) {
            this.youWin();        
        } else if (this.lives === 0) {
            this.onLose();
        } else {
            console.log("Choose the next letter");
        }
    },

    //Function to restart the game
    "restart" : function () {
        game.clearWord();
        game.hmImage.src = "assets/images/hangman6.png";
        game.getWord();
        game.flag = true;
    },

    //Function to execute on page loading. Needs a call back after object is defined to work
    "onload" : function () { 
        document.addEventListener('DOMContentLoaded', function() {
        game.loadSounds();
        game.getWord();
        game.execution();
        }, false)
    },

    //Function to execute on key up. Needs a call back after object is defined to work. Is blocked after win and loss until reload
    "onkey" : function () {      
        document.addEventListener('keyup', function (event) {
            if (game.flag === true) {
                game.userGuess = event.key;
                var html = "<p>Press a letter to play.</p>" + "<p>Hint: " + game.userHint + "</p>" + "<p>Word: " + game.blankImage +"</p>" + 
                "<p>Guesses Left: " + game.lives + "</p>" + "<p>Used letters: " + game.usedImage + "</p>" + "<p>Wins: " + game.wins + "</p>" + 
                "<p>Losses: " + game.losses + "</p>"; 
                document.querySelector("#game").innerHTML = html;
                game.checkMatch();
                game.execution();
                game.checkWin();
            }
            else {
                console.log('Input is not allowed.')   
            }
        }, false)
    },
}

//Callback to start game
game.onload();
game.onkey();