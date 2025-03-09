<script setup lang="ts">
import { useWishlistStore } from "@/stores/wishlist/wishlistStore";
import ProductList from '@/components/ProductList.vue';
import ProductDialog from '@/components/ProductDialog.vue';
import type { Product } from "@/types/Product";
import { ref } from "vue";

const wishlistStore = useWishlistStore();
const clearWishlist = () => {
  wishlistStore.clearWishlist();
};
const selectedProduct = ref<Product | null>(null);

const openDialog = (product: Product) => {
  selectedProduct.value = product;
};

const closeDialog = () => {
  selectedProduct.value = null;
};
</script>

<template>
  <div class="wishlist">
    <h1>Your Wishlist</h1>

    <button @click="clearWishlist" v-if="wishlistStore.wishlistProducts.length" class="clear-btn">
      🗑️ Clear Wishlist
    </button>

    <ProductList :products="wishlistStore.wishlistProducts" @select="openDialog" />
    <ProductDialog v-if="selectedProduct" :product="selectedProduct" @close="closeDialog" />

    <p v-if="wishlistStore.wishlistProducts.length === 0" class="empty-message">
      🛒 Your wishlist is empty.
    </p>
  </div>
</template>

<style scoped>
.wishlist {
  padding: 20px;
  text-align: center;
}

.clear-btn {
  background: red;
  color: white;
  border: none;
  padding: 8px 12px;
  cursor: pointer;
  margin-bottom: 15px;
  border-radius: 5px;
  transition: 0.3s;
}
.clear-btn:hover {
  background: darkred;
}

/* Wishlist container */
.wishlist-container {
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
}

.wishlist-item {
  display: flex;
  align-items: center;
  gap: 10px;
  border: 1px solid #ddd;
  padding: 10px;
  width: 300px;
  background: white;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  transition: transform 0.2s;
}
.wishlist-item:hover {
  transform: scale(1.05);
}
.wishlist-item img {
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 5px;
}
.empty-message {
  color: gray;
  font-style: italic;
  margin-top: 20px;
}

/* Animations */
.list-enter-active, .list-leave-active {
  transition: opacity 0.3s, transform 0.3s;
}
.list-enter-from, .list-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
