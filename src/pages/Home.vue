<template>
    <div>
        <h2 class="text-lg sm:text-xl font-semibold mb-4">All Blog Posts</h2>

        <input v-model="searchQuery" placeholder="Search by title..."
            class="mb-6 p-2 border border-gray-300 rounded w-full max-w-md" />

        <div v-if="filteredPosts.length === 0" class="text-gray-500">No matching posts found.</div>

        <ul class="space-y-4">
            <li v-for="post in filteredPosts" :key="post.id" class="bg-white p-4 rounded shadow">
                <router-link :to="`/post/${post.id}`"
                    class="text-base sm:text-lg font-bold text-teal-700 hover:underline block">
                    {{ post.title }}
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
import { blogStore } from '../data/blogStore'
import { ref, computed } from 'vue'

export default {
    setup() {
        const searchQuery = ref('')

        const filteredPosts = computed(() => {
            if (!searchQuery.value.trim()) {
                return blogStore.posts
            }
            return blogStore.posts.filter((post) =>
                post.title.toLowerCase().includes(searchQuery.value.toLowerCase())
            )
        })

        return {
            searchQuery,
            filteredPosts,
        }
    },
}
</script>