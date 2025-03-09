<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/wishlist">Wishlist</router-link>
  </nav>
  <LoadingOverlay :active="loadingStore.isLoading" />
  <router-view></router-view>
</template>

<script setup lang="ts">
import { useLoadingStore } from './stores/loader/loadingStore';
import LoadingOverlay from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';

const loadingStore = useLoadingStore();
</script>
<style>
nav {
  margin-bottom: 20px;
}
nav a {
  margin-right: 10px;
  text-decoration: none;
  font-weight: bold;
}
</style>
