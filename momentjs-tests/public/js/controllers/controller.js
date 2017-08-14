angular.module('app').controller('Controller', function($scope) {
	$scope.test = [];
	$scope.welcome = "Hello Moment JS !";

	var maxYear = moment().year() - 90; 
	var minYear = moment().subtract(16, "years").year();


	for(var i = minYear; i > maxYear; i--) {
		$scope.test.push(i);
	}

	var data = moment([1982, 0, 25]);

	console.log( data.date() );
	console.log( data.month() );
	console.log( data.year() );

});