var d = new Date();
var dateNow = d.getFullYear()
var birth = prompt("Give me your year of birth");
var age = dateNow - birth;
var ageDays = age * 365;
alert("Your age is "+age+ ", which is "+ageDays+" days.");