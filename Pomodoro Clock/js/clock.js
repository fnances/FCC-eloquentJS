var clock = (function () {

	var settings = document.getElementsByClassName('settings');
	var play = document.getElementById("play");
	var timeScreen = document.getElementById("time-passing");
	var breakLengthDOM = document.getElementById('breakLength');
	var sessionLengthDOM = document.getElementById('sessionLength');
	var plusBreakLength = document.getElementById('break-plus');
	var minusBreakLength = document.getElementById('break-minus');
	var plusSessionLength = document.getElementById('session-plus');
	var minusSessionLength = document.getElementById('session-minus');
	var icons = document.getElementsByTagName('i');
	var sessionLength = parseInt(timeScreen.innerHTML);
	var breakLength = parseInt(timeScreen.innerHTML);

	function bindEvents() {
		console.log(icons, sessionLength);
		sessionLength++;
		breakLength++;
	}



	return {
		bindEvents: bindEvents
	};

})();
clock.bindEvents();
