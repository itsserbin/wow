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
        </div>
    </form>
</template>

<script setup>
import {onMounted, ref} from "vue";

const props = defineProps(['item', 'statuses'])

const state = ref({
    statuses: []
});

function changeLang(val) {
    state.value.activeLang = val;
}
</script>
