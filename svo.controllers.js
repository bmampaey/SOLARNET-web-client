angular.module('SVOApp')
.controller('SVOController', function ($location, authenticationService) {
	var vm = this;
	vm.authentication = authenticationService;
	vm.is_active = is_active;
	
	function is_active(view_location) {
		return view_location === $location.path();
	};
});
