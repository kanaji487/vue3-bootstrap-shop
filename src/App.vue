<template>
  <navbar />
  <div class="container">
    <router-view />
  </div>
</template>

<script setup>
import navbar from './components/navbar.vue';
import { onMounted } from 'vue';
import { useProductStore } from './store/product';
import { useCartStore } from './store/cart';

const productStore = useProductStore();
const cartStore = useCartStore();

onMounted(() => productStore.fetchProduct());
onMounted(() => cartStore.loadFromLocalStorage());
</script>

<style lang="scss" scoped>

</style>