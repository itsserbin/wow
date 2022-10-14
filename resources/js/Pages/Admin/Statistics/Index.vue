<template>
    <StatisticLayout title="Статистика">
        <template #header>
            Статистика
        </template>

        <LastParams :active-item="params.last" @sortByLast="sortByLast"/>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="block">
                <div class="text-lg text-gray-800 leading-tight dark:text-gray-300">Витрати</div>
                <hr class="my-1">
                <CostChart v-if="state.costs" :chartData="state.costs"/>
            </div>

            <div class="div">
                <div class="text-lg text-gray-800 leading-tight dark:text-gray-300">Прибуток</div>
                <hr class="my-1">
                <ProfitChart v-if="state.profits" :chartData="state.profits"/>
            </div>

            <div class="div">
                <div class="text-lg text-gray-800 leading-tight dark:text-gray-300">Заявки</div>
                <hr class="my-1">
                <ProfitChart v-if="state.orders" :chartData="state.orders"/>
            </div>

            <div class="div">
                <div class="text-lg text-gray-800 leading-tight dark:text-gray-300">Маркетинг</div>
                <hr class="my-1">
                <ProfitChart v-if="state.marketing" :chartData="state.marketing"/>
            </div>
        </div>
    </StatisticLayout>
</template>

<script setup>
import StatisticLayout from '@/Pages/Admin/Statistics/StatisticLayout.vue'
import LastParams from '@/Pages/Admin/Statistics/LastParams.vue'
import CostChart from '@/Pages/Admin/Statistics/Costs/Chart.vue'
import ProfitChart from '@/Pages/Admin/Statistics/Profits/Chart.vue'
import {computed, onMounted, ref} from "vue";

const params = ref({
    date: [],
    filter: null,
    last: 'one-month',
    page: 1,
});

const state = ref({
    costs: null,
    profits: null,
    orders: null,
    marketing: null,
});

onMounted(() => fetch());

const getParams = computed(() => {
    const data = {};
    if (params.value.filter) {
        data.filter = params.value.filter
    }
    if (params.value.date.length === 2) {
        data.date_start = params.value.date[0];
        data.date_end = params.value.date[1];
    }
    if (params.value.last) {
        data.last = params.value.last
    }
    data.page = params.value.page;
    return data;
});

function sortByLast(val) {
    if (val) {
        params.value.last = val;
    } else {
        params.value = {
            date: [],
            filter: null,
            last: null,
            page: 1,
        };
    }
    fetch();
}

function fetch() {
    state.value.isLoading = true;

    axios.get(route('api.statistics.costs.chart', getParams.value))
        .then(({data}) => state.value.costs = data.result)
        .catch((errors) => console.log(errors));

    axios.get(route('api.statistics.profits.chart', getParams.value))
        .then(({data}) => state.value.profits = data.result)
        .catch((response) => console.log(response))

    axios.get(route('api.statistics.orders.chart', getParams.value))
        .then(({data}) => state.value.orders = data.result)
        .catch((response) => console.log(response))

    axios.get(route('api.statistics.marketing.chart', getParams.value))
        .then(({data}) => state.value.marketing = data.result)
        .catch((response) => console.log(response))
}
</script>
