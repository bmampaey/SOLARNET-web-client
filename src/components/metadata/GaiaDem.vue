<template>
	<b-row>
		<b-col cols="4">
			<b-form @submit.prevent="updateSearchParams">
				<base-datetime-range v-model="searchFilter.dateRange" label="Observation date" min-label="Start" max-label="End"></base-datetime-range>
				<b-form-group label="Map type" label-for="mapTypes">
					<b-form-select id="mapTypes" v-model="searchFilter.mapTypes" :options="searchFilter.mapTypeOptions" multiple></b-form-select>
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

const MAP_TYPES = [
	{ value: 'em', text: 'Emission measure' },
	{ value: 'temp', text: 'Temperature' },
	{ value: 'width', text: 'Thermal width' },
	{ value: 'chi2', text: 'Chi2' }
];

class GaiaDemSearchFilter extends MetadataSearchFilter {
	mapTypeOptions = MAP_TYPES;
	mapTypes = [];

	constructor(searchFilter) {
		super(searchFilter);
		if (searchFilter) {
			if (Array.isArray(searchFilter.mapTypes)) {
				this.mapTypes = [...searchFilter.mapTypes];
			}
		}
	}

	getSearchParams() {
		let searchParams = super.getSearchParams();

		for (const mapType of this.mapTypes) {
			searchParams.append('granule_gid__in', mapType);
		}

		return searchParams;
	}
}

export default {
	name: 'GaiaDem',
	mixins: [MetadataMixin],
	data: function() {
		return {
			searchFilter: new GaiaDemSearchFilter(this.initialSearchFilter),
			columns: [
				{ label: 'Observation date', key: 'date_beg', formatter: this.$utils.formatDate },
				{ label: 'Map Type', key: 'granule_gid', formatter: this.mapTypeFullName }
			]
		};
	},
	methods: {
		mapTypeFullName(value) {
			let map_type = MAP_TYPES.find(m => m.value == value);
			return map_type ? map_type.text : value;
		}
	}
};
</script>
