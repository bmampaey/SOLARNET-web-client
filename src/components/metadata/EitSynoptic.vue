<template>
	<b-row>
		<b-col cols="4">
			<b-form @submit.prevent="updateSearchParams">
				<base-datetime-range v-model="searchFilter.dateRange" label="Observation date" min-label="Start" max-label="End"></base-datetime-range>
				<b-form-group label="Wavelength" label-for="wavelengths">
					<b-form-select id="wavelengths" v-model="searchFilter.wavelengths" :options="searchFilter.wavelengthOptions" multiple></b-form-select>
				</b-form-group>
				<tag-selector v-if="tags.length" v-model="searchFilter.tags" :tags="tags"></tag-selector>
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

const WAVELENGTHS = [171, 195, 284, 304];

class EitSynopticSearchFilter extends MetadataSearchFilter {
	wavelengthOptions = WAVELENGTHS.map(w => ({ value: w, text: `${w} Å` }));
	wavelengths = [];

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
		}
	}

	getSearchParams() {
		let searchParams = super.getSearchParams();

		for (const wavelength of this.wavelengths) {
			searchParams.append('wavemin__in', wavelength / 10.0);
		}

		return searchParams;
	}
}

export default {
	name: 'EitSynoptic',
	mixins: [MetadataMixin],
	data: function() {
		return {
			searchFilter: new EitSynopticSearchFilter(this.initialSearchFilter),
			defaultColumns: [
				{ label: 'Observation date', key: 'date_beg', formatter: this.$utils.formatDate },
				{
					label: 'Wavelength (Å)',
					key: 'wavemin',
					formatter: value => {
						return value * 10;
					}
				}
			]
		};
	}
};
</script>
