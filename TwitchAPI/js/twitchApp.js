var twitchApp = (function () {

	var streamers = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
	var url = 'https://api.twitch.tv/kraken/streams/';
	var body = document.body;
	var ul = document.getElementById("streamers");
	var cb = "?callback=twitchApp.handleJSON";
	var onlineStreamers = [];
	var btnOnline = document.getElementsByClassName('online-hover')[0];
	var btnOffline = document.getElementsByClassName('offline-hover')[0];
	var btnAll = document.getElementsByClassName('all-hover')[0];

	function addScriptTags() {
		streamers.forEach(function (streamer) {
			var script = document.createElement("script");
			body.appendChild(script);
			script.src = url + streamer + cb;
			body.removeChild(script);
		});
		bindEvents();
	}

	var handleJSON = function (data) {
		if (data.stream !== null) {

			var JSON = data.stream;

			var streamer = {
				page: JSON.channel.url,
				logo: JSON.channel.logo,
				game: JSON.game,
				name: JSON.channel.display_name,
				viewers: JSON.viewers
			};

			var aClassName = "class=\"streamer-name-link \"";
			var aHref = " href=\"" + streamer.page + "\"";
			var a = "<a " + aClassName + aHref + ">" + streamer.name + "</a> \n";

			var imgClassName = "class=\"streamer-logo\"";
			var imgSrc = "src=\"" + streamer.logo + "\"";
			var img = "<img " + imgClassName + imgSrc + "> \n";

			var pClassName = "class=\"streamer-game-viewers\"";
			var p = "<p " + pClassName + ">" + streamer.game + "<br/>" + streamer.viewers + "</p> \n";

			var li = "<li class=\"online-streamer\">" + a + img + p + "</li>";

			return render(li);
		}

		offlineStreamer(data);

	};

	function offlineStreamer(data) {

		var offlineStreamer = data._links.channel;
		var index = offlineStreamer.lastIndexOf("/") + 1;
		offlineStreamer = offlineStreamer.slice(index);
		var li = "<li class=\"offline-streamer\">" + offlineStreamer + "</li>";

		return render(li);
	}

	function render(element) {

		ul.innerHTML += element;

	}

	function bindEvents() {
		btnAll.addEventListener('click', showAll);
		btnOnline.addEventListener('click', showOnline);
		btnOffline.addEventListener('click', showOffline);

	}



	function showAll() {
		btnAll.classList.toggle("all");
		removeClassOtherBtn(btnOnline, btnOffline);
		var ulChild = ul.children;
		for (var i = 0; i < ulChild.length; i++) {
			addRemove(ulChild[i], "fadeOut", "fadeIn");

		}
	}

	function showOnline() {
		btnOnline.classList.toggle("online");
		removeClassOtherBtn(btnAll, btnOffline);
		var ulChild = ul.children;

		for (var i = 0; i < ulChild.length; i++) {

			if (hasClass(ulChild[i], "offline-streamer")) {
				addRemove(ulChild[i], "fadeIn", "fadeOut");
			} else {
				addRemove(ulChild[i], "fadeOut", "fadeIn");
			}

		}
	}

	function showOffline() {
		btnOffline.classList.toggle("offline");
		removeClassOtherBtn(btnAll, btnOnline);

		var ulChild = ul.children;

		for (var i = 0; i < ulChild.length; i++) {
			if (hasClass(ulChild[i], "online-streamer")) {
				addRemove(ulChild[i], "fadeIn", "fadeOut");
			} else {
				addRemove(ulChild[i], "fadeOut", "fadeIn");

			}
		}
	}


	function hasClass(element, className) {
		return element.classList.contains(className);
	};

	function addRemove(e, classToRemove, classToAdd) {
		if (e.classList.contains(classToRemove)) {
			e.classList.remove(classToRemove);
		}
		e.classList.add(classToAdd);

	}

	function removeClassOtherBtn() {
		var args = arguments;
		for (var i = 0; i < args.length; i++) {
			if (args[i].classList.length > 1) {
				var classToRemove = args[i].classList[1];
				args[i].classList.remove(classToRemove);
			}
		}
	}

	function addStreamer(streamerName) {
		streamers.push(streamerName);
	}

	function removeStreamer(streamerName) {
		streamers = streamers.map(function (streamer) {
			return streamer !== streamerName;
		});
	}

	return {
		addScriptTags: addScriptTags,
		addStreamer: addStreamer,
		removeStreamer: removeStreamer,
		handleJSON: handleJSON,
		bindEvents: bindEvents
	};

})();

twitchApp.addScriptTags();
