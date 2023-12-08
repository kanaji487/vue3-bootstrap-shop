<template>
    <h1>Cart</h1>
    
    <div class="d-flex justify-content-center" v-if="!productStore.loadProduct">
        <h2>Loading........</h2>
    </div>
    <table class="table" v-else>
        <thead>
            <tr>
                <th>Product</th>
                <th>Name</th>
                <th>Price</th>
                <th>number</th>
                <th>total</th>
                <th>delete</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(cart, index) in carts" :key="index">
                <td>
                    <img :src="cart.product.image" alt="" class="img-thumbnail" width="100">
                </td>
                <td>
                    {{ cart.product.title }}
                </td>
                <td>{{ currencyUSD(cart.product.price) }} ฿</td>
                <td>
                    <button class="btn btn-sm btn-secondary" @click="cartStore.decrementQuantity(index)">-</button>
                    <span class="mx-2">{{ cart.quantity }}</span>
                    <button class="btn btn-sm btn-secondary" @click="cartStore.incrementQuantity(index)">+</button>
                </td>
                <td>{{ currencyUSD(cart.totalPrice) }}</td>
                <td>
                    <button class="btn btn-danger" @click="cartStore.clearCart(index)">Delete</button>
                </td>
            </tr>
        </tbody>
    </table>
    <button class="btn btn-primary mb-5" @click="cartStore.clearAllCart">Clear cart</button>
    <button class="btn btn-success mb-5 mx-2">{{ currencyUSD(cartStore.totalProductPrice) }}</button>
</template>
 
<script setup>
import { computed } from 'vue';
import { useCartStore } from '../store/cart';
import { useProductStore } from '../store/product';
import{ currencyUSD } from '../shared/currency';

const cartStore = useCartStore();
const carts = computed(() => cartStore.cartPreview);
const productStore = useProductStore();
</script>
 
<style lang="scss" scoped>
 
</style>