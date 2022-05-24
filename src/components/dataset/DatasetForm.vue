<template>
	<b-overlay :show="showOverlay" rounded="sm">
		<b-form @submit.prevent="updateSearchFilter">
			<b-form-group label="Telescopes" label-for="telescopes">
				<b-form-select id="telescopes" v-model="searchFilter.telescopes" :options="telescopeOptions" multiple></b-form-select>
			</b-form-group>
			<b-form-group label="Characteristics" label-for="characteristics">
				<b-form-select id="characteristics" v-model="searchFilter.characteristics" :options="characteristicOptions" multiple></b-form-select>
			</b-form-group>
			<b-form-group label="Tags" label-for="tags">
				<b-form-select id="tags" v-model="searchFilter.tags" :options="tagOptions" multiple></b-form-select>
			</b-form-group>
			<datetime-range v-model="searchFilter.dateRange" label="Observation date" min-label="Start" max-label="End"></datetime-range>
			<number-range v-model="searchFilter.wavelengthRange" label="Observation wavelength" unit="nm"></number-range>
			<b-button type="submit" variant="primary">Search</b-button>
		</b-form>
	</b-overlay>
</template>

<script>
import DatasetSearchFilter from '@/services/svo/DatasetSearchFilter';

export default {
	name: 'DatasetForm',
	props: {
		value: { type: DatasetSearchFilter, required: true }
	},
	data() {
		return {
			searchFilter: new DatasetSearchFilter(this.value),
			telescopeOptions: [],
			characteristicOptions: [],
			tagOptions: [],
			showOverlay: true
		};
	},
	async created() {
		// Fetch and create the options of the form select in parralel
		this.showOverlay = true;
		await Promise.allSettled([this.loadTelescopeOptions(), this.loadCharacteristicOptions(), this.loadTagOptions()]);
		this.showOverlay = false;
	},
	methods: {
		updateSearchFilter() {
			// Send a copy of the searchFilter so that local modifications are not visible outside until the form is submitted
			this.$emit('input', new DatasetSearchFilter(this.searchFilter));
		},
		async loadTelescopeOptions() {
			try {
				let telescopes = await this.$SVO.telescope.getAll();
				this.telescopeOptions = telescopes.map(telescope => ({ value: telescope.name, text: telescope.name })).sort((a, b) => a.text.localeCompare(b.text, 'en', { sensitivity: 'base' }));
			} catch (error) {
				this.$displayErrorMessage(this.$SVO.parseError(error));
			}
		},
		async loadCharacteristicOptions() {
			try {
				let characteristics = await this.$SVO.characteristic.getAll();
				this.characteristicOptions = characteristics
					.map(characteristic => ({ value: characteristic.name, text: characteristic.name }))
					.sort((a, b) => a.text.localeCompare(b.text, 'en', { sensitivity: 'base' }));
			} catch (error) {
				this.$displayErrorMessage(this.$SVO.parseError(error));
			}
		},
		async loadTagOptions() {
			try {
				let tags = await this.$SVO.tag.getAll();
				this.tagOptions = tags.map(tag => ({ value: tag.name, text: tag.name })).sort((a, b) => a.text.localeCompare(b.text, 'en', { sensitivity: 'base' }));
			} catch (error) {
				this.$displayErrorMessage(this.$SVO.parseError(error));
			}
		}
	}
};
</script>
