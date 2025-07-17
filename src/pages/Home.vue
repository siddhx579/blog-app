<template>
    <div>
        <h2>All Blog Posts</h2>

        <input v-model="searchQuery" placeholder="Search by title..." class="search-input" />

        <div v-if="filteredPosts.length === 0">No matching posts found.</div>

        <ul>
            <li v-for="post in filteredPosts" :key="post.id">
                <router-link :to="`/post/${post.id}`">
                    <strong>{{ post.title }}</strong>
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

<style>
.search-input {
    margin-bottom: 20px;
    padding: 8px;
    width: 100%;
    max-width: 300px;
    font-size: 1rem;
}
</style>