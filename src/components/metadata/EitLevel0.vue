<template>
	<metadata :dataset="dataset" :search-filter="searchFilter" :default-columns="defaultColumns">
		<base-datetime-range v-model="searchFilter.dateRange" label="Observation date" min-label="Start" max-label="End"></base-datetime-range>
		<b-form-group label="Wavelength" label-for="wavelengths">
			<b-form-select id="wavelengths" v-model="searchFilter.wavelengths" :options="searchFilter.wavelengthOptions" multiple></b-form-select>
		</b-form-group>
		<b-form-group label="Science objective" label-for="scienceObjectives">
			<b-form-select id="scienceObjectives" v-model="searchFilter.scienceObjectives" :options="searchFilter.scienceObjectiveOptions" multiple></b-form-select>
		</b-form-group>
	</metadata>
</template>

<script>
import MetadataMixin from './MetadataMixin';
import MetadataSearchFilter from '@/services/svo/MetadataSearchFilter';

const WAVELENGTHS = [171, 195, 284, 304];
const SCIENCE_OBJECTIVES = [
	'171 BINNED TEST',
	'CALIBRATION LAMP',
	'CHARGE TRANSFER',
	'CHARGE TRANSFER 171',
	'CME WATCH 171',
	'CME WATCH 195',
	'CME WATCH 195 (SM5)',
	'CONTINUOUS RO 304',
	'DARK FRONTSIDE A',
	'DARK FRONTSIDE B',
	'DARK FRONTSIDE C',
	'DARK FRONTSIDE D',
	'DARK IMAGE',
	'DARK IMAGE HTR ON',
	'FULL SUN 171',
	'FULL SUN 171/284/195/304',
	'FULL SUN 195',
	'FULL SUN 284',
	'FULL SUN 304',
	'HIGH CADENCE 195',
	'HIGH CADENCE 304',
	'SECTOR HANG',
	'SHUTTERLESS',
	'SUBFIELD 171',
	'TEST'
];

class EitLevel0SearchFilter extends MetadataSearchFilter {
	wavelengthOptions = WAVELENGTHS.map(w => ({ value: w, text: `${w} Å` }));
	scienceObjectiveOptions = SCIENCE_OBJECTIVES;
	wavelengths = [];
	scienceObjectives = [];

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
			if (Array.isArray(searchFilter.scienceObjectives)) {
				this.scienceObjectives = [...searchFilter.scienceObjectives];
			}
		}
	}

	getSearchParams() {
		let searchParams = super.getSearchParams();

		for (const wavelength of this.wavelengths) {
			searchParams.append('wavelnth__in', wavelength);
		}

		for (const scienceObjective of this.scienceObjectives) {
			searchParams.append('sci_obj__in', scienceObjective);
		}

		return searchParams;
	}
}

export default {
	name: 'EitLevel0',
	mixins: [MetadataMixin],
	data: function() {
		return {
			searchFilter: new EitLevel0SearchFilter(this.initialSearchFilter),
			defaultColumns: [
				{ label: 'Observation date', key: 'date_obs', formatter: this.$utils.formatDate },
				{ label: 'Wavelength (Å)', key: 'wavelnth' },
				{ label: 'Science objective', key: 'sci_obj' }
			]
		};
	}
};
</script>
