<template>
  <div class="login">
    <form @submit.prevent="onSubmit">
      <input v-model="username" placeholder="Username" />
      <input type="password" v-model="password" placeholder="Password" />
      <Captcha ref="captchaRef" />
      <input v-model="captcha" placeholder="Enter Captcha" />
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '../stores/user'
import Captcha, { type CaptchaInstance } from 'vue3-captcha'

const username = ref('')
const password = ref('')
const captcha = ref('')
const captchaRef = ref<CaptchaInstance>(null)
const router = useRouter()
const userStore = useUserStore()

function onSubmit() {
  if (!captchaRef.value?.check(captcha.value)) {
    alert('Incorrect captcha')
    captchaRef.value?.refresh()
    return
  }
  if (username.value === 'user' && password.value === 'password') {
    userStore.login(username.value)
    router.push('/shop')
  } else {
    alert('Invalid credentials')
  }
}
</script>

<style scoped>
.login {
  max-width: 300px;
  margin: 2rem auto;
}
form {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
</style>
