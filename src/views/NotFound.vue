<template>
	<b-container fluid>
		<b-card header="Error" class="w-50 mx-auto mt-5">
			<b-card-text>The page you are looking for was not found. Go <b-link :to="{ name: 'Root' }">home</b-link></b-card-text>
		</b-card>
	</b-container>
</template>

<script>
export default {
	name: 'NotFound'
};
</script>
