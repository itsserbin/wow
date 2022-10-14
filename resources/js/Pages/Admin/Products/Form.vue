<template>
    <form @submit.prevent="$emit('submit',product)" class="flex flex-col">
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
                <multiselect
                    :options="state.providers"
                    v-model="product.provider"
                    :custom-label="h1AndCodeAndId"
                    placeholder="Оберіть постачальника"
                    class="mb-5"
                    track-by="id"
                    :close-on-select="true"
                    :searchable="true"
                />
            </div>

            <div class="block">
                <upload-input-component :multiple="false"
                                        id="uploadCategoryPreview"
                                        label="Головне зображення"
                                        @upload="uploadProductPreview"
                                        :images="state.productPreview"
                                        @onDestroyImage="destroyPreview"
                />
            </div>
        </div>

        <div class="grid grid-cols-2  gap-4 mb-5">
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

        <lang-tabs @clickLang="changeLang" class="mb-5"/>

        <div class="block mb-5">
            <label-component value="Назва товару"/>
            <input-component v-model="product.h1.ru" v-if="state.activeLang === 'ru'" type="text"/>
            <input-component v-model="product.h1.ua" v-if="state.activeLang === 'ua'" type="text"/>
        </div>

        <div class="block mb-5">
            <label-component value="META Title"/>
            <input-component v-model="product.title.ru" v-if="state.activeLang === 'ru'" type="text"/>
            <input-component v-model="product.title.ua" v-if="state.activeLang === 'ua'" type="text"/>
        </div>

        <div class="block mb-5">
            <label-component value="META Description"/>
            <textarea-component v-model="product.description.ru" v-if="state.activeLang === 'ru'"/>
            <textarea-component v-model="product.description.ua" v-if="state.activeLang === 'ua'"/>
        </div>


        <div class="block mb-5">
            <label-component value="Опис товару"/>
            <textarea-component v-model="product.content.ru" v-if="state.activeLang === 'ru'"/>
            <textarea-component v-model="product.content.ua" v-if="state.activeLang === 'ua'"/>
        </div>

        <div class="block mb-5">
            <label-component value="Характеристики"/>
            <textarea-component v-model="product.characteristics.ru" v-if="state.activeLang === 'ru'"/>
            <textarea-component v-model="product.characteristics.ua" v-if="state.activeLang === 'ua'"/>
        </div>

        <div class="block mb-5">
            <label-component value="Таблиця розмірів"/>
            <textarea-component v-model="product.size_table"/>
        </div>

        <div class="grid grid-cols-3 gap-4 mb-5">
            <div class="block">
                <label-component value="Price "/>
                <input-component v-model="product.price" type="number"/>
            </div>

            <div class="block">
                <label-component value="Discount price "/>
                <input-component v-model="product.discount_price" type="number"/>
            </div>

            <div class="block">
                <label-component value="Trade price "/>
                <input-component v-model="product.trade_price" type="number"/>
            </div>
        </div>

        <div class="row">
            <div class="block mb-7" v-if="product.images">
                <label-component value="Images"/>
                <Images :images="product.images" @destroyImage="destroyImage"/>
            </div>
            <div class="block mb-7">
                <button-component type="button" @click="imagesModalFunction">Select Images</button-component>
                <ImagesSelectModal v-if="state.isActiveSelectedImagesModal"
                                   @submitForm="setProductImages"
                                   @closeModal="imagesModalFunction"
                />
            </div>
        </div>

    </form>
</template>

<script setup>
import Images from '@/Pages/Admin/Products/Images.vue';
import ImagesSelectModal from '@/Pages/Admin/Products/ImagesSelectModal.vue';
import ImageCard from '@/Components/ImageCard.vue';

import {computed, inject, onMounted, reactive, ref} from "vue";

const emits = defineEmits(['submit', 'setProductImages', 'destroyImage'])

const props = defineProps(['product'])
const defaultLang = inject('$defaultLang');
const publishedStatuses = inject('$publishedStatuses');

const state = ref({
    isActiveSelectedImagesModal: false,
    activeLang: defaultLang,
    statusOptions: [
        {
            key: 'in stock',
            value: 'В наявності'
        },
        {
            key: 'ends',
            value: 'Нема в наявності'
        },
        {
            key: 'out of stock',
            value: 'Закінчується'
        }
    ],
    categories: [],
    providers: [],
    colors: [],
    sizes: [],
    productPreview: []
})

onMounted(() => {
    axios.get(route('api.categories.list'))
        .then(({data}) => state.value.categories = data.result)
        .catch((response) => console.log(response));

    axios.get(route('api.providers.list'))
        .then(({data}) => state.value.providers = data.result)
        .catch((response) => console.log(response));

    axios.get(route('api.colors.list'))
        .then(({data}) => state.value.colors = data.result)
        .catch((response) => console.log(response));

    axios.get(route('api.sizes.list'))
        .then(({data}) => state.value.sizes = data.result)
        .catch((response) => console.log(response));

    if (props.product.preview) {
        previewArray(props.product.preview)

    }
});

function previewArray(val) {
    state.value.productPreview.push({
        src: '/storage/images/55/' + val
    })
}

function changeLang(val) {
    state.value.activeLang = val;
}

function h1AndCodeAndId({title, id}) {
    if (title && id) {
        return `${state.value.activeLang === 'ua' ? title.ua : (state.value.activeLang === 'ru' ? title.ru : '-')} -${id}`;
    } else {
        return `${id}`;
    }
}

function imagesModalFunction() {
    state.value.isActiveSelectedImagesModal = !state.value.isActiveSelectedImagesModal;
}

function uploadProductPreview(image) {
    let formData = new FormData();
    formData.append('image', image);
    axios.post(route('api.images.upload'), formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
        .then(({data}) => {
            props.product.preview = data.result;
            previewArray(data.result);
        })
        .catch((response) => console.log(response));
}

function destroyPreview() {
    props.product.preview = null;
    state.value.productPreview = [];
}

function setProductImages(images) {
    imagesModalFunction();
    emits('setProductImages', images);
}

function destroyImage(image) {
    emits('destroyImage', image);
}
</script>
