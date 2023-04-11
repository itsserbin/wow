<template>
    <MasterLayout :categories="categories"
                  :options="options"
                  :lang="lang"
                  :pages="pages"
                  :eventIdPageView="eventIdPageView"
    >
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

            <Content v-if="options.text_home_page_ua || options.text_home_page_ru"
                     :data="lang === 'ua' ? options.text_home_page_ua : options.text_home_page_ru"
            />

            <FaqComponent v-if="faqs.length" :lang="lang" :data="faqs"/>

            <Support v-if="!isLoading"/>
        </div>
    </MasterLayout>
</template>

<script setup>
import MasterLayout from '@/Layouts/MasterLayout.vue'
import {isLoading} from "@/Pages/Public/load";
import {getCurrentInstance, onMounted, ref, watch,reactive} from "vue";
import AllProducts from './AllProducts.vue';
import BestSelling from './BestSelling.vue';
import NewProducts from './NewProducts.vue';
import Content from '../Components/Content.vue';
import Advantages from './../Components/Advantages.vue';
import AllReviewsCarousel from './../Components/AllReviewsCarousel.vue';
import FaqComponent from './../Components/FaqComponent.vue';
import Support from './../Components/Support.vue';
import Categories from './../Components/Categories.vue';
import MainBanners from './../Components/Banners.vue';
import useEventTracking from '@/Includes/eventTracking.js'

// const {setEventIdPageView} = useEventTracking()

const {appContext} = getCurrentInstance()
const {$fbq} = appContext.config.globalProperties

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
    'eventIdPageView'
]);

const stateNewProducts = ref({
    data: [],
    isLoadMore: false,
    isShowLoadMore: false,
    currentPage: 1,
    endpoint: '/api/v1/product/new-products?page='
});

const stateAllProducts = ref({
    data: [],
    isLoadMore: false,
    isShowLoadMore: false,
    currentPage: 1,
    endpoint: '/api/v1/product?page='
});

const stateBestSellingProducts = ref({
    data: [],
    isLoadMore: false,
    isShowLoadMore: false,
    currentPage: 1,
    endpoint: '/api/v1/product/best-selling?page='
});

onMounted(() => {
    if (props.bestSellingProducts) {
        stateBestSellingProducts.value.data = props.bestSellingProducts.data;
        if (props.bestSellingProducts.current_page !== props.bestSellingProducts.per_page) {
            stateBestSellingProducts.value.isShowLoadMore = true;
        }
    }
    if (props.newProducts) {
        stateNewProducts.value.data = props.newProducts.data;
        if (props.newProducts.current_page !== props.newProducts.per_page) {
            stateBestSellingProducts.value.isShowLoadMore = true;
        }
    }
    if (props.allProducts) {
        stateAllProducts.value.data = props.allProducts.data;
        if (props.allProducts.current_page !== props.allProducts.per_page) {
            stateAllProducts.value.isShowLoadMore = true;
        }
    }

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
