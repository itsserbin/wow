<template>
    <table-component :headings="headings"
                     :rows="data"
                     :isSlotMode="true"
    >
        <template v-slot:date="{data}">
            {{ $filters.dateFormat(data.row.date) }}
        </template>

        <template v-slot:costs="{data}">
            {{ $filters.formatMoney(data.row.costs) }}
        </template>

        <template v-slot:turnover="{data}">
            {{ $filters.formatMoney(data.row.turnover) }}
        </template>

        <template v-slot:marginality="{data}">
            {{ $filters.formatMoney(data.row.marginality) }}
        </template>

        <template v-slot:clear_profit="{data}">
            {{ $filters.formatMoney(data.row.clear_profit) }}
        </template>

        <template v-slot:average_marginality="{data}">
            {{ $filters.formatMoney(data.row.average_marginality) }}
        </template>

        <template v-slot:sale_of_air_sum="{data}">
            {{ $filters.formatMoney(data.row.sale_of_air_sum) }}
        </template>

        <template v-slot:debt_supplier="{data}">
            {{ $filters.formatMoney(data.row.debt_supplier) }}
        </template>

        <template v-slot:prepayment_sum="{data}">
            {{ $filters.formatMoney(data.row.prepayment_sum) }}
        </template>

        <template v-slot:refunds_sum="{data}">
            {{ $filters.formatMoney(data.row.refunds_sum) }}
        </template>

        <template v-slot:additional_sales_marginality_sum="{data}">
            {{ $filters.formatMoney(data.row.additional_sales_marginality_sum) }}
        </template>

        <template v-slot:additional_sales_sum="{data}">
            {{ $filters.formatMoney(data.row.additional_sales_sum) }}
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
    },
]);
</script>
