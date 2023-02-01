<template>
    <form @submit.prevent="$emit('submit',product)" class="grid grid-cols-1 gap-4">
        <div class="grid grid-cols-3 gap-4 mb-5">
            <div class="block">
                <Label value="Статус публікації"/>
                <Select v-model="product.published" :options="publishedStatuses"/>
            </div>

            <div class="block">
                <Label value="Наявність товару"/>
                <Select v-model="product.status" :options="state.statusOptions"/>
            </div>

            <div class="block">
                <Label value="Артикул"/>
                <Input v-model="product.vendor_code" type="text"/>
            </div>
        </div>

        <div class="grid grid-cols-3 gap-4">
            <div class="block">
                <Label value="Категорії"/>
                <multiselect
                    :options="state.categories"
                    v-model="product.categories"
                    :custom-label="h1AndCodeAndId"
                    placeholder="Оберіть категорії"
                    class="mb-5"
                    track-by="id"
                    :searchable="true"
                    :multiple="true"
                />
            </div>

            <div class="block">
                <Label value="Постачальники"/>
                <Select v-model="product.provider_id" :options="state.providers"/>
            </div>

            <div class="block">
                <Label value="Головне зображення"/>
                <div class="block mb-7" v-if="product.preview_id">
                    <ImageCard
                        :destroyIcon="true"
                        :image="product.preview"
                        @destroyImage="destroyPreview"
                        size="55"
                    />
                </div>
                <div class="block mb-7" v-else>
                    <Button type="button" @click="previewModalFunction">Обрати зображення</Button>
                    <ImagesSelectModal v-if="state.isActiveSelectedPreviewModal"
                                       @submitForm="setProductPreview"
                                       @closeModal="previewModalFunction"
                    />
                </div>
            </div>
        </div>

        <div class="grid grid-cols-2 gap-4">
            <div class="block">
                <Label value="Розміри"/>
                <multiselect
                    :options="state.sizes"
                    v-model="product.sizes"
                    label="title"
                    placeholder="Оберіть розміри"
                    track-by="id"
                    :close-on-select="false"
                    :searchable="true"
                    :multiple="true"
                />
            </div>

            <div class="block">
                <Label value="Кольори"/>
                <multiselect
                    :options="state.colors"
                    v-model="product.colors"
                    label="name"
                    placeholder="Оберіть кольори"
                    track-by="id"
                    :close-on-select="false"
                    :searchable="true"
                    :multiple="true"
                />
            </div>
        </div>

        <div class="block">
            <Label value="Youtube"/>
            <Input v-model="product.youtube" type="text"/>
        </div>

        <LangTabs @clickLang="changeLang"/>
        <hr class="mb-5">

        <div class="grid grid-cols-1 gap-4">
            <div class="block">
                <Label value="Назва товару"/>
                <Input v-model="product.h1[state.activeLang]" type="text"/>
            </div>

            <div class="block">
                <Label value="META Title"/>
                <Input v-model="product.title[state.activeLang]" type="text"/>
            </div>

            <div class="block">
                <Label value="META Description"/>
                <Textarea v-model="product.description[state.activeLang]"/>
            </div>


            <div class="block">
                <Label value="Опис товару"/>
                <editor :api-key="tiny.api" v-model="product.content[state.activeLang]" :init="tiny.settings"/>
            </div>

            <div class="block">
                <Label value="Характеристики"/>
                <editor :api-key="tiny.api" v-model="product.characteristics[state.activeLang]" :init="tiny.settings"/>
            </div>

            <div class="block">
                <Label value="Таблиця розмірів"/>
                <editor :api-key="tiny.api" v-model="product.size_table" :init="tiny.settings"/>
            </div>

            <div class="grid grid-cols-3 gap-4 mb-5">
                <div class="block">
                    <Label value="Ціна"/>
                    <Input v-model="product.price" type="number"/>
                </div>

                <div class="block">
                    <Label value="Ціна зі знижкою"/>
                    <Input v-model="product.discount_price" type="number"/>
                </div>

                <div class="block">
                    <Label value="Ціна закупки"/>
                    <Input v-model="product.trade_price" type="number"/>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="block mb-7" v-if="product.images">
                <Label value="Зображення"/>
                <Images :images="product.images" @destroyImage="destroyImage"/>
            </div>
            <div class="block mb-7">
                <Button type="button" @click="imagesModalFunction">Обрати зображення</Button>
                <ImagesSelectModal v-if="state.isActiveSelectedImagesModal"
                                   @submitForm="setProductImages"
                                   @closeModal="imagesModalFunction"
                                   :multiple="true"
                />
            </div>
        </div>

        <div class="grid grid-cols-4 gap-4">
            <div class="block" v-for="characteristic in state.characteristics" v-if="state.characteristics.length">
                <Label :value="characteristic.title[state.activeLang]"/>
                <multiselect
                    :options="characteristic.values"
                    v-model="product.characteristicsNew[characteristic.id]"
                    :custom-label="customCharacteristicLabel"
                    placeholder="Оберіть значення"
                    class="mb-5"
                    track-by="id"
                    value="id"
                    :searchable="true"
                    :multiple="true"
                    :close-on-select="false"
                />
            </div>
        </div>
    </form>
