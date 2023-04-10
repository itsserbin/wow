<template>
    <header class="w-[100%] fixed top-0 z-20 bg-[#fff] flex-[0_0_auto]">
        <FixedBanner :lang="lang"/>
        <Header :options="options" :categories="categories" :lang="lang"/>
    </header>
    <main class="main flex-[1_0_auto]">
        <div class="max-w-7xl mx-auto pt-36 md:pt-40 px-3 h-full">
            <slot></slot>
        </div>
    </main>
    <Footer :options="options" :lang="lang" :pages="pages"/>

</template>
<script setup>
import Header from '@/Pages/Public/Components/Header/Header.vue'
import Footer from '@/Pages/Public/Components/Footer.vue'
import FixedBanner from '@/Pages/Public/Components/FixedBanner.vue'

import { v4 as uuidv4 } from 'uuid';
import {getCurrentInstance} from "vue";

const {appContext} = getCurrentInstance()
const {$fbq} = appContext.config.globalProperties
const event_id_page_view = uuidv4() + '_PageView_' + Date.now();


$fbq('PageView', {}, event_id_page_view);

const props = defineProps([
    'lang',
    'categories',
    'options',
    'pages',
    'eventIdPageView'
]);
</script>
