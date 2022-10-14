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
                <upload-input-component :multiple="false"
                                        id="uploadCategoryPreview"
                                        label="Головне зображення"
                                        @upload="uploadImageFunction"
                                        :images="state.categoryPreview"
                                        @onDestroyImage="destroyPreview"
                />
            </div>
        </div>

        <lang-tabs @clickLang="changeLang" class="mb-5"/>

        <div class="grid grid-cols-1 dark:bg-gray-800 rounded">
            <div class="block mb-5">
                <label-component value="Назва категорії"/>
                <input-component v-model="item.title.ru" type="text" v-if="state.activeLang === 'ru'"/>
                <input-component v-model="item.title.ua" type="text" v-if="state.activeLang === 'ua'"/>
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
                <label-component value="META Keywords"/>
                <textarea-component v-model="item.meta_keyword.ru" v-if="state.activeLang === 'ru'"/>
                <textarea-component v-model="item.meta_keyword.ua" v-if="state.activeLang === 'ua'"/>
            </div>

            <div class="block mb-5">
                <label-component value="SEO Текст"/>
                <textarea-component v-model="item.seo_text.ru" v-if="state.activeLang === 'ru'"/>
                <textarea-component v-model="item.seo_text.ua" v-if="state.activeLang === 'ua'"/>
            </div>
        </div>
    </form>
</template>

<script setup>
import {inject, onMounted, reactive, ref} from "vue";

const props = defineProps(['item'])

const defaultLang = inject('$defaultLang');
const publishedStatuses = inject('$publishedStatuses');

const state = ref({
    categories: [],
    categoryPreview: [],
    activeLang: defaultLang
});

onMounted(() => {
    getCategoriesList();
    if (props.item.preview) {
        previewArray(props.item.preview);
    }
});

function previewArray(val) {
    state.value.categoryPreview.push({
        src: '/storage/images/55/' + val
    })
}

function changeLang(val) {
    state.value.activeLang = val;
}

function destroyPreview() {
    props.item.preview = null;
    state.value.categoryPreview = [];
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
