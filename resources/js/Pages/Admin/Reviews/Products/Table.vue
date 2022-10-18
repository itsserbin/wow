<template>
    <table-component :headings="headings"
                     :isSlotMode="true"
                     :rows="data"
    >
        <template v-slot:id="{data}">
            <a href="javascript:" @click="onEdit(data.row.id,data.i)">
                {{ data.row.id }}
            </a>
        </template>

        <template v-slot:product_id="{data}">
            {{ data.row.product.h1.ua ? data.row.product.h1.ua : data.row.product.h1.ru }}
        </template>

        <template v-slot:comment="{data}">
            <div class="whitespace-normal">
                {{ data.row.comment }}
            </div>
        </template>

        <template v-slot:published="{data}">
            {{ $filters.publishedStatus(data.row.published) }}
            <div v-if="!data.row.published">
                <hr class="my-1">
                <a @click="publishReview(data.row.id)"
                   href="javascript:"
                   class="text-blue-600"
                >
                    Опублікувати
                </a>
            </div>
        </template>

        <template v-slot:timestamps="{data}">
            {{ $filters.dateFormat(data.row.updated_at) }}
            <hr class="my-1">
            {{ $filters.dateFormat(data.row.created_at) }}
        </template>

        <template v-slot:actions="{data}">
            <a href="javascript:" @click="onDestroy(data.row.id)">
                <xcircle-component/>
            </a>
        </template>
    </table-component>
</template>

<script setup>
defineProps(['data'])

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
