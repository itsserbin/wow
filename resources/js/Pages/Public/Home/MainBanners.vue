<template>
    <section class="banners mb-5" v-if="state.banners.length">
        <swiper :modules="modules" v-bind="settings">
            <swiper-slide v-for="(banner,i) in state.banners" :key="i">
                <a :href="getLink(banner.link)" class="rounded-lg">
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
            </swiper-slide>
        </swiper>

    </section>
</template>

<script setup>
import {Lazy, Autoplay, Pagination, EffectCreative} from "swiper";
import {computed, onMounted, ref} from "vue";

const props = defineProps(['lang']);

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
        delay: 4000,
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

function getLink(val) {
    if (props.lang === 'ru') {
        return val.ru ? val.ru : 'javascript:'
    } else if (props.lang === 'ua') {
        return val.ua ? val.ua : 'javascript:'
    } else {
        return 'javascript:'
    }
}

const state = ref({
    banners: [],
})

onMounted(() => {
    axios.get('/api/v1/banners/all')
        .then(({data}) => state.value.banners = data.result)
        .catch((response) => console.log(response));
})
</script>
