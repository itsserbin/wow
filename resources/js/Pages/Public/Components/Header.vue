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

                <div class="grow-0 shrink-0 basis-[auto]  m-auto mr-[1rem] flex justify-end ml-[47px] "
                    style="margin:auto;">
                    <cart-icon-component :cart-route="route('cart')"></cart-icon-component>

                </div>
                <div class=" flex  items-center w-[23.3%]  mob_position mx-2 justify-end">

                    <button @click="showModalPopup"
                        class="w-[5rem] inline-block h-[50px] bg-red-600 rounded-[10px] text-[1.2vh] text-white ml-[30px] mr-[8px]">Статус
                        замовлення
                    </button>

                    <div class=" max-w-[55px]">

                        <div class="relative whitespace-nowrap left-[0.4rem]">
                            <!--blur in the Modal.vue "backdrop-filter: blur(5px);"-->

                            <modal @closeModal="showModalPopup" v-if="show" size="small" class="oveflow-scroll">
                                <template #content>

                                    <div class="flex flex-col ">
                                        <label-component class="text-center text-[1rem]">Введите номер заказа и нажмите
                                            кнопку.</label-component>
                                        <input-component />
                                        <button-component
                                            class="mt-[20px] mx-auto w-[5rem] h-[50px] bg-red-600 rounded-[10px] text-[0.5rem] text-white">
                                            Проверить</button-component>
                                    </div>

                                </template>
                            </modal>

                            <button @click="setLangActiveClass"
                                class="text-red-500 mr-[-25px] bg-white hover:bg-white focus:outline-none  font-medium rounded-lg text-sm  py-2.5 text-center inline-flex items-center dark:bg-white  "
                                type="button">
                                {{ lang === 'ua' ? 'UA' : (lang === 'ru' ? 'RU' : null) }}
                                <svg class="ml-2 w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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
                                            <a :href="route('setlocale','ru')" v-if="lang === 'ua'"
                                                class="block py-2 text-red-600 px-4   dark:hover:text-red-600">RU</a>
                                        </li>
                                        <li>
                                            <a :href="route('setlocale','ua')" v-if="lang === 'ru'"
                                                class="block py-2 text-red-600 px-4   dark:hover:text-red-600">UA</a>
                                        </li>

                                    </ul>

                                </div>
                            </transition>
                        </div>
                    </div>
                </div>
                <transition name="fadeLast">
                    <div class="grow-0 shrink-0 basis-[auto] z-50 flex  w-[12.3%]   ml-[20px] justify-end">

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
            <HeaderCategories :categories="JSON.parse(categories)" :lang="lang" />
        </div>
        <transition name="fadeLast">
            <div v-if="state.showBurger" class="
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
                    ">
                <div class="max-w-7xl mx-auto">
                    <div class="grid grid-cols-1 md:grid-cols-2 mt-[30px] text-xl md:text-2xl">
                        <ul class="menu__list flex flex-col justify-center items-center">
                            <li v-for="category in JSON.parse(categories)" :key="category.id">
                                <a :href="route('category',category.slug)" class="
                                        py-5
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
                                        after:w-0
                                    ">
                                    {{ lang === 'ua' ? category.title.ua : (lang === 'ru' ? category.title.ru : null) }}
                                </a>
                            </li>
                        </ul>
                        <ul class="menu__list flex flex-col justify-center items-center">
                            <li>
                                <a :href="indexRoute" class="
                                            py-5
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
                                            after:w-0
                                    ">
                                    {{ lang === 'ru' ? 'Главная' : 'Головна' }}
                                </a>
                            </li>
                            <li>
                                <a :href="route('reviews')" class="
                                        py-5
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
                                ">
                                    Відгуки
                                </a>
                            </li>
                            <li v-for="page in JSON.parse(pages)" :key="page.id">
                                <a :href="'/pages/' + page.slug" class="
                                        py-5
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
                                ">
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

    <div>
        <div class="bottom-[5%] block fixed right-[2%] z-100" @click="showModalPopupSecond">
            <div
                class="items-center bg-[rgba(255,0,0,.8)] border-[1px] border-[rgba(255,0,0,.8)] rounded-[50%] cursor-pointer flex h-[50px] justify-center opacity-[0.9] w-[50px]">
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M29.16 19.5C28.83 19.5 28.485 19.395 28.155 19.32C27.4868 19.1727 26.83 18.9772 26.19 18.735C25.4942 18.4818 24.7293 18.495 24.0425 18.7719C23.3557 19.0488 22.7957 19.5699 22.47 20.235L22.14 20.91C20.679 20.0973 19.3365 19.0878 18.15 17.91C16.9722 16.7235 15.9628 15.381 15.15 13.92L15.78 13.5C16.4451 13.1744 16.9662 12.6143 17.2431 11.9275C17.52 11.2408 17.5332 10.4759 17.28 9.77998C17.0419 9.13862 16.8464 8.48218 16.695 7.81499C16.62 7.48499 16.56 7.13999 16.515 6.79499C16.3329 5.73842 15.7795 4.7816 14.9545 4.09684C14.1295 3.41209 13.0871 3.0444 12.015 3.05999H7.51503C6.86858 3.05392 6.2284 3.18721 5.63809 3.45078C5.04778 3.71436 4.52119 4.10203 4.09417 4.58741C3.66716 5.07279 3.34973 5.64448 3.16351 6.26356C2.97729 6.88264 2.92665 7.53457 3.01503 8.17498C3.81414 14.4591 6.68407 20.2978 11.1715 24.7689C15.6589 29.2401 21.5081 32.0887 27.795 32.865H28.365C29.4712 32.8666 30.5391 32.4608 31.365 31.725C31.8396 31.3006 32.2187 30.7803 32.4772 30.1985C32.7358 29.6167 32.868 28.9866 32.865 28.35V23.85C32.8467 22.8081 32.4672 21.8048 31.7915 21.0115C31.1158 20.2182 30.1858 19.6839 29.16 19.5ZM29.91 28.5C29.9098 28.713 29.8641 28.9234 29.7762 29.1174C29.6883 29.3114 29.56 29.4844 29.4 29.625C29.2324 29.7697 29.0364 29.8778 28.8246 29.9424C28.6128 30.007 28.3899 30.0266 28.17 30C22.5524 29.2797 17.3344 26.7097 13.3391 22.6954C9.34382 18.6811 6.79865 13.451 6.10503 7.82999C6.08116 7.61026 6.10208 7.38798 6.16653 7.17657C6.23099 6.96516 6.33763 6.76902 6.48003 6.59999C6.62059 6.43998 6.79362 6.31175 6.9876 6.22381C7.18157 6.13588 7.39205 6.09026 7.60503 6.08999H12.105C12.4538 6.08222 12.7945 6.1963 13.0682 6.41259C13.342 6.62888 13.5318 6.93384 13.605 7.27499C13.665 7.68499 13.74 8.08998 13.83 8.48998C14.0033 9.2807 14.2339 10.0578 14.52 10.815L12.42 11.79C12.2405 11.8724 12.079 11.9894 11.9448 12.1344C11.8106 12.2794 11.7063 12.4494 11.638 12.6348C11.5697 12.8201 11.5387 13.0172 11.5468 13.2146C11.5549 13.412 11.6018 13.6058 11.685 13.785C13.8438 18.4091 17.5609 22.1262 22.185 24.285C22.5502 24.435 22.9598 24.435 23.325 24.285C23.5121 24.2181 23.684 24.1147 23.8308 23.9808C23.9776 23.8469 24.0963 23.6851 24.18 23.505L25.11 21.405C25.8855 21.6823 26.6769 21.9127 27.48 22.095C27.88 22.185 28.285 22.26 28.695 22.32C29.0362 22.3932 29.3411 22.583 29.5574 22.8568C29.7737 23.1306 29.8878 23.4712 29.88 23.82L29.91 28.5Z"
                        fill="white"></path>
                </svg>
            </div>
        </div>
    </div>

    <modal @closeModal="showModalPopupSecond" v-if="showSecond" size="medium" class="oveflow-scroll">
        <template #content>
            <div class="block opacity-1">
                <div class="bg-[#fff] rounded-[20px] overflow-hidden relative text-center">
                    <!---->
                    <form>
                        <h3 slot="title" class="text-black text-[20px] font-[500] mt-[15px] mb-[15px]">Замовити дзвінок
                        </h3>
                        <span slot="subtitle" class="text-black text-[14px]">Наш оператор зателефонує Вам
                            протягом <span class="color-blue">5 хвилин</span></span>
                        <div class="text-left text-[14px] px-[5px]">


                            <label-component>Ім`я <span class="text-red-600">*</span> </label-component>
                            <input-component placeholder="Введіть ваше ім'я"></input-component>
                            <label-component>Номер телефону<span class="text-red-600">*</span></label-component>
                            <input-component v-maska="'+38 (0##) ###-##-##'" placeholder="+380"></input-component>

                            <label-component>Коментар </label-component>
                            <textarea class="border-[0.5px]
                                            rounded-[10px]
                                            box-border
                                            font-[350]
                                            h-[100px]
                                            mt-[0.75rem]
                                            p-[1rem]
                                            resize-none
                                            w-[100%]
                                            outline-none
                                            border-red-600
                                            focus:border-red-600
                                            focus:ring-red-600" rows="6"></textarea>
                        </div>
                        <button-component>Відправити</button-component>
                        <div @click="showModalPopupSecond" class="cursor-pointer hover:text-red-600">Не потрібно</div>
                    </form>
                </div>
            </div>


        </template>
    </modal>
    
    <button @click="scrollTop()" id="myBtn"
        class=" cursor-pointer items-center z-[-1] bg-gray-500 rounded-[50%] h-[50px] justify-center left-[2%] bottom-[5%] fixed w-[50px]" 
        ><span class="icon-arrow-up2 "><svg xmlns="http://www.w3.org/2000/svg" width="16"
                height="16" fill="currentColor" class="bi bi-arrow-up mx-auto" viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                    d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z" />
            </svg></span></button>
       
</template>

<script setup>
import HeaderCategories from '@/Pages/Public/Components/HeaderCategories.vue';
import { onMounted, ref } from "vue";





const state = ref({
    showBurger: false,
    langActiveClass: false,
    
})

var idBtn;



function scrollTop(){
 
  
        window.scrollTo({scrollX, top:0, behavior: 'smooth'});
  
   
    window.addEventListener('scrollY', function() {
        myBtn.classList.add('hide');
    });

    window.addEventListener('scroll', function() {
        myBtn.classList.remove('hide')
        myBtn.hidden = (scrollY < document.documentElement.clientHeight);
    });
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
    'categories',
    'textReviews',
    'reviewsRoute',
]);


function showBurgerMenu() {
    state.value.showBurger = !state.value.showBurger;

}

const show = ref(false);
const showSecond = ref(false)

function showModalPopup() {
    show.value = !show.value;

}

function showModalPopupSecond() {
    showSecond.value = !showSecond.value;
    
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



<style scoped>
.hide{
    display: none;
}
</style>