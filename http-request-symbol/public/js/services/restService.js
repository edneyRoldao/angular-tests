function RestService($http) {
	var service = {};

	service.callService = function(param) {
		return $http.post("http://localhost:9090/test" + param);
	};

	return service;
}

angular.module("app").factory("RestService", RestService);