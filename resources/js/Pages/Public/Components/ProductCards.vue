<template>
    <div class="grid justify-items-center">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div v-for="(product,i) in products" :key="i">
                <product-card :product="product"
                              :lang="lang"
                ></product-card>
            </div>
        </div>
    </div>

</template>

<script setup>
defineProps({
    products: Array,
    lang: String,
})
</script>
