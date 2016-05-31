function diffArray(arr1, arr2) {
	var newArr = arr1.concat(arr2);

	newArr = newArr.filter(function (value, index, array) {

		if (((arr1.indexOf(value) === -1) && (arr2.indexOf(value) !== -1)) ||
			((arr2.indexOf(value) === -1) && (arr1.indexOf(value) !== -1))) {
			return value;
		}


	});
	return newArr;
}
diffArray([3, 1, 2, 3, 5], [1, 2, 4, 5]);
