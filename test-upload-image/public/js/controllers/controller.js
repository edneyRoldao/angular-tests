angular.module('app').controller('Controller', function($scope) {
	$scope.welcome = "FILE UPLOAD TEST";
	$scope.uploadImg = "";
	$scope.showImg = "";

	$scope.printImage = function() {
		console.log($scope.uploadImg);
	}
});