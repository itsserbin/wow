<script setup>
import Label from '@/Components/Form/Label.vue';
import Input from '@/Components/Form/Input.vue';
import Textarea from '@/Components/Form/Textarea.vue';
import Select from '@/Components/Form/Select.vue';
import Datepicker from '@/Pages/Admin/Statistics/Datepicker.vue'

import {computed, onMounted, ref} from "vue";

const props = defineProps(['item', 'modalAction'])

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

const totalSum = computed(() => props.item.quantity * props.item.sum)
</script>

<template>
    <form class="grid grid-cols-1 gap-4">
        <div class="block">
            <Label value="Категорія витрат"/>
            <Select v-model="item.cost_category_id" :options="categories"/>
        </div>
        <div class="block" v-if="modalAction === 'create'">
            <div class="grid grid-cols-2 gap-4">
                <div class="flex items-center pl-4 rounded border border-gray-200 dark:border-gray-700">
                    <input name="cost_type"
                           v-model="item.cost_type"
                           value="single"
                           type="radio"
                           class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                    <label class="py-4 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">
                        Один день
                    </label>
                </div>

                <div class="flex items-center pl-4 rounded border border-gray-200 dark:border-gray-700">
                    <input name="cost_type"
                           v-model="item.cost_type"
                           value="range"
                           type="radio"
                           class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                    <label class="py-4 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">
                        Діапазон
                    </label>
                </div>
            </div>
        </div>
        <div class="block" v-if="modalAction === 'create'">
            <Datepicker v-model="item.date"
                        v-if="item.cost_type === 'single'"
                        class="w-100"
                        locale="ru"
                        placeholder="Оберіть дату"
                        autoApply
                        :monthChangeOnScroll="false"
                        :enableTimePicker="false"
                        utc
            ></Datepicker>
            <Datepicker v-model="item.date"
                        v-if="item.cost_type === 'range'"
                        class="w-100"
                        locale="ru"
                        placeholder="Оберіть дату"
                        autoApply
                        :monthChangeOnScroll="false"
                        :enableTimePicker="false"
                        range
                        utc
            ></Datepicker>
        </div>

        <div class="block" v-if="modalAction === 'edit'">
            <Datepicker v-model="item.date"
                        class="w-100"
                        locale="ru"
                        placeholder="Оберіть дату"
                        autoApply
                        :monthChangeOnScroll="false"
                        :enableTimePicker="false"
                        utc
            ></Datepicker>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="block">
                <Label value="Кількість"/>
                <Input v-model="item.quantity" type="number"/>
            </div>

            <div class="block">
                <Label value="Вартість"/>
                <Input v-model="item.sum" type="number"/>
            </div>

            <div class="block">
                <Label value="Загалом"/>
                <Input :value="totalSum" type="number" disabled/>
            </div>
        </div>

        <div class="grid grid-cols-1">
            <Label value="Коментар"/>
            <Textarea v-model="item.comment" rows="4"/>
        </div>
    </form>
</template>
