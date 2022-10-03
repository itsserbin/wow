<template>
    <OptionsLayout title="Постачальники">
        <template #header>
            Постачальники
        </template>

        <loader-component v-if="state.isLoading"/>
        <div v-if="!state.isLoading">
            <button-component type="btn" @click="create" v-if="can('create-providers')">
                Додати
            </button-component>

            <table-component :headings="headings"
                             :isSlotMode="true"
                             :rows="state.providers.data"
            >
                <template v-slot:id="{data}">
                    <a href="javascript:" @click="onEdit(data.row.id,data.i)">
                        {{ data.row.id }}
                    </a>
                </template>

                <template v-slot:refunds="{data}">
                    {{ $filters.yesOrNo(data.row.refunds) }}
                </template>

                <template v-slot:prepayment="{data}">
                    {{ $filters.yesOrNo(data.row.prepayment) }}
                </template>

                <template v-slot:timestamps="{data}">
                    {{ $filters.dateFormat(data.row.updated_at) }}
                    <hr class="my-1">
                    {{ $filters.dateFormat(data.row.created_at) }}
                </template>

                <template v-slot:actions="{data}">
                    <a href="javascript:" @click="onDestroy(data.row.id)">
                        <xcircle-component/>
                    </a>
                </template>
            </table-component>
            <paginate  :pagination="state.providers"
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
    </OptionsLayout>
</template>

<script setup>
import {reactive, onMounted, inject, ref, computed} from "vue";
import ProviderModal from '@/Pages/Admin/Options/Providers/Modal.vue';
import OptionsLayout from '@/Pages/Admin/Options/OptionsLayout.vue';

const swal = inject('$swal')
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

const headings = reactive([
    {
        label: 'ID',
        key: 'id'
    },
    {
        label: 'Назва',
        key: 'name'
    },
    {
        label: 'Каталог',
        key: 'catalog'
    },
    {
        label: 'Наявність',
        key: 'availability'
    },
    {
        label: 'Повернення',
        key: 'refunds'
    },
    {
        label: 'Передоплата',
        key: 'prepayment'
    },
    {
        label: 'Комментар',
        key: 'comment'
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
