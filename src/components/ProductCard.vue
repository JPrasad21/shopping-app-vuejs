<template>
    <div class="product-card">
        <img :src="product.image" :alt="product.title" />
        <h3>{{ product.title }}</h3>
        <p>${{ product.price }}</p>
        <button @click="toggleWishlist">
        {{ isWishlisted ? "Remove from Wishlist" : "Add to Wishlist" }}
        </button>
        <button @click="openDialog">View Details</button>
  </div>
</template>

<script setup lang="ts">
import { useWishlistStore } from '@/stores/wishlist/wishlistStore';
import type { Product } from '@/types/Product';
import { computed } from 'vue';

const props = defineProps<{
    product: Product
}>();

const emit = defineEmits(['view']);
const wishlistStore = useWishlistStore();
const isWishlisted = computed(() => wishlistStore.isWishlisted(props.product.id));

const toggleWishlist = () => {
  wishlistStore.toggleWishlist(props.product.id);
};

const openDialog = () => {
  emit('view', props.product);
};
</script>

<style scoped>
.product-card {
  border: 1px solid #ddd;
  padding: 10px;
  text-align: center;
}
</style>