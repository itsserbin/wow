<script setup>
import {inject, ref} from "vue";
import XCircle from '@/Components/Icons/XCircle.vue';
import Table from '@/Components/Table.vue';
import LangTabs from '@/Components/LangTabs.vue';

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
        label: 'Назва',
        key: 'title'
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

    <Table :headings="headings"
           :isSlotMode="true"
           :rows="data"
    >
        <template #id="{data}">
            <a href="javascript:" @click="$emit('onEdit', data.row.id,data.i)">
                {{ data.row.id }}
            </a>
        </template>

        <template #title="{data}">
            {{ data.row.title[activeLang] }}
        </template>

        <template #timestamps="{data}">
            <div class="text-center">
                {{ $filters.dateTimeFormat(data.row.updated_at) }}
                <br>
                {{ $filters.dateTimeFormat(data.row.created_at) }}
            </div>
        </template>

        <template #actions="{data}">
            <a href="javascript:" @click="$emit('onDestroy',data.row.id)" v-if="canDestroy">
                <XCircle/>
            </a>
        </template>
    </Table>
</template>
