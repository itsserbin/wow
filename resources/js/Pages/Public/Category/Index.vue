<template>
    <MasterLayout :categories="categories"
                  :options="options"
                  :lang="lang"
                  :pages="pages"
                  :eventIdPageView="eventIdPageView"
    >
        <Head :category="category" :lang="lang"/>

        <Breadcrumbs :options="options" :lang="lang" :title="category.title[lang]"/>

        <div class="grid grid-cols-1 gap-4">

            <Banners v-if="banners.length" :lang="lang" :data="banners"/>

            <div class="flex justify-between md:justify-end items-center">
                <div class="block md:hidden mr-2">
                    <Button type="button" @click="toggleFilter">Фільтрувати</Button>
                </div>

                <Sort v-model="params.sort" @sort="onSort"/>
            </div>

            <div class="grid grid-cols-12 gap-4">
                <div :class="{'!block fixed h-full w-full z-50 overflow-y-scroll top-0 right-0' : state.isShowFilter}"
                     class="filter hidden md:col-span-3 md:block"
                >
                    <Filter v-if="Object.keys(characteristics).length"
                            :characteristics="characteristics"
                            :lang="lang"
                            @fetch="filter"
                            @close="toggleFilter"
                            :isShow="state.isShowFilter"
                    />
                </div>
                <div class="products col-span-12 md:col-span-9">
                    <Products :lang="lang"
                              :title="title"
                              :data="state.products"
                              :isLoadingMore="state.isLoadingMore"
                              :isShowLoadMore="state.isShowLoadMore"
                              @fetch="fetch"
                              v-if="state.products.length"
                    />
                </div>
            </div>

            <Content v-if="text" :data="text"/>

            <Consultation v-if="consultation"/>
            <Support v-if="!isLoading"/>
        </div>
    </MasterLayout>
</template>

<script setup>
import {isLoading} from "@/Pages/Public/load";
import {computed, onMounted, ref} from "vue";

import Support from '../Components/Support.vue';
import Consultation from '../Components/Consultation.vue';
import Content from '../Components/Content.vue';
import Banners from '../Components/Banners.vue';
import Products from './Products.vue';
import Sort from './Sort.vue';
import Filter from './Filter.vue';
import ProductsRepository from "@/Repositories/ProductsRepository";
import Button from '@/Pages/Public/Components/Button.vue'
import MasterLayout from '@/Layouts/MasterLayout.vue'
import Breadcrumbs from './Breadcrumbs.vue'
import Head from './Head.vue';

const props = defineProps([
    'banners',
    'lang',
    'title',
    'characteristics',
    'text',
    'consultation',
    'products',
    'categories',
    'category',
    'options',
    'pages',
    'eventIdPageView',
]);

const state = ref({
    products: [],
    isLoadingMore: false,
    isShowLoadMore: true,
    isShowFilter: false
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

onMounted(async () => {
    state.value.products = props.products.data;
    isLoading.value = false;
})

const onSort = async () => {
    params.value.currentPage = 0;
    state.value.products = [];
    await fetch();
}

const filter = async (val) => {
    params.value.filter = val;
    params.value.currentPage = 0;
    state.value.products = [];
    if (state.value.isShowFilter) {
        toggleFilter();
    }
    await fetch();
}

const fetch = async () => {
    params.value.currentPage += 1;
    try {
        const data = await ProductsRepository.v1().category(getParams.value);
        if (data.success) {
            params.value.currentPage = data.result.current_page;
            state.value.products = state.value.products.concat(data.result.data);
            state.value.isShowLoadMore = (data.result.to !== data.result.total);
        }
    } catch (e) {
        console.error(e);
        state.value.isLoading = false;
    }
}

const toggleFilter = () => {
    state.value.isShowFilter = !state.value.isShowFilter;
}

</script>
