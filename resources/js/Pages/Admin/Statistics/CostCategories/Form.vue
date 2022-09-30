<template>
    <form class="flex flex-col">
        <div class="grid grid-cols-1 md:grid-cols-2 mb-5 gap-4">
            <div class="block mr-2">
                <label-component value="Категорія витрат"/>
                <select-component v-model="item.cost_category_id" :options="categories"/>
            </div>
            <div class="block">
                <label-component value="Фільтр по даті"/>
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
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5">
            <div class="block">
                <label-component value="Кількість"/>
                <input-component v-model="item.quantity" type="number"/>
            </div>

            <div class="block">
                <label-component value="Вартість"/>
                <input-component v-model="item.sum" type="number"/>
            </div>

            <div class="block">
                <label-component value="Загалом"/>
                <input-component :value="totalSum" type="number" disabled/>
            </div>
        </div>

        <div class="grid grid-cols-1">
            <label-component value="Коментар"/>
            <textarea-component v-model="item.comment" rows="4"/>
        </div>
    </form>
</template>

<script setup>
import {computed, onMounted, ref} from "vue";

const props = defineProps(['item'])

const categories = ref([]);

onMounted(() => {
    axios.get(route('api.statistics.costs.categories.list'))
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
