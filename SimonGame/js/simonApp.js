var simonApp = (function () {
	var colorBtns = document.getElementsByClassName("button");
	var onOffBtn = document.getElementById("onOffBtn");
	var counter = document.getElementById("counter");
	var switcher = document.getElementById("switch");
	var strictBtn = document.getElementById("strict");
	var startBtn = document.getElementById("start");
	var wrongAnswer = document.getElementById("wrong-answer");
	var strictMode = false;
	var aiSequence = [];
	var playerSequence = [];
	var numberOfTurns = 20;
	var actualTurn = 0;
	var playerClicks = 0;

	wrongAnswer.volume -= 0.4;

	onOffBtn.addEventListener("click", turnOnGame);

	function bindEvents() {
		addEventListenersToCollection(colorBtns, "click", pushToSequence);
		strictBtn.addEventListener("click", restartGame);
		startBtn.addEventListener("click", restartGame);
	}

	function turnOnGame() {
		var isOn = switcher.classList.contains("switchOn");
		if (!isOn) {
			bindEvents();
			switcher.classList.remove("switchOff");
			switcher.classList.add("switchOn")
			return;
		}
		switcher.classList.remove("switchOn");
		switcher.classList.add("switchOff");
	}

	function restartGame() {
		if (this.id === "strict") {
			strictMode = (strictMode) ? false : true;
			strictBtn.classList.toggle("strict-on");
		}
		if (this.id === "start") {
			startBtn.classList.toggle("started");
		}
		aiSequence.length = 0;
		playerSequence.length = 0;
		actualTurn = 0;
		updateCounter();
		prepareAiSequence();
	}

	function gameEnded() {
		var div = document.createElement("div");
		div.id = "endgame-message";
		document.body.appendChild(div);
		div = document.getElementById("endgame-message");
		div.innerHTML = "You have won the game !";

	}

	function gameStateManager(switchToAI) {

		if (switchToAI) {
			removeEventListenersFromCollection(colorBtns, "click", pushToSequence);
			removeEventListenersFromCollection([strictBtn, startBtn], "click", restartGame);
			toggleHover();

			if (actualTurn === 20) {
				gameEnded();
				return;
			}
			if (isSequenceEqual()) {
				actualTurn++;
				playerSequence.length = 0;

				updateCounter();
				displayAiSequence();
				return;
			}
			wrongAnswer.play();

			if (strictMode) {
				setTimeout(restartGame, 3000);
				return;
			}

			playerSequence.length = 0;
			setTimeout(displayAiSequence, 3000);
			return;
		}

		toggleHover();
		addEventListenersToCollection(colorBtns, "click", pushToSequence);
		addEventListenersToCollection([strictBtn, startBtn], "click", restartGame);
	}


	function pushToSequence() {

		playSound(this);
		playerSequence.push(this.id);

		if (playerClicks === actualTurn) {
			playerClicks = 0;
			gameStateManager(true);
			return;
		}
		playerClicks++;
	}

	function displayAiSequence() {
		var speed = gameDifficulty(speed);
		var interval = setInterval(addAndRemove, speed);
		var i = 0;
		var temporaryButton;

		function addAndRemove() {
			var actualButton = document.getElementById(aiSequence[i]);
			console.log(actualButton);

			actualButton.classList.add("sequence-click");
			temporaryButton = actualButton;
			setTimeout(function () {
				temporaryButton.classList.remove("sequence-click");
			}, speed - 100);

			playSound(actualButton);
			console.log(aiSequence);
			if (i === actualTurn) {
				gameStateManager();
				clearInterval(interval);
			}
			i++;
		}
	}

	function prepareAiSequence() {
		for (var i = 0; i < numberOfTurns; i++) {
			aiSequence.push(randomElement(colorBtns).id);
		}
		displayAiSequence();
	}

	function isSequenceEqual() {

		for (var i = 0; i < playerSequence.length; i++) {
			if (aiSequence[i] !== playerSequence[i]) {
				return false;
			}
		}
		return true;
	}

	function updateCounter() {
		if (actualTurn < 10) {
			counter.innerHTML = "0" + actualTurn;
			return;
		}
		counter.innerHTML = actualTurn;
	}

	function toggleHover() {
		for (var i = 0; i < colorBtns.length; i++) {
			colorBtns[i].classList.toggle("hover");
		}
	}

	function gameDifficulty(actualSpeed) {
		if (!actualSpeed) {
			return 1250;
		}
		return actualSpeed -= (actualTurn * 10) / 2;
	}

	function playSound(parent) {
		var audio = parent.children[0];
		audio.play();
	}

	function randomElement(array) {
		return array[Math.floor(Math.random() * array.length)];
	}

	function removeEventListenersFromCollection(collection, eventType, event) {
		for (var i = 0; i < collection.length; i++) {
			collection[i].removeEventListener(eventType, event);
		}
	}

	function addEventListenersToCollection(collection, eventType, event) {
		for (var i = 0; i < collection.length; i++) {
			collection[i].addEventListener(eventType, event);
		}
	}

	function setTurnsNumber(turn) {
		numberOfTurns = turn;
	}
	return {
		setTurnsNumber: setTurnsNumber
	};
})();

simonApp.setTurnsNumber(20);
