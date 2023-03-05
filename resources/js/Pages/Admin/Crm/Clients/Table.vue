<template>
    <Table :headings="headings"
           :isSlotMode="true"
           :rows="data"
           @sort="sort"
    >
        <template #id="{data}">
            <a href="javascript:" @click="$emit('onEdit',data.row.id,data.i)">
                {{ data.row.id }}
            </a>
        </template>

        <template #name="{data}">
            {{ data.row.name }}
        </template>

        <template #last_name="{data}">
            {{ data.row.last_name }}
        </template>

        <template #phone="{data}">
            <a :href="'tel:' + data.row.phone">
                {{ data.row.phone }}
            </a>
        </template>

        <template #average_check="{data}">
            {{ $filters.formatMoney(data.row.average_check) }}
        </template>

        <template #whole_check="{data}">
            {{ $filters.formatMoney(data.row.whole_check) }}
        </template>

        <template #status="{data}">
            {{ statuses[data.row.status] }}
        </template>

        <template #created_at="{data}">
            {{ $filters.dateTimeFormat(data.row.created_at) }}
        </template>

        <template #updated_at="{data}">
            {{ $filters.dateTimeFormat(data.row.updated_at) }}
        </template>

        <template #actions="{data}">
            <a href="javascript:" @click="$emit('onDestroy',data.row.id)" v-if="canDestroy">
                <XCircle/>
            </a>
        </template>
    </Table>
</template>

<script setup>
import Table from '@/Components/Table.vue';
import XCircle from '@/Components/Icons/XCircle.vue';

import {useI18n} from 'vue-i18n';

const {t} = useI18n();

const emits = defineEmits(['onDestroy', 'onEdit', 'orderBy'])
defineProps(['data', 'onEdit', 'statuses', 'canDestroy']);

const sort = (key, type) => {
    emits('orderBy', key, type);
}

const headings = [
    {
        label: t('id'),
        key: 'id',
        sortable: true
    },
    {
        label: t('clients.status'),
        key: 'status',
        sortable: true
    },
    {
        label: t('clients.name'),
        key: 'name'
    },
    {
        label: t('clients.last_name'),
        key: 'last_name'
    },
    {
        label: t('clients.phone'),
        key: 'phone'
    },
    {
        label: t('clients.number_of_purchases'),
        key: 'number_of_purchases',
        sortable: true
    },
    {
        label: t('clients.purchased_goods'),
        key: 'purchased_goods',
        sortable: true
    },
    {
        label: t('clients.average_check'),
        key: 'average_check',
        sortable: true
    },
    {
        label: t('clients.whole_check'),
        key: 'whole_check',
        sortable: true
    },
    {
        label: t('created_at'),
        key: 'created_at',
        sortable: true
    },
    {
        label: t('updated_at'),
        key: 'updated_at',
        sortable: true
    },
    {
        label: '#',
        key: 'actions'
    }
];

</script>
