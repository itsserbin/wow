<template>
    <div class="shadow-lg mt-2">
        <div class="max-w-7xl mx-auto px-3">
            <div class="grid grid-cols-4 items-center">
                <div>
                    <Logo/>
                </div>
                <div class="grid justify-end">
                    <CartIcon/>
                </div>
                <div class="grid justify-end">
                    <Langs :lang="lang"/>
                </div>
                <div class="grid justify-end">
                    <Burger :options="options"
                            :lang="lang"
                            :pages="pages"
                    />
                </div>
            </div>
        </div>
        <div class="bg-main text-text font-subheading">
            <HeaderCategories :categories="categories" :lang="lang"/>
        </div>
    </div>
</template>

<script setup>
import CartIcon from '@/Pages/Public/Components/CartIcon.vue';
import Langs from '@/Pages/Public/Components/Header/Langs.vue';
import Logo from '@/Pages/Public/Components/Header/Logo.vue';
import HeaderCategories from '@/Pages/Public/Components/Header/HeaderCategories.vue';
import {defineAsyncComponent, ref} from "vue";

const Burger = defineAsyncComponent(() => import('@/Pages/Public/Components/Header/Burger.vue'));

defineProps([
    'pages',
    'lang',
    'categories',
    'options'
]);

const show = ref(false);
const showSecond = ref(false);
const state = ref({
    showBurger: false,
    langActiveClass: false,

})
</script>
