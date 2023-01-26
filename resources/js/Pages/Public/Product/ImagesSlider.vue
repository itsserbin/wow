<template>
    <div class="block w-full">
        <swiper
            :slides-per-view="1"
            :space-between="0"
            :modules="modules"
            :navigation="true"
            :thumbs="{ swiper: thumbsSwiper }"
            :zoom="true"
            class="swiper-product-slider"
            :lazy="true"
            :auto-heigth="true"
            :passiveListeners="false"
        >
            <swiper-slide>
                <div class="swiper-zoom-container">
                    <picture>
                        <source :srcset="state.preview.webp_src"
                                type="image/webp">
                        <img
                            :src="state.preview.src"
                            class="h-full w-full"
                        >
                    </picture>
                </div>
            </swiper-slide>

            <swiper-slide v-for="(image, i) in state.images">
                <div class="swiper-zoom-container">
                    <img :data-srcset="image.webp_src"
                         :data-src="image.src"
                         class="w-full h-full swiper-lazy"
                         :key="i"
                         @click="state.index = i"
                    >
                    <div class="swiper-lazy-preloader swiper-lazy-preloader"></div>
                </div>
            </swiper-slide>
        </swiper>

        <swiper
            class="swiper-product-thumbs"
            @swiper="setThumbsSwiper"
            :slides-per-view="8"
            :freeMode="true"
            :watchSlidesProgress="true"
            :space-between="0"
            :modules="modules"
            :lazy="true"
        >
            <swiper-slide>
                <picture>
                    <source :srcset="state.preview.webp_src"
                            type="image/webp">
                    <img
                        :src="state.preview.src"
                        class="h-full w-full"
                    >
                </picture>
            </swiper-slide>
            <swiper-slide v-for="(image, i) in state.images">
                <picture class="w-full">
                    <source :srcset="image.webp_thumbnail"
                            type="image/webp">
                    <img :data-src="image.thumbnail"
                         class="w-full h-full image"
                         :key="i"
                         @click="state.index = i"
                    >
                </picture>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script setup>
import {Zoom, FreeMode, Navigation, Thumbs, Lazy} from 'swiper';
import {onMounted, ref} from 'vue';
import {Swiper, SwiperSlide} from 'swiper/vue';

const props = defineProps(['images', 'preview']);

const thumbsSwiper = ref(null);

const setThumbsSwiper = (swiper) => {
    thumbsSwiper.value = swiper;
};

const modules = [Zoom, Lazy, Thumbs, FreeMode, Navigation];

const state = ref({
    imagesLarge: [],
    images: [],
    preview: {},
    index: null,
    currentId: null,
});

onMounted(() => {
    state.value.preview = {
        'webp_src': route('images', JSON.parse(props.preview).webp_src),
        'webp_thumbnail': route('images.55', JSON.parse(props.preview).webp_src),
        'src': route('images', JSON.parse(props.preview).src),
        'thumbnail': route('images.55', JSON.parse(props.preview).src),
    }
    const images = [...JSON.parse(props.images)].map(item => ({
        'webp_src': route('images', item.webp_src),
        'webp_thumbnail': route('images.55', item.webp_src),
        'src': route('images', item.src),
        'thumbnail': route('images.55', item.src),
    }))
    state.value.images.push(...images);
});
</script>

<style>

.swiper-product-slider .swiper-slide {
    width: 100%;
    height: auto;
}

.swiper-product-slider .swiper-slide img {
    width: 100%;
    height: auto;
}
</style>
