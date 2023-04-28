<script setup>
import {onMounted, inject, ref, computed, reactive} from "vue";
import {endOfMonth, format, startOfMonth} from "date-fns";

import Loader from '@/Components/Loader.vue';
import Card from '@/Components/Card.vue';
import Paginate from '@/Components/Paginate.vue';
import Table from '@/Pages/Admin/Statistics/Refunds/Table.vue';
import StatisticLayout from '@/Pages/Admin/Statistics/StatisticLayout.vue'
import Datepicker from 'vue-tailwind-datepicker'
import PrimaryButton from '@/Components/Button/Primary.vue';

const can = inject('$can');

const state = reactive({
    data: [],
    indicators: [],
    chart: null,
    isLoading: true,
});

const params = reactive({
    date: {
        startDate: format(startOfMonth(new Date()), "yyyy-MM-dd HH:mm:ss"),
        endDate: format(endOfMonth(new Date()), "yyyy-MM-dd HH:mm:ss")
    },
    page: 1,
});

const getParams = computed(() => {
    const {date, page} = params;

    return {
        date_start: date.startDate,
        date_end: date.endDate,
        page
    };
});

onMounted(async () => {
    await fetch();
})

const fetch = async () => {
    state.isLoading = true;
    await axios.get(route('api.statistics.refunds.index', getParams.value))
        .then(({data}) => {
            state.indicators = data.result.indicators;
            state.data = data.result.data;
        })
        .catch((response) => console.error(response));
    state.isLoading = false;
}


const onSelectDate = async (val) => {
    params.date = {
        startDate: val.startDate,
        endDate: val.endDate,
    }
    params.page = 1;
    await fetch();
}

const getAllData = async () => {
    params.date = {
        startDate: null,
        endDate: null,
    }
    params.page = 1;
    await fetch();
}

const indicatorTitle = (val) => {
    switch (val) {
        case 'sum_provider_trade_price':
            return 'Сума постачальника';
        case 'sum_order_price':
            return 'Сума замовлення';
        case 'sum_provider_refund':
            return 'Сума сплати постачальником';
        case 'sum_client_refund':
            return 'Сума сплати клієнту';
    }
}
</script>

<template>
    <StatisticLayout title="Повернення">
        <template #header>
            Повернення
        </template>

        <Loader v-if="state.isLoading"/>
        <div v-if="!state.isLoading && can('show-bookkeeping-refunds')" class="grid grid-cols-1 gap-4">

            <div class="grid grid-cols-12 gap-4">
                <div class="col-span-12 md:col-span-2">
                    <PrimaryButton type="button" @click="getAllData" class="w-full h-full justify-center">
                        Показати все
                    </PrimaryButton>
                </div>

                <div class="col-span-12 md:col-span-10">
                    <Datepicker @update:modelValue="onSelectDate" v-model="params.date" :auto-apply="false" use-range/>
                </div>
            </div>

            <div class="grid grid-cols-2 md:grid-cols-4">
                <Card v-for="(item,i) in state.indicators"
                      class="text-center"
                      :title="indicatorTitle(i)"
                      :description="$filters.formatMoney(item)"
                >
                </Card>
            </div>

            <Table :data="state.data.data"/>

            <div class="text-center">
                <Paginate :pagination="state.data"
                          :click-handler="fetch"
                          v-model="params.currentPage"
                />
            </div>
        </div>
    </StatisticLayout>
</template>
