<script setup>
import Table from '@/Components/Table.vue';
import XCircle from '@/Components/Icons/XCircle.vue';
import {reactive} from "vue";

const headings = reactive([
    {
        label: 'ID',
        key: 'id'
    },
    {
        label: 'Тип',
        key: 'type'
    },
    {
        label: 'Назва',
        key: 'title'
    },
    {
        label: 'Slug',
        key: 'slug'
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

defineProps(['data']);
const emits = defineEmits(['onEdit', 'onDestroy'])
</script>

<template>
    <Table :headings="headings" :rows="data" :isSlotMode="true">
        <template #id="{data}">
            <a href="javascript:" @click="emits('onEdit',data.row.id,data.i)">
                {{ data.row.id }}
            </a>
        </template>

        <template #type="{data}">
            {{ data.row.type ? 'Прибуток' : 'Витрата' }}
        </template>

        <template #timestamps="{data}">
            {{ $filters.dateTimeFormat(data.row.updated_at) }}
            <hr class="my-1 w-1/4 mx-auto">
            {{ $filters.dateTimeFormat(data.row.created_at) }}
        </template>

        <template #actions="{data}">
            <a href="javascript:" @click="emits('onDestroy',data.row.id)">
                <XCircle/>
            </a>
        </template>
    </Table>
</template>
