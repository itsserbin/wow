<template>
    <nav class="max-w-7xl mx-auto">
        <ul class="main-menu__list">
            <swiper
                class="header-categories"
                :slides-per-view="2"
                :space-between="0"
                :breakpoints="{
                              '768': {
                                slidesPerView: 4,
                                spaceBetween: 10,
                              },
                              '1024': {
                                slidesPerView: 8,
                                spaceBetween: 20,
                              },
                            }"
            >

                <swiper-slide v-for="category in categoriesList" :key="category.id">
                    <li class="text-center py-2">
                        <a :href="route('category',category.slug)" class="font-bold text-sm whitespace-nowrap">
                            {{
                                lang === 'ua' ? category.title.ua :
                                    (lang === 'ru' ? category.title.ru : null)
                            }}
                        </a>
                    </li>
                </swiper-slide>
            </swiper>
        </ul>
    </nav>
</template>

<script setup>
defineProps(['categoriesList', 'lang']);
</script>

<style>
.header-categories .swiper-wrapper {
    justify-content: center;
}
</style>
