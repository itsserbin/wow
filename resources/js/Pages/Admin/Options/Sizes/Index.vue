<template>
    <OptionsLayout title="Кольори">
        <template #header>
            Кольори
        </template>

        <loader-component v-if="state.isLoading"/>
        <div v-if="!state.isLoading && can('show-sizes')">
            <button-component type="btn" @click="create" v-if="can('create-providers')">
                Додати
            </button-component>

            <table-component :headings="headings"
                             :isSlotMode="true"
                             :rows="state.sizes.data"
            >
                <template v-slot:id="{data}">
                    <a href="javascript:" @click="onEdit(data.row.id,data.i)">
                        {{ data.row.id }}
                    </a>
                </template>

                <template v-slot:published="{data}">
                    {{ $filters.publishedStatus(data.row.published) }}
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
            <pagination  :pagination="state.sizes"
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
import ColorModal from '@/Pages/Admin/Options/Sizes/Modal.vue';
import OptionsLayout from '@/Pages/Admin/Options/OptionsLayout.vue'

const swal = inject('$swal')
const can = inject('$can');

const item = ({
    published: 0,
    title: null,
})

const state = ref({
    sizes: [],
    currentPage: 1,
    isLoading: true,
    isActiveModal: false,
    modalAction: '',
    item: {},
});

onMounted(() => {
    fetch(1);
})

const activeModal = computed(() => state.value.isActiveModal ? ColorModal : null)

const headings = reactive([
    {
        label: 'ID',
        key: 'id'
    },
    {
        label: 'Назва',
        key: 'title'
    },
    {
        label: 'Статус публікації',
        key: 'published'
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
    axios.get(route('api.sizes.index', {'page': state.value.currentPage}))
        .then(response => {
            Object.assign(state.value.sizes, response.data.result);
            state.value.isLoading = false;
        })
        .catch(errors => {
            console.log(errors);
            state.value.isLoading = false;
        })
}

function onDestroy(id) {
    if (can('destroy-sizes')) {
        swal({
            title: 'Видалити?',
            icon: 'warning',
            showCancelButton: true,
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(route('api.sizes.destroy', id))
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
    if (can('edit-sizes')) {
        axios.get(route('api.sizes.edit', id))
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
    if (can('edit-sizes')) {
        axios.put(route('api.sizes.update', state.value.item.id), state.value.item)
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
    if (can('create-sizes')) {
        axios.post(route('api.sizes.create'), state.value.item)
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
}

function submitForm() {
    if (state.value.modalAction === 'edit' && can('edit-sizes')) {
        onUpdate();
    } else if (state.value.modalAction === 'create' && can('create-sizes')) {
        onCreate();
    }
}

function create() {
    if (can('create-sizes')) {
        Object.assign(state.value.item, item);
        state.value.modalAction = 'create';
        modalFunction();
    }
}
</script>
