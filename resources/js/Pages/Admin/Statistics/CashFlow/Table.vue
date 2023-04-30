<script setup>
import Table from '@/Components/Table.vue';
import {onMounted, reactive} from "vue";
import {swal} from "@/Includes/swal";
import {useI18n} from "vue-i18n";

const props = defineProps(['data']);

const {t} = useI18n();

const headings = [
    {
        label: 'Місяць',
        key: 'month'
    },
    {
        label: 'Залишок на початок місяця',
        key: 'start_month_balance'
    },
    {
        label: 'Залишок на кінець місяця',
        key: 'end_month_balance'
    },
    {
        label: 'Чистий грошовий потік',
        key: 'difference'
    },
    {
        label: 'Надходження',
        key: 'approved_income'
    },
    {
        label: 'Списання',
        key: 'approved_consumption'
    },
];

const state = reactive({
    categories: [],
    isCategoriseModal: false,
    item: {
        id: null,
        category_id: null
    },
});
</script>

<template>
    <Table :headings="headings" :rows="data" :isSlotMode="true">
        <template #month="{data}">
            {{ $filters.monthFormat(data.row.month) }}
        </template>

        <template #start_month_balance="{data}">
            {{ $filters.formatMoney(data.row.start_month_balance) }}
        </template>

        <template #end_month_balance="{data}">
            {{ $filters.formatMoney(data.row.end_month_balance) }}
        </template>

        <template #difference="{data}">
            {{ $filters.formatMoney(data.row.difference) }}
        </template>

        <template #approved_income="{data}">
            {{ $filters.formatMoney(data.row.approved_income) }}
        </template>

        <template #approved_consumption="{data}">
            {{ $filters.formatMoney(data.row.approved_consumption) }}
        </template>

    </Table>
</template>
