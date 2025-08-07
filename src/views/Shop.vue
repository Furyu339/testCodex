<template>
  <div class="shop">
    <div v-for="p in products" :key="p.id" class="product">
      <h3>{{ p.name }}</h3>
      <p>{{ p.price.toFixed(2) }}</p>
      <button @click="addToCart(p)">Add to Cart</button>
    </div>
    <div class="cart">
      <h2>Cart</h2>
      <div v-for="c in cart" :key="c.id">
        {{ c.name }} x {{ c.qty }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Product {
  id: number
  name: string
  price: number
}

const products = ref<Product[]>([
  { id: 1, name: 'Apple', price: 1.2 },
  { id: 2, name: 'Banana', price: 0.8 },
  { id: 3, name: 'Cherry', price: 2.5 },
])

const cart = ref<Array<{ id: number; name: string; qty: number }>>([])

function addToCart(p: Product) {
  const item = cart.value.find(c => c.id === p.id)
  if (item) {
    item.qty++
  } else {
    cart.value.push({ id: p.id, name: p.name, qty: 1 })
  }
}
</script>

<style scoped>
.shop {
  display: flex;
  gap: 2rem;
}
.product {
  border: 1px solid #ccc;
  padding: 1rem;
}
</style>
