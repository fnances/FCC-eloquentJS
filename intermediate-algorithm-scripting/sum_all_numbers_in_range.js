function sumAll(arr) {

	var sum = 0;
	var max = Math.max(arr[0], arr[1]);
	var min = Math.min(arr[0], arr[1]);

	for (var i = max; i >= min; i--) {
		sum += i;

	}
	return sum;


}
sumAll([1, 4]);
