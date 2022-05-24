<template>
	<b-form-group :label="label" class="mb-0">
		<b-form-row>
			<b-col>
				<datetime-input v-model="minValue" :label="minLabel" label-size="sm" class="range-input-size" @input="checkInput"></datetime-input>
			</b-col>
			<b-col>
				<datetime-input v-model="maxValue" :label="maxLabel" label-size="sm" :state="maxInputState" :invalid-feedback="maxInputFeedback" class="range-input-size" @input="checkInput"></datetime-input>
			</b-col>
		</b-form-row>
	</b-form-group>
</template>

<script>
export default {
	name: 'DatetimeRange',
	props: {
		value: {
			type: Object,
			default: () => ({ min: null, max: null })
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
		}
	},
	data() {
		return {
			minValue: this.value.min instanceof Date ? this.value.min : null,
			maxValue: this.value.max instanceof Date ? this.value.max : null,
			maxInputFeedback: `${this.maxLabel} must be larger than ${this.minLabel}`,
			maxInputState: null
		};
	},
	methods: {
		checkInput() {
			// Check that minValue is smaller than maxValue
			if (this.minValue && this.maxValue && this.minValue > this.maxValue) {
				this.maxInputState = false;
			} else {
				this.maxInputState = null;
			}
			this.$emit('input', { min: this.minValue, max: this.maxValue });
		}
	}
};
</script>
