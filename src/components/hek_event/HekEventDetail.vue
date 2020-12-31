<template>
	<div>
		<b-img center fluid :src="event.thumbnailUrl" alt="Event thumbnail"></b-img>
		<dl class="dl-horizontal">
			<dt>Start time</dt>
			<dd>{{ $utils.formatDate(event.startTime) }}</dd>
			<dt>End time</dt>
			<dd>{{ $utils.formatDate(event.endTime) }}</dd>
			<dt>Recognition method</dt>
			<dd>{{ event.frm_name }}</dd>
			<dt>Identifier name</dt>
			<dd>{{ event.frm_identifier }}</dd>
		</dl>
		<a :href="event.detailUrl" target="_blank">See more details</a>
	</div>
</template>

<script>
export default {
	name: 'HekEventDetail',
	props: {
		event: { type: Object, required: true }
	}
};
</script>
