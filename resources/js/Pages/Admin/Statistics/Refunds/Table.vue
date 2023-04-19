<script setup>
import Table from '@/Components/Table.vue'

defineProps(['data']);

const headings = [
    {
        label: 'Дата',
        key: 'date'
    },
    {
        label: 'Номер замовлення',
        key: 'order_id'
    },
    {
        label: 'Сума постачальника',
        key: 'sum_provider_trade_price'
    },
    {
        label: 'Сума замовлення',
        key: 'sum_order_price'
    },
    {
        label: 'Сума сплати постачальником',
        key: 'sum_provider_refund'
    },
    {
        label: 'Сума сплати клієнту',
        key: 'sum_client_refund'
    }
];
</script>

<template>
    <Table :headings="headings" :rows="data" :isSlotMode="true">
        <template #date="{data}">
            {{ $filters.dateFormat(data.row.date) }}
        </template>

        <template #sum_provider_trade_price="{data}">
            {{ $filters.formatMoney(data.row.sum_provider_trade_price) }}
        </template>

        <template #sum_order_price="{data}">
            {{ $filters.formatMoney(data.row.sum_order_price) }}
        </template>

        <template #sum_provider_refund="{data}">
            {{ $filters.formatMoney(data.row.sum_provider_refund) }}
        </template>

        <template #sum_client_refund="{data}">
            {{ $filters.formatMoney(data.row.sum_client_refund) }}
        </template>

    </Table>
</template>
