<template>
	<!--Use a modal, where the OK button will update the settings, and the cancel button is changed to a reset button to reset the settings to their initial value (note that the default action is to close the modal so we add the prevent to avoid this)-->
	<b-modal :id="modalId" :aria-controls="ariaControls" title="Table display settings" cancel-title="Reset" @show="initialiseSettings" @ok="updateSettings" @cancel.prevent="resetSettings">
		<b-form-group :label-for="pageSizeSelectorId" label="Number of rows to display">
			<b-form-spinbutton :id="pageSizeSelectorId" v-model="settings.pageSize" :min="settings.pageSizeMinimum" :max="settings.pageSizeMaximum" :step="10" size="sm"></b-form-spinbutton>
		</b-form-group>
		<b-form-group v-if="columnDisplayOptions.length" v-slot="{ ariaDescribedby }" :label-for="columnDisplaySelectorId" label="Display/hide columns">
			<v-select :id="columnDisplaySelectorId" v-model="settings.columnDisplay" multiple :options="columnDisplayOptions" :reduce="option => option.key" :aria-describedby="ariaDescribedby"></v-select>
		</b-form-group>

		<b-form-group v-if="tableSortingOptions.length" :label-for="tableSortingSelectorId" label="Select sorting column">
			<b-input-group>
				<b-form-select :id="tableSortingSelectorId" v-model="settings.tableSorting" :options="tableSortingOptions"></b-form-select>
				<b-input-group-append>
					<b-button-group>
						<b-button :pressed="!settings.tableSortingDescending" aria-label="Sort ascending" title="Sort ascending" variant="outline-secondary" @click="settings.tableSortingDescending = false">
							<b-icon icon="sort-down-alt" aria-hidden="true"></b-icon>
						</b-button>
						<b-button :pressed="settings.tableSortingDescending" aria-label="Sort descending" title="Sort descending" variant="outline-secondary" @click="settings.tableSortingDescending = true">
							<b-icon icon="sort-up" aria-hidden="true"></b-icon>
						</b-button>
					</b-button-group>
				</b-input-group-append>
			</b-input-group>
		</b-form-group>
	</b-modal>
</template>

<script>
export class TableSettings {
	pageSize = null;
	pageSizeMinimum = 10;
	pageSizeMaximum = null;
	pageSizeStep = 10;
	tableSorting = null;
	tableSortingDescending = true;
	tableSortingOptions = [];
	columnDisplay = [];
	columnDisplayOptions = [];

	constructor(settings) {
		if (settings) {
			if (Number.isInteger(settings.pageSize)) {
				this.pageSize = settings.pageSize;
			}
			
			if (Number.isInteger(settings.pageSizeMinimum)) {
				this.minimum = settings.pageSizeMinimum;
			}

			if (Number.isInteger(settings.pageSizeMaximum)) {
				this.maximum = settings.pageSizeMaximum;
			}

			if (Number.isInteger(settings.pageSizeStep)) {
				this.step = settings.pageSizeStep;
			}

			this.tableSorting = settings.tableSorting;
			this.tableSortingDescending = settings.tableSortingDescending; 

			if (Array.isArray(settings.tableSortingOptions)) {
				this.tableSortingOptions = [...settings.tableSortingOptions];
			}

			if (Array.isArray(settings.columnDisplay)) {
				this.columnDisplay = [...settings.columnDisplay];
			}
			
			if (Array.isArray(settings.columnDisplayOptions)) {
				this.columnDisplayOptions = [...settings.columnDisplayOptions];
			}

		}
	}
}

export default {
	name: 'TableSettingsModal',
	props: {
		defaultSettings: {
			type: TableSettings,
			required: true
		},
		modalId: {
			type: String,
			default: null
		},
		ariaControls: {
			type: String,
			default: null
		}
	},
	data() {
		return {
			settings: new TableSettings(),
			pageSizeSelectorId: this.$utils.getUniqueId(),
			tableSortingSelectorId: this.$utils.getUniqueId(),
			columnDisplaySelectorId: this.$utils.getUniqueId(),
			columnFilter: '',
			columnFilterId: this.$utils.getUniqueId(),
		};
	},
	computed: {
		columnDisplayOptions() {
			let columnDisplayOptions = [...this.defaultSettings.columnDisplayOptions];

			// Avoid duplicating column options by only adding the ones that are not in the default
			let columnsKeys = new Set(this.defaultSettings.columnDisplayOptions.map(column => column['key']));

			for (const column of this.defaultSettings.columnDisplayOptions) {
				if (!columnsKeys.has(column['key'])) {
					columnsKeys.add(column['key']);
					columnDisplayOptions.push(column);
				}
			}
			return columnDisplayOptions;
		},
		tableSortingOptions() {
			let tableSortingOptions = this.settings.tableSortingOptions.map((column) => ({text: column['label'], value: column['key']}));
			
			// Add an empty option to allow not selecting anything
			if (tableSortingOptions.length)
				tableSortingOptions.unshift({text: '', value: null});
			
			return tableSortingOptions;
		}
	},
	methods: {
		initialiseSettings() {
			// Create a copy of the settings to avoid changing the table settings of the parent until OK is pressed
			this.settings = new TableSettings(this.defaultSettings);
		},
		updateSettings() {
			this.$emit('change', this.settings);
		},
		resetSettings() {
			// Restore the settings to the defaults
			this.settings = new TableSettings(this.defaultSettings);
		},
		clearColumnFilter() {
			this.columnFilter = '';
		}
	}
};
</script>
