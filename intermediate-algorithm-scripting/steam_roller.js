function steamrollArray(arr) {
	var flattenedArray = [];

	var recursive = function (array) {
		if (Array.isArray(array)) {
			return array.map(recursive);
		}
		flattenedArray.push(array);
	};
	recursive(array);
	return flattenedArray;


}
console.log(steamrollArray([1, [2], [3, [[4]]]]));
