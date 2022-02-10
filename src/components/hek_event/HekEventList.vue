<template>
	<div>
		<b-overlay :show="paginator.loading" rounded="sm">
			<b-table
				:id="paginator.ariaControl"
				ref="eventTable"
				:items="paginator.items"
				:fields="eventTableFields"
				:caption="eventTableCaption"
				primary-key="id"
				select-mode="single"
				small
				hover
				selectable
				@row-selected="showEventDetailModal"
			>
				<template #cell(checkbox)="data">
					<b-form-checkbox v-model="selection" :value="data.item" size="lg"></b-form-checkbox>
				</template>
			</b-table>

			<b-button-toolbar key-nav>
				<b-button :disabled="selectionEmpty" variant="primary" title="Select one or more event to search for overlapping data" @click="showOverlappingDatasetModal"
					>Search overlapping ({{ selection.length }})</b-button
				>
				<span class="button-toolbar-spacer"></span>
				<b-pagination
					v-model="paginator.pageNumber"
					:total-rows="paginator.totalRows"
					:per-page="paginator.pageSize"
					:aria-controls="paginator.ariaControl"
					limit="3"
					class="mb-0"
					hide-goto-end-buttons
				></b-pagination>
			</b-button-toolbar>
		</b-overlay>

		<b-modal ref="eventDetailModal" size="md" :title="eventDetailModalTitle" hide-footer static lazy>
			<hek-event-detail v-if="eventDetailModalEvent" :event="eventDetailModalEvent"></hek-event-detail>
		</b-modal>

		<b-modal ref="overlappingDatasetsModal" size="xl" :title="overlappingDatasetsModalTitle" hide-footer static lazy>
			<dataset :initial-search-filter="overlappingDatasetsModalSearchFilter"></dataset>
		</b-modal>
	</div>
</template>

<script>
import HekEventSearchFilter from '@/services/hek/EventSearchFilter';
import DatasetSearchFilter from '@/services/svo/DatasetSearchFilter';
import Dataset from '@/components/dataset/Dataset';
import HekEventDetail from './HekEventDetail';

export default {
	name: 'HekEventList',
	components: {
		HekEventDetail,
		Dataset
	},
	props: {
		searchFilter: { type: HekEventSearchFilter, required: true }
	},
	data: function() {
		return {
			paginator: this.$HEK.getPaginator(),
			selection: [],
			eventDetailModalEvent: null,
			eventDetailModalTitle: '',
			overlappingDatasetsModalSearchFilter: new DatasetSearchFilter(),
			overlappingDatasetsModalTitle: 'Datasets'
		};
	},
	computed: {
		eventTableFields: function() {
			return [
				{ key: 'checkbox', label: '' },
				{ key: 'type', label: 'Type' },
				{ key: 'startTime', label: 'Start time', formatter: this.$utils.formatDate },
				{ key: 'endTime', label: 'End time', formatter: this.$utils.formatDate }
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
