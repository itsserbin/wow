<template>
    <form class="grid gap-4">

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="block">
                <label-component value="Статус клієнта"/>
                <select-component v-model="item.status" :options="state.statuses"/>
            </div>
            <div class="block" v-if="item.status === 'experienced' || item.status === 'return'">
                <label-component value="Додатковий"/>
                <select-component v-model="item.subStatuses"
                                  :options="state.subStatuses.experienced"
                                  v-if="item.status === 'experienced'"
                />
                <select-component v-model="item.subStatuses"
                                  :options="state.subStatuses.return"
                                  v-if="item.status === 'return'"
                />
            </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="grid gap-4">
                <div class="block">
                    <label-component value="Імʼя"/>
                    <input-component v-model="item.name" type="text"/>
                </div>
                <div class="block">
                    <label-component value="Прізвище"/>
                    <input-component v-model="item.last_name" type="text"/>
                </div>
                <div class="block">
                    <label-component value="По-батькові"/>
                    <input-component v-model="item.middle_name" type="text"/>
                </div>
                <div class="block">
                    <label-component value="Телефон"/>
                    <input-component v-model="item.phone" type="tel"/>
                </div>
                <div class="block">
                    <label-component value="Email"/>
                    <input-component v-model="item.email" type="email"/>
                </div>
            </div>
            <div class="siv">
                <label-component value="Комментар"/>
                <textarea-component v-model="item.comment" rows="18"/>
            </div>
        </div>

        <ItemsTable :data="item.orders"/>

        <div class="grid grid-cols-1 md:grid-cols-3 text-center gap-4">
            <div class="block">
                Усього покупок: {{ item.number_of_purchases }}
            </div>
            <div class="block">
                Середній чек: {{ $filters.formatMoney(item.average_check) }}
            </div>
            <div class="block">
                Загальний чек: {{ $filters.formatMoney(item.whole_check) }}
            </div>
        </div>
    </form>
</template>

<script setup>
import {onMounted, ref} from "vue";
import ItemsTable from '@/Pages/Admin/Clients/ItemsTable.vue'

const props = defineProps(['item', 'statuses', 'subStatuses'])

const state = ref({
    itemsModalAction: '',
    statuses: [],
    subStatuses: {
        experienced: [],
        return: [],
    },
})

onMounted(() => {
        for (const [key, value] of Object.entries(props.subStatuses.experienced)) {
            state.value.subStatuses.experienced.push({
                value: value,
                key: key,
            })
        }
        for (const [key, value] of Object.entries(props.subStatuses.return)) {
            state.value.subStatuses.return.push({
                value: value,
                key: key,
            })
        }
        for (const [key, value] of Object.entries(props.statuses)) {
            state.value.statuses.push({
                value: value,
                key: key,
            })
        }
    }
)
</script>
