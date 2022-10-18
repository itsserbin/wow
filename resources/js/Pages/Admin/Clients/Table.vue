<template>
    <table-component :headings="headings"
                     :isSlotMode="true"
                     :rows="data"
    >
        <template v-slot:id="{data}">
            <a href="javascript:" @click="$emit('onEdit',data.row.id,data.i)">
                {{ data.row.id }}
            </a>
        </template>

        <template v-slot:name="{data}">
            {{ data.row.name }}
        </template>

        <template v-slot:last_name="{data}">
            {{ data.row.last_name }}
        </template>

        <template v-slot:phone="{data}">
            <a :href="'tel:' + data.row.phone">
                {{ data.row.phone }}
            </a>
        </template>

        <template v-slot:average_check="{data}">
            {{ $filters.formatMoney(data.row.average_check) }}
        </template>

        <template v-slot:whole_check="{data}">
            {{ $filters.formatMoney(data.row.whole_check) }}
        </template>

        <template v-slot:status="{data}">
            {{ statuses[data.row.status] }}
        </template>

        <template v-slot:timestamps="{data}">
            {{ $filters.dateTimeFormat(data.row.updated_at) }}
            <hr class="my-1">
            {{ $filters.dateTimeFormat(data.row.created_at) }}
        </template>
        <template v-slot:actions="{data}">
            <a href="javascript:" @click="$emit('onDestroy',data.row.id)">
                <xcircle-component/>
            </a>
        </template>
    </table-component>
</template>

<script setup>
import {reactive} from "vue";

defineEmits(['onDestroy'])
defineProps(['data', 'onEdit', 'statuses']);

const headings = reactive([
    {
        label: 'ID',
        key: 'id'
    },
    {
        label: 'Статус',
        key: 'status'
    },
    {
        label: 'Імʼя',
        key: 'name'
    },
    {
        label: 'Прізвище',
        key: 'last_name'
    },
    {
        label: 'Телефон',
        key: 'phone'
    },
    {
        label: 'Замовлень',
        key: 'number_of_purchases'
    },
    {
        label: 'Середній чек',
        key: 'average_check'
    },
    {
        label: 'Загальний чек',
        key: 'whole_check'
    },
    {
        label: "Оновлено<hr class='my-1'>Створено",
        key: 'timestamps'
    },
    {
        label: '#',
        key: 'actions'
    }
]);

</script>
