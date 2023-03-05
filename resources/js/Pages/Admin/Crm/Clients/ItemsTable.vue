<template>
    <Table
        :isSlotMode="true"
        :rows="data"
        :headings="headings"
    >
        <template #id="{data}">
            <a :href="route('admin.crm.orders', {id: data.row.id})" target="_blank">
                {{ data.row.id }}
            </a>
        </template>

        <template #status="{data}">
            {{ orderStatuses[data.row.status] }}
        </template>
        <template #total_price="{data}">
            {{ $filters.formatMoney(data.row.total_price) }}
        </template>

        <template #timestamps="{data}">
            {{ $filters.dateTimeFormat(data.row.updated_at) }}
            <hr class="my-1 max-w-[40%] mx-auto">
            {{ $filters.dateTimeFormat(data.row.created_at) }}
        </template>
    </Table>
</template>

<script setup>
import Table from '@/Components/Table.vue';

import {reactive} from "vue";
import {useI18n} from 'vue-i18n';

const {t} = useI18n();

defineProps(['data', 'orderStatuses']);
defineEmits(['editOrderItem', 'destroyOrderItem'])

const headings = reactive([
    {
        label: t('id'),
        key: 'id'
    },
    {
        label: t('status'),
        key: 'status'
    },
    {
        label: t('orders.total_count'),
        key: 'total_count'
    },
    {
        label: t('orders.total_price'),
        key: 'total_price'
    },
    {
        label: t('updated_at') + "<hr class='my-1 max-w-[40%] mx-auto'>" + t('created_at'),
        key: 'timestamps'
    }
])

const orderPage = (id) => {
    window.location.href = route('admin.crm.orders', {id: id});
}
</script>
