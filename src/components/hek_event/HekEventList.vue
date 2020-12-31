<template>
	<div>
		<b-overlay :show="eventPaginator.loading" rounded="sm">
			<b-table
				:id="eventPaginator.ariaControl"
				ref="eventTable"
				:items="eventPaginator.items"
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
					<b-form-checkbox v-model="selectedEvents" :value="data.item" size="lg"></b-form-checkbox>
				</template>
			</b-table>

			<b-button-toolbar key-nav>
				<b-button :disabled="selectedEventsEmpty" variant="primary" title="Select one or more event to search for overlapping data" @click="showOverlappingDatasetModal"
					>Search overlapping ({{ selectedEvents.length }})</b-button
				>
				<span class="button-toolbar-spacer"></span>
				<b-pagination
					v-model="eventPaginator.pageNumber"
					:total-rows="eventPaginator.totalRows"
					:per-page="eventPaginator.pageSize"
					:aria-controls="eventPaginator.ariaControl"
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
import Paginator from '@/services/hek/Paginator';
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
			eventPaginator: new Paginator(this.$HEK),
			selectedEvents: [],
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
			return this.eventPaginator.items.length > 0 ? 'Click on any row to see the event details' : 'No event correspond to your search criteria';
		},
		selectedEventsEmpty: function() {
			return this.selectedEvents.length == 0;
		}
	},
	watch: {
		searchFilter: {
			handler: 'updateEventPaginator',
			immediate: true
		}
	},
	methods: {
		updateEventPaginator: function(searchFilter) {
			this.eventPaginator.searchParams = searchFilter.getSearchParams();
			try {
				this.eventPaginator.loadPage(1);
				this.selectedEvents = [];
			} catch (error) {
				this.$displayErrorMessage(this.$HEK.parseError(error));
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
			let selectedEventTypes = new Set(this.selectedEvents.map(event => event.type));
			this.overlappingDatasetsModalTitle = `Datasets overlapping selected events: ${Array.from(selectedEventTypes).join(', ')}`;
			this.overlappingDatasetsModalSearchFilter = new DatasetSearchFilter({
				dateRange: {
					min: new Date(Math.min(...this.selectedEvents.map(e => e.startTime))),
					max: new Date(Math.max(...this.selectedEvents.map(e => e.endTime)))
				},
				search: this.selectedEvents.map(e => `(date_beg__lt = ${e.endTime.toISOString()} and date_end__gt = ${e.startTime.toISOString()})`).join(' or ')
			});

			this.$refs.overlappingDatasetsModal.show();
		}
	}
};
</script>
