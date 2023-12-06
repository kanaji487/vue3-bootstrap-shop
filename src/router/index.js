import { createRouter, createWebHistory } from 'vue-router'
import homepage from '../views/homepage.vue';
import productDetailPage from '../views/productDetail.vue';

const routes = [
  {
    path: '/',
    name: 'homepage',
    component: homepage
  },
  {
    path: '/productDetailPage',
    name: 'productDetailPage',
    component: productDetailPage
  },
]
const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router