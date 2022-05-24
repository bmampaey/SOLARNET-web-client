<template>
	<b-form-group
		:label-for="inputId"
		:label="label"
		:label-size="labelSize"
		:description="description"
		:state="combinedState"
		:valid-feedback="validFeedback"
		:invalid-feedback="combinedInvalidFeedback"
	>
		<b-input-group>
			<b-form-input :id="inputId" v-model="datetime" :state="combinedState" type="text" placeholder="YYYY-MM-DD hh:mm:ss" @input="updatePickers" @blur="updateLocalState"></b-form-input>
			<b-input-group-append>
				<b-form-datepicker v-model="date" button-only button-variant="outline-dark" :aria-controls="inputId" dropleft locale="en-US" @input="updateDatetime"></b-form-datepicker>
				<b-form-timepicker v-model="time" button-only button-variant="outline-dark" :aria-controls="inputId" dropleft show-seconds @input="updateDatetime"></b-form-timepicker>
			</b-input-group-append>
		</b-input-group>
	</b-form-group>
</template>

<script>
export default {
	name: 'DatetimeInput',
	props: {
		value: {
			type: Date,
			default: null
		},
		id: {
			type: String,
			default: null
		},
		label: {
			type: String,
			default: null
		},
		labelSize: {
			type: String,
			default: null
		},
		description: {
			type: String,
			default: null
		},
		validFeedback: {
			type: String,
			default: null
		},
		invalidFeedback: {
			type: String,
			default: null
		},
		state: {
			type: Boolean,
			default: null
		}
	},
	data() {
		return {
			date: this.value ? this.getDate(this.value) : null,
			time: this.value ? this.getTime(this.value) : '00:00:00',
			datetime: this.$utils.formatDate(this.value),
			localState: null,
			inputId: this.id || this.$utils.getUniqueId()
		};
	},
	computed: {
		combinedInvalidFeedback() {
			return this.state === false ? this.invalidFeedback : 'Date is not valid';
		},
		combinedState() {
			// If one of them is null the other take precedence
			// Else they both must be true to be true
			if (this.state == null) {
				return this.localState;
			} else if (this.localState == null) {
				return this.state;
			} else {
				return this.state && this.localState;
			}
		}
	},
	methods: {
		updateDatetime() {
			if (this.date) {
				this.datetime = this.date;
				if (this.time) {
					this.datetime += ' ' + this.time;
				}
			}
			this.updateLocalState();
			this.$emit('input', this.$utils.parseDate(this.datetime));
		},
		updatePickers() {
			let datetime = this.$utils.parseDate(this.datetime);
			if (datetime) {
				this.date = this.getDate(datetime);
				this.time = this.getTime(datetime);
			}
			this.$emit('input', datetime);
		},
		updateLocalState() {
			if (this.datetime && this.$utils.parseDate(this.datetime) == null) {
				this.localState = false;
			} else {
				this.localState = null;
			}
		},
		getDate(datetime) {
			return datetime.toISOString().substring(0, 10);
		},
		getTime(datetime) {
			return datetime.toISOString().substring(11, 19);
		}
	}
};
</script>
