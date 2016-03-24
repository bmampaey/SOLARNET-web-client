angular.module('authenticationApp')
.controller('LoginController', function($uibModalInstance, authenticationService) {
	// Angular does not detect auto-fill or auto-complete. If the browser
	// autofills "username", Angular will be unaware of this and think
	// the $scope.username is blank. To workaround this we use the 
	// autofill-event polyfill [4][5]
	//$('#id_auth_form input').checkAndTriggerAutoFillEvent();
	
	var vm = this;
	vm.authenticate = authenticate;
	
	function authenticate() {
		authenticationService.login(get_credentials()).then(login_success, login_failed);
	}
	
	function get_credentials(){
		return {
			email: vm.email,
		}
	}
	
	function login_success(data){
		$uibModalInstance.close(true);
	}
	
	function login_failed(data){
		vm.error_message = data.reason;
	}
});

