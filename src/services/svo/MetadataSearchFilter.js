/* The SearchFilter is the interface between the API and the search form data */

export default class MetadataSearchFilter {
	tags = [];
	keywordFilter = '';
	dateRange = { min: null, max: null };

	constructor(searchFilter) {
		if (searchFilter) {
			if (Array.isArray(searchFilter.tags)) {
				this.tags = [...searchFilter.tags];
			}
			if (searchFilter.dateRange) {
				this.dateRange = {
					min: searchFilter.dateRange.min,
					max: searchFilter.dateRange.max
				};
			}
			if (searchFilter.keywordFilter) {
				this.keywordFilter = searchFilter.keywordFilter;
			}
			this.search = searchFilter.search;
		}
	}

	getSearchParams() {
		let searchParams = new URLSearchParams();

		for (const tag of this.tags) {
			searchParams.append('tags__in', tag);
		}

		if (this.keywordFilter) {
			searchParams.set('search', this.keywordFilter);
		}

		if (this.dateRange.min) {
			searchParams.set('date_end__gte', this.dateRange.min.toISOString());
		}

		if (this.dateRange.max) {
			searchParams.set('date_beg__lte', this.dateRange.max.toISOString());
		}

		if (this.search) {
			searchParams.set('search', this.search);
		}

		return searchParams;
	}
}
