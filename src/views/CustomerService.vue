<template>
  <div>
    <h2>Customer Service</h2>
    <p>Crisp chat should load below.</p>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(() => {
  window.$crisp = []
  window.CRISP_WEBSITE_ID = 'YOUR_CRISP_WEBSITE_ID'
  const d = document
  const s = d.createElement('script')
  s.src = 'https://client.crisp.chat/l.js'
  s.async = true
  d.head.appendChild(s)
})
</script>
