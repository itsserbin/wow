<script setup>
import Callback from '@/Pages/Public/Components/Callback.vue'
import Header from '@/Pages/Public/Components/Header/Header.vue'
import Footer from '@/Pages/Public/Components/Footer.vue'
import FixedBanner from '@/Pages/Public/Components/FixedBanner.vue'
import ScrollToTop from '@/Pages/Public/Components/ScrollToTop.vue'
import {onMounted} from "vue";

onMounted(() => {
    const loader = document.querySelector('.loader');
    if (loader) {
        loader.classList.add('hidden');
    }
})
</script>

<template>
    <header class="w-[100%] fixed top-0 z-20 bg-[#fff] flex-[0_0_auto]">
        <Header :options="$page.props.options" :categories="$page.props.categories" :lang="$page.props.lang"/>
    </header>
    <main class="main flex-[1_0_auto]">
        <div class="max-w-7xl mx-auto pt-36 md:pt-40 px-3 h-full">
            <slot></slot>
        </div>
    </main>
    <Footer :options="$page.props.options" :lang="$page.props.lang" :pages="$page.props.pages"/>
    <ScrollToTop/>
    <Callback v-if="$page.props.options.callback_status === 'on'"/>
</template>
