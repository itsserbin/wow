<template>
    <auth-layout title="Dashboard">
        <template #header>
            Dashboard
        </template>

        <LastParams :active-item="params.last" @sortByLast="sortByLast"/>

        <OrdersChart v-if="orders.chart" :chartData="orders.chart"/>
        <OrdersIndicators v-if="orders.indicators" :data="orders.indicators"/>
        <OrdersTable v-if="orders.table" :data="orders.table"/>


    </auth-layout>
</template>

<script setup>
import {computed, onMounted, ref} from "vue";
import OrdersChart from '@/Pages/Admin/Statistics/Orders/Chart.vue'
import LastParams from '@/Pages/Admin/Statistics/LastParams.vue'
import OrdersIndicators from '@/Pages/Admin/Statistics/Orders/Indicators.vue';
import OrdersTable from '@/Pages/Admin/Statistics/Orders/Table.vue';

const params = ref({
    date: [],
    filter: null,
    last: 'one-month',
    page: 1,
});

const orders = ref({
    table: null,
    chart: null,
    indicators: null,
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
    axios.get(route('api.statistics.orders.index', getParams.value))
        .then(({data}) => orders.value.table = data.result.data)
        .catch((response) => console.log(response))

    axios.get(route('api.statistics.orders.chart', getParams.value))
        .then(({data}) => orders.value.chart = data.result)
        .catch((response) => console.log(response))

    axios.get(route('api.statistics.orders.indicators', getParams.value))
        .then(({data}) => orders.value.indicators = data.result)
        .catch((response) => console.log(response))
}
</script>
