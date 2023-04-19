<script setup>
import {reactive, onMounted, inject, ref, computed} from "vue";
import {swal} from "@/Includes/swal";

import Paginate from '@/Components/Paginate.vue';
import Loader from '@/Components/Loader.vue';
import Button from '@/Components/Button.vue';
import Table from '@/Components/Table.vue';
import XCircle from '@/Components/Icons/XCircle.vue';
import CostCategoryModal from '@/Pages/Admin/Statistics/CostCategories/Modal.vue';
import StatisticLayout from '@/Pages/Admin/Statistics/StatisticLayout.vue'

const can = inject('$can');

const item = ({
    title: null,
    slug: null,
    code: null,
})

const state = ref({
    categories: [],
    isLoading: true,
    isActiveModal: false,
    modalAction: '',
    item: {},
    currentPage: 1,

});

onMounted(async () => await fetch());

const activeModal = computed(() => state.value.isActiveModal ? CostCategoryModal : null)

const headings = reactive([
    {
        label: 'ID',
        key: 'id'
    },
    {
        label: 'Код ',
        key: 'code'
    },
    {
        label: 'Назва',
        key: 'title'
    },
    {
        label: 'Slug',
        key: 'slug'
    },
    {
        label: "Оновлено<hr class='my-1'>Створено",
        key: 'timestamps'
    },
    {
        label: '#',
        key: 'actions'
    }
]);

const fetch = async (page) => {
    state.value.isLoading = true;
    if (page) {
        state.value.currentPage = page;
    }
    await axios.get(route('api.statistics.costs.categories.index', {
        page: state.value.currentPage
    }))
        .then(({data}) => {
            state.value.categories = data.result
            state.value.isLoading = false;
        })
        .catch((response) => {
            console.log(response);
            state.value.isLoading = false;
        })

}

function onDestroy(id) {
    if (can('show-bookkeeping-costs')) {
        swal({
            title: 'Видалити?',
            icon: 'warning',
            showCancelButton: true,
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(route('api.statistics.costs.categories.destroy', id))
                    .then(() => {
                        fetch();
                        if (state.value.isActiveModal) {
                            modalFunction();
                        }
                        swal({
                            icon: 'success',
                            title: 'Destroyed!'
                        })
                    })
                    .catch(errors => {
                        console.log(errors);
                        swal({
                            icon: 'error',
                            title: 'Error!'
                        })
                    })
            }
        })

    }
}

function modalFunction() {
    state.value.isActiveModal = !state.value.isActiveModal;
}

function onEdit(id, i) {
    axios.get(route('api.statistics.costs.categories.edit', id))
        .then(({data}) => {
            state.value.item = data.result;
            state.value.modalAction = 'edit';
            state.value.item.index = i;
            modalFunction();
        })
        .catch((response) => console.log(response))
}

function onUpdate() {
    axios.put(route('api.statistics.costs.categories.update', state.value.item.id), state.value.item)
        .then(() => {
            modalFunction();
            fetch();
            swal({
                title: 'Success!',
                icon: 'success'
            })
        })
        .catch((response) => {
            console.log(response);
            swal({
                title: 'Error!',
                icon: 'error'
            })
        })
}

function onCreate() {
    axios.post(route('api.statistics.costs.categories.create'), state.value.item)
        .then(() => {
            modalFunction();
            state.value.item = item;
            fetch();
            swal({
                title: 'Success!',
                icon: 'success'
            })
        })
        .catch((response) => {
            console.log(response);
            swal({
                title: 'Error!',
                icon: 'error'
            })
        })
}

function submitForm() {
    if (state.value.modalAction === 'edit') {
        onUpdate();
    } else if (state.value.modalAction === 'create') {
        onCreate();
    }
}

function create() {
    Object.assign(state.value.item, item);
    state.value.modalAction = 'create';
    modalFunction();
}
</script>

<template>
    <StatisticLayout title="Категорії витрат">
        <template #header>
            Категорії витрат
        </template>

        <Loader v-if="state.isLoading"/>
        <div v-if="!state.isLoading && can('show-bookkeeping-costs')">
            <Button type="btn" @click="create">
                Додати
            </Button>

            <Table :headings="headings"
                   :rows="state.categories.data"
                   :isSlotMode="true"
            >
                <template #id="{data}">
                    <a href="javascript:" @click="onEdit(data.row.id,data.i)">
                        {{ data.row.id }}
                    </a>
                </template>

                <template #timestamps="{data}">
                    {{ $filters.dateFormat(data.row.updated_at) }}
                    <hr class="my-1">
                    {{ $filters.dateFormat(data.row.created_at) }}
                </template>

                <template #actions="{data}">
                    <a href="javascript:" @click="onDestroy(data.row.id)">
                        <XCircle/>
                    </a>
                </template>
            </Table>

            <Paginate :pagination="state.categories"
                      :click-handler="fetch"
                      v-model="state.currentPage"
            />

            <component :is="activeModal"
                       :item="state.item"
                       @closeModal="modalFunction"
                       @submitForm="submitForm"
                       @declineForm="onDestroy"
            ></component>
        </div>
    </StatisticLayout>
</template>
