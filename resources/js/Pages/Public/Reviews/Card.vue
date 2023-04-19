<script setup>
import moment from "moment";

defineProps(['item', 'lang']);
</script>

<template>
    <div class="bg-secondary rounded p-7 mb-5">
        <div class="grid grid-cols-1 md:grid-cols-3">
            <div class="font-bold font-subheading">
                {{ item.name }}
            </div>
            <div class="text-center font-subheading">
                <a :href="route('product',item.product.id)" target="_blank">
                    {{ item.product.h1[lang] }}
                </a>
            </div>
            <div class="text-end font-subheading">
                {{ moment(item.created_at).format('MM.DD.YY') }}
            </div>
        </div>
        <hr class="my-2">
        <div class="review-item-content font-text">
            {{ item.comment }}
        </div>
    </div>
</template>
