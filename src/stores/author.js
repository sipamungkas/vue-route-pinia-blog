import { defineStore } from 'pinia'
import { usePostStore } from './post'

export const useAuthorStore = defineStore({
  id: 'author',
  state: () => ({
    authors: []
  }),
  getters: {
    getPostAuthor: (state) => {
      const postStore = usePostStore()
      return state.authors.find((author) => author.id === postStore.post.userId)
    }
  },
  actions: {
    async fetchAuthors() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const jsonResponse = await response.json()
        this.authors = jsonResponse
      } catch (error) {
        this.authors = []
        console.log(error)
      }
    }
  }
})
