import { defineStore } from 'pinia';
import { ref, watch } from 'vue';
import type { Product } from '@/types/Product';

const loadWishlist = (): Product[] => {
    const storedWishlist = localStorage.getItem('wishlist');
    return storedWishlist ? JSON.parse(storedWishlist) : [];
  };
export const useWishlistStore = defineStore('wishlist', () => {
    const wishlist = ref<Product[]>(loadWishlist());

    const toggleWishlist = (product: Product) => {
        if (!product) return;
      
        const index = wishlist.value.findIndex(p => p.id === product.id);
        if (index === -1) {
          wishlist.value.push(product);
        } else {
          wishlist.value.splice(index, 1);
        }
    };
      
    const isWishlisted = (productId: number) => {
        return wishlist.value.some(p => p.id === productId);
    };

    const clearWishlist = () => {
        wishlist.value = [];
    };

    watch(
        wishlist,
        (newWishlist) => {
            localStorage.setItem('wishlist', JSON.stringify(newWishlist));
        },
        { deep: true}
    )

    return {
        wishlist,
        toggleWishlist,
        isWishlisted,
        clearWishlist
    }
});