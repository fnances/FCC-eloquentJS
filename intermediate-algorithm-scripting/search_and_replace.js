function myReplace(str, before, after) {
	var arr = str.split(' ');
	var replacedWord = after;

	arr.forEach(function (value, index, arr) {

		if (value === before) {
			var charCode = value.charCodeAt(0);

			if ((charCode >= 65) && (charCode <= 90))
				replacedWord = after.replace(after[0], after[0].toUpperCase());

			arr.splice(index, 1, replacedWord);
		} else return value;

	});

	return arr.join(' ');
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
