<script setup>
import {reactive, onMounted, inject, ref, computed} from "vue";
import {swal} from "@/Includes/swal";

import ProviderModal from '@/Pages/Admin/Options/Providers/Modal.vue';
import OptionsLayout from '@/Pages/Admin/Options/OptionsLayout.vue';
import Table from '@/Pages/Admin/Options/Providers/Table.vue';
import Loader from '@/Components/Loader.vue';
import Button from '@/Components/Button.vue';
import Paginate from '@/Components/Paginate.vue';

const can = inject('$can');

const item = reactive({
    name: null,
    catalog: null,
    time_of_dispatch: null,
    availability: null,
    prepayment: 0,
    prepayment_sum: null,
    refunds: 0,
    refunds_sum: null,
    contacts: null,
    comment: null,
})

const state = ref({
    providers: [],
    currentPage: 1,
    isLoading: true,
    isActiveModal: false,
    modalAction: '',
    item: {},
});

onMounted(() => {
    fetch(1);
})

const activeModal = computed(() => state.value.isActiveModal ? ProviderModal : null)

function fetch(page) {
    state.value.isLoading = true;
    if (page) {
        state.value.currentPage = page;
    }
    axios.get(route('api.providers.index', {'page': state.value.currentPage}))
        .then(response => {
            Object.assign(state.value.providers, response.data.result);
            state.value.isLoading = false;
        })
        .catch(errors => {
            console.log(errors);
            state.value.isLoading = false;
        })
}

function onDestroy(id) {
    if (can('destroy-providers')) {
        swal({
            title: 'Видалити?',
            icon: 'warning',
            showCancelButton: true,
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(route('api.providers.destroy', id))
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
    if (can('edit-providers')) {
        axios.get(route('api.providers.edit', id))
            .then(({data}) => {
                state.value.item = data.result;
                state.value.modalAction = 'edit';
                state.value.item.index = i;
                modalFunction();
            })
            .catch((response) => console.log(response))
    }
}

function onUpdate() {
    if (can('edit-providers')) {
        axios.put(route('api.providers.update', state.value.item.id), state.value.item)
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
}

function onCreate() {
    if (can('create-providers')) {
        axios.post(route('api.providers.create'), state.value.item)
            .then(({data}) => {
                modalFunction();
                state.value.item = {};
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
}

function submitForm() {
    if (state.value.modalAction === 'edit' && can('edit-providers')) {
        onUpdate();
    } else if (state.value.modalAction === 'create' && can('create-providers')) {
        onCreate();
    }
}

function create() {
    if (can('create-providers')) {
        Object.assign(state.value.item, item);
        state.value.modalAction = 'create';
        modalFunction();
    }
}
</script>

<template>
    <OptionsLayout title="Постачальники">
        <template #header>
            Постачальники
        </template>

        <Loader v-if="state.isLoading"/>
        <div v-if="!state.isLoading && can('show-providers')">
            <Button type="btn" @click="create" v-if="can('create-providers')">
                Додати
            </Button>

            <Table :data="state.providers.data"
                   @onEdit="onEdit"
                   @onDestroy="onDestroy"
                   :canDestroy="can('destroy-providers')"
            />

            <Paginate :pagination="state.providers"
                      :click-handler="fetch"
                      v-model="state.currentPage"
            />
            <component :is="activeModal"
                       :item="state.item"
                       @closeModal="modalFunction"
                       @submitForm="submitForm"
                       @declineForm="onDestroy"
                       :canDestroy="can('destroy-providers')"
            ></component>
        </div>
    </OptionsLayout>
</template>
