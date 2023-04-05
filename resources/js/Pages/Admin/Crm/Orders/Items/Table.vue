<template>
    <Table
        :isSlotMode="true"
        :rows="data"
        :headings="headings"
    >
        <template #actions="{data}">
            <div class="grid grid-cols-2 gap-4">
                <a href="javascript:" @click="$emit('editOrderItem', data.row.id,data.i)">
                    <Pencil/>
                </a>
                <a href="javascript:" @click="$emit('destroyOrderItem', data.row.id,data.i)">
                    <XCircle/>
                </a>
            </div>
        </template>

        <template #preview="{data}">
            <picture v-if="data.row.product">
                <source
                    :srcset="data.row.product.preview ? route('images.350', data.row.product.preview.webp_src) : null"
                    type="image/webp">
                <img
                    :data-src="data.row.product.preview ? route('images.350', data.row.product.preview.src) : null"
                    :alt="data.row.product.h1.ua ? data.row.product.h1.ua : data.row.product.h1.ru"
                    class="h-full object-cover w-full"
                >
            </picture>
        </template>

        <template #color="{data}">
            <span v-for="color in data.row.color">{{ color }}</span>
        </template>

        <template #size="{data}">
            <span v-for="size in data.row.size">{{ size }}</span>
        </template>

        <template #resale="{data}">
            {{ data.row.resale ? 'Так' : 'Ні' }}
        </template>

        <template #sale_price="{data}">
            {{ $filters.formatMoney(data.row.sale_price) }}
        </template>

        <template #total_price="{data}">
            {{ $filters.formatMoney(data.row.total_price) }}
        </template>

        <template #vendor_code="{data}">
            <div v-if="data.row.product">
                {{ data.row.product.vendor_code }}
            </div>
        </template>

        <template #h1="{data}">
            <a v-if="data.row.product" :href="route('product',data.row.product.id)" target="_blank">
                {{ data.row.product.h1.ua ? data.row.product.h1.ua : data.row.product.h1.ru }}
            </a>
        </template>
    </Table>
</template>

<script setup>
import Table from '@/Components/Table.vue';
import Pencil from '@/Components/Icons/Pencil.vue';
import XCircle from '@/Components/Icons/XCircle.vue';

defineProps(['data']);
defineEmits(['editOrderItem', 'destroyOrderItem'])

const headings = [
    {
        label: 'Фото',
        key: 'preview'
    },
    {
        label: 'Назва',
        key: 'h1'
    },
    {
        label: 'Кількість',
        key: 'count'
    },
    {
        label: 'Ціна',
        key: 'sale_price'
    },
    {
        label: 'Сума',
        key: 'total_price'
    },
    {
        label: 'Колір',
        key: 'color'
    },
    {
        label: 'Розмір',
        key: 'size'
    },
    {
        label: 'Дод.продажа',
        key: 'resale'
    },
    {
        label: 'Знижка',
        key: 'discount'
    },
    {
        label: 'Артикул',
        key: 'vendor_code'
    },
    {
        label: '#',
        key: 'actions'
    },
];
</script>
