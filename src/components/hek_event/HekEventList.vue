<template>
	<div>
		<b-overlay :show="paginator.loading" rounded="sm">
			<b-button-toolbar key-nav aria-label="Control table displayed rows and columns" class="mb-1">
				<b-button v-b-modal="tableSettingsModalId" size="sm" variant="outline-secondary" title="Change table display settings">Settings</b-button>
				<span class="button-toolbar-spacer"></span>
				<pagination
					:page-number="paginator.pageNumber"
					:page-count="paginator.pageCount"
					:page-jump="1"
					:page-displayed="3"
					:aria-controls="tableId"
					class="mb-0"
					@change="updatePageNumber"
				></pagination>
			</b-button-toolbar>
			<b-table
				:id="tableId"
				ref="eventTable"
				:items="paginator.items"
				:fields="eventTableFields"
				:caption="eventTableCaption"
				primary-key="id"
				select-mode="single"
				responsive
				small
				hover
				selectable
				@row-selected="showEventDetailModal"
			>
				<template #cell(checkbox)="data">
					<b-form-checkbox v-model="selection" :value="data.item" size="lg"></b-form-checkbox>
				</template>
			</b-table>

			<b-button-toolbar key-nav aria-label="Actions on displayed and selected rows">
				<b-button :disabled="selectionEmpty" variant="primary" title="Select one or more event to search for overlapping data" @click="showOverlappingDatasetModal"
					>Search overlapping ({{ selection.length }})</b-button
				>
			</b-button-toolbar>
		</b-overlay>

		<b-modal ref="eventDetailModal" size="md" :title="eventDetailModalTitle" hide-footer static lazy>
			<hek-event-detail v-if="eventDetailModalEvent" :event="eventDetailModalEvent"></hek-event-detail>
		</b-modal>

		<b-modal ref="overlappingDatasetsModal" size="full" :title="overlappingDatasetsModalTitle" hide-footer static lazy>
			<dataset :initial-search-filter="overlappingDatasetsModalSearchFilter"></dataset>
		</b-modal>

		<table-settings-modal :default-settings="tableSettings" :modal-id="tableSettingsModalId" :aria-controls="tableId" @change="updateTableSettings"></table-settings-modal>
	</div>
</template>

<script>
import HekEventSearchFilter from '@/services/hek/EventSearchFilter';
import DatasetSearchFilter from '@/services/svo/DatasetSearchFilter';
import Dataset from '@/components/dataset/Dataset';
import Pagination from '@/components/globals/Pagination';
import TableSettingsModal, { TableSettings } from '@/components/globals/TableSettings';
import HekEventDetail from './HekEventDetail';
import { HEK_PAGINATION_OPTIONS } from '@/constants';

export default {
	name: 'HekEventList',
	components: {
		HekEventDetail,
		Dataset,
		Pagination,
		TableSettingsModal
	},
	props: {
		searchFilter: { type: HekEventSearchFilter, required: true }
	},
	data: function() {
		let paginator = this.$HEK.getPaginator();
		let tableSettings = new TableSettings({
			pageSize: paginator.pageSize,
			pageSizeMinimum: HEK_PAGINATION_OPTIONS.MINIMUM_PAGESIZE,
			pageSizeMaximum: HEK_PAGINATION_OPTIONS.MAXIMUM_PAGESIZE,
			ordering: paginator.ordering,
			orderingOptions: [
				{ value: 'event_type', text: 'Event type' },
				{ value: 'startTime', text: 'Start time' },
				{ value: 'endTime', text: 'End time' },
				{ value: 'frm_name', text: 'Method' }
			]
		});
		return {
			tableId: this.$utils.getUniqueId(),
			paginator: paginator,
			selection: [],
			eventDetailModalEvent: null,
			eventDetailModalTitle: '',
			overlappingDatasetsModalSearchFilter: new DatasetSearchFilter(),
			overlappingDatasetsModalTitle: 'Datasets',
			tableSettings: tableSettings,
			tableSettingsModalId: this.$utils.getUniqueId()
		};
	},
	computed: {
		eventTableFields: function() {
			return [
				{ key: 'checkbox', label: '' },
				{ key: 'type', label: 'Type' },
				{ key: 'startTime', label: 'Start time', formatter: this.$utils.formatDate },
				{ key: 'endTime', label: 'End time', formatter: this.$utils.formatDate },
				{ key: 'frm_name', label: 'Method' }
			];
		},
		eventTableCaption: function() {
			return this.paginator.items.length > 0 ? 'Click on any row to see the event details' : 'No event correspond to your search criteria';
		},
		selectionEmpty: function() {
			return this.selection.length == 0;
		}
	},
	watch: {
		searchFilter: {
			handler: 'updatePaginator',
			immediate: true
		}
	},
	methods: {
		updatePaginator: function(searchFilter) {
			this.paginator.searchParams = searchFilter.getSearchParams();
			try {
				this.paginator.loadPage(1);
				this.selection = [];
			} catch (error) {
				this.$displayErrorMessage(error);
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
		showEventDetailModal: function(selectedRows) {
			// selectedRows is always a list, but it will be empty when clearing selected rows
			if (selectedRows.length > 0) {
				this.eventDetailModalEvent = selectedRows[0];
				this.eventDetailModalTitle = this.eventDetailModalEvent.type;
				// Clear the selection so that the row can be selected again
				this.$refs.eventTable.clearSelected();
				// Make sure the component is rendered before showing the modal
				this.$nextTick(function() {
					this.$refs.eventDetailModal.show();
				});
			}
		},
		showOverlappingDatasetModal: function() {
			let selectedEventTypes = new Set(this.selection.map(event => event.type));
			this.overlappingDatasetsModalTitle = `Datasets overlapping selected ${Array.from(selectedEventTypes).join(', ')} events`;
			this.overlappingDatasetsModalSearchFilter = new DatasetSearchFilter({
				dateRange: {
					min: new Date(Math.min(...this.selection.map(e => e.startTime))),
					max: new Date(Math.max(...this.selection.map(e => e.endTime)))
				},
				search: this.selection.map(e => `(date_beg__lte = ${e.endTime.toISOString()} and date_end__gte = ${e.startTime.toISOString()})`).join(' or ')
			});

			this.$refs.overlappingDatasetsModal.show();
		}
	}
};
</script>
