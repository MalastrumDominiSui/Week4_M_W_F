window.addEventListener("load", function(){

	// dealing with clicking of colors
	var currentColor = "";
	var colors = document.getElementsByClassName("color");
	var allRows = document.getElementsByClassName("row");
	//array of rows for calling recordMondrianJSON
	var rowOne = document.getElementsByClassName("row_1");
	var rowTwo = document.getElementsByClassName("row_2");
	var rowThree = document.getElementsByClassName("row_3");
	var rowFour = document.getElementsByClassName("row_4");
	//save button
	var saveBtn = document.getElementById("save_button");

	//add event listener to all squares within Mondrian
	for (var i = 0; i < allRows.length; i++) {
		allRows[i].addEventListener("click",function(){
			this.style.background = currentColor;
		});
	}

	//FUNCTIONS FOR MONDRIAN COLOR CHANGING
	// for a given event (clicking on color box), sets placeholder to the box color so the mondrians "remember" the last one
	function setColor(e){
		currentColor = e.target.id;
	}

	//add event listeners to all color buttons, calls setColor
	for (var i = 0; i < colors.length; i++) {
		colors[i].addEventListener("click",setColor);
	}

	//FUNCTIONS FOR SAVING

	//add Mondrian record to CSV row
	function addMondriantoCSV(){
		console.log("boomshakalalka");
	}


	// takes all rows in their current state and records their colors in a 2 dimensional array
	//not really sure if this is the structure the data should take.  The result has too many string quotes
	// in the CSV
	function recordMondrianJSON(){
		mondJSON = [
			{row1: rowArray(rowOne)},
			{row2: rowArray(rowTwo)},
			{row3: rowArray(rowThree)},
			{row4: rowArray(rowFour)},
		]
		return mondJSON
	}


	//takes an array of Mondrian nodes, puts colors to an array, if color is "", sets to white
	function rowArray(nodeArray){
		colorStrArr = [];
		for (var i = 0; i < nodeArray.length; i++) {
			if (nodeArray[i].style.backgroundColor == ""){
				colorStrArr.push("white");
			} else {
				colorStrArr.push(nodeArray[i].style.backgroundColor);				
			}

		}
		// console.log(colorStrArr);
		return colorStrArr;

	}
	//an Event Listener on the Save button that 
	saveBtn.addEventListener("click",function(){
		var mondJSONstr = JSON.stringify(recordMondrianJSON());
		var request = new XMLHttpRequest();
		request.open("POST", "/?mond="+ mondJSONstr);
		request.send();

	});

});


