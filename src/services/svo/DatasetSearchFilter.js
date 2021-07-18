/* The DatasetSearchFilter holds the data for the DatasetForm and generate corresponding URLSerachParams for the SVO API */

export default class DatasetSearchFilter {
	telescopes = [];
	characteristics = [];
	tags = [];
	dateRange = { min: null, max: null };
	wavelengthRange = { min: null, max: null };

	constructor(searchFilter) {
		if (searchFilter) {
			if (Array.isArray(searchFilter.telescopes)) {
				this.telescopes = [...searchFilter.telescopes];
			}
			if (Array.isArray(searchFilter.characteristics)) {
				this.characteristics = [...searchFilter.characteristics];
			}
			if (Array.isArray(searchFilter.tags)) {
				this.tags = [...searchFilter.tags];
			}
			if (searchFilter.dateRange) {
				this.dateRange = {
					min: searchFilter.dateRange.min,
					max: searchFilter.dateRange.max
				};
			}
			if (searchFilter.wavelengthRange) {
				this.wavelengthRange = {
					min: searchFilter.wavelengthRange.min,
					max: searchFilter.wavelengthRange.max
				};
			}
			this.search = searchFilter.search;
		}
	}

	getSearchParams() {
		let searchParams = new URLSearchParams();

		for (const telescope of this.telescopes) {
			searchParams.append('telescope__in', telescope);
		}

		for (const characteristic of this.characteristics) {
			searchParams.append('characteristics__in', characteristic);
		}

		for (const tag of this.tags) {
			searchParams.append('tags__in', tag);
		}

		if (this.dateRange.min) {
			searchParams.set('date_end__gte', this.dateRange.min.toISOString());
		}

		if (this.dateRange.max) {
			searchParams.set('date_beg__lte', this.dateRange.max.toISOString());
		}

		if (this.wavelengthRange.min) {
			searchParams.set('wavemax__gte', this.wavelengthRange.min);
		}

		if (this.wavelengthRange.max) {
			searchParams.set('wavemin__lte', this.wavelengthRange.max);
		}

		if (this.search) {
			searchParams.set('search', this.search);
		}

		return searchParams;
	}
}
