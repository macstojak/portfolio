function isEven(x){
if(x%2==0){
	return true;
}
else{
	return false;
}
}
function factorial(){
	var silnia = prompt("Podaj liczbe");
	x = silnia;
	while(x>1){
		console.log(x*=--x);
		x--;
	}
	return x;
}
function kebabToSnake(x){
	var silnia = prompt
	return x.replace("-","_");
}