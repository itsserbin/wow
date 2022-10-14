<template>
    <StatisticLayout title="Маркетингова статистика">
        <template #header>
            Маркетингова статистика
        </template>

        <loader-component v-if="state.isLoading"/>
        <div v-if="!state.isLoading">

            <div class="grid grid-cols-1 gap-4 mt-5">

                <div class="block">
                    <label-component value="Фільтр по даті"/>
                    <Datepicker v-model="params.date"
                                class="w-100"
                                locale="ru"
                                placeholder="Оберіть дату"
                                autoApply
                                :monthChangeOnScroll="false"
                                :enableTimePicker="false"
                                range
                                utc
                                @update:modelValue="sortByRange"
                    ></Datepicker>
                </div>

            </div>

            <LastParams :active-item="params.last" @sortByLast="sortByLast"/>

            <MarketingChart v-if="state.chart" :chart-data="state.chart"/>

            <div class="grid grid-cols-2 md:grid-cols-4">
                <card-component v-for="(item,i) in state.data.generalStatistics"
                                class="text-center"
                                :title="i"
                                :description="$filters.formatMoney(item)"
                >
                </card-component>
            </div>
            <table-component :headings="headings"
                             :rows="state.data.result.data"
                             :isSlotMode="true"
            >
                <template v-slot:date="{data}">
                    {{ $filters.dateFormat(data.row.date) }}
                </template>

                <template v-slot:costs="{data}">
                    {{ $filters.formatMoney(data.row.costs) }}
                </template>
            </table-component>

            <Paginate :pagination="state.data.result"
                      :click-handler="fetch"
                      v-model="params.currentPage"
            />
        </div>
    </StatisticLayout>
</template>

<script setup>
import {reactive, onMounted, inject, ref, computed} from "vue";
import MarketingChart from '@/Pages/Admin/Statistics/Marketing/Chart.vue';
import StatisticLayout from '@/Pages/Admin/Statistics/StatisticLayout.vue'
import Paginate from '@/Components/Paginate.vue'
import LastParams from '@/Pages/Admin/Statistics/LastParams.vue'

const swal = inject('$swal')
const can = inject('$can');

const state = ref({
    data: [],
    chart: null,
    isLoading: true,
});


const params = ref({
    date: [],
    filter: null,
    last: 'one-month',
    currentPage: 1,
})

const getParams = computed(() => {
    const data = {};
    if (params.value.date.length === 2) {
        data.date_start = params.value.date[0];
        data.date_end = params.value.date[1];
    }
    if (params.value.last) {
        data.last = params.value.last
    }
    data.page = params.value.currentPage;
    return data;

})

onMounted(() => fetch())

const headings = reactive([
    {
        label: 'Дата',
        key: 'date'
    },
    {
        label: 'Ср. ціна заявки',
        key: 'average_application_price'
    },
    {
        label: 'Ср. ціна апрува',
        key: 'average_approve_application_price'
    },
    {
        label: 'Ср. ціна виконаної заявки',
        key: 'average_done_application_price'
    },
    {
        label: 'Ср. чек',
        key: 'average_check'
    },
    {
        label: 'Ср. маржа',
        key: 'average_marginality'
    },
    {
        label: 'Ср. кількість товарів',
        key: 'average_items'
    },
]);

function sortByLast(val) {
    if (val) {
        params.value.last = val;
    } else {
        params.value = {
            date: [],
            filter: null,
            last: null,
            currentPage: 1,
        };
    }
    fetch();
}

function sortByRange() {
    params.value.last = 'range';
    fetch();
}

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
