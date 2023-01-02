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

        <div class="grid grid-cols-2 gap-4 mb-5">
            <div class="block">
                <label-component value="Батьківська категорія"/>
                <select-component v-model="item.parent_id" :options="state.categories"/>
            </div>

            <div class="block">
                <label-component value="Головне зображення"/>
                <div class="block mb-7" v-if="item.preview_id">
                    <ImageCard
                        :destroyIcon="true"
                        :image="item.preview"
                        @destroyImage="destroyPreview"
                        size="55"
                    />
                </div>
                <div class="block mb-7" v-else>
                    <button-component type="button" @click="previewModalFunction">Обрати зображення</button-component>
                    <ImagesSelectModal v-if="state.isActiveSelectedPreviewModal"
                                       @submitForm="setPreview"
                                       @closeModal="previewModalFunction"
                    />
                </div>
                <!--                <upload-input-component :multiple="false"-->
                <!--                                        id="uploadCategoryPreview"-->
                <!--                                        label="Головне зображення"-->
                <!--                                        @upload="uploadImageFunction"-->
                <!--                                        :images="state.categoryPreview"-->
                <!--                                        @onDestroyImage="destroyPreview"-->
                <!--                />-->
            </div>
        </div>

        <lang-tabs @clickLang="changeLang"/>
        <hr class="mb-5">

        <div class="grid grid-cols-1 rounded">
            <div class="block mb-5">
                <label-component value="Назва категорії"/>
                <input-component v-model="item.title[state.activeLang]" type="text"/>
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
                <label-component value="META Keywords"/>
                <textarea-component v-model="item.meta_keyword[state.activeLang]"/>
            </div>

            <div class="block mb-5">
                <label-component value="SEO Текст"/>
                <editor :api-key="tiny.api" v-model="item.seo_text[state.activeLang]" :init="tiny.settings"/>
            </div>
        </div>
    </form>
</template>

<script setup>
import {inject, onMounted, ref} from "vue";
import ImagesSelectModal from '@/Components/ImagesSelectModal.vue';
import ImageCard from '@/Components/ImageCard.vue';

const props = defineProps(['item'])
const tiny = inject('$tiny');
const defaultLang = inject('$defaultLang');
const publishedStatuses = inject('$publishedStatuses');

const state = ref({
    categories: [],
    categoryPreview: [],
    isActiveSelectedPreviewModal: false,
    activeLang: defaultLang
});

onMounted(() => {
    getCategoriesList();
});

function previewModalFunction() {
    state.value.isActiveSelectedPreviewModal = !state.value.isActiveSelectedPreviewModal;
}

function destroyPreview() {
    props.item.preview_id = null;
    props.item.preview = {};
}

function changeLang(val) {
    state.value.activeLang = val;
}

function setPreview(image) {
    props.item.preview_id = image.id;
    props.item.preview.src = image.src;
    previewModalFunction();
}

function getCategoriesList() {
    axios.get(route('api.categories.list'))
        .then(({data}) => {
            data.result.forEach((item) => {
                state.value.categories.push(
                    {
                        key: item.id,
                        value: item.title.ua ? item.title.ua : item.title.ru
                    }
                )
            })
        })
        .catch((response) => console.log(response))
}

function uploadImageFunction(image) {
    let formData = new FormData();
    formData.append('image', image);
    axios.post(route('api.images.upload'), formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
        .then(({data}) => {
            props.item.preview = data.result;
            previewArray(data.result);
        })
        .catch((response) => console.log(response));
}
</script>
