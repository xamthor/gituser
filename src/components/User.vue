<template>
	<div class="text-center bg-white rounded-lg shadow divide-y divide-gray-200 w-full md:w-96 mx-auto h-auto mb-6">
		<div class="p-4">
			<a :href="user.html_url">
			<img class="w-16 h-16 flex-shrink-0 mx-auto bg-black rounded-full" :src="user.avatar_url" alt="">
			<h3 class="mt-6 text-gray-900 text-sm font-medium" v-if="user.name">{{user.name}}</h3>
			<h3 class="mt-6 text-gray-900 text-sm font-medium" v-else-if="user.login">{{user.login}}</h3>
			<dl class="mt-1 flex-grow flex flex-col justify-between">
				<dd class="text-gray-500 text-xs" v-if="user.bio">{{user.bio}}</dd>
			</dl>
			</a>
		</div>
	</div>
	<img :src="`https://ghchart.rshah.org/409ba5/${user.login}`" alt="" class="mx-auto bg-white rounded-md my-4 p-4" />
</template>
<script>
	export default {
		props: {
			user: Object,
		}
	}
</script>