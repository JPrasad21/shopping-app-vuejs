import { fetchProductById, fetchProducts } from "@/services/productService";
import type { Product } from "@/types/Product";
import { defineStore } from "pinia";
import { ref } from "vue";
import { useLoadingStore } from "../loader/loadingStore";

export const useProductStore = defineStore('productStore',() => {
    const loadingStore = useLoadingStore();
    const products = ref<Product[]>([]);
    const isLoading = ref(false);
    const errorMessageForProducts = ref<string | null>(null);

    const selectedProduct = ref<Product | null>(null);
    const errorMessageForProduct = ref<string | null>(null);
    const loadProducts = async () => {
        if(products.value.length) return;
        isLoading.value = true;
        loadingStore.startLoading();
        const { data, error} = await fetchProducts();
        if(error) {
            errorMessageForProducts.value = error;
        } else {
            products.value = data as Product[];
        }
        isLoading.value = false;
        loadingStore.stopLoading();
    }
    
    const getProductById = async (id: number) => {
        const { data, error} = await fetchProductById(id);
        if(error) {
            errorMessageForProduct.value = error;
        } else {
            selectedProduct.value = data as Product;
        }
    }
    
    return {
        products,
        isLoading,
        errorMessageForProducts,
        loadProducts,
        selectedProduct,
        errorMessageForProduct,
        getProductById
    }
});