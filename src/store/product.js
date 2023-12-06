import { defineStore } from "pinia";
import { ref, computed } from "vue";
import axios from "axios";

export const useProductStore = defineStore('useProductStore', () => {
    const products = ref({});
    const productList = computed(() => products.value);

    const fetchProduct = async () => {
        await axios.get(`${import.meta.env.VITE_API}`)
        .then((response) => {
            // console.log(response.data)
            products.value = response.data
            console.log(products.value);
        }).catch((error) => {
            console.log(error)
        })
    }

    return { fetchProduct, productList }
})