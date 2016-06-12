function convertHTML(str) {
	function convert(match) {
		var entities = {
			"&": "&amp;",
			"<": "&gt;",
			">": "&lt;",
			"\"": "&quot;",
			"\'": "&apos;"

		};

		return entities[match];
	}

	return str.replace(/&|>|<|\"|'|[^\s\w]/g, convert);
}
console.log(
	convertHTML("Shindler's List")
);
