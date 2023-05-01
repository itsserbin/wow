<script setup>
import StatisticLayout from '@/Pages/Admin/Statistics/StatisticLayout.vue'
import Loader from '@/Components/Loader.vue';
import Table from './Table.vue'
import {computed, getCurrentInstance, onMounted, reactive} from "vue";

const state = reactive({
    data: [],
    isLoading: true,
});

const params = reactive({
    page: 1,
});

const getParams = computed(() => {
    const {page} = params;

    return {
        page
    };
});

onMounted(async () => {
    await fetch();
})


const fetch = async () => {
    state.isLoading = true;
    await axios.get(route('api.statistics.profit-and-loss', getParams.value))
        .then(({data}) => {
            state.data = data.result;
            chart(state.data);
        })
        .catch((errors) => console.log(errors));
    state.isLoading = false;
}

const options = reactive({
        chart: {
            type: 'bar',
            id: 'vuechart-example'
        },
        xaxis: {
            categories: []
        }
    }
);

const options2 = reactive({
        chart: {
            height: 350,
            type: 'area'
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth'
        },
        xaxis: {
            type: 'date',
            categories: []
        },
    }
);

const {$filters} = getCurrentInstance().appContext.config.globalProperties

const series = reactive([])

const chart = (val) => {
    options.xaxis.categories = val.data.map((item) => {
        return item.month;
    });

    options2.xaxis.categories = val.data.map((item) => {
        return item.month;
    });

    series[0] = {
        name: 'Витрати',
        data: val.data.map((item) => {
            return item.costs = -item.costs;
        })
    }

    series[1] = {
        name: 'Загальна виручка',
        data: val.data.map((item) => {
            return item.total_revenues;
        })
    }

    series[2] = {
        name: 'Чистий прибуток  ',
        data: val.data.map((item) => {
            return (item.net_profit).toFixed(2);
        })
    }
}
</script>

<template>
    <StatisticLayout>
        <template #header>
            P&L
        </template>

        <Loader v-if="state.isLoading"/>
        <div v-if="!state.isLoading" class="grid grid-cols-1 gap-4">
            <div class="grid grid-cols-1 md:grid-cols-2">
                <apexchart :options="options" :series="series"/>
                <apexchart :options="options2" :series="series"/>
            </div>
            <Table :data="state.data.data"/>
        </div>
    </StatisticLayout>
</template>
