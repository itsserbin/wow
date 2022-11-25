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

        <lang-tabs @clickLang="changeLang"/>
        <hr class="mb-5">
        <div class="grid grid-cols-1 rounded">
            <div class="block mb-5">
                <label-component value="Назва в меню"/>
                <input-component v-model="item.heading[state.activeLang]" type="text"/>
            </div>

            <div class="block mb-5">
                <label-component value="Заголовок на сторінці"/>
                <input-component v-model="item.h1[state.activeLang]" type="text"/>
            </div>

            <div class="block mb-5">
                <label-component value="META Title"/>
                <input-component v-model="item.meta_title[state.activeLang]" type="text"/>
            </div>

            <div class="block mb-5">
                <label-component value="META Description"/>
                <textarea-component v-model="item.meta_description[state.activeLang]"/>
            </div>

            <div class="block mb-5">
                <label-component value="Текст"/>
                <editor :api-key="tiny.api" v-model="item.content[state.activeLang]" :init="tiny.settings"/>
            </div>
        </div>
    </form>
</template>

<script setup>
import {inject, onMounted, reactive, ref} from "vue";
import ImageCard from '@/Components/ImageCard.vue';

const props = defineProps(['item'])
const tiny = inject('$tiny');
const defaultLang = inject('$defaultLang');
const publishedStatuses = inject('$publishedStatuses');

const state = ref({
    activeLang: defaultLang
});

function changeLang(val) {
    state.value.activeLang = val;
}
</script>
