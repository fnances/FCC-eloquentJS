function translatePigLatin(str) {
	var arr = str.split(''),
		vowels = ['a', 'e', 'i', 'o', 'u', 'y'],
		finalString = '';

	for (i = 0; i < arr.length; i++) {

		if (vowels.indexOf(arr[0]) !== -1) return str + "way";

		else if (vowels.indexOf(arr[i]) === -1) str += arr[i];

		else {
			str = str.substr(i);
			str += "ay";
			return str;
		}

	}

}

translatePigLatin("glove");
