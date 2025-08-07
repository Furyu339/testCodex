<script setup lang="ts">
import { useUserStore } from './stores/user'
import { useRouter } from 'vue-router'

const userStore = useUserStore()
const router = useRouter()

function handleLogout() {
  userStore.logout()
  router.push('/login')
}
</script>

<template>
  <nav>
    <router-link to="/shop" v-if="userStore.isLoggedIn">Shop</router-link>
    <router-link to="/service" v-if="userStore.isLoggedIn">Customer Service</router-link>
    <button v-if="userStore.isLoggedIn" @click="handleLogout">Logout</button>
  </nav>
  <router-view />
</template>

<style scoped>
nav {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
}
</style>
