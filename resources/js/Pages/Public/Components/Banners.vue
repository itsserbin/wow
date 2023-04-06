<template>
    <section class="banners mb-5" v-if="data.length">
        <Swiper :modules="modules" v-bind="settings" class="main-banners-slider">
            <SwiperSlide v-for="(banner,i) in data" :key="i" class="shadow-sm">
                <a :href="banner.link ? banner.link[lang] : 'javascript:'">

                    <img :src="src(banner)"
                         :srcset="srcset(banner)"
                         :alt="banner.title[lang]"
                         class="w-full"
                    >
                </a>
            </SwiperSlide>
        </Swiper>
    </section>
</template>

<script setup>
import {Lazy, Autoplay, Pagination, EffectCreative} from "swiper";
import {Swiper, SwiperSlide} from 'swiper/vue';
import {computed, inject} from "vue";

const defaultLang = inject('$defaultLang');
const src = computed(() => (banner) => {
    const mobile = banner.image_mobile[props.lang] || banner.image_mobile[defaultLang];
    const table = banner.image_table[props.lang] || banner.image_table[defaultLang];
    const desktop = banner.image_desktop[props.lang] || banner.image_desktop[defaultLang];

    return mobile
        ? route('images.banners.mobile', mobile + '.jpeg')
        : table
            ? route('images.banners.table', table + '.jpeg')
            : desktop
                ? route('images.banners.desktop', desktop + '.jpeg')
                : null;
});

const srcset = computed(() => (banner) => {
    const mobile = banner.image_mobile[props.lang] || banner.image_mobile[defaultLang];
    const table = banner.image_table[props.lang] || banner.image_table[defaultLang];
    const desktop = banner.image_desktop[props.lang] || banner.image_desktop[defaultLang];

    const mobileSrc = mobile
        ? route('images.banners.mobile', mobile + '.webp') + ' 568w,'
        : route('images.banners.mobile', banner.image_mobile[defaultLang] + '.webp') + ' 568w,';

    const tableSrc = table
        ? route('images.banners.table', table + '.webp') + ' 991w,'
        : route('images.banners.table', banner.image_table[defaultLang] + '.webp') + ' 991w,';

    const desktopSrc = desktop
        ? route('images.banners.desktop', desktop + '.webp')
        : route('images.banners.desktop', banner.image_desktop[defaultLang] + '.webp');

    return mobileSrc + tableSrc + desktopSrc;
});


const props = defineProps(['lang', 'data']);

const modules = [Autoplay, Pagination];
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
};
</script>
