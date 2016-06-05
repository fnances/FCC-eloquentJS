var arrays = [[1, 2, 3], [4, 5], [6]];

function flatten(arr) {
	return arr.reduce(function (prev, curr) {
		return prev.concat(curr);
	})
}

console.log(flatten(arrays));
