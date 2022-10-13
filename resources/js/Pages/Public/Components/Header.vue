<template>
    <div class="shadow-lg">
        <div class="max-w-7xl mx-auto mt-2 ">
            <div class="flex justify-between items-center">
                <div class=" header__logo logo  ">
                    <a :href="indexRoute">
                        <img src="https://dabango.store/storage/img/content/logo.png" :alt="appName" class="w-[55px]">
                        <!--                        <img :src="logoApp" :alt="appName">-->
                    </a>
                </div>
                <div class="grow-0 shrink-0 basis-[auto] w-[63.2%] mx-auto flex justify-center">
                    <cart-icon-component :cart-route="cartRoute"></cart-icon-component>
                </div>
                <div class=" flex justify-end mr-[10px]">
                    <div class=" max-w-[55px]" @click="setLangActiveClass">
                        <div class="relative whitespace-nowrap">
                            <div class="relative z-5">
                                <div class="text-[18px] uppercase text-red-600 cursor-default  ">{{ lang === 'ru' ? 'RU' : 'UA' }}</div>
                            </div>
                            <div class="hidden absolute z-4 top-[35px] left-[-5px] p-[10px] bg-[#fff] " :class="{'active': state.langActiveClass}">
                                <div class="language-chooser__drop-item lang-switcher">
                                    <a class="block text-[18px] text-[#db002f] no-underline" :href="setlocateUa">UA</a>
                                </div>
                                <div class="language-chooser__drop-item lang-switcher">
                                    <a class="block text-[18px] text-[#db002f] no-underline" :href="setlocateRu">RU</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="grow-0 shrink-0 basis-[auto] z-50 flex justift-end mr-[10px]  ">
                    <div class=" relative !w-[25px] h-[18px] z-51  p-0  ease-[all 0.3s ease 0s]
                    before:bg-[#c4c4c4]
                      before:content-['']
                      before:h-[2px]
                      before:absolute
                      before:w-[100%]
                      after:bg-[#c4c4c4]
                      after:content-['']
                      after:h-[2px]
                      after:absolute
                      after:w-[100%]
                      before:mt-[15px]
                      
                     
                      
                    " 
                         @click="showBurgerMenu"
                         :class="{'active': state.showBurger}"
                    >
                        <span class="bg-[#c4c4c4] block h-[2px] left-0 relative top-[8px] w-[100%]"></span>
                    </div>
                </div>
            </div>
        </div>
        <div class=" bg-[#ffb7b7]">
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

        <div class="burger-menu animate__animated animate__backInDown  active flex flex-row justify-center fixed w-[100%] h-[100%] z-40 top-[0] left-0 overflow-scroll bg-[#161616]" v-if="state.showBurger">
            <div class="menus justify-center items-center flex mt-[30px]">
                <nav class="menu">
                    <ul class="menu__list flex flex-col justify-center items-center mr-[20px]">
                        <li v-for="category in state.categoriesList" :key="category.id">
                            <a :href="categoryRoute + '/' + category.slug" class=" text-decoration-none">
                                {{ lang === 'ua' ? category.title.ua : (lang === 'ru' ? category.title.ru : null) }}
                            </a>
                        </li>
                    </ul>
                </nav>
                <nav class="menu">
                    <ul class="menu__list flex flex-col justify-center items-center mr-[20px]">
                        <li>
                            <a :href="indexRoute" class="line relative inline-block font-bold text-[15px] text-center text-[#fff] no-underline after:content-[''] after:bg-[#c4c4c4] after:bottom-0 after:h-[1px] after:left-0 after:mx-auto after:my-auto after:absolute after:right-0 after:w-0">
                                {{ lang === 'ru' ? 'Главная' : 'Головна' }}
                            </a>
                        </li>
                        <li>
                            <a :href="reviewsRoute" class=" relative inline-block font-bold text-[15px] text-center text-[#fff] no-underline after:content-[''] after:bg-[#c4c4c4] after:bottom-0 after:h-[1px] after:left-0 after:mx-auto after:my-auto after:absolute after:right-0 after:w-0">
                                {{ textReviews }}
                            </a>
                        </li>
                        <li v-for="page in state.pagesList" :key="page.id">
                            <a :href="'/pages/' + page.slug" class=" relative inline-block font-bold text-[15px] text-center text-[#fff] no-underline after:content-[''] after:bg-[#c4c4c4] after:bottom-0 after:h-[1px] after:left-0 after:mx-auto after:my-auto after:absolute after:right-0 after:w-0">
                                {{ lang === 'ru' ? page.heading.ru : page.heading.ua }}
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div class="flex flex-col items-center">
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
                    <div class="flex justify-center">
                        <a v-if="appFacebook" :href="appFacebook" target="_blank">
                            <facebook-icon></facebook-icon>
                        </a>

                        <a v-if="appInstagram" :href="appInstagram" target="_blank">
                            <instagram-icon></instagram-icon>
                        </a>

                    </div>
                </div>
                <div class="row">

                    <div v-if="appSchedule" class="burger-menu__schedule flex uppercase text-[#fff] text-center">
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
import 'animate.css';
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
<style>
.line{
    position: relative;
	color: #fff; /*задаём цвет ссылки*/
	cursor: pointer;
	line-height: 1; /*задаём высоту строки*/
	text-decoration: none; /*убираем подчёркивание*/
    
}

.line:after {
	display: block;
	position: absolute;
	left: 0; /*изменить на right:0;, чтобы изменить направление подчёркивания */
	width: 0;/*задаём длинну линии до наведения курсора*/
	height: 2px; /*задаём ширину линии*/
	background-color: #fff; /*задаём цвет линии*/
	content: "";
	transition: width 0.3s ease-out; /*задаём время анимации*/
}

.line:hover:after,
.line:focus:after {
	width: 100%; /*устанавливаем значение 100% чтобы ссылка подчёркивалась полностью*/
    margin-top: 15px;
}


.active:active{
    transition: height 0.3s ease-out;
}

</style>
