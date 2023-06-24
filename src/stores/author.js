import { defineStore } from 'pinia'
import { usePostStore } from './post'

export const useauthorStore = defineStore({
  id: 'author',
  state: () => ({
    authors: []
  }),
  getters: {
    getPostAuthor: (state) => {
      const postStore = usePostStore
      return state.authors.find((author) => author.id === postStore.post.userId)
    }
  },
  actions: {
    async fetchAuthors() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const jsonResponse = response.json()
        this.comments = jsonResponse
      } catch (error) {
        this.comments = []
        console.log(error)
      }
    }
  }
})
