<script setup>
import {reactive, onMounted, inject, ref, computed} from "vue";
import {swal} from "@/Includes/swal";

import Paginate from '@/Components/Paginate.vue';
import Loader from '@/Components/Loader.vue';
import Sidebar from '@/Components/Sidebar/Sidebar.vue';
import SidebarItem from '@/Components/Sidebar/SidebarItem.vue';
import Modal from '@/Pages/Admin/Crm/Callbacks/Modal.vue';
import Table from '@/Pages/Admin/Crm/Callbacks/Table.vue';
import CrmLayout from '@/Pages/Admin/Crm/CrmLayout.vue';

const props = defineProps(['statuses']);

const can = inject('$can');

const item = reactive({
    name: null,
    phone: null,
    comment: null,
    status: null,
})

const state = ref({
    data: [],
    isLoading: true,
    isActiveModal: false,
    modalAction: '',
    item: {},
    sidebarActive: 'all',
});

const sidebar = ref([]);

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

onMounted(() => {
    fetch(1);
    sidebar.value.push({title: 'Всі', key: 'all'});
    for (const [key, value] of Object.entries(props.statuses)) {
        sidebar.value.push({
            title: value,
            key: key,
        })
    }
})

const activeModal = computed(() => state.value.isActiveModal ? Modal : null)

function sortByStatus(status) {
    state.value.sidebarActive = status;
    if (status === 'all') {
        params.value.status = null
    } else {
        params.value.status = status
    }
    params.value.currentPage = 1;
    fetch();
}

function fetch(page) {
    state.value.isLoading = true;
    if (page) {
        state.value.currentPage = page;
    }
    axios.get(route('api.callbacks.index', getParams.value))
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

<template>
    <CrmLayout title="Зворотній звʼязок">
        <template #header>
            Зворотній звʼязок
        </template>

        <Loader v-if="state.isLoading"/>
        <div v-if="!state.isLoading && can('show-callbacks')">
            <div class="grid grid-cols-1 md:grid-cols-5 gap-4">

                <div class="md:col-span-1">
                    <Sidebar>
                        <SidebarItem v-if="sidebar.length"
                                     v-for="item in sidebar"
                                     @click="sortByStatus(item.key)"
                                     :active="state.sidebarActive === item.key"
                        >
                            {{ item.title }}
                        </SidebarItem>
                    </Sidebar>
                </div>
                <div class="w-full md:col-span-4 grid gap-4 grid-cols-1">
                    <Table :data="state.data.data"
                           :statuses="statuses"
                           @onEdit="onEdit"
                           @onDestroy="onDestroy"
                           :can-destroy="can('destroy-callbacks')"
                    />

                    <div class="text-center">
                        <Paginate :pagination="state.data"
                                  :click-handler="fetch"
                                  v-model="params.currentPage"
                        />
                    </div>
                </div>

            </div>

            <component :is="activeModal"
                       :item="state.item"
                       @closeModal="modalFunction"
                       @submitForm="submitForm"
                       @declineForm="onDestroy"
                       :statuses="statuses"
                       :can-destroy="can('destroy-callbacks')"
            ></component>
        </div>
    </CrmLayout>
</template>
