<template>
    <div v-if="state.products.length">
        <loader v-if="state.isLoading"></loader>
        <div class="font-bold text-black text-center text-[24px] mb-[15px]">{{ textLatestProducts }}</div>
        <product-cards v-if="!state.isLoading"
                       :products="state.products"
                       :lang="lang"
                       :text-go-to-product-card="textGoToProductCard"
                       :product-route="productRoute"
        ></product-cards>
    </div>
</template>

<script setup>
import {onMounted, ref} from "vue";

defineProps({
    lang: {
        type: String,
        default: 'ua'
    },
    textLoadMore: {
        type: String,
        default: 'Завантажити ще'
    },
    textGoToProductCard: {
        type: String,
        default: 'Детальніше'
    },
    productRoute: {
        type: String
    },
    textLatestProducts: {
        type: String,
        default: 'Останні надходження'
    }
});

const state = ref({
    isLoading: false,
    isLoadingMore: false,
    showLoadMore: true,
    products: [],
    currentPage: 1,
    total: 1,
    endpoint: '/api/v1/product/new-products?page='
});

onMounted(() => {
    axios.get('/api/v1/product/new-products')
        .then(({data}) => {
            state.isLoading = false;
            state.value.products = data.result;
        })
        .catch((response) => console.log(response));
})
</script>
