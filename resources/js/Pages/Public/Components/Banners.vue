<script setup>
import {Autoplay, Pagination} from "swiper";
import {Swiper, SwiperSlide} from 'swiper/vue';
import {computed, inject} from "vue";

const defaultLang = inject('$defaultLang');

const src = computed(() => (banner) => {
    const mobile = banner.image_mobile[props.lang] || banner.image_mobile[defaultLang];
    const table = banner.image_table[props.lang] || banner.image_table[defaultLang];
    const desktop = banner.image_desktop[props.lang] || banner.image_desktop[defaultLang];

    return mobile
        ? '/images/banners/mobile/' + mobile + '.jpeg'
        : table
            ? '/images/banners/table/' + table + '.jpeg'
            : desktop
                ? '/images/banners/desktop/' + desktop + '.jpeg'
                : null;
});

const srcset = computed(() => (banner) => {
    const mobile = banner.image_mobile[props.lang] || banner.image_mobile[defaultLang];
    const table = banner.image_table[props.lang] || banner.image_table[defaultLang];
    const desktop = banner.image_desktop[props.lang] || banner.image_desktop[defaultLang];

    const mobileSrc = mobile
        ? '/images/banners/mobile/' + mobile + '.webp 568w, '
        : '/images/banners/mobile/' + banner.image_mobile[defaultLang] + '.webp 568w '

    const tableSrc = table
        ? '/images/banners/table/' + table + '.webp 768w, '
        : '/images/banners/table/' + banner.image_table[defaultLang] + '.webp 991w '


    const desktopSrc = desktop
        ? '/images/banners/desktop/' + desktop + '.webp 991w, '
        : '/images/banners/desktop/' + banner.image_desktop[defaultLang] + '.webp'

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
