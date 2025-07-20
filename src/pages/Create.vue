<template>
    <div>
        <h2>Create New Blog Post</h2>
        <form @submit.prevent="handleSubmit">
            <label>Title:</label>
            <input v-model="title" required />

            <label>Content:</label>
            <textarea v-model="content" required></textarea>

            <button type="submit">Add Post</button>
        </form>
    </div>
</template>

<script>
import { ref } from 'vue'
import { blogStore } from '../data/blogStore'
import { useRouter } from 'vue-router'

export default {
    setup() {
        const title = ref('')
        const content = ref('')
        const router = useRouter()

        const handleSubmit = () => {
            blogStore.addPost({ title: title.value, content: content.value })
            router.push('/')
        }

        return { title, content, handleSubmit }
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
    width: 100px;
    padding: 8px;
    background-color: teal;
    color: white;
    border: none;
    cursor: pointer;
}
</style>