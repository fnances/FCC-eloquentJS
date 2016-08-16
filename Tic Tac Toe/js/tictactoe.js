var TicTacToe = (function () {
	var fields = document.getElementsByClassName("field");
	var x = document.getElementById("x");
	var o = document.getElementById("o");
	var btnContainer = document.getElementsByClassName('btnContainer')[0];
	var playerChoice = "";
	var computerChoice = "";
	var possibleMoves = [];
	var playerMoves = "";
	var computerMoves = "";
	var winner = false;

	function bindEvents() {
		x.addEventListener("click", setUsers);
		o.addEventListener("click", setUsers);
		addEventsAndSetID(fields, "click", playerMove);
	}

	function setUsers() {
		playerChoice = this.id;
		computerChoice = (playerChoice === "x") ? "o" : "x";
		if (computerChoice === "x") {
			computerTurn();
		}
		removeEventListeners([x, o], "click", setUsers);
	}


	function playerMove() {
		var id = this.id;
		var moveToRemove = possibleMoves.indexOf(parseInt(id));
		possibleMoves.splice(moveToRemove, 1);
		var field = document.getElementById(id);
		playerMoves += id;
		field.innerHTML = playerChoice;
		checkWinner(playerChoice);
		field.removeEventListener("click", playerMove);
	}

	function computerTurn() {
		var computerMove = randomArray();
		var moveToRemove = possibleMoves.indexOf(computerMove);
		possibleMoves.splice(moveToRemove, 1);

		var fieldID = fields[computerMove].id;
		var field = document.getElementById(fieldID);

		computerMoves += fieldID.toString();
		field.innerHTML = computerChoice;
		checkWinner();
		field.removeEventListener("click", playerMove);

	}

	function checkWinner(checker) {

		var winningFields = ["012", "345", "678", "036", "147", "258", "048", "246"];
		var arrayOfMoves = [playerMoves, computerMoves];

		winningFields.forEach(function (field) {

			arrayOfMoves.forEach(function (move) {

				for (var i = 0; i < field.length; i++) {
					if (!includes(move, field[i])) {
						return false;
					}
				}

				winner = move;

			})
		});

		if (winner) {
			winner = (winner === playerMoves) ? playerChoice : computerChoice;
			gameOver();
			return;
		}
		if (checker === playerChoice) {
			return computerTurn();
		}

	}

	function gameOver() {
		removeEventListeners(fields, "click", playerMove);
		var div = document.createElement('div');
		div.id = "game-over-div";
		div.innerHTML = winner.toUpperCase() + " has won !";
		btnContainer.appendChild(div);
	}

	function includes(string, item) {
		return string.indexOf(item) > -1;
	}

	function randomArray() {
		var randomElement = Math.floor(Math.random() * possibleMoves.length);

		return possibleMoves[randomElement];
	}

	function removeEventListeners(array, eventType, event) {
		for (var i = 0; i < array.length; i++) {
			array[i].removeEventListener(eventType, event);
		}
	}

	function addEventsAndSetID(fields, eventType, action) {
		for (var i = 0; i < fields.length; i++) {
			fields[i].id = i;
			var id = fields[i].id;
			possibleMoves.push(i);
			document.getElementById(id).addEventListener(eventType, action);
		}
	}

	return {
		bindEvents: bindEvents

	};

})();
TicTacToe.bindEvents();
