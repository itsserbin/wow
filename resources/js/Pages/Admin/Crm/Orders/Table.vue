<template>
    <Table :headings="headings"
           :isSlotMode="true"
           :rows="data"
           @sort="sort"
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

        <template #created_at="{data}">
            {{ $filters.dateTimeFormat(data.row.created_at) }}
        </template>

        <template #updated_at="{data}">
            {{ $filters.dateTimeFormat(data.row.updated_at) }}
        </template>

        <template #actions="{data}">
            <a href="javascript:" @click="$emit('onDestroy',data.row.id)" v-if="canDestroy">
                <XCircle/>
            </a>
        </template>
    </Table>
</template>

<script setup>
import Table from '@/Components/Table.vue'
import XCircle from '@/Components/Icons/XCircle.vue'

const emits = defineEmits(['onDestroy', 'onEdit', 'orderBy'])
defineProps(['data', 'statuses', 'canDestroy']);

const sort = (key, type) => {
    emits('orderBy', key, type);
}

const headings = [
    {
        label: 'ID',
        key: 'id',
        sortable: true
    },
    {
        label: 'Статус',
        key: 'status',
        sortable: true
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
        label: 'ТТН',
        key: 'waybill'
    },
    {
        label: 'Товарів',
        key: 'total_count',
        sortable: true
    },
    {
        label: 'Сума',
        key: 'total_price',
        sortable: true
    },
    {
        label: 'Коментар',
        key: 'comment'
    },
    {
        label: 'Створено',
        key: 'created_at',
        sortable: true
    },
    {
        label: 'Оновлено',
        key: 'updated_at',
        sortable: true
    },
    {
        label: '#',
        key: 'actions'
    }
];

</script>
