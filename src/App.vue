<template>
	<h1 class="text-center text-lg my-4 text-white">GitHub User Activity Feed</h1>
	<div class="mx-2">
		<Feed/>
	</div>
</template>

<script>
	import Feed from './components/Feed.vue'

	export default {
		name: 'App',
		components: {
			Feed
		}
	}
</script>
<style>
	html{
		@apply bg-gray-900
	}
</style>