function convertToRoman(num) {
	var numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
	var romanNumbers = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

	var roman = '';

	numbers.forEach(function (value, i) {
		while (value <= num) {
			roman += romanNumbers[i];
			num -= value;
		}
	});

	return roman;

}

console.log(
	convertToRoman(36)
);
