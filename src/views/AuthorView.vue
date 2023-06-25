<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useAuthorStore } from '../stores/author'
import { usePostStore } from '../stores/post'

import Author from '../components/AuthorDetail.vue'

const route = useRoute()
const { authors } = storeToRefs(useAuthorStore())
const { getPostsPerAuthor } = storeToRefs(usePostStore())
const { fetchPosts } = usePostStore()

const getAuthorByUsername = computed(() => {
  return authors.value.find((author) => author.username === route.params.username)
})

fetchPosts()
</script>

<template>
  <div>
    <Author
      :author="getAuthorByUsername"
      :posts="getPostsPerAuthor(getAuthorByUsername.id)"
    ></Author>
  </div>
</template>
