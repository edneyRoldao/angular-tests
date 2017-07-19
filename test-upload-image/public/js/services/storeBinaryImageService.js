var images = [];

function storeImageAsBinarySource() {
	var service = {};

	service.saveImage = function(image) {
		images.push(image);
	};

	service.getImages = function() {
		return images;
	};

	return service;
};

angular.module("app").factory("StoreImageService", storeImageAsBinarySource);