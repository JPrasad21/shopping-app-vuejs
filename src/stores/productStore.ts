import { fetchProductById, fetchProducts } from "@/services/productService";
import type { Product } from "@/types/Product";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useProductStore = defineStore('productStore',() => {
    const products = ref<Product[]>([]);
    const selectedProduct = ref<Product | null>(null);
    const errorMessageForProducts = ref<string | null>(null);
    const errorMessageForProduct = ref<string | null>(null);
    const loadProducts = async () => {
        const { data, error} = await fetchProducts();
        if(error) {
            errorMessageForProducts.value = error;
        } else {
            products.value = data as Product[];
        }
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
        selectedProduct,
        loadProducts,
        getProductById
    }
});