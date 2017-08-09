angular.module('app').controller('Controller', function($scope) {
	$scope.welcome = "Test ng change !!!";

	$scope.count = 0;

	$scope.testChanging = function() {
		$scope.count++;		
	};


	$scope.welcomeMask = "Test mask cep directive";
	$scope.cep = "02343030";
	$scope.count2 = 0;

	$scope.testChanging2 = function() {
		$scope.count2++;		
	};

});