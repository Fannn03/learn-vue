import { createRouter, createWebHistory } from 'vue-router';
import PostViewVue from '@/views/PostView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/posts',
      name: 'posts',
      component: PostViewVue
    }
  ]
})

export default router
