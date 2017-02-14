window.addEventListener("load",function(){
	var waldoPic = document.getElementById("Waldo");
	const WALDOCOORD = [,];
	//function to log the coordinates of a click
	waldoPic.addEventListener("click", getPosition, false);

	function getClickPosition(e){
		var xPos = e.clientX;
		var yPos = e.clientY;
		console.log(xPos);
		console.log(yPos);
	}

	// helper function to get an element's exact position
	function getPosition(e) {
	  var el = e.target;
	  var xPosition = 0;
	  var yPosition = 0;
	 
	  while (el) {
	    if (el.tagName == "BODY") {
	      // deal with browser quirks with body/window/document and page scroll
	      var xScrollPos = el.scrollLeft || document.documentElement.scrollLeft;
	      var yScrollPos = el.scrollTop || document.documentElement.scrollTop;
	 
	      xPosition += (el.offsetLeft - xScrollPos + el.clientLeft);
	      yPosition += (el.offsetTop - yScrollPos + el.clientTop);
	    } else {
	      xPosition += (el.offsetLeft - el.scrollLeft + el.clientLeft);
	      yPosition += (el.offsetTop - el.scrollTop + el.clientTop);
	    }
	 
	    el = el.offsetParent;
	  }

  	console.log({x: xPosition});
	console.log({y: yPosition});
	  return {
	    x: xPosition,
	    y: yPosition
	  };
	}

	// var myElement = document.querySelector("#foo"); 
	// var position = getPosition(myElement);
	// alert("The image is located at: " + position.x + ", " + position.y);

	// deal with the page getting resized or scrolled
	// window.addEventListener("scroll", updatePosition, false);
	// window.addEventListener("resize", updatePosition, false);

	function updatePosition() {
 	 // add your code to update the position when your browser
 	 // is resized or scrolled
	}       

});