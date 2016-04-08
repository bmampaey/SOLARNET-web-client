angular
.module('authenticationApp')
.factory('authenticationService', function($location, $uibModal, User){
	
	var user = User.get_session_user();
	if(user.is_authenticated()){
		user.set_tastypie_authentication();
	}
	
	return {
		user: user,
		login: login,
		logout: logout,
		require_authentication: require_authentication,
	};
	
	
	function logout(){
		return user.logout().finally(function(){
			$location.url('/');
		});
	}
	
	function login(){
		return $uibModal.open({
			templateUrl: 'authentication/login.html',
			size: 'sm',
			controller: 'LoginController',
			controllerAs: 'ctrl',
			//bindToController: true, // necessary?
			backdrop: 'static',
			resolve: {
				user: function(){
					return user;
				}
			},
		});
	};
	
	function require_authentication() {
		// return true or a promise with true when authentication is ok
		// can be used for resolve
		if (user.is_authenticated()) {
			return true;
		} else {
			var login = login();
			return login.closed;
		}
	};
});