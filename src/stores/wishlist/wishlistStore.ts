import { defineStore } from 'pinia';
import { computed, ref, watch } from 'vue';
import { useProductStore } from '../products/productStore';
import { useToast } from 'vue-toastification';

const loadWishlist = (): number[] => {
    const storedWishlist = localStorage.getItem('wishlist');
    return storedWishlist ? JSON.parse(storedWishlist) : [];
  };
export const useWishlistStore = defineStore('wishlist', () => {
    const toast = useToast();
    const wishlist = ref<number[]>(loadWishlist());
    const productStore = useProductStore();
    const wishlistProducts = computed(() =>
        productStore.products.filter(p => wishlist.value.includes(p.id))
    );

    const toggleWishlist = (id: number) => {
        if(isWishlisted(id)) {
            wishlist.value = wishlist.value.filter(x => x !== id);
            toast.info('Removed from Wishlist 🗑️');
        } else {
            wishlist.value.push(id);
            toast.success('Added to Wishlist ❤️');
        }
    };
      
    const isWishlisted = (productId: number) => wishlist.value.some(id => id === productId);

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
        wishlistProducts,
        toggleWishlist,
        isWishlisted,
        clearWishlist
    }
});