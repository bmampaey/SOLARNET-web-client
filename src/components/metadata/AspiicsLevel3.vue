<template>
	<metadata :dataset="dataset" :search-filter="searchFilter" :default-columns="defaultColumns">
		<datetime-range v-model="searchFilter.dateRange" label="Observation date" min-label="Start"
			max-label="End"></datetime-range>
			<b-form-group label="Product" label-for="productIds">
		<b-form-select id="productIds" v-model="searchFilter.productIds"
				:options="searchFilter.productIdOptions" multiple></b-form-select>
		</b-form-group>
		<b-form-group label="Science objective" label-for="scienceObjectives">
			<b-form-select id="scienceObjectives" v-model="searchFilter.scienceObjectives"
				:options="searchFilter.scienceObjectiveOptions" multiple></b-form-select>
		</b-form-group>
		<b-form-group label="Observation mode" label-for="observationModes">
			<b-form-select id="observationModes" v-model="searchFilter.observationModes"
				:options="searchFilter.observationModeOptions" multiple></b-form-select>
		</b-form-group>
	</metadata>
</template>

<script>
import MetadataMixin from './MetadataMixin';
import MetadataSearchFilter from '@/services/svo/MetadataSearchFilter';

const PRODUCT_IDS = [
	'Green line',
	'He I D3 line',
	'Polarisation angle',
	'Polarisation brightness',
	'Total brightness',
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

class AspiicsLevel3SearchFilter extends MetadataSearchFilter {
	productIdOptions = PRODUCT_IDS;
	scienceObjectiveOptions = SCIENCE_OBJECTIVES;
	observationModeOptions = OBSERVATION_MODES;
	productIds = [];
	scienceObjectives = [];
	observationModes = [];

	constructor(searchFilter) {
		super(searchFilter);
		if (searchFilter) {
			if (Array.isArray(searchFilter.productIds)) {
				this.productIds = [...searchFilter.productIds];
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

		for (const productId of this.productIds) {
			searchParams.append('prod_id__in', productId);
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
	name: 'AspiicsLevel3',
	mixins: [MetadataMixin],
	data() {
		return {
			searchFilter: new AspiicsLevel3SearchFilter(this.initialSearchFilter),
			defaultColumns: [
				{ label: 'Observation date', key: 'date_obs', formatter: this.$utils.formatDate },
				{ label: 'Product', key: 'prod_id' },
				{ label: 'Science objective', key: 'sci_obj' },
				{ label: 'Observation mode', key: 'obs_mode' }
			]
		};
	}
};
</script>
