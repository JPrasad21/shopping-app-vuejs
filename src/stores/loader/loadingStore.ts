import { defineStore } from "pinia";
import { ref } from "vue";

export const useLoadingStore = defineStore('loadingStore', () => {
    const isLoading = ref<boolean>(false);

    const startLoading = () => {
        isLoading.value = true;
    };
    
    const stopLoading = () => {
        isLoading.value = false;
    };

    return {
        isLoading,
        startLoading,
        stopLoading
    }
});
