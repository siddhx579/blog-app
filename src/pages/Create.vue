<template>
    <div>
        <h2 class="text-lg sm:text-xl font-semibold mb-4">{{ isEdit ? 'Edit Post' : 'Create New Post' }}</h2>

        <form @submit.prevent="handleSubmit" class="space-y-4">
            <div>
                <label class="block mb-1 font-medium">Title:</label>
                <input v-model="title" required
                    class="w-full p-2 border border-gray-300 rounded text-sm sm:text-base" />
            </div>

            <div>
                <label class="block mb-1 font-medium">Content:</label>
                <textarea v-model="content" required
                    class="w-full p-2 border border-gray-300 rounded h-40 text-sm sm:text-base" />
            </div>

            <button type="submit"
                class="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700 text-sm sm:text-base">
                {{ isEdit ? 'Update Post' : 'Add Post' }}
            </button>
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