<template>
    <div class="burger__sticks
                justify-end
                relative
                !w-[25px]
                h-[18px]
                z-50
                p-0
                ease-out
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
                cursor-pointer
         "
         @click="showFunction"
         :class="{'active': show}">
        <span class="bg-[#c4c4c4] block h-[2px] relative left-0 top-[8px] w-[100%]"></span>
    </div>

    <transition name="fadeLast">
        <div v-if="show"
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
                <div class="grid grid-cols-1 mt-[30px] text-base md:text-2xl">
                    <ul class="menu__list flex flex-col justify-center items-center">
                        <li>
                            <BurgerMenuLink :href="route('home')">
                                {{ lang === 'ru' ? 'Главная' : 'Головна' }}
                            </BurgerMenuLink>
                        </li>
                        <li>
                            <BurgerMenuLink :href="route('status')">
                               Статус замовлення
                            </BurgerMenuLink>
                        </li>
                        <li>
                            <BurgerMenuLink :href="route('reviews')">
                                Відгуки
                            </BurgerMenuLink>
                        </li>
                        <li v-for="page in JSON.parse(pages)" :key="page.id">
                            <BurgerMenuLink :href="route('pages',page.slug)">
                                {{ lang === 'ru' ? page.heading.ru : page.heading.ua }}
                            </BurgerMenuLink>
                        </li>
                    </ul>
                </div>
                <div class="grid gap-4 justify-items-center mt-5  text-[#fff] text-sm md:text-base">

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
</template>

<script setup>
import {ref} from "vue";
import BurgerMenuLink from '@/Pages/Public/Components/Header/BurgerMenuLink.vue'

defineProps([
    'lang',
    'pages',
    'appViber',
    'appTelegram',
    'appSchedule',
    'appInstagram',
    'appFacebook',
    'appEmail',
    'appPhone',
]);

const show = ref(false);

function showFunction() {
    show.value = !show.value;
}
</script>
