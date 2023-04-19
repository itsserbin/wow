<script setup>
import Heading from '@/Pages/Public/Components/Heading.vue';
import Button from '@/Pages/Public/Components/Button.vue';
import Loader from '@/Pages/Public/Components/Loader.vue';
import ProductCard from '@/Pages/Public/Components/ProductCard.vue';

defineEmits(['fetch']);
defineProps({
    data: {
        type: Array
    },
    isShowLoadMore: {
        type: Boolean
    },
    isLoadMore: {
        type: Boolean
    },
    lang: {
        type: String,
        default: 'ua'
    },
    textLoadMore: {
        type: String,
        default: 'Завантажити ще'
    },
    heading: {
        type: String,
        default: null
    },
    slider: {
        type: Boolean,
        default: false
    }
});
</script>

<template>
    <div v-if="data.length">
        <Heading v-if="heading" :heading="heading"></Heading>
        <div class="grid justify-items-center my-5">
            <div class="grid grid-cols-2 md:grid-cols-4 gap-6 w-full">
                <div v-for="(product,i) in data" :key="i">
                    <ProductCard :product="product"
                                 :lang="lang"
                                 :slider="slider"
                    ></ProductCard>
                </div>
            </div>
        </div>
        <div v-if="isShowLoadMore" class="text-center">
            <Loader v-if="isLoadMore"></Loader>
            <Button v-if="!isLoadMore" @click="$emit('fetch')" type="button">{{ textLoadMore }}</Button>
        </div>
    </div>
</template>
