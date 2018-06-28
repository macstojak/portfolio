var arr = [];
arr.push(prompt("Array"));
isUniform(arr);


function printReverse(x){
	var y = [x.length-1];
	console.log("length of array: "+x.length)
	var z = 0;
	for(var i = x.length-1; i>0; i-- && z++){
		y[i]=x[z];
	}
	return y;
}
function isUniform(y)
{
	var temp = y[0];
		y.forEach(function(elem, i)
		{
			if(y[i] === temp)
			{			
				if(i==y.length-1 && y[i]===temp)
				{
					console.log("true");
				}
			}
			else
			{
				console.log("false");
			}
		});	
}

function sumArray(y){
	var sum = 0;
y.forEach(function(elem, i){
sum+=y[i];
});
}

function max(y){
	var max = y[0];
	var nr = 0;
	y.forEach(function(elem, i){
		if(y[i] > max){
			max = y[i];
			nr = i;	
		}
		
	});
	console.log("max: ["+ nr + "]: "+max);
}

}