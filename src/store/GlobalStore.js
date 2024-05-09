import { defineStore } from 'pinia'

export const useGlobalStore = defineStore('globalStore', {
  state: () => {
    return {
      isLoading: true,
    }
  },

  actions: {
    toggleLoading() {
      this.isLoading = !this.isLoading
    }
  },
})