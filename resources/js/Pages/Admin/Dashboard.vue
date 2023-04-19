<script setup>
import {computed, onMounted, ref} from "vue";
import Chart from '@/Pages/Admin/Statistics/Chart.vue'
import OrdersIndicators from '@/Pages/Admin/Statistics/Orders/Indicators.vue';
import OrdersTable from '@/Pages/Admin/Statistics/Orders/Table.vue';
import DatepickerComponent from '@/Pages/Admin/Statistics/Datepicker.vue'
import {endOfMonth, startOfMonth} from "date-fns";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import Card from '@/Components/Card.vue';

const params = ref({
    date: [],
    page: 1,
});

const orders = ref({
    table: null,
    indicators2: null,
    chart: null,
    indicators: null,
});

const state = ref({
    statistics: []
});

onMounted(async () => {
    params.value.date[0] = startOfMonth(new Date());
    params.value.date[1] = endOfMonth(new Date());

    await fetch();

    await axios.get(route('api.dashboard'))
        .then(({data}) => state.value.statistics = data.countOrders)
        .catch((response) => console.log(response))
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
    await axios.get(route('api.statistics.orders.index', getParams.value))
        .then(({data}) => orders.value.table = data.result.data)
        .catch((response) => console.log(response))

    await axios.get(route('api.statistics.orders.chart', getParams.value))
        .then(({data}) => orders.value.chart = data.result)
        .catch((response) => console.log(response))

    await axios.get(route('api.statistics.orders.indicators', getParams.value))
        .then(({data}) => orders.value.indicators = data.result)
        .catch((response) => console.log(response))

    await axios.get(route('api.statistics.orders.indicators2', getParams.value))
        .then(({data}) => orders.value.indicators2 = data.result)
        .catch((response) => console.log(response))
}
</script>

<template>
    <AuthenticatedLayout title="Dashboard">
        <template #header>
            Dashboard
        </template>
        <div class="grid grid-cols-1 gap-4">
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Card v-for="(item,i) in state.statistics"
                      class="text-center"
                      :title="i"
                      :description="item ? item : '0'"
                >
                </Card>
            </div>

            <DatepickerComponent v-model="params.date"
                                 @update:modelValue="fetch"
            />

            <Chart v-if="orders.chart" :chartData="orders.chart"/>

            <OrdersIndicators v-if="orders.indicators" :data="orders.indicators"/>
            <OrdersTable v-if="orders.table" :data="orders.table"/>
        </div>
    </AuthenticatedLayout>
</template>
