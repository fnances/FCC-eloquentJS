function smallestCommons(arr) {
	arr.sort();
	var range = [];
	var finalArray = [];
	var counter = arr[1];
	var condition;

	while (counter >= arr[0]) {
		range.push(counter--);
	}
	counter = 1;

	function validator(value) {
		return counter % value === 0;
	}

	for (;;) {

		condition = range.every(validator);
		if (condition) {
			return counter;
		}
		counter++;
	}

}
console.log(
	smallestCommons([1, 5])
);
