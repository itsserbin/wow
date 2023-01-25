<template>
    <div class="grid justify-items-center">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 w-full">
            <div v-for="(product,i) in products" :key="i">
                <ProductCard :product="product"
                             :lang="lang"
                             :slider="slider"
                ></ProductCard>
            </div>
        </div>
    </div>

</template>

<script setup>
import ProductCard from '@/Pages/Public/Components/ProductCard.vue'

const props = defineProps({
    products: Array,
    lang: {
        type: String,
        default: 'ua',
    },
    slider: {
        type: Boolean,
        default: false
    }
})
</script>
