angular.module('app').controller('Controller', function($scope) {

	// https://github.com/alexk111/ngimgcrop

	$scope.welcome = "Crop imagem sample";
	$scope.myImage = '';
	$scope.myCroppedImage = '';

    var handleFileSelect = function(evt) {
		var file = evt.currentTarget.files[0];
		var reader = new FileReader();

		reader.onload = function (evt) {
			$scope.$apply(function($scope) {
				$scope.myImage = evt.target.result;
			});
		};

		reader.readAsDataURL(file);
    }; 

	angular.element(document.querySelector('#fileInput')).on('change',handleFileSelect);
});