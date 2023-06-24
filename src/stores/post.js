import { defineStore } from 'pinia'

export const usePostStore = defineStore({
  id: 'post',
  state: () => ({
    posts: [],
    post: null,
    loading: false,
    error: null
  }),
  getters: {
    getPostsPerAuthor: (state) => {
      return (authorId) => state.posts.filter((post) => post.userId === authorId)
    }
  },
  actions: {
    async fetchPosts() {
      this.post = []
      this.loading = true
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const jsonResponse = response.json()
        this.posts = jsonResponse
      } catch (error) {
        this.error = error
      } finally {
        this.loading = false
      }
    },
    async fetchPost(id) {
      this.post = null
      this.loading = true
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        const jsonResponse = response.json()
        this.posts = jsonResponse
      } catch (error) {
        this.error = error
      } finally {
        this.loading = false
      }
    }
  }
})
