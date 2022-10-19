<template>
    <auth-layout title="Клієнти">
        <template #header>
            Клієнти
        </template>

        <loader-component v-if="state.isLoading"/>

        <div v-if="!state.isLoading && can('show-clients')">
            <div class="grid grid-cols-1 md:grid-cols-5 gap-4">
                <div class="md:col-span-1">
                    <sidebar-component>
                        <sidebar-item v-if="sidebar.length"
                                      v-for="item in sidebar"
                                      @click="sortByStatus(item.key)"
                                      :active="state.sidebarActive === item.key"
                        >
                            {{ item.title }}
                        </sidebar-item>
                    </sidebar-component>
                </div>
                <div class="w-full md:col-span-4 grid grid-cols-1 gap-4">
                    <search-component @search="search"
                                      :clear="true"
                                      placeholder="Імʼя, прізвище, по-батькові, телефон, email, коментар..."
                    />
                    <Table :data="state.data.data"
                           @onEdit="onEdit"
                           @onDestroy="destroy"
                           :statuses="state.statuses"
                    />
                    <div class="text-center">
                        <pagination :pagination="state.data"
                                    :click-handler="paginate"
                                    v-model="params.currentPage"
                        />
                    </div>
                </div>
            </div>
            <component :is="editModal"
                       :item="state.modal"
                       :statuses="state.statuses"
                       :sub-statuses="state.subStatuses"
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

const state = ref({
    data: [],
    statuses: [],
    subStatuses: [],
    isLoading: true,
    isActiveEditModal: false,
    sidebarActive: 'all',
    modal: {}
});

const params = ref({
    status: null,
    currentPage: 1,
})

const getParams = computed(() => {
    const data = {};
    data.page = params.value.currentPage;
    if (params.value.status) {
        data.status = params.value.status;
    }
    return data;
})

const sidebar = ref([]);
const swal = inject('$swal')
const can = inject('$can');

onMounted(() => {
    fetch();

    axios.get(route('api.clients.statuses'))
        .then(({data}) => {
            state.value.statuses = data.statuses;
            state.value.subStatuses = data.subStatuses;
            sidebar.value.push({title: 'Всі клієнти', key: 'all'});
            for (const [key, value] of Object.entries(data.statuses)) {
                sidebar.value.push({
                    title: value,
                    key: key,
                })
            }
        })
});

const editModal = computed(() => state.value.isActiveEditModal ? Modal : null);

function search(query) {
    axios.get(route('api.clients.search', {search: query}))
        .then(({data}) => {
            state.value.sidebarActive = null;
            params.value.currentPage = 1;
            state.value.data = data.result;
            state.value.isLoading = false;
        })
        .catch(errors => {
            console.log(errors);
            state.value.isLoading = false;
        })
}

function sortByStatus(status) {
    state.value.sidebarActive = status;
    if (status === 'all') {
        params.value.status = null;
    } else {
        params.value.status = status;
    }
    fetch();
}

function paginate(page) {
    if (page) {
        params.value.currentPage = page;
    }
    fetch();
}

function fetch() {
    axios.get(route('api.clients.index', getParams.value))
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
        swal({
            title: 'Видалити?',
            icon: 'warning',
            showCancelButton: true,
        }).then((result) => {
            if (result.isConfirmed) {
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
        });
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
