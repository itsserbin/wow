<template>
    <StatisticLayout title="Повернення">
        <template #header>
            Повернення
        </template>

        <Loader v-if="state.isLoading"/>
        <div v-if="!state.isLoading && can('show-bookkeeping-refunds')" class="grid grid-cols-1 gap-4">
            <DatepickerComponent v-model="params.date"
                                 @update:modelValue="fetch"
            />

            <div class="grid grid-cols-2 md:grid-cols-4">
                <Card v-for="(item,i) in state.indicatord"
                      class="text-center"
                      :title="i"
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

<script setup>
import {onMounted, inject, ref, computed} from "vue";
import {endOfMonth, startOfMonth} from "date-fns";
import Loader from '@/Components/Loader.vue';
import Card from '@/Components/Card.vue';
import Paginate from '@/Components/Paginate.vue';
import Table from '@/Pages/Admin/Statistics/Refunds/Table.vue';
import StatisticLayout from '@/Pages/Admin/Statistics/StatisticLayout.vue'
import DatepickerComponent from '@/Pages/Admin/Statistics/Datepicker.vue'

const swal = inject('$swal')
const can = inject('$can');

const state = ref({
    data: [],
    indicators: [],
    chart: null,
    isLoading: true,
});

const params = ref({
    date: [],
    currentPage: 1,
})

const dateRange = computed(() => {
    if (params.value.date.length === 2) {
        return {
            date_start: params.value.date[0].toLocaleDateString(),
            date_end: params.value.date[1].toLocaleDateString()
        }
    }
});

const last = computed(() => params.value.last);

const getParams = computed(() => ({
    ...dateRange.value,
    last: last.value,
    page: params.value.currentPage
}));

onMounted(() => {
    params.value.date[0] = startOfMonth(new Date());
    params.value.date[1] = endOfMonth(new Date());

    fetch();
})

const paginate = (page) => {
    if (page) {
        params.value.currentPage = page;
    }
    fetch();
}

const fetch = async () => {
    state.value.isLoading = true;
    axios.get(route('api.statistics.refunds.index', getParams.value))
        .then(({data}) => {
            state.value.data = data.result;
            state.value.isLoading = false;
        })
        .catch((response) => {
            console.log(response);
            state.value.isLoading = false;
        });
}
</script>
