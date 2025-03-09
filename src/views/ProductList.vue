<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useWishlistStore } from '@/stores/wishlist/wishlistStore';
import ProductCard from '@/components/ProductCard.vue';
import ProductDialog from '@/components/ProductDialog.vue';
import type { Product } from '@/types/Product';
import { useProductStore } from '@/stores/products/productStore';
import Layout from '@/components/ui/Layout.vue';

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
      <Layout v-else>
        <ProductCard
        v-for="product in productStore.products"
        :key="product.id"
        :product="product"
        @view="openDialog"
      />
      </Layout>
      <ProductDialog v-if="selectedProduct" :product="selectedProduct" @close="closeDialog" />
    </div>
</template>
<style scoped>
.product-list {
  text-align: center;
  padding: 20px;
}
</style>