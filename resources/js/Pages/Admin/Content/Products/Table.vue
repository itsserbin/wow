<script setup>
import Input from '@/Components/Form/Input.vue'
import LangTabs from '@/Components/LangTabs.vue'
import Table from '@/Components/Table.vue'
import XCircle from '@/Components/Icons/XCircle.vue'

import {inject, ref} from "vue";
import {useI18n} from 'vue-i18n';

defineProps(['data', 'canDestroy']);
const emits = defineEmits(['onDestroy', 'onEdit', 'onUpdateProductSort'])

const defaultLang = inject('$defaultLang');
const {t} = useI18n();

const activeLang = ref(defaultLang);

const headings = [
    {
        label: t('id'),
        key: 'id'
    },
    {
        label: t('preview'),
        key: 'preview'
    },
    {
        label: t('products.h1'),
        key: 'h1'
    },
    {
        label: t('published'),
        key: 'published'
    },
    {
        label: t('products.vendor_code'),
        key: 'vendor_code'
    },
    {
        label: t('products.price'),
        key: 'price'
    },
    {
        label: t('products.discount_price'),
        key: 'discount_price'
    },
    {
        label: t('sort'),
        key: 'sort'
    },
    {
        label: t('products.views') + "<hr class='my-1'>" + t('products.sales'),
        key: 'stat'
    },
    {
        label: t('products.returns') + "<hr class='my-1'>" + t('products.refunds'),
        key: 'stat2'
    },
    {
        label: '#',
        key: 'actions'
    }
];

const changeLang = (val) => {
    activeLang.value = val;
}

const updateProductSort = (product_id, sort) => {
    emits('onUpdateProductSort', product_id, sort)
}
</script>

<template>
    <LangTabs @clickLang="changeLang"/>

    <Table :headings="headings" :isSlotMode="true" :rows="data">
        <template #id="{data}">
            <a href="javascript:" @click="$emit('onEdit', data.row.id,data.i)">
                {{ data.row.id }}
            </a>
        </template>

        <template #h1="{data}">
            {{ data.row.h1[activeLang] }}
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
            <img :src="data.row.preview_id ? '/storage/products/55/' + data.row.preview.src : null"
                 :alt="data.row.h1[activeLang]"
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
                <Input v-model="data.row.sort" class="px-3 text-center"/>
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
                <XCircle/>
            </a>
        </template>
    </Table>
</template>
