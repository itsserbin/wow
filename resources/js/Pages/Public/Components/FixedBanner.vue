<script setup>
const props = defineProps(['lang']);

const mobileBanner = props.lang === 'ua' ? 'support_ukraine_ua_768' : 'support_ukraine_ru_768'
const tableBanner = props.lang === 'ua' ? 'support_ukraine_ua_1000' : 'support_ukraine_ru_1000'
const desktopBanner = props.lang === 'ua' ? 'support_ukraine_ua_1900' : 'support_ukraine_ru_1900'

const mobileBannerWebp = `/storage/banners/${mobileBanner}.webp`;
const mobileBannerJpeg = `/storage/banners/${mobileBanner}.jpeg`;
const tableBannerWebp = `/storage/banners/${tableBanner}.webp`;
const tableBannerJpeg = `/storage/banners/${tableBanner}.jpeg`;
const desktopBannerWebp = `/storage/banners/${desktopBanner}.webp`;
const desktopBannerJpeg = `/storage/banners/${desktopBanner}.jpeg`;
</script>

<template>
    <picture>
        <source media="(max-width: 768px)" :srcset="mobileBannerWebp" type="image/webp"/>
        <source media="(max-width: 768px)" :srcset="mobileBannerJpeg" type="image/jpeg"/>
        <source media="(max-width: 1000px)" :srcset="tableBannerWebp" type="image/webp"/>
        <source media="(max-width: 1000px)" :srcset="tableBannerJpeg" type="image/jpeg"/>
        <source :srcset="desktopBannerWebp"/>
        <img :src="desktopBannerJpeg" alt="Слава Україні!" class="w-[100%]"/>
    </picture>
</template>
