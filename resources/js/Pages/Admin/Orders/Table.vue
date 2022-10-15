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
            {{ data.row.client.name }}
        </template>

        <template v-slot:last_name="{data}">
            {{ data.row.client.last_name }}
        </template>

        <template v-slot:phone="{data}">
            <a :href="'tel:' + data.row.client.phone" >
                {{ data.row.client.phone }}
            </a>
        </template>

        <template v-slot:created_at="{data}">
            {{ $filters.dateFormat(data.row.created_at) }}
        </template>
        <template v-slot:updated_at="{data}">
            {{ $filters.dateFormat(data.row.updated_at) }}
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
defineProps(['data', 'onEdit']);

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
        label: 'Накладка',
        key: 'waybill'
    },
    {
        label: 'Товарів',
        key: 'total_count'
    },
    {
        label: 'Сума',
        key: 'total_price'
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
