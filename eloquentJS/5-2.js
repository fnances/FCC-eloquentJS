var ancestry = require('./ancestry.js');
ancestry = JSON.parse(ancestry);

function average(array) {
	function plus(a, b) {
		return a + b;
	}
	return array.reduce(plus) / array.length;
}

var byName = {};
ancestry.forEach(function (person) {
	byName[person.name] = person;
});

var ageDifference = ancestry.map(function (person) {

	if (byName[person.mother]) {
		return person.born - byName[person.mother].born;
	}
});

ageDifference = ageDifference.filter(function (age) {
	return typeof age === "number";
});

console.log(average(ageDifference));
