$(document).ready(function(){
	console.log("ready")
// Create an array with the following values: "NYC", "SF", "LA", "ATX", "SYD"; use the array to add values to the <select> menu by using a for loop in JavaScript (don't update the HTML to do this!)
	var cities = ["NYC", "SF", "LA" , "ATX"]
	console.log(cities);

for(var i = 0; i < cities.length; i++){
	// use the array to add values to the <select> menu by using a for loop in JavaScript (don't update the HTML to do this!)
	// Use $.append() in your iteration on the drop-down menu
	$('<option/>').val(cities[i]).html(cities[i]).appendTo('#city-type');
}
// When the user changes the input of the drop-down, update the background image based on what they selected
// Use the $.change event handler to capture user actions

	$("#city-type").change(function () {
		console.log("the change function is working");
// Get the value of user input using $.val()	
	var userInput;
	userInput = $("#city-type").val();
	console.log(userInput);
	
// When the user changes the input of the drop-down, update the background image based on what they selected
// Use if/else if/else conditionals to control the flow of your application

	if (userInput === "NYC")
		$("body").css("background-image", "url(images/nyc.jpg)");
	
	else if (userInput === "SF")
		$("body").css("background-image", "url(images/sf.jpg)");

	else if (userInput === "LA")
		$("body").css("background-image", "url(images/la.jpg)");

	else if (userInput === "ATX")
		$("body").css("background-image", "url(images/austin.jpg)");

	});

	
});

// Use the $.attr() function to update html classes
// Display your pseudocode as Javascript comments