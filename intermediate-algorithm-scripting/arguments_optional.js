function addTogether() {
	var args = Array.from(arguments);
	var sum = 0;

	if ((args.length > 1) && (typeof args[0] == "number") && (typeof args[1] == "number")) {
		return args[0] + args[1];
	}

	args = args.reduce(function (prev, curr) {
		return prev + curr;
	}, 0);

	if (typeof args != "number") {
		return;
	}

	return function (num) {
		var sum = args + num;

		if (typeof num != "number") {
			return;
		}
		return sum;
	};

}
addTogether(2, "3");
