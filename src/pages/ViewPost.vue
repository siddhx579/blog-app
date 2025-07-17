<template>
    <div v-if="post">
        <h2>{{ post.title }}</h2>
        <p>{{ post.content }}</p>
        <router-link :to="`/edit/${post.id}`">Edit</router-link>
        <button @click="deletePost">Delete Post</button>
    </div>
    <div v-else>
        <p>Post not found.</p>
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

<style>
button {
    margin-top: 20px;
    background-color: red;
    color: white;
    padding: 8px 16px;
    border: none;
    cursor: pointer;
}
</style>