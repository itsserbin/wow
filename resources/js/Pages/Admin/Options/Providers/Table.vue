<script setup>
import Table from '@/Components/Table.vue';
import XCircle from '@/Components/Icons/XCircle.vue';

defineProps(['data', 'canDestroy']);
defineEmits(['onDestroy', 'onEdit'])


const headings = [
    {
        label: 'ID',
        key: 'id'
    },
    {
        label: 'Назва',
        key: 'name'
    },
    {
        label: 'Каталог',
        key: 'catalog'
    },
    {
        label: 'Наявність',
        key: 'availability'
    },
    {
        label: 'Повернення',
        key: 'refunds'
    },
    {
        label: 'Передоплата',
        key: 'prepayment'
    },
    {
        label: 'Комментар',
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
];
</script>

<template>
    <Table :headings="headings" :isSlotMode="true" :rows="data">
        <template #id="{data}">
            <a href="javascript:" @click="$emit('onEdit', data.row.id,data.i)">
                {{ data.row.id }}
            </a>
        </template>

        <template #refunds="{data}">
            {{ $filters.yesOrNo(data.row.refunds) }}
        </template>

        <template #prepayment="{data}">
            {{ $filters.yesOrNo(data.row.prepayment) }}
        </template>

        <template #timestamps="{data}">
            {{ $filters.dateFormat(data.row.updated_at) }}
            <hr class="my-1">
            {{ $filters.dateFormat(data.row.created_at) }}
        </template>

        <template #actions="{data}">
            <a href="javascript:" @click="$emit('onDestroy', data.row.id)" v-if="canDestroy">
                <XCircle/>
            </a>
        </template>
    </Table>
</template>
