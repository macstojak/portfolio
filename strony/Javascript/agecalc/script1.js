
var age = prompt("Give me your age");
var sqAge = Math.sqrt(age);
if(age<0){
	alert(new Error("Your age is "+age+ ", which is negative."));
}
else if(age%2!=0){
	alert("Your age is odd");
}
else if(sqAge%1==0){
	alert("Your age is perfect square and it equals:"+sqAge);
}
else if(age==21){
	alert("Happy 21st birthday");
}
else{
	alert("Your age is: "+age);
}
