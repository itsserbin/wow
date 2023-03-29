<template>
    <div v-if="data.length">
        <div class="font-bold text-black text-center text-2xl font-heading mb-[15px]">
            {{ textLatestProducts }}
        </div>
        <product-cards :products="data"
                       :lang="lang"
                       :text-go-to-product-card="textGoToProductCard"
                       class="mb-5"
                       :slider="true"
        ></product-cards>
        <div v-if="isShowLoadMore" class="text-center">
            <Loader v-if="isLoadMore"></Loader>
            <Button v-if="!isLoadMore"
                    @click="$emit('fetch')"
                    type="button"
            >{{ textLoadMore }}
            </Button>
        </div>
    </div>
</template>

<script setup>
import Loader from '@/Pages/Public/Components/Loader.vue';
import Button from '@/Pages/Public/Components/Button.vue';
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
    textGoToProductCard: {
        type: String,
        default: 'Детальніше'
    },
    textLatestProducts: {
        type: String,
        default: 'Останні надходження'
    }
});
</script>
