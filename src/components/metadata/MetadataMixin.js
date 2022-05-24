import Metadata from './Metadata';
import MetadataSearchFilter from '@/services/svo/MetadataSearchFilter';

export default {
	components: {
		Metadata
	},
	props: {
		dataset: { type: Object, required: true },
		initialSearchFilter: { type: Object, required: false, default: null }
	},
	data() {
		return {
			searchFilter: new MetadataSearchFilter(this.initialSearchFilter),
			defaultColumns: [
				{ label: 'Observation date', key: 'date_beg', formatter: this.$utils.formatDate },
				{ label: 'Wavelength', key: 'wavemin' }
			]
		};
	}
};
