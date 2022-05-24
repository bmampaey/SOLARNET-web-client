<template>
	<div>
		<b-overlay :show="showOverlay" rounded="sm">
			<b-table
				ref="datasetTable"
				:items="datasetList"
				:fields="datasetTableFields"
				primary-key="id"
				select-mode="single"
				:caption="datasetTableCaption"
				responsive
				small
				hover
				selectable
				@row-selected="showDatasetDetailModal"
			>
			</b-table>
		</b-overlay>

		<b-modal ref="datasetDetailModal" size="full" :title="datasetDetailModalTitle" hide-footer static lazy>
			<dataset-detail v-if="datasetDetailModalDataset" :dataset="datasetDetailModalDataset" :search-filter="searchFilter"></dataset-detail>
		</b-modal>
	</div>
</template>

<script>
import DatasetSearchFilter from '@/services/svo/DatasetSearchFilter';
import DatasetDetail from './DatasetDetail';

export default {
	name: 'DatasetList',
	components: {
		DatasetDetail
	},
	props: {
		searchFilter: { type: DatasetSearchFilter, required: true }
	},
	data() {
		return {
			datasetList: [],
			datasetDetailModalDataset: null,
			datasetDetailModalTitle: '',
			showOverlay: true
		};
	},
	computed: {
		datasetTableFields() {
			return [
				{ key: 'name', label: 'Dataset' },
				{ key: 'metadata', label: 'Count', formatter: metadata => metadata.count },
				{
					key: 'telescope',
					label: 'Telescope',
					formatter: telescope => telescope.name
				},
				{
					key: 'instrument',
					label: 'Instrument',
					formatter: instrument => instrument.name
				},
				{
					key: 'characteristics',
					label: 'Characteristics',
					formatter: characteristics =>
						characteristics
							.map(characteristic => characteristic.name)
							.sort()
							.join(', ')
				}
			];
		},
		datasetTableCaption() {
			return this.datasetList.length > 0 ? 'Click on any row to see dataset content or refine search' : 'No dataset correspond to your search criteria';
		}
	},
	watch: {
		searchFilter: {
			handler: 'updateDatasetList',
			immediate: true
		}
	},
	methods: {
		async updateDatasetList(searchFilter) {
			this.showOverlay = true;
			try {
				let datasetList = await this.$SVO.dataset.getAll(searchFilter.getSearchParams());
				// Discard empty datasets
				this.datasetList = datasetList.filter(dataset => dataset.metadata && dataset.metadata.count > 0);
				this.selectedDatasets = [];
			} catch (error) {
				this.$displayErrorMessage(this.$SVO.parseError(error));
			}
			this.showOverlay = false;
		},
		showDatasetDetailModal(selectedRows) {
			// selectedRows is always a list, but it will be empty when clearing selected rows
			if (selectedRows.length > 0) {
				this.datasetDetailModalDataset = selectedRows[0];
				this.datasetDetailModalTitle = this.datasetDetailModalDataset.name;
				// Clear the selection so that the row can be selected again
				this.$refs.datasetTable.clearSelected();
				// Make sure the component is rendered before calling show
				this.$nextTick(function() {
					this.$refs.datasetDetailModal.show();
				});
			}
		}
	}
};
</script>
