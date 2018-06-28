var movies = {
	title:["Donnie Darko", "Taxi driver", "Alien", "Harry Potter"],
	rating:[4.5,5,5.5,2],
	hasWatched:[true, false, true, false]
};

var movies2=[
	{
		title:["Donnie Darko"],
	rating:[4.5],
	hasWatched:[true]
	},
	{
		title:["Taxi driver"],
	rating:[5],
	hasWatched:[false]
	},
	{
		title:["Alien"],
	rating:[5.5],
	hasWatched:[true]
	},
	{
		title:["Harry Potter"],
	rating:[2],
	hasWatched:[false]
	}
]
function movieDb(movies){
	for(var i=0; i<movies.hasWatched.length; i++)
		{
		if(movies.hasWatched[i]===true){
			console.log("You have watched "+ "\""+movies.title[i]+"\""+" - "+movies.rating[i]);
		}else{
			console.log("You have not seen "+ "\""+movies.title[i]+"\""+" - "+movies.rating[i]);
		}
		}
}
function movieDb1(movies1){
	movies1.forEach(function(elem,i){
	
	if(elem.hasWatched===true){
			console.log("You have watched "+ "\""+elem.title"\""+" - "+elem.rating);
		}else{
			console.log("You have not seen "+ "\""+elem.title+"\""+" - "+elem.rating);
		}
	});
		
}