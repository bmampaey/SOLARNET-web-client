angular
.module('eventApp')
.controller('EventController', 
	function($uibModal, bsLoadingOverlayService, eventService) {
		var vm = this;
		
		// event search criteria
		vm.search_criteria = {
			selected_event_types: [], // filled automatically  by the multi select
		}
		
		// events
		vm.events = eventService.events;
		
		// function to search/filter events
		vm.search_events = search_events;
		
		// function to open event detail in modal
		vm.open_event_detail = open_event_detail;
		
		// populate events
		vm.search_events_promise = search_events();
		
		// display an overlay when searching
		function search_events(){
			bsLoadingOverlayService.start({referenceId: 'event_overlay'});
			return eventService.search_events(vm.search_criteria).finally(search_events_finally);
		}
		
		function search_events_finally(){
			bsLoadingOverlayService.stop({referenceId: 'event_overlay'});
		}
	
		// display an overlay when loading
		function load_events(page_number){
			bsLoadingOverlayService.start({referenceId: 'event_overlay'});
			return eventService.load_events(page_number).finally(load_events_finally);
		}
		
		function load_events_finally(){
			bsLoadingOverlayService.stop({referenceId: 'event_overlay'});
		}
		
		// function to open event detail in modal
		function open_event_detail(event) {
			$uibModal.open({
				templateUrl: 'event/event_detail.html',
				size: 'md',
				controller: 'EventDetailController',
				resolve: {
					event: function () { return event }
				},
			});
		}
})
.controller('EventDetailController', function($scope, $uibModalInstance, event) {
	$scope.event = event;
});