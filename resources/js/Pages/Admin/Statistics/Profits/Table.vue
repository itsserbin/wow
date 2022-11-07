<template>
    <table-component :headings="headings"
                     :rows="data"
                     :isSlotMode="true"
    >
        <template #date="{data}">
            {{ $filters.dateFormat(data.row.date) }}
        </template>

        <template #costs="{data}">
            {{ $filters.formatMoney(data.row.costs) }}
        </template>

        <template #turnover="{data}">
            {{ $filters.formatMoney(data.row.turnover) }}
        </template>

        <template #marginality="{data}">
            {{ $filters.formatMoney(data.row.marginality) }}
        </template>

        <template #clear_profit="{data}">
            {{ $filters.formatMoney(data.row.clear_profit) }}
        </template>

        <template #average_marginality="{data}">
            {{ $filters.formatMoney(data.row.average_marginality) }}
        </template>

        <template #sale_of_air_sum="{data}">
            {{ $filters.formatMoney(data.row.sale_of_air_sum) }}
        </template>

        <template #debt_supplier="{data}">
            {{ $filters.formatMoney(data.row.debt_supplier) }}
        </template>

        <template #prepayment_sum="{data}">
            {{ $filters.formatMoney(data.row.prepayment_sum) }}
        </template>

        <template #refunds_sum="{data}">
            {{ $filters.formatMoney(data.row.refunds_sum) }}
        </template>

        <template #additional_sales_marginality_sum="{data}">
            {{ $filters.formatMoney(data.row.additional_sales_marginality_sum) }}
        </template>

        <template #additional_sales_sum="{data}">
            {{ $filters.formatMoney(data.row.additional_sales_sum) }}
        </template>
    </table-component>
</template>

<script setup>
defineProps(['data']);

const headings = [
    {
        label: 'Дата',
        key: 'date'
    },
    {
        label: 'Витрати',
        key: 'cost'
    },
    {
        label: 'Оберт',
        key: 'turnover'
    },
    {
        label: 'Маржа',
        key: 'marginality'
    },
    {
        label: 'Чистий прибуток',
        key: 'clear_profit'
    },
    {
        label: 'Винен постачальник',
        key: 'debt_supplier'
    },
    {
        label: 'Продажі повітря',
        key: 'sale_of_air_sum'
    },
    {
        label: 'Середня маржа',
        key: 'average_marginality'
    },
    {
        label: 'Сума переодоплат',
        key: 'prepayment_sum'
    },
    {
        label: 'Сума переодоплат WFP',
        key: 'prepayment_wfp_sum'
    },
    {
        label: 'Сума переодоплат на карту',
        key: 'prepayment_card_sum'
    },
    {
        label: 'Сума за повернення товару',
        key: 'refunds_sum'
    },
    {
        label: 'Маржа з дод.продаж',
        key: 'additional_sales_marginality_sum'
    },
    {
        label: 'Оберт дод.продаж',
        key: 'additional_sales_sum'
    },
];
</script>
