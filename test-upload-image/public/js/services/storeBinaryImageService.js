var images = [];

function storeImageAsBinarySource() {
	var service = {};

	service.saveImage = function(binaryImage) {
		images.push(binaryImage);
	};

	service.readImage = function(id) {
		return images.filter(function(image) {
			return image.id === id;
		})[0];
	};

	return service;
};

angular.module("app").factory("StoreImageService", storeImageAsBinarySource);