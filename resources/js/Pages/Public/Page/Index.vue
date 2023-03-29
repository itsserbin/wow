<template>
    <div v-if="page">
        <h1 class="font-bold text-black text-center text-2xl font-heading mb-[15px]">
            {{ page.h1[lang] }}
        </h1>
        <div class="content" v-html="page.content[lang]">
        </div>
    </div>
</template>

<script setup>
import {isLoading} from "@/Pages/Public/load";
import {onMounted} from "vue";

const props = defineProps(['page', 'lang'])
const page = props.page ? JSON.parse(props.page) : null;

onMounted(() => {
    isLoading.value = false;
})
</script>
