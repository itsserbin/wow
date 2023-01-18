<template>
    <div class="additions">
        <h3 class="text-2xl font-heading mb-[1rem]">Вам сподобаєтся</h3>

        <div class="grid gap-4">
            <AdditionalProductCard
                v-for="item in products"
                :item="item"
            />
        </div>
    </div>
</template>

<script setup>
import {onMounted, ref} from "vue";
import AdditionalProductCard from '@/Pages/Public/Cart/AdditionalProductCard.vue'

const products = ref([]);

onMounted(() => {
    axios.get(route('api.v1.products.recommend'))
        .then(({data}) => products.value = data.result.data)
        .catch((response) => console.log(response))
})
</script>
