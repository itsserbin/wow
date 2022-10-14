<template>
    <form class="grid gap-4">
        <div class="block">
            <label-component value="Статус публікації"/>
            <select-component v-model="item.published" :options="publishedStatuses"/>
        </div>

        <div>
            <lang-tabs @clickLang="changeLang"/>

            <div class="grid gap-4">
                <div class="block">
                    <label-component value="Питання"/>
                    <input-component v-model="item.question.ru" v-if="state.activeLang === 'ru'" type="text"/>
                    <input-component v-model="item.question.ua" v-if="state.activeLang === 'ua'" type="text"/>
                </div>

                <div class="block">
                    <label-component value="Відповідь"/>
                    <textarea-component v-model="item.answer.ru" v-if="state.activeLang === 'ru'" rows="4"/>
                    <textarea-component v-model="item.answer.ua" v-if="state.activeLang === 'ua'" rows="4"/>
                </div>
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
