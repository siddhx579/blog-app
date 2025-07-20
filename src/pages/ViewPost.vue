<template>
    <div v-if="post" class="bg-white p-4 sm:p-6 rounded shadow">
        <h2 class="text-xl sm:text-2xl font-bold mb-2">{{ post.title }}</h2>
        <p class="text-gray-700 mb-4 whitespace-pre-line text-sm sm:text-base">{{ post.content }}</p>

        <div class="flex flex-col sm:flex-row gap-2 sm:gap-4 mt-4">
            <router-link :to="`/edit/${post.id}`"
                class="text-blue-600 hover:underline text-sm sm:text-base">Edit</router-link>
            <button @click="deletePost" class="text-red-600 hover:underline text-sm sm:text-base">Delete</button>
        </div>
    </div>
    <div v-else class="text-gray-500 text-sm sm:text-base">
        Post not found.
    </div>
</template>

<script>
import { blogStore } from '../data/blogStore'
import { useRoute, useRouter } from 'vue-router'

export default {
    setup() {
        const route = useRoute()
        const router = useRouter()
        const post = blogStore.getPost(route.params.id)

        const deletePost = () => {
            blogStore.posts = blogStore.posts.filter(p => p.id !== route.params.id)
            router.push('/')
        }

        return { post, deletePost }
    },
}
</script>