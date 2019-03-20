<template>
  <div id="app" class="app">
    <nav class="h-text-center">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/product">Product</router-link>
    </nav>

    <div class="cart" :class="[cart > 0 ? 'cart--has-product' : 'cart--is-empty']">
      <span>Cart</span>
      <strong>{{ cart }}</strong>
    </div>

    <router-view @add-to-cart="addToCart" />
  </div>
</template>

<style src="./App.scss" lang="scss"></style>
<script src="./App.js"></script>
