<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useWishlistStore } from '@/stores/wishlist';
import ProductList from '@/components/ProductList.vue';
import ProductDialog from '@/components/ProductDialog.vue';
import type { Product } from '@/types/Product';
import { useProductStore } from '@/stores/productStore';


const router = useRouter();
const productStore = useProductStore();
const wishlistStore = useWishlistStore();

onMounted(() => {
  productStore.loadProducts();
});
const selectedProduct = ref<Product | null>(null);

const openDialog = (product: Product) => {
  selectedProduct.value = product;
};

const closeDialog = () => {
  selectedProduct.value = null;
}

const goToWishlist = () => {
  router.push('/wishlist');
};
</script>
<template>
    <div class="product-list">
      <h1>Product List</h1>
      <button @click="goToWishlist">Go to Wishlist ({{ wishlistStore.wishlist.length }})</button>
      <div v-if="!productStore.products.length">Loading...</div>
      <ProductList v-else :products="productStore.products" @select="openDialog" />
      <ProductDialog v-if="selectedProduct" :product="selectedProduct" @close="closeDialog" />
    </div>
</template>
<style scoped>
.product-list {
  text-align: center;
  padding: 20px;
}

.products {
  display: flex;
  gap: 20px;
  justify-content: center;
}

.product-card {
  border: 1px solid #ddd;
  padding: 15px;
  width: 200px;
  border-radius: 8px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
}

.product-card:hover {
  transform: scale(1.05);
}

.product-card img {
  width: 100%;
  height: 120px;
  object-fit: cover;
  border-radius: 5px;
}

button {
  background: blue;
  color: white;
  border: none;
  padding: 8px 12px;
  cursor: pointer;
  margin-top: 10px;
  border-radius: 5px;
}

button:hover {
  background: darkblue;
}
</style>