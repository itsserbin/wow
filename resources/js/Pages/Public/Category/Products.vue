<template>
    <div class="relative">
        <div class="flex justify-between md:justify-end items-center">
            <div class="block md:hidden mr-2">
                <Button type="button" @click="toggleFilter">Фільтрувати</Button>
            </div>

            <div class="block">
                <select v-model="params.sort"
                        @change="sort"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                    <option :value="null">Популярні</option>
                    <option value="created_at">Новинки</option>
                    <option value="min_price">Від дешевих до дорогих</option>
                    <option value="max_price">Від дорогих до дешевих</option>
                </select>
            </div>
        </div>
        <div>
            <div class="grid grid-cols-12 gap-4">
                <div :class="{'!block fixed h-full w-full z-50 overflow-y-scroll top-0 right-0' : state.isShowFilter}"
                     class="filter hidden md:col-span-3 md:block"
                >
                    <Filter :characteristics="JSON.parse(characteristics)"
                            :lang="lang"
                            @fetch="filter"
                            @close="toggleFilter"
                            :isShow="state.isShowFilter"
                    />
                </div>
                <div class="products col-span-12 md:col-span-9">
                    <Loader v-if="state.isLoading"/>
                    <div v-if="!state.isLoading">
                        <div v-if="state.products.length">
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
                        <div v-else class="col-span-9 font-bold text-black text-center text-2xl">
                            Результати відсутні
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import {ref, onMounted, computed} from "vue";
import Loader from '@/Pages/Public/Components/Loader.vue'
import ProductCards from '@/Pages/Public/Components/ProductCards.vue'
import Button from '@/Pages/Public/Components/Button.vue'
import Filter from '@/Pages/Public/Category/Filter.vue'
import {ProductsRepository} from '@/Repositories/ProductsRepository.js'

const state = ref({
    products: [],
    isLoading: true,
    isLoadingMore: false,
    showLoadMore: true,
    isShowFilter: false
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
    characteristics: String
});

const params = ref({
    currentPage: 1,
    sort: null,
    filter: null,
});

const getParams = computed(() => {
    const {currentPage, sort, filter} = params.value;
    return {
        page: currentPage,
        sort: sort,
        filter: filter,
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

async function filter(val) {
    params.value.filter = val;
    state.value.isLoading = true;
    params.value.currentPage = 1;

    if (state.value.isShowFilter) {
        toggleFilter();
    }
    await fetch();
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

function toggleFilter() {
    state.value.isShowFilter = !state.value.isShowFilter;
}
</script>
