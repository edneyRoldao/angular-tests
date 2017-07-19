angular.module('app').controller('Controller', function($scope, StoreImageService) {
	$scope.welcome = "FILE UPLOAD TEST";

	$scope.images = [];	

	$scope.save = function() {
		console.log($scope.image.length);
		StoreImageService.saveImage($scope.image);
		$scope.images = StoreImageService.getImages(); 		
	};

});