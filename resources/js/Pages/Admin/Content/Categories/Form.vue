<script setup>
import ImagesSelectModal from '@/Components/ImagesSelectModal.vue';
import ImageCard from '@/Components/ImageCard.vue';
import InputError from '@/Components/Form/InputError.vue';
import Label from '@/Components/Form/Label.vue';
import Input from '@/Components/Form/Input.vue';
import Textarea from '@/Components/Form/Textarea.vue';
import Select from '@/Components/Form/Select.vue';
import LangTabs from '@/Components/LangTabs.vue';
import Button from '@/Components/Button.vue';
import Editor from '@tinymce/tinymce-vue';

import {inject, onMounted, ref} from "vue";
import CategoriesRepository from "@/Repositories/CategoriesRepository";

const props = defineProps(['item', 'errors'])
const tiny = inject('$tiny');
const defaultLang = inject('$defaultLang');
const publishedStatuses = inject('$publishedStatuses');

const state = ref({
    categories: [],
    categoryPreview: [],
    isActiveSelectedPreviewModal: false,
    activeLang: defaultLang
});

onMounted(async () => {
    await getCategoriesList();
});

const previewModalFunction = () => {
    state.value.isActiveSelectedPreviewModal = !state.value.isActiveSelectedPreviewModal;
}

const destroyPreview = () => {
    props.item.preview_id = null;
    props.item.preview = {};
}

const changeLang = (val) => {
    state.value.activeLang = val;
}

const setPreview = (image) => {
    props.item.preview_id = image.id;
    props.item.preview.src = image.src;
    previewModalFunction();
}

const getCategoriesList = async () => {
    const data = await CategoriesRepository.list();
    if (data.success) {
        data.result.forEach((item) => {
            state.value.categories.push(
                {
                    key: item.id,
                    value: item.title.ua ? item.title.ua : item.title.ru
                }
            )
        })
    }
}
</script>

<template>
    <form @submit.prevent="$emit('submit',item)" class="flex flex-col">
        <div class="grid grid-cols-3 mb-5 gap-4">
            <div class="block col-span-2">
                <Label :value="$t('slug')"/>
                <Input v-model="item.slug" type="text" :placeholder="$t('enter_slug')"/>
                <InputError v-if="errors.slug" v-for="error in errors.slug" :message="error"/>
            </div>

            <div class="block">
                <Label :value="$t('published')"/>
                <Select v-model="item.published" :options="publishedStatuses"/>
            </div>
        </div>

        <div class="grid grid-cols-2 gap-4 mb-5">
            <div class="block">
                <Label :value="$t('categories.parent')"/>
                <Select v-model="item.parent_id" :options="state.categories"/>
            </div>

            <div class="block">
                <Label :value="$t('preview')"/>
                <div class="block mb-7 w-1/4 mx-auto" v-if="item.preview_id">
                    <ImageCard
                        :destroyIcon="true"
                        :image="item.preview"
                        @destroyImage="destroyPreview"
                        size="55"
                    />
                </div>
                <div class="block mb-7" v-else>
                    <Button type="button" @click="previewModalFunction">
                        {{ $t('select_image') }}
                    </Button>
                    <ImagesSelectModal v-if="state.isActiveSelectedPreviewModal"
                                       @submitForm="setPreview"
                                       @closeModal="previewModalFunction"
                    />
                </div>
            </div>
        </div>

        <LangTabs @clickLang="changeLang"/>
        <hr class="mb-5">

        <div class="grid grid-cols-1 rounded">
            <div class="block mb-5">
                <Label :value="$t('categories.title')"/>
                <Input v-model="item.title[state.activeLang]" type="text"
                       :placeholder="$t('categories.enter_title')"/>
            </div>

            <div class="block mb-5">
                <Label :value="$t('meta.title')"/>
                <Input v-model="item.meta_title[state.activeLang]" type="text"
                       :placeholder="$t('meta.enter_title')"/>
            </div>

            <div class="block mb-5">
                <Label :value="$t('meta.description')"/>
                <Textarea v-model="item.meta_description[state.activeLang]"
                          :placeholder="$t('meta.enter_description')"/>
            </div>

            <div class="block mb-5">
                <Label :value="$t('meta.keywords')"/>
                <Textarea v-model="item.meta_keyword[state.activeLang]"
                          :placeholder="$t('meta.enter_keywords')"/>
            </div>

            <div class="block mb-5">
                <Label :value="$t('seo_text')"/>
                <editor :api-key="tiny.api" v-model="item.seo_text[state.activeLang]" :init="tiny.settings"/>
            </div>
        </div>
    </form>
</template>
