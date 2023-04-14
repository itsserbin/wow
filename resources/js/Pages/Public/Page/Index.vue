<template>
    <Head :title="page.meta_title[lang]"/>
    <div v-if="page">
        <Breadcrumbs :current-url="route().current" :options="options" :lang="lang" :title="page.h1[lang]"/>
        <h1 class="font-bold text-black text-center text-2xl font-heading mb-[15px]">
            {{ page.h1[lang] }}
        </h1>
        <div class="content" v-html="page.content[lang]">
        </div>
    </div>
</template>

<script setup>
import MasterLayout from '@/Layouts/MasterLayout.vue'
import Breadcrumbs from './Breadcrumbs.vue'
import Head from "@/Pages/Public/Components/Head.vue";
import eventTracking from "@/Includes/eventTracking";
import {onMounted} from "vue";

defineOptions({layout: MasterLayout})

defineProps([
    'page',
    'lang',
    'categories',
    'options',
    'pages',
    'eventIdPageView',
]);

onMounted(() => {
    eventTracking('PageView', {}, props.eventIdPageView);
})
</script>
