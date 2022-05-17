<template>
	<div>
		<b-overlay :show="showOverlay" rounded="sm">
			<b-table
				ref="dataSelectionTable"
				:items="dataSelectionList"
				:fields="dataSelectionTableFields"
				primary-key="id"
				select-mode="single"
				:caption="dataSelectionTableCaption"
				responsive
				small
				hover
				selectable
				@row-selected="showDataSelectionDetailModal"
			>
				<template #cell(ftp_button)="data">
					<b-button :href="data.item.ftp_download_url" target="_blank" size="sm" variant="primary" title="Download selection via ftp">
						<b-icon icon="folder-symlink"></b-icon>
					</b-button>
				</template>
				<template #cell(zip_button)="data">
					<b-button :href="data.item.zip_download_url" target="_blank" size="sm" variant="primary" title="Download selection as zip file">
						<b-icon icon="file-earmark-zip"></b-icon>
					</b-button>
				</template>
				<template #cell(delete_button)="data">
					<b-button size="sm" variant="danger" title="Delete data selection" @click="deleteDataSelection(data.item)">
						<b-icon icon="trash"></b-icon>
					</b-button>
				</template>
			</b-table>
		</b-overlay>
		<b-modal ref="dataSelectionDetailModal" size="full" :title="dataSelectionDetailModalTitle" hide-footer static lazy>
			<data-selection-detail v-if="dataSelectionDetailModalDataSelection" :data-selection="dataSelectionDetailModalDataSelection"></data-selection-detail>
		</b-modal>
	</div>
</template>

<script>
import DataSelectionDetail from './DataSelectionDetail';

export default {
	name: 'DataSelectionList',
	components: {
		DataSelectionDetail
	},
	data: function() {
		return {
			dataSelectionList: [],
			dataSelectionDetailModalDataSelection: null,
			dataSelectionDetailModalTitle: '',
			showOverlay: true
		};
	},
	computed: {
		dataSelectionTableFields: function() {
			return [
				{ key: 'ftp_button', label: 'FTP' },
				{ key: 'zip_button', label: 'ZIP' },
				{ key: 'dataset', label: 'Dataset', formatter: dataset => dataset.name },
				{ key: 'description', label: 'Description', tdClass: 'preformatted' },
				{ key: 'metadata', label: 'Count', formatter: metadata => metadata.count },
				{ key: 'creation_time', label: 'Date of creation', formatter: this.$utils.formatDate },
				{ key: 'delete_button', label: 'Delete' }
			];
		},
		dataSelectionTableCaption: function() {
			return this.dataSelectionList.length > 0 ? 'Click on any row to see data selection details' : 'You have not saved any data selection yet';
		}
	},
	activated: function() {
		// Refresh the dataSelectionList each time the view is displayed because the User may have added or deleted dataSelection since the view was last displayed
		this.updateDataSelectionList();
	},
	methods: {
		updateDataSelectionList: async function() {
			this.showOverlay = true;
			try {
				this.dataSelectionList = await this.$SVO.data_selection.getAll();
			} catch (error) {
				this.$displayErrorMessage(this.$SVO.parseError(error));
			}
			this.showOverlay = false;
		},
		showDataSelectionDetailModal: function(selectedRows) {
			// selectedRows is always a list, but it will be empty when clearing selected rows
			if (selectedRows.length > 0) {
				this.dataSelectionDetailModalDataSelection = selectedRows[0];
				this.dataSelectionDetailModalTitle = this.dataSelectionDetailModalDataSelection.dataset.name;
				// Clear the selection so that the row can be selected again
				this.$refs.dataSelectionTable.clearSelected();
				// Make sure the component is rendered before calling show
				this.$nextTick(function() {
					this.$refs.dataSelectionDetailModal.show();
				});
			}
		},
		deleteDataSelection: function(dataSelection) {
			try {
				this.$SVO.data_selection.delete(dataSelection.resource_uri);
				this.dataSelectionList = this.dataSelectionList.filter(v => v.resource_uri != dataSelection.resource_uri);
			} catch (error) {
				this.$displayErrorMessage(this.$SVO.parseError(error));
			}
		}
	}
};
</script>
