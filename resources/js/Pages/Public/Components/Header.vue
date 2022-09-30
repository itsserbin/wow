<template>
    <div>
        <div class="container mt-2 ">
            <div class="row align-items-center">
                <div class="col-4 header__logo logo">
                    <a :href="indexRoute">
                        <img src="https://dabango.store/storage/img/content/logo.png" :alt="appName">
                        <!--                        <img :src="logoApp" :alt="appName">-->
                    </a>
                </div>
                <div class="col-4 d-flex justify-content-center">
                    <cart-icon-component :cart-route="cartRoute"></cart-icon-component>
                </div>
                <div class="col-2 d-flex justify-content-end">
                    <div class="header__language" @click="setLangActiveClass">
                        <div class="language-chooser">
                            <div class="language-chooser__current">
                                <div class="language-chooser__current-label">{{ lang === 'ru' ? 'RU' : 'UA' }}</div>
                            </div>
                            <div class="language-chooser__drop" :class="{'active': state.langActiveClass}">
                                <div class="language-chooser__drop-item lang-switcher">
                                    <a class="language-chooser__link" :href="setlocateUa">UA</a>
                                </div>
                                <div class="language-chooser__drop-item lang-switcher">
                                    <a class="language-chooser__link" :href="setlocateRu">RU</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-2 d-flex justify-content-end">
                    <div class="header-burger p-0"
                         @click="showBurgerMenu"
                         :class="{'active': state.showBurger}"
                    >
                        <span></span>
                    </div>
                </div>

            </div>
        </div>
        <div class="header__menu">

            <div class="container">
                <div class="row">
                    <HeaderCategories
                        :categoriesList="state.categoriesList"
                        :categoryRoute="categoryRoute"
                        :lang="lang"
                    />
                </div>
            </div>
        </div>

        <div class="burger-menu active" v-if="state.showBurger">
            <div class="menus justify-content-center align-items-center">
                <nav class="menu">
                    <ul class="menu__list">
                        <li v-for="category in state.categoriesList" :key="category.id">
                            <a :href="categoryRoute + '/' + category.slug" class="menu__link text-decoration-none">
                                {{ lang === 'ua' ? category.title.ua : (lang === 'ru' ? category.title.ru : null) }}
                            </a>
                        </li>
                    </ul>
                </nav>
                <nav class="menu">
                    <ul class="menu__list">
                        <li>
                            <a :href="indexRoute" class="menu__link text-decoration-none">
                                {{ lang === 'ru' ? 'Главная' : 'Головна' }}
                            </a>
                        </li>
                        <li>
                            <a :href="reviewsRoute" class="menu__link text-decoration-none">
                                {{ textReviews }}
                            </a>
                        </li>
                        <li v-for="page in state.pagesList" :key="page.id">
                            <a :href="'/pages/' + page.slug" class="menu__link text-decoration-none">
                                {{ lang === 'ru' ? page.heading.ru : page.heading.ua }}
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div class="burger-menu__contacts">
                <div class="row">
                    <address class="address text-center">

                        <a v-if="appPhone"
                           :href="'tel:' + appPhone"
                           class="phonecall text-decoration-none"
                        >
                            {{ appPhone }}
                        </a>

                        <a v-if="appEmail"
                           :href="'mailto:' + appEmail"
                           class="email text-decoration-none">
                            {{ appEmail }}
                        </a>

                    </address>
                    <div class="social-buttons">
                        <a v-if="appFacebook" :href="appFacebook" target="_blank">
                            <facebook-icon></facebook-icon>
                        </a>

                        <a v-if="appInstagram" :href="appInstagram" target="_blank">
                            <instagram-icon></instagram-icon>
                        </a>

                    </div>
                </div>
                <div class="row">

                    <div v-if="appSchedule" class="burger-menu__schedule schedule text-center">
                        <div v-html="appSchedule"></div>
                    </div>

                    <div class="burger-menu__messengers messengers">
                        <a v-if="appTelegram" :href="appTelegram" target="_blank">
                            <telegram-icon></telegram-icon>
                        </a>

                        <a v-if="appViber" :href="appViber" target="_blank">
                            <viber-icon></viber-icon>
                        </a>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import HeaderCategories from '@/Pages/Public/Components/HeaderCategories.vue';
import {onMounted, ref} from "vue";

const state = ref({
    showBurger: false,
    pagesList: [],
    categoriesList: [],
    langActiveClass: false,
})

onMounted(() => {
    if (props.pages) {
        state.value.pagesList = JSON.parse(props.pages);
    }
    if (props.categories) {
        state.value.categoriesList = JSON.parse(props.categories);
    }
})

function showBurgerMenu() {
    state.value.showBurger = !state.value.showBurger;
}

// function handleSCroll(event) {
//     let header = document.querySelector(".header");
//     if (window.scrollY > 50 && !header.className.includes('shadow')) {
//         header.classList.add('shadow');
//     } else if (window.scrollY < 50) {
//         header.classList.remove('shadow');
//     }
// }

function setLangActiveClass() {
    state.value.langActiveClass = !state.value.langActiveClass;
}

const props = defineProps([
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
    'setlocateRu',
    'setlocateUa',
    'cartRoute',
    'categories',
    'categoryRoute',
    'textReviews',
    'reviewsRoute',
])

</script>
