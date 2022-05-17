<template>
	<b-row>
		<b-col cols="4">
			<b-form @submit.prevent="updateSearchParams">
				<base-datetime-range v-model="searchFilter.dateRange" label="Observation date" min-label="Start" max-label="End"></base-datetime-range>
				<b-form-group description="Only display data with RELEASE date before today">
					<b-form-checkbox v-model="searchFilter.releasedData">Released data</b-form-checkbox>
				</b-form-group>
				<tag-selector v-if="tags.length" v-model="searchFilter.tags" :tags="tags"></tag-selector>
				<b-button type="submit" variant="primary">Search</b-button>
			</b-form>
		</b-col>
		<b-col cols="8">
			<metadata-list :dataset="dataset" :search-params="searchParams" :default-columns="defaultColumns"></metadata-list>
		</b-col>
	</b-row>
</template>

<script>
import MetadataMixin from './MetadataMixin';
import MetadataSearchFilter from '@/services/svo/MetadataSearchFilter';

class ChromisSearchFilter extends MetadataSearchFilter {
	releasedData;

	constructor(searchFilter) {
		super(searchFilter);
		this.releasedData = searchFilter.releasedData;
	}

	getSearchParams() {
		let searchParams = super.getSearchParams();

		if (this.releasedData) {
			searchParams.set('release__lt', new Date().toISOString().substring(0, 10));
		}

		return searchParams;
	}
}

export default {
	name: 'Chromis',
	mixins: [MetadataMixin],
	data: function() {
		return {
			searchFilter: new ChromisSearchFilter(this.initialSearchFilter),
			defaultColumns: [
				{ label: 'Observation date', key: 'date_obs', formatter: this.$utils.formatDate },
				{ label: 'Wavelength (nm)', key: 'wavelnth' },
				{ label: 'Release date', key: 'release', formatter: this.$utils.formatDate }
			]
		};
	}
};
</script>
