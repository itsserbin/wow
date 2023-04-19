<script setup>
import Label from '@/Components/Form/Label.vue';
import Input from '@/Components/Form/Input.vue';

import {onMounted, ref} from "vue";

const props = defineProps(['item'])

const categories = ref([]);

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
                <Label value="Код транзації в банку"/>
                <Input v-model="item.code" type="text"/>
            </div>

            <div class="block">
                <Label value="Slug"/>
                <Input v-model="item.slug" type="text"/>
            </div>
        </div>
    </form>
</template>
