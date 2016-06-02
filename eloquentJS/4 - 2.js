function reverseArray(array) {
	var reversedArray = [];
	var counter = array.length - 1;

	for (var i = 0; i < array.length; i++) {
		reversedArray[i] = array[counter];
		counter--;
	}

	return reversedArray;

}

reverseArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);


function reverseArrayInPlace(array) {
	var counter = array.length - 1;
	var temporaryVariable;

	for (var i = 0; i < array.length / 2; i++) {
		temporaryVariable = array[i];
		array[i] = array[counter];
		array[counter] = temporaryVariable;
		counter--;

	}
	return array;

}

reverseArrayInPlace([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
