angular.module('app').controller('Controller', function($scope) {
	$scope.welcome = "Test ng change !!!";

	$scope.count = 0;

	$scope.testChanging = function() {
		$scope.count++;		
	};

});