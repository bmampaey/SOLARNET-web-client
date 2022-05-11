<template>
	<b-form-group :label="label">
		<b-form-row>
			<b-col>
				<b-form-group :label="minLabel" :label-for="minInputId" label-size="sm" :state="minInputState" :invalid-feedback="minInputFeedback">
					<b-input-group :append="unit">
						<b-form-input :id="minInputId" v-model="minValue" :state="minInputState" no-wheel type="number" number autocomplete="off" @change="checkInput"></b-form-input>
					</b-input-group>
				</b-form-group>
			</b-col>

			<b-col>
				<b-form-group :label="maxLabel" :label-for="maxInputId" label-size="sm" :state="maxInputState" :invalid-feedback="maxInputFeedback">
					<b-input-group :append="unit">
						<b-form-input :id="maxInputId" v-model="maxValue" :state="maxInputState" no-wheel type="number" number autocomplete="off" @change="checkInput"></b-form-input>
					</b-input-group>
				</b-form-group>
			</b-col>
		</b-form-row>
	</b-form-group>
</template>

<script>
export default {
	props: {
		value: {
			type: Object,
			required: true
		},
		label: {
			type: String,
			required: true
		},
		minLabel: {
			type: String,
			default: 'Min'
		},
		maxLabel: {
			type: String,
			default: 'Max'
		},
		unit: {
			type: String,
			default: null
		}
	},
	data: function() {
		return {
			minValue: null,
			maxValue: null,
			minInputId: this.$utils.getUniqueId(),
			maxInputId: this.$utils.getUniqueId(),
			minInputFeedback: '',
			maxInputFeedback: '',
			minInputState: null,
			maxInputState: null
		};
	},
	methods: {
		checkInput: function() {
			// Check that minValue < maxValue
			if (typeof this.minValue == 'number' && typeof this.maxValue == 'number' && this.minValue > this.maxValue) {
				this.maxInputState = false;
				this.maxInputFeedback = `${this.maxLabel} must be larger than ${this.minLabel}`;
			} else {
				this.maxInputState = null;
			}
			this.$emit('input', { min: this.minValue, max: this.maxValue });
		}
	}
};
</script>
