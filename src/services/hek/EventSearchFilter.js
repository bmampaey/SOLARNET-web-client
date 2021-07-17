/* The EventSearchFilter holds the data for the HEKEventForm and generate corresponding URLSerachParams for the HEK API */

import { HEK_EVENT_TYPE_NAMES, HEK_EVENT_LIST_SEARCH_PARAMS } from '@/constants';

export default class EventSearchFilter {
	eventType = [];
	dateRange = { min: null, max: null };
	eventTypeOptions = Object.entries(HEK_EVENT_TYPE_NAMES).map(([key, value]) => ({ value: key, text: value }));

	constructor(searchFilter) {
		if (searchFilter) {
			if (Array.isArray(searchFilter.eventType)) {
				this.eventType = [...searchFilter.eventType];
			}
			if (searchFilter.dateRange) {
				this.dateRange = {
					min: searchFilter.dateRange.min,
					max: searchFilter.dateRange.max
				};
			}
		}
	}

	getSearchParams() {
		let searchParams = new URLSearchParams(HEK_EVENT_LIST_SEARCH_PARAMS);

		if (this.eventType && this.eventType.length > 0) {
			searchParams.set('event_type', this.eventType.join(','));
		}

		if (this.dateRange.min) {
			searchParams.set('event_starttime', this.dateRange.min.toISOString());
		}

		if (this.dateRange.max) {
			searchParams.set('event_endtime', this.dateRange.max.toISOString());
		}

		return searchParams;
	}
}
