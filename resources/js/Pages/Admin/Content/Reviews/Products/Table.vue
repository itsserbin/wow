<script setup>
import Table from '@/Components/Table.vue';
import XCircle from '@/Components/Icons/XCircle.vue';

defineProps(['data', 'canDestroy']);
defineEmits(['onDestroy', 'publishReview', 'onEdit'])

const headings = ([
    {
        label: 'ID',
        key: 'id'
    },
    {
        label: 'Імʼя',
        key: 'name'
    },
    {
        label: 'Телефон',
        key: 'phone'
    },
    {
        label: 'Коментар',
        key: 'comment'
    },
    {
        label: 'Товар',
        key: 'product_id'
    },
    {
        label: 'Статус публікації',
        key: 'published'
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

<template>
    <Table :headings="headings" :isSlotMode="true" :rows="data">
        <template #id="{data}">
            <a href="javascript:" @click="$emit('onEdit',data.row.id,data.i)">
                {{ data.row.id }}
            </a>
        </template>

        <template #product_id="{data}">
            {{ data.row.product.h1.ua ? data.row.product.h1.ua : data.row.product.h1.ru }}
        </template>

        <template #comment="{data}">
            <div class="whitespace-normal">
                {{ data.row.comment }}
            </div>
        </template>

        <template #published="{data}">
            {{ $filters.publishedStatus(data.row.published) }}
            <div v-if="!data.row.published">
                <hr class="my-1">
                <a @click="$emit('publishReview',data.row.id)"
                   href="javascript:"
                   class="text-blue-600"
                >
                    Опублікувати
                </a>
            </div>
        </template>

        <template #timestamps="{data}">
            {{ $filters.dateFormat(data.row.updated_at) }}
            <hr class="my-1">
            {{ $filters.dateFormat(data.row.created_at) }}
        </template>

        <template #actions="{data}">
            <a href="javascript:" @click="$emit('onDestroy',data.row.id)" v-if="canDestroy">
                <XCircle/>
            </a>
        </template>
    </Table>
</template>
