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
})
.factory('authenticationService', function($uibModal, $cookies, User){
	var user = get_session_user();
	return {
		user: user,
		is_authenticated: is_authenticated,
		login: login,
		logout: logout,
		request_login: request_login,
	};
	
	function is_authenticated() {
		return user !== undefined;
	}
	
	function login(credentials){
		return User.login(credentials).$promise.then(login_success, login_failed);
	}
	
	function login_success(data){
		user = data.username;
		$cookies.put('user', user);
	}
	
	function login_failed(data){
		
	}
	
	function logout(){
		return User.logout().$promise.finally(function(data){
			user = undefined;
			$cookies.remove('user');
		});
	}
	
	function request_login(){
		$uibModal.open({
			templateUrl: 'authentication/login.html',
			size: 'md',
			controller: 'LoginController',
			controllerAs: 'login',
			//bindToController: true, // necessary?
			backdrop: 'static',
		});
	};
	
	function get_session_user(){
		return $cookies.get('user');
	}
	
});