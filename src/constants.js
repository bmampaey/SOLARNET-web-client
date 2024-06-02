/* Define constants global to the whole App */

const DEBUG = false;

/* The URL of the SVO API
All resources URI in the SVO API will be relative to that */
export const SVO_API_URL = DEBUG ? 'http://localhost:8800/' : 'https://solarnet.oma.be/';

/* The URL of the SVO API schema */
export const SVO_API_SCHEMA_URL = DEBUG ? '/api/svo' : '/service/api/svo';

/* The default timeout for SVO API requests */
export const SVO_API_TIMEOUT = 60000;

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

/* Options for the for paginated event tables */
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

/* Type of detection */
export const HEK_DETECTION_METHODS = Object.freeze(['', 'LMSAL SSW PFSS forecast', 'EGSO_SFC', 'HMI SHARP', 'Flare Detective - Trigger Module', 'SPoCA', 'SWPC', 'Sigmoid Sniffer', 'SMART', 'SWAMIS-EF', 'AAFDCC', 'CACTus', 'SSW Latest Events', 'CDAW_GopalswamyYashiroFreeland', 'EruptionPatrol', 'EruptionCharacterize', 'RHESSI Flare Catalog', 'Yohkoh Flare Catalogue', 'AI_Sunspot_Finder', 'Solar Jet Hunter', 'TRACE observer', 'Coronal Dimming Module', 'FILEAS', 'Human Annotation', 'AFINO', 'WHPI', 'PSP', 'nil'])

