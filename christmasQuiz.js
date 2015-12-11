orrect = 0;

//question 1
var answer1 = prompt("In which month does Christmas fall?");
if(answer1.toUpperCase() === "DECEMBER"){
	correct += 1;
	alert("Correct!");
}
else {
	alert("Sorry, that's not correct.  Christmas falls in the month of December.");
}

//question 2
var answer2 = prompt("How many reindeer pull Santa's sleigh?");
if(answer2 === 8){
	correct += 1;
	alert("Correct!")
}
else{
	alert("Sorry, that's not correct.  There are 8 reindeer that pull Santa's sleigh");
}

//question 3
var answer3 = prompt("What kind of food is usually left out for Santa the night of Christmas Eve?");
if(answer3.toUpperCase() === "COOKIES"){
	correct += 1;
	alert("Correct!");
}
else {
	alert("Sorry, that's not correct.  The correct answer is cookies");
}

//question 4
var answer4 = prompt("Which country can be credited with the creation of the Christmas beverage, eggnog?");
if(answer4.toUpperCase() === "NORWAY"){
	correct +=1;
	alert("Correct!");
}
else {
	alert("Sorry, that's not correct.  The correct answer is Norway.");
}

//question 5
var answer5 = prompt("Which was the first state in the United States to recognize Christmas as an official holiday?");
if (answer5.toUpperCase() === "ALABAMA") {
	correct += 1;
	alert("Correct!");
}
else{
	alert("Sorry, that's not correct. The correct answer is Alabama.");
}

//results
document.write("<p>You got " + correct + " out of 5 questions correct</p>");

//result ranking
if(correct === 5){
	document.write("You are a Christmas expert!");
}
else if(correct > 2 && correct < 5) {
	document.write("You know quite a bit about Christmas!");
}
else{
	document.write("You need to brush up on your Christmas trivia!");
}


