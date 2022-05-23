<template>
	<metadata :dataset="dataset" :search-filter="searchFilter" :default-columns="defaultColumns">
		<base-datetime-range v-model="searchFilter.dateRange" label="Observation date" min-label="Start" max-label="End"></base-datetime-range>
		<b-form-group label="Wavelength" label-for="wavelengths">
			<b-form-select id="wavelengths" v-model="searchFilter.wavelengths" :options="searchFilter.wavelengthOptions" multiple></b-form-select>
		</b-form-group>
		<b-form-group label="Detector" label-for="detectors">
			<b-form-select id="detectors" v-model="searchFilter.detectors" :options="searchFilter.detectorOptions" multiple></b-form-select>
		</b-form-group>
		<b-form-group label="Compression" label-for="compressions">
			<b-form-select id="compressions" v-model="searchFilter.compressions" :options="searchFilter.compressionOptions" multiple></b-form-select>
		</b-form-group>
	</metadata>
</template>

<script>
import MetadataMixin from './MetadataMixin';
import MetadataSearchFilter from '@/services/svo/MetadataSearchFilter';

const WAVELENGTHS = [174, 304, 1216];
const DETECTORS = ['FSI', 'HRI_EUV', 'HRI_LYA'];
const COMPRESSIONS = ['Lossless', 'Lossy-extreme', 'Lossy-high quality', 'Lossy-strong'];

class EuiLevel2SearchFilter extends MetadataSearchFilter {
	wavelengthOptions = WAVELENGTHS.map(w => ({ value: w, text: `${w} Å` }));
	detectorOptions = DETECTORS;
	compressionOptions = COMPRESSIONS;
	wavelengths = [];
	detectors = [];
	compressions = [];

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
			if (Array.isArray(searchFilter.detectors)) {
				this.detectors = [...searchFilter.detectors];
			}
			if (Array.isArray(searchFilter.compressions)) {
				this.detectors = [...searchFilter.compressions];
			}
		}
	}

	getSearchParams() {
		let searchParams = super.getSearchParams();

		for (const wavelength of this.wavelengths) {
			searchParams.append('wavelnth__in', wavelength);
		}

		for (const detector of this.detectors) {
			searchParams.append('detector__in', detector);
		}

		for (const compression of this.compressions) {
			searchParams.append('compress__in', compression);
		}

		return searchParams;
	}
}

export default {
	name: 'EuiLevel2',
	mixins: [MetadataMixin],
	data: function() {
		return {
			searchFilter: new EuiLevel2SearchFilter(this.initialSearchFilter),
			defaultColumns: [
				{ label: 'Observation date', key: 'date_obs', formatter: this.$utils.formatDate },
				{ label: 'Wavelength (Å)', key: 'wavelnth' },
				{ label: 'Detector', key: 'detector' },
				{ label: 'Compression', key: 'compress' }
			]
		};
	}
};
</script>
