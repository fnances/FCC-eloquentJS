function countBs(string) {
	var counter = 0;
	for (var i = 0; i < string.length; i++) {

		if (string.charAt(i) === "B") counter++;

	}

	return counter;

}

console.log(countBs("BBCSB"));


function countChar(string, char) {
	var counter = 0;

	for (var i = 0; i < string.length; i++) {

		if (string.charAt(i) === char) counter++;

	}

	return counter;

}



function countCharFilter(string, char) {
	var arr = string.split('');

	arr = arr.filter(function (value) {
		return value === char;
	});

	return arr.length;
}

function countCharForEach(string, char) {
	var arr = string.split('');
	var counter = 0;

	arr.forEach(function (value) {
		if (value === char) {
			counter++;
		}
	});

	return counter;
}

function countCharMap(string, char) {
	var arr = string.split('');
	var counter = 0;

	arr = arr.map(function (value) {
		return (value === char) ? counter++ : value;

	});
	return counter;
}

function countCharReduce(string, char) {
	var arr = string.split('');

	arr = arr.reduce(function (prev, curr, index, array) {
		if (array[index] === char) {
			prev++;
		}
		return prev;
	}, 0);

	return arr;
}

console.log(countCharReduce("kkssakkdakkkkksfkkkkkasfkkkk", "k"));
