<template>
    <lang-tabs @clickLang="changeLang"/>

    <table-component :headings="headings"
                     :isSlotMode="true"
                     :rows="data"
    >
        <template v-slot:id="{data}">
            <a href="javascript:" @click="$emit('onEdit', data.row.id,data.i)">
                {{ data.row.id }}
            </a>
        </template>

        <template v-slot:title="{data}">
            {{
                activeLang === 'ua' ? data.row.h1.ua :
                    (activeLang === 'ru' ? data.row.h1.ru : null)
            }}
        </template>

        <template v-slot:published="{data}">
            {{ $filters.publishedStatus(data.row.published) }}
        </template>

        <template v-slot:price="{data}">
            {{ $filters.formatMoney(data.row.price) }}
        </template>

        <template v-slot:discount_price="{data}">
            {{ $filters.formatMoney(data.row.discount_price) }}
        </template>

        <template v-slot:preview="{data}">
            <img :src="data.row.preview ? route('images.products.55',data.row.preview) : null"
                 :alt="activeLang === 'ua' ? data.row.h1.ua :
                            (activeLang === 'ru' ? data.row.h1.ru : null)"
                 class="mx-auto"
            >
        </template>

        <template v-slot:actions="{data}">
            <a href="javascript:" @click="$emit('onDestroy', data.row.id)" v-if="canDestroy">
                <xcircle-component/>
            </a>
        </template>
    </table-component>
</template>


<script setup>
import {inject, ref} from "vue";

defineProps(['data','canDestroy']);
defineEmits(['onDestroy', 'onEdit'])

const defaultLang = inject('$defaultLang');

const activeLang = ref(defaultLang);

const headings = [
    {
        label: 'ID',
        key: 'id'
    },
    {
        label: 'Головне зображення',
        key: 'preview'
    },
    {
        label: 'Назва',
        key: 'title'
    },
    {
        label: 'Статус публікації',
        key: 'published'
    },
    {
        label: 'Артикул',
        key: 'vendor_code'
    },
    {
        label: 'Ціна',
        key: 'price'
    },
    {
        label: 'Ціна зі знижкою',
        key: 'discount_price'
    },
    {
        label: 'Сортування',
        key: 'sort'
    },
    {
        label: "Переглядів<hr class='my-1'>Покупок",
        key: 'sort'
    },
    {
        label: '#',
        key: 'actions'
    }
];

function changeLang(val) {
    activeLang.value = val;
}
</script>
