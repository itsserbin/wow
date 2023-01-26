<template>
    <div v-if="state.products.length">
        <loader v-if="state.isLoading"></loader>
        <section v-if="!state.isLoading" class="product-list card">
            <div class="font-bold text-black text-center text-[24px] mb-[15px]">{{ title }}</div>
            <product-cards :products="state.products"
                           :lang="lang"
                           :text-go-to-product-card="textGoToProductCard"
                           :product-route="productRoute"
                           :slider="true"
            ></product-cards>
            <div v-if="state.showLoadMore" class="text-center mt-5">
                <loader v-if="state.isLoadingMore"></loader>
                <button-component v-if="!state.isLoadingMore"
                                  @click="fetch"
                                  type="button"
                >Завантажити ще
                </button-component>
            </div>
        </section>
    </div>
</template>

<script setup>
import {ref, onMounted} from "vue";

const state = ref({
    category: null,
    products: [],
    isLoading: true,
    isLoadingMore: false,
    showLoadMore: true,
    currentPage: 1,
    total: 1,
    endpoint: `/api/v1/product/category/?page=`
});

const props = defineProps({
    title: String,
    slug: String,
    productRoute: String,
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
});

onMounted(() => {
    state.value.endpoint = '/api/v1/product/category/' + props.slug + '?page=';

    axios.get('/api/v1/product/category/' + props.slug)
        .then(({data}) => {
            state.value.isLoading = false;
            state.value.products = data.result.data;
            state.value.total = data.result.total;
            state.value.currentPage = data.result.current_page;
            state.value.showLoadMore = (data.result.to !== data.result.total);
        })
        .catch((response) => {
            state.value.isLoading = false;
            console.log(response);
        });
})

function fetch() {
    state.value.isLoadingMore = true;
    axios.get(state.value.endpoint + (state.value.currentPage + 1))
        .then(({data}) => {
            state.value.isLoadingMore = false;
            state.value.currentPage = data.result.current_page;
            state.value.products = state.value.products.concat(data.result.data);
            state.value.showLoadMore = (data.result.to !== data.result.total);
        })
        .catch((response) => {
            state.value.isLoading = false;
            console.log(response);
        });
}
</script>
