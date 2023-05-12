<script setup>
import Select from '@/Components/Form/Select.vue';
import Label from '@/Components/Form/Label.vue';
import Input from '@/Components/Form/Input.vue';

import {onMounted, ref} from "vue";

const props = defineProps(['item'])

const categories = ref([]);

const options = [
    {
        key: 0,
        value: 'Витрата',
    },
    {
        key: 1,
        value: 'Прибуток',
    }
];

onMounted(async () => {
    await axios.get(route('api.statistics.costs.categories.list'))
        .then(({data}) => {
            data.result.forEach((item) => {
                categories.value.push({
                    key: item.id,
                    value: item.title
                })
            })
        })
})
</script>

<template>
    <form>
        <div class="grid grid-cols-1 gap-4">
            <div class="block">
                <Label value="Назва"/>
                <Input v-model="item.title" type="text"/>
            </div>

            <div class="block">
                <Label value="Slug"/>
                <Input v-model="item.slug" type="text"/>
            </div>

            <div class="block">
                <Label value="Тип категорії"/>
                <Select v-model="item.type" :options="options"/>
            </div>
        </div>
    </form>
</template>
