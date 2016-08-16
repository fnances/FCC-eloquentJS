var wikipediaAPP = (function () {

	var APIurl = 'http://en.wikipedia.org/w/api.php?action=opensearch&search=';
	var phrase = document.getElementById('phrase');
	var searchBtn = document.getElementById('search');
	var container = document.getElementById('container');
	var body = document.body;
	var searchedPhrase;

	function bindEvents() {
		searchBtn.addEventListener('click', addScriptTag);
	}

	function addScriptTag() {
		searchedPhrase = phrase.value.replace(" ", "%20");

		var script = document.createElement("script");
		document.body.appendChild(script);
		var cb = "&callback=wikipediaAPP.handleJSON";
		script.src = APIurl + searchedPhrase + cb;
		document.body.removeChild(script);
	}


	function handleJSON(data) {
		var preparedData = data.slice(1);
		preparedData = preparedData[0].map(function (_, i) {
			return preparedData.map(function (value) {
				return value[i];
			});
		}).map(arrayToStringHTML);;
		console.log(preparedData);
		render(preparedData);
	}

	function arrayToStringHTML(pageDetails) {
		var a = "";
		var p = "";
		var li = ""
		var title = pageDetails[0];
		var description = pageDetails[1];
		var address = pageDetails[2];

		var aClassName = "class=\"result-title-address\"";
		var aHREF = "\"" + address + "\"";
		var pClassName = "class=\"result-description\"";

		a += "<a " + aClassName + " href=" + aHREF + ">" + title + "</a>";
		p += "<p " + pClassName + ">" + description + "</p>";

		li += "<li>" + a + p + "</li> \n";

		return li;
	}

	function render(preparedData) {
		var ul = document.getElementById('results');
		if (!ul) {
			var ul = document.createElement("ul");
			ul.id = "results";
			body.appendChild(ul);
		}

		if (!container.classList.contains("changePosition")) {
			container.classList.add("changePosition");
		}
		ul.innerHTML = preparedData.reduce(function (prev, current) {
			prev += current;
			return prev;
		}, "");

	}

	return {
		bindEvents: bindEvents,
		handleJSON: handleJSON
	};

})();

wikipediaAPP.bindEvents();