</template>

<script setup>
import {inject, onMounted, ref} from "vue";
import Images from '@/Pages/Admin/Content/Products/Images.vue';
import ImagesSelectModal from '@/Components/ImagesSelectModal.vue';
import Button from '@/Components/Button.vue';
import Label from '@/Components/Form/Label.vue';
import Textarea from '@/Components/Form/Textarea.vue';
import Input from '@/Components/Form/Input.vue';
import Select from '@/Components/Form/Select.vue';
import ImageCard from '@/Components/ImageCard.vue';
import LangTabs from '@/Components/LangTabs.vue';
import {CharacteristicsRepository} from "@/Repositories/CharacteristicsRepository";

const emits = defineEmits(['submit', 'setProductImages', 'destroyImage'])
const props = defineProps(['product'])
const defaultLang = inject('$defaultLang');
const tiny = inject('$tiny');
const publishedStatuses = inject('$publishedStatuses');
const state = ref({
    isActiveSelectedImagesModal: false,
    isActiveSelectedPreviewModal: false,
    activeLang: defaultLang,
    statusOptions: [
        {
            key: 'in stock',
            value: 'В наявності'
        },
        {
            key: 'ends',
            value: 'Закінчується'
        },
        {
            key: 'out of stock',
            value: 'Нема в наявності'
        }
    ],
    categories: [],
    providers: [],
    colors: [],
    sizes: [],
    characteristics: []
})

onMounted(() => {
    getCharacteristicsList();

    axios.get(route('api.categories.list'))
        .then(({data}) => state.value.categories = data.result)
        .catch((response) => console.log(response));

    axios.get(route('api.providers.list'))
        .then(({data}) => {
            data.result.forEach((item) => {
                state.value.providers.push({
                    key: item.id,
                    value: item.name
                })
            })
        })
        .catch((response) => console.log(response));

    axios.get(route('api.colors.list'))
        .then(({data}) => state.value.colors = data.result)
        .catch((response) => console.log(response));

    axios.get(route('api.sizes.list'))
        .then(({data}) => state.value.sizes = data.result)
        .catch((response) => console.log(response));
});

function customCharacteristicLabel({title}) {
    if (title) {
        return title[state.value.activeLang];
    }
}

async function getCharacteristicsList() {
    try {
        const {result, success} = await CharacteristicsRepository().list();
        if (success) {
            state.value.characteristics = result;
        }
    } catch (e) {
        console.error(e);
    }
}

function changeLang(val) {
    state.value.activeLang = val;
}

function h1AndCodeAndId({h1, id}) {
    if (h1 && id) {
        return `${state.value.activeLang === 'ua' ? h1.ua : (state.value.activeLang === 'ru' ? h1.ru : '-')} -${id}`;
    } else {
        return `${id}`;
    }
}

function imagesModalFunction() {
    state.value.isActiveSelectedImagesModal = !state.value.isActiveSelectedImagesModal;
}

function previewModalFunction() {
    state.value.isActiveSelectedPreviewModal = !state.value.isActiveSelectedPreviewModal;
}

function destroyPreview() {
    props.product.preview_id = null;
}

function setProductImages(images) {
    imagesModalFunction();
    emits('setProductImages', images);
}

function setProductPreview(image) {
    props.product.preview_id = image.id;
    props.product.preview.src = image.src;
    previewModalFunction();
}

function destroyImage(image) {
    emits('destroyImage', image);
}
</script>
