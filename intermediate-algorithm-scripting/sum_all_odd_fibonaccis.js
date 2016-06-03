function sumFibs(num) {
	var fib = [];
	var currentFib = 2;
	var counter = 2;
	var sum = 2;
	fib[0] = 1;
	fib[1] = 1;
	while (currentFib <= num) {
		fib[counter] = fib[counter - 1] + fib[counter - 2];
		currentFib = fib[counter];
		if ((fib[counter] <= num) && (fib[counter] % 2 !== 0)) {
			sum += fib[counter];
		}
		counter++;
	}

	return sum;
}

console.log(sumFibs(1000));
