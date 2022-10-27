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
        label: 'Надійшло заявок',
        key: 'count_applications'
    },
    {
        label: 'В процесі',
        key: 'in_process_applications'
    },
    {
        label: 'Зроблено дод.продаж',
        key: 'count_additional_sales'
    },
    {
        label: 'Скасованих',
        key: 'canceled_applications'
    },
    {
        label: 'Повернень',
        key: 'returned_applications'
    },
    {
        label: 'Виконаних',
        key: 'done_applications'
    },
    {
        label: 'Загальний апрув',
        key: 'total_applications'
    },
    {
        label: 'Кількість дод.продажів повітря',
        key: 'count_sale_of_air'
    },
    {
        label: 'Сума дод.продажів повітря',
        key: 'price_sale_of_air'
    },
    {
        label: 'Прибуток з дод.продажів повітря',
        key: 'total_sale_of_air'
    },
    {
        label: 'Загальна маржа дод.продажів',
        key: 'sum_additional_sales'
    },
    {
        label: 'Сума за заявки',
        key: 'sum_price_applications'
    },
    {
        label: 'Сума за дод.продажі',
        key: 'sum_price_additional_sales'
    },
    {
        label: 'Кількість нагадувань про посилку',
        key: 'count_parcel_reminder'
    },
    {
        label: 'Кількість передоплат',
        key: 'count_prepayments'
    },
    {
        label: 'Сума за передоплати',
        key: 'prepayments_amount'
    },
    {
        label: 'Загальна сума',
        key: 'total_price'
    },
];
</script>
