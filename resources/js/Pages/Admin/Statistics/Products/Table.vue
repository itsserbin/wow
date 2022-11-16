<template>
    <table-component :headings="headings"
                     :rows="data"
                     :isSlotMode="true"
    >
        <template #product_id="{data}">
            <a target="_blank" :href="route('product',data.row.product_id)">{{data.row.product_id}} -</a>
            {{ (data.row.product.h1.ua ? data.row.product.h1.ua : (data.row.product.h1.ru ? data.row.product.h1.ru : 'Без назви')) }}
        </template>
        <template #date="{data}">
            {{ $filters.dateFormat(data.row.date) }}
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
        label: 'Товар',
        key: 'product_id'
    },
    {
        label: 'Продажів',
        key: 'sales'
    },
    {
        label: 'Повернень',
        key: 'returns'
    },
    {
        label: 'Обмінів',
        key: 'exchanges'
    },
    {
        label: 'Скасувань',
        key: 'canceled'
    },
];
</script>
