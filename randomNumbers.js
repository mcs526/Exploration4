var firstInput = prompt("What is your minimum number?");
var firstNumber = parseInt(firstInput);
var secondInput = prompt("What is your maximum number?");
var secondNumber = parseInt(secondInput);

//generate a random number between the 2 user provided numbers
var randomNumber = Math.floor(Math.random() * (secondNumber - firstNumber + 1)) + firstNumber;

var message = "<p>" + randomNumber + " is a number between " + firstNumber + " and " + secondNumber + "</p>";

document.write(message);
