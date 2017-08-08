angular.module('app').controller('Controller', function($scope, toastr) {
	$scope.welcome = "test toastr alert";

	$scope.example1 = function() {
		toastr.success("Hello", "Guy !!!!");
	};

	$scope.example2 = function() {
		toastr.info("Hello", "Guy !!!!");
	};

	$scope.example3 = function() {
		toastr.error("Hello", "Guy !!!!");
	};

	$scope.example4 = function() {
		toastr.warning("Hello", "Guy !!!!");
	};

	$scope.closeAlert = function() {
		toastr.clear();
	};

	$scope.storeToast = function() {
		var toast = toastr.error("you are not allowed to do this!");
		// do something...
		toastr.refreshTimer(toast);
	};


});