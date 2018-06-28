var number = Math.floor(Math.random()*11);

do{
var guess = prompt("Give me a number");
if(guess==number){
	alert("You have guessed, the number you typed: "+guess+" equals the one drawn: "+number);
}
else if(guess<number){
	alert("Wrong. Too low.");
}
else{
	alert("Wrong. Too high");
}
}while(guess!=number);
