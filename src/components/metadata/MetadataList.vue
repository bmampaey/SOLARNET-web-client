<template>
	<div>
		<b-overlay :show="paginator.loading" rounded="sm">
			<b-button-toolbar key-nav aria-label="Control table displayed rows and columns" class="mb-1">
				<b-button v-b-modal="tableSettingsModalId" size="sm" variant="outline-secondary" title="Change table display settings">Settings</b-button>
				<span class="button-toolbar-spacer"></span>
				<pagination :page-number="paginator.pageNumber" :page-count="paginator.pageCount" :aria-controls="tableId" size="sm" class="mb-0" @change="updatePageNumber"></pagination>
			</b-button-toolbar>
			<b-table
				:id="tableId"
				ref="metadataTable"
				:items="paginator.items"
				:fields="metadataTableFields"
				:caption="metadataTableCaption"
				primary-key="oid"
				select-mode="single"
				responsive
				small
				hover
				selectable
				@row-selected="showMetadataDetailModal"
			>
				<template #cell(checkbox)="data">
					<b-form-checkbox v-model="selection" :value="data.item" size="lg"></b-form-checkbox>
				</template>
				<template #cell(download_button)="data">
					<b-button :href="data.value" target="_blank" title="Download file" size="sm" variant="primary" :disabled="data.item.data_location.offline">
						<b-icon icon="download"></b-icon>
					</b-button>
				</template>
			</b-table>

			<b-button-toolbar key-nav aria-label="Actions on displayed and selected rows">
				<b-button :disabled="selectionEmpty" variant="primary" title="Select one or more metadata to create or update a data selection" @click="saveSelection"
					>Save selection ({{ selection.length }})</b-button
				>
				<b-button variant="primary" title="Create or update a data selection with all metadata" @click="saveAll">Save all</b-button>
				<b-button :disabled="selectionEmpty" title="Select one or more metadata to search for overlapping data" @click="searchOverlappingDatasets">Search overlapping</b-button>
			</b-button-toolbar>
		</b-overlay>

		<b-modal ref="metadataDetailModal" size="md" :title="metadataDetailModalTitle" hide-footer static lazy>
			<metadata-detail v-if="metadataDetailModalMetadata" :metadata="metadataDetailModalMetadata"></metadata-detail>
		</b-modal>

		<b-modal ref="overlappingDatasetsModal" size="full" :title="overlappingDatasetsModalTitle" hide-footer static lazy>
			<dataset :initial-search-filter="overlappingDatasetsModalSearchFilter"></dataset>
		</b-modal>

		<data-selection-save ref="dataSelectionSave"></data-selection-save>

		<table-settings-modal :default-settings="tableSettings" :modal-id="tableSettingsModalId" :aria-controls="tableId" @change="updateTableSettings"></table-settings-modal>
	</div>
</template>

<script>
import DatasetSearchFilter from '@/services/svo/DatasetSearchFilter';
import DataSelectionSave from '@/components/data_selection/DataSelectionSave';
import Dataset from '@/components/dataset/Dataset';
import Pagination from '@/components/globals/Pagination';
import TableSettingsModal, { TableSettings } from '@/components/globals/TableSettings';
import MetadataDetail from './MetadataDetail';
import { SVO_PAGINATION_OPTIONS } from '@/constants';

