var clock = (function () {
	var containerChildren;
	var namespace = {};
	var CONFIG = {};
	var eventDelegator = {};
	var SESSION;
	var BREAK;
	var countDown;
	var isCountingDown = 1;

	function bindButtons() {
		addEventListenersToCollection(containerChildren, "click", emitEvent);
	}

	var run = function (config) {

		for (var prop in config) {
			if ((prop === "SESSION") || (prop === "BREAK")) {
				CONFIG[prop] = config[prop];
			} else {
				CONFIG[prop] = document.getElementById(config[prop]);
			}
		}
		containerChildren = CONFIG["CONTAINER"].children;
		SESSION = CONFIG["SESSION"];
		BREAK = CONFIG["BREAK"];
		CONFIG["sessionDOM"].innerHTML = SESSION;
		CONFIG["CLOCK"].innerHTML = SESSION;
		CONFIG["breakDOM"].innerHTML = BREAK;
		bindButtons();

	};

	function startCountingDown() {
		isCountingDown++;
		var sessionInSeconds = SESSION * 60;
		var breakInSeconds = BREAK * 60;
		var modifyBtns = removeFromCollectionByID(containerChildren, CONFIG["CLOCK"].id);

		if (isCountingDown % 2 === 0) {
			removeEventListenersFromCollection(modifyBtns, "click", emitEvent);
			countDown = setInterval(displayTime, 1000);
			return;
		}
		clearInterval(countDown);

		function displayTime() {
			var seconds = 0;
			if ((breakInSeconds <= 0) && (sessionInSeconds <= 0)) {
				sessionInSeconds = SESSION * 60;
				breakInSeconds = BREAK * 60;
			}
			if (sessionInSeconds > 0) {
				sessionInSeconds--;
				seconds = sessionInSeconds;
			}
			if ((breakInSeconds > 0) && (sessionInSeconds <= 0)) {
				breakInSeconds--;
				seconds = breakInSeconds;
			}

			var minutes = Math.floor(seconds / 60);
			seconds = Math.floor(seconds % 60);

			CONFIG["CLOCK"].innerHTML = getFormattedTime(minutes, seconds);
		}
	}

	function getFormattedTime(mins, seconds) {
		if (mins < 10) {
			var mins = "0" + mins;
		}
		if (seconds < 10) {
			var seconds = "0" + seconds;
		}

		return mins + ":" + seconds;
	}

	function modifySessionLength(operation) {
		SESSION += operation;
		if (SESSION < 1) {
			SESSION = 1;
		}
		CONFIG["sessionDOM"].innerHTML = SESSION;
		CONFIG["CLOCK"].innerHTML = SESSION;
	}

	function modifyBreakLength(operation) {
		BREAK += operation;
		if (BREAK < 1) {
			BREAK = 1;
		}
		CONFIG["breakDOM"].innerHTML = BREAK;
	}

	function emitEvent() {
		var self = this;
		console.log(self);
		eventDelegator[CONFIG["plusBreak"].id] = modifyBreakLength.bind(null, 1);
		eventDelegator[CONFIG["minusBreak"].id] = modifyBreakLength.bind(null, -1);
		eventDelegator[CONFIG["plusSession"].id] = modifySessionLength.bind(null, 1);
		eventDelegator[CONFIG["minusSession"].id] = modifySessionLength.bind(null, -1);
		eventDelegator[CONFIG["CLOCK"].id] = startCountingDown.bind(self);

		return eventDelegator[this.id]();

	}

	function addEventListenersToCollection(collection, eventType, eventName) {
		console.log(collection);
		for (var i = 0; i < collection.length; i++) {
			collection[i].addEventListener(eventType, eventName);
		}
	}

	function removeEventListenersFromCollection(collection, eventType, eventName) {
		for (var i = 0; i < collection.length; i++) {
			collection[i].removeEventListener(eventType, eventName);
		}
	}

	function removeFromCollectionByID(collection, id) {
		var newCollection = [];
		for (var i = 0; i < collection.length; i++) {
			if (!collection[i].id === id) {
				newCollection.push(collection[i]);
			}
		}
		return newCollection;
	}

	namespace[CONFIG["CONTAINER"]] = {};
	namespace[CONFIG["CONTAINER"]].run = run;

	return namespace[CONFIG["CONTAINER"]].run;

})();

var firstClockCONF = {
	SESSION: 25,
	BREAK: 5,
	CONTAINER: "firstClock",
	CLOCK: "time",
	plusBreak: "break-plus",
	minusBreak: "break-minus",
	plusSession: "session-plus",
	minusSession: "session-minus",
	sessionDOM: "sessionLength",
	breakDOM: "breakLength"
};

var secondClockCONF = {
	SESSION: 50,
	BREAK: 10,
	CONTAINER: "secondClock",
	CLOCK: "clock",
	plusBreak: "breakPlus",
	minusBreak: "breakMinus",
	plusSession: "sessionPlus",
	minusSession: "sessionMinus",
	sessionDOM: "session",
	breakDOM: "break"
};

clock(firstClockCONF);
clock(secondClockCONF);
