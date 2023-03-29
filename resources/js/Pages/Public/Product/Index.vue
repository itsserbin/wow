<template>
    <div class="grid grid-cols-1 gap-4">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="slider">
                <ImagesSlider :images="images" :preview="preview"/>
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
                    <span v-if="product.status === 'in stock'" class="text-[#38af44] text-[14px] font-medium text-end">
                        В наявності
                    </span>
                    <span v-else-if="product.status === 'ends'" class="text-[#FFC300] text-[14px] font-medium text-end">
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
                 :returnAndExchangeUa="returnAndExchangeUa"
                 :returnAndExchangeRu="returnAndExchangeRu"
                 :deliveryAndPaymentUa="deliveryAndPaymentUa"
                 :deliveryAndPaymentRu="deliveryAndPaymentRu"
        />
        <AllReviewsCarousel :data="reviews"/>

        <div class="grid grid-cols-1 gap-5">
            <RelativeProducts :lang="lang" :products="recommendProducts"/>
            <BestSellingProducts :lang="lang" :products="bestProducts"/>
            <NewProducts :lang="lang" :products="newProducts"/>
        </div>

        <FaqComponent :data="faqs" :lang="lang"/>
        <Support />
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
import {isLoading} from "@/Pages/Public/load";
import {onMounted} from "vue";
import {useGtm} from "@gtm-support/vue-gtm";

const gtm = useGtm();

const props = defineProps([
    'lang',
    'images',
    'preview',
    'reviews',
    'bestProducts',
    'newProducts',
    'recommendProducts',
    'characteristics',
    'product',
    'faqs',
    'authUser',
    'eventIdContent',
    'eventIdAddToCard',
    'eventIdPurchaseIn1Click',
    'returnAndExchangeUa',
    'returnAndExchangeRu',
    'deliveryAndPaymentUa',
    'deliveryAndPaymentRu',
]);

const reviews = props.images ? JSON.parse(props.reviews) : null;
const images = props.images ? JSON.parse(props.images) : null;
const preview = props.preview ? JSON.parse(props.preview) : null;
const product = props.product ? JSON.parse(props.product) : null;
const characteristics = props.characteristics ? JSON.parse(props.characteristics) : null;
const bestProducts = props.bestProducts ? JSON.parse(props.bestProducts) : null;
const recommendProducts = props.recommendProducts ? JSON.parse(props.recommendProducts) : null;
const newProducts = props.newProducts ? JSON.parse(props.newProducts) : null;
const faqs = props.faqs ? JSON.parse(props.faqs) : null;

onMounted(async () => {
    isLoading.value = false;
    if (import.meta.env.MODE === 'production') {
        try {
            fbq('track',
                'ViewContent',
                {
                    "value": product.discount_price ? product.discount_price : product.price,
                    "currency": "UAH",
                    "content_type": "product",
                    "content_ids": [product.id],
                    "content_name": product.h1
                },
                {
                    event_id: props.eventIdContent
                }
            );
            gtm.trackEvent({
                event: 'view_product',
                ecommerce: {
                    items: [{
                        item_name: product.h1,
                        item_id: product.id,
                        price: product.discount_price ? product.discount_price : product.price,
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
