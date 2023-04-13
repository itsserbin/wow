<template>
    <MasterLayout :categories="categories"
                  :options="options"
                  :lang="lang"
                  :pages="pages"
                  :eventIdPageView="eventIdPageView"
    >
        <div v-if="page">
            <Breadcrumbs :options="options" :lang="lang" :title="page.h1[lang]"/>
            <h1 class="font-bold text-black text-center text-2xl font-heading mb-[15px]">
                {{ page.h1[lang] }}
            </h1>
            <div class="content" v-html="page.content[lang]">
            </div>
        </div>
    </MasterLayout>
</template>

<script setup>
import MasterLayout from '@/Layouts/MasterLayout.vue'
import Breadcrumbs from './Breadcrumbs.vue'

import {isLoading} from "@/Pages/Public/load";
import {getCurrentInstance, onMounted} from "vue";

// const {appContext} = getCurrentInstance()
// const {$fbq} = appContext.config.globalProperties

const props = defineProps([
    'page',
    'lang',
    'categories',
    'options',
    'pages',
    'eventIdPageView',
])

onMounted(() => {
    isLoading.value = false;
    // if (import.meta.env.MODE === 'production') {
    //     try {
    //         $fbq('PageView', {}, props.eventIdPageView);
    //     } catch (e) {
    //         console.error(e);
    //     }
    // }
})
</script>
