import { defineStore } from 'pinia'
import { usePostStore } from './post'

export const useCommentStore = defineStore({
  id: 'comment',
  state: () =>
    ({
      comments: []
    }.comments),
  getters: {
    getPostComments: (state) => {
      const postStore = usePostStore
      return state.comments.filters((post) => post.postId === postStore.post.id)
    }
  },
  actions: {
    async fetchComments() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/comments')
        const jsonResponse = response.json()
        this.comments = jsonResponse
      } catch (error) {
        console.log(error)
      }
    }
  }
})
