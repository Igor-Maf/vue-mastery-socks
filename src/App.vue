<template>
  <div id="app" class="app">
    <nav class="h-text-center">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/product">Product</router-link>
    </nav>

    <router-view />
  </div>
</template>

<style lang="scss">
  @import "scss/variables", "scss/common", "scss/helpers", "scss/components/btn", "scss/components/badge";

  .app,
  .content {
    margin-top: 2em;
  }
</style>
