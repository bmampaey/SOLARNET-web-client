angular
.module('global', [
	'ngResourceTastypie',
	'bsLoadingOverlay',
])
.constant('SDA_URL', 'http://solarnet.oma.be:8080/api/v1/')
.config(function($httpProvider){
//	$httpProvider.defaults.withCredentials = true;
})
.config(function($tastypieProvider, SDA_URL){
	// See https://github.com/mw-ferretti/angular-resource-tastypie
	$tastypieProvider.setResourceUrl(SDA_URL);
})
.run(function (bsLoadingOverlayService) {
	bsLoadingOverlayService.setGlobalConfig({
		delay: 100, // Minimal delay to hide loading overlay in ms.
		activeClass: null, // Class that is added to the element where bs-loading-overlay is applied when the overlay is active.
		templateUrl: "libs/angular-loading-overlay/angular-loading-overlay.html" // Template url for overlay element. If not specified - no overlay element is created.
	});
});

