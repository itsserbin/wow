<template>
    <div v-if="products.length">
        <loader v-if="state.isLoading"></loader>
        <div class="font-bold text-black text-center text-[24px] mb-[15px]">{{ textLatestProducts }}</div>
        <product-cards v-if="!state.isLoading"
                       :products="products"
                       :lang="lang"
                       :text-go-to-product-card="textGoToProductCard"
                       :product-route="productRoute"
        ></product-cards>
    </div>
</template>

<script setup>
import {onMounted, ref} from "vue";
const products = [
    {
        h1: {
            ua: 'Роздільний купальник Colori Alla Moda'
        },
        price: 1200,
        discount_price: 799
    },
    {
        h1: {
            ua: 'Роздільний купальник Colori Alla Moda'
        },
        price: 1200,
        discount_price: 799
    },
    {
        h1: {
            ua: 'Роздільний купальник Colori Alla Moda'
        },
        price: 1200,
        discount_price: 799
    },
    {
        h1: {
            ua: 'Роздільний купальник Colori Alla Moda'
        },
        price: 1200,
        discount_price: 799
    },
    {
        h1: {
            ua: 'Роздільний купальник Colori Alla Moda'
        },
        price: 1200,
        discount_price: 799
    },
    {
        h1: {
            ua: 'Роздільний купальник Colori Alla Moda'
        },
        price: 1200,
        discount_price: 799
    },
    {
        h1: {
            ua: 'Роздільний купальник Colori Alla Moda'
        },
        price: 1200,
        discount_price: 799
    },
    {
        h1: {
            ua: 'Роздільний купальник Colori Alla Moda'
        },
        price: 1200,
        discount_price: 799
    },{
        h1: {
            ua: 'Роздільний купальник Colori Alla Moda'
        },
        price: 1200,
        discount_price: 799
    },{
        h1: {
            ua: 'Роздільний купальник Colori Alla Moda'
        },
        price: 1200,
        discount_price: 799
    },

];

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
    // axios.get('/api/v1/product/new-products')
    //     .then(({data}) => {
    //         state.isLoading = false;
    //         state.products = data.result;
    //     })
    //     .catch((response) => console.log(response));
})
</script>
