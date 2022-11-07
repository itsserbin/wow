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
                activeLang === 'ua' ? data.row.h1.ua :
                    (activeLang === 'ru' ? data.row.h1.ru : null)
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
            <img :src="data.row.preview ? route('images.products.55',data.row.preview) : null"
                 :alt="activeLang === 'ua' ? data.row.h1.ua :
                            (activeLang === 'ru' ? data.row.h1.ru : null)"
                 class="mx-auto"
            >
        </template>

        <template #stat="{data}">
            {{data.row.viewed ? data.row.viewed : '0'}}
            <hr class="my-1">
            {{data.row.total_sales ? data.row.total_sales : '0'}}
        </template>
        <template #stat2="{data}">
            {{data.row.returns ? data.row.returns : '0'}}
            <hr class="my-1">
            {{data.row.exchange ? data.row.exchange : '0'}}
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
</script>
