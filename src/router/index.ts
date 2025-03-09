import { createRouter, createWebHistory } from 'vue-router';
import ProductList from '../views/ProductList.vue';
import Wishlist from '../views/Wishlist.vue';

const routes = [
    { path: '/', component: ProductList },
    { path: '/wishlist', component: Wishlist}
  ];
  
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;