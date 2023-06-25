<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="navbar">
    <div class="nav">
      <RouterLink style="margin-right: 1rem" to="/">Posts</RouterLink>
      <RouterLink to="/authors">Authors</RouterLink>
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
