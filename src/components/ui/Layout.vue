<template>
    <TransitionGroup name="fade" tag="div" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <slot />
    </TransitionGroup>
</template>

<script setup lang="ts">

</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s, transform 0.3s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>