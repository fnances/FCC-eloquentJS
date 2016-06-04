function addTogether() {
	var arg1 = arguments[0];
	var arg2 = arguments[1];

	var sum = function (num) {
		if (typeof num !== "number") {
			return;
		}
		if (typeof arg1 !== "number") {
			return;
		}
		return arg1 + num;
	};

	if ((arguments.length > 1) || (typeof arg1 !== "number")) {
		return sum(arg2);
	}

	return sum;
}
console.log(
	addTogether(2)(3)
);
