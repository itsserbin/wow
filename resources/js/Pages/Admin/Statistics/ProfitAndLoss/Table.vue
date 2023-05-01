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
        label: 'Загальна виручка',
        key: 'total_revenues'
    },
    {
        label: 'Витрати',
        key: 'costs'
    },
    {
        label: 'Ціна закупки',
        key: 'purchase_cost'
    },
    {
        label: 'Чистий прибуток',
        key: 'net_profit'
    },
    {
        label: 'Рентабельність бізнесу',
        key: 'business_profitability'
    },
];
</script>

<template>
    <Table :headings="headings" :rows="data" :isSlotMode="true">
        <template #business_profitability="{data}">
            {{ data.row.business_profitability }} %
        </template>

        <template #total_revenues="{data}">
            {{ $filters.formatMoney(data.row.total_revenues) }}
        </template>

        <template #purchase_cost="{data}">
            {{ $filters.formatMoney(data.row.purchase_cost) }}
        </template>

        <template #net_profit="{data}">
            {{ $filters.formatMoney(data.row.net_profit) }}
        </template>

        <template #costs="{data}">
                {{ $filters.formatMoney(data.row.costs) }}
        </template>

        <template #month="{data}">
            {{ $filters.monthFormat(data.row.month) }}
        </template>
    </Table>
</template>
