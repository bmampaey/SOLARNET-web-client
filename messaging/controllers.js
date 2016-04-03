angular
.module('messagingApp')
.controller('MessagingController', function(info) {
	
	var vm = this;
	vm.messages = info.messages;
	vm.type = info.type;

});

