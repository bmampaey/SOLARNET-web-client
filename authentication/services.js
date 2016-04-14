angular
.module('authenticationApp')
.factory('authenticationService', function($location, $uibModal, User){
	
	var user = User.get_session_user();
	
	return {
		user: user,
		login: login,
		logout: logout,
		authenticatedUser: authenticatedUser,
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
	
	function authenticatedUser() {
		// return an authenticated user
		// can be used for resolve
		if (user.is_authenticated()) {
			return user;
		} else {
			return login().result;
		}
	};
});