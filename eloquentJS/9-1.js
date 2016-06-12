// Fill in the regular expressions

verify(/ca[r|t]/, ["my car", "bad cats"], ["camper", "high art"]);

verify(/pr?op/, ["pop culture", "mad props"], ["plop"]);

verify(/ferr([et]|y|[arri])/, ["ferret", "ferry", "ferrari"], ["ferrum", "transfer A"]);

verify(/\w[ious]?\s/, ["how delicious", "spacious room"], ["ruinous", "consciousness"]);

verify(/\s[\W]/, ["bad punctuation ."], ["escape the dot"]);

verify(/\w{6,}\S/, ["hottentottententen"], ["no", "hotten totten tenten"]);

verify(/[r|ne](^\we|e\w)/, ["red platypus", "wobbling nest"], ["earth bed", "learning ape"]);


function verify(regexp, yes, no) {
	// Ignore unfinished exercises
	if (regexp.source == "...") return;
	yes.forEach(function (s) {
		if (!regexp.test(s))
			console.log("Failure to match '" + s + "'");
	});
	no.forEach(function (s) {
		if (regexp.test(s))
			console.log("Unexpected match for '" + s + "'");
	});
}
