/* The Event parse the event data returned by the HEK API */

import { HEK_API_URL, HEK_EVENT_DETAIL_SEARCH_PARAMS, HEK_EVENT_TYPE_NAMES } from '@/constants.js';

export default class Event {
	constructor(data) {
		Object.assign(this, data);
	}

	get type() {
		return HEK_EVENT_TYPE_NAMES[this.event_type] || this.event_type;
	}

	get startTime() {
		return this.event_starttime && new Date(this.event_starttime + 'Z');
	}

	get endTime() {
		return this.event_endtime && new Date(this.event_endtime + 'Z');
	}

	get thumbnailUrl() {
		return this.gs_thumburl || require('@/assets/no_preview_available.jpg');
	}

	get id() {
		return this.kb_archivid && this.kb_archivid.split('/').pop();
	}

	get detailUrl() {
		if (this.kb_archivid) {
			let url = new URL(HEK_API_URL);
			url.search = new URLSearchParams({ ...HEK_EVENT_DETAIL_SEARCH_PARAMS, ivorn: this.kb_archivid });
			return url.href;
		} else {
			return null;
		}
	}
}
