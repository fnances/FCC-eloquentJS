(function () {
	var weatherApp = {
		init: function () {
			this.cacheDom();
			this.getLocation();
			this.bindEvents();
		},
		cacheDom: function () {
			var ul = document.getElementById('weather-details');
			var list = ul.children;
			console.log(list);
			for (var i = 0; i < list.length; i++) {
				if (list[i].hasAttribute('id')) {
					var id = list[i].id;
					this[id] = document.getElementById(id);
				}
			}
			this.weatherIcon = document.getElementById("picture");
			this.switchUnitBtn = document.getElementById('switchUnit');
		},
		getLocation: function () {
			var onFailureGetLocation = this.onFailureGetLocation.bind(this);
			var onSuccesGetLocation = this.onSuccesGetLocation.bind(this);
			var options = {
				enableHighAccuracy: true,
				timeout: 5000,
				maximumAge: 75000
			};

			if (navigator.geolocation) {
				navigator.geolocation.getCurrentPosition(onSuccesGetLocation, onFailureGetLocation, options);
			}

		},
		bindEvents: function () {
			this.switchUnitBtn.addEventListener('click', this.switchUnits.bind(this));
		},
		clickCounter: 1,
		switchUnits: function () {
			this.clickCounter++;
			if (this.clickCounter % 2 === 0) {
				this.switchUnitBtn.innerHTML = "Switch to Celsius";
				this.temperature.innerHTML = this.temperatureFahrenheit + " F&deg;";
				return;
			}
			this.switchUnitBtn.innerHTML = "Switch to Fahrenheit";
			this.temperature.innerHTML = this.temperatureCelsius + " C&deg;";

		},
		onSuccesGetLocation: function (position) {
			this.latitude = position.coords.latitude;
			this.longitude = position.coords.longitude;
			this.fetchWeather();
		},
		onFailureGetLocation: function (error) {
			console.log(error);
		},
		fetchWeather: function () {
			this.url = "http://api.openweathermap.org/data/2.5/weather?";
			var APPID = "d2ca2e7e18733f024f40db385c9623fe"
			var url = this.url + "lat=" + this.latitude + "&lon=" + this.longitude + "&APPID=" + APPID;
			var showWeather = this.showWeather.bind(this);
			var prepareData = this.prepareData.bind(this);
			var http = new XMLHttpRequest();

			http.open("GET", url, true);
			http.send();

			http.onreadystatechange = function () {
				if (this.status === 200) {
					showWeather(prepareData(this.response));
				}
			};
		},
		prepareData: function (data) {
			var weatherData = JSON.parse(data);
			var KELVIN = 273.15;

			function toDateTime(secs) {
				var t = new Date(1970, 0, 1);
				t.setSeconds(secs);
				return t;
			}

			this.temperatureCelsius = Math.floor(weatherData.main.temp - KELVIN);
			this.temperatureFahrenheit = Math.floor(this.temperatureCelsius + 32 * 9 / 5);

			return {
				city: weatherData.name,
				temperature: this.temperatureCelsius + " C&deg;",
				weather: weatherData.weather[0].description,
				wind: weatherData.wind.speed + " km/h",
				humidity: weatherData.main.humidity + "&percnt;",
				pressure: weatherData.main.pressure + " hpa",
				sunrise: toDateTime(weatherData.sys.sunrise),
				sunset: toDateTime(weatherData.sys.sunset),
				picture: weatherData.weather[0].main
			};
		},
		showWeather: function (weatherData) {
			for (var prop in weatherData) {
				if (prop !== "picture") {
					this[prop].innerHTML = weatherData[prop];
				}
			}
			this.changePicture(weatherData.picture);
		},
		changePicture: function (weather) {
			var weatherIcon = this.weatherIcon;

			function changeIcon(iconClass) {
				var classToRemove = weatherIcon.classList[1];
				weatherIcon.classList.remove(classToRemove);
				weatherIcon.classList.add(iconClass);
			}

			switch (weather) {
			case "Rain":
				changeIcon("wi-rain-mix");
				break;
			case "Snow":
				changeIcon("wi-snow");
				break;
			case "Clouds":
				changeIcon("wi-cloudy");
				break;
			case "Thunderstorm":
				changeIcon("wi-thunderstorm0");
				break;
			case "Clear":
				changeIcon("wi-day-sunny");
				break;
			case "Dizzle":
				changeIcon("wi-sprinkle");
				break;

			default:
				changeIcon("wi-day-cloudy-high");
				break;
			}
		}
	};
	weatherApp.init();
	// end of SEAF
})();
