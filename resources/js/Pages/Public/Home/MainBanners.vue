<template>
    <section class="banners mb-5" v-if="banners.length">
        <Swiper :modules="modules" v-bind="settings" class="main-banners-slider">
            <SwiperSlide v-for="(banner,i) in banners" :key="i" class="shadow-sm">
                <a :href="getLink(banner.link)">
                    <picture>
                        <source
                            media="(max-width: 568px)"
                            :srcset="route('images.banners.mobile',lang === 'ru' ? banner.image_mobile.ru : (lang === 'ua' ? banner.image_mobile.ua : null))"
                        >
                        <source
                            :srcset="route('images.banners.table',lang === 'ru' ? banner.image_table.ru : (lang === 'ua' ? banner.image_table.ua : null))"
                            media="(max-width: 991px)">
                        <source
                            :srcset="route('images.banners.desktop',lang === 'ru' ? banner.image_desktop.ru : (lang === 'ua' ? banner.image_desktop.ua : null))">
                        <img
                            :srcset="route('images.banners.desktop',lang === 'ru' ? banner.image_desktop.ru : (lang === 'ua' ? banner.image_desktop.ua : null))"
                            :alt="lang === 'ru' ? banner.title.ru : (lang === 'ua' ? banner.title.ua : null)"
                            class="w-full"
                        >
                    </picture>
                </a>
            </SwiperSlide>
        </Swiper>
    </section>
</template>

<script setup>
import {Lazy, Autoplay, Pagination, EffectCreative} from "swiper";
import {onMounted, ref} from "vue";
import {Swiper, SwiperSlide} from 'swiper/vue';

const props = defineProps(['lang']);
const banners = ref([]);

const modules = [Lazy, Autoplay, Pagination, EffectCreative];
const settings = {
    slidesPerView: 1,
    spaceBetween: 0,
    pagination: {
        dynamicBullets: true,
        clickable: true
    },
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    lazy: true,
    effect: 'creative',
    creativeEffect: {
        prev: {
            shadow: true,
            translate: ['-20%', 0, -1],
        },
        next: {
            translate: ['100%', 0, 0],
        },
    }
};

onMounted(() => {
    axios.get('/api/v1/banners/all')
        .then(({data}) => banners.value = data.result)
        .catch((response) => console.log(response));
})

function getLink(val) {
    if (props.lang === 'ru') {
        return val.ru ? val.ru : 'javascript:'
    } else if (props.lang === 'ua') {
        return val.ua ? val.ua : 'javascript:'
    } else {
        return 'javascript:'
    }
}
</script>
