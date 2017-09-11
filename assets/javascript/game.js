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
    "worldCapitals" : ["Kabul", "Buenos Aires", "Canberra", "Vienna", "Dhaka", "Minsk", "Brussels", "Sarajevo", "Brasilia", "Sofia", 
        "Ottawa", "Santiago", "Beijing", "Bogota", "San Jose", "Zagreb", "Havana", "Prague", "Kinshasa", "Copenhagen", "Santo Domingo", 
        "Cairo", "San Salvador", "Asmara", "Addis Ababa", "Helsinki", "Paris", "Tbilisi", "Berlin", "Athens", "Georgetown", "Budapest", 
        "Reykjavik", "New Delhi", "Jakarta", "Tehran", "Baghdad", "Jerusalem", "Rome", "Kingston", "Tokyo", "Amman", "Nairobi", "Bishkek", 
        "Riga", "Beirut", "Monrovia", "Tripoli", "Vilnius", "Luxembourg City", "Kuala Lumpur", "Mexico City", "Ulaanbaatar", "Rabat", 
        "Windhoek", "Kathmandu", "Amsterdam", "Wellington", "Pyongyang", "Oslo", "Muscat", "Islamabad", "Panama City", "Port Moresby", 
        "Lima", "Manila", "Warsaw", "Lisbon", "San Juan", "Dublin", "Skopje", "Brazzaville", "Bucharest", "Moscow", "San Marino", "Riyadh", 
        "Belgrade", "Freetown", "Singapore", "Bratislava", "Mogadishu", "Pretoria", "Seoul", "Madrid", "Khartoum", "Stockholm", 
        "Bern", "Damascus", "Taipei", "Bangkok", "Tunis", "Ankara", "Kampala", "Kiev", "Abu Dhabi", "London", "Washington", "Montevideo", 
        "Vatican City", "Caracas", "Hanoi"],
    "worldCities" : ["Tokyo","Sao Paulo","Seoul","Kyoto","Osaka","Manila","Mumbai","Delhi","Jakarta","Lagos","Calcutta","Cairo","Buenos Aires",
        "Rio de Janeiro","Moscow","Shanghai","Karachi","Paris","Istanbul","Nagoya","Beijing","London","Shenzhen","Dusseldorf","Tehran","Bogota",
        "Lima","Bangkok","Johannesburg","Chennai","Taipei","Baghdad","Santiago","Bangalore","Hyderabad","Saint Petersburg","Lahore","Kinshasa",
        "Ho Chi Minh City","Madrid","Kuala Lumpur","Toronto","Milan","Shenyang","Khartoum","Riyadh","Singapore","Barcelona",
        "Sydney","Guadalajara","Montreal","Monterey","Melbourne","Ankara","Recife","Durban","Jeddah","Cape Town","Rome","Naples","Tel Aviv",
        "Birmingham","Frankfurt","Lisbon","Manchester","Baku","Sapporo","Taichung","Warsaw","Cologne","Hamburg","Dubai","Pretoria","Vancouver",
        "Beirut","Budapest","Campinas","Harare","Brasilia","Munich","Brussels","Vienna","Damman","Copenhagen","Brisbane","Accra"],
    //Array of word arrays
    "catagories" : ["usCities", "countries", "usStates", "seasAndOceans", "worldCapitals","worldCities"],
    //Array of hints, matched to categories array
    "hints" : ["US city", "nation", "US state", "Large body of water", "world capital","world city"],
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
    "changeText" : function () {
        var html = "<p>press any letter to continue</p>" + 
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
        var catagoryChoosen = this.catagories[Math.floor(Math.random() * this.catagories.length)];
        this.userHint = this.hints[this.catagories.indexOf(catagoryChoosen)]; 
        
        var random =  Math.floor(Math.random() * catagoryChoosen.length);
        if (catagoryChoosen === this.catagories[0]) {
            // document.getElementById("hmcanvas").style.backgroundImage = url('../images/this.usCities.png');
            this.tempWord= this.usCities[random];
        } else if (catagoryChoosen === this.catagories[1]) {
            this.tempWord= this.countries[random];
        } else if (catagoryChoosen === this.catagories[2]) {
            this.tempWord= this.usStates[random];
        } else if (catagoryChoosen === this.catagories[3]) {
            this.tempWord= this.seasAndOceans[random];
        } else if (catagoryChoosen === this.catagories[4]) {
            this.tempWord= this.worldCapitals[random];
        } else {
            this.tempWord= this.worldCities[random];
        }       
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
            var hmImage = document.getElementById('hangedMan');
            hmImage.src = "assets/images/hangman6.jpg";
            break;
            case 5:
             var hmImage = document.getElementById('hangedMan');
            hmImage.src = "assets/images/hangman5.jpg";
            break;
            case 4:
             var hmImage = document.getElementById('hangedMan');
            hmImage.src = "assets/images/hangman4.jpg";
            break;
            case 3:
             var hmImage = document.getElementById('hangedMan');
            hmImage.src = "assets/images/hangman3.jpg";
            break;
            case 2:
             var hmImage = document.getElementById('hangedMan');
            hmImage.src = "assets/images/hangman2.jpg";
            break;
            case 1:
             var hmImage = document.getElementById('hangedMan');
            hmImage.src = "assets/images/hangman1.jpg";
            break;
            case 0:
            var hmImage = document.getElementById('hangedMan');
            hmImage.src = "assets/images/hangman0.jpg";
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
            }
        } else if (rwIndex === -1 && ulIndex === -1) {
                this.usedLetters.push(uGuess);
                this.usedImage = this.usedLetters.join(',');
                this.lives--;
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
    //Displays on win 
    "youWin" : function () {
        this.wins++; 
        var html = "";
        document.querySelector("#game").innerHTML = html;
        var html = "<h1>You Win!</h1>" + "<p>The "+ this.userHint + " was " + this.tempWord +"</p>";
        document.querySelector("#game").innerHTML = html;
        window.setTimeout(this.restart, 2000);
    },
    //Displays on loss
    "onLose" : function () {
        this.losses++;
        var html = "";
        document.querySelector("#game").innerHTML = html;
        html = "<h1>You Lose!</h1>" + "<p>The " + game.userHint + " was " + game.tempWord +"</p>" 
        document.querySelector("#game").innerHTML = html;
        window.setTimeout(this.restart, 2000)
    },
    //Function to check if player won or lost
    "checkWin" : function () {
        var testWord = this.blankWord.join("").replace(/&nbsp;/gi,' ');
        if (this.randomWord === testWord) {
            this.youWin();        
        } else if (this.lives === 0) {
            this.onLose();
            
        } else {
            console.log("Choose the next letter");
        }
    },
    restart : function () {
        game.clearWord();
        var hmImage = document.getElementById('hangedMan');
        hmImage.src = "assets/images/hangman6.jpg";
        game.getWord();
    },

    onload : function () { 
        document.addEventListener('DOMContentLoaded', function() {
        game.getWord();
        game.execution();
        }, false)
    },

    onkey : function () {
        document.addEventListener('keyup', function (event) {
        game.userGuess = event.key;
        var html = "<p>press any letter to continue</p>" + "<p>Hint: " + game.userHint + "</p>" + "<p>Word: " + game.blankImage +"</p>" + "<p>Guesses Left: " + game.lives + "</p>" + "<p>Used letters: " + game.usedImage + "</p>" + "<p>Wins: " + game.wins + "</p>" + "<p>Losses: " + game.losses + "</p>"; 
        document.querySelector("#game").innerHTML = html;
        game.checkMatch();
        game.checkWin();
        game.execution();
        }, false)
    },
}
game.onload();
game.onkey();

