var calculator = (function () {

	var buttons = document.getElementsByClassName('button');
	var equalCharacter = document.getElementById('equals');
	var screen = document.getElementById("screen");
	var clearBtn = document.getElementById("clear");
	var result = "";

	function bindEvents() {
		addEventsToCollection(buttons, "click", numberClick);
		equalCharacter.addEventListener("click", returnResult);
		clearBtn.addEventListener("click", clearScreen);
	}

	function addEventsToCollection(collection, event, action) {

		for (var i = 0; i < collection.length; i++) {
			collection[i].addEventListener(event, action);
		}
	}

	function numberClick() {
		var isSpecialCharacter = this.classList.contains("calc-character");

		if ((result.length < 1) && (isSpecialCharacter)) {
			result = "";
			return;
		}

		if (this.innerHTML !== "=") {
			result += this.innerHTML;
		}
		screen.innerHTML = result;

	}

	function returnResult() {
		if (result.length < 1) {
			screen.innerHTML = "Invalid input...";
			return;
		}
		result = result.replace("X", "*");
		screen.innerHTML = eval(result);
		result = "";
	}

	function clearScreen() {
		result = "";
		screen.innerHTML = "";
	}


	return {
		bindEvents: bindEvents
	}

})();

calculator.bindEvents();
