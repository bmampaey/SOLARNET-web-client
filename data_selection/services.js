angular
.module('dataSelectionApp')
.factory('data_selections', function(bsLoadingOverlayService, messagingService, UserDataSelection){
	
	var objects = [];
	
	// load the user data selections
	load_data_selections();
	
	return objects;
	
	/* DEFINITIONS */
	
	function load_data_selections(){
		
		// set the loading overlay
		bsLoadingOverlayService.start({referenceId: 'data_selections_overlay'});
		
		// get the user data selections
		UserDataSelection.get({limit: 0}, load_data_selections_success, load_data_selections_error);
	};
	
	function load_data_selections_success(data){
		// update the data selections list
		objects.length = 0;
		objects.meta = data.meta;
		for (var i = 0; i < data.objects.length; i++) {
			var user_data_selection = new UserDataSelection(data.objects[i]);
			user_data_selection.objects = objects;
			user_data_selection.delete = delete_data_selection;
			objects.push(user_data_selection);
		}
		
		// stop the loading overlay
		bsLoadingOverlayService.stop({referenceId: 'data_selections_overlay'});
	}
	
	function load_data_selections_error(response){
		// resource pass the full http response on failure
		var reason = response.status < 0 ? 'The server seems down' : response.statusText;
		// display some error message
		messagingService.error(['There was an error retrieving data selections', reason]);
	}
	
	// function to delete a specific data selection
	function delete_data_selection(){
		var self = this;
		
		console.log("Deleting data selection", self);
		
		self.$delete();
		
		if(self.objects)
		{
			var index = self.objects.indexOf(self);
			if (index > -1) {
				self.objects.splice(index, 1);
			}
		}
	}
});