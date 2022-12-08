<template>
    <div v-if="state.products.length">
        <loader v-if="state.isLoading"></loader>
        <div class="font-bold text-black text-center text-[24px] mb-[15px]">{{ textBestSelling }}</div>
        <product-cards v-if="!state.isLoading"
                       :products="state.products"
                       :lang="lang"
                       :text-go-to-product-card="textGoToProductCard"
                       :product-route="productRoute"
                       class="mb-5"
        ></product-cards>
        <div v-if="state.showLoadMore" class="text-center">
            <loader v-if="state.isLoadingMore"></loader>
            <button-component v-if="!state.isLoadingMore"
                              @click="fetch"
                              type="button"
            >{{ textLoadMore }}</button-component>
        </div>
    </div>
</template>

<script setup>
import {onMounted, ref} from "vue";
import LoadMore from '@/Pages/Public/Components/LoadMore.vue';

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
    textBestSelling: {
        type: String,
        default: 'Найпопулярніші'
    }
});

const state = ref({
    isLoading: false,
    isLoadingMore: false,
    showLoadMore: true,
    products: [],
    currentPage: 1,
    total: 1,
    endpoint: '/api/v1/product/best-selling?page='
});

onMounted(() => {
    axios.get('/api/v1/product/best-selling')
        .then(({data}) => {
            state.value.isLoading = false;
            state.value.products = data.result.data;
            state.value.total = data.result.total;
            state.value.currentPage = data.result.current_page;
            state.value.showLoadMore = (data.result.to !== data.result.total);
        })
        .catch((response) => console.log(response));
});

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
