function fileUpload() {
	var directiveObj = {};

	directiveObj.scope = {
		fileUpload: "="
	};

	directiveObj.restrict = "A";

	directiveObj.link = function(scope, element) {
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
