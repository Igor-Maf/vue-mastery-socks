<template>
  <div id="app" class="app">
    <nav class="h-text-center">
      <router-link to="/home">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/product">Product</router-link> |
      <router-link to="/events">Events</router-link>
    </nav>

    <div class="cart" :class="{'cart--has-product': cart > 0}">
      <span>Cart</span>
      <strong>{{ cart }}</strong>
    </div>

    <router-view @add-to-cart="addToCart" />

    <Notifications></Notifications>
  </div>
</template>

<style src="./App.scss" lang="scss"></style>
<script src="./App.js"></script>
