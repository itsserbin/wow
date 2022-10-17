<template>
    <section class="relative product-list" v-if="products.length">
        <div class="font-bold text-black text-center text-[24px] mb-[15px]">
            {{ textBestSelling }}
        </div>
        <div class="relative-slider">
            <swiper
                class="social-reviews-carousel"
                :space-between="5"
                :modules="modules"
                :navigation="true"
                :pagination="{
                          clickable: true,
                        }"
                :loop="true"
                :autoplay="{
                          delay: 3000,
                          disableOnInteraction: false,
                        }"
                :slides-per-view="2"
                :breakpoints="{
                          '768': {
                            slidesPerView: 3,
                            spaceBetween: 10,
                          },
                          '1024': {
                            slidesPerView: 4,
                            spaceBetween: 20,
                          },
                          '1366': {
                            slidesPerView: 5,
                            spaceBetween: 20,
                          },
                        }"
                :lazy="true"
            >

                <swiper-slide v-for="(product,i) in products" :key="i">
                    <product-card :product="product"
                                  :lang="lang"
                    ></product-card>
                </swiper-slide>
            </swiper>
        </div>
    </section>
</template>

<script setup>

import {Autoplay, Lazy, Navigation} from "swiper";
import {onMounted, ref} from "vue";

const modules = [Navigation, Autoplay, Lazy];

const products = ref([]);

defineProps({
    lang: String,
    textBestSelling: {
        type: String,
        default: 'Найпопулярніші'
    },
});

onMounted(() => {
    axios.get(route('api.v1.products.best-selling'))
        .then(({data}) => products.value = data.result.data)
        .catch((response) => console.log(response));
});
</script>
