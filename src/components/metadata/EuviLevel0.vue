<template>
	<b-row>
		<b-col cols="4">
			<b-form @submit.prevent="updateSearchParams">
				<base-datetime-range v-model="searchFilter.dateRange" label="Observation date" min-label="Start" max-label="End"></base-datetime-range>
				<b-form-group label="Wavelength" label-for="wavelengths">
					<b-form-select id="wavelengths" v-model="searchFilter.wavelengths" :options="searchFilter.wavelengthOptions" multiple></b-form-select>
				</b-form-group>
				<b-form-group label="Observatory" label-for="observatories">
					<b-form-select id="observatories" v-model="searchFilter.observatories" :options="searchFilter.observatoryOptions" multiple></b-form-select>
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

const WAVELENGTHS = [171, 195, 284, 304];
const OBSERVATORIES = ['STEREO_A', 'STEREO_B'];

class EuviLevel0SearchFilter extends MetadataSearchFilter {
	wavelengthOptions = WAVELENGTHS.map(w => ({ value: w, text: `${w} Å` }));
	observatoryOptions = OBSERVATORIES;
	wavelengths = [];
	observatories = [];

	constructor(searchFilter) {
		super(searchFilter);
		if (searchFilter) {
			if (Array.isArray(searchFilter.wavelengths)) {
				this.wavelengths = [...searchFilter.wavelengths];
			} else if (searchFilter.wavelengthRange) {
				let min = searchFilter.wavelengthRange.min != null ? searchFilter.wavelengthRange.min * 10 : -Infinity;
				let max = searchFilter.wavelengthRange.max != null ? searchFilter.wavelengthRange.max * 10 : Infinity;
				if (isFinite(min) || isFinite(max)) {
					this.wavelengths = WAVELENGTHS.filter(w => min <= w && w <= max);
				}
			}
			if (Array.isArray(searchFilter.observatories)) {
				this.observatories = [...searchFilter.observatories];
			}
		}
	}

	getSearchParams() {
		let searchParams = super.getSearchParams();

		for (const wavelength of this.wavelengths) {
			searchParams.append('wavelnth__in', wavelength);
		}

		for (const observatory of this.observatories) {
			searchParams.append('obsrvtry__in', observatory);
		}

		return searchParams;
	}
}

export default {
	name: 'EuviLevel0',
	mixins: [MetadataMixin],
	data: function() {
		return {
			searchFilter: new EuviLevel0SearchFilter(this.initialSearchFilter),
			columns: [
				{ label: 'Observation date', key: 'date_obs', formatter: this.$utils.formatDate },
				{ label: 'Wavelength (Å)', key: 'wavelnth' },
				{ label: 'Observatory', key: 'obsrvtry' }
			]
		};
	}
};
</script>
