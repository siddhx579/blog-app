<template>
    <div v-if="post">
        <h2>Edit Post</h2>
        <form @submit.prevent="handleUpdate">
            <label>Title:</label>
            <input v-model="title" required />

            <label>Content:</label>
            <textarea v-model="content" required></textarea>

            <button type="submit">Update Post</button>
        </form>
    </div>
    <div v-else>
        <p>Post not found.</p>
    </div>
</template>

<script>
import { useRoute, useRouter } from 'vue-router'
import { blogStore } from '../data/blogStore'
import { ref } from 'vue'

export default {
    setup() {
        const route = useRoute()
        const router = useRouter()

        const post = blogStore.getPost(route.params.id)
        const title = ref(post?.title || '')
        const content = ref(post?.content || '')

        const handleUpdate = () => {
            const index = blogStore.posts.findIndex(p => p.id === route.params.id)
            if (index !== -1) {
                blogStore.posts[index].title = title.value
                blogStore.posts[index].content = content.value
                router.push(`/post/${route.params.id}`)
            }
        }

        return { title, content, handleUpdate, post }
    },
}
</script>

<style>
form {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

input,
textarea {
    padding: 8px;
    font-size: 1rem;
}

button {
    width: 120px;
    padding: 8px;
    background-color: #007bff;
    color: white;
    border: none;
    cursor: pointer;
}
</style>