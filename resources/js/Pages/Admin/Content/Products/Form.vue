<template>
    <form @submit.prevent="$emit('submit',product)" class="grid grid-cols-1 gap-4">
        <div class="grid grid-cols-3 gap-4 mb-5">
            <div class="block">
                <label-component value="Статус публікації"/>
                <select-component v-model="product.published" :options="publishedStatuses"/>
            </div>

            <div class="block">
                <label-component value="Наявність товару"/>
                <select-component v-model="product.status" :options="state.statusOptions"/>
            </div>

            <div class="block">
                <label-component value="Артикул"/>
                <input-component v-model="product.vendor_code" type="text"/>
            </div>
        </div>

        <div class="grid grid-cols-3 gap-4">
            <div class="block">
                <label-component value="Категорії"/>
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
                <label-component value="Постачальники"/>
                <select-component v-model="product.provider_id" :options="state.providers"/>
            </div>

            <div class="block">
                <label-component value="Головне зображення"/>
                <div class="block mb-7" v-if="product.preview_id">
                    <ImageCard
                        :destroyIcon="true"
                        :image="product.preview"
                        @destroyImage="destroyPreview"
                        size="55"
                    />
                </div>
                <div class="block mb-7" v-else>
                    <button-component type="button" @click="previewModalFunction">Обрати зображення</button-component>
                    <ImagesSelectModal v-if="state.isActiveSelectedPreviewModal"
                                       @submitForm="setProductPreview"
                                       @closeModal="previewModalFunction"
                    />
                </div>
            </div>
        </div>

        <div class="grid grid-cols-2 gap-4">
            <div class="block">
                <label-component value="Розміри"/>
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
                <label-component value="Кольори"/>
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
            <label-component value="Youtube"/>
            <input-component v-model="product.youtube" type="text"/>
        </div>

        <lang-tabs @clickLang="changeLang"/>
        <hr class="mb-5">

        <div class="grid grid-cols-1 gap-4">
            <div class="block">
                <label-component value="Назва товару"/>
                <input-component v-model="product.h1[state.activeLang]" type="text"/>
            </div>

            <div class="block">
                <label-component value="META Title"/>
                <input-component v-model="product.title[state.activeLang]" type="text"/>
            </div>

            <div class="block">
                <label-component value="META Description"/>
                <textarea-component v-model="product.description[state.activeLang]"/>
            </div>


            <div class="block">
                <label-component value="Опис товару"/>
                <editor :api-key="tiny.api" v-model="product.content[state.activeLang]" :init="tiny.settings"/>
            </div>

            <div class="block">
                <label-component value="Характеристики"/>
                <editor :api-key="tiny.api" v-model="product.characteristics[state.activeLang]" :init="tiny.settings"/>
            </div>

            <div class="block">
                <label-component value="Таблиця розмірів"/>
                <editor :api-key="tiny.api" v-model="product.size_table" :init="tiny.settings"/>
            </div>

            <div class="grid grid-cols-3 gap-4 mb-5">
                <div class="block">
                    <label-component value="Ціна"/>
                    <input-component v-model="product.price" type="number"/>
                </div>

                <div class="block">
                    <label-component value="Ціна зі знижкою"/>
                    <input-component v-model="product.discount_price" type="number"/>
                </div>

                <div class="block">
                    <label-component value="Ціна закупки"/>
                    <input-component v-model="product.trade_price" type="number"/>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="block mb-7" v-if="product.images">
                <label-component value="Зображення"/>
                <Images :images="product.images" @destroyImage="destroyImage"/>
            </div>
            <div class="block mb-7">
                <button-component type="button" @click="imagesModalFunction">Обрати зображення</button-component>
                <ImagesSelectModal v-if="state.isActiveSelectedImagesModal"
                                   @submitForm="setProductImages"
                                   @closeModal="imagesModalFunction"
                                   :multiple="true"
                />
            </div>
        </div>

    </form>
</template>

<script setup>
import {inject, onMounted, ref} from "vue";
import Images from '@/Pages/Admin/Content/Products/Images.vue';
import ImagesSelectModal from '@/Components/ImagesSelectModal.vue';
import ImageCard from '@/Components/ImageCard.vue';

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
})

onMounted(() => {
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
