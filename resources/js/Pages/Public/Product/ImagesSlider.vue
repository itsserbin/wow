<template>
    <div>
        <swiper
            :slides-per-view="1"
            :space-between="0"
            :modules="modules"
            :navigation="true"
            :thumbs="{ swiper: thumbsSwiper }"
            :zoom="true"
            :lazy="true"
        >
            <swiper-slide v-for="(image, i) in state.images">
                <div class="swiper-zoom-container">
                    <picture class=" w-full">
                        <source :srcset="image.webp_src"
                                type="image/webp">
                        <img :data-src="image.src"
                             class="w-full h-full image"
                             :key="i"
                             @click="state.index = i"
                        >
                    </picture>
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

            <swiper-slide v-for="(image, i) in state.images">
                <picture class=" w-full">
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

const props = defineProps(['images', 'preview']);

const thumbsSwiper = ref(null);

const setThumbsSwiper = (swiper) => {
    thumbsSwiper.value = swiper;
};

const modules = [Zoom, Thumbs, FreeMode, Navigation, Lazy];

const state = ref({
    imagesLarge: [],
    images: [],
    index: null,
    currentId: null,
});

onMounted(() => {
    const preview = JSON.parse(props.preview);
    state.value.images.push({
        'webp_src': route('images.500', preview.webp_src),
        'webp_thumbnail': route('images.55', preview.webp_src),
        'src': route('images.500', preview.src),
        'thumbnail': route('images.55', preview.src),
    })
    JSON.parse(props.images).forEach(item => {
        state.value.images.push({
            'webp_src': route('images.500', item.webp_src),
            'webp_thumbnail': route('images.55', item.webp_src),
            'src': route('images.500', item.src),
            'thumbnail': route('images.55', item.src),
        })
    })
})
</script>

<style>
.swiper-product-thumbs .swiper-wrapper {
    justify-content: center;
}
</style>
