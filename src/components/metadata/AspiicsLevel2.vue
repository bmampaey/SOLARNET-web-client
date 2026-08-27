<template>
	<metadata :dataset="dataset" :search-filter="searchFilter" :default-columns="defaultColumns">
		<datetime-range v-model="searchFilter.dateRange" label="Observation date" min-label="Start" max-label="End"></datetime-range>
		<b-form-group label="Filter" label-for="filters">
			<b-form-select id="filters" v-model="searchFilter.filters" :options="searchFilter.filterOptions" multiple></b-form-select>
		</b-form-group>
		<b-form-group label="Science objective" label-for="scienceObjectives">
			<b-form-select id="scienceObjectives" v-model="searchFilter.scienceObjectives" :options="searchFilter.scienceObjectiveOptions" multiple></b-form-select>
		</b-form-group>
		<b-form-group label="Observation mode" label-for="observationModes">
			<b-form-select id="observationModes" v-model="searchFilter.observationModes" :options="searchFilter.observationModeOptions" multiple></b-form-select>
		</b-form-group>
	</metadata>
</template>

<script>
import MetadataMixin from './MetadataMixin';
import MetadataSearchFilter from '@/services/svo/MetadataSearchFilter';

const FILTERS = [
	'Fe XIV',
	'He I',
	'Polarizer 0',
	'Polarizer 120',
	'Polarizer 60',
	'Wideband'
];
const SCIENCE_OBJECTIVES = [
	'CME',
	'Quiescent'
];
const OBSERVATION_MODES = [
	'CME-Watch',
	'Full set',
	'Synoptic',
	'Test',
	'Waves'
];

class AspiicsLevel2SearchFilter extends MetadataSearchFilter {
	filterOptions = FILTERS;
	scienceObjectiveOptions = SCIENCE_OBJECTIVES;
	observationModeOptions = OBSERVATION_MODES;
	filters = [];
	scienceObjectives = [];
	observationModes = [];

	constructor(searchFilter) {
		super(searchFilter);
		if (searchFilter) {
			if (Array.isArray(searchFilter.filters)) {
				this.filters = [...searchFilter.filters];
			}
			if (Array.isArray(searchFilter.scienceObjectives)) {
				this.scienceObjectives = [...searchFilter.scienceObjectives];
			}
			if (Array.isArray(searchFilter.observationModes)) {
				this.observationModes = [...searchFilter.observationModes];
			}
		}
	}

	getSearchParams() {
		let searchParams = super.getSearchParams();

		for (const filter of this.filters) {
			searchParams.append('filter__in', filter);
		}

		for (const scienceObjective of this.scienceObjectives) {
			searchParams.append('sci_obj__in', scienceObjective);
		}

		for (const observationMode of this.observationModes) {
			searchParams.append('obs_mode__in', observationMode);
		}
		
		return searchParams;
	}
}

export default {
	name: 'AspiicsLevel2',
	mixins: [MetadataMixin],
	data() {
		return {
			searchFilter: new AspiicsLevel2SearchFilter(this.initialSearchFilter),
			defaultColumns: [
				{ label: 'Observation date', key: 'date_obs', formatter: this.$utils.formatDate },
				{ label: 'Filter', key: 'filter' },
				{ label: 'Science objective', key: 'sci_obj' },
				{ label: 'Observation mode', key: 'obs_mode' }
			]
		};
	}
};
</script>
