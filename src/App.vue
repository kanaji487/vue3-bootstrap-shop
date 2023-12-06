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

const productStore = useProductStore();

onMounted(() => productStore.fetchProduct());
</script>

<style lang="scss" scoped>

</style>