<template>
    <div v-if="data.length">
        <div class="font-bold text-black text-center text-[24px] mb-[15px]">{{ title }}</div>
        <ProductCards :products="data"
                      :lang="lang"
                      :text-go-to-product-card="textGoToProductCard"
                      :slider="true"
        ></ProductCards>
        <div v-if="isShowLoadMore" class="text-center mt-5">
            <Loader v-if="isLoadingMore"/>
            <Button v-if="!isLoadingMore"
                    @click="$emit('fetch')"
                    type="button"
            >Завантажити ще
            </Button>
        </div>
    </div>
</template>

<script setup>
import Loader from '@/Pages/Public/Components/Loader.vue'
import ProductCards from '@/Pages/Public/Components/ProductCards.vue'
import Button from '@/Pages/Public/Components/Button.vue'

defineEmits(['fetch']);
defineProps({
    isShowLoadMore: Boolean,
    isLoadingMore: Boolean,
    title: String,
    data: Array,
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
});
</script>
