angular.module('app').controller('Controller', function($scope) {
	$scope.test = [];
	$scope.welcome = "Hello Moment JS !";

	var maxYear = moment().years() - 90; 
	var minYear = moment().subtract(16, "years").years();


	for(var i = minYear; i > maxYear; i--) {
		$scope.test.push(i);
	}

});