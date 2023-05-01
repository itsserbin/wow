<script setup>
import StatisticLayout from '@/Pages/Admin/Statistics/StatisticLayout.vue'
import Loader from '@/Components/Loader.vue';
import Table from './Table.vue'
import Chart from './Chart.vue'
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
        })
        .catch((errors) => console.log(errors));
    state.isLoading = false;
}

</script>

<template>
    <StatisticLayout>
        <template #header>
            P&L
        </template>

        <Loader v-if="state.isLoading"/>
        <div v-if="!state.isLoading" class="grid grid-cols-1 gap-4">
            <Chart v-if="state.data.data" :data="state.data"/>
            <Table :data="state.data.data"/>
        </div>
    </StatisticLayout>
</template>
