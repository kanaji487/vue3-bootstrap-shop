<template>
    <div class="d-flex justify-content-center" v-if="!productStore.loadProduct">
        <h2>Loading.......</h2>
    </div>
    <div class="row mt-2" v-else>
        <div class="col mb-2" v-for="(product, index) in searchProduct" :key="index">
            <div class="card" style="width: 19rem;">
                <img 
                    :src="product.image" 
                    alt="" 
                    style="width: 12rem; height: 12rem;"
                    class="card-img-top mx-auto mt-2"
                />
                <div class="card-body">
                    <h5 class="card-title" id="shortenedText">{{ product.title }}</h5>
                    <p class="card-text">{{ product.category }}</p>
                    <p class="card-text">{{ currencyUSD(product.price) }}</p>
                    <routerLink :to="`/productDetail/${product.id}`" class="btn btn-primary mx-2">Detail</routerLink>
                    <button class="btn btn-success" @click="cartStore.addCart(product.id, product.price)">Add to cart</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import { useProductStore } from '../store/product';
import { useCartStore } from '../store/cart';
import { currencyUSD } from '../shared/currency';

const productStore = useProductStore();
const list = computed(() => productStore.productList);
const cartStore = useCartStore();
const searchProduct = computed(() => productStore.searchProduct);

</script>

<style lang="scss" scoped>
 #shortenedText {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: 300px; /* ปรับตามความต้องการ */
}
</style>