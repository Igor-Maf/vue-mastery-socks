<template>
  <div id="app" class="app">
    <nav class="h-text-center">
      <router-link to="/product">Product</router-link> |
      <router-link to="/events">Events</router-link>
    </nav>

    <div class="cart" :class="{'cart--has-product': cart > 0}">
      <span>Cart</span>
      <strong>{{ cart }}</strong>
    </div>

    <router-view :key="$route.fullPath" @add-to-cart="addToCart" />

    <Notifications />
  </div>
</template>

<style src="./App.scss" lang="scss"></style>
<script src="./App.js"></script>
