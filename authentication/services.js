angular.module('authenticationApp')
.factory('authenticationService', function($cookies, $location, $q, $uibModal, User){
	var user = get_session_user();
	return {
		user: user,
		is_authenticated: is_authenticated,
		login: login,
		logout: logout,
		request_login: request_login,
		require_authentication: require_authentication,
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
		return data;
	}
	
	function login_failed(data){
		// resource pass the full http response on failure
		return $q.reject(data.data);
	}
	
	function logout(){
		return User.logout().$promise.finally(function(data){
			user = undefined;
			$cookies.remove('user');
			$location.url('/');
		});
	}
	
	function request_login(){
		return $uibModal.open({
			templateUrl: 'authentication/login.html',
			size: 'sm',
			controller: 'LoginController',
			controllerAs: 'login',
			//bindToController: true, // necessary?
			backdrop: 'static',
		});
	};
	
	function get_session_user(){
		if ($cookies.get('user')) {
			return $cookies.get('user');
		}
		else {
			return undefined;
		}
		
	}
	
	function require_authentication() {
		// return true or a promise with true when authentication is ok
		// can be used for resolve
		if (is_authenticated()) {
			return true;
		} else {
			var login = request_login();
			return login.closed;
		}
	};
});