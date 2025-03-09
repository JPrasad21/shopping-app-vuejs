<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/wishlist">Wishlist</router-link>
  </nav>
  <router-view></router-view>
</template>

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
