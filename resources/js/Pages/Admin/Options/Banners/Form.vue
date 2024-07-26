<script setup>
import {inject, ref, onMounted} from "vue";
import UploadBannersInput from './UploadBannersInput.vue';
import Input from '@/Components/Form/Input.vue';
import Label from '@/Components/Form/Label.vue';
import Select from '@/Components/Form/Select.vue';
import LangTabs from '@/Components/LangTabs.vue';
import Multiselect from '@/Components/Multiselect/Multiselect.vue';

const props = defineProps(['item'])

const publishedStatuses = inject('$publishedStatuses');
const defaultLang = inject('$defaultLang');
const emits = defineEmits(['onUploadImage']);
const state = ref({
    categories: [],
    activeLang: defaultLang
});

onMounted(() => {
    axios.get(route('api.categories.list'))
        .then(({data}) => state.value.categories = data.result)
        .catch((response) => console.log(response))
})

function h1AndCodeAndId({title, id}) {
    if (title && id) {
        return `${state.value.activeLang === 'ua' ? title.ua : (state.value.activeLang === 'ru' ? title.ru : '-')} -${id}`;
    } else {
        return `${id}`;
    }
}

function changeLang(val) {
    state.value.activeLang = val;
}

function uploadImageMobileUa(file) {
    uploadImage(file, 'mobile', 'ua')
}

function uploadImageMobileRu(file) {
    uploadImage(file, 'mobile', 'ru')
}

function uploadImageTableUa(file) {
    uploadImage(file, 'table', 'ua')
}

function uploadImageTableRu(file) {
    uploadImage(file, 'table', 'ru')
}


function uploadImageDesktopUa(file) {
    uploadImage(file, 'desktop', 'ua')
}

function uploadImageDesktopRu(file) {
    uploadImage(file, 'desktop', 'ru')
}

function uploadImage(image, device, lang) {
    emits('onUploadImage', image, device, lang)
}

function destroyImage(device, lang) {
    if (device === 'mobile') {
        if (lang === 'ru') {
            props.item.image_mobile.ru = null;
        }
        if (lang === 'ua') {
            props.item.image_mobile.ua = null;
        }
    }
    if (device === 'table') {
        if (lang === 'ru') {
            props.item.image_table.ru = null;
        }
        if (lang === 'ua') {
            props.item.image_table.ua = null;
        }
    }
    if (device === 'desktop') {
        if (lang === 'ru') {
            props.item.image_desktop.ru = null;
        }
        if (lang === 'ua') {
            props.item.image_desktop.ua = null;
        }
    }
}
</script>

<template>
    <form>
        <div class="grid gap-4">
            <div class="block">
                <Label value="Статус публікації"/>
                <Select v-model="item.published" :options="publishedStatuses"/>
            </div>

            <div class="block">
                <Label value="Категорії"/>
                <Multiselect
                    :options="state.categories"
                    v-model="item.categories"
                    :custom-label="h1AndCodeAndId"
                    placeholder="Оберіть категорії"
                    track-by="id"
                    :close-on-select="true"
                    :searchable="true"
                    :multiple="true"
                />
            </div>

            <LangTabs @clickLang="changeLang"/>

            <div class="block">
                <Label value="Назва"/>
                <Input v-model="item.title[state.activeLang]" type="text"/>
            </div>

            <div class="block">
                <Label value="Посилання"/>
                <Input v-model="item.link[state.activeLang]" type="text"/>
            </div>

            <div class="grid grid-cols-2 gap-4">
                <div class="block">
                    <UploadBannersInput label="Зображення для мобільних"
                                        @upload="uploadImageMobileUa"
                                        v-if="state.activeLang === 'ua'"
                                        :image="item.image_mobile.ua ? '/storage/banners/mobile/' + item.image_mobile.ua + '.jpeg' : null"
                                        @onDestroyImage="destroyImage('mobile','ua')"
                    />
                    <UploadBannersInput label="Зображення для мобільних"
                                        @upload="uploadImageMobileRu"
                                        v-if="state.activeLang === 'ru'"
                                        :image="item.image_mobile.ru ? '/storage/banners/mobile/' + item.image_mobile.ru + '.jpeg' : null"
                                        @onDestroyImage="destroyImage('mobile','ru')"
                    />
                </div>

                <div class="block">
                    <UploadBannersInput @upload="uploadImageTableRu"
                                        :image="item.image_table.ru ? '/storage/banners/table/' + item.image_table.ru + '.jpeg' : null"
                                        @onDestroyImage="destroyImage('table','ru')"
                                        v-if="state.activeLang === 'ru'"
                    />

                    <UploadBannersInput label="Зображення для планшетів"
                                        @upload="uploadImageTableUa"
                                        :image="item.image_table.ua ? '/storage/banners/table/' + item.image_table.ua + '.jpeg' : null"
                                        @onDestroyImage="destroyImage('table','ua')"
                                        v-if="state.activeLang === 'ua'"
                    />
                </div>
            </div>
            <div class="block">
                <UploadBannersInput label="Зображення для компʼютерів"
                                    @upload="uploadImageDesktopRu"
                                    :image="item.image_desktop.ru ? '/storage/banners/desktop/' + item.image_desktop.ru + '.jpeg' : null"
                                    @onDestroyImage="destroyImage('desktop','ru')"
                                    v-if="state.activeLang === 'ru'"
                />

                <UploadBannersInput label="Зображення для компʼютерів"
                                    @upload="uploadImageDesktopUa"
                                    :image="item.image_desktop.ua ? '/storage/banners/desktop/' + item.image_desktop.ua + '.jpeg' : null"
                                    @onDestroyImage="destroyImage('desktop','ua')"
                                    v-if="state.activeLang === 'ua'"
                />
            </div>
        </div>
    </form>
</template>
