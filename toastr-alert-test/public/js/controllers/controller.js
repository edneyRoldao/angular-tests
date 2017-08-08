angular.module('app').controller('Controller', function($scope, toastr) {
	$scope.welcome = "test toastr alert";

	$scope.test = function() {
		toastr.success("Hello", "Guy !!!!");
	};

});