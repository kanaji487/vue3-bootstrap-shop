import { defineStore } from "pinia";
import { ref, computed } from "vue";
import axios from "axios";

export const useProductStore = defineStore('useProductStore', () => {
    const products = ref([]);
    const productList = computed(() => products.value);
    const loadProduct = computed(() => products.value.length > 0);
    const input = ref('');

    const fetchProduct = async () => {
        await axios.get(`${import.meta.env.VITE_API}`)
        .then((response) => {
            products.value = response.data
            console.log(products.value);
        }).catch((error) => {
            console.log(error)
        })
    }

    const searchProduct = computed(() => {
        if(input.value.length < 3) return products.value

        return products.value.filter((product) => {
            if(product.title.toLowerCase().includes(input.value.toLowerCase()) == false) {
                return false
            } else {
                return product.title.toLowerCase().includes(input.value.toLowerCase())
            }
        })
    })

    return { fetchProduct, productList, loadProduct, products, input, searchProduct }
})