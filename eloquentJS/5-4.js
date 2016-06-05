function every(array, action) {
	var condition = true;
	for (var i = 0; i < array.length; i++) {
		if (!action(array[i])) {
			condition = false;
		}
	}
	return condition;
}

function some(array, action) {
	for (var i = 0; i < array.length; i++) {
		if (action(array[i])) {
			return true;
		}
	}
	return false;
}


console.log(every([NaN, NaN, NaN], isNaN));
// → true
console.log(every([NaN, NaN, 4], isNaN));
// → false
console.log(some([NaN, 3, 4], isNaN));
// → true
console.log(some([2, 3, 4], isNaN));
// → false
