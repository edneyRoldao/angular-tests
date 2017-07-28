angular.module("app").directive("firstDirective", function() {
	var directive = {};

	directive.templateUrl = "../../views/firstDirective.html";

	directive.restrict = "E";

	directive.transclude = true;

	directive.scope = {
		title: "@",
		text: "@",
		super: "="
	};

	return directive;
});