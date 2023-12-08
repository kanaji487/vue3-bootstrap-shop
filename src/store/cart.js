import { defineStore } from "pinia";
import { computed, ref } from "vue";
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';
import { useProductStore } from "./product";

export const useCartStore = defineStore('useCartStore', () => {
    const cart = ref([])

    const addCart = (id, price, quantity = 1) => {
        const data = {
            id,
            price,
            quantity
        }

        const findId = cart.value.find(e => e.id === data.id)

        if(findId) {
            addCartAlertFail();
        } else {
            cart.value.push(data);
            saveToLocalStorage();
            addCartAlertSuccess();
        }

        console.log(cart.value)
    }

    const loadFromLocalStorage = () => {
        if(localStorage.getItem('cart')) {
            cart.value = JSON.parse(localStorage.getItem('cart'))
        }
    }

    const saveToLocalStorage = () => {
        localStorage.setItem('cart', JSON.stringify(cart.value));
    }

    const addCartDetail = (id, price, quantity) => {
        const data = {
            id,
            price,
            quantity
        }

        const findId = cart.value.find(e => e.id == data.id);

        if(findId) {
            const findIndexProduct = cart.value.findIndex(e => e.id == data.id);
            cart.value[findIndexProduct].quantity = cart.value[findIndexProduct].quantity + quantity;
            saveToLocalStorage();
            addCartAlertSuccess();
        }
    }

    const cartPreview = computed(() => {
        const productStore = useProductStore();
        return cart.value.map((product, index) => {
            const findIndexProduct = productStore.products.findIndex(e => e.id == product.id)
            return {
                product : productStore.products[findIndexProduct],
                quantity : cart.value[index].quantity,
                totalPrice : productStore.products[findIndexProduct].price * cart.value[index].quantity
            }
        })
    })

    const totalProductPrice = computed(() => {
        return cart.value.reduce((sum, product) => sum + product.price * product.quantity, 0);
    }) 

    const addCartAlertSuccess = () => {
        Swal.fire({
            position: "top-center",
            icon: "success",
            title: "The product has been successfully added to the shopping cart",
            showConfirmButton: false,
            timer: 1500
        });
    }

    const addCartAlertFail = () => {
        Swal.fire({
            position: "top-center",
            icon: "error",
            title: "This item is already in your shopping cart",
            showConfirmButton: false,
            timer: 1500
        });
    }

    const incrementQuantity = (i) => {
        cart.value[i].quantity += 1;
        saveToLocalStorage();
    }

    const decrementQuantity = (i) => {
        cart.value[i].quantity -= 1;

        if(cart.value[i].quantity == 0) {
            cart.value.splice(i, 1);
            saveToLocalStorage();
        }
        saveToLocalStorage();
    }
    
    const clearCart = (i) => {
        cart.value.splice(i, 1);
        saveToLocalStorage();
    }

    const clearAllCart = () => {
        cart.value = [];
        saveToLocalStorage();
    }

    return { addCart, 
        loadFromLocalStorage, 
        cart, 
        cartPreview, 
        incrementQuantity, 
        decrementQuantity, 
        clearCart, 
        clearAllCart, 
        addCartDetail,
        totalProductPrice
    }
})