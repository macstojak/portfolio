var tag = document.getElementById("highlight");
tag.style.color = "pink";

var body = document.querySelector("body");
var isBlue = false;

setInterval(function(){
	if(isBlue){
		body.style.background = "white";
	}else{
		body.style.background = "#3498db";
	}
	isBlue = !isBlue;
}, 1000);

var tag1 = document.getElementById("first");