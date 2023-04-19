<script setup>
import Table from '@/Components/Table.vue';

defineProps(['data']);

const headings = [
    {
        label: 'Дата',
        key: 'date'
    },
    {
        label: 'Ср. ціна заявки',
        key: 'average_application_price'
    },
    {
        label: 'Ср. ціна апрува',
        key: 'average_approve_application_price'
    },
    {
        label: 'Ср. ціна виконаної заявки',
        key: 'average_done_application_price'
    },
    {
        label: 'Ср. чек',
        key: 'average_check'
    },
    {
        label: 'Ср. маржа',
        key: 'average_marginality'
    },
    {
        label: 'Ср. кількість товарів',
        key: 'average_items'
    },
];
</script>

<template>
    <Table :headings="headings" :rows="data" :isSlotMode="true">
        <template #date="{data}">
            {{ $filters.dateFormat(data.row.date) }}
        </template>

        <template #costs="{data}">
            {{ $filters.formatMoney(data.row.costs) }}
        </template>
    </Table>
</template>
