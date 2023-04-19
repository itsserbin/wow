<script setup>
import StatisticLayout from '@/Pages/Admin/Statistics/StatisticLayout.vue'
import Chart from '@/Pages/Admin/Statistics/Chart.vue'
import Datepicker from '@/Pages/Admin/Statistics/Datepicker.vue'

import {computed, inject, onMounted, ref} from "vue";
import {endOfMonth, startOfMonth} from "date-fns";

const params = ref({
    date: [],
    page: 1,
});

const can = inject('$can');
const state = ref({
    costs: null,
    profits: null,
    orders: null,
    marketing: null,
});

onMounted(async () => {
    params.value.date[0] = startOfMonth(new Date());
    params.value.date[1] = endOfMonth(new Date());
    await fetch();
});

const getParams = computed(() => {
    const data = {};
    if (params.value.date.length === 2) {
        data.date_start = params.value.date[0].toLocaleDateString();
        data.date_end = params.value.date[1].toLocaleDateString();
    }
    data.page = params.value.page;
    return data;
});

const fetch = async () => {
    state.value.isLoading = true;

    await axios.get(route('api.statistics.costs.chart', getParams.value))
        .then(({data}) => state.value.costs = data.result)
        .catch((errors) => console.log(errors));

    await axios.get(route('api.statistics.profits.chart', getParams.value))
        .then(({data}) => state.value.profits = data.result)
        .catch((response) => console.log(response))

    await axios.get(route('api.statistics.orders.chart', getParams.value))
        .then(({data}) => state.value.orders = data.result)
        .catch((response) => console.log(response))

    await axios.get(route('api.statistics.marketing.chart', getParams.value))
        .then(({data}) => state.value.marketing = data.result)
        .catch((response) => console.log(response))
}
</script>

<template>
    <StatisticLayout title="Статистика">
        <template #header>
            Статистика
        </template>

        <div class="grid grid-cols-1 gap-4">
            <Datepicker v-model="params.date" @update:modelValue="fetch"/>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="block" v-if="can('show-bookkeeping-costs')">
                    <div class="text-lg text-gray-800 leading-tight dark:text-gray-300">Витрати</div>
                    <hr class="my-1">
                    <Chart v-if="state.costs" :chartData="state.costs"/>
                </div>

                <div class="div" v-if="can('show-bookkeeping-profits')">
                    <div class="text-lg text-gray-800 leading-tight dark:text-gray-300">Прибуток</div>
                    <hr class="my-1">
                    <Chart v-if="state.profits" :chartData="state.profits"/>
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="div" v-if="can('show-bookkeeping-orders')">
                    <div class="text-lg text-gray-800 leading-tight dark:text-gray-300">Заявки</div>
                    <hr class="my-1">
                    <Chart v-if="state.orders" :chartData="state.orders"/>
                </div>

                <div class="div" v-if="can('show-bookkeeping-marketing')">
                    <div class="text-lg text-gray-800 leading-tight dark:text-gray-300">Маркетинг</div>
                    <hr class="my-1">
                    <Chart v-if="state.marketing" :chartData="state.marketing"/>
                </div>
            </div>
        </div>
    </StatisticLayout>
</template>
