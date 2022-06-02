<template>
	<b-row>
		<b-col cols="12" lg="4">
			<b-card no-body class="mb-3">
				<b-card-header v-b-toggle="datasetFilterId" header-tag="header" title="Click to show/hide the dataset filters">
					Filter datasets
					<b-button size="sm" class="hide-btn" :aria-controls="datasetFilterId">Hide</b-button>
					<b-button size="sm" class="show-btn" :aria-controls="datasetFilterId">Show</b-button>
				</b-card-header>
				<b-collapse :id="datasetFilterId" visible>
					<b-card-body>
						<dataset-form v-model="searchFilter"></dataset-form>
					</b-card-body>
				</b-collapse>
			</b-card>
		</b-col>
		<b-col cols="12" lg="8">
			<dataset-list :search-filter="searchFilter"></dataset-list>
		</b-col>
	</b-row>
</template>

<script>
import DatasetSearchFilter from '@/services/svo/DatasetSearchFilter';
import DatasetForm from './DatasetForm';
import DatasetList from './DatasetList';

export default {
	name: 'Dataset',
	components: {
		DatasetForm,
		DatasetList
	},
	props: {
		initialSearchFilter: { type: DatasetSearchFilter, required: false, default: null }
	},
	data() {
		return {
			searchFilter: new DatasetSearchFilter(this.initialSearchFilter),
			datasetFilterId: this.$utils.getUniqueId()
		};
	}
};
</script>
