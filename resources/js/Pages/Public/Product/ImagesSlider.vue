<template>
    <div>
        <swiper
            :slides-per-view="1"
            :space-between="0"
            :modules="modules"
            :navigation="true"
            :thumbs="{ swiper: thumbsSwiper }"
            :lazy="true"
            :zoom="true"
        >

            <swiper-slide v-for="(image, i) in state.images">
                <div class="swiper-zoom-container">
                    <img class="image w-full" :src="image.src" :key="i" @click="state.index = i" loading="lazy">
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
                <img class="image w-full" :src="image.thumbnail" :key="i" @click="state.index = i" loading="lazy">
            </swiper-slide>
        </swiper>

    </div>
</template>

<script setup>
import {Zoom, FreeMode, Navigation, Thumbs} from 'swiper';
import {onMounted, ref} from 'vue';

const props = defineProps(['images', 'preview']);

const thumbsSwiper = ref(null);

const setThumbsSwiper = (swiper) => {
    thumbsSwiper.value = swiper;
};

const modules = [Zoom, Thumbs, FreeMode, Navigation];

const state = ref({
    imagesLarge: [],
    images: [],
    index: null,
    currentId: null,
});

onMounted(() => {
    state.value.images.push({
        'src': '/storage/images/500/' + props.preview,
        'thumbnail': '/storage/images/55/' + props.preview,
    })
    state.value.imagesLarge.push('/storage/images/' + props.preview);

    JSON.parse(props.images).forEach(item => {
        state.value.images.push({
            'src': '/storage/images/500/' + item.src,
            'thumbnail': '/storage/images/55/' + item.src,
        })
        state.value.imagesLarge.push('/storage/images/' + item.src);
    })
})
</script>

<style>
.swiper-product-thumbs .swiper-wrapper {
    justify-content: center;
}
</style>
