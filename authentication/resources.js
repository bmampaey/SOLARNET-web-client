angular.module('authenticationApp')
.factory('User', function($resource, SDA_URL){
	return $resource(
		SDA_URL + 'user/:action\\/',
		null,
		{
			login: {method: 'POST', params: {action: 'login'}},
			logout: {method: 'GET', params: {action: 'logout'}}
		}
	);
});