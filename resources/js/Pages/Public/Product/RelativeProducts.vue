<template>
    <section class="relative product-list" v-if="products.length">
        <div class="font-bold text-black text-center text-2xl font-heading mb-[15px]">
            {{ textRelativeProducts }}
        </div>
        <swiper :modules="modules" v-bind="settings" class="relative-slider">
            <swiper-slide v-for="(product,i) in products" :key="i">
                <product-card :product="product"
                              :lang="lang"
                ></product-card>
            </swiper-slide>
        </swiper>
    </section>
</template>

<script setup>
import {Autoplay, Navigation} from "swiper";
import {onMounted, ref} from "vue";

const modules = [Navigation, Autoplay];
const settings = {
    spaceBetween: 10,
    navigation: true,
    pagination: {
        clickable: true,

    },
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false
    },
    slidesPerView: 2,
    breakpoints: {
        768: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
        1366: {
            slidesPerView: 5,
            spaceBetween: 20
        }
    }
}
const products = ref([]);

const props = defineProps({
    id: String,
    lang: String,
    textRelativeProducts: {
        type: String,
        default: 'Схожі товари',
    },
});

onMounted(() => {
    axios.get('/api/v1/product/relative/' + props.id)
        .then(({data}) => products.value = data.result)
        .catch((response) => console.log(response));
});
</script>

<style>
.relative-slider .swiper-wrapper{
    margin-bottom: 1.5em;
}
</style>
