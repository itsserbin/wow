<template>
    <div v-if="products.length">
        <loader v-if="state.isLoading"></loader>
        <div class="product-list__title">{{ textAllProducts }}</div>
        <product-cards v-if="!state.isLoading"
                       :products="products"
                       :lang="lang"
                       :text-go-to-product-card="textGoToProductCard"
                       :product-route="productRoute"
                       class="mb-5"
        ></product-cards>
        <div class="row d-flex justify-content-center" v-if="state.showLoadMore">
            <loader v-if="state.isLoadingMore"></loader>
            <button class="load-more__button" type="button" v-if="!state.isLoadingMore" @click="fetch">
                <span>{{ textLoadMore }}</span>
            </button>
        </div>
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
    textAllProducts: {
        type: String,
        default: 'Усі товари'
    }
});

const state = ref({
    isLoading: false,
    isLoadingMore: false,
    showLoadMore: true,
    products: [],
    currentPage: 1,
    total: 1,
    endpoint: '/api/v1/product?page='
})

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

// onMounted(() => {
//     axios.get('/api/v1/product')
//         .then(({data}) => {
//             state.value.isLoading = false;
//             state.value.products = data.result.data;
//             state.value.total = data.result.total;
//             state.value.currentPage = data.result.current_page;
//             state.value.showLoadMore = (data.result.to !== data.result.total);
//         })
//         .catch((response) => console.log(response));
// })

function fetch() {
    state.value.isLoadingMore = true;
    axios.get(state.value.endpoint + (state.value.currentPage + 1))
        .then(({data}) => {
            state.value.isLoadingMore = false;
            state.value.currentPage = data.result.current_page;
            state.value.products = state.value.products.concat(data.result.data);
            state.value.showLoadMore = (data.result.to !== data.result.total);
        });
}
</script>

<!--<script>-->
<!--export default {-->
<!--    data() {-->
<!--        return {-->
<!--            isLoading: true,-->
<!--            isLoadingMore: false,-->
<!--            showLoadMore: true,-->
<!--            products: [],-->
<!--            currentPage: 1,-->
<!--            total: 1,-->
<!--            endpoint: '/api/v1/product?page='-->
<!--        }-->
<!--    },-->
<!--    props: [-->
<!--        'lang',-->
<!--        'textLoadMore',-->
<!--        'textGoToProductCard',-->
<!--        'productRoute',-->
<!--        'textAllProducts'-->
<!--    ],-->
<!--    mounted() {-->
<!--        axios.get('/api/v1/product')-->
<!--            .then(({data}) => {-->
<!--                this.isLoading = false;-->
<!--                this.products = data.result.data;-->
<!--                this.total = data.result.total;-->
<!--                this.currentPage = data.result.current_page;-->
<!--                this.showLoadMore = (data.result.to !== data.result.total);-->
<!--            })-->
<!--            .catch((response) => console.log(response));-->
<!--    },-->
<!--    methods: {-->
<!--        fetch() {-->
<!--            this.isLoadingMore = true;-->
<!--            axios.get(this.endpoint + (this.currentPage + 1))-->
<!--                .then(({data}) => {-->
<!--                    this.isLoadingMore = false;-->
<!--                    this.currentPage = data.result.current_page;-->
<!--                    this.products = this.products.concat(data.result.data);-->
<!--                    this.showLoadMore = (data.result.to !== data.result.total);-->
<!--                });-->
<!--        },-->
<!--    }-->
<!--}-->
<!--</script>-->
