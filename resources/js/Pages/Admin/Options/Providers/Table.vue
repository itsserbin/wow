<template>
  <table-component :headings="headings"
                             :isSlotMode="true"
                             :rows="state.providers.data"
            >
                <template v-slot:id="{data}">
                    <a href="javascript:" @click="$emit('onEdit', data.row.id,data.i)">
                        {{ data.row.id }}
                    </a>
                </template>

                <template v-slot:refunds="{data}">
                    {{ $filters.yesOrNo(data.row.refunds) }}
                </template>

                <template v-slot:prepayment="{data}">
                    {{ $filters.yesOrNo(data.row.prepayment) }}
                </template>

                <template v-slot:timestamps="{data}">
                    {{ $filters.dateFormat(data.row.updated_at) }}
                    <hr class="my-1">
                    {{ $filters.dateFormat(data.row.created_at) }}
                </template>

                <template v-slot:actions="{data}">
                    <a href="javascript:" @click="$emit('onDestroy', data.row.id)">
                        <xcircle-component/>
                    </a>
                </template>
            </table-component>
</template>

<script setup>
defineProps(['data']);
defineEmits(['onDestroy','onEdit'])


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