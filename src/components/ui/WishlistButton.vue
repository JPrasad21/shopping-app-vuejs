<template>
    <button 
    @click="toggleWishlist(productId)" 
    class="p-2 transition duration-300 rounded-full"
    :class="isWishlisted ? 'text-red-500' : 'text-gray-400 hover:text-red-500'"
  >
    <span v-if="isWishlisted">❤️</span>
    <span v-else>🤍</span>
  </button>
</template>

<script setup lang="ts">
import { useWishlistStore } from '@/stores/wishlist/wishlistStore';
import { computed } from 'vue';

const props = defineProps<{
    productId: number
}>();
const wishlistStore = useWishlistStore();
const isWishlisted = computed(() => wishlistStore.wishlist.includes(props.productId));
const toggleWishlist = (id: number) => wishlistStore.toggleWishlist(id);
</script>