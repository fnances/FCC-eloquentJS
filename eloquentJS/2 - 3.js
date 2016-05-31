//chessBoard

var chessBoard = '';
var hash = '';
var space = "\n";
var height = 8;
var width = 4;

chessBoard += space;

for (var i = 1; i <= height; i++) {
	if (i % 2 === 0) hash = "# ";
	else hash = " #";


	for (var j = 1; j <= width; j++) {

		chessBoard += hash;

	}

	chessBoard += space;

}

console.log(chessBoard);
