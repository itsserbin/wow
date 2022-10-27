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
