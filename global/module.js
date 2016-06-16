angular
.module('global', [
	'ngTastyResource',
	'bsLoadingOverlay',
	'ui.bootstrap',
	'ui.bootstrap.datetimepicker'
])
.constant('SDA_URL', 'http://solarnet.oma.be/SDA/api/v1/')
.constant('queryDict', {})
.config(function(tastyResourceProvider, SDA_URL){
	tastyResourceProvider.config.api_url = SDA_URL;
	tastyResourceProvider.config.cache = true;
})
.run(function (bsLoadingOverlayService) {
	bsLoadingOverlayService.setGlobalConfig({
		delay: 100, // Minimal delay to hide loading overlay in ms.
		activeClass: null, // Class that is added to the element where bs-loading-overlay is applied when the overlay is active.
		templateUrl: "libs/angular-loading-overlay/angular-loading-overlay.html" // Template url for overlay element. If not specified - no overlay element is created.
	});
});
