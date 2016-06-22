angular
.module('eventApp')
.controller('EventController', function($location, $state, $uibModal, bsLoadingOverlayService, getPropFilter, messagingService, Event, eventConfig, queryDict) {
	var vm = this;
	
	// set default search criteria
	vm.search_criteria = eventConfig.parse_query_dict(queryDict);
	
	// form config
	vm.form_config = eventConfig.form_config;
	
	// events
	vm.objects = [];
	
	// list of selected events
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
		vm.objects = Event.query(eventConfig.parse_search_criteria(search_criteria), load_objects_success, load_objects_error);
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
	function open_detail(event) {
		var current_view = angular.element(document.getElementById($state.current.name));
		console.log('Attaching event modal to', current_view);

		$uibModal.open({
			templateUrl: 'event/event_detail.html',
			size: 'md',
			controller: 'EventDetailController',
			controllerAs: 'ctrl',
			appendTo: current_view,
			resolve: {
				event: function () { return event }
			},
		});
	}
	
	// function to search for datasets
	function search_datasets(selected_events)
	{
		console.log('searching datasets for events', selected_events);
		var query_dict = {
			'search': selected_events.map(function(e){
				return '(date_beg__lt = ' + e.event_endtime + ' and date_end__gt = ' + e.event_starttime + ')';
			}).join(' or '),
			'date_end__gte': getPropFilter(selected_events, 'event_starttime').sort().shift(),
			'date_beg__lte': getPropFilter(selected_events, 'event_endtime').sort().pop(),
		};
		
		var current_view = angular.element(document.getElementById($state.current.name));
		console.log('Attaching dataset modal to', current_view);

		$uibModal.open({
			templateUrl: 'dataset/dataset_search.html',
			size: 'xl',
			controller: 'DatasetController',
			controllerAs: 'ctrl',
			appendTo: current_view,
			resolve: {
				queryDict: function () {
					return query_dict;
				}
			}
		});
	}
})
.controller('EventDetailController', function(event) {
	var vm = this;
	vm.object = event;
});