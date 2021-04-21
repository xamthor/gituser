<template>
    <div class="mx-auto container my-12 text-center">
		<label for="email" class="block text-sm font-medium text-white my-4">Search</label>
		<input class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-96 sm:text-sm border-gray-300 rounded-md mx-auto" type="text" v-model="query" v-on:keyup.enter.prevent="fetchUser">
		<button @click="fetchUser" class="mt-10 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Search</button>
    </div>
    <div  v-if="queries.length" class="container mx-auto gap-6 mb-12">
		<User :user="user" class=""/>
		<Card v-for="item in queries" :key="item.id" :item="item" />
    </div>
    <div v-else class="text-white text-center text-xs">
		select or search
    </div>
</template>
<script>
	import { getUserEvents, getUser } from "../api/github";
	import Card from './Card.vue';
	import User from './User.vue';

	export default {
		name: 'Feed',
		components: {
			Card,
			User
		},
		data () {
			return {
				queries:[],
				query: 'xamthor',
				user: {}
			}
		},
		methods: {
			async fetchUser (query) {
				try {
					this.queries = await getUserEvents(this.query);
					this.user = await getUser(this.query);
				} catch (error) {
					console.error(error);
				}
			}
		},
	}
</script>
