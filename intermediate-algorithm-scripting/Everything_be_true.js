function truthCheck(collection, pre) {
	var counter = 0;

	var result = collection.forEach(function (value) {

		if ((value[pre]) && (Boolean(value[pre])) || (value[pre] === "yes")) {
			counter++;
		}

	});

	console.log(counter);
	console.log(collection.length);
	if (counter === collection.length) return true;
	return false;
}

truthCheck([{
	"user": "Tinky-Winky",
	"sex": "male"
}, {
	"user": "Dipsy",
	"sex": "male"
}, {
	"user": "Laa-Laa",
	"sex": "female"
}, {
	"user": "Po",
	"sex": "female"
}], "sex");
