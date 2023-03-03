<template>
    <form @submit.prevent="$emit('submit',item)" class="flex flex-col">
        <div class="grid grid-cols-3 mb-5 gap-4">
            <div class="block col-span-2">
                <Label :value="$t('slug')"/>
                <Input v-model="item.slug" type="text" :placeholder="$t('enter_slug')"/>
            </div>

            <div class="block">
                <Label :value="$t('published')"/>
                <Select v-model="item.published" :options="publishedStatuses"/>
            </div>
        </div>
        <LangTabs @clickLang="changeLang"/>
        <hr class="mb-5">
        <div class="grid grid-cols-1 rounded">
            <div class="block mb-5">
                <Label :value="$t('pages.heading')"/>
                <Input v-model="item.heading[activeLang]" type="text"
                       :placeholder="$t('pages.enter_heading')"/>
            </div>

            <div class="block mb-5">
                <Label :value="$t('pages.h1')"/>
                <Input v-model="item.h1[activeLang]" type="text"
                       :placeholder="$t('pages.enter_h1')"/>
            </div>

            <div class="block mb-5">
                <Label :value="$t('meta.title')"/>
                <Input v-model="item.meta_title[activeLang]" type="text"
                       :placeholder="$t('meta.enter_title')"/>
            </div>

            <div class="block mb-5">
                <Label :value="$t('meta.description')"/>
                <Textarea v-model="item.meta_description[activeLang]"
                          :placeholder="$t('meta.enter_description')"/>
            </div>

            <div class="block mb-5">
                <Label :value="$t('seo_text')"/>
                <editor :api-key="tiny.api" v-model="item.content[activeLang]" :init="tiny.settings"/>
            </div>
        </div>
    </form>
</template>

<script setup>
import Label from '@/Components/Form/Label.vue';
import Input from '@/Components/Form/Input.vue';
import Textarea from '@/Components/Form/Textarea.vue';
import Select from '@/Components/Form/Select.vue';
import LangTabs from '@/Components/LangTabs.vue';

import {inject, ref} from "vue";

const props = defineProps(['item'])
const tiny = inject('$tiny');
const defaultLang = inject('$defaultLang');
const publishedStatuses = inject('$publishedStatuses');

const activeLang = ref(defaultLang);

const changeLang = (val) => {
    activeLang.value = val;
}
</script>
