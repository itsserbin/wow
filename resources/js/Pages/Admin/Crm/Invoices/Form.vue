<template>
    <form class="flex flex-col">
        <div class="grid grid-cols-1 gap-4">
            <div class="block">
                <label-component value="Номер замовлення"/>
                <input-component v-model="item.order_id" type="number"/>
            </div>
            <div class="block">
                <label-component value="Сума"/>
                <input-component v-model="item.sum" type="number"/>
            </div>
            <div class="block" v-if="item.status === 'paid'">
                <label-component value="Статус" />
                <select-component v-model="item.status" :options="state.statuses" disabled/>
            </div>
            <div class="block" v-if="item.invoice_url">
                <label-component value="Посилання на оплату" />
                <input-component v-model="item.invoice_url" type="text" disabled/>
            </div>
        </div>
    </form>
</template>

<script setup>
import {onMounted, ref} from "vue";

const props = defineProps(['item', 'statuses'])

const state = ref({
    statuses: []
});

onMounted(() => {
    for (const [key, value] of Object.entries(props.statuses)) {
        state.value.statuses.push({
            key: key,
            value: value,
        })
    }
})

function changeLang(val) {
    state.value.activeLang = val;
}
</script>
