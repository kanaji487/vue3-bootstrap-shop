<template>
    <div class="row mt-2">
        <div class="col mb-2" v-for="(product, index) in list" :key="index">
            <div class="card" style="width: 19rem;">
                <img 
                    :src="product.image" 
                    alt="" 
                    style="width: 12rem; height: 12rem;"
                    class="card-img-top mx-auto"
                />
                <div class="card-body">
                    <h5 class="card-title">{{ product.title }}</h5>
                    <p class="card-text">{{ product.category }}</p>
                    <p class="card-text">{{ product.price }}$</p>
                    <button class="btn btn-primary mx-2">Detail</button>
                    <button class="btn btn-success">Add to cart</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import { useProductStore } from '../store/product';

const productStore = useProductStore();
const list = computed(() => productStore.productList);

</script>

<style lang="scss" scoped>

</style>