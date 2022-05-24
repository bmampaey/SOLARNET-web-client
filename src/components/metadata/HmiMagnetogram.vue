<template>
	<metadata :dataset="dataset" :search-filter="searchFilter" :default-columns="defaultColumns">
		<datetime-range v-model="searchFilter.dateRange" label="Observation date" min-label="Start" max-label="End"></datetime-range>
		<b-form-group description="Only display data with a quality of 0">
			<b-form-checkbox v-model="searchFilter.bestQuality">Best quality only</b-form-checkbox>
		</b-form-group>
	</metadata>
</template>

<script>
import MetadataMixin from './MetadataMixin';
import MetadataSearchFilter from '@/services/svo/MetadataSearchFilter';

class HmiMagnetogramSearchFilter extends MetadataSearchFilter {
	bestQuality;

	constructor(searchFilter) {
		super(searchFilter);
		if (searchFilter) {
			this.bestQuality = searchFilter.bestQuality;
		}
	}

	getSearchParams() {
		let searchParams = super.getSearchParams();

		if (this.bestQuality) {
			searchParams.set('quality', 0);
		}

		return searchParams;
	}
}

export default {
	name: 'HmiMagnetogram',
	mixins: [MetadataMixin],
	data() {
		return {
			searchFilter: new HmiMagnetogramSearchFilter(this.initialSearchFilter),
			defaultColumns: [
				{ label: 'Observation date', key: 'date_obs', formatter: this.$utils.formatDate },
				{ label: 'Quality', key: 'quality' }
			]
		};
	}
};
</script>
