<template>
    <nav class="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Demo Shop</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <routerLink to="/" class="nav-link" aria-current="page" href="#">Home</routerLink>
                    </li>
                    <li class="nav-item">
                        <routerLink to="/cart" class="nav-link" aria-current="page" href="#">Cart</routerLink>
                    </li>
                </ul>
                <div class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" v-model="productStore.input">
                </div>
            </div>
        </div>
    </nav>
</template>

<script setup>
import { useProductStore } from '../store/product';

const productStore = useProductStore();
</script>

<style lang="scss" scoped></style>