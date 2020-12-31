<template>
	<div>
		<b-modal ref="dataSelectionSaveModal" size="md" title="Save data selection" ok-only ok-variant="success" :hide-footer="!dataSelection" @hidden="resetModal">
			<template v-if="!dataSelection">
				<b-overlay :show="showOverlay" rounded="sm">
					<b-form @submit.prevent="saveDataSelection">
						<b-form-group label="Description" label-for="data-selection-description" description="Optional description of the data selection">
							<b-form-textarea id="data-selection-description" v-model="description" lazy></b-form-textarea>
						</b-form-group>
						<b-button type="submit" variant="primary">Save</b-button>
					</b-form>
				</b-overlay>
				<p class="text-muted mt-3">
					Note: data selections are dynamic, if metadata corresponding to your selection is added, updated or deleted, the selection will be affected
				</p>
			</template>
			<template v-else> Your selection was saved successfully, and is available under the menu <b-link :to="{ name: 'DataSelections' }">"Data selections"</b-link> </template>
		</b-modal>
	</div>
</template>

<script>
// TODO add error management in form
export default {
	name: 'DataSelectionSave',
	data: function() {
		return {
			showOverlay: false,
			description: null,
			dataSelection: null
		};
	},
	methods: {
		save: function(dataset, query_string) {
			// Method called from parent component to save a data selection
			this.dataset = dataset;
			this.query_string = query_string;
			this.$refs.dataSelectionSaveModal.show();
		},
		saveDataSelection: async function() {
			this.showOverlay = true;
			try {
				this.dataSelection = await this.$SVO.data_selection.create({ description: this.description, dataset: this.dataset.resource_uri, query_string: this.query_string });
			} catch (error) {
				console.debug('What to do incase of error', error);
			}
			this.showOverlay = false;
		},
		resetModal: function() {
			// Reset the data for the next time the modal is opened
			this.showOverlay = false;
			this.description = null;
			this.dataSelection = null;
		}
	}
};
</script>
