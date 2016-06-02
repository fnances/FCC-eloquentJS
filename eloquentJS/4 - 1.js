function range(start, end, step) {
	var range = [];
	var decrement = arguments[2] || 1;
	var counter = 0;
	var countTo = decrement === arguments[2] ? end / step : start;

	for (var i = end; i >= countTo; i--) {
		range[counter] = end;
		end -= decrement;
		counter++;
	}

	return range;
}

console.log(range(1, 10));

function sum(array) {
	var sum = 0;

	for (var i = 0; i < array.length; i++) {
		sum += array[i];
	}

	return sum;
}

console.log(sum(range(1, 10)));
