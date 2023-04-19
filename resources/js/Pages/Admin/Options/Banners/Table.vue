<script setup>
import LangTabs from '@/Components/LangTabs.vue';
import Table from '@/Components/Table.vue';
import XCircle from '@/Components/Icons/XCircle.vue';

import {inject, ref} from "vue";

defineProps(['data', 'canDestroy']);
defineEmits(['onDestroy', 'onEdit']);

const defaultLang = inject('$defaultLang');

const activeLang = ref(defaultLang);

const headings = [
    {
        label: 'ID',
        key: 'id'
    },
    {
        label: 'Фото',
        key: 'image'
    },
    {
        label: 'Назва',
        key: 'title'
    },
    {
        label: 'Статус',
        key: 'published'
    },
    {
        label: 'Посилання',
        key: 'link'
    },
    {
        label: "Оновлено<hr class='my-1'>Створено",
        key: 'timestamps'
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

<template>
    <LangTabs @clickLang="changeLang"/>

    <Table :headings="headings" :isSlotMode="true" :rows="data">
        <template #id="{data}">
            <a href="javascript:" @click="$emit('onEdit',data.row.id,data.i)">
                {{ data.row.id }}
            </a>
        </template>

        <template #image="{data}">
            <img :src="data.row.image_mobile.ua ? route('images.banners.mobile',data.row.image_mobile.ua) :
                        (data.row.image_mobile.ru ? route('images.banners.mobile',data.row.image_mobile.ru) : null)"
                 :alt="data.row.title[activeLang]"
                 class="w-1/4 mx-auto">
        </template>

        <template #title="{data}">
            {{ data.row.title[activeLang] }}
        </template>

        <template #published="{data}">
            {{ $filters.publishedStatus(data.row.published) }}
        </template>

        <template #link="{data}">
            {{ data.row.link[activeLang] }}
        </template>

        <template #timestamps="{data}">
            {{ $filters.dateFormat(data.row.updated_at) }}
            <hr class="my-1">
            {{ $filters.dateFormat(data.row.created_at) }}
        </template>

        <template #actions="{data}">
            <a href="javascript:" @click="$emit('onDestroy', data.row.id)" v-if="canDestroy">
                <XCircle/>
            </a>
        </template>
    </Table>
</template>
