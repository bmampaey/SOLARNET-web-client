<template>
	<b-row>
		<b-col cols="4">
			<b-form @submit.prevent="updateSearchParams">
				<base-datetime-range v-model="searchFilter.dateRange" label="Observation date" min-label="Start" max-label="End"></base-datetime-range>
				<b-form-group label="Observation target" label-for="observationTargets">
					<b-form-select id="observationTargets" v-model="searchFilter.observationTargets" :options="searchFilter.observationTargetOptions" multiple></b-form-select>
				</b-form-group>
				<b-overlay :show="showOverlay" rounded="sm">
					<b-form-group label="Tags" label-for="tags">
						<b-form-select id="tags" v-model="searchFilter.tags" :options="tagOptions" multiple></b-form-select>
					</b-form-group>
				</b-overlay>
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
