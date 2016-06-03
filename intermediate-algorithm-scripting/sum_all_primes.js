function sumPrimes(num) {
	var sum = 0;
	var counterOfDivisors = [];

	for (var i = 2; i <= num; i++) {
		counterOfDivisors.length = 0;

		for (var j = 1; j <= i; j++) {

			if (i % j === 0) {
				counterOfDivisors.push(i);
			}

		}
		if (counterOfDivisors.length <= 2) {
			sum += i;
		}
	}
	return sum;
}

sumPrimes(10);