export default {
	name: 'MetadataList',
	components: {
		MetadataDetail,
		Dataset,
		DataSelectionSave,
		Pagination,
		TableSettingsModal
	},
	props: {
		dataset: { type: Object, required: true },
		searchParams: { type: URLSearchParams, required: true },
		tags: { type: Array, default: () => [] },
		keywords: { type: Array, default: () => [] },
		defaultColumns: { type: Array, required: true }
	},
	data: function() {
		let paginator = this.$SVO.getPaginator(this.dataset.metadata.resource_uri);
		let tableSettings = new TableSettings({
			pageSize: paginator.pageSize,
			ordering: paginator.ordering,
			columns: this.defaultColumns
		});
		return {
			tableId: this.$utils.getUniqueId(),
			paginator: paginator,
			selection: [],
			metadataDetailModalTitle: this.dataset.name,
			metadataDetailModalMetadata: null,
			overlappingDatasetsModalSearchFilter: new DatasetSearchFilter(),
			overlappingDatasetsModalTitle: 'Datasets',
			tableSettings: tableSettings,
			tableSettingsModalId: this.$utils.getUniqueId()
		};
	},
	computed: {
		metadataTableFields: function() {
			let tableFields = [
				{ key: 'checkbox', label: '' },
				{
					key: 'download_button',
					label: 'Download',
					formatter: (value, index, metadata) => (metadata.data_location.offline ? null : metadata.data_location.file_url)
				},
				...this.tableSettings.columns
			];
			if (this.tags.length) {
				tableFields.push({ key: 'tags', label: 'Tags', formatter: tags => tags.map(tag => tag.name).join(', ') });
			}
			return tableFields;
		},
		metadataTableCaption: function() {
			return this.paginator.items.length > 0 ? 'Click on any row to see data details' : 'No metadata correspond to your search criteria';
		},
		selectionEmpty: function() {
			return this.selection.length == 0;
		}
	},
	watch: {
		searchParams: {
			handler: 'updatePaginator',
			immediate: true
		},
		keywords: {
			handler: 'loadTableSettingsOptions',
			immediate: true
		}
	},
	methods: {
		updatePaginator: function(searchParams) {
			this.selection = [];
			try {
				this.paginator.searchParams = searchParams;
				this.paginator.loadPage(1);
			} catch (error) {
				this.$displayErrorMessage(this.$SVO.parseError(error));
			}
		},
		loadTableSettingsOptions: function() {
			this.tableSettings.pageSizeMinimum = SVO_PAGINATION_OPTIONS.MINIMUM_PAGESIZE;
			this.tableSettings.pageSizeMaximum = SVO_PAGINATION_OPTIONS.MAXIMUM_PAGESIZE;
			this.tableSettings.orderingOptions = this.defaultColumns.map(column => ({ text: column['label'], value: column['key'] }));
			this.tableSettings.columnOptions = this.defaultColumns.map(column => ({ text: column['label'], value: column }));

			// Avoid duplicating ordering and column options, the column key corresponds to the keyword name
			let defaultColumnsKeys = new Set(this.defaultColumns.map(column => column['key']));

			for (const keyword of this.keywords) {
				if (!defaultColumnsKeys.has(keyword['name'])) {
					defaultColumnsKeys.add(keyword['name']);
					this.tableSettings.columnOptions.push({
						text: keyword['verbose_name'],
						value: {
							label: keyword['verbose_name'],
							key: keyword['name'],
							headerTitle: keyword['description'],
							formatter: keyword['type'] == 'time (ISO 8601)' ? this.$utils.formatDate : undefined
						}
					});
					this.tableSettings.orderingOptions.push({
						text: keyword['verbose_name'],
						value: keyword['name']
					});
				}
			}
		},
		updatePageNumber: function(pageNumber) {
			this.paginator.loadPage(pageNumber);
		},
		updateTableSettings: function(settings) {
			if (this.paginator.pageSize != settings.pageSize || this.paginator.ordering != settings.ordering) {
				this.paginator.pageSize = settings.pageSize;
				this.paginator.ordering = settings.ordering;
				this.paginator.loadPage(1);
			}
			this.tableSettings = settings;
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
			this.selection.forEach(metadata => searchParams.append('oid__in', metadata.oid));
			this.$refs.dataSelectionSave.save(this.dataset, searchParams.toString());
		},
		saveAll: function() {
			this.$refs.dataSelectionSave.save(this.dataset, this.searchParams.toString());
		},
		searchOverlappingDatasets: function() {
			this.overlappingDatasetsModalTitle = `Datasets overlapping selected ${this.dataset.name} data`;
			this.overlappingDatasetsModalSearchFilter = new DatasetSearchFilter({
				dateRange: {
					min: new Date(Math.min(...this.selection.map(m => new Date(m.date_beg)))),
					max: new Date(Math.max(...this.selection.map(m => new Date(m.date_end))))
				},
				search: this.selection.map(m => `(date_beg__lte = ${m.date_end} and date_end__gte = ${m.date_beg})`).join(' or ')
			});
			this.$refs.overlappingDatasetsModal.show();
		}
	}
};
</script>
