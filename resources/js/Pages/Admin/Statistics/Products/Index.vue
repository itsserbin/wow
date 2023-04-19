<script setup>
import {onMounted, inject, ref, computed} from "vue";
import {endOfMonth, startOfMonth} from 'date-fns';

import Button from '@/Components/Button.vue';
import Paginate from '@/Components/Paginate.vue';
import Card from '@/Components/Card.vue';
import Label from '@/Components/Form/Label.vue';
import Loader from '@/Components/Loader.vue';
import StatisticLayout from '@/Pages/Admin/Statistics/StatisticLayout.vue'
import DatepickerComponent from '@/Pages/Admin/Statistics/Datepicker.vue'
import Table from '@/Pages/Admin/Statistics/Products/Table.vue'
import Multiselect from '@/Components/Multiselect/Multiselect.vue';

const can = inject('$can');

const state = ref({
    data: [],
    products: [],
    chart: null,
    isLoading: true,
});

const products = ref([]);

const params = ref({
    date: [],
    currentPage: 1,
})

const productsArray = computed(() => {
    let products = [];
    state.value.products.forEach((item) => {
        products.push(item.id)
    })

    return products.join();
})

const getParams = computed(() => {
    const data = {};
    if (params.value.date.length === 2) {
        data.date_start = params.value.date[0].toLocaleDateString();
        data.date_end = params.value.date[1].toLocaleDateString();
    }
    if (productsArray.value) {
        data.products = productsArray.value;
    }
    data.page = params.value.currentPage;
    return data;

})

onMounted(() => {
    params.value.date[0] = startOfMonth(new Date());
    params.value.date[1] = endOfMonth(new Date());

    fetch();

    axios.get(route('api.products.list'))
        .then(({data}) => products.value = data.result)
        .catch((response) => console.log(response));
})

function fetchClear() {
    params.value.date = [];
    state.value.products = [];
    fetch();
}

function h1AndCodeAndId({h1, id}) {
    return h1.ua ? h1.ua + ` (${id})` : (h1.ru ? h1.ru + ` (${id})` : id);
}

function paginate(page) {
    if (page) {
        params.value.currentPage = page;
    }
    fetch();
}

function search() {
    params.value.currentPage = 1;
    fetch();
}

function fetch() {
    state.value.isLoading = true;
    axios.get(route('api.statistics.products.index', getParams.value))
        .then(({data}) => {
            state.value.data = data;
            state.value.isLoading = false;
        })
        .catch((errors) => {
            console.log(errors);
            state.value.isLoading = false;
        });
}
</script>

<template>
    <StatisticLayout title="Статистика товарів">
        <template #header>
            Статистика товарів
        </template>

        <Loader v-if="state.isLoading"/>
        <div v-if="!state.isLoading && can('show-bookkeeping-marketing')" class="grid grid-cols-1 gap-4">
            <div class="grid grid-cols-1 md:grid-cols-12 gap-4 mt-5">
                <div class="block col-span-2 text-center">
                    <Label value="&nbsp;"/>
                    <Button type="button" @click="fetchClear">
                        Очистити
                    </Button>
                </div>
                <div class="block col-span-4">
                    <Label value="Фільтр по даті"/>
                    <DatepickerComponent v-model="params.date"/>
                </div>

                <div class="block col-span-4">
                    <Label value="Фільтр по менеджерам"/>
                    <multiselect
                        v-model="state.products"
                        :options="products"
                        :custom-label="h1AndCodeAndId"
                        placeholder="Оберіть товари"
                        track-by="id"
                        :searchable="true"
                        :close-on-select="false"
                        multiple
                    />
                </div>

                <div class="block col-span-2 text-center">
                    <Label value="&nbsp;"/>
                    <Button type="button" @click="search">
                        Пошук
                    </Button>
                </div>
            </div>

            <div class="grid grid-cols-2 md:grid-cols-4">
                <Card v-for="(item,i) in state.data.generalStat"
                      class="text-center"
                      :title="i"
                      :description="item ? item : '0'"
                >
                </Card>
            </div>

            <Table :data="state.data.result.data"/>

            <div class="text-center">
                <Paginate :pagination="state.data.result"
                          :click-handler="paginate"
                          v-model="params.currentPage"
                />
            </div>
        </div>
    </StatisticLayout>
</template>
