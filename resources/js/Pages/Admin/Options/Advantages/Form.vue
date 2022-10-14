<template>
    <form class="grid gap-4">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="block">
                <label-component value="Статус публікації"/>
                <select-component v-model="item.published" :options="publishedStatuses"/>
            </div>

            <div class="block">
                <label-component value="Зображення (SVG)"/>
                <textarea-component v-model="item.icon"/>
            </div>
        </div>

        <div>
            <lang-tabs @clickLang="changeLang"/>

            <div class="block">
                <label-component value="Текст"/>
                <input-component v-model="item.text.ru" v-if="state.activeLang === 'ru'" type="text"/>
                <input-component v-model="item.text.ua" v-if="state.activeLang === 'ua'" type="text"/>
            </div>
        </div>
    </form>
</template>

<script setup>
import {inject, ref} from "vue";

defineProps(['item'])

const publishedStatuses = inject('$publishedStatuses');
const defaultLang = inject('$defaultLang');

const state = ref({
    activeLang: defaultLang
});

function changeLang(val) {
    state.value.activeLang = val;
}
</script>
