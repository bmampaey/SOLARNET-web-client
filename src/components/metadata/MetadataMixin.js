import MetadataList from './MetadataList';
import TagSelector from './TagSelector';
import MetadataSearchFilter from '@/services/svo/MetadataSearchFilter';

export default {
	components: {
		MetadataList,
		TagSelector
	},
	props: {
		dataset: { type: Object, required: true },
		initialSearchFilter: { type: Object, required: false, default: null }
	},
	data: function() {
		return {
			searchFilter: new MetadataSearchFilter(this.initialSearchFilter),
			searchParams: new URLSearchParams(),
			tags: [],
			defaultColumns: [
				{ label: 'Observation date', key: 'date_beg', formatter: this.$utils.formatDate },
				{ label: 'Wavelength', key: 'wavemin' }
			]
		};
	},
	created: function() {
		// Fetch and create the options of the form select
		this.loadTags();
	},
	methods: {
		updateSearchParams: function() {
			this.searchParams = this.searchFilter.getSearchParams();
		},
		loadTags: async function() {
			try {
				this.tags = await this.$SVO.tag.getAll({ dataset: this.dataset.name });
			} catch (error) {
				this.$displayErrorMessage(this.$SVO.parseError(error));
			}
		}
	}
};
