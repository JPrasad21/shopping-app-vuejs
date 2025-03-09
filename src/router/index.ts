import { createRouter, createWebHistory } from 'vue-router';

const productList = () => import('@/views/ProductList.vue');
const wishlist = () => import('@/views/Wishlist.vue');

const routes = [
    { path: '/', component: productList },
    { path: '/wishlist', component: wishlist}
  ];
  
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;