<template>
    <div class="grid grid-cols-1 gap-4">
        <MainBanners :data="banners" :lang="lang"/>

        <Categories v-if="categories.length" :data="categories" :lang="lang"/>

        <BestSelling :lang="lang"
                     :data="stateBestSellingProducts.data"
                     :isLoadMore="stateBestSellingProducts.isLoadMore"
                     :isShowLoadMore="stateBestSellingProducts.isShowLoadMore"
                     @fetch="fetchBestSellingProducts"
                     v-if="stateBestSellingProducts.data.length"
        />

        <NewProducts :lang="lang"
                     :data="stateNewProducts.data"
                     :isLoadMore="stateNewProducts.isLoadMore"
                     :isShowLoadMore="stateNewProducts.isShowLoadMore"
                     @fetch="fetchNewProducts"
                     v-if="stateNewProducts.data.length"
        />

        <AllProducts :lang="lang"
                     :data="stateAllProducts.data"
                     :isLoadMore="stateAllProducts.isLoadMore"
                     :isShowLoadMore="stateAllProducts.isShowLoadMore"
                     @fetch="fetchAllProducts"
                     v-if="stateAllProducts.data.length"
        />

        <Advantages v-if="advantages.length" :lang="lang" :data="advantages"/>

        <AllReviewsCarousel v-if="reviews.length" :data="reviews"/>

        <Content v-if="text" :data="text[lang]"/>

        <FaqComponent v-if="faqs.length" :lang="lang" :data="faqs"/>

        <Support v-if="!isLoading"/>
    </div>
</template>

<script setup>
import {isLoading} from "@/Pages/Public/load";
import {onMounted, ref} from "vue";
import AllProducts from './AllProducts.vue';
import Content from '../Components/Content.vue';
import BestSelling from './BestSelling.vue';
import NewProducts from './NewProducts.vue';
import Advantages from './../Components/Advantages.vue';
import AllReviewsCarousel from './../Components/AllReviewsCarousel.vue';
import FaqComponent from './../Components/FaqComponent.vue';
import Support from './../Components/Support.vue';
import Categories from './../Components/Categories.vue';
import MainBanners from './../Components/Banners.vue';

const props = defineProps([
    'lang',
    'banners',
    'categories',
    'reviews',
    'text',
    'faqs',
    'advantages'
]);

const banners = ref([]);
const categories = ref([]);
const advantages = ref([]);
const reviews = ref([]);
const text = ref([]);
const faqs = ref([]);

const stateNewProducts = ref({
    data: [],
    isLoadMore: false,
    isShowLoadMore: false,
    currentPage: 0,
    endpoint: '/api/v1/product/new-products?page='
});

const stateAllProducts = ref({
    data: [],
    isLoadMore: false,
    isShowLoadMore: false,
    currentPage: 0,
    endpoint: '/api/v1/product?page='
});

const stateBestSellingProducts = ref({
    data: [],
    isLoadMore: false,
    isShowLoadMore: false,
    currentPage: 0,
    endpoint: '/api/v1/product/best-selling?page='
});

onMounted(async () => {
    banners.value = JSON.parse(props.banners);
    categories.value = JSON.parse(props.categories);
    await fetchBestSellingProducts();
    isLoading.value = false;
    await fetchNewProducts();
    await fetchAllProducts();
    advantages.value = JSON.parse(props.advantages);
    reviews.value = JSON.parse(props.reviews);
    faqs.value = JSON.parse(props.faqs);
})

const fetchAllProducts = async () => {
    stateAllProducts.value.isLoadMore = true;
    await axios.get(stateAllProducts.value.endpoint + (stateAllProducts.value.currentPage + 1))
        .then(({data}) => onSuccessFetch(stateAllProducts.value, data))
        .catch((response) => console.error(response));
}

const fetchBestSellingProducts = async () => {
    stateBestSellingProducts.value.isLoadMore = true;
    await axios.get(stateBestSellingProducts.value.endpoint + (stateBestSellingProducts.value.currentPage + 1))
        .then(({data}) => onSuccessFetch(stateBestSellingProducts.value, data))
        .catch((response) => console.error(response));
}

const fetchNewProducts = async () => {
    await axios.get(stateNewProducts.value.endpoint + (stateNewProducts.value.currentPage + 1))
        .then(({data}) => onSuccessFetch(stateNewProducts.value, data))
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
