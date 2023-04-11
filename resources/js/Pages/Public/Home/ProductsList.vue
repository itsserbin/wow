<template>
    <div v-if="data.length">
        <Heading v-if="heading" :heading="heading"></Heading>
        <ProductCards :products="data"
                      :lang="lang"
                      class="mb-5"
                      :slider="slider"
        />
        <div v-if="isShowLoadMore" class="text-center">
            <Loader v-if="isLoadMore"></Loader>
            <Button v-if="!isLoadMore" @click="$emit('fetch')" type="button">{{ textLoadMore }}</Button>
        </div>
    </div>
</template>

<script setup>
import Heading from '@/Pages/Public/Components/Heading.vue';
import Button from '@/Pages/Public/Components/Button.vue';
import Loader from '@/Pages/Public/Components/Loader.vue';
import ProductCards from '@/Pages/Public/Components/ProductCards.vue';

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
