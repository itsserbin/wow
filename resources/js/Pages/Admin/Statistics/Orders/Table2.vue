<template>
    <table-component :headings="headings"
                     :rows="data"
                     :isSlotMode="true"
    >
        <template #completed="{data}">
            {{ data.row.completed + ` (${data.row.received_parcel_ratio}%)` }}
        </template>

        <template #refunds="{data}">
            {{ data.row.refunds + ` (${data.row.returned_orders_ratio}%)` }}
        </template>

        <template #cancel="{data}">
            {{ data.row.cancel + ` (${data.row.canceled_orders_rate}%)` }}
        </template>

    </table-component>
</template>

<script setup>
import {reactive} from "vue";

defineProps(['data']);

const headings = reactive([
    {
        label: 'Дата',
        key: 'date'
    },
    {
        label: 'Всього',
        key: 'applications'
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
    }
]);
</script>
