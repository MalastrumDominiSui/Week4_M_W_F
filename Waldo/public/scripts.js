window.addEventListener("load",function(){
	var waldoPic = document.getElementsByTagName("html");
	var dimmer = document.getElementsByClassName("overlay");

	//function to log the coordinates of a click
	waldoPic[0].addEventListener("click", isWaldo, false);

	function getClickPosition(e){
		var xPos = e.clientX;
		var yPos = e.clientY;
		return [
			{"x": xPos},
			{"y": yPos}
		];
	}

	function between(num, min, max){
		return num >= min && num <= max
	}


	function display(){
		if (this.responseText == "true"){
			dimmer[0].style.display = "block";
		}
		
	}

	function isWaldo(e){
		clickCoorJ = getClickPosition(e);
		xCor = clickCoorJ[0]["x"];
		yCor = clickCoorJ[1]["y"];

		var request = new XMLHttpRequest();
		request.open("POST","/?waldoX="+ xCor.toString() +"&waldoY=" + yCor.toString() );
		request.addEventListener("load", display);
		request.send();
	}

});