<template>
    <div class="additions" v-if="products.length">
        <h3 class="text-2xl font-heading mb-[1rem]">Вам сподобаєтся</h3>

        <div class="grid gap-4">
            <AdditionalProductCard
                v-for="item in products"
                :item="item"
                :lang="lang"
            />
        </div>
    </div>
</template>

<script setup>
import AdditionalProductCard from '@/Pages/Public/Cart/AdditionalProductCard.vue'

defineProps(['products', 'lang']);
</script>
