<script setup>
import LangTabs from '@/Components/LangTabs.vue';
import Select from '@/Components/Form/Select.vue';
import Label from '@/Components/Form/Label.vue';
import Input from '@/Components/Form/Input.vue';
import Textarea from '@/Components/Form/Textarea.vue';

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

<template>
    <form class="grid gap-4">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="block">
                <Label value="Статус публікації"/>
                <Select v-model="item.published" :options="publishedStatuses"/>
            </div>

            <div class="block">
                <Label value="Зображення (SVG)"/>
                <Textarea v-model="item.icon"/>
            </div>
        </div>

        <div>
            <LangTabs @clickLang="changeLang"/>

            <div class="block">
                <Label value="Текст"/>
                <Input v-model="item.text[state.activeLang]" type="text"/>
            </div>
        </div>
    </form>
</template>
