angular.module('app').controller('Controller', function($scope, StoreImageService) {
	$scope.welcome = "FILE UPLOAD TEST";

	$scope.images = [];	

	$scope.save = function() {
		StoreImageService.saveImage($scope.image);
		$scope.images = StoreImageService.getImages(); 		
	};

});