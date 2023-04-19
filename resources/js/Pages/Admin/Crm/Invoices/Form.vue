<script setup>
import Label from '@/Components/Form/Label.vue';
import Input from '@/Components/Form/Input.vue';

import {ref} from "vue";

const props = defineProps(['item', 'statuses'])

const state = ref({
    statuses: []
});

const changeLang = (val) => {
    state.value.activeLang = val;
}
</script>

<template>
    <form class="flex flex-col">
        <div class="grid grid-cols-1 gap-4">
            <div class="block">
                <Label value="Номер замовлення"/>
                <Input v-model="item.order_id" type="number"/>
            </div>
            <div class="block">
                <Label value="Сума"/>
                <Input v-model="item.sum" type="number"/>
            </div>
        </div>
    </form>
</template>
