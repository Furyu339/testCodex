import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useUserStore = defineStore('user', () => {
  const username = ref<string | null>(null)
  const isLoggedIn = computed(() => username.value !== null)

  function login(name: string) {
    username.value = name
  }

  function logout() {
    username.value = null
  }

  return { username, isLoggedIn, login, logout }
}, {
  persist: true,
})
