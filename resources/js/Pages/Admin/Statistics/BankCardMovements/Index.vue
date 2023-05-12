<script setup>
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Button from 'primevue/button';
import Toolbar from 'primevue/toolbar';
import Chip from 'primevue/chip';
import ConfirmDialog from 'primevue/confirmdialog';
import Toast from 'primevue/toast';
// import Modal from '@/Components/Modal/Modal.vue';
import Label from '@/Components/Form/Label.vue';
import StatisticLayout from '@/Pages/Admin/Statistics/StatisticLayout.vue'
import Form from './Form.vue'
import Dialog from 'primevue/dialog';
import Dropdown from 'primevue/dropdown';

import {router} from '@inertiajs/vue3'
import {useConfirm} from "primevue/useconfirm";
import {useToast} from 'primevue/usetoast';
import {useI18n} from "vue-i18n";
import {computed, defineAsyncComponent, onMounted, reactive, ref} from "vue";

const {t} = useI18n();
const confirm = useConfirm();
const toast = useToast();
const Modal = defineAsyncComponent(() => import('@/Components/Modal/Modal.vue'));

const dateNow = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const day = now.getDate().toString().padStart(2, '0');
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
};

const item = {
    type: null,
    sum: null,
    date: null,
    category_id: null,
    comment: null,
}

const lazyParams = ref({
    date: null,
    page: 0,
    first: 0,
    rows: 15,
    sortField: null,
    sortOrder: null,
});

const state = reactive({
    data: [],
    indicators: [],
    categories: [],
    isLoading: false,
    isCategoriseModal: false,
    isLoadingAddProfit: false,
    isLoadingAddCost: false,
    showModal: false,
    item: {
        id: null,
        category_id: null
    },
    file: null,
});

onMounted(async () => {
    await fetch();
});


const onSubmitRequest = async (method, url, data) => {
    try {
        await axios[method](url, data);
        await fetch();
        toggleModal();
        toast.add({
            severity: 'success',
            summary: t(`swal.${method === 'put' ? 'updated' : 'created'}`),
            life: 2000
        });
    } catch (e) {
        console.error(e);
        toast.add({
            severity: 'error',
            summary: t('swal.error'),
            detail: t('swal.check_data'),
            life: 2000
        });
    }
}

const onSubmit = async () => {
    if (state.item.category_id !== null && typeof state.item.category_id === 'object') {
        state.item.category_id = state.item.category_id.code;
    }
    const url = state.item.id
        ? route('api.statistics.bank-card-movements.update', state.item.id)
        : route('api.statistics.bank-card-movements.create');

    const method = state.item.id ? 'put' : 'post';

    await onSubmitRequest(method, url, state.item);
}

const onCreate = async (val) => {
    state.isLoadingAddProfit = (val === 1);
    state.isLoadingAddCost = (val === 0);

    await getCategories(val);
    state.item = JSON.parse(JSON.stringify(item));
    state.item.type = val === 0 ? 0 : 1;
    state.item.date = dateNow();
    toggleModal();
}

const onEdit = async (id) => {
    await axios.get(route('api.statistics.bank-card-movements.edit', id))
        .then(async ({data}) => {
            await getCategories(data.result.sum < 0 ? 0 : 1);
            state.item = data.result;
            state.isLoading = false;
        })
        .catch((errors) => console.log(errors));
    toggleModal();
}

const getCategories = async (val) => {
    try {
        const {data} = await axios.get(route('api.statistics.costs.categories.list'), {
            params: {
                type: val
            }
        });
        if (data.success) {
            state.categories = data.result.map(item => ({
                code: item.id,
                name: item.title
            }));
        }
    } catch (error) {
        console.error(error);
    }
}

const toggleModal = () => {
    state.showModal = !state.showModal;
    state.isLoadingAddProfit = false;
    state.isLoadingAddCost = false;
}

const exportData = () => {
    router.get(route('admin.statistics.bank-card-movements.export'));
}

const toggleCategoriesModal = () => {
    state.isCategoriseModal = !state.isCategoriseModal;
}

