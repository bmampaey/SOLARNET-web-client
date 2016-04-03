angular
.module('messagingApp')
.factory('messagingService', function($uibModal){
	
	return {
		info: info,
		error: error,
	};
	
	function info(messages) {
		show_messages('info', messages);
	}
	
	function error(messages){
		show_messages('danger', messages);
	}
	
	function show_messages(type, messages){
		$uibModal.open({
			templateUrl: 'messaging/message.html',
			size: 'sm',
			controller: 'MessagingController',
			controllerAs: 'ctrl',
			backdrop: true,
			resolve : {info: function(){return {type: type, messages: messages}}},
		});
	}
});