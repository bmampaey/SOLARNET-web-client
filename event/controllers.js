angular
.module('eventApp')
.controller('EventController', 
	function($location, $uibModal, bsLoadingOverlayService, eventService) {
		var vm = this;
		
		// set default search criteria
		vm.search_criteria = {
			selected_event_types: [], // filled automatically  by the multi select
		}
		
		// events
		vm.events = [];
		
		// event types
		vm.event_types = eventService.event_types;
		
		// function to search/filter events
		vm.search_events = search_events;
		
		// page number
		vm.page_number = 1, 
		
		// function to load events
		vm.load_events = load_events;
		
		// function to open event detail in modal
		vm.open_event_detail = open_event_detail;
		
		// load events with current search criteria
		search_events();
		
		/* DEFINITIONS */
		
		var search_params
		function search_events(){
			// upate the search params
			search_params = eventService.parse_search_criteria(vm.search_criteria);
			// set the search criteria into the url
			$location.search(vm.search_criteria);
			// load the events
			load_events(1);
		}
		
		function load_events(page_number){
			// set the page number into the url
			$location.search('page', page_number);
			// update the controller page number
			vm.page_number = page_number;
			// start the overlay
			bsLoadingOverlayService.start({referenceId: 'event_overlay'});
			// get the events
			eventService.get_events(search_params, page_number).then(load_events_success, load_events_error);
		}
		
		function load_events_success(events){
			vm.events = events;
			// stop the overlay
			bsLoadingOverlayService.stop({referenceId: 'event_overlay'});
		}
		
		function load_events_error(reason){
			if (reason != 'cancelled') {
				// stop the overlay
				bsLoadingOverlayService.stop({referenceId: 'event_overlay'});
			}
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