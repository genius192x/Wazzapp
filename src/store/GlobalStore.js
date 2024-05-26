import { defineStore } from 'pinia'

export const useGlobalStore = defineStore('globalStore', {
    state: () => {
        return {
            isLoading: true,
        }
    },

    actions: {
        toggleLoading() {
            console.log('toggled');
            this.isLoading = !this.isLoading
        }
    },
})