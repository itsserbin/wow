<script setup>
import PrimaryButton from '@/Components/Button/Primary.vue';
import StatisticLayout from '@/Pages/Admin/Statistics/StatisticLayout.vue'
import Loader from '@/Components/Loader.vue';
import Datepicker from 'vue-tailwind-datepicker'
import Table from './Table.vue'
import {computed, onMounted, reactive} from "vue";
import {endOfMonth, format, startOfMonth} from "date-fns";

const state = reactive({
    data: [],
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
    await axios.get(route('api.statistics.cash-flow', getParams.value))
        .then(({data}) => state.data = data.result)
        .catch((errors) => console.log(errors));
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
</script>

<template>
    <StatisticLayout>
        <template #header>
            P&L
        </template>

        <Loader v-if="state.isLoading"/>
        <div v-if="!state.isLoading" class="grid grid-cols-1 gap-4">
            <div class="grid grid-cols-12 gap-4">

<!--                <div class="col-span-12 md:col-span-2">-->
<!--                    <PrimaryButton type="button" @click="getAllData" class="w-full h-full justify-center">-->
<!--                        Показати все-->
<!--                    </PrimaryButton>-->
<!--                </div>-->

<!--                <div class="col-span-12 md:col-span-10">-->
<!--                    <Datepicker @update:modelValue="onSelectDate" v-model="params.date" :auto-apply="false" use-range/>-->
<!--                </div>-->

            </div>
            <Table :data="state.data.data"/>
        </div>
    </StatisticLayout>
</template>
