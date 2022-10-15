<template>

    <div class="shadow-lg ">
        <div class="max-w-7xl mx-auto mt-2 ">
            <div class="flex justify-between items-center mx-auto px-2">
                <div class="w-[40.3%]">
                    <!--40.3%;-->
                    <a :href="route('home')">
                        <img src="https://dabango.store/storage/img/content/logo.png" :alt="appName" class="w-[55px]">
                        <!--                        <img :src="logoApp" :alt="appName">-->
                    </a>
                </div>
                <div class="grow-0 shrink-0 basis-[auto]  m-auto mr-[1rem] flex justify-end ml-[47px]"
                     style="margin:auto;">
                    <cart-icon-component :cart-route="route('cart')"></cart-icon-component>

                </div>
                <div class=" flex  items-center w-[23.3%]  mob_position justify-end">
                    <div class=" max-w-[55px]">
                        <div class="relative whitespace-nowrap left-[0.4rem]">

                            <button @click="setLangActiveClass"
                                    class="text-red-500 bg-white hover:bg-white focus:outline-none  font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-white  "
                                    type="button">
                                {{ lang === 'ua' ? 'UA' : (lang === 'ru' ? 'RU' : null) }}
                                <svg class="ml-2 w-4 h-4" aria-hidden="true" fill="none"
                                     stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                          d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </button>
                            <!-- Dropdown menu -->
                            <transition name="fadeSecond">
                                <div v-if="state.langActiveClass"
                                     class=" z-10 w-[50px] bg-white rounded divide-y divide-gray-100 shadow "
                                     style="position: absolute; inset: 0px auto auto 0px;margin-left: 1px; margin-top: 25px; transform: translate(0px, 10px);">

                                    <ul class="py-1 text-sm text-red-600 dark:text-gray-200">
                                        <li>
                                            <a :href="route('setlocale','ru')"
                                               v-if="lang === 'ua'"
                                               class="block py-2 text-red-600 px-4   dark:hover:text-red-600">RU</a>
                                        </li>
                                        <li>
                                            <a :href="route('setlocale','ua')"
                                               v-if="lang === 'ru'"
                                               class="block py-2 text-red-600 px-4   dark:hover:text-red-600">UA</a>
                                        </li>

                                    </ul>

                                </div>
                            </transition>
                        </div>
                    </div>
                </div>
                <transition name="fadeLast">
                    <div class="grow-0 shrink-0 basis-[auto] z-50 flex  w-[19.3%]  justify-end ml-[20px]">

                        <div class="burger__sticks justify-end  relative !w-[25px] h-[18px] z-51 p-0 ease-out
                                before:bg-[#c4c4c4]
                                before:content-['']
                                before:h-[2px]
                                before:absolute
                                before:w-[100%]
                                before:mt-[15px]
                                before:ease-out
                                after:bg-[#c4c4c4]
                                after:content-['']
                                after:h-[2px]
                                after:absolute
                                after:w-[100%]
                                after:ease-out


                         " @click="showBurgerMenu" :class="{'active': state.showBurger}">
                            <span class="bg-[#c4c4c4] block h-[2px] relative left-0 top-[8px] w-[100%]"></span>
                        </div>

                    </div>
                </transition>
            </div>

        </div>
        <div class=" bg-[#ffb7b7]">
            <HeaderCategories :categoriesList="JSON.parse(categories)"
                              :lang="lang"/>
        </div>
        <transition name="fadeLast">
            <div v-if="state.showBurger"
                 class="
                        burger-menu
                        active

                        fixed
                        w-[100%]
                        h-[100%]
                        z-40
                        top-[0]
                        left-0
                        overflow-scroll
                        bg-[#161616]
                    "
            >
                <div class="max-w-7xl mx-auto">
                    <div class="grid grid-cols-1 md:grid-cols-2 mt-[30px]">
                        <ul class="menu__list flex flex-col justify-center items-center">
                            <li v-for="category in JSON.parse(categories)" :key="category.id">
                                <a :href="route('category',category.slug)"
                                   class="
                                       py-5
                                       text-2xl
                                        line
                                        relative
                                        inline-block
                                        font-bold
                                        text-center text-[#fff]
                                        no-underline
                                        after:content-['']
                                        after:bg-[#c4c4c4]
                                        after:bottom-0
                                        after:h-[1px]
                                        after:left-0
                                        after:mx-auto
                                        after:my-auto
                                        after:absolute
                                        after:right-0
                                        after:w-0]
                                    "
                                >
                                    {{ lang === 'ua' ? category.title.ua : (lang === 'ru' ? category.title.ru : null) }}
                                </a>
                            </li>
                        </ul>
                        <ul class="menu__list flex flex-col justify-center items-center">
                            <li>
                                <a :href="indexRoute"
                                   class="
                                            py-5
                                            text-2xl
                                            line
                                            relative
                                            inline-block
                                            font-bold
                                            text-center text-[#fff]
                                            no-underline
                                            after:content-['']
                                            after:bg-[#c4c4c4]
                                            after:bottom-0
                                            after:h-[1px]
                                            after:left-0
                                            after:mx-auto
                                            after:my-auto
                                            after:absolute
                                            after:right-0
                                            after:w-0]
                                    "
                                >
                                    {{ lang === 'ru' ? 'Главная' : 'Головна' }}
                                </a>
                            </li>
                            <li>
                                <a :href="reviewsRoute"
                                   class="
                                        py-5
                                       text-2xl
                                        line
                                        relative
                                        inline-block
                                        font-bold
                                        text-center
                                        text-[#fff]
                                        no-underline
                                        after:content-['']
                                        after:bg-[#c4c4c4]
                                        after:bottom-0
                                        after:h-[1px]
                                        after:left-0
                                        after:mx-auto
                                        after:my-auto
                                        after:absolute
                                        after:right-0
                                        after:w-0]
                                "
                                >
                                    {{ textReviews }}
                                </a>
                            </li>
                            <li v-for="page in JSON.parse(pages)" :key="page.id">
                                <a :href="'/pages/' + page.slug"
                                   class="
                                           py-5
                                       text-2xl
                                        line
                                        relative
                                        inline-block
                                        font-bold
                                        text-center text-[#fff]
                                        no-underline
                                        after:content-['']
                                        after:bg-[#c4c4c4]
                                        after:bottom-0
                                        after:h-[1px]
                                        after:left-0
                                        after:mx-auto
                                        after:my-auto
                                        after:absolute
                                        after:right-0
                                        after:w-0]
                                "
                                >
                                    {{ lang === 'ru' ? page.heading.ru : page.heading.ua }}
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="grid gap-4 justify-items-center mt-5  text-[#fff]">

                        <a v-if="appPhone" :href="'tel:' + appPhone">
                            {{ appPhone }}
                        </a>

                        <a v-if="appEmail" :href="'mailto:' + appEmail">
                            {{ appEmail }}
                        </a>

                            <a v-if="appFacebook" :href="appFacebook" target="_blank">
                                <facebook-icon></facebook-icon>
                            </a>

                            <a v-if="appInstagram" :href="appInstagram" target="_blank">
                                <instagram-icon></instagram-icon>
                            </a>


                        <div class="row">

                            <div v-if="appSchedule"
                                 class="burger-menu__schedule flex uppercase text-[#fff] text-center">
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
        </transition>

    </div>


</template>

<script setup>
import HeaderCategories from '@/Pages/Public/Components/HeaderCategories.vue';
import {onMounted, ref} from "vue";

const state = ref({
    showBurger: false,
    langActiveClass: false,
})

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
    'categories',
    'textReviews',
    'reviewsRoute',
]);


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
</script>
