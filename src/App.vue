<template>
	<div class="relative md:fixed top-0 right-0  md:right-10 text-white bg-gray-600 p-2 md:p-4 text-center">
		<a href="https://github.com/xamthor/gituser" target="_blank">GitHub Repo</a>
	</div>
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