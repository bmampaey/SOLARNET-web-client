/* Define constants global to the whole App */

const DEBUG = false;

/* The URL of the SVO API
All resources URI in the SVO API will be relative to that */
export const SVO_API_URL = DEBUG ? 'http://localhost:8800/' : 'https://solarnet2.oma.be/';

/* The URL of the SVO API schema */
export const SVO_API_SCHEMA_URL = DEBUG ? '/api/svo' : '/service/api/svo';

/* The default timeout for SVO API requests */
export const SVO_API_TIMEOUT = 15000;

/* Options for the paginated metadata tables */
export const SVO_PAGINATION_OPTIONS = Object.freeze({
	DEFAULT_PAGESIZE: 10,
	MINIMUM_PAGESIZE: 10,
	MAXIMUM_PAGESIZE: 100
});

/* The URL of the HEK API */
export const HEK_API_URL = 'https://www.lmsal.com/hek/her/';

/* The default timeout for HEK API requests */
export const HEK_API_TIMEOUT = 15000;

/* Options for the paginated event tables */
export const HEK_PAGINATION_OPTIONS = Object.freeze({
	DEFAULT_PAGESIZE: 10,
	MINIMUM_PAGESIZE: 10,
	MAXIMUM_PAGESIZE: 100
});

/* The minimum required search params for a search request to the HEK API to be successful */
export const HEK_EVENT_LIST_SEARCH_PARAMS = Object.freeze({
	cosec: 2, // ask for json
	cmd: 'search', // search command
	type: 'column',
	event_coordsys: 'helioprojective', //always specify wide coordinates, otherwise does not work
	x1: '-5000',
	x2: '5000',
	y1: '-5000',
	y2: '5000',
	return: 'event_type,event_starttime,event_endtime,kb_archivid,gs_thumburl,frm_name,frm_identifier', // limit the returned fields
	event_type: '**', // override to only select some event types
	event_starttime: new Date(Date.UTC(1975, 9, 1)).toISOString(), // The first HEK event is in september 1975
	event_endtime: new Date().toISOString()
});

/* The required search params for converting an avent ivorn (kb_archivid) to a URL with the details of the event */
export const HEK_EVENT_DETAIL_SEARCH_PARAMS = Object.freeze({
	cmd: 'view-voevent',
	ivorn: ''
});

/* Type of events and their user friendly equivalent */
export const HEK_EVENT_TYPE_NAMES = Object.freeze({
	AR: 'Active Region',
	CE: 'CME',
	CD: 'Coronal Dimming',
	CH: 'Coronal Hole',
	CW: 'Coronal Wave',
	FI: 'Filament',
	FE: 'Filament Eruption',
	FA: 'Filament Activation',
	FL: 'Flare',
	LP: 'Loop',
	OS: 'Oscillation',
	SS: 'Sunspot',
	EF: 'Emerging Flux',
	CJ: 'Coronal Jet',
	PG: 'Plage',
	OT: 'Other',
	NR: 'Nothing Reported',
	SG: 'Sigmoid',
	SP: 'Spray Surge',
	CR: 'Coronal Rain',
	CC: 'Coronal Cavity',
	ER: 'Eruption',
	TO: 'Topological Object'
});
