<script setup>
import {onMounted, inject, ref, computed} from "vue";
import {endOfMonth, startOfMonth} from 'date-fns';

import Paginate from '@/Components/Paginate.vue';
import Card from '@/Components/Card.vue';
import Label from '@/Components/Form/Label.vue';
import Loader from '@/Components/Loader.vue';
import Chart from '@/Pages/Admin/Statistics/Chart.vue';
import StatisticLayout from '@/Pages/Admin/Statistics/StatisticLayout.vue'
import DatepickerComponent from '@/Pages/Admin/Statistics/Datepicker.vue'
import Table from '@/Pages/Admin/Statistics/Marketing/Table.vue'

const can = inject('$can');

const state = ref({
    data: [],
    chart: null,
    isLoading: true,
});

const params = ref({
    date: [],
    currentPage: 1,
})

const getParams = computed(() => {
    const data = {};
    if (params.value.date.length === 2) {
        data.date_start = params.value.date[0].toLocaleDateString();
        data.date_end = params.value.date[1].toLocaleDateString();
    }
    data.page = params.value.currentPage;
    return data;

})

onMounted(() => {
    params.value.date[0] = startOfMonth(new Date());
    params.value.date[1] = endOfMonth(new Date());

    fetch();
})

function paginate(page) {
    if (page) {
        params.value.currentPage = page;
    }
    fetch();
}

function fetch() {
    state.value.isLoading = true;
    axios.get(route('api.statistics.marketing.index', getParams.value))
        .then(({data}) => {
            state.value.data = data;
            state.value.isLoading = false;
        })
        .catch((errors) => {
            console.log(errors);
            state.value.isLoading = false;
        });

    axios.get(route('api.statistics.marketing.chart', getParams.value))
        .then(({data}) => state.value.chart = data.result)
        .catch((errors) => console.log(errors));

}
</script>

<template>
    <StatisticLayout title="Маркетингова статистика">
        <template #header>
            Маркетингова статистика
        </template>

        <Loader v-if="state.isLoading"/>
        <div v-if="!state.isLoading && can('show-bookkeeping-marketing')" class="grid grid-cols-1 gap-4">
            <div class="block">
                <Label value="Фільтр по даті"/>
                <DatepickerComponent v-model="params.date"
                                     @update:modelValue="fetch"
                />
            </div>
            <Chart v-if="state.chart" :chart-data="state.chart"/>
            <div class="grid grid-cols-2 md:grid-cols-4">
                <Card v-for="(item,i) in state.data.generalStat"
                      class="text-center"
                      :title="i"
                      :description="$filters.formatMoney(item)"
                >
                </Card>
            </div>

            <Table :data="state.data.result.data"/>

            <div class="text-center">
                <Paginate :pagination="state.data.result"
                          :click-handler="fetch"
                          v-model="params.currentPage"
                />
            </div>
        </div>
    </StatisticLayout>
</template>
