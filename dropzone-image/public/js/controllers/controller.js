angular.module("app").controller('Controller', function($scope) {
	$scope.welcome = "Hello drag and drop file directive";
	$scope.image = null;
	$scope.imageFileName = "";
	$scope.uploadme = {};
	$scope.uploadme.src = "";
});