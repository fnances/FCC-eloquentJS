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
	arr.push(element);
	return arrayToList(arr);

}

function nth(list, number) {
	var arr = listToArray(list);
	return arr[number];
}
console.log(prepend(10, arrayToList([1, 2])));
