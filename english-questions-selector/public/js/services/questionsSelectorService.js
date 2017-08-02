var questions = [];

questions.push({value: "Where are you from ?"});
questions.push({value: "When your birthday is ?"});
questions.push({value: "How many kids do you have ?"});
questions.push({value: "Where do you work ?"});
questions.push({value: "How long have you been worked at this company ?"});
questions.push({value: "Talk about the last movie that you did see ?"});
questions.push({value: "WHAT DO YOU DO?"});
questions.push({value: "ARE YOU MARRIED?"});
questions.push({value: "WHY ARE YOU STUDYING ENGLISH?"});
questions.push({value: "WHERE/HOW DID YOU LEARN ENGLISH?"});
questions.push({value: "WHAT DO YOU DO IN YOUR FREE TIME?"});
questions.push({value: "WHAT’S THE WEATHER LIKE? / HOW’S THE WEATHER?"});
questions.push({value: "WHAT TIME IS IT? / DO YOU HAVE THE TIME?"});
questions.push({value: "CAN I HELP YOU? / DO YOU NEED ANY HELP?"});
questions.push({value: "HOW’S IT GOING?"});
questions.push({value: "HOW ARE YOU FEELING?"});
questions.push({value: "HOW WAS YOUR DAY?"});
questions.push({value: "DID YOU LIKE THE MOVIE?"});
questions.push({value: "HOW WAS THE PARTY?"});
questions.push({value: "CAN YOU GIVE ME A HAND?"});
questions.push({value: "WHAT HAVE YOU BEEN UP TO LATELY?"});
questions.push({value: "WHAT’S THE MATTER?"});
questions.push({value: "WHAT WOULD YOU LIKE TO DRINK?"});
questions.push({value: "ARE YOU READY TO ORDER?"});
questions.push({value: "IS EVERYTHING OK?"});
questions.push({value: "CAN I GET YOU ANYTHING ELSE?"});
questions.push({value: "WHAT DO YOU WORING ON THESE DAYS?"});
questions.push({value: "ARE YOU STILL WORING ON THAT, CAN I TAKE IT OUT OFF YOUR WAY?"});
questions.push({value: "DO YOU SET IT ASIDE AT THE BEGINING?"});
questions.push({value: "HOW IS YOUR SALAD?"});
questions.push({value: "HOW IS YOUR BUSINESS GOING, WHAT DO YOU GUYS WORING ON?"});
questions.push({value: "HEY, WHAT WILL YOU DO ON SATURDAY?"});
questions.push({value: "DO YOU HAVE ANY PERDONAL PROJECTS?"});
questions.push({value: "DO YOU HAVE ANY HOME IMPROMENT STUFF?"});
questions.push({value: "WHAT'S THE TAKEAWAY TODAY?"});

angular.module("app").factory("QuestionsSelectorService", function() {
	var service = {};

	service.getQuestion = function(index) {
		return questions[index];
	};

	service.getSize = function() {
		return questions.length;
	};

	return service;
});