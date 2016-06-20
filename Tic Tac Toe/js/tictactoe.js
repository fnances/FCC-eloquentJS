var TicTacToe = (function () {
	var fields = document.getElementsByClassName("field");
	var x = document.getElementById("x");
	var o = document.getElementById("o");
	var playerChoice = "";
	var computerChoice = "";
	var possibleMoves = [0, 1, 2, 3, 4, 5, 6, 7, 8];
	var playerMoves = "";
	var computerMoves = "";

	function bindEvents() {
		x.addEventListener("click", setUsers);
		o.addEventListener("click", setUsers);
		addEventsAndSetID(fields, "click", playerMove);

	}

	function playerMove() {
		var id = this.id;
		console.log(playerChoice, computerChoice);
		var field = document.getElementById(id);
		playerMoves += id;
		possibleMoves = possibleMoves.splice(parseInt(id), 1);
		console.log(playerChoice);
		field.innerHTML += playerChoice;
		field.removeEventListener("click", playerMove);
		checkWinner(playerMoves, "You");
		computerTurn();
	}

	function checkWinner(moves, player) {

		var winningFields = ["012", "345", "678", "036", "147", "258", "048", "246"];

		var result = winningFields.map(function (value) {

			if (value === moves) {
				return true;
			}
			for (var i = 0; i < value.length; i++) {

				if (!moves.indexOf(value[i]) > -1) {
					return false;
				}
			}
			return true;
		});

		result = result.some(function (value) {
			return !!value;
		});


		if (result) {
			console.log("congratulations ! ", player, " Won !");
			removeEventListeners(fields, "click", playerMove);
		}

	}

	function clearTable(addIdd) {
		for (var i = 0; i < fields.length; i++) {
			fields[i].innerHTML = "";
		}
	}

	function setUsers() {
		playerChoice = this.id;
		computerChoice = (playerChoice === "x") ? "o" : "x";
		if (computerChoice === "x") {
			computerTurn();
		}
		removeEventListeners([x, o], "click", setUsers);
	}

	function computerTurn() {
		var randomMove = Math.floor(Math.random() * possibleMoves.length);
		var computerMove = possibleMoves[randomMove];
		var fieldID = fields[computerMove].id;
		var field = document.getElementById(fieldID);
		possibleMoves = possibleMoves.splice(randomMove, 1);
		field.innerHTML = computerChoice;
		computerMoves += computerMove.toString();
		field.removeEventListener("click", playerMove);
		checkWinner(computerMoves, "computer");
	}

	function removeEventListeners(array, eventType, event) {
		for (var i = 0; i < array.length; i++) {
			array[i].removeEventListener(eventType, event);
		}
	}

	function addEventsAndSetID(fields, eventType, action) {
		for (var i = 0; i < fields.length; i++) {
			fields[i].id = i
			var id = fields[i].id;
			document.getElementById(id).addEventListener(eventType, action);
		}
	}

	return {
		bindEvents: bindEvents,
		computerTurn: computerTurn

	};

})();
TicTacToe.bindEvents();
