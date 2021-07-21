<template>
	<b-row>
		<b-col cols="4">
			<b-form @submit.prevent="updateSearchParams">
				<base-datetime-range v-model="searchFilter.dateRange" label="Observation date" min-label="Start" max-label="End"></base-datetime-range>
				<b-form-group label="Observation mode" label-for="observationModes">
					<b-form-select id="observationModes" v-model="searchFilter.observationModes" :options="searchFilter.observationModeOptions" multiple></b-form-select>
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
			<metadata-list :dataset="dataset" :search-params="searchParams" :columns="columns"></metadata-list>
		</b-col>
	</b-row>
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
			columns: [
				{ label: 'Observation date', key: 'date_obs', formatter: this.$utils.formatDate },
				{ label: 'Observation mode', key: 'obs_mode' }
			]
		};
	}
};
</script>
