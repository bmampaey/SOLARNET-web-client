import MetadataList from './MetadataList';
import MetadataSearchFilter from '@/services/svo/MetadataSearchFilter';

export default {
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
			defaultColumns: [
				{ label: 'Observation date', key: 'date_beg', formatter: this.$utils.formatDate },
				{ label: 'Wavelength', key: 'wavemin' }
			],
			showOverlay: false
		};
	},
	created: async function() {
		// Fetch and create the options of the form select
		this.showOverlay = true;
		await this.loadTagOptions();
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
