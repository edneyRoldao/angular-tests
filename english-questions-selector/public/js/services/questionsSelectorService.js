var questions = [];

questions.push({value: "Where are you from ?"});
questions.push({value: "When your birthday is ?"});
questions.push({value: "How many kids do you have ?"});
questions.push({value: "Where do you work ?"});
questions.push({value: "How long have you been worked at this company ?"});
questions.push({value: "Talk about the last movie that you did see ?"});

angular.module("app").factory("QuestionsSelectorService", function() {
	var service = {};

	service.getQuestion = function(index) {
		return questions[index]
	};

	service.getSize = function() {
		return questions.length;
	};

	return service;
});