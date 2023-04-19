<script setup>
import Table from '@/Components/Table.vue';

defineProps(['data']);

const headings = [
    {
        label: 'Дата',
        key: 'date'
    },
    {
        label: 'Всього',
        key: 'applications'
    },
    {
        label: 'Передані постачальнику',
        key: 'transferred_to_supplier'
    },
    {
        label: 'Вимагають уточнення',
        key: 'requires_clarification'
    },
    {
        label: 'Очікують відправлення',
        key: 'awaiting_dispatch'
    },
    {
        label: 'Очікують передоплати',
        key: 'awaiting_prepayment'
    },
    {
        label: 'В дорозі',
        key: 'on_the_road'
    },
    {
        label: 'В процесі',
        key: 'in_process'
    },
    {
        label: 'На пошті',
        key: 'at_the_post_office'
    },
    {
        label: 'Виконані',
        key: 'completed'
    },
    {
        label: 'Повернення',
        key: 'refunds'
    },
    {
        label: 'Скасовані',
        key: 'cancel'
    },
    {
        label: 'Нові',
        key: 'unprocessed'
    }
];
</script>

<template>
    <Table :headings="headings" :rows="data" :isSlotMode="true">
        <template #date="{data}">
            {{ $filters.dateFormat(data.row.date) }}
        </template>

        <template #completed="{data}">
            {{ data.row.completed ? `${data.row.completed} (${data.row.received_parcel_ratio}%)` : data.row.completed }}
        </template>

        <template #refunds="{data}">
            {{ data.row.refunds ? `${data.row.refunds} (${data.row.returned_orders_ratio}%)` : data.row.refunds }}
        </template>

        <template #cancel="{data}">
            {{ data.row.cancel ? `${data.row.cancel} (${data.row.canceled_orders_rate}%)` : data.row.cancel }}
        </template>
    </Table>
</template>
