<template>
    <div v-if="data.length">
        <div class="font-bold text-black text-center text-2xl font-subheading mb-[15px]">{{ textAllProducts }}</div>
        <ProductCards :products="data"
                      :lang="lang"
                      :text-go-to-product-card="textGoToProductCard"
                      class="mb-5"
                      :slider="true"
        />
        <div v-if="isShowLoadMore" class="text-center">
            <Loader v-if="isLoadMore"></Loader>
            <Button v-if="!isLoadMore" @click="$emit('fetch')" type="button">Завантажити ще</Button>
        </div>
    </div>
</template>

<script setup>
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
    textGoToProductCard: {
        type: String,
        default: 'Детальніше'
    },
    textAllProducts: {
        type: String,
        default: 'Усі товари'
    }
});
</script>
