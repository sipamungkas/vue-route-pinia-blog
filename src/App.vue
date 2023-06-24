<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="navbar">
    <div class="nav">
      <RouterLink to="/">Posts</RouterLink>
      <RouterLink to="/authors"></RouterLink>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
.navbar {
  background-color: lightgreen;
  padding: 1.2rem;
}
</style>
