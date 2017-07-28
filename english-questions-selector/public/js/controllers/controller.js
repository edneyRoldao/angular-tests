angular.module('app').controller('Controller', function($scope, QuestionsSelectorService) {
	$scope.welcome = "English Questions Selector";
	$scope.question = "";

	var numQuestions = QuestionsSelectorService.getSize();

	$scope.selectQuestion = function() {
		var index = Math.floor(Math.random() * numQuestions);
		$scope.question = QuestionsSelectorService.getQuestion(index).value;
	};

});