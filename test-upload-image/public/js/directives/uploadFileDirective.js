function fileUpload() {
	var directiveObj = {};

	directiveObj.scope = {
		fileUpload: "="
	};

	directiveObj.link = function(scope, element, attributes) {
		element.bind("change", function(changeEvent) {
			var reader = new FileReader();
			reader.onload = function(LoadEvent) {
				scope.$apply(function() {
					scope.fileUpload = LoadEvent.target.result;
				});
			};
			reader.readAsDataURL(changeEvent.target.files[0]);
		});
	};

	return directiveObj;
}

angular.module("app").directive("fileUpload", fileUpload);