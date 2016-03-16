var EventApp = angular.module('EventApp', ['ngResource', 'ngAnimate', 'ui.bootstrap', 'ui.bootstrap.datetimepicker', 'multi-select']);

EventApp.constant('HEK_URL', 'http://www.lmsal.com/hek/her');

EventApp.constant('HEK_SEARCH_PARAMS', {
	cosec: 2, // ask for json
	cmd: 'search', // search command
	type: 'column',
	event_coordsys: 'helioprojective', //always specify wide coordinates, otherwise does not work
	x1: '-5000',
	x2: '5000',
	y1: '-5000',
	y2: '5000',
	return: 'event_type,event_starttime,event_endtime,kb_archivid', // limit the returned fields
	result_limit: 20, // limit to 20 results
});

EventApp.constant('EVENT_TYPES', {
	AR : 'Active Region',
	CE : 'CME',
	CD : 'Coronal Dimming',
	CH : 'Coronal Hole',
	CW : 'Coronal Wave',
	FI : 'Filament',
	FE : 'Filament Eruption',
	FA : 'Filament Activation',
	FL : 'Flare',
	C_FL : 'Flare (C1+)',
	M_FL : 'Flare (M1+)',
	X_FL : 'Flare (X1+)',
	LP : 'Loop',
	OS : 'Oscillation',
	SS : 'Sunspot',
	EF : 'Emerging Flux',
	CJ : 'Coronal Jet',
	PG : 'Plage',
	OT : 'Other',
	NR : 'Nothing Reported',
	SG : 'Sigmoid',
	SP : 'Spray Surge',
	CR : 'Coronal Rain',
	CC : 'Coronal Cavity',
	ER : 'Eruption',
	TO : 'Topological Object'
});

EventApp.filter('full_type', function(EVENT_TYPES) {
	return function(input) {
		return input in EVENT_TYPES ? EVENT_TYPES[input] : input;
	};
});
