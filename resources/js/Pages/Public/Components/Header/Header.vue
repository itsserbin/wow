<template>
    <div class="shadow-lg mt-2">
        <div class="max-w-7xl mx-auto px-3">
            <div class="grid grid-cols-4 items-center">
                <div>
                    <Logo />
                </div>
                <div class="grid justify-end">
                    <CartIcon/>
                </div>
                <div class="grid justify-end">
                    <Langs :lang="lang"/>
                </div>
                <div class="grid justify-end">
                    <Burger :app-email="appEmail"
                            :app-facebook="appFacebook"
                            :app-instagram="appInstagram"
                            :app-phone="appPhone"
                            :app-schedule="appSchedule"
                            :app-telegram="appTelegram"
                            :app-viber="appViber"
                            :lang="lang"
                            :pages="pages"
                    />
                </div>
            </div>
        </div>
        <div class="bg-main text-text font-subheading">
            <HeaderCategories :categories="JSON.parse(categories)" :lang="lang"/>
        </div>
    </div>
</template>

<script setup>
import CartIcon from '@/Pages/Public/Components/CartIcon.vue';
import Burger from '@/Pages/Public/Components/Header/Burger.vue';
import Langs from '@/Pages/Public/Components/Header/Langs.vue';
import Logo from '@/Pages/Public/Components/Header/Logo.vue';
import HeaderCategories from '@/Pages/Public/Components/Header/HeaderCategories.vue';
import {ref} from "vue";

defineProps([
    'indexRoute',
    'exchangePolicyRoute',
    'privacyPolicyRoute',
    'logoApp',
    'appName',
    'appPhone',
    'appEmail',
    'appFacebook',
    'appInstagram',
    'appSchedule',
    'appTelegram',
    'appViber',
    'pages',
    'lang',
    'categories',
    'textReviews',
    'reviewsRoute',
]);

const show = ref(false);
const showSecond = ref(false);
const state = ref({
    showBurger: false,
    langActiveClass: false,

})
</script>
