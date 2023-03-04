<template>
    <CrmLayout title="Клієнти">
        <template #header>
            Клієнти
        </template>

        <Loader v-if="state.isLoading"/>

        <div v-if="!state.isLoading && can('show-clients')">
            <div class="grid grid-cols-1 md:grid-cols-5 gap-4">
                <div class="md:col-span-1">
                    <Sidebar class="mb-5">
                        <SidebarItem v-if="sidebar.length"
                                     v-for="item in sidebar"
                                     @click="sortByStatus(item.key)"
                                     :active="state.sidebarActive === item.key"
                        >
                            {{ item.title }}
                        </SidebarItem>
                    </Sidebar>

                    <Sidebar v-if="can('export-orders')">
                        <SidebarItem v-if="exportSidebar.length"
                                     v-for="item in exportSidebar"
                                     @click="exportFunction(item.key)"
                        >
                            {{ item.title }}
                        </SidebarItem>
                    </Sidebar>
                </div>
                <div class="w-full md:col-span-4 grid grid-cols-1 gap-4">
                    <Search @search="search"
                            :clear="true"
                            placeholder="Імʼя, прізвище, по-батькові, телефон, email, коментар..."
                    />
                    <Table :data="state.data.data"
                           @onEdit="onEdit"
                           @onDestroy="destroy"
                           @orderBy="orderBy"
                           :statuses="state.statuses"
                           :canDestroy="can('destroy-clients')"
                    />
                    <div class="text-center">
                        <Paginate :pagination="state.data"
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
                       :canDestroy="can('destroy-clients')"
            ></component>
        </div>
    </CrmLayout>
</template>

<script setup>
import {computed, inject, onMounted, reactive, ref} from "vue";
import Modal from '@/Pages/Admin/Crm/Clients/Modal.vue';
import Table from '@/Pages/Admin/Crm/Clients/Table.vue';
import CrmLayout from '@/Pages/Admin/Crm/CrmLayout.vue';
import Loader from '@/Components/Loader.vue';
import Sidebar from '@/Components/Sidebar/Sidebar.vue';
import SidebarItem from '@/Components/Sidebar/SidebarItem.vue';
import Search from '@/Components/Search.vue';
import Paginate from '@/Components/Paginate.vue';

const exportSidebar = [
    {
        title: 'Експортувати',
        key: 'export'
    }
];

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
    orderBy: {
        key: null,
        val: null
    }
})

const getParams = computed(() => {
    const {currentPage, status = null, orderBy = null} = params.value;
    return {page: currentPage, status, orderBy};
});

const orderBy = (key, val) => {
    params.value.orderBy = {
        key: key,
        val: val
    }
    params.value.currentPage = 1;
    fetch();
}

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
        });

    if (route().params.id) {
        state.value.isLoading = true;
        onEdit(route().params.id);
    }
});

const editModal = computed(() => state.value.isActiveEditModal ? Modal : null);

const exportFunction = (key) => {
    if (key === 'export') {
        window.location.href = route('admin.crm.clients.export');
    }
}

const search = async (query) => {
    await axios.get(route('api.clients.search', {search: query}))
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

const sortByStatus = (status) => {
    state.value.sidebarActive = status;
    params.value.status = status === 'all' ? null : status;
    fetch();
}

const paginate = async (page) => {
    if (page) {
        params.value.currentPage = page;
    }
    await fetch();
}

const fetch = async () => {
    await axios.get(route('api.clients.index', getParams.value))
        .then(({data}) => {
            state.value.data = data.result;
            state.value.isLoading = false;
        })
        .catch(errors => {
            console.log(errors);
            state.value.isLoading = false;
        })
}

const destroy = async (id) => {
    if (can('destroy-clients')) {
        swal({
            title: 'Видалити?',
            icon: 'warning',
            showCancelButton: true,
        }).then(async (result) => {
            if (result.isConfirmed) {
                await axios.delete(route('api.clients.destroy', id))
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

const onEdit = async (id, i) => {
    await axios.get(route('api.clients.edit', id))
        .then(({data}) => {
            state.value.modal.index = i;
            state.value.modal = data.result;
            editModalFunction();
            state.value.isLoading = false;
        })
        .catch((errors) => console.log(errors))
}

const onUpdate = async () => {
    await axios.put(route('api.clients.update', state.value.modal.id), state.value.modal)
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

const editModalFunction = () => {
    state.value.isActiveEditModal = !state.value.isActiveEditModal;
}
</script>
