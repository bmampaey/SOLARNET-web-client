angular
.module('eventApp', ['ngResource', 'ngAnimate', 'ui.bootstrap', 'ui.select', 'ui.bootstrap.datetimepicker'])
.constant('HEK_URL', 'http://www.lmsal.com/hek/her')
.constant('HEK_SEARCH_PARAMS', {
	cosec: 2, // ask for json
	cmd: 'search', // search command
	type: 'column',
	event_coordsys: 'helioprojective', //always specify wide coordinates, otherwise does not work
	x1: '-5000',
	x2: '5000',
	y1: '-5000',
	y2: '5000',
	return: 'event_type,event_starttime,event_endtime,kb_archivid,gs_thumburl,frm_name,frm_identifier', // limit the returned fields
	result_limit: 10, // limit the number of results
})
.constant('EVENT_TYPES', {
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
})
.filter('fullType', function(EVENT_TYPES) {
	return function(input) {
		return input in EVENT_TYPES ? EVENT_TYPES[input] : input;
	};
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