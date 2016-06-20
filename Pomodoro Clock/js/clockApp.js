// angular.module("services", [])
// 	.value("initialSessionLength", 25)
// 	.value("initialBreakLength", 5)
// 	.factory("operateOnBreakLength", ["initialBreakLength", function (initialBreakLength) {
// 		return function (operation) {
// 			initialBreakLength += operation;
// 			return initialBreakLength;
// 		};
// }])
// 	.factory("operateOnSessionLength", ["initialSessionLength", function (initialSessionLength) {
// 		return function (operation) {
// 			initialSessionLength += operation;
// 			return initialSessionLength;
// 		};
// }]);


angular.module("clockApp", [])
	.controller("timeController", ["$scope", "$interval",
	  function ($scope, $interval) {
			// var initialSessionLength =
			// 	var initialBreakLength =
			var self = $scope;
			$scope.settingsBreakLength = 5;
			$scope.settingsSessionLength = 25;
			$scope.isCounting = false;
			$scope.addOrSubstract = function (operation) {

				self.settingsBreakLength += operation;

			};

			$scope.addOrSubstractSession = function (operation) {

				self.settingsSessionLength += operation;
				self.sessionLength = self.settingsSessionLength;

			};

			var interval;
			var continueCounting = false;
			var sessionLengthInSeconds = parseInt($scope.settingsSessionLength) * 60;

			$scope.startCountingDown = function () {
				$scope.isCounting = ($scope.isCounting === true) ? false : true;

				if ((sessionLengthInSeconds > 0) && (!$scope.isCounting)) {
					$interval.cancel(interval);
					continueCounting = true;
					return;
				}
				if (continueCounting) {
					interval = $interval(countDown, 1000);
					return;
				}

				interval = $interval(countDown, 1000);

				if (sessionLengthInSeconds <= 0) {
					$interval.cancel(interval);
				}

				function countDown() {
					$scope.startFiltering = true;
					$scope.sessionLength = sessionLengthInSeconds;
					sessionLengthInSeconds--;

				}


			};
	}])
	.filter('secondsToMinute',
		function () {

			return function (timeInSeconds, startFiltering) {

				if (startFiltering) {
					var minuteValue = parseInt(timeInSeconds / 60);
					var secondsValue = timeInSeconds % 60;

					if (secondsValue === 0) {
						return minuteValue + " : 00";
					}
					if (secondsValue < 10) {
						return minuteValue + " : 0" + secondsValue;
					}
					return minuteValue + " : " + secondsValue;
				}

				return timeInSeconds;
			};

		});
