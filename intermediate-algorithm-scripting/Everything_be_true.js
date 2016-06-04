function truthCheck(collection, pre) {
	var result = collection.map(function (value, index, array) {

		if (value[pre]) return 1;
		return -1;
	}).reduce(function (prev, curr) {
		return prev + curr;
	}, 0);

	if (result === collection.length) return true;
	return false;
}

truthCheck([{
	"name": "Pete",
	"onBoat": true
}, {
	"name": "Repeat",
	"onBoat": true
}, {
	"name": "FastFoward",
	"onBoat": null
}], "onBoat")
