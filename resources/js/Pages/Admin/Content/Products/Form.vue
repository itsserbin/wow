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
import Multiselect from '@/Components/Multiselect/Multiselect.vue';
import Editor from '@tinymce/tinymce-vue';

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

onMounted(async () => {
    await getCharacteristicsList();

    await axios.get(route('api.categories.list'))
        .then(({data}) => state.value.categories = data.result)
        .catch((response) => console.log(response));

    await axios.get(route('api.providers.list'))
        .then(({data}) => {
            data.result.forEach((item) => {
                state.value.providers.push({
                    key: item.id,
                    value: item.name
                })
            })
        })
        .catch((response) => console.log(response));

    await axios.get(route('api.colors.list'))
        .then(({data}) => state.value.colors = data.result)
        .catch((response) => console.log(response));

    await axios.get(route('api.sizes.list'))
        .then(({data}) => state.value.sizes = data.result)
        .catch((response) => console.log(response));
});

const customCharacteristicLabel = ({title}) => {
    if (title) {
        return title[state.value.activeLang];
    }
}

const getCharacteristicsList = async () => {
    try {
        const {result, success} = await CharacteristicsRepository().list();
        if (success) {
            state.value.characteristics = result;
        }
    } catch (e) {
        console.error(e);
    }
}

const changeLang = (val) => {
    state.value.activeLang = val;
}

const h1AndCodeAndId = ({h1, id}) => {
    if (h1 && id) {
        return `${state.value.activeLang === 'ua' ? h1.ua : (state.value.activeLang === 'ru' ? h1.ru : '-')} -${id}`;
    } else {
        return `${id}`;
    }
}

const imagesModalFunction = () => {
    state.value.isActiveSelectedImagesModal = !state.value.isActiveSelectedImagesModal;
}

const previewModalFunction = () => {
    state.value.isActiveSelectedPreviewModal = !state.value.isActiveSelectedPreviewModal;
}

const destroyPreview = () => {
    props.product.preview_id = null;
}

const setProductImages = (images) => {
    imagesModalFunction();
    emits('setProductImages', images);
}

const setProductPreview = (image) => {
    props.product.preview_id = image.id;
    props.product.preview.src = image.src;
    previewModalFunction();
}

const destroyImage = (image) => {
    emits('destroyImage', image);
}
</script>

<template>
    <form @submit.prevent="$emit('submit',product)" class="grid grid-cols-1 gap-4">
        <div class="grid grid-cols-3 gap-4 mb-5">
            <div class="block">
                <Label :value="$t('published')"/>
                <Select v-model="product.published" :options="publishedStatuses"/>
            </div>

            <div class="block">
                <Label :value="$t('products.status')"/>
                <Select v-model="product.status" :options="state.statusOptions"/>
            </div>

            <div class="block">
                <Label :value="$t('products.vendor_code')"/>
                <Input v-model="product.vendor_code" type="text"
                       :placeholder="$t('products.enter_vendor_code')"/>
            </div>
        </div>

        <div class="grid grid-cols-3 gap-4">
            <div class="block">
                <Label :value="$t('products.categories')"/>
                <multiselect
                    :options="state.categories"
                    v-model="product.categories"
                    :custom-label="h1AndCodeAndId"
                    :placeholder="$t('products.enter_categories')"
                    class="mb-5"
                    track-by="id"
                    :searchable="true"
                    :multiple="true"
                />
            </div>

            <div class="block">
                <Label :value="$t('products.provider')"/>
                <Select v-model="product.provider_id" :options="state.providers"/>
            </div>

            <div class="block">
                <Label :value="$t('preview')"/>
                <div class="block mb-7" v-if="product.preview_id">
                    <ImageCard
                        :destroyIcon="true"
                        :image="product.preview"
                        @destroyImage="destroyPreview"
                        size="55"
                    />
                </div>
                <div class="block mb-7" v-else>
                    <Button type="button" @click="previewModalFunction">
                        {{ $t('select_image') }}
                    </Button>
                    <ImagesSelectModal v-if="state.isActiveSelectedPreviewModal"
                                       @submitForm="setProductPreview"
                                       @closeModal="previewModalFunction"
                    />
                </div>
            </div>
        </div>

        <div class="grid grid-cols-2 gap-4">
            <div class="block">
                <Label :value="$t('products.sizes')"/>
                <multiselect
                    :options="state.sizes"
                    v-model="product.sizes"
                    label="title"
                    :placeholder="$t('products.enter_sizes')"
                    track-by="id"
                    :close-on-select="false"
                    :searchable="true"
                    :multiple="true"
                />
            </div>

            <div class="block">
                <Label :value="$t('products.colors')"/>
                <multiselect
                    :options="state.colors"
                    v-model="product.colors"
                    label="name"
                    :placeholder="$t('products.enter_colors')"
                    track-by="id"
                    :close-on-select="false"
                    :searchable="true"
                    :multiple="true"
                />
            </div>
        </div>

        <div class="block">
            <Label :value="$t('products.youtube')"/>
            <Input v-model="product.youtube" type="text"
                   :placeholder="$t('products.enter_youtube')"/>
        </div>

        <LangTabs @clickLang="changeLang"/>
        <hr class="mb-5">

        <div class="grid grid-cols-1 gap-4">
            <div class="block">
                <Label :value="$t('products.h1')"/>
                <Input v-model="product.h1[state.activeLang]" type="text"
                       :placeholder="$t('products.enter_h1')"/>
            </div>

            <div class="block">
                <Label :value="$t('meta.title')"/>
                <Input v-model="product.title[state.activeLang]" type="text"
                       :placeholder="$t('meta.enter_title')"/>
            </div>

            <div class="block">
                <Label :value="$t('meta.description')"/>
                <Textarea v-model="product.description[state.activeLang]"
                          :placeholder="$t('meta.enter_description')"/>
            </div>

            <div class="block">
                <Label :value="$t('products.content')"/>
                <editor :api-key="tiny.api" v-model="product.content[state.activeLang]" :init="tiny.settings"/>
            </div>

            <div class="block">
                <Label :value="$t('products.size_table')"/>
                <editor :api-key="tiny.api" v-model="product.size_table" :init="tiny.settings"/>
            </div>

            <div class="grid grid-cols-3 gap-4 mb-5">
                <div class="block">
                    <Label :value="$t('products.price')"/>
                    <Input v-model="product.price" type="number"
                           :placeholder="$t('products.enter_price')"/>
                </div>

                <div class="block">
                    <Label :value="$t('products.discount_price')"/>
                    <Input v-model="product.discount_price" type="number"
                           :placeholder="$t('products.enter_discount_price')"/>
                </div>

                <div class="block">
                    <Label :value="$t('products.trade_price')"/>
                    <Input v-model="product.trade_price" type="number"
                           :placeholder="$t('products.enter_trade_price')"/>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="block mb-7" v-if="product.images">
                <Label :value="$t('images.page_title')"/>
                <Images :images="product.images" @destroyImage="destroyImage"/>
            </div>
            <div class="block mb-7">
                <Button type="button" @click="imagesModalFunction">
                    {{ $t('select_image') }}
                </Button>
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
                    :placeholder="$t('products.select_characteristic_value')"
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
