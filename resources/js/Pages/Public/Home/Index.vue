<script setup>
import ProductsList from './ProductsList.vue';
import MasterLayout from '@/Layouts/MasterLayout.vue'
import MainBanners from './../Components/Banners.vue';
import Categories from './../Components/Categories.vue';
import Head from "@/Pages/Public/Components/Head.vue";

defineOptions({layout: MasterLayout})

import {defineAsyncComponent, reactive} from "vue";

const Content = defineAsyncComponent(() => import('../Components/Content.vue'));
const Advantages = defineAsyncComponent(() => import('../Components/Advantages.vue'));
const AllReviewsCarousel = defineAsyncComponent(() => import('../Components/AllReviewsCarousel.vue'));
const FaqComponent = defineAsyncComponent(() => import('../Components/FaqComponent.vue'));
const Support = defineAsyncComponent(() => import('../Components/Support.vue'));

const props = defineProps([
    'lang',
    'categories',
    'options',
    'banners',
    'bestSellingProducts',
    'newProducts',
    'allProducts',
    'pages',
    'reviews',
    'text',
    'faqs',
    'advantages',
]);

const meta = {
    title: props.lang === 'ua' ? props.options.meta_title_ua : props.options.meta_title_ru,
    description: props.lang === 'ua' ? props.options.meta_description_ua : props.options.meta_description_ru,
};

const stateNewProducts = reactive({
    data: props.newProducts.data,
    isLoadMore: false,
    isShowLoadMore: props.newProducts.current_page !== props.newProducts.per_page,
    currentPage: 1,
    endpoint: '/api/v1/product/new-products?page='
});

const stateAllProducts = reactive({
    data: props.allProducts.data,
    isLoadMore: false,
    isShowLoadMore: props.allProducts.current_page !== props.allProducts.per_page,
    currentPage: 1,
    endpoint: '/api/v1/product?page='
});

const stateBestSellingProducts = reactive({
    data: props.bestSellingProducts.data,
    isLoadMore: false,
    isShowLoadMore: props.bestSellingProducts.current_page !== props.bestSellingProducts.per_page,
    currentPage: 1,
    endpoint: '/api/v1/product/best-selling?page='
});

const fetch = async (val) => {
    await axios.get(val.endpoint + (val.currentPage + 1))
        .then(({data}) => onSuccessFetch(val, data))
        .catch((response) => console.error(response));
}

const onSuccessFetch = (variable, data) => {
    variable.data = variable.data.concat(data.result.data);
    variable.total = data.result.total;
    variable.currentPage = data.result.current_page;
    variable.isShowLoadMore = (data.result.to !== data.result.total);
    variable.isLoadMore = false;
}
</script>

<template>
    <Head :title="meta.title" :description="meta.description"/>
    <div class="grid grid-cols-1 gap-4">
        <MainBanners v-if="banners.length" :data="banners" :lang="lang"/>

        <Categories v-if="categories.length" :data="categories" :lang="lang"/>

        <ProductsList v-if="stateBestSellingProducts.data.length"
                      :slider="true"
                      :lang="lang"
                      :data="stateBestSellingProducts.data"
                      :isLoadMore="stateBestSellingProducts.isLoadMore"
                      :isShowLoadMore="stateBestSellingProducts.isShowLoadMore"
                      @fetch="fetch(stateBestSellingProducts)"
                      heading="Найпопулярніші"
        />

        <ProductsList v-if="stateNewProducts.data.length"
                      :slider="true"
                      :lang="lang"
                      :data="stateNewProducts.data"
                      :isLoadMore="stateNewProducts.isLoadMore"
                      :isShowLoadMore="stateNewProducts.isShowLoadMore"
                      @fetch="fetch(stateNewProducts)"
                      heading="Останні надходження"
        />

        <ProductsList v-if="stateAllProducts.data.length"
                      :slider="true"
                      :lang="lang"
                      :data="stateAllProducts.data"
                      :isLoadMore="stateAllProducts.isLoadMore"
                      :isShowLoadMore="stateAllProducts.isShowLoadMore"
                      @fetch="fetch(stateAllProducts)"
                      heading="Усі товари"
        />

        <Advantages v-if="advantages.length" :lang="lang" :data="advantages"/>

        <AllReviewsCarousel v-if="reviews.length" :data="reviews"/>

        <Content v-if="options.text_home_page_ua || options.text_home_page_ru"
                 :data="lang === 'ua' ? options.text_home_page_ua : options.text_home_page_ru"
        />

        <FaqComponent v-if="faqs.length" :lang="lang" :data="faqs"/>

        <Support/>
    </div>
</template>
