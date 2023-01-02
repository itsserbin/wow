<template>
    <lang-tabs @clickLang="changeLang"/>

    <table-component :headings="headings"
                     :isSlotMode="true"
                     :rows="data"
    >
        <template #id="{data}">
            <a href="javascript:" @click="$emit('onEdit', data.row.id,data.i)">
                {{ data.row.id }}
            </a>
        </template>

        <template #title="{data}">
            {{
                activeLang === 'ua'
                    ? data.row.h1.ua
                    : (activeLang === 'ru' ? data.row.h1.ru : null)
            }}
        </template>

        <template #published="{data}">
            {{ $filters.publishedStatus(data.row.published) }}
        </template>

        <template #price="{data}">
            {{ $filters.formatMoney(data.row.price) }}
        </template>

        <template #discount_price="{data}">
            {{ $filters.formatMoney(data.row.discount_price) }}
        </template>

        <template #preview="{data}">
            <img :src="data.row.preview_id ? route('images.55',data.row.preview.src) : null"
                 :alt="activeLang === 'ua' ? data.row.h1.ua :
                            (activeLang === 'ru' ? data.row.h1.ru : null)"
                 class="mx-auto"
            >
        </template>

        <template #stat="{data}">
            {{ data.row.viewed ? data.row.viewed : '0' }}
            <hr class="my-1">
            {{ data.row.total_sales ? data.row.total_sales : '0' }}
        </template>
        <template #stat2="{data}">
            {{ data.row.returns ? data.row.returns : '0' }}
            <hr class="my-1">
            {{ data.row.exchange ? data.row.exchange : '0' }}
        </template>

        <template #sort="{data}">
            <div class="grid grid-cols-2 gap-3 items-center">
                <input-component v-model="data.row.sort" class="px-3 text-center"/>
                <a href="javascript:" @click="updateProductSort(data.row.id,data.row.sort)">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                         class="bi bi-save" viewBox="0 0 16 16">
                        <path
                            d="M2 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H9.5a1 1 0 0 0-1 1v7.293l2.646-2.647a.5.5 0 0 1 .708.708l-3.5 3.5a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L7.5 9.293V2a2 2 0 0 1 2-2H14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h2.5a.5.5 0 0 1 0 1H2z"/>
                    </svg>
                </a>
            </div>
        </template>

        <template #actions="{data}">
            <a href="javascript:" @click="$emit('onDestroy', data.row.id)" v-if="canDestroy">
                <xcircle-component/>
            </a>
        </template>
    </table-component>
</template>


<script setup>
import {inject, ref} from "vue";

defineProps(['data', 'canDestroy']);
const emits = defineEmits(['onDestroy', 'onEdit', 'onUpdateProductSort'])

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
        key: 'stat'
    },
    {
        label: "Повернень<hr class='my-1'>Обмінів",
        key: 'stat2'
    },
    {
        label: '#',
        key: 'actions'
    }
];

function changeLang(val) {
    activeLang.value = val;
}

function updateProductSort(product_id, sort) {
    emits('onUpdateProductSort', product_id, sort)
}
</script>
