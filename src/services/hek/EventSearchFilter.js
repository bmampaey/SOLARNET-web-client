/* The EventSearchFilter holds the data for the HEKEventForm and generate corresponding URLSerachParams for the HEK API */

import { HEK_EVENT_TYPE_NAMES, HEK_DETECTION_METHODS, HEK_EVENT_ATTRIBUTES, HEK_EVENT_LIST_SEARCH_PARAMS } from '@/constants';

export default class EventSearchFilter {
	eventTypes = [];
	dateRange = { min: null, max: null };
	detectionMethod = null;
	attributeFilters = [];
	eventTypeOptions = Object.entries(HEK_EVENT_TYPE_NAMES).map(([key, value]) => ({ value: key, text: value }));
	detectionMethodOptions = HEK_DETECTION_METHODS;
	eventAttributeOptions = HEK_EVENT_ATTRIBUTES.filter((attribute) => attribute.searchable);
	
	constructor(searchFilter) {
		if (searchFilter) {
			if (Array.isArray(searchFilter.eventTypes)) {
				this.eventTypes = [...searchFilter.eventTypes];
			}
			if (searchFilter.dateRange) {
				this.dateRange = {
					min: searchFilter.dateRange.min,
					max: searchFilter.dateRange.max
				};
			}
			if (searchFilter.detectionMethod) {
				this.detectionMethod = searchFilter.detectionMethod;
			}
			if (searchFilter.attributeFilters) {
				this.attributeFilters = [...searchFilter.attributeFilters];
			}
		}
	}

	getSearchParams() {
		let searchParams = new URLSearchParams(HEK_EVENT_LIST_SEARCH_PARAMS);

		if (this.eventTypes && this.eventTypes.length > 0) {
			searchParams.set('event_type', this.eventTypes.join(','));
		}

		if (this.dateRange.min) {
			searchParams.set('event_starttime', this.dateRange.min.toISOString());
		}

		if (this.dateRange.max) {
			searchParams.set('event_endtime', this.dateRange.max.toISOString());
		}
		
		let attributeFilters = [...this.attributeFilters];

		if (this.detectionMethod) {
			attributeFilters.push({'param' : 'Search_FRM_Name', 'op' : '=', 'value' : this.detectionMethod});
		}

		for (const [index, attributeFilter] of attributeFilters.entries()) {
			searchParams.set(`param${index}`, attributeFilter['param']);
			searchParams.set(`op${index}`, attributeFilter['op']);
			searchParams.set(`value${index}`, attributeFilter['value']);
		}

		return searchParams;
	}
}
