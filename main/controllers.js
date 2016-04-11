angular.module('SVOApp')
.controller('SVOController', function (authenticationService) {
	var vm = this;
	vm.authentication = authenticationService;
});
