<template>
	<div>
		<b-overlay :show="metadataPaginator.loading" rounded="sm">
			<b-table
				:id="metadataPaginator.ariaControl"
				ref="metadataTable"
				:items="metadataPaginator.items"
				:fields="metadataTableFields"
				:caption="metadataTableCaption"
				primary-key="oid"
				select-mode="single"
				small
				hover
				selectable
				@row-selected="showMetadataDetailModal"
			>
				<template #cell(checkbox)="data">
					<b-form-checkbox v-model="selectedMetadata" :value="data.item" size="lg"></b-form-checkbox>
				</template>
				<template #cell(download_button)="data">
					<b-button :href="data.value" target="_blank" title="Download file" size="sm" variant="primary" :disabled="data.item.data_location.offline">
						<b-icon icon="download"></b-icon>
					</b-button>
				</template>
			</b-table>

			<b-button-toolbar key-nav>
				<b-button :disabled="selectedMetadataEmpty" variant="primary" title="Select one or more metadata to create or update a data selection" @click="saveSelection"
					>Save selection ({{ selectedMetadata.length }})</b-button
				>
				<b-button variant="primary" title="Create or update a data selection with all metadata" @click="saveAll">Save all</b-button>
				<b-button :disabled="selectedMetadataEmpty" title="Select one or more metadata to search for overlapping data" @click="searchOverlappingDatasets">Search overlapping</b-button>
				<span class="button-toolbar-spacer"></span>
				<b-pagination
					v-model="metadataPaginator.pageNumber"
					:total-rows="metadataPaginator.totalRows"
					:per-page="metadataPaginator.pageSize"
					:aria-controls="metadataPaginator.ariaControl"
					limit="5"
					class="mb-0"
				></b-pagination>
			</b-button-toolbar>
		</b-overlay>

		<b-modal ref="metadataDetailModal" size="md" :title="metadataDetailModalTitle" hide-footer static lazy>
			<metadata-detail v-if="metadataDetailModalMetadata" :metadata="metadataDetailModalMetadata"></metadata-detail>
		</b-modal>

		<b-modal ref="overlappingDatasetsModal" size="xl" :title="overlappingDatasetsModalTitle" hide-footer static lazy>
			<dataset :initial-search-filter="overlappingDatasetsModalSearchFilter"></dataset>
		</b-modal>

		<data-selection-save ref="dataSelectionSave"></data-selection-save>
	</div>
</template>

<script>
import DatasetSearchFilter from '@/services/svo/DatasetSearchFilter';
import DataSelectionSave from '@/components/data_selection/DataSelectionSave';
import Dataset from '@/components/dataset/Dataset';
import MetadataDetail from './MetadataDetail';

export default {
	name: 'MetadataList',
	components: {
		MetadataDetail,
		Dataset,
		DataSelectionSave
	},
	props: {
		dataset: { type: Object, required: true },
		searchParams: { type: URLSearchParams, required: true },
		columns: { type: Array, required: true }
	},
	data: function() {
		return {
			metadataPaginator: this.$SVO.getPaginator(this.dataset.metadata.resource_uri),
			selectedMetadata: [],
			metadataDetailModalTitle: this.dataset.name,
			metadataDetailModalMetadata: null,
			overlappingDatasetsModalSearchFilter: new DatasetSearchFilter(),
			overlappingDatasetsModalTitle: 'Datasets'
		};
	},
	computed: {
		metadataTableFields: function() {
			return [
				{ key: 'checkbox', label: '' },
				{
					key: 'download_button',
					label: 'Download',
					formatter: (value, index, metadata) => (metadata.data_location.offline ? null : metadata.data_location.file_url)
				},
				...this.columns,
				{ key: 'tags', label: 'Tags', formatter: tags => tags.map(tag => tag.name).join(', ') }
			];
		},
		metadataTableCaption: function() {
			return this.metadataPaginator.items.length > 0 ? 'Click on any row to see data details' : 'No metadata correspond to your search criteria';
		},
		selectedMetadataEmpty: function() {
			return this.selectedMetadata.length == 0;
		}
	},
	watch: {
		searchParams: {
			handler: 'updateMetadataPaginator',
			immediate: true
		}
	},
	methods: {
		updateMetadataPaginator: function(searchParams) {
			this.selectedMetadata = [];
			try {
				this.metadataPaginator.searchParams = searchParams;
				this.metadataPaginator.loadPage(1);
			} catch (error) {
				this.$displayErrorMessage(this.$SVO.parseError(error));
			}
		},
		showMetadataDetailModal: function(selectedRows) {
			// selectedRows is always a list, but it will be empty when clearing selected rows
			if (selectedRows.length > 0) {
				this.metadataDetailModalMetadata = selectedRows[0];
				// Clear the selection so that the row can be selected again
				this.$refs.metadataTable.clearSelected();
				// Make sure the component is rendered before calling show
				this.$nextTick(function() {
					this.$refs.metadataDetailModal.show();
				});
			}
		},
		saveSelection: function() {
			let searchParams = new URLSearchParams();
			this.selectedMetadata.forEach(metadata => searchParams.append('oid__in', metadata.oid));
			this.$refs.dataSelectionSave.save(this.dataset, searchParams.toString());
		},
		saveAll: function() {
			this.$refs.dataSelectionSave.save(this.dataset, this.searchParams.toString());
		},
		searchOverlappingDatasets: function() {
			this.overlappingDatasetsModalTitle = `Datasets overlapping selected ${this.dataset.name} data`;
			this.overlappingDatasetsModalSearchFilter = new DatasetSearchFilter({
				dateRange: {
					min: new Date(Math.min(...this.selectedMetadata.map(m => new Date(m.date_beg)))),
					max: new Date(Math.max(...this.selectedMetadata.map(m => new Date(m.date_end))))
				},
				search: this.selectedMetadata.map(m => `(date_beg__lt = ${m.date_end} and date_end__gt = ${m.date_beg})`).join(' or ')
			});
			this.$refs.overlappingDatasetsModal.show();
		}
	}
};
</script>
