<template>
	<b-form-group :label="label">
		<b-form-row>
			<b-col>
				<b-form-group :label="minLabel" :label-for="minInputId" label-size="sm" :state="minInputState" :invalid-feedback="minInputFeedback">
					<b-input-group>
						<b-form-input :id="minInputId" v-model="minValue" :state="minInputState" lazy type="text" placeholder="YYYY-MM-DD" autocomplete="off" @change="checkInput"></b-form-input>
						<b-input-group-append>
							<b-form-datepicker
								v-model="minValue"
								button-only
								:min="minDate"
								:hide-header="hideHeader"
								:start-weekday="startWeekday"
								:show-decade-nav="showDecadeNav"
								:locale="locale"
								:aria-controls="minInputId"
								@input="checkInput"
							></b-form-datepicker>
						</b-input-group-append>
					</b-input-group>
				</b-form-group>
			</b-col>

			<b-col>
				<b-form-group :label="maxLabel" :label-for="maxInputId" label-size="sm" :state="maxInputState" :invalid-feedback="maxInputFeedback">
					<b-input-group>
						<b-form-input :id="maxInputId" v-model="maxValue" :state="maxInputState" lazy type="text" placeholder="YYYY-MM-DD" autocomplete="off" @change="checkInput"></b-form-input>
						<b-input-group-append>
							<b-form-datepicker
								v-model="maxValue"
								button-only
								:max="maxDate"
								:hide-header="hideHeader"
								:start-weekday="startWeekday"
								:show-decade-nav="showDecadeNav"
								:locale="locale"
								:aria-controls="maxInputId"
								@input="checkInput"
							></b-form-datepicker>
						</b-input-group-append>
					</b-input-group>
				</b-form-group>
			</b-col>
		</b-form-row>
	</b-form-group>
</template>

<script>
let baseInputIdCounter = 0;

export default {
	props: {
		value: {
			type: Object,
			required: true
		},
		inputId: {
			type: String,
			default: null
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
		minDate: {
			type: [String, Date],
			default: null
		},
		maxDate: {
			type: [String, Date],
			default: null
		}
	},
	data: function() {
		// if inputId has not been specified explicitly, we generate one with an increasing counter to avoid duplicates
		let baseInputId = this.inputId;
		if (baseInputId == null) {
			baseInputId = 'base-datetime-range-' + baseInputIdCounter.toString();
			baseInputIdCounter += 1;
		}
		return {
			minValue: this.value.min instanceof Date ? this.value.min.toISOString().substring(0, 10) : '',
			maxValue: this.value.max instanceof Date ? this.value.max.toISOString().substring(0, 10) : '',
			minInputId: baseInputId + '-min',
			maxInputId: baseInputId + '-max',
			minInputFeedback: '',
			maxInputFeedback: '',
			minInputState: null,
			maxInputState: null,
			hideHeader: true,
			startWeekday: 1, // Start calendar on monday
			showDecadeNav: true, // Add decades arrow navigation
			locale: 'en'
		};
	},
	methods: {
		checkInput: function() {
			// Check that the minValue is a valid date
			let minDate = this.$utils.parseDate(this.minValue);
			if (this.minValue && minDate == null) {
				this.minInputState = false;
				this.minInputFeedback = 'Invalid date, format is YYYY-MM-DD';
			} else {
				this.minInputState = null;
			}
			// Check that the maxValue is a valid date
			let maxDate = this.$utils.parseDate(this.maxValue);
			if (this.maxValue && maxDate == null) {
				this.maxInputState = false;
				this.maxInputFeedback = 'Invalid date, format is YYYY-MM-DD';
			} else {
				this.maxInputState = null;
			}
			// Check that minValue < maxValue
			if (this.minInputState != false && this.maxInputState != false) {
				if (minDate != null && maxDate != null && minDate > maxDate) {
					this.maxInputState = false;
					this.maxInputFeedback = `${this.maxLabel} must be larger than ${this.minLabel}`;
				}
			}
			this.$emit('input', { min: minDate, max: maxDate });
		}
	}
};
</script>
