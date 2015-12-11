var correctGuess = false;
var randomNumber = Math.floor(Math.random() * 10) + 1;
var guess = prompt("I am thinking of a number between 1 and 10. What do you think it is?");

//change correctGuess to true if users guess is the same as randomNumber
if(parseInt(guess) === randomNumber){	
	correctGuess = true;
}
//provide a hint if the guess is higher/lower than the random number
else if(parseInt(guess) < randomNumber){
	var guessHigher = prompt("Try Again. The number I am thinking of is higher.");
	if (parseInt(guessHigher) === randomNumber) {
		correctGuess = true;
	};
}
else if(parseInt(guess) > randomNumber){
	var guessLower = prompt("Try Again. The number I am thinking of is lower.");
	if (parseInt(guessLower) === randomNumber) {
		correctGuess = true;
	};
}

//conditional statements to print out correct messsage
if(correctGuess){
	document.write("<p>You guessed correctly!");
}
else {
	document.write("<p>You didn't guess correctly.  My number was " + randomNumber + "</p>");
}