const setCategory = async () => {
    try {
        if (state.item.category_id !== null && typeof state.item.category_id === 'object') {
            state.item.category_id = state.item.category_id.code;
        }
        const {data} = await axios.post(route('api.statistics.bank-card-movements.category.update'), state.item);
        if (data.success) {
            state.item = {
                id: null,
                category_id: null
            }
            toggleCategoriesModal();
            await fetch();
            toast.add({
                severity: 'success',
                summary: t('swal.updated'),
                life: 2000
            });
        }

    } catch (e) {
        console.error(e);
    }
}

const editCategory = (val) => {
    getCategories(val.sum < 0 ? 0 : 1);
    toggleCategoriesModal();
    state.item.id = val.id;
}

const params = computed(() => {
    let sort = {};

    if (lazyParams.value.sortField) {
        sort.sort = lazyParams.value.sortField;

        if (lazyParams.value.sortOrder === 1) {
            sort.param = 'asc';
        } else if (lazyParams.value.sortOrder === -1) {
            sort.param = 'desc';
        }
    }

    return {
        perPage: lazyParams.value.rows || 15,
        sort: sort.sort && sort.param ? sort.sort : null,
        param: sort.sort && sort.param ? sort.param : null,
        page: (lazyParams.value.page || 0) + 1,
        get: lazyParams.value.get || null
    };
});

const fetch = async () => {
    state.isLoading = true;
    await axios.get(route('api.statistics.bank-card-movements.index', params.value))
        .then(({data}) => {
            state.data = data.result.data
            state.indicators = data.result.indicators
        })
        .catch((errors) => console.log(errors));
    state.isLoading = false;
}

const onPage = async (e) => {
    lazyParams.value = e;
    await fetch();
}

