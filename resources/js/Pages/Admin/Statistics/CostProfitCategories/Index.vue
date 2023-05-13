<script setup>
import StatisticLayout from '@/Pages/Admin/Statistics/StatisticLayout.vue'
import CostCategoryForm from '@/Pages/Admin/Statistics/CostProfitCategories/Form.vue';
import Modal from '@/Components/Modal/Modal.vue';

import Button from 'primevue/button';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';

import {reactive, onMounted, inject, ref, computed} from "vue";
import {useI18n} from "vue-i18n";
import {toast} from 'vue3-toastify';
import isDark from '@/Includes/isDark.js';

import {useConfirm} from "@/Components/ConfirmationModal/useConfirm";

const {t} = useI18n();
const can = inject('$can');

const item = ({
    title: null,
    slug: null,
    type: null,
})

const state = reactive({
    categories: [],
    isLoading: true,
    isActiveModal: false,
    modalAction: '',
    item: {},
    currentPage: 1,

});

const lazyParams = ref({
    date: null,
    page: 0,
    first: 0,
    rows: 15,
    sortField: null,
    sortOrder: null,
});

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
    };
});

onMounted(async () => await fetch());

const fetch = async () => {
    state.isLoading = true;
    await axios.get(route('api.statistics.costs.categories.index', params.value))
        .then(({data}) => state.categories = data.result)
        .catch((response) => console.error(response))
    state.isLoading = false;

}

function onDestroy(id) {
    if (can('show-bookkeeping-costs')) {
        useConfirm({
            message: t('swal.confirm_destroy'),
            header: t('swal.confirm_action'),
            icon: 'pi pi-exclamation-triangle',
            accept: async () => {
                try {
                    const {data} = await axios.delete(route('api.statistics.costs.categories.destroy', id));
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
}

function modalFunction() {
    state.isActiveModal = !state.isActiveModal;
}

function onEdit(id, i) {
    axios.get(route('api.statistics.costs.categories.edit', id))
        .then(({data}) => {
            state.item = data.result;
            state.modalAction = 'edit';
            state.item.index = i;
            modalFunction();
            state.isLoading = false;
        })
        .catch((response) => console.log(response))
}

function onUpdate() {
    if (state.item.type !== null && typeof state.item.type === 'object') {
        state.item.type = state.item.type.code;
    }
    axios.put(route('api.statistics.costs.categories.update', state.item.id), state.item)
        .then(() => {
            modalFunction();
            fetch();
            toast.success(t(`swal.updated`), {
                autoClose: 3000,
                theme: isDark ? 'dark' : 'light'
            });
        })
        .catch((response) => {
            console.log(response);
            toast.error(t('swal.error'), {
                autoClose: 3000,
                theme: isDark ? 'dark' : 'light'
            });
        })
}

function onCreate() {
    if (state.item.type !== null && typeof state.item.type === 'object') {
        state.item.type = state.item.type.code;
    }
    axios.post(route('api.statistics.costs.categories.create'), state.item)
        .then(() => {
            modalFunction();
            state.item = JSON.parse(JSON.stringify(item));
            fetch();
            toast.success(t(`swal.created`), {
                autoClose: 3000,
                theme: isDark ? 'dark' : 'light'
            });
        })
        .catch((response) => {
            console.log(response);
            toast.error(t('swal.error'), {
                autoClose: 3000,
                theme: isDark ? 'dark' : 'light'
            });
        })
}

function submitForm() {
    if (state.modalAction === 'edit') {
        onUpdate();
    } else if (state.modalAction === 'create') {
        onCreate();
    }
}

function create() {
    state.item = JSON.parse(JSON.stringify(item));
    state.modalAction = 'create';
    modalFunction();
}


const onPage = async (e) => {
    lazyParams.value = e;
    await fetch();
}

const onSort = async (e) => {
    lazyParams.value = e;
    await fetch();
}

const onRowSelect = (event) => {
    state.isLoading = true;
    onEdit(event.data.id);
};
</script>

<template>
    <StatisticLayout title="Категорії витрат">
        <template #header>
            Категорії витрат та прибутків
        </template>

        <div v-if="can('show-bookkeeping-costs')" class="grid grid-cols-1 gap-4">
            <div>
                <Button type="btn" @click="create">
                    Додати
                </Button>
            </div>

            <DataTable
                selectionMode="single"
                @rowSelect="onRowSelect"
                ref="dt"
                dataKey="date"
                :loading="state.isLoading"
                :value="state.categories.data"
                class="p-datatable cost-and-profit-categories-table"
                lazy
                paginator
                :rows="state.categories.per_page"
                :totalRecords="state.categories.total"
                @page="onPage($event)"
                @sort="onSort($event)"
                :rowsPerPageOptions="[15, 50, 100, 500]"
                paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown CurrentPageReport"
                currentPageReportTemplate="Показано з {first} по {last} із {totalRecords} записів"
            >
                <Column sortable field="title" header="Назва">
                    <template #body="{data}">
                        <div class="text-center">
                            {{ data.title }}
                        </div>
                    </template>
                </Column>

                <Column sortable field="type" header="Тип">
                    <template #body="{data}">
                        <div class="text-center">
                            {{ data.type ? 'Прибуток' : 'Витрата' }}
                        </div>
                    </template>
                </Column>


                <Column sortable field="slug" header="Slug">
                    <template #body="{data}">
                        <div class="text-center">
                            {{ data.slug }}
                        </div>
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

    <Modal :show="state.isActiveModal" @close="modalFunction">
        <template #body>
            <CostCategoryForm :item="state.item"/>
        </template>
        <template #footer>
            <Button label="Скасувати" icon="pi pi-times" @click="modalFunction" text/>
            <Button label="Зберегти" icon="pi pi-check" @click="submitForm" autofocus/>
        </template>
    </Modal>
</template>

<style>
.cost-and-profit-categories-table.p-datatable .p-column-header-content {
    justify-content: center;
}
</style>
