import { reactive, watch } from 'vue'

const savedPosts = JSON.parse(localStorage.getItem('posts')) || []

export const blogStore = reactive({
    posts: savedPosts,
    addPost(post) {
        this.posts.push({
            id: Date.now().toString(),
            ...post,
        })
    },
    getPost(id) {
        return this.posts.find((p) => p.id === id)
    },
})

// Persist to localStorage when posts change
watch(
    () => blogStore.posts,
    (newPosts) => {
        localStorage.setItem('posts', JSON.stringify(newPosts))
    },
    { deep: true }
)