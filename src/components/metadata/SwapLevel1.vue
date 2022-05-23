<template>
	<metadata :dataset="dataset" :search-filter="searchFilter" :default-columns="defaultColumns">
		<datetime-range v-model="searchFilter.dateRange" label="Observation date" min-label="Start" max-label="End"></datetime-range>
		<b-form-group label="Observation mode" label-for="observationModes">
			<b-form-select id="observationModes" v-model="searchFilter.observationModes" :options="searchFilter.observationModeOptions" multiple></b-form-select>
		</b-form-group>
	</metadata>
</template>

<script>
import MetadataMixin from './MetadataMixin';
import MetadataSearchFilter from '@/services/svo/MetadataSearchFilter';

const OBSERVATION_MODES = ['Fixed off-pointing', 'Variable off-pointing', 'Sun centered'];

class SwapLevel1SearchFilter extends MetadataSearchFilter {
	observationModeOptions = OBSERVATION_MODES;
	observationModes = [];

	constructor(searchFilter) {
		super(searchFilter);
		if (searchFilter) {
			if (Array.isArray(searchFilter.observationModes)) {
				this.observationModes = [...searchFilter.observationModes];
			}
		}
	}

	getSearchParams() {
		let searchParams = super.getSearchParams();

		for (const observationMode of this.observationModes) {
			searchParams.append('obs_mode__in', observationMode);
		}

		return searchParams;
	}
}

export default {
	name: 'SwapLevel1',
	mixins: [MetadataMixin],
	data: function() {
		return {
			searchFilter: new SwapLevel1SearchFilter(this.initialSearchFilter),
			defaultColumns: [
				{ label: 'Observation date', key: 'date_obs', formatter: this.$utils.formatDate },
				{ label: 'Observation mode', key: 'obs_mode' }
			]
		};
	}
};
</script>