const onSort = async (e) => {
    lazyParams.value = e;
    await fetch();
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

const getAllData = async () => {
    params.date = {
        startDate: null,
        endDate: null,
    }
    lazyParams.value.page = 0;
    lazyParams.value.get = '';
    await fetch();
}

const getProfitsData = async () => {
    lazyParams.value.get = 'profits';
    lazyParams.value.page = 0;
    await fetch();
}
const getCostsData = async () => {
    lazyParams.value.get = 'costs';
    lazyParams.value.page = 0;
    await fetch();
}

const onRowSelect = (event) => {
    state.isLoading = true;
    onEdit(event.data.id);
};

const onDestroy = async (id) => {
    confirm.require({
        message: t('swal.confirm_destroy'),
        header: t('swal.confirm_action'),
        icon: 'pi pi-exclamation-triangle',
        accept: async () => {
            try {
                const {data} = await axios.delete(route('api.statistics.bank-card-movements.destroy', id));
                if (data.success) {
                    await fetch();
                    toast.add({
                        severity: 'success',
                        summary: t(`swal.destroyed`),
                        life: 2000
                    });
                }
            } catch (error) {
                console.error(error);
                toast.add({
                    severity: 'error',
                    summary: t('swal.error'),
                    life: 2000
                });
            }
        }
    });
}
</script>

<template>
    <StatisticLayout>
        <template #header>
            Рухи по картці
        </template>
        <div class="grid grid-cols-1 gap-4">
            <Toolbar class="mb-4">
                <template #center>
                    <div class="flex gap-4 justify-center flex-col md:flex-row">
                        <Button icon="pi pi-plus"
                                type="button"
                                @click="onCreate(1)"
                                label="Додати прибуток"
                                :loading="state.isLoadingAddProfit"
                        />
                        <Button icon="pi pi-minus"
                                severity="danger"
                                type="button"
                                @click="onCreate(0)"
                                label="Додати витрату"
                                :loading="state.isLoadingAddCost"
                        />
                    </div>
                </template>
            </Toolbar>

            <DataTable
                selectionMode="single"
                @rowSelect="onRowSelect"
                ref="dt"
                dataKey="date"
                :loading="state.isLoading"
                :value="state.data.data"
                class="p-datatable bank-card-movements-table"
                lazy
                paginator
                :rows="state.data.per_page"
                :totalRecords="state.data.total"
                @page="onPage($event)"
                @sort="onSort($event)"
                :rowsPerPageOptions="[15, 50, 100, 500]"
                paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown CurrentPageReport"
                currentPageReportTemplate="Показано з {first} по {last} із {totalRecords} записів"
            >
                <template #header>
                    <div class="p-4">

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 ">
                            <div class=" grid grid-cols-1 md:grid-cols-3 gap-2">
                                <Chip class="pl-0 pr-3" v-for="(k,i) in state.indicators">
                                    <div class="flex flex-col p-4">
                                    <span
                                        class="bg-primary border-circle w-2rem h-2rem flex align-items-center justify-content-center">
                                    {{ indicatorTitle(i) }}
                                </span>
                                        <span class="ml-2 font-medium">{{ $filters.formatMoney(k) }}</span>
                                    </div>
                                </Chip>
                            </div>
                            <div class=" grid grid-cols-1">
                                <div class="grid grid-cols-1 md:grid-cols-9 gap-4">
                                    <div class="md:col-span-4 flex items-end">
                                        <div class="block w-full">
                                            <Button severity="secondary"
                                                    type="button"
                                                    @click="getProfitsData"
                                                    class="w-full justify-center"
                                                    label="Надходження"
                                            />
                                        </div>
                                    </div>
                                    <div class="md:col-span-4 flex items-end">
                                        <div class="block w-full">
                                            <Button severity="secondary"
                                                    type="button"
                                                    @click="getCostsData"
                                                    class="w-full justify-center"
                                                    label="Витрати"
                                            />
                                        </div>
                                    </div>
                                    <div class="md:col-span-1 flex items-end">
                                        <div class="block w-full">
                                            <Button icon="pi pi-refresh"
                                                    type="button"
                                                    @click="getAllData"
                                                    class="w-full justify-center"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </template>

                <Column sortable field="date" header="Дата">
                    <template #body="{data}">
                        {{ $filters.dateFormat(data.date) }}
                        <br>
                        <span class="text-[0.7rem]">
                            {{ $filters.timeFormat(data.date) }}
                        </span>
                    </template>
                </Column>

                <Column field="category_id" header="Категорія">
                    <template #body="{data}">
                        <div v-if="data.category_id">
                            <div v-if="data.category">
                                {{ data.category.title }}
                            </div>
                            <div v-else>
                                Категорія видалена
                                <br/>
                                <Button text rounded type="button" @click="editCategory(data)">
                                    Обрати нову
                                </Button>
                            </div>
                        </div>
                        <div v-else>
                            <Button text rounded type="button" @click="editCategory(data)">
                                Обрати
                            </Button>
                        </div>
                    </template>
                </Column>

                <Column sortable field="sum" header="Сума">
                    <template #body="{data}">
                        {{ $filters.formatMoney(data.sum) }}
                    </template>
                </Column>

                <Column sortable field="balance" header="Залишок">
                    <template #body="{data}">
                        {{ $filters.formatMoney(data.balance) }}
                    </template>
                </Column>

                <Column field="actions" header="">
                    <template #body="{data}">
                        <Button text
                                rounded
                                icon="pi pi-trash"
                                type="button"
                                @click="onDestroy(data.id)"
                        />
                    </template>
                </Column>
            </DataTable>
        </div>
    </StatisticLayout>

    <Modal :show="state.isCategoriseModal" @close="toggleCategoriesModal">
        <template #body>
            <div class="grid gap-y-4">
                <div class="block">
                    <Label value="Оберіть категорію"/>
                    <Dropdown v-model="state.item.category_id"
                              showClear
                              :options="state.categories"
                              optionLabel="name"
                              placeholder="Оберіть категорію"
                              class="w-full"
                    />
                </div>
            </div>
        </template>
        <template #footer>
            <Button label="Скасувати" icon="pi pi-times" @click="toggleCategoriesModal" text/>
            <Button label="Зберегти" icon="pi pi-check" @click="setCategory" autofocus/>
        </template>
    </Modal>

    <Modal :show="state.showModal" @close="toggleModal">
        <template #head></template>
        <template #body>
            <Form :item="state.item" :categories="state.categories"/>
        </template>
        <template #footer>
            <Button label="Скасувати" icon="pi pi-times" @click="toggleModal" text/>
            <Button label="Зберегти" icon="pi pi-check" @click="onSubmit" autofocus/>
        </template>
    </Modal>

    <ConfirmDialog/>
    <Toast/>
</template>

<style>
.bank-card-movements-table.p-datatable .p-column-header-content {
    justify-content: center;
}

.bank-card-movements-table.p-datatable .p-datatable-tbody > tr > td {
    text-align: center !important;
}
</style>
