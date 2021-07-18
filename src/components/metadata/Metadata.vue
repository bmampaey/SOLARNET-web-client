<template>
	<b-row>
		<b-col cols="4">
			<b-form @submit.prevent="updateSearchParams">
				<base-datetime-range v-model="searchFilter.dateRange" label="Observation date" min-label="Start" max-label="End"></base-datetime-range>
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
import MetadataList from './MetadataList';
import MetadataSearchFilter from '@/services/svo/MetadataSearchFilter';

export default {
	name: 'Metadata',
	components: {
		MetadataList
	},
	props: {
		dataset: { type: Object, required: true },
		initialSearchFilter: { type: Object, required: false, default: null }
	},
	data: function() {
		return {
			searchFilter: new MetadataSearchFilter(this.initialSearchFilter),
			searchParams: new URLSearchParams(),
			tagOptions: [],
			columns: [
				{ label: 'Observation date', key: 'date_beg', formatter: this.$utils.formatDate },
				{ label: 'Wavelength', key: 'wavemin' }
			]
		};
	},
	created: async function() {
		// Fetch and create the options of the form select
		this.showOverlay = true;
		this.loadTagOptions();
		this.showOverlay = false;
	},
	methods: {
		updateSearchParams: function() {
			this.searchParams = this.searchFilter.getSearchParams();
		},
		loadTagOptions: async function() {
			try {
				let tags = await this.$SVO.tag.getAll({ dataset: this.dataset.name });
				this.tagOptions = tags.map(tag => ({ value: tag.name, text: tag.name }));
			} catch (error) {
				this.$displayErrorMessage(this.$SVO.parseError(error));
			}
		}
	}
};
</script>
