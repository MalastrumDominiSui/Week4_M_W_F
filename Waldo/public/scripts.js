window.addEventListener("load",function() {

	var waldoPic = document.getElementsByTagName("html");
	var dimmer = document.getElementsByClassName("overlay");
	var timePassed = document.getElementById("time");
	var scoreModal = document.getElementById("otherModal");

	 // Get the modal
	 var modals = document.getElementsByClassName('modal-content');

	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("close")[0];

	//function to log the coordinates of a click
	waldoPic[0].addEventListener("click", isWaldo, false);

	//captures x and y of click event to a JSON
	function getClickPosition(e){
		var xPos = e.clientX;
		var yPos = e.clientY;
		return [
		{"x": xPos},
		{"y": yPos}
		];
	}

	//given a number, finds if it's between the min and max
	function between(num, min, max){
		return num >= min && num <= max
	}

	//given a formatted list of high scores from the controller
	function formatHighScores(e){
		otherModal.children[0].innerHTML += event.target.responseText	
	}

	//gets the time and saves it to a file on the server
	function grabScore(){
		var timeStr = timePassed.innerText;
		var request = new XMLHttpRequest();
		debugger;
		request.open("POST","/save?time=" + timeStr);
		request.addEventListener("load", formatHighScores)
		request.send();

	}

	//displays the time and high score Modals
	function displayModals(){
		for (var i = 0; i < modals.length; i++) {
			modals[i].style.display = "block";
		}

		modals[0].children[2].innerHTML += timePassed.innerHTML;
	}

	// if the server responds with true, displays the reward window with time
	function modalandScore(){
		if (this.responseText == "true"){
			dimmer[0].style.display = "block";
			pressStop();
			grabScore(timePassed.innerHTML);
			displayModals();
		}
		
	}

	function isWaldo(e){
		clickCoorJ = getClickPosition(e);
		xCor = clickCoorJ[0]["x"];
		yCor = clickCoorJ[1]["y"];

		var request = new XMLHttpRequest();
		request.open("POST","/?waldoX="+ xCor.toString() +"&waldoY=" + yCor.toString() );
		request.addEventListener("load", modalandScore);
		request.send();
	}

	// beginning of stopwatch function
	var seconds = 00; 
	var tens = 00; 
	var appendTens = document.getElementById("tens")
	var appendSeconds = document.getElementById("seconds")
	var Interval;



    //function starts timer based on interval 10 ms
    function pressStart(){
  	  clearInterval(Interval);
  	  Interval = setInterval(startTimer, 10);
    }
    //run this immediately on page load 
    pressStart()

    //stops the timer, to be called when Waldo is clicked on
    function pressStop(){
  	  clearInterval(Interval);
    }

    //timer function to count up the seconds
    function startTimer () {
    	tens++; 

    	if(tens < 9){
    		appendTens.innerHTML = "0" + tens;
    	}

    	if (tens > 9){
    		appendTens.innerHTML = tens;

    	} 

    	if (tens > 99) {
    		console.log("seconds");
    		seconds++;
    		appendSeconds.innerHTML = "0" + seconds;
    		tens = 0;
    		appendTens.innerHTML = "0" + 0;
    	}

    	if (seconds > 9){
    		appendSeconds.innerHTML = seconds;
    	}

    }

	//modal window stuff

	// When the user clicks on <span> (x), close the modal
	span.onclick = function() {
		for (var i = 0; i < modals.length; i++) {
			modals[i].style.display = "none";
		}
	}

	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
		if (event.target == modals) {
			for (var i = 0; i < modals.length; i++) {
				modals[i].style.display = "none";
			}
		}
	}

});