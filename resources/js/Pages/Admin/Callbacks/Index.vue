<template>
    <auth-layout title="Заявки на зворотній звʼязок">
        <template #header>
            Заявки на зворотній звʼязок
        </template>

        <loader-component v-if="state.isLoading"/>
        <div v-if="!state.isLoading && can('show-callbacks')">
            <div class="grid grid-cols-1 gap-4">

                <Table :data="state.data.data"
                       @onEdit="onEdit"
                       @onDestroy="onDestroy"
                />

                <div class="text-center">
                    <pagination :pagination="state.data"
                                :click-handler="fetch"
                                v-model="state.currentPage"
                    />
                </div>
            </div>

            <component :is="activeModal"
                       :item="state.item"
                       @closeModal="modalFunction"
                       @submitForm="submitForm"
                       @declineForm="onDestroy"
                       :statuses="statuses"
            ></component>
        </div>
    </auth-layout>
</template>

<script setup>
import {reactive, onMounted, inject, ref, computed} from "vue";
import Modal from '@/Pages/Admin/Callbacks/Modal.vue';
import Table from '@/Pages/Admin/Callbacks/Table.vue';

defineProps(['statuses']);


const swal = inject('$swal')
const can = inject('$can');

const item = reactive({
    name: null,
    phone: null,
    comment: null,
    status: null,
})

const state = ref({
    data: [],
    currentPage: 1,
    isLoading: true,
    isActiveModal: false,
    modalAction: '',
    item: {},
});

onMounted(() => {
    fetch(1);
})

const activeModal = computed(() => state.value.isActiveModal ? Modal : null)


function fetch(page) {
    state.value.isLoading = true;
    if (page) {
        state.value.currentPage = page;
    }
    axios.get(route('api.callbacks.index', {'page': state.value.currentPage}))
        .then(response => {
            Object.assign(state.value.data, response.data.result);
            state.value.isLoading = false;
        })
        .catch(errors => {
            console.log(errors);
            state.value.isLoading = false;
        })
}

function onDestroy(id) {
    if (can('destroy-callbacks')) {
        swal({
            title: 'Видалити?',
            icon: 'warning',
            showCancelButton: true,
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(route('api.callbacks.destroy', id))
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
    if (can('edit-callbacks')) {
        axios.get(route('api.callbacks.edit', id))
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
    if (can('edit-callbacks')) {
        axios.put(route('api.callbacks.update', state.value.item.id), state.value.item)
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
    if (can('create-callbacks')) {
        axios.post(route('api.callbacks.create'), state.value.item)
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
    if (state.value.modalAction === 'edit' && can('edit-callbacks')) {
        onUpdate();
    } else if (state.value.modalAction === 'create' && can('create-callbacks')) {
        onCreate();
    }
}

function create() {
    if (can('create-callbacks')) {
        state.value.item = item;
        state.value.modalAction = 'create';
        modalFunction();
    }
}
</script>