export const HEK_EVENT_ATTRIBUTES = Object.freeze([
	{
		"name": "Event_Probability",
		"type": "real",
		"searchable": true,
		"description": "Probability or Confidence Level that event occured (bet. 0 and 1) "
	},
	{
		"name": "Event_Importance",
		"type": "real",
		"searchable": true,
		"description": "Rating or importance of the event (between 0 and 1). Can be used by automated methods to denote a metric. "
	},
	{
		"name": "Event_Type",
		"type": "text",
		"searchable": false,
		"description": "Event Type (e.g. 'FL: Flare' or 'AR: ActiveRegion') "
	},
	{
		"name": "KB_ArchivDate",
		"type": "text",
		"searchable": false,
		"description": "Date when VOEvent entry was imported into Knowledge Base "
	},
	{
		"name": "KB_ArchivID",
		"type": "text",
		"searchable": false,
		"description": "Unique internal ID of VOEvent entry "
	},
	{
		"name": "KB_Archivist",
		"type": "text",
		"searchable": false,
		"description": "Name of Archivist (internal. user should leave blank) "
	},
	{
		"name": "KB_ArchivURL",
		"type": "text",
		"searchable": false,
		"description": "URL of VOEvent entry (internal. user should leave blank) "
	},
	{
		"name": "Event_CoordSys",
		"type": "text",
		"searchable": false,
		"description": "Coordinate system type (Choose between UTC-HGS-TOPO [Heliographics Stonyhurst]"
	},
	{
		"name": "Event_CoordUnit",
		"type": "text",
		"searchable": false,
		"description": "Units of coordinates (e.g. \"deg, deg\" for UTC-HGS-TOP0) "
	},
	{
		"name": "Event_EndTime",
		"type": "time (ISO 8601)",
		"searchable": false,
		"description": "Time when event ends (e.g. 2004-02-14T02:00:01) "
	},
	{
		"name": "Event_StartTime",
		"type": "time (ISO 8601)",
		"searchable": false,
		"description": "Time when event starts (e.g. 2004-02-14T02:00:01) "
	},
	{
		"name": "Event_Expires",
		"type": "time (ISO 8601)",
		"searchable": false,
		"description": "Useful for reporting events before they are complete (e.g. 2004-02-14T02:00:01) "
	},
	{
		"name": "Event_Coord1",
		"type": "real",
		"searchable": true,
		"description": "Coordinate 1 of mean location of event "
	},
	{
		"name": "Event_Coord2",
		"type": "real",
		"searchable": true,
		"description": "Coordinate 2 of mean location of event "
	},
	{
		"name": "Event_Coord3",
		"type": "real",
		"searchable": true,
		"description": "Coordinate 3 of mean location of event (optional. Suitable for use with STEREO SECCHI events) "
	},
	{
		"name": "Event_MapURL",
		"type": "text",
		"searchable": false,
		"description": "URL to an image/intensity map "
	},
	{
		"name": "Event_MaskURL",
		"type": "text",
		"searchable": false,
		"description": "URL to files which contain masks (e.g. binary masks) of region of interest. "
	},
	{
		"name": "Event_PeakTime",
		"type": "time (ISO 8601)",
		"searchable": false,
		"description": "Peak time of a flare (e.g. '2003-02-12T23:03:01') "
	},
	{
		"name": "Event_C1Error",
		"type": "real",
		"searchable": false,
		"description": "Uncertainty in Coord1 of the mean location of the event. "
	},
	{
		"name": "Event_C2Error",
		"type": "real",
		"searchable": false,
		"description": "Uncertainty in Coord2 of the mean location of the event. "
	},
	{
		"name": "Event_ClippedSpatial",
		"type": "text",
		"searchable": false,
		"description": "Whether the spatial extent of the event is wholly contained within the data set ('T' or 'F'). "
	},
	{
		"name": "Event_ClippedTemporal",
		"type": "text",
		"searchable": false,
		"description": "Whether the temporal duration of the event is wholly contained within the data set ('T' or 'F'). "
	},
	{
		"name": "Event_TestFlag",
		"type": "text",
		"searchable": false,
		"description": "A boolean flag to indicate that the event is for testing purposes ('T' or 'F') "
	},
	{
		"name": "Event_Description",
		"type": "text",
		"searchable": false,
		"description": "Description of the event "
	},
	{
		"name": "FRM_Contact",
		"type": "text",
		"searchable": false,
		"description": "Contact information of Feature Recognition Method (FRM) "
	},
	{
		"name": "FRM_DateRun",
		"type": "time (ISO 8601)",
		"searchable": false,
		"description": "Date when Feature Recognition Method (FRM) was run (e.g. 2004-02-15T02:00:01) "
	},
	{
		"name": "FRM_HumanFlag",
		"type": "text",
		"searchable": false,
		"description": "Whether a Human identified the event (\"T\" or \"F\") "
	},
	{
		"name": "FRM_Identifier",
		"type": "text",
		"searchable": true,
		"description": "Username for Knowledge Base "
	},
	{
		"name": "FRM_Institute",
		"type": "text",
		"searchable": false,
		"description": "Institute where the Feature Recognition Method (FRM) orginates "
	},
	{
		"name": "FRM_Name",
		"type": "text",
		"searchable": true,
		"description": "Name of Feature Recognition Method (e.g. \"Mark Cheung\" or CACTUS\") "
	},
	{
		"name": "FRM_ParamSet",
		"type": "text",
		"searchable": false,
		"description": "Values of parameters (e.g. \"threshold=0.1\") "
	},
	{
		"name": "FRM_VersionNumber",
		"type": "real",
		"searchable": true,
		"description": "Version number of automated Feature Recognition Method (Put age if Human. Just kidding. In this case put 1.0) "
	},
	{
		"name": "FRM_URL",
		"type": "text",
		"searchable": false,
		"description": "URL to webpage containing information about the Feature Recognition Method "
	},
	{
		"name": "FRM_SpecificID",
		"type": "text",
		"searchable": true,
		"description": "The specific ID of this event/feature assigned by the Feature Recognition Method "
	},
	{
		"name": "OBS_Observatory",
		"type": "text",
		"searchable": false,
		"description": "Name of Observatory (e.g. SOHO) "
	},
	{
		"name": "OBS_ChannelID",
		"type": "text",
		"searchable": false,
		"description": "Name of Channel of the instrument (e.g. \"G band\") "
	},
	{
		"name": "OBS_Instrument",
		"type": "text",
		"searchable": true,
		"description": "Name of Instrument (e.g. \"SOT\") "
	},
	{
		"name": "OBS_MeanWavel",
		"type": "real",
		"searchable": true,
		"description": "Mean wavelength (preferably in Angstroms) "
	},
	{
		"name": "OBS_WavelUnit",
		"type": "text",
		"searchable": false,
		"description": "Unit of OBS_MeanWavel (preferably \"Angstroms\") "
	},
	{
		"name": "OBS_Title",
		"type": "text",
		"searchable": true,
		"description": "Observational title "
	},
	{
		"name": "Bound_CCNsteps",
		"type": "integer",
		"searchable": false,
		"description": "Number of steps in bounding chain code (useful for coronal hole boundaries) "
	},
	{
		"name": "Bound_CCStartC1",
		"type": "real",
		"searchable": false,
		"description": "Beginning Coord1 of chain code "
	},
	{
		"name": "Bound_CCStartC2",
		"type": "real",
		"searchable": false,
		"description": "Beginning Coord2 of chain code "
	},
	{
		"name": "Bound_ChainCode",
		"type": "text",
		"searchable": false,
		"description": "List of vertices for polygon (ordered list delimited by commas. e.g. 'x1, y1, x2, y2, x3, y3, x1, y1') "
	},
	{
		"name": "BoundBox_C1LL",
		"type": "real",
		"searchable": true,
		"description": "Coord1 of lower-left corner of bounding box "
	},
	{
		"name": "BoundBox_C2LL",
		"type": "real",
		"searchable": true,
		"description": "Coord2 of lower-left corner of bounding box "
	},
	{
		"name": "BoundBox_C1UR",
		"type": "real",
		"searchable": true,
		"description": "Coord1 of upper-right corner of bounding box "
	},
	{
		"name": "BoundBox_C2UR",
		"type": "real",
		"searchable": true,
		"description": "Coord2 of upper-right corner of bounding box "
	},
	{
		"name": "ChainCodeType",
		"type": "text",
		"searchable": false,
		"description": "Type of chain code (Use \"ordered list\") "
	},
	{
		"name": "RasterScan",
		"type": "text",
		"searchable": true,
		"description": "Field for ascii string of raster scan "
	},
	{
		"name": "RasterScanType",
		"type": "text",
		"searchable": true,
		"description": "Type of raster scan (E.g. \"EGSO_SFC\" if you are using the EGSO Solar Feature Catalogue convection for the raster scan) "
	},
	{
		"name": "Skel_ChainCode",
		"type": "text",
		"searchable": false,
		"description": "Skeleton code. A skeleton code is like a chain code except it isn't closed. (ordered list delimited by commas. e.g. 'x1, y1, x2, y2, x3, y3') "
	},
	{
		"name": "Skel_Curvature",
		"type": "real",
		"searchable": false,
		"description": "Curvature of skeleton "
	},
	{
		"name": "Skel_Nsteps",
		"type": "integer",
		"searchable": false,
		"description": "Number of steps in skeleton "
	},
	{
		"name": "Skel_StartC1",
		"type": "real",
		"searchable": false,
		"description": "Beginning Coord 1 of skeleton "
	},
	{
		"name": "Skel_StartC2",
		"type": "real",
		"searchable": false,
		"description": "Beginning Coord 2 of skeleton "
	},
	{
		"name": "AR_McIntoshCls",
		"type": "text",
		"searchable": true,
		"description": "Active Region McIntosh class "
	},
	{
		"name": "AR_MtWilsonCls",
		"type": "text",
		"searchable": true,
		"description": "Active Region Mt Wilson class "
	},
	{
		"name": "AR_ZurichCls",
		"type": "text",
		"searchable": true,
		"description": "Active Region Zurich class "
	},
	{
		"name": "AR_PenumbraCls",
		"type": "text",
		"searchable": true,
		"description": "Active Region Penumbra class "
	},
	{
		"name": "AR_CompactnessCls",
		"type": "text",
		"searchable": true,
		"description": "Active Region Compactness class "
	},
	{
		"name": "AR_NOAAclass",
		"type": "text",
		"searchable": true,
		"description": "Active Regon NOAA class "
	},
	{
		"name": "AR_NOAANum",
		"type": "integer",
		"searchable": true,
		"description": "NOAA designated Active Region Number (e.g. 10930) "
	},
	{
		"name": "AR_NumSpots",
		"type": "integer",
		"searchable": true,
		"description": "Number of spots in Active region "
	},
	{
		"name": "AR_Polarity",
		"type": "integer",
		"searchable": true,
		"description": "Polarity of Active region ('1' or '-1' for positive and negative respectively) "
	},
	{
		"name": "AR_SpotAreaRaw",
		"type": "real",
		"searchable": true,
		"description": "Area of spots in active region in plane of sky "
	},
	{
		"name": "AR_SpotAreaRawUncert",
		"type": "real",
		"searchable": false,
		"description": "Uncertainty of AR_SpotAreaRaw "
	},
	{
		"name": "AR_SpotAreaRawUnit",
		"type": "text",
		"searchable": false,
		"description": "Units of AR_SpotAreaRaw "
	},
	{
		"name": "AR_SpotAreaRepr",
		"type": "real",
		"searchable": true,
		"description": "Reprojected area of spots in heliographic units "
	},
	{
		"name": "AR_SpotAreaReprUncert",
		"type": "real",
		"searchable": false,
		"description": "Uncertainty Reprojected area of spots in heliographic units "
	},
	{
		"name": "AR_SpotAreaReprUnit",
		"type": "text",
		"searchable": false,
		"description": "Units of AR_SpotAreaReprUnit (e.g. 'millihemispheres' or 'steradians') "
	},
	{
		"name": "SHARP_NOAA_ARS",
		"type": "text",
		"searchable": true,
		"description": "Comma separated list of NOAA_ARS within lat/lon bounding box. Can include ones without NOAA# at time of event. "
	},
	{
		"name": "IntensMin",
		"type": "real",
		"searchable": true,
		"description": "Minimum intensity of pixels "
	},
	{
		"name": "IntensMax",
		"type": "real",
		"searchable": true,
		"description": "Maximum intensity of pixels "
	},
	{
		"name": "IntensMean",
		"type": "real",
		"searchable": true,
		"description": "Mean intensity of pixels "
	},
	{
		"name": "IntensMedian",
		"type": "real",
		"searchable": true,
		"description": "Mdian intensity of pixels "
	},
	{
		"name": "IntensVar",
		"type": "real",
		"searchable": true,
		"description": "Variance of intensity of pixels "
	},
	{
		"name": "IntensSkew",
		"type": "real",
		"searchable": true,
		"description": "Skewness of intensity of pixels "
	},
	{
		"name": "IntensKurt",
		"type": "real",
		"searchable": true,
		"description": "Kurtosis of intensity of pixels "
	},
	{
		"name": "IntensTotal",
		"type": "real",
		"searchable": true,
		"description": "Sum of intensities of pixels "
	},
	{
		"name": "IntensUnit",
		"type": "text",
		"searchable": false,
		"description": "Units of intensity "
	},
	{
		"name": "FL_GOESCls",
		"type": "text",
		"searchable": true,
		"description": "GOES Flare class (e.g. 'X11') "
	},
	{
		"name": "CME_RadialLinVel",
		"type": "real",
		"searchable": true,
		"description": "Radial Linear fit radial velocity of CME "
	},
	{
		"name": "CME_RadialLinVelUncert",
		"type": "real",
		"searchable": false,
		"description": "Uncertainty in CME_RadialLinVel "
	},
	{
		"name": "CME_RadialLinVelMin",
		"type": "real",
		"searchable": true,
		"description": "Mininum linear radial velocity of CME "
	},
	{
		"name": "CME_RadialLinVelMax",
		"type": "real",
		"searchable": true,
		"description": "Maximum linear radial velocity of CME "
	},
	{
		"name": "CME_RadialLinVelStddev",
		"type": "real",
		"searchable": true,
		"description": "Standard Deviation of radial velocity of CME "
	},
	{
		"name": "CME_RadialLinVelUnit",
		"type": "text",
		"searchable": false,
		"description": "Units for Radial velocity of CME (e.g. 'km/s') "
	},
	{
		"name": "CME_AngularWidth",
		"type": "real",
		"searchable": true,
		"description": "Angular width of CME "
	},
	{
		"name": "CME_AngularWidthUnit",
		"type": "text",
		"searchable": false,
		"description": "Units for angular width of CME (e.g. 'deg') "
	},
	{
		"name": "CME_Accel",
		"type": "real",
		"searchable": true,
		"description": "Acceleration of CME "
	},
	{
		"name": "CME_AccelUncert",
		"type": "real",
		"searchable": false,
		"description": "Uncertainty of CME acceleration "
	},
	{
		"name": "CME_AccelUnit",
		"type": "text",
		"searchable": false,
		"description": "Units for CME acceleration (e.g. 'km/s/s') "
	},
	{
		"name": "CME_Mass",
		"type": "real",
		"searchable": true,
		"description": "Mass contained in CME (e.g. '1e17') "
	},
	{
		"name": "CME_MassUncert",
		"type": "real",
		"searchable": false,
		"description": "Uncertainty in mass contained in cme "
	},
	{
		"name": "CME_MassUnit",
		"type": "text",
		"searchable": false,
		"description": "Units for CME mass (e.g. 'g') "
	},
	{
		"name": "Area_AtDiskCenter",
		"type": "real",
		"searchable": true,
		"description": "Area of event at disk center "
	},
	{
		"name": "Area_AtDiskCenterUncert",
		"type": "real",
		"searchable": false,
		"description": "Uncertainty of area at disk center "
	},
	{
		"name": "Area_Raw",
		"type": "real",
		"searchable": true,
		"description": "Area of event in sky plane "
	},
	{
		"name": "Area_Uncert",
		"type": "real",
		"searchable": false,
		"description": "Uncertainty of area in sky plane "
	},
	{
		"name": "Area_Unit",
		"type": "text",
		"searchable": false,
		"description": "Units of area in sky plane (e.g. 'arcsec2') "
	},
	{
		"name": "Event_Npixels",
		"type": "integer",
		"searchable": true,
		"description": "Number of pixels pertaining to event "
	},
	{
		"name": "Event_PixelUnit",
		"type": "text",
		"searchable": false,
		"description": "Units of values given in pixels "
	},
	{
		"name": "FreqMaxRange",
		"type": "real",
		"searchable": true,
		"description": "Maximum of the frequency range of oscillation "
	},
	{
		"name": "FreqMinRange",
		"type": "real",
		"searchable": true,
		"description": "Minimum of the frequency range of oscillation "
	},
	{
		"name": "FreqPeakPower",
		"type": "real",
		"searchable": true,
		"description": "Frequency at which power spectrum peaks "
	},
	{
		"name": "FreqUnit",
		"type": "text",
		"searchable": false,
		"description": "Units of frequency (e.g. 'Hz') "
	},
	{
		"name": "IntensMaxAmpl",
		"type": "real",
		"searchable": true,
		"description": "Maximum amplitude of oscillation in intensity signal "
	},
	{
		"name": "IntensMinAmpl",
		"type": "real",
		"searchable": true,
		"description": "Minimum amplitude of oscillation in intensity signal "
	},
	{
		"name": "OscillNPeriods",
		"type": "real",
		"searchable": true,
		"description": "Number of periods detected in oscillation "
	},
	{
		"name": "OscillNPeriodsUncert",
		"type": "real",
		"searchable": false,
		"description": "Uncertainty of number of periods detected in oscillation "
	},
	{
		"name": "PeakPower",
		"type": "real",
		"searchable": true,
		"description": "Peak power of oscillation "
	},
	{
		"name": "PeakPowerUnit",
		"type": "text",
		"searchable": false,
		"description": "Units of peak power of oscillation "
	},
	{
		"name": "VelocMaxAmpl",
		"type": "real",
		"searchable": true,
		"description": "Maximum amplitude of oscillation in velocity signal (e.g. doppler signal) "
	},
	{
		"name": "VelocMaxPower",
		"type": "real",
		"searchable": true,
		"description": "Maximum power of oscillation in velocity signal "
	},
	{
		"name": "VelocMaxPowerUncert",
		"type": "real",
		"searchable": false,
		"description": "Uncertainty in max power in velocity signal "
	},
	{
		"name": "VelocMinAmpl",
		"type": "real",
		"searchable": true,
		"description": "Minimum amplitude in oscillating velocity signal "
	},
	{
		"name": "VelocUnit",
		"type": "text",
		"searchable": false,
		"description": "Units for velocity (e.g. 'km/s') "
	},
	{
		"name": "WaveDisplMaxAmpl",
		"type": "real",
		"searchable": true,
		"description": "Maximum amplitude of oscillation in displacement signal "
	},
	{
		"name": "WaveDisplMinAmpl",
		"type": "real",
		"searchable": true,
		"description": "Minimum amplitude of oscillatoin in displacement signal "
	},
	{
		"name": "WaveDisplUnit",
		"type": "text",
		"searchable": false,
		"description": "Units for displacement amplitude (e.g. 'arcsec') "
	},
	{
		"name": "WavelMaxPower",
		"type": "real",
		"searchable": true,
		"description": "Wavelength at which spatial power spectrum peaks "
	},
	{
		"name": "WavelMaxPowerUncert",
		"type": "real",
		"searchable": false,
		"description": "Uncertainty of WavelMaxPower "
	},
	{
		"name": "WavelMaxRange",
		"type": "real",
		"searchable": true,
		"description": "Maximum wavelength of wavelength range for spatial oscillation "
	},
	{
		"name": "WavelMinRange",
		"type": "real",
		"searchable": true,
		"description": "Minimum wavelength of wavelength range for spatial oscillation "
	},
	{
		"name": "WavelUnit",
		"type": "text",
		"searchable": false,
		"description": "Units for spatial oscillation wavelength (e.g. 'km') "
	},
	{
		"name": "EF_PosPeakFluxOnsetRate",
		"type": "real",
		"searchable": true,
		"description": "Emergence rate of positive polarity flux "
	},
	{
		"name": "EF_NegPeakFluxOnsetRate",
		"type": "real",
		"searchable": true,
		"description": "Emergence rate of negative polarity flux "
	},
	{
		"name": "EF_OnsetRateUnit",
		"type": "text",
		"searchable": false,
		"description": "Emergence rate unit (e.g. 'Mx/s') "
	},
	{
		"name": "EF_SumPosSignedFlux",
		"type": "real",
		"searchable": true,
		"description": "Total positive signed flux at completion "
	},
	{
		"name": "EF_SumNegSignedFlux",
		"type": "real",
		"searchable": true,
		"description": "Total negative signed flux at completion (negative number) "
	},
	{
		"name": "EF_FluxUnit",
		"type": "text",
		"searchable": false,
		"description": "Flux unit (e.g. 'Mx') "
	},
	{
		"name": "EF_AxisOrientation",
		"type": "real",
		"searchable": false,
		"description": "Axis orientation of emerging flux pair (CCW from parallels in Stonyhurst longitude "
	},
	{
		"name": "EF_AxisOrientationUnit",
		"type": "text",
		"searchable": false,
		"description": "Axis oriention unit (deg) "
	},
	{
		"name": "EF_AxisLength",
		"type": "real",
		"searchable": false,
		"description": "Axis length of emerging flux pair at completion "
	},
	{
		"name": "EF_PosEquivRadius",
		"type": "real",
		"searchable": false,
		"description": "Equivalent radius (i.e. sqrt(area/pi) of positive polarity at completion "
	},
	{
		"name": "EF_NegEquivRadius",
		"type": "real",
		"searchable": false,
		"description": "Equivalent radius (i.e. sqrt(area/pi) of negative polarity at completion "
	},
	{
		"name": "EF_LengthUnit",
		"type": "text",
		"searchable": false,
		"description": "Units for EF_AxisLength "
	},
	{
		"name": "EF_AspectRatio",
		"type": "real",
		"searchable": false,
		"description": "(EF_PosEquivRadius+EF_NegEquivRadius)/(2*EF_AxisLength) "
	},
	{
		"name": "EF_ProximityRatio",
		"type": "real",
		"searchable": false,
		"description": "(EF_PosEquivRadius-EF_NegEquivRadius)/(2*EF_AxisLength) "
	},
	{
		"name": "MaxMagFieldStrength",
		"type": "real",
		"searchable": true,
		"description": "Maximum magnetic field strength "
	},
	{
		"name": "MaxMagFieldStrengthUnit",
		"type": "text",
		"searchable": false,
		"description": "Units for maximum magnetic field strength (e.g. 'G' or 'Mx/cm2') "
	},
	{
		"name": "Outflow_Length",
		"type": "real",
		"searchable": true,
		"description": "Length of outflow (can be for CoronalJet or SpraySurge) "
	},
	{
		"name": "Outflow_LengthUnit",
		"type": "text",
		"searchable": false,
		"description": "Units for length of outflow (e.g. 'arcsec') "
	},
	{
		"name": "Outflow_Width",
		"type": "real",
		"searchable": true,
		"description": "Width of outflow "
	},
	{
		"name": "Outflow_WidthUnit",
		"type": "text",
		"searchable": false,
		"description": "Units for width of outflow (e.g. 'arcsec') "
	},
	{
		"name": "Outflow_Speed",
		"type": "real",
		"searchable": true,
		"description": "Outflow speed of outflow "
	},
	{
		"name": "Outflow_TransSpeed",
		"type": "real",
		"searchable": true,
		"description": "Transverse speed relative to outflow direction "
	},
	{
		"name": "Outflow_SpeedUnit",
		"type": "text",
		"searchable": false,
		"description": "Units for speed (e.g. 'km/s') "
	},
	{
		"name": "Outflow_OpeningAngle",
		"type": "real",
		"searchable": true,
		"description": "Opening angle of outflow (in degrees) "
	},
	{
		"name": "OBS_DataPrepURL",
		"type": "text",
		"searchable": false,
		"description": "URL pointing to information about how data was reduced "
	},
	{
		"name": "FL_PeakFlux",
		"type": "real",
		"searchable": true,
		"description": "Flux at peak time "
	},
	{
		"name": "FL_PeakFluxUnit",
		"type": "text",
		"searchable": false,
		"description": "Peak flux unit (e.g. erg/cm^2/s) "
	},
	{
		"name": "FL_PeakTemp",
		"type": "real",
		"searchable": true,
		"description": "Temperature at peak time "
	},
	{
		"name": "FL_PeakTempUnit",
		"type": "text",
		"searchable": false,
		"description": "Unit for FL_PeakTemp (K) "
	},
	{
		"name": "FL_PeakEM",
		"type": "real",
		"searchable": true,
		"description": "Emission measure at peak time "
	},
	{
		"name": "FL_PeakEMUnit",
		"type": "text",
		"searchable": false,
		"description": "Unit for FL_PeakEM "
	},
	{
		"name": "FL_EFoldTime",
		"type": "real",
		"searchable": false,
		"description": "Flare e-folding time "
	},
	{
		"name": "FL_EFoldTimeUnit",
		"type": "text",
		"searchable": false,
		"description": "Unit for FL_EFoldTime (s) "
	},
	{
		"name": "FL_Fluence",
		"type": "real",
		"searchable": true,
		"description": "Fluence of flare "
	},
	{
		"name": "FL_FluenceUnit",
		"type": "text",
		"searchable": false,
		"description": "Unit for FL_Fluence (e.g. erg/cm^2) "
	},
	{
		"name": "FL_HalphaClass",
		"type": "text",
		"searchable": true,
		"description": "H Alpha classification (used on some Yohkoh HXT) "
	},
	{
		"name": "CD_Area",
		"type": "real",
		"searchable": true,
		"description": "Maximum area of dimming "
	},
	{
		"name": "CD_AreaUncert",
		"type": "real",
		"searchable": false,
		"description": "Uncertainty of CD_Area "
	},
	{
		"name": "CD_AreaUnit",
		"type": "text",
		"searchable": false,
		"description": "Unit for CD_Area ('millihemisphere' or 'steradians')' "
	},
	{
		"name": "CD_Volume",
		"type": "real",
		"searchable": true,
		"description": "Volume of dimming region "
	},
	{
		"name": "CD_VolumeUncert",
		"type": "real",
		"searchable": false,
		"description": "Uncertainty of CD_Volume "
	},
	{
		"name": "CD_VolumeUnit",
		"type": "text",
		"searchable": false,
		"description": "Units for CD_Volume (e.g. 'cm^3') "
	},
	{
		"name": "CD_Mass",
		"type": "real",
		"searchable": true,
		"description": "Mass estimate calculated for dimming event "
	},
	{
		"name": "CD_MassUncert",
		"type": "real",
		"searchable": false,
		"description": "Uncertainty for CD_Mass "
	},
	{
		"name": "CD_MassUnit",
		"type": "text",
		"searchable": false,
		"description": "Unit for CD_Mass "
	},
	{
		"name": "FI_Length",
		"type": "real",
		"searchable": true,
		"description": "Length of Filament spine "
	},
	{
		"name": "FI_LengthUnit",
		"type": "text",
		"searchable": false,
		"description": "Unit for FI_Length "
	},
	{
		"name": "FI_Tilt",
		"type": "real",
		"searchable": true,
		"description": "Mean tilt angle (in degrees) of the Filament spine (given as Skel_ChainCode) w.r. to solar equator "
	},
	{
		"name": "FI_BarbsTot",
		"type": "integer",
		"searchable": true,
		"description": "Total number of filament barbs "
	},
	{
		"name": "FI_BarbsR",
		"type": "integer",
		"searchable": true,
		"description": "Total number of Right Bearing Barbs "
	},
	{
		"name": "FI_BarbsL",
		"type": "integer",
		"searchable": true,
		"description": "Total number of Left Bearing Barbs "
	},
	{
		"name": "FI_Chirality",
		"type": "integer",
		"searchable": true,
		"description": "Chirality for filament (-1 for sinistral"
	},
	{
		"name": "FI_BarbsStartC1",
		"type": "text",
		"searchable": false,
		"description": "List of Coord 1 of beginnings (closest to spine) of barbs (list delimited by commas for each numbered barb. e.g. 'x1, x2, x3') "
	},
	{
		"name": "FI_BarbsStartC2",
		"type": "text",
		"searchable": false,
		"description": "List of Coord 2 of beginnings (closest to spine) of barbs (list delimited by commas for each numbered barb. e.g. 'y1, y2, y3') "
	},
	{
		"name": "FI_BarbsEndC1",
		"type": "text",
		"searchable": false,
		"description": "List of Coord 1 of ends of barbs (list delimited by commas for each numbered barb. e.g. 'x1, x2, x3') "
	},
	{
		"name": "FI_BarbsEndC2",
		"type": "text",
		"searchable": false,
		"description": "List of Coord 2 of ends of barbs (list delimited by commas for each numbered barb. e.g. 'y1, y2, y3') "
	},
	{
		"name": "SG_Shape",
		"type": "text",
		"searchable": true,
		"description": "Shape of sigmoid "
	},
	{
		"name": "SG_Chirality",
		"type": "integer",
		"searchable": true,
		"description": "Chirality of sigmoid (-1 for sinistral"
	},
	{
		"name": "SG_Orientation",
		"type": "real",
		"searchable": true,
		"description": "Angular rotation (ccw in degrees) of the main axis of the sigmoid to the active region "
	},
	{
		"name": "SG_AspectRatio",
		"type": "real",
		"searchable": false,
		"description": "TBD "
	},
	{
		"name": "SG_PeakContrast",
		"type": "real",
		"searchable": false,
		"description": "TBD "
	},
	{
		"name": "SG_MeanContrast",
		"type": "real",
		"searchable": false,
		"description": "TBD "
	},
	{
		"name": "OBS_FirstProcessingDate",
		"type": "text",
		"searchable": false,
		"description": "Earliest date of all images considered part of the event "
	},
	{
		"name": "OBS_LastProcessingDate",
		"type": "text",
		"searchable": false,
		"description": "Latest date of all images considered part of the event "
	},
	{
		"name": "OBS_LevelNum",
		"type": "real",
		"searchable": false,
		"description": "Level of Data (e.g. 1.5) = LVL_NUM "
	},
	{
		"name": "OBS_IncludesNRT",
		"type": "text",
		"searchable": false,
		"description": "\"T\" if any image in the event has the NRT flag (bit 30 in QUALITY), \"F\" otherwise "
	},
	{
		"name": "SS_SpinRate",
		"type": "real",
		"searchable": true,
		"description": "Spin/Rotation rate of sunspots "
	},
	{
		"name": "SS_SpinRateUnit",
		"type": "text",
		"searchable": false,
		"description": "Unit Spin/Rotation rate of sunspots (e.g. Deg/day) "
	},
	{
		"name": "CC_MajorAxis",
		"type": "real",
		"searchable": false,
		"description": "Length of major axis of elliptical fit to cavity "
	},
	{
		"name": "CC_MinorAxis",
		"type": "real",
		"searchable": false,
		"description": "Length of minor axis of elliptical fit to cavity "
	},
	{
		"name": "CC_AxisUnit",
		"type": "text",
		"searchable": false,
		"description": "Unit of measure for major and minor axes. Typically Rsun "
	},
	{
		"name": "CC_TiltAngleMajorFromRadial",
		"type": "real",
		"searchable": false,
		"description": "Angle between major axis and local disk-projected radial vector, measured clockwise from radial vector. "
	},
	{
		"name": "CC_TiltAngleUnit",
		"type": "text",
		"searchable": false,
		"description": "Unit of measure for CC_TiltAngleMaorFromRadial. Typicall deg. "
	},
	{
		"name": "TO_Shape",
		"type": "text",
		"searchable": true,
		"description": "Apparent shape of topoogical object. Example values can be X-point, cusp, dome, line. "
	},
	{
		"name": "UnsignedFlux",
		"type": "real",
		"searchable": true,
		"description": "Total unsigned flux in region "
	},
	{
		"name": "MagFluxUnit",
		"type": "text",
		"searchable": false,
		"description": "Magnetic Flux unit (e.g. 'Mx') "
	},
	{
		"name": "MeanInclinationGamma",
		"type": "real",
		"searchable": true,
		"description": "Mean inclination angle (gamma) (degrees) "
	},
	{
		"name": "MeanGradientTotal",
		"type": "real",
		"searchable": true,
		"description": "Mean value of the total field gradient "
	},
	{
		"name": "MeanGradientVert",
		"type": "real",
		"searchable": true,
		"description": "Mean value of the vertical field gradient "
	},
	{
		"name": "MeanGradientHorz",
		"type": "real",
		"searchable": true,
		"description": "Mean value of the horizontal field gradient "
	},
	{
		"name": "GradientUnit",
		"type": "text",
		"searchable": false,
		"description": "Gradient unit (e.g. 'G/m') "
	},
	{
		"name": "MeanVertCurrentDensity",
		"type": "real",
		"searchable": true,
		"description": "Mean vertical current density "
	},
	{
		"name": "CurrentDensityUnit",
		"type": "text",
		"searchable": false,
		"description": "Current density unit (e.g. 'mA/m^2') "
	},
	{
		"name": "UnsignedVertCurrent",
		"type": "real",
		"searchable": false,
		"description": "Total unsigned vertical current "
	},
	{
		"name": "CurrentUnit",
		"type": "text",
		"searchable": false,
		"description": "Current unit (e.g. 'A') "
	},
	{
		"name": "MeanTwistAlpha",
		"type": "real",
		"searchable": true,
		"description": "Mean twist parameter (alpha) "
	},
	{
		"name": "TwistUnit",
		"type": "text",
		"searchable": false,
		"description": "Twist unit (e.g. '1/Mm') "
	},
	{
		"name": "MeanCurrentHelicity",
		"type": "real",
		"searchable": true,
		"description": "Mean current helicity "
	},
	{
		"name": "UnsignedCurrentHelicity",
		"type": "real",
		"searchable": true,
		"description": "Total unsigned current helicity "
	},
	{
		"name": "AbsNetCurrentHelicity",
		"type": "real",
		"searchable": true,
		"description": "Absolute value of the net current helicity "
	},
	{
		"name": "CurrentHelicityUnit",
		"type": "text",
		"searchable": false,
		"description": "Current helicity unit (e.g. '(G^2)/m') "
	},
	{
		"name": "SAVNCPP",
		"type": "real",
		"searchable": true,
		"description": "Sum of the Absolute Value of the Net Currents Per Polarity (SAVNCPP) "
	},
	{
		"name": "MeanPhotoEnergyDensity",
		"type": "real",
		"searchable": true,
		"description": "Mean photospheric excess magnetic energy density "
	},
	{
		"name": "MeanEnergyDensityUnit",
		"type": "text",
		"searchable": false,
		"description": "Energy Density unit (e.g. 'erg/(cm^3)') "
	},
	{
		"name": "TotalPhotoEnergyDensity",
		"type": "real",
		"searchable": true,
		"description": "Total photospheric magnetic energy density (TOTPOT in SHARP) "
	},
	{
		"name": "TotalEnergyDensityUnit",
		"type": "text",
		"searchable": false,
		"description": "Energy/length unit (e.g. 'erg/cm') "
	},
	{
		"name": "TotalPhotoEnergy",
		"type": "real",
		"searchable": true,
		"description": "Total photospheric magnetic energy (TOTPOT in SHARP times pixel width) "
	},
	{
		"name": "TotalPhotoEnergyUnit",
		"type": "text",
		"searchable": false,
		"description": "Energy unit (e.g. 'erg') "
	},
	{
		"name": "MeanShearAngle",
		"type": "real",
		"searchable": true,
		"description": "Mean shear angle for B_total (degrees) "
	},
	{
		"name": "HighShearAreaPercent",
		"type": "real",
		"searchable": true,
		"description": "Area with shear angle greater than 45 as a percent of total area "
	},
	{
		"name": "HighShearArea",
		"type": "real",
		"searchable": true,
		"description": "Area with shear angle greater than 45 as a percent of total area "
	},
	{
		"name": "HighShearAreaUnit",
		"type": "text",
		"searchable": false,
		"description": "Area unit (e.g. 'm^2') "
	},
	{
		"name": "Log_R_Value",
		"type": "real",
		"searchable": false,
		"description": "Log (Unsigned Flux R) (prelog value in Gauss*MDI-pixels - Schrijver 2007) "
	},
	{
		"name": "GWILL",
		"type": "real",
		"searchable": true,
		"description": "Gradient-weighted inversion-line length (Mason & Hoeksema 2010) "
	},
	{
		"name": "GWILLUnit",
		"type": "text",
		"searchable": false,
		"description": "GWILL (length) unit (e.g. 'Mm') "
	},
	{
		"name": "AR_AxisLength",
		"type": "real",
		"searchable": true,
		"description": "Axis length (bipole separation distance) "
	},
	{
		"name": "AR_LengthUnit",
		"type": "text",
		"searchable": false,
		"description": "Units for AR_AxisLength and AR_NeutralLength "
	},
	{
		"name": "AR_SumPosSignedFlux",
		"type": "real",
		"searchable": true,
		"description": "Total positive signed flux "
	},
	{
		"name": "AR_SumNegSignedFlux",
		"type": "real",
		"searchable": true,
		"description": "Total negative signed flux (negative number) "
	},
	{
		"name": "AR_NeutralLength",
		"type": "real",
		"searchable": true,
		"description": "The total length of polarity separation line segments within the AR "
	},
	{
		"name": "AR_PILCurvature",
		"type": "real",
		"searchable": true,
		"description": "Dimensionless curvature of main PIL (PIL length / direct distance between endpoints) "
	}
])
