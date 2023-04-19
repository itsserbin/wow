<script setup>
import {defineAsyncComponent} from "vue";

defineProps(['options', 'lang'])

const ViberIcon = defineAsyncComponent(() => import('@/Components/Icons/ViberIcon.vue'));
const TelegramIcon = defineAsyncComponent(() => import('@/Components/Icons/TelegramIcon.vue'));
const InstagramIcon = defineAsyncComponent(() => import('@/Components/Icons/InstagramIcon.vue'));
const FacebookIcon = defineAsyncComponent(() => import('@/Components/Icons/FacebookIcon.vue'));
const BurgerMenuLink = defineAsyncComponent(() => import('@/Pages/Public/Components/Header/BurgerMenuLink.vue'));

</script>

<template>
    <div
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
                    <li v-for="page in JSON.pages" :key="page.id">
                        <BurgerMenuLink :href="route('pages',page.slug)">
                            {{ lang === 'ru' ? page.heading.ru : page.heading.ua }}
                        </BurgerMenuLink>
                    </li>
                </ul>
            </div>
            <div class="grid gap-4 justify-items-center mt-5  text-[#fff] text-sm md:text-base">

                <a v-if="options.phone" :href="'tel:' + options.phone">
                    {{ options.phone }}
                </a>

                <a v-if="options.email" :href="'mailto:' + options.email">
                    {{ options.email }}
                </a>

                <a v-if="options.facebook" :href="options.facebook" target="_blank">
                    <FacebookIcon/>
                </a>

                <a v-if="options.instagram" :href="options.instagram" target="_blank">
                    <InstagramIcon/>
                </a>


                <div class="row">
                    <div v-if="options.schedule"
                         class="burger-menu__schedule flex uppercase text-[#fff] text-center">
                        <div v-html="options.schedule"></div>
                    </div>
                    <div class="burger-menu__messengers messengers">
                        <a v-if="options.telegram" :href="options.telegram" target="_blank">
                            <TelegramIcon/>
                        </a>
                        <a v-if="options.viber" :href="options.viber" target="_blank">
                            <ViberIcon/>
                        </a>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
