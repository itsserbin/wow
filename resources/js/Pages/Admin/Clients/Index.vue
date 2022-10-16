<template>
    <auth-layout title="Клієнти">
        <template #header>
            Клієнти
        </template>

        <loader-component v-if="state.isLoading"/>

        <div v-if="!state.isLoading && can('show-clients')">
            <Table :data="state.data.data"
                   @onEdit="onEdit"
                   @onDestroy="destroy"
            />
            <paginate :pagination="state.data"
                      :click-handler="fetch"
                      v-model="state.currentPage"
            />
            <component :is="editModal"
                       :order="state.modal"
                       :statuses="props.statuses"
                       :paymentMethods="props.payment_methods"
                       size="extralarge"
                       @closeModal="editModalFunction"
                       @declineForm="destroy"
                       @submitForm="onUpdate"
            ></component>
        </div>
    </auth-layout>
</template>

<script setup>
import {computed, inject, onMounted, reactive, ref} from "vue";
import Modal from '@/Pages/Admin/Clients/Modal.vue';
import Table from '@/Pages/Admin/Clients/Table.vue';
import {Head} from '@inertiajs/inertia-vue3';
import axios from "axios";

const state = ref({
    data: [],
    currentPage: 1,
    isLoading: true,
    isActiveEditModal: false,
    modal: {}
});

const props = defineProps(['statuses', 'payment_methods']);

const swal = inject('$swal')
const can = inject('$can');

onMounted(() => fetch());

const editModal = computed(() => state.value.isActiveEditModal ? Modal : null);

function fetch(page) {
    state.value.isLoading = true;
    if (page) {
        state.value.currentPage = page;
    }
    axios.get(route('api.clients.index', {'page': state.value.currentPage}))
        .then(({data}) => {
            state.value.data = data.result;
            state.value.isLoading = false;
        })
        .catch(errors => {
            console.log(errors);
            state.value.isLoading = false;
        })
}

function destroy(id) {
    if (can('destroy-clients')) {
        state.value.isLoading = true;
        axios.delete(route('api.clients.destroy', id))
            .then(() => {
                state.value.isLoading = false;
                fetch();
                if (state.value.isActiveEditModal) {
                    editModalFunction();
                }
                swal({
                    title: 'Success!',
                    icon: 'success'
                })
            })
            .catch(errors => {
                console.log(errors);
                swal({
                    title: 'Error!',
                    icon: 'error'
                })
            })
    }
}

function onEdit(id, i) {
    axios.get(route('api.clients.edit', id))
        .then(({data}) => {
            state.value.modal.index = i;
            state.value.modal = data.result;
            editModalFunction();
        })
        .catch((errors) => console.log(errors))
}

function onUpdate() {
    axios.put(route('api.clients.update', state.value.modal.id), state.value.modal)
        .then(() => {
            editModalFunction();
            fetch();
            swal({
                title: 'Success!',
                icon: 'success'
            })
        })
        .catch((errors) => {
            console.log(errors);
            swal({
                title: 'Error!',
                icon: 'error'
            })
        })
}

function editModalFunction() {
    state.value.isActiveEditModal = !state.value.isActiveEditModal;
}
</script>
