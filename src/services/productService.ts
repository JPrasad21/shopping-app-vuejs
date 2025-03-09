import apiClient from "@/plugins/axios";
import type { ApiResponse } from "@/types/ApiResponse";
import type { Product } from "@/types/Product";

export const fetchProducts = async (): Promise<ApiResponse<Product[]>> => {
    try {
        const response = await apiClient.get('/products');
        return { data: response.data };
    } catch (error: any) {
        return { error: error.response?.data?.message || 'Failed to fetch products' };
    }
}

export const fetchProductById = async (id: number): Promise<ApiResponse<Product>> => {
    try {
        const response = await apiClient.get(`/products/${id}`);
        return { data: response.data };
    } catch (error: any) {
        return { error: error.response?.data?.message || 'Failed to fetch products' };
    }
};