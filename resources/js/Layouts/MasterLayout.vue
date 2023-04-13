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
    <ScrollToTop/>
</template>
<script setup>
import Header from '@/Pages/Public/Components/Header/Header.vue'
import Footer from '@/Pages/Public/Components/Footer.vue'
import FixedBanner from '@/Pages/Public/Components/FixedBanner.vue'
import ScrollToTop from '@/Pages/Public/Components/ScrollToTop.vue'
import {getCurrentInstance, onMounted, ref} from "vue";

const {appContext} = getCurrentInstance()
const {$fbq} = appContext.config.globalProperties

const props = defineProps([
    'lang',
    'categories',
    'options',
    'pages',
    'eventIdPageView'
]);

const event_id = ref(null);

onMounted(() => {
    event_id.value = props.eventIdPageView
    console.log(event_id.value);
    if (import.meta.env.MODE === 'production') {
        try {
            $fbq('PageView', {}, event_id.value);
        } catch (e) {
            console.error(e);
        }
    }

    document.querySelector('.loader').classList.add('hidden');
})
</script>
