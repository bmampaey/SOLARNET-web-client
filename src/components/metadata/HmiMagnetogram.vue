<template>
	<b-row>
		<b-col cols="4">
			<b-form @submit.prevent="updateSearchParams">
				<base-datetime-range v-model="searchFilter.dateRange" label="Observation date" min-label="Start" max-label="End"></base-datetime-range>
				<b-form-group description="Only display data with a quality of 0">
					<b-form-checkbox v-model="searchFilter.bestQuality">Best quality only</b-form-checkbox>
				</b-form-group>
				<tag-selector v-if="tags.length" v-model="searchFilter.tags" :tags="tags"></tag-selector>
				<b-button type="submit" variant="primary">Search</b-button>
			</b-form>
		</b-col>
		<b-col cols="8">
			<metadata-list :dataset="dataset" :search-params="searchParams" :tags="tags" :keywords="keywords" :default-columns="defaultColumns"></metadata-list>
		</b-col>
	</b-row>
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
	data: function() {
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
