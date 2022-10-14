<template>
    <section id="category-banners" v-if="banners.length" class="banners mb-5">
        <swiper
            class="social-reviews-carousel"
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

            <swiper-slide v-for="(banner,i) in banners" :key="i">
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

const modules = [Lazy, Autoplay, Navigation];

const props = defineProps(['id', 'lang']);

const banners = ref([]);

onMounted(() => {
    axios.get('/api/v1/banners/category/' + props.id)
        .then(({data}) => banners.value = data.result)
        .catch((response) => console.log(response));
})
</script>
