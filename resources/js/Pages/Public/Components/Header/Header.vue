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

<template>
    <div class="shadow-lg mt-2">
        <div class="max-w-7xl mx-auto px-3 grid grid-cols-3 items-center mb-2">
            <div class="grid justify-start">
                <Burger :options="options"
                        :lang="lang"
                        :pages="pages"
                />
            </div>
            <Logo class="mx-auto"/>
            <div class="grid justify-end">
                <CartIcon/>
            </div>
<!--            <Langs :lang="lang"/>-->
        </div>
        <HeaderCategories :categories="categories" :lang="lang"/>
    </div>
</template>
