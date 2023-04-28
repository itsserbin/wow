<script setup>
import {reactive, onMounted, inject, ref, computed} from "vue";
import {swal} from "@/Includes/swal";

import Table from './Table.vue';
import Paginate from '@/Components/Paginate.vue';
import Loader from '@/Components/Loader.vue';
import Button from '@/Components/Button.vue';
import CostCategoryModal from '@/Pages/Admin/Statistics/CostCategories/Modal.vue';
import StatisticLayout from '@/Pages/Admin/Statistics/StatisticLayout.vue'

const can = inject('$can');

const item = ({
    title: null,
    slug: null,
    type: 0,
})

const state = reactive({
    categories: [],
    isLoading: true,
    isActiveModal: false,
    modalAction: '',
    item: {},
    currentPage: 1,

});

onMounted(async () => await fetch());

const fetch = async (page) => {
    state.isLoading = true;
    if (page) {
        state.currentPage = page;
    }
    await axios.get(route('api.statistics.costs.categories.index', {
        page: state.currentPage
    }))
        .then(({data}) => {
            state.categories = data.result
            state.isLoading = false;
        })
        .catch((response) => {
            console.log(response);
            state.isLoading = false;
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
                        if (state.isActiveModal) {
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
    state.isActiveModal = !state.isActiveModal;
}

function onEdit(id, i) {
    axios.get(route('api.statistics.costs.categories.edit', id))
        .then(({data}) => {
            state.item = data.result;
            state.modalAction = 'edit';
            state.item.index = i;
            modalFunction();
        })
        .catch((response) => console.log(response))
}

function onUpdate() {
    axios.put(route('api.statistics.costs.categories.update', state.item.id), state.item)
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
    axios.post(route('api.statistics.costs.categories.create'), state.item)
        .then(() => {
            modalFunction();
            state.item = item;
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
    if (state.modalAction === 'edit') {
        onUpdate();
    } else if (state.modalAction === 'create') {
        onCreate();
    }
}

function create() {
    Object.assign(state.item, item);
    state.modalAction = 'create';
    modalFunction();
}
</script>

<template>
    <StatisticLayout title="Категорії витрат">
        <template #header>
            Категорії витрат та прибутків
        </template>

        <Loader v-if="state.isLoading"/>
        <div v-if="!state.isLoading && can('show-bookkeeping-costs')" class="grid grid-cols-1 gap-4">
            <div>
                <Button type="btn" @click="create">
                    Додати
                </Button>
            </div>

            <Table :data="state.categories.data"
                   @onEdit="onEdit"
                   @onDestroy="onDestroy"
            />

            <div class="text-center">
                <Paginate :pagination="state.categories"
                          :click-handler="fetch"
                          v-model="state.currentPage"
                />
            </div>
            <CostCategoryModal :show="state.isActiveModal"
                               :item="state.item"
                               @close="modalFunction"
                               @submit="submitForm"
            ></CostCategoryModal>
        </div>
    </StatisticLayout>
</template>
