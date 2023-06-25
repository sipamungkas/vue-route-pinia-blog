import { defineStore } from 'pinia'
import { usePostStore } from './post'

export const useCommentStore = defineStore({
  id: 'comment',
  state: () => ({
    comments: []
  }),
  getters: {
    getPostComments: (state) => {
      const postSore = usePostStore()
      return state.comments.filter((post) => post.postId === postSore.post.id)
    }
  },
  actions: {
    async fetchComments() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/comments')
        const jsonResponse = await response.json()
        this.comments = jsonResponse
      } catch (error) {
        console.log(error)
      }
    }
  }
})
