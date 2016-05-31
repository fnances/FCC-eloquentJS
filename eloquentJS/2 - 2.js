// FizzBuzz
function FizzBuzz(loops) {
	var FizzBuzz = " ";
	for (i = 1; i <= loops; i++) {

		if (i % 3 === 0) {
			FizzBuzz += "Fizz";
		}
		if (i % 5 === 0) {
			FizzBuzz += "Buzz";
		}
		console.log(i, FizzBuzz);
		FizzBuzz = " ";
	}
}

FizzBuzz(100);
