function dropElements(arr, func) {

	var droppedArray = [];
	for (var i = 0; i < arr.length; i++) {
		if (func(arr[i])) {
			droppedArray = arr.slice(i);
			return droppedArray;
		}

	}

	return droppedArray;
}
dropElements([1, 2, 3], function (n) {
	return n < 3;
});








//
// var array = [1, 2, 3, 4];
// var length = array.length;
// var temporary;
// console.log(array);
// console.log(array.length);
// console.log(length);
// console.log(array.shift());
// console.log(array.length);
// console.log(length);
