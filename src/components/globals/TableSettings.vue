<template>
	<!--Use a modal, where the OK button will update the settings, and the cancel button is changed to a reset button to reset the settings to their initial value (note that the default action is to close the modal so we add the prevent to avoid this)-->
	<b-modal :id="modalId" :aria-controls="ariaControls" size="sm" title="Table display settings" cancel-title="Reset" @show="initialiseSettings" @ok="updateSettings" @cancel.prevent="resetSettings">
		<b-form-group :label-for="pageSizeSelectorId" label="Number of rows to display">
			<b-form-spinbutton :id="pageSizeSelectorId" v-model="settings.pageSize" :min="settings.pageSizeMinimum" :max="settings.pageSizeMaximum" :step="10" size="sm"></b-form-spinbutton>
		</b-form-group>
		<b-form-group v-if="showOrderingSelector" :label-for="orderingSelectorId" label="Select sorting column">
			<b-form-select :id="orderingSelectorId" v-model="settings.ordering" :options="settings.orderingOptions"></b-form-select>
		</b-form-group>
		<b-form-group v-if="showColumnSelector" v-slot="{ ariaDescribedby }" class="column-selector" label="Display/hide columns">
			<b-form-checkbox-group v-model="settings.columns" :options="settings.columnOptions" :aria-describedby="ariaDescribedby" switches stacked></b-form-checkbox-group>
		</b-form-group>
	</b-modal>
</template>

<script>
export class TableSettings {
	pageSize = null;
	pageSizeMinimum = 10;
	pageSizeMaximum = null;
	pageSizeStep = 10;

	ordering = null;
	orderingOptions = [];

	columns = [];
	columnOptions = [];

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

			this.ordering = settings.ordering;
			if (Array.isArray(settings.orderingOptions)) {
				this.orderingOptions = [...settings.orderingOptions];
			}

			if (Array.isArray(settings.columns)) {
				this.columns = [...settings.columns];
			}
			if (Array.isArray(settings.columnOptions)) {
				this.columnOptions = [...settings.columnOptions];
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
			orderingSelectorId: this.$utils.getUniqueId()
		};
	},
	computed: {
		showOrderingSelector() {
			return this.settings.orderingOptions?.length;
		},
		showColumnSelector() {
			return this.settings.columnOptions?.length;
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
		}
	}
};
</script>

<style scoped>
/* Limit the height of the column selector */
.column-selector {
	max-height: 10rem;
	overflow: auto;
}
</style>
