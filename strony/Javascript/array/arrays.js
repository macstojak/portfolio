var todos = [];
var input;
while(input!=="quit"){
var input = prompt("What would you like to do?");
if(input==="list"){
	listTodos();
	
}
else if(input === "new"){
	newTodo();
}else if(input==="delete"){
	deleteTodo();
}
else(console.log("We're done."))
}

function listTodos(){
	console.log("******");
	todos.forEach(function(todo, i){
		console.log(i+ ": " + todo);
		});
	console.log("******")
}
function newTodo(){
	var newTodo = prompt("Enter new todo");
	todos.push(newTodo);
	console.log("Added to ToDo")
}
function deleteTodo(){
	var index = prompt("enter the index of item to delete");
	todos.splice(index, 1);
	console.log("Deleted Todo");
}
