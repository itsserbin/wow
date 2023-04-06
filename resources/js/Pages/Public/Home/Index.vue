<template>
    <div class="grid grid-cols-1 gap-4">
        <MainBanners :data="banners" :lang="lang"/>

        <Categories :data="categories" :lang="lang"/>

        <BestSelling :lang="lang"
                     :data="stateBestSellingProducts.data"
                     :isLoadMore="stateBestSellingProducts.isLoadMore"
                     :isShowLoadMore="stateBestSellingProducts.isShowLoadMore"
                     @fetch="fetchBestSellingProducts"
        />

        <NewProducts :lang="lang"
                     :data="stateNewProducts.data"
                     :isLoadMore="stateNewProducts.isLoadMore"
                     :isShowLoadMore="stateNewProducts.isShowLoadMore"
                     @fetch="fetchNewProducts"
        />

        <AllProducts :lang="lang"
                     :data="stateAllProducts.data"
                     :isLoadMore="stateAllProducts.isLoadMore"
                     :isShowLoadMore="stateAllProducts.isShowLoadMore"
                     @fetch="fetchAllProducts"
        />

        <Advantages :lang="lang" :data="advantages"/>

        <AllReviewsCarousel :data="reviews"/>

        <div class="content" v-if="text" v-html="text[lang]"></div>

        <FaqComponent :lang="lang" :data="faqs"/>

        <Support/>
    </div>
</template>

<script setup>
import {isLoading} from "@/Pages/Public/load";
import {onMounted, ref} from "vue";
import {defineAsyncComponent} from 'vue'

const AllProducts = defineAsyncComponent(() => import('./AllProducts.vue'))
const BestSelling = defineAsyncComponent(() => import('./BestSelling.vue'))
const NewProducts = defineAsyncComponent(() => import('./NewProducts.vue'))
const Advantages = defineAsyncComponent(() => import('./../Components/Advantages.vue'))
const AllReviewsCarousel = defineAsyncComponent(() => import('./../Components/AllReviewsCarousel.vue'))
const FaqComponent = defineAsyncComponent(() => import('./../Components/FaqComponent.vue'))
const Support = defineAsyncComponent(() => import('./../Components/Support.vue'))
const Categories = defineAsyncComponent(() => import('./../Components/Categories.vue'))
const MainBanners = defineAsyncComponent(() => import('./../Components/Banners.vue'))

const props = defineProps([
    'lang',
    'banners',
    'categories',
    'reviews',
    'text',
    'faqs',
    'advantages'
]);

const banners = JSON.parse(props.banners);
const categories = JSON.parse(props.categories);
const advantages = JSON.parse(props.advantages);
const reviews = JSON.parse(props.reviews);
const text = JSON.parse(props.text);
const faqs = JSON.parse(props.faqs);

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
    await fetchAllProducts();
    await fetchBestSellingProducts();
    await fetchNewProducts();
    isLoading.value = false;
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
