<template>
    <nav class="main-menu">
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
                                slidesPerView: 7,
                                spaceBetween: 20,
                              },
                            }"
            >

                <swiper-slide v-for="category in categoriesList" :key="category.id">
                    <li class="main-menu__item main-menu__item_sub">
                        <a :href="categoryRoute + '/' + category.slug" class="main-menu__item-link ">
                                    <span class="main-menu__item-label">
                                        {{
                                            lang === 'ua' ? category.title.ua : (lang === 'ru' ? category.title.ru : null)
                                        }}
                                    </span>
                        </a>
                    </li>
                </swiper-slide>
            </swiper>
        </ul>
    </nav>
</template>

<script>
export default {
    props: ['categoriesList', 'categoryRoute', 'lang']
}
</script>

<style>
.header-categories .swiper-wrapper{
    justify-content: center;
}
</style>
