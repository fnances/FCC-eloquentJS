var myApp = (function () {
	var Data = {};
	var clickCounter = 1;

	// DOM STUFF
	var ul = document.getElementById('weather-details');
	var list = ul.children;
	var weatherIcon = document.getElementById("picture");
	var switchUnitBtn = document.getElementById('switchUnit');
	var DOM = {};
	for (var i = 0; i < list.length; i++) {
		if (list[i].hasAttribute('id')) {
			var id = list[i].id;
			DOM[id] = document.getElementById(id);
		}
	}


	function getLocation() {
		var options = {
			enableHighAccuracy: true,
			timeout: 5000,
			maximumAge: 75000
		};

		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(fetchData, onFailure, options);
		}

		function onFailure(error) {
			console.log(error);
		}
	}


	function bindEvents() {
		switchUnitBtn.addEventListener('click', switchUnits);
	}



	function switchUnits() {
		clickCounter++;
		if (clickCounter % 2 === 0) {
			switchUnitBtn.innerHTML = "Switch to Celsius";
			DOM.temperature.innerHTML = Data.temperatureFahrenheit + " F&deg;";
			return;
		}
		switchUnitBtn.innerHTML = "Switch to Fahrenheit";
		DOM.temperature.innerHTML = Data.temperatureCelsius + " C&deg;";
	}

	function fetchData(position) {
		var APIurl = "http://api.openweathermap.org/data/2.5/weather?";
		var lat = position.coords.latitude;
		var lon = position.coords.longitude;
		var APPID = "d2ca2e7e18733f024f40db385c9623fe"
		var URL = APIurl + "lat=" + lat + "&lon=" + lon + "&APPID=" + APPID;
		var http = new XMLHttpRequest();
		http.open("GET", URL, true);
		http.send();

		http.onreadystatechange = function () {
			if (this.status === 200) {

				showWeather(prepareData(this.response));
			}
		};

	}

	function prepareData(JSONdata) {
		var weatherData = JSON.parse(JSONdata);
		var KELVIN = 273.15;

		function toDateTime(secs) {
			var t = new Date(1970, 0, 1);
			t.setSeconds(secs);
			return t;
		}
		Data.temperatureCelsius = Math.floor(weatherData.main.temp - KELVIN);
		Data.temperatureFahrenheit = Math.floor(Data.temperatureCelsius + 32 * 9 / 5);

		return {
			city: weatherData.name,
			temperature: Data.temperatureCelsius + " C&deg;",
			weather: weatherData.weather[0].description,
			wind: weatherData.wind.speed + " km/h",
			humidity: weatherData.main.humidity + "&percnt;",
			pressure: weatherData.main.pressure + " hpa",
			sunrise: toDateTime(weatherData.sys.sunrise),
			sunset: toDateTime(weatherData.sys.sunset),
			picture: weatherData.weather[0].main
		};
	}

	function showWeather(weatherData) {
		for (var prop in weatherData) {
			if (prop !== "picture") {
				DOM[prop].innerHTML = weatherData[prop];
			}
		}
		changePicture(weatherData.picture);
	}

	function changePicture(weatherPicture) {
		var weather = {
			Rain: "wi-rain-mix",
			Snow: "wi-snow",
			Clouds: "wi-cloudy",
			Thunderstorm: "wi-thunderstorm",
			Clear: "wi-thunderstorm",
			Dizzle: "wi-sprinkle"
		};
		var classToRemove = weatherIcon.classList[1];
		weatherIcon.classList.remove(classToRemove);
		weatherIcon.classList.add(weather[weatherPicture]);
	}

	return {
		getTheWeather: getLocation,
		switchUnits: switchUnits,
		bindEvents: bindEvents
	};

})();

myApp.getTheWeather();
myApp.bindEvents();
