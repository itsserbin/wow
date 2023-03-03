<template>
    <div>
        <LangTabs @clickLang="changeLang"/>

        <Table :headings="headings"
               :isSlotMode="true"
               :rows="data"
        >
            <template #id="{data}">
                <a href="javascript:" @click="$emit('onEdit',data.row.id,data.i)">
                    {{ data.row.id }}
                </a>
            </template>

            <template #preview="{data}">
                <img :src="data.row.preview_id ? route('images.55', data.row.preview.src) : null"
                     :alt="data.row.title[activeLang]"
                     class="mx-auto w-16"
                >
            </template>

            <template #title="{data}">
                <a href="javascript:">
                    {{ data.row.title[activeLang] }}
                </a>
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
                <a href="javascript:" @click="$emit('onDestroy',data.row.id)" v-if="canDestroy">
                    <XCircle/>
                </a>
            </template>
        </Table>
    </div>
</template>

<script setup>
import LangTabs from '@/Components/LangTabs.vue';
import Table from '@/Components/Table.vue';
import XCircle from '@/Components/Icons/XCircle.vue';

import {inject, ref} from "vue";
import {useI18n} from 'vue-i18n'

defineProps(['data', 'canDestroy']);
defineEmits(['onEdit', 'onDestroy']);

const defaultLang = inject('$defaultLang');
const {t} = useI18n();
const activeLang = ref(defaultLang);

const headings = ([
    {
        label: t('id'),
        key: 'id'
    },
    {
        label: t('preview'),
        key: 'preview'
    },
    {
        label: t('categories.title'),
        key: 'title'
    },
    {
        label: t('published'),
        key: 'published'
    },
    {
        label: t('categories.parent'),
        key: 'parent_id'
    },
    {
        label: t('sort'),
        key: 'sort'
    },
    {
        label: t('updated_at') + "<hr class='my-1'>" + t('created_at'),
        key: 'timestamps'
    },
    {
        label: '#',
        key: 'actions'
    }
]);

const changeLang = (val) => {
    activeLang.value = val;
}
</script>
