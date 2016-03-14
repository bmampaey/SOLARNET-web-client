var EventApp = angular.module('EventApp', ['ngResource', 'ngAnimate', 'ui.bootstrap', 'ui.bootstrap.datetimepicker', 'multi-select']);

EventApp.constant('HEK_URL', 'http://www.lmsal.com/hek/her?cosec=2&cmd=search&type=column&event_coordsys=helioprojective&x1=-5000&x2=5000&y1=-5000&y2=5000');

EventApp.constant('EVENT_TYPES', {
	AR : "Active Region",
	CE : "CME",
	CD : "Coronal Dimming",
	CH : "Coronal Hole",
	CW : "Coronal Wave",
	FI : "Filament",
	FE : "Filament Eruption",
	FA : "Filament Activation",
	FL : "Flare",
	C_FL : "Flare (C1+)",
	M_FL : "Flare (M1+)",
	X_FL : "Flare (X1+)",
	LP : "Loop",
	OS : "Oscillation",
	SS : "Sunspot",
	EF : "Emerging Flux",
	CJ : "Coronal Jet",
	PG : "Plage",
	OT : "Other",
	NR : "Nothing Reported",
	SG : "Sigmoid",
	SP : "Spray Surge",
	CR : "Coronal Rain",
	CC : "Coronal Cavity",
	ER : "Eruption",
	TO : "Topological Object"
});
