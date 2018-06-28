var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var resetButton = document.querySelector("#reset");
var numInput = document.querySelector("input");
var num = document.querySelector("#number");
var winningScore = 5;
p1Score = 0;
p2Score = 0;
var gameOver = false;
p1Button.addEventListener("click",function(){
	if(!gameOver){
	p1Score++;
		if(p1Score == num.textContent){
			gameOver = true;
			p1Display.classList.add("winner");
			
		}
	p1Display.textContent = p1Score;
	}
});

p2Button.addEventListener("click", function(){
	if(!gameOver){
	p2Score++;
		if(p2Score == num.textContent){
			gameOver = true;
			p2Display.classList.add("winner");
		}
	p2Display.textContent = p2Score;
	}
});

resetButton.addEventListener("click", function(){
	reset();
})
function reset(){
	p1Score = 0;
	p2Score = 0;
	p1Display.textContent = p1Score;
	p2Display.textContent = p2Score;
	p1Display.classList.remove("winner");
	p2Display.classList.remove("winner");
	gameOver=false;
}
numInput.addEventListener("change", function(){
num.textContent=this.value;
winningScore = Number(this.value);
reset();
})