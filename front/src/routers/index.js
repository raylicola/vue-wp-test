import { createRouter, createWebHistory } from 'vue-router'
import { SamplePage } from '@/pages'

const routes = [
  {
    path: '/',
    name: 'SamplePage',
    component: SamplePage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;