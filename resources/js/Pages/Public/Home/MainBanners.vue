<template>
    <section id="banners" class="banners mb-5" v-if="state.banners.length">
        <swiper
            v-if="state.banners.length"
            class="main-banners"
            :slides-per-view="1"
            :space-between="0"
            :modules="modules"
            :navigation="true"
            :loop="true"
            :autoplay="{
              delay: 2500,
              disableOnInteraction: false,
            }"
            :lazy="true"
        >

            <swiper-slide v-for="(banner,i) in state.banners" :key="i">
                <a :href="lang === 'ru' ? (banner.link.ru ? banner.link.ru : 'javascript:' ) : (lang === 'ua' ? (banner.link.ua ? banner.link.ua : 'javascript:') : 'javascript:')"
                >
                    <picture>
                        <source media="(max-width: 568px)"
                                :srcset="lang === 'ru' ? banner.image_mobile.ru : (lang === 'ua' ? banner.image_mobile.ua : null)"
                        >
                        <source
                            :srcset="lang === 'ru' ? banner.image_table.ru : (lang === 'ua' ? banner.image_table.ua : null)"
                            media="(max-width: 991px)">
                        <source
                            :srcset="lang === 'ru' ? banner.image_desktop.ru : (lang === 'ua' ? banner.image_desktop.ua : null)">
                        <img
                            :srcset="lang === 'ru' ? banner.image_desktop.ru : (lang === 'ua' ? banner.image_desktop.ua : null)"
                            :alt="lang === 'ru' ? banner.title.ru : (lang === 'ua' ? banner.title.ua : null)"
                            class="w-full"
                        >
                    </picture>
                </a>
            </swiper-slide>
        </swiper>

    </section>
</template>

<script setup>
import {Lazy, Autoplay, Navigation} from "swiper";
import {onMounted, ref} from "vue";

defineProps(['lang']);

const modules = [Lazy, Autoplay, Navigation];

const state = ref({
    banners: [],
})

onMounted(() => {
    axios.get('/api/v1/banners/all')
        .then(({data}) => {
            state.value.banners = data.result;
            console.log(state.value.banners)
        })
        .catch((response) => console.log(response));
})
</script>
