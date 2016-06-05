function average(array) {
	function plus(a, b) {
		return a + b;
	}
	return array.reduce(plus) / array.length;
}

var ancestry = require('./ancestry.js');
ancestry = JSON.parse(ancestry);


var centuries = {};

ancestry.forEach(function (person) {
	var century = Math.ceil(person.died / 100);

	if (!centuries[century]) {
		centuries[century] = [];
	}

	centuries[century].push(person.died - person.born);
});


for (var century in centuries) {
	console.log(century + ": " + average(centuries[century]));
}
