<template>
    <Head :lang="lang" :product="product"/>
    <Breadcrumbs :options="options"
                 :parent-url="route('category',product.categories[0].slug)"
                 :currentUrl-url="route().current"
                 :parent="product.categories[0].title[lang]"
                 :title="product.h1[lang]"/>

    <div class="grid grid-cols-1 gap-4">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="slider">
                <ImagesSlider :images="product.images" :preview="product.preview"/>
            </div>
            <div>
                <h2 class="text-3xl font-heading text-text font-bold">
                    {{ product.h1[lang] }}
                </h2>
                <div class="grid grid-cols-1 md:grid-cols-2 font-subheading">
                    <div class="d-flex text-[10px]">
                        <div>Код: {{ product.id }}</div>
                        <div v-if="authUser">Артикул: {{ product.vendor_code }}</div>
                    </div>
                    <span v-if="product.status === 'in stock'"
                          class="text-[#38af44] text-[14px] font-medium text-end">
                        В наявності
                    </span>
                    <span v-else-if="product.status === 'ends'"
                          class="text-[#FFC300] text-[14px] font-medium text-end">
                        Закінчується
                    </span>
                    <span v-else class="text-[#C70039] text-[14px] font-medium text-end">
                        Нема в наявності
                    </span>
                </div>
                <AddToCart :product="product"
                           :eventIdAddToCard="eventIdAddToCard"
                           :eventIdPurchaseIn1Click="eventIdPurchaseIn1Click"
                />
                <div class="content" v-html="product.content[lang]"></div>
            </div>
        </div>
        <Content :lang="lang"
                 :characteristics="characteristics"
                 :sizeTable="product.size_table"
                 :youtube="product.youtube"
                 :options="options"
        />
        <AllReviewsCarousel :data="reviews"/>

        <div class="grid grid-cols-1 gap-5">
            <RelativeProducts :lang="lang" :products="recommendProducts"/>
            <BestSellingProducts :lang="lang" :products="bestProducts"/>
            <NewProducts :lang="lang" :products="newProducts"/>
        </div>

        <FaqComponent :data="faqs" :lang="lang"/>
        <Support/>
    </div>
</template>

<script setup>
import Support from '../Components/Support.vue';
import FaqComponent from '../Components/FaqComponent.vue';
import AllReviewsCarousel from '../Components/AllReviewsCarousel.vue';
import BestSellingProducts from './BestSellingProducts.vue';
import RelativeProducts from './RelativeProducts.vue';
import NewProducts from './NewProducts.vue';
import ImagesSlider from './ImagesSlider.vue';
import Content from './Content.vue';
import AddToCart from './AddToCart.vue';
import MasterLayout from '@/Layouts/MasterLayout.vue'
import Breadcrumbs from './Breadcrumbs.vue'
import Head from "./Head.vue";
import eventTracking from "@/Includes/eventTracking";

import {isLoading} from "@/Pages/Public/load";
import {onMounted} from "vue";
import {useGtm} from "@gtm-support/vue-gtm";

defineOptions({layout: MasterLayout})

const gtm = useGtm();

const props = defineProps([
    'categories',
    'options',
    'pages',
    'lang',
    'reviews',
    'bestProducts',
    'newProducts',
    'recommendProducts',
    'characteristics',
    'product',
    'faqs',
    'authUser',
    'eventIdPageView',
    'eventIdContent',
    'eventIdAddToCard',
    'eventIdPurchaseIn1Click',
]);


onMounted(async () => {
    isLoading.value = false;

    if (import.meta.env.MODE === 'production') {
        try {
            eventTracking('PageView', {}, props.eventIdPageView);
            eventTracking('ViewContent', {
                    "value": props.product.discount_price ? props.product.discount_price : props.product.price,
                    "currency": "UAH",
                    "content_type": "product",
                    "content_ids": [props.product.id],
                    "content_name": props.product.h1
                },
                props.eventIdContent
            );
            gtm.trackEvent({
                event: 'view_product',
                ecommerce: {
                    items: [{
                        item_name: props.product.h1,
                        item_id: props.product.id,
                        price: props.product.discount_price ? props.product.discount_price : props.product.price,
                        quantity: 1
                    }]
                }
            });
        } catch (e) {
            console.error(e);
        }
    }
})
</script>
