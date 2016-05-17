angular
.module('eventApp')
.controller('EventController', function($location, $uibModal, bsLoadingOverlayService, messagingService, EVENT_TYPES, Event, eventService, Dataset) {
	var vm = this;
	
	// set default search criteria
	vm.search_criteria = {
		selected_event_types: [], // filled automatically  by the multi select
	}
	
	// events
	vm.objects = [];
	
	// options for the multi selects
	vm.event_types = Object.keys(EVENT_TYPES).map(function(key, index) {
		return {name: EVENT_TYPES[key], value: key};
	});
	
	// list of selected datasets
	vm.selected_events = [];
	
	// methods
	vm.search = search;
	vm.change_page = change_page;
	vm.open_detail = open_detail;
	vm.search_datasets = search_datasets;
	
	// overlay id
	vm.overlay_id = 'event_overlay';
	
	// load events with current search criteria
	search(vm.search_criteria);
	
	/* DEFINITIONS */
	
	function search(search_criteria){
		// display loading overlay
		bsLoadingOverlayService.start({referenceId: vm.overlay_id});
		// get the page
		vm.objects = Event.query(eventService.parse_search_criteria(search_criteria), load_objects_success, load_objects_error);
	}
	
	function change_page(page_number) {
		// display loading overlay
		bsLoadingOverlayService.start({referenceId: vm.overlay_id});
		// get the page
		vm.objects.load_page(page_number, load_objects_success, load_objects_error);
	}
	
	function load_objects_success(result){
		console.log(result);
		// stop the overlay
		bsLoadingOverlayService.stop({referenceId: vm.overlay_id});
	}
	
	function load_objects_error(error){
		if (error != 'cancelled') {
			// stop the overlay
			bsLoadingOverlayService.stop({referenceId: vm.overlay_id});
		}
		// display some error message
		messagingService.error(['There was an error retrieving objects', error.statusText]);
	}
	
	// function to open event detail in modal
	function open_detail(dataset) {
		$uibModal.open({
			templateUrl: 'event/event_detail.html',
			size: 'md',
			controller: 'EventDetailController',
			controllerAs: 'ctrl',
			resolve: {
				dataset: function () { return dataset }
			},
		});
	}
	
	// function to search for datasets
	function search_datasets(selected_events)
	{
		console.log('searching datasets for events', selected_events);
		var search_filter = selected_events.map(function(e){
			return '(date_beg__lt = ' + e.event_endtime + ' and date_end__gt = ' + e.event_starttime + ')';
		})
		.join(' or ');
		console.log('search filter', search_filter);
		$uibModal.open({
			templateUrl: 'dataset/dataset_search.html',
			size: 'xl',
			controller: 'DatasetController',
			controllerAs: 'ctrl',
			resolve: {
				 // pass the dataset
				search_criteria: function () {
					return {'search': search_filter};
				}
			}
		});
	}
})
.controller('EventDetailController', function(dataset) {
	var vm = this;
	vm.object = dataset;
});