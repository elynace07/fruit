function Submit(){
	

var Afruit =prompt("Enter your fruits");

	var fruits = ["apple", "orange", "kiwi"];

	fruits.push(Afruit)

	fruits.sort()

	console.log ("May I have " + fruits.join (" with "));

	var mango = document.getElementById("mango");
mango.innerHTML = "May I have " + fruits.join (" with ");

}