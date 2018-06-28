var userFirstName = prompt("What is your first name?");
var userLastName = prompt("What is your last name?");
var userAge = prompt("What is your age?");
alert("Your full name is "+userFirstName+" " + userLastName);
alert("Your age is "+userAge);
function myFunct(){
document.getElementById('name').innerHtml = "Your name is " + userFirstName + " " + userLastName;
document.getElementById('age').innerHtml = "Your age is " +userAge;
}
window.onLoad = myFunct();