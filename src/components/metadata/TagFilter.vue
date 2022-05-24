<template>
	<b-form-group label="Tags" :label-for="inputId">
		<b-form-select :id="inputId" :value="value" :options="tagOptions" multiple @input="onInput"></b-form-select>
	</b-form-group>
</template>

<script>
export default {
	name: 'TagFilter',
	props: {
		value: { type: Array, required: true },
		tags: { type: Array, required: true }
	},
	data() {
		return {
			inputId: this.$utils.getUniqueId()
		};
	},
	computed: {
		tagOptions() {
			return this.tags.map(tag => ({ value: tag.name, text: tag.name }));
		}
	},
	methods: {
		onInput(value) {
			this.$emit('input', value);
		}
	}
};
</script>
