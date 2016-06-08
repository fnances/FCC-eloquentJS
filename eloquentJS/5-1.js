var arrays = [[1, 2, 3], [4, 5], [6]];
var deepArray = [[5], [[[1]], 2], [11]];

function flatten(array) {
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

console.log(flatten(deepArray));
