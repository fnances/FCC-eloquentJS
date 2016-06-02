function arrayToList(arr) {
	var list = {};
	var counter = arr.length - 1;

	while (counter >= 0) {
		list = {
			value: arr[counter],
			rest: counter === arr.length - 1 ? null : list
		};

		counter--;
	}
	return list;
}

function listToArray(list) {
	var arr = [];
	var counter = 0;
	for (var node = list; node; node = node.rest) {
		arr[counter] = node.value;
		counter++;
	}

	return arr;
}

function prepend(element, list) {
	var arr = listToArray(list);
	arr.unshift(element);
	return arrayToList(arr);

}

function nth(list, number) {
	var counter = 0;
	for (var node = list; node; node = node.rest) {

		if (counter === number) {
			return node.value;
		}
		counter++;
	}
}

// function nth(list, number) {
// 	var arr = listToArray(list);
// 	return arr[number];
// }

var counter = 0;

function nth(list, number) {
	var node = list;

	if (number === counter) {
		return node.value;
	}
	counter++;
	return nth(node.rest, number);
}

console.log(nth(prepend(10, arrayToList([1, 2, 3])), 2));

console.log(listToArray(prepend(10, arrayToList([1, 2, 3]))));
