<template>
 <table-component :headings="headings"
                             :isSlotMode="true"
                             :rows="state.data.data"
            >
                <template v-slot:id="{data}">
                    <a href="javascript:" @click="$emit('onEdit', data.row.id,data.i)">
                        {{ data.row.id }}
                    </a>
                </template>

                <template v-slot:timestamps="{data}">
                    {{ $filters.dateFormat(data.row.updated_at) }}
                    <hr class="my-1">
                    {{ $filters.dateFormat(data.row.created_at) }}
                </template>

                <template v-slot:role="{data}">
                    <span v-for="item in data.row.roles">{{ item.name }}<br></span>
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
        label: 'Імʼя',
        key: 'name'
    },
    {
        label: 'Email',
        key: 'email'
    },
    {
        label: 'Роль',
        key: 'role'
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