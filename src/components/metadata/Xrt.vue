<template>
	<metadata :dataset="dataset" :search-filter="searchFilter" :default-columns="defaultColumns">
		<datetime-range v-model="searchFilter.dateRange" label="Observation date" min-label="Start" max-label="End"></datetime-range>
		<b-form-group label="Observation target" label-for="observationTargets">
			<b-form-select id="observationTargets" v-model="searchFilter.observationTargets" :options="searchFilter.observationTargetOptions" multiple></b-form-select>
		</b-form-group>
	</metadata>
</template>

<script>
import MetadataMixin from './MetadataMixin';
import MetadataSearchFilter from '@/services/svo/MetadataSearchFilter';

const OBSERVATION_TARGETS = [
	{ value: 'AR', text: 'Active Region' },
	{ value: 'CH', text: 'Coronal Hole' },
	{ value: 'FS', text: 'Flare' },
	{ value: 'QR', text: 'Quiet Region' }
];

class XrtSearchFilter extends MetadataSearchFilter {
	observationTargetOptions = OBSERVATION_TARGETS;
	observationTargets = [];

	constructor(searchFilter) {
		super(searchFilter);
		if (searchFilter) {
			if (Array.isArray(searchFilter.observationTargets)) {
				this.observationTargets = [...searchFilter.observationTargets];
			}
		}
	}

	getSearchParams() {
		let searchParams = super.getSearchParams();

		for (const observationTarget of this.observationTargets) {
			searchParams.append('target__in', observationTarget);
		}

		return searchParams;
	}
}

export default {
	name: 'Xrt',
	mixins: [MetadataMixin],
	data: function() {
		return {
			searchFilter: new XrtSearchFilter(this.initialSearchFilter),
			defaultColumns: [
				{ label: 'Observation date', key: 'date_obs', formatter: this.$utils.formatDate },
				{ label: 'NOAA A.R. number', key: 'noaa_num' },
				{ label: 'Observation target', key: 'target' }
			]
		};
	}
};
</script>
