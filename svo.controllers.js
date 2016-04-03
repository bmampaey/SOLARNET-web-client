angular.module('SVOApp')
.controller('SVOController', function ($location, authenticationService) {
	var vm = this;
	vm.authentication = authenticationService;
});
