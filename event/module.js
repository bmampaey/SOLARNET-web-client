angular
.module('eventApp', [
	'ngResource',
	'ui.bootstrap',
	'ui.select',
	'ui.bootstrap.datetimepicker',
	'global',
	'messagingApp'
])
.constant('HEK_URL', 'http://www.lmsal.com/hek/her')
.constant('HEK_QUERY_PARAMS', {
	'cosec': 2, // ask for json
	'cmd': 'search', // search command
	'type': 'column',
	'event_coordsys': 'helioprojective', //always specify wide coordinates, otherwise does not work
	'x1': '-5000',
	'x2': '5000',
	'y1': '-5000',
	'y2': '5000',
	'return': 'event_type,event_starttime,event_endtime,kb_archivid,gs_thumburl,frm_name,frm_identifier', // limit the returned fields
	'result_limit': 10, // limit the number of results
	'event_type': '**', // override to only select some event types
	'event_starttime': new Date(Date.UTC(1975, 9, 1)).toISOString(), // The first HEK event is in september 1975 
	'event_endtime': new Date().toISOString()
})
.constant('HEK_GET_PARAMS', {
	'cosec': 2, // ask for json
	'cmd': 'export-voevent' // search command
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
});