<template>
    <CrmLayout title="Рахунки">
        <template #header>Рахунки</template>

        <loader-component v-if="state.isLoading"/>
        <div v-if="!state.isLoading && can('show-invoices')">
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

                <div class="w-full md:col-span-4 grid gap-4 grid-cols-1">
                    <div>
                        <button-component type="btn" @click="create" v-if="can('create-invoices')">
                            Додати
                        </button-component>
                    </div>

                    <Table :data="state.data.data"
                           :statuses="statuses"
                           @onEdit="onEdit"
                           @onDestroy="onDestroy"
                           :can-destroy="can('destroy-invoices')"
                           @onSendInvoiceSms="onSendInvoiceSms"
                    />

                    <div class="text-center">
                        <pagination :pagination="state.data"
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
                       :can-destroy="can('destroy-invoices')"
            ></component>
        </div>
    </CrmLayout>
</template>

<script setup>
import {reactive, onMounted, inject, ref, computed} from "vue";
import Modal from '@/Pages/Admin/Crm/Invoices/Modal.vue';
import Table from '@/Pages/Admin/Crm/Invoices/Table.vue';
import CrmLayout from '@/Pages/Admin/Crm/CrmLayout.vue';
import CryptoJS from "crypto-js";
import hmacMD5 from "crypto-js/hmac-md5";

const props = defineProps(['statuses']);
const swal = inject('$swal')
const can = inject('$can');

const item = reactive({
    order_id: null,
    sum: null,
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
    axios.get(route('api.invoices.index', getParams.value))
        .then(({data}) => {
            state.value.data = data.result;
            state.value.isLoading = false;
        })
        .catch(errors => {
            console.log(errors);
            state.value.isLoading = false;
        })
}

function onDestroy(id) {
    if (can('destroy-invoices')) {
        swal({
            title: 'Видалити?',
            icon: 'warning',
            showCancelButton: true,
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(route('api.invoices.destroy', id))
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
    if (can('edit-invoices')) {
        axios.get(route('api.invoices.edit', id))
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
    if (can('edit-invoices')) {
        axios.put(route('api.invoices.update', state.value.item.id), state.value.item)
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
    if (can('create-invoices')) {
        axios.post(route('api.invoices.create'), state.value.item)
            .then(({data}) => {
                state.value.item = data.result;
                state.value.modalAction = 'edit';
                modalFunction();
                fetch();
                navigator.clipboard.writeText(data.result.data.invoice_url);
                swal({
                    title: 'Успішно!',
                    text: 'Рахунок був успішно створений, посилання на оплату скопійовано в буфер обміну',
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
    if (state.value.modalAction === 'edit' && can('edit-invoices')) {
        onUpdate();
    } else if (state.value.modalAction === 'create' && can('create-invoices')) {
        onCreate();
    }
}

function create() {
    if (can('create-invoices')) {
        state.value.item = item;
        state.value.modalAction = 'create';
        modalFunction();
    }
}

function onSendInvoiceSms() {
    swal({
        title: 'Успішно',
        text: 'Посилання на оплату надіслано клієнту',
        icon: 'success'
    });
    fetch();
}
</script>
