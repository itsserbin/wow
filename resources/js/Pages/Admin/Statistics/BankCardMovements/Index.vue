<script setup>
import Table from './Table.vue';
import DownloadIcon from '@/Components/Icons/DownloadIcon.vue';
import Card from '@/Components/Card.vue';
import Paginate from '@/Components/Paginate.vue';
import PrimaryButton from '@/Components/Button/Primary.vue';
import SecondaryButton from '@/Components/Button/Secondary.vue';
import DangerButton from '@/Components/Button/Danger.vue';
import Loader from '@/Components/Loader.vue';
import StatisticLayout from '@/Pages/Admin/Statistics/StatisticLayout.vue'
import Datepicker from 'vue-tailwind-datepicker'
import {router} from '@inertiajs/vue3'

const Modal = defineAsyncComponent(() => import('./Modal.vue'));

import {computed, defineAsyncComponent, onMounted, reactive, ref} from "vue";
import {format, endOfMonth, startOfMonth} from "date-fns";
import {swal} from "@/Includes/swal";
import {useI18n} from "vue-i18n";

const {t} = useI18n();

const item = {
    sum: null,
    date: new Date(),
    category_id: null,
    comment: null,
}

const state = reactive({
    data: [],
    indicators: [],
    categories: [],
    isLoading: true,
    showModal: false,
    item: null,
    file: null,
});

const params = reactive({
    date: {
        startDate: null,
        endDate: null
    },
    // date: {
    //     startDate: format(startOfMonth(new Date()), "yyyy-MM-dd HH:mm:ss"),
    //     endDate: format(endOfMonth(new Date()), "yyyy-MM-dd HH:mm:ss")
    // },
    page: 1,
    get: '',
});


const getParams = computed(() => {
    const {date, page, get} = params;

    return {
        date_start: date.startDate,
        date_end: date.endDate,
        get: get,
        page
    };
});

onMounted(async () => {
    await fetch();
    await getCategories();
})

const fetch = async () => {
    state.isLoading = true;
    await axios.get(route('api.statistics.bank-card-movements.index', getParams.value))
        .then(({data}) => {
            state.data = data.result.data
            state.indicators = data.result.indicators
        })
        .catch((errors) => console.log(errors));
    state.isLoading = false;
}

const onSelectDate = async (val) => {
    params.date = {
        startDate: val.startDate,
        endDate: val.endDate,
    }
    params.page = 1;
    params.get = '';
    await fetch();
}

const onSubmitRequest = async (method, url, data) => {
    try {
        await axios[method](url, data);
        toggleModal();
        await fetch();
        await swal({
            title: t(`swal.${method === 'put' ? 'updated' : 'created'}`),
            icon: 'success'
        });
    } catch (e) {
        console.error(e);
        await swal({
            title: t('swal.error'),
            text: t('swal.check_data'),
            icon: 'error'
        });
    }
}

const onSubmit = async () => {
    const url = state.item.id
        ? route('api.statistics.bank-card-movements.update', state.item.id)
        : route('api.statistics.bank-card-movements.create');

    const method = state.item.id ? 'put' : 'post';

    await onSubmitRequest(method, url, state.item);
}

const onCreate = async (val) => {
    await getCategories(val);
    state.item = JSON.parse(JSON.stringify(item));
    if (val === 0) {
        state.item.sum = '-';
    }
    toggleModal();
}

const getAllData = async () => {
    params.date = {
        startDate: null,
        endDate: null,
    }
    params.page = 1;
    params.get = '';
    await fetch();
}

const onDestroy = async () => {

}

const onEdit = async (id) => {
    await axios.get(route('api.statistics.bank-card-movements.edit', id))
        .then(async ({data}) => {
            await getCategories(data.result.type);
            state.item = data.result;
        })
        .catch((errors) => console.log(errors));
    toggleModal();
}

const getCategories = async (val) => {
    console.log(val);
    try {
        const {data} = await axios.get(route('api.statistics.costs.categories.list'));
        state.categories = [];
        data.result.forEach(({id, title, type}) => {
            if (type === val) {
                state.categories.push({key: id, value: title});
            }
        });
    } catch (error) {
        console.error(error);
    }
}

const toggleModal = () => {
    state.showModal = !state.showModal;
}

const exportData = () => {
    router.get(route('admin.statistics.bank-card-movements.export'));
}

const indicatorTitle = (val) => {
    switch (val) {
        case ('balance'):
            return 'Баланс';
        case ('profits'):
            return 'Надходження';
        case ('costs'):
            return 'Витрати';
    }
}

const getProfitsData = async () => {
    params.get = 'profits';
    await fetch();
}
const getCostsData = async () => {
    params.get = 'costs';
    await fetch();
}
</script>

<template>
    <StatisticLayout>
        <template #header>
            Рухи по картці
        </template>

        <Loader v-if="state.isLoading"/>
        <div v-if="!state.isLoading" class="grid grid-cols-1 gap-4">
            <div class="flex gap-4 justify-center">
                <PrimaryButton type="button" @click="onCreate(1)">Додати прибуток</PrimaryButton>
                <DangerButton type="button" @click="onCreate(0)">Додати витрату</DangerButton>
            </div>
            <div class="grid grid-cols-12 gap-4">

                <div class="col-span-12 md:col-span-2">
                    <PrimaryButton type="button" @click="getAllData" class="w-full h-full justify-center">
                        Показати все
                    </PrimaryButton>
                </div>

                <div class="col-span-12 md:col-span-10 flex gap-4">
                    <Datepicker @update:modelValue="onSelectDate" v-model="params.date" :auto-apply="false" use-range/>
                    <PrimaryButton type="button" @click="exportData">
                        <DownloadIcon/>
                    </PrimaryButton>
                </div>

            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="grid grid-cols-2 md:grid-cols-3 gap-4 mx-auto">
                    <Card v-for="(item,i) in state.indicators"
                          class="text-center dark:bg-gray-800 rounded-xl shadow-md"
                          :title="indicatorTitle(i)"
                          :description="$filters.formatMoney(item)"
                    >
                    </Card>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-5 gap-4">
                    <div class="md:col-span-1 flex items-end">
                        <div class="block w-full">
                            <PrimaryButton type="button" @click="getAllData" class="w-full justify-center">
                                Все
                            </PrimaryButton>
                        </div>

                    </div>
                    <div class="md:col-span-2 flex items-end">
                        <div class="block w-full">
                            <SecondaryButton type="button" @click="getProfitsData" class="w-full justify-center">
                                Надходження
                            </SecondaryButton>
                        </div>
                    </div>
                    <div class="md:col-span-2 flex items-end">
                        <div class="block w-full">
                            <SecondaryButton type="button" @click="getCostsData" class="w-full justify-center">
                                Витрати
                            </SecondaryButton>
                        </div>
                    </div>
                </div>
            </div>

            <Table :data="state.data.data"
                   @onDestroy="onDestroy"
                   @onEdit="onEdit"
                   @onUpdate="fetch "
                   :categories="state.categories"
                   @getCategories="getCategories"
            />
            <div class="text-center">
                <Paginate v-if="state.data.last_page !== 1"
                          :pagination="state.data"
                          :click-handler="fetch"
                          v-model="params.page"
                />
            </div>
        </div>
        <Modal :show="state.showModal"
               @close="toggleModal"
               @submit="onSubmit"
               :item="state.item"
               :categories="state.categories"
        />
    </StatisticLayout>
</template>
