<template>
    <div class="d-flex justify-content-center" v-if="!loadProduct">
        <h2>Loading....</h2>
    </div>
    <div class="row mt-3" v-else>
        <div class="col-md-6">
            <img :src="product.image" alt="" class="img-fluid" />
        </div>
        <div class="col-md-6">
            <h1>{{ product.title }}</h1>
            <p>{{ product.description }}</p>
            <h4>{{ currencyUSD(product.price) }}</h4>
            <div class="d-flex mt-3">
                <div class="btn-group me-auto">
                    <button class="btn btn-outline-primary" @click="decrementQuantity()" :disabled="quantity == 1">-</button>
                    <button class="btn btn-outline-primary">{{ quantity }}</button>
                    <button class="btn btn-outline-primary" @click="incrementQuantity()">+</button>
                </div>
                <button class="btn btn-primary" @click="cartStore.addCartDetail(product.id, product.price, quantity)">Add to cart</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { useCartStore } from "../store/cart";
import { currencyUSD } from "../shared/currency";

const product = ref({});
const route = useRoute();
const cartStore = useCartStore();

const loadProduct = ref(false);

const quantity = ref(1);

const incrementQuantity = () => {
    quantity.value++
}

const decrementQuantity = () => {
    quantity.value--
}

const productDetail = async () => {
    await axios.get(`${import.meta.env.VITE_API}/${route.params.id}`)
    .then((respose) => {
        product.value = respose.data
        loadProduct.value = true
    }).catch((error) => {
        console.log(error)
    })
}

onMounted(() => productDetail());
</script>

<style lang="scss" scoped></style>