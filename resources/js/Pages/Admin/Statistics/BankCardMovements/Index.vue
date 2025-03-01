<script setup>
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Button from 'primevue/button';
import Toolbar from 'primevue/toolbar';
import Chip from 'primevue/chip';
import ConfirmDialog from 'primevue/confirmdialog';
import Label from '@/Components/Form/Label.vue';
import StatisticLayout from '@/Pages/Admin/Statistics/StatisticLayout.vue'
import Form from './Form.vue'
import Dropdown from 'primevue/dropdown';

import {useI18n} from "vue-i18n";
import {computed, defineAsyncComponent, onMounted, reactive, ref} from "vue";
import {toast} from 'vue3-toastify';
import isDark from '@/Includes/isDark.js';
import {useConfirm} from "@/Components/ConfirmationModal/useConfirm";


const {t} = useI18n();

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
    isLoadingCategoriesModal: false,
    isLoadingModal: false,
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
        toast.success(t(`swal.${method === 'put' ? 'updated' : 'created'}`), {
            autoClose: 3000,
            theme: isDark ? 'dark' : 'light'
        });
    } catch (e) {
        console.error(e);
        toast.error(t('swal.error'), {
            autoClose: 3000,
            theme: isDark ? 'dark' : 'light'
        });
    }
}

const onSubmit = async () => {
    state.isLoadingModal = true;
    if (state.item.category_id !== null && typeof state.item.category_id === 'object') {
        state.item.category_id = state.item.category_id.code;
    }
    const url = state.item.id
        ? route('api.statistics.bank-card-movements.update', state.item.id)
        : route('api.statistics.bank-card-movements.create');

    const method = state.item.id ? 'put' : 'post';

    await onSubmitRequest(method, url, state.item);
    state.isLoadingModal = false;
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
        toast.error(t('swal.error'), {
            autoClose: 3000,
            theme: isDark ? 'dark' : 'light'
        });
    }
}

const toggleModal = () => {
    state.showModal = !state.showModal;
    state.isLoadingAddProfit = false;
    state.isLoadingAddCost = false;
}

const exportData = () => {
    document.location.href = route('admin.export.bank-card-movements');
}

const toggleCategoriesModal = () => {
    state.isCategoriseModal = !state.isCategoriseModal;
}

const setCategory = async () => {
    try {
        state.isLoadingCategoriesModal = true;
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
            toast.success(t('swal.updated'), {
                autoClose: 3000,
                theme: isDark ? 'dark' : 'light'
            });
        }
        state.isLoadingCategoriesModal = false;

    } catch (e) {
        state.isLoadingCategoriesModal = false;
        console.error(e);
        toast.error(t('swal.error'), {
            autoClose: 3000,
            theme: isDark ? 'dark' : 'light'
        });
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
    await useConfirm({
        message: t('swal.confirm_destroy'),
        header: t('swal.confirm_action'),
        icon: 'pi pi-exclamation-triangle',
        accept: async () => {
            try {
                const {data} = await axios.delete(route('api.statistics.bank-card-movements.destroy', id));
                if (data.success) {
                    await fetch();
                    toast.success(t(`swal.destroyed`), {
                        autoClose: 3000,
                        theme: isDark ? 'dark' : 'light'
                    });
                }
            } catch (error) {
                console.error(error);
                toast.error(t('swal.error'), {
                    autoClose: 3000,
                    theme: isDark ? 'dark' : 'light'
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
                resizableColumns
                columnResizeMode="expand"
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
                paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
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
                            <div class="grid grid-cols-1">
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

                <Column sortable="" field="date" header="Дата">
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

                <Column sortable="" field="sum" header="Сума">
                    <template #body="{data}">
                        {{ $filters.formatMoney(data.sum) }}
                    </template>
                </Column>

                <Column sortable="" field="comment" header="Коментар" style="width:20px;">
                    <template #body="{data}">
                        {{
                            data.comment && data.comment.length > 30 ? data.comment.slice(0, 30) + "..." : data.comment
                        }}
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

                <template #footer>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div class="flex items-center">
                            Показано з {{ state.data.from }} по {{ state.data.to }} із {{ state.data.total }} записів
                        </div>
                        <div class="flex justify-end">
                            <Button icon="pi pi-file-export"
                                    iconPos="right"
                                    type="button"
                                    label="Експортувати"
                                    @click="exportData"
                            />
                        </div>
                    </div>
                </template>

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
            <Button label="Скасувати"
                    icon="pi pi-times"
                    @click="toggleCategoriesModal"
                    text
            />
            <Button label="Зберегти"
                    icon="pi pi-check"
                    @click="setCategory"
                    autofocus
                    :loading="state.isLoadingCategoriesModal"
            />
        </template>
    </Modal>

    <Modal :show="state.showModal" @close="toggleModal">
        <template #head></template>
        <template #body>
            <Form :item="state.item" :categories="state.categories"/>
        </template>
        <template #footer>
            <Button label="Скасувати"
                    icon="pi pi-times"
                    @click="toggleModal"
                    text
            />
            <Button label="Зберегти"
                    icon="pi pi-check"
                    @click="onSubmit"
                    autofocus
                    :loading="state.isLoadingModal"
            />
        </template>
    </Modal>

    <ConfirmDialog/>
</template>

<style>
.bank-card-movements-table.p-datatable .p-column-header-content {
    justify-content: center;
}

.bank-card-movements-table.p-datatable .p-datatable-tbody > tr > td {
    text-align: center !important;
    white-space: nowrap;
}
</style>
