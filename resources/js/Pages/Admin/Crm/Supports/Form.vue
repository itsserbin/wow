<script setup>
import Label from '@/Components/Form/Label.vue';
import Input from '@/Components/Form/Input.vue';
import Select from '@/Components/Form/Select.vue';
import Textarea from '@/Components/Form/Textarea.vue';

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

<template>
    <form class="flex flex-col">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="grid gap-4">
                <div class="block">
                    <Label value="Статус"/>
                    <Select v-model="item.status" :options="state.statuses"/>
                </div>
                <div class="block">
                    <Label value="Імʼя"/>
                    <Input v-model="item.name" type="text"/>
                </div>
                <div class="block">
                    <Label value="Телефон"/>
                    <Input v-model="item.phone" type="tel"/>
                </div>
                <div class="block">
                    <Label value="Номер замовлення"/>
                    <Input v-model="item.order_id" type="tel"/>
                </div>
            </div>
            <div>
                <Label value="Коментар"/>
                <Textarea v-model="item.comment" rows="14"/>
            </div>
        </div>
    </form>
</template>
