import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Create from '../pages/Create.vue'
import ViewPost from '../pages/ViewPost.vue'
import Edit from '../pages/Edit.vue'

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/create', name: 'Create', component: Create },
    { path: '/post/:id', name: 'ViewPost', component: ViewPost },
    { path: '/edit/:id', name: 'Edit', component: Edit },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;