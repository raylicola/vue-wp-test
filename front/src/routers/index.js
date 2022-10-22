import { createRouter, createWebHistory } from 'vue-router'
import { HelloWorld } from '@/components'

const routes = [
  {
    path: '/hello-world',
    name: 'HelloWorld',
    component: HelloWorld,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;