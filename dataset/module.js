angular
.module('datasetApp', ['ngResource', 'ngAnimate', 'ngSanitize', 'ui.bootstrap', 'ui.select', 'ui.bootstrap.datetimepicker', 'checklist-model', 'messagingApp'])
.constant('SDA_URL', 'http://solarnet.oma.be:8080/api/v1')
.constant('DATASET_RESOURCE_LIMIT', 0)
.constant('TELESCOPE_RESOURCE_LIMIT', 0)
.constant('CHARACTERISTIC_RESOURCE_LIMIT', 0)
.constant('TAG_RESOURCE_LIMIT', 0)
.constant('METADATA_RESOURCE_LIMIT', 10)
.config(function($resourceProvider) {
	// make by default all resource requests cancellable
	$resourceProvider.defaults.cancellable = true;
	// don't strip trailing slashes from URLs
	$resourceProvider.defaults.stripTrailingSlashes = false;
})
.filter('getProp', function() {
	return function(input, prop, separator) {
		if (input instanceof Array){
			var list = input.map(function(val){return val[prop];});
			if (separator != undefined){
				return list.join(separator);
			}
			else {
				return list
			}
		}
		else {
			return input[prop];
		}
	};
});


