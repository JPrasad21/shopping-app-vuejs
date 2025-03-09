<script setup lang="ts">
import { defineProps, defineEmits } from "vue";
import type { Product } from "@/types/Product";
import WishlistButton from "./ui/WishlistButton.vue";

defineProps<{ product: Product }>();
const emit = defineEmits(["close"]);
const closeDialog = () => {
  emit('close');
};
</script>

<template>
  <Teleport to="body">
    <Transition name="fade">
      <div class="dialog-overlay" @click.self="closeDialog">
        <div class="dialog-content" @click.stop>
          <button @click="closeDialog" class="close-btn">✖</button>
          <h2 class="text-xl font-semibold">{{ product.title }}</h2>
          <p class="text-sm font-semibold">${{ product.price }}</p>
          <p class="text-gray-600">{{ product.description }}</p>
          <WishlistButton :productId="product.id" />
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.dialog-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.dialog-content {
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 400px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 18px;
}

.wishlist-btn {
  background: #ddd;
  padding: 8px 12px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
}

.wishlist-btn.active {
  background: red;
  color: white;
}

/* Fade Transition */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
