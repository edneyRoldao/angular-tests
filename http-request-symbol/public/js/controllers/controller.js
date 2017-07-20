angular.module('app').controller('Controller', function($scope, RestService) {
	$scope.welcome = "Test Rest";
	$scope.resposta = "";
	$scope.callService = function() {
		RestService.callService($scope.parametro).success(function(data) {
			$scope.resposta = data;
		});
	};

});