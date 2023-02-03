<template>
    <div v-if="state.products.length">
        <div class="flex justify-end">
            <select v-model="params.sort" @change="sort">
                <option :value="null">Спочатку популярні</option>
                <option value="created_at">Спочатку новинки</option>
                <option value="min_price">Від дешевих до дорогих</option>
                <option value="max_price">Від дорогих до дешевих</option>
            </select>
        </div>
        <Loader v-if="state.isLoading"/>
        <div v-if="!state.isLoading">
            <div class="font-bold text-black text-center text-[24px] mb-[15px]">{{ title }}</div>
            <ProductCards :products="state.products"
                          :lang="lang"
                          :text-go-to-product-card="textGoToProductCard"
                          :slider="true"
            ></ProductCards>
            <div v-if="state.showLoadMore" class="text-center mt-5">
                <Loader v-if="state.isLoadingMore"/>
                <Button v-if="!state.isLoadingMore"
                        @click="loadMore"
                        type="button"
                >Завантажити ще
                </Button>
            </div>
        </div>
    </div>
</template>

<script setup>
import {ref, onMounted, computed} from "vue";
import Loader from '@/Pages/Public/Components/Loader.vue'
import ProductCards from '@/Pages/Public/Components/ProductCards.vue'
import Button from '@/Pages/Public/Components/Button.vue'
import {ProductsRepository} from '@/Repositories/ProductsRepository.js'

const state = ref({
    products: [],
    isLoading: false,
    isLoadingMore: false,
    showLoadMore: true,
});

const props = defineProps({
    title: String,
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

const params = ref({
    currentPage: 1,
    sort: null
});

const getParams = computed(() => {
    const {currentPage, sort} = params.value;
    return {
        page: currentPage,
        sort: sort,
        slug: (route().params).slug
    };
});

onMounted(() => fetch());

async function fetch() {
    state.value.isLoading = true;
    try {
        const {success, result} = await ProductsRepository().v1().category(getParams.value);
        if (success) {
            state.value.isLoading = false;
            params.value.currentPage = result.current_page;
            state.value.products = result.data;
            state.value.showLoadMore = (result.to !== result.total);
        }
    } catch (e) {
        console.error(e);
        state.value.isLoading = false;
    }
}

async function sort() {
    state.value.isLoading = true;
    params.value.currentPage = 1;
    await fetch();
}

async function loadMore() {
    state.value.isLoadingMore = true;
    params.value.currentPage += 1;
    try {
        const {success, result} = await ProductsRepository().v1().category(getParams.value);
        if (success) {
            state.value.isLoadingMore = false;
            params.value.currentPage = result.current_page;
            state.value.products = state.value.products.concat(result.data);
            state.value.showLoadMore = (result.to !== result.total);
        }
    } catch (e) {
        console.error(e);
        state.value.isLoadingMore = false;
    }
}
</script>
