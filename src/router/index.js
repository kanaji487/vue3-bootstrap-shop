import { createRouter, createWebHistory } from 'vue-router'
import homepage from '../views/homepage.vue';
import productDetailPage from '../views/productDetail.vue';
import cart from '../views/cart.vue';

const routes = [
  {
    path: '/',
    name: 'homepage',
    component: homepage
  },
  {
    path: '/productDetail/:id',
    name: 'productDetailPage',
    component: productDetailPage
  },
  {
    path: '/cart',
    name: 'cart',
    component: cart
  },
]
const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router