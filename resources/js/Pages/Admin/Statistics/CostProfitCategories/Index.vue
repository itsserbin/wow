<script setup>
import {reactive, onMounted, inject, ref, computed} from "vue";
import {swal} from "@/Includes/swal";
import {useConfirm} from "primevue/useconfirm";
import {useToast} from 'primevue/usetoast';
import {useI18n} from "vue-i18n";

import StatisticLayout from '@/Pages/Admin/Statistics/StatisticLayout.vue'
import CostCategoryForm from '@/Pages/Admin/Statistics/CostProfitCategories/Form.vue';

import ConfirmDialog from 'primevue/confirmdialog';
import Toast from 'primevue/toast';
import Dialog from 'primevue/dialog';
import Button from 'primevue/button';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';


const {t} = useI18n();
const confirm = useConfirm();
const toast = useToast();
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
        confirm.require({
            message: t('swal.confirm_destroy'),
            header: t('swal.confirm_action'),
            icon: 'pi pi-exclamation-triangle',
            accept: async () => {
                try {
                    const {data} = await axios.delete(route('api.statistics.costs.categories.destroy', id));
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


    // if (can('show-bookkeeping-costs')) {
    //     swal({
    //         title: 'Видалити?',
    //         icon: 'warning',
    //         showCancelButton: true,
    //     }).then((result) => {
    //         if (result.isConfirmed) {
    //             axios.delete(route('api.statistics.costs.categories.destroy', id))
    //                 .then(() => {
    //                     fetch();
    //                     if (state.isActiveModal) {
    //                         modalFunction();
    //                     }
    //                     swal({
    //                         icon: 'success',
    //                         title: 'Destroyed!'
    //                     })
    //                 })
    //                 .catch(errors => {
    //                     console.log(errors);
    //                     swal({
    //                         icon: 'error',
    //                         title: 'Error!'
    //                     })
    //                 })
    //         }
    //     })
    //
    // }
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
            toast.add({
                severity: 'success',
                summary: t(`swal.updated`),
                life: 2000
            });
        })
        .catch((response) => {
            console.log(response);
            toast.add({
                severity: 'error',
                summary: t('swal.error'),
                detail: t('swal.check_data'),
                life: 2000
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
            toast.add({
                severity: 'success',
                summary: t(`swal.created`),
                life: 2000
            });
        })
        .catch((response) => {
            console.log(response);
            toast.add({
                severity: 'error',
                summary: t('swal.error'),
                detail: t('swal.check_data'),
                life: 2000
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

            <!--            <Table :data="state.categories.data"-->
            <!--                   @onEdit="onEdit"-->
            <!--                   @onDestroy="onDestroy"-->
            <!--            />-->

            <!--            <div class="text-center">-->
            <!--                <Paginate :pagination="state.categories"-->
            <!--                          :click-handler="fetch"-->
            <!--                          v-model="state.currentPage"-->
            <!--                />-->
            <!--            </div>-->
        </div>
    </StatisticLayout>

    <Dialog class="w-full max-w-xl" v-model:visible="state.isActiveModal" modal header=" ">
        <CostCategoryForm :item="state.item"/>
        <template #footer>
            <Button label="Скасувати" icon="pi pi-times" @click="modalFunction" text/>
            <Button label="Зберегти" icon="pi pi-check" @click="submitForm" autofocus/>
        </template>
    </Dialog>

    <ConfirmDialog/>
    <Toast/>
</template>

<style>
.cost-and-profit-categories-table.p-datatable .p-column-header-content {
    justify-content: center;
}
</style>
