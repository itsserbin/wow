<template>
    <LangTabs @clickLang="changeLang"/>

    <Table :headings="headings"
           :isSlotMode="true"
           :rows="data"
    >
        <template #id="{data}">
            <a href="javascript:" @click="$emit('onEdit', data.row.id,data.i)">
                {{ data.row.id }}
            </a>
        </template>

        <template #heading="{data}">
            {{ data.row.heading[activeLang] }}
        </template>

        <template #h1="{data}">
            {{ data.row.h1[activeLang] }}
        </template>

        <template #published="{data}">
            {{ $filters.publishedStatus(data.row.published) }}
        </template>

        <template #timestamps="{data}">
            {{ $filters.dateTimeFormat(data.row.updated_at) }}
            <hr class="my-1">
            {{ $filters.dateTimeFormat(data.row.created_at) }}
        </template>

        <template #actions="{data}">
            <a href="javascript:" @click="$emit('onDestroy', data.row.id)" v-if="canDestroy">
                <XCircle/>
            </a>
        </template>
    </Table>
</template>


<script setup>
import LangTabs from '@/Components/LangTabs.vue';
import Table from '@/Components/Table.vue';
import XCircle from '@/Components/Icons/XCircle.vue';

import {inject, ref} from "vue";
import {useI18n} from 'vue-i18n'

defineProps(['data', 'canDestroy']);
defineEmits(['onDestroy', 'onEdit'])

const defaultLang = inject('$defaultLang');
const {t} = useI18n();

const activeLang = ref(defaultLang);

const headings = [
    {
        label: t('id'),
        key: 'id'
    },
    {
        label: t('pages.heading'),
        key: 'heading'
    },
    {
        label: t('pages.h1'),
        key: 'h1'
    },
    {
        label: t('published'),
        key: 'published'
    },
    {
        label: t('updated_at') + "<hr class='my-1'>" + t('created_at'),
        key: 'timestamps'
    },
    {
        label: '#',
        key: 'actions'
    }
];


const changeLang = (val) => {
    activeLang.value = val;
}
</script>
