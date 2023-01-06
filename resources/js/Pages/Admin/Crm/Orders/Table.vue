<template>
    <table-component :headings="headings"
                     :isSlotMode="true"
                     :rows="data"
    >
        <template #id="{data}">
            <a href="javascript:" @click="$emit('onEdit',data.row.id,data.i)">
                {{ data.row.id }}
            </a>
        </template>

        <template #name="{data}">
            {{ data.row.client ? (data.row.client.name ? data.row.client.name : '-') : null }}
        </template>

        <template #status="{data}">
            {{ statuses[data.row.status] }}
        </template>

        <template #last_name="{data}">
            {{ data.row.client ? (data.row.client.last_name ? data.row.client.last_name : '-') : null }}
        </template>

        <template #total_price="{data}">
            {{ $filters.formatMoney(data.row.total_price) }}
        </template>

        <template #phone="{data}">
            <a :href="'tel:' + (data.row.client ? data.row.client.phone : null)">
                {{ data.row.client ? data.row.client.phone : null }}
            </a>
        </template>

        <template #comment="{data}">
            <div class="whitespace-normal w-48">
                {{ data.row.comment ? data.row.comment.substr(0, 30) + '...' : '-' }}
            </div>
        </template>

        <template #timestamps="{data}">
            {{ $filters.dateTimeFormat(data.row.updated_at) }}
            <hr class="my-1">
            {{ $filters.dateTimeFormat(data.row.created_at) }}
        </template>

        <template #actions="{data}">
            <a href="javascript:" @click="$emit('onDestroy',data.row.id)" v-if="canDestroy">
                <xcircle-component/>
            </a>
        </template>
    </table-component>
</template>

<script setup>
import {reactive} from "vue";

defineEmits(['onDestroy', 'onEdit'])
defineProps(['data', 'statuses', 'canDestroy']);

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
        label: 'Коментар',
        key: 'comment'
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
