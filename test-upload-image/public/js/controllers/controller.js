angular.module('app').controller('Controller', function($scope) {
	$scope.welcome = "Hello Solar System !!!";

	$scope.printImage = function() {
		console.log($scope.image);
	}

});