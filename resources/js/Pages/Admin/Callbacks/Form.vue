<template>
    <form @submit.prevent="$emit('submit',item)" class="flex flex-col">
        <div class="grid grid-cols-3 mb-5 gap-4">
            <div class="block col-span-2">
                <label-component value="ЧПУ"/>
                <input-component v-model="item.slug" type="text"/>
            </div>

            <div class="block">
                <label-component value="Статус публікації"/>
                <select-component v-model="item.published" :options="publishedStatuses"/>
            </div>
        </div>

        <lang-tabs @clickLang="changeLang" class="mb-5"/>

        <div class="grid grid-cols-1 dark:bg-gray-800 rounded">
            <div class="block mb-5">
                <label-component value="Назва в меню"/>
                <input-component v-model="item.heading.ru" type="text" v-if="state.activeLang === 'ru'"/>
                <input-component v-model="item.heading.ua" type="text" v-if="state.activeLang === 'ua'"/>
            </div>

            <div class="block mb-5">
                <label-component value="Заголовок на сторінці"/>
                <input-component v-model="item.h1.ru" type="text" v-if="state.activeLang === 'ru'"/>
                <input-component v-model="item.h1.ua" type="text" v-if="state.activeLang === 'ua'"/>
            </div>

            <div class="block mb-5">
                <label-component value="META Title"/>
                <input-component v-model="item.meta_title.ru" type="text" v-if="state.activeLang === 'ru'"/>
                <input-component v-model="item.meta_title.ua" type="text" v-if="state.activeLang === 'ua'"/>
            </div>

            <div class="block mb-5">
                <label-component value="META Description"/>
                <textarea-component v-model="item.meta_description.ru" v-if="state.activeLang === 'ru'"/>
                <textarea-component v-model="item.meta_description.ua" v-if="state.activeLang === 'ua'"/>
            </div>

            <div class="block mb-5">
                <label-component value="Текст"/>
                <textarea-component v-model="item.content.ru" v-if="state.activeLang === 'ru'"/>
                <textarea-component v-model="item.content.ua" v-if="state.activeLang === 'ua'"/>
            </div>
        </div>
    </form>
</template>

<script setup>
import {inject, onMounted, reactive, ref} from "vue";
import ImageCard from '@/Components/ImageCard.vue';

const props = defineProps(['item'])

const defaultLang = inject('$defaultLang');
const publishedStatuses = inject('$publishedStatuses');

const state = ref({
    activeLang: defaultLang
});

function changeLang(val) {
    state.value.activeLang = val;
}
</script>
