<script setup>
import {onMounted, inject, ref, computed} from "vue";
import {swal} from "@/Includes/swal";

import RolesModal from '@/Pages/Admin/Options/Roles/Modal.vue';
import OptionsLayout from '@/Pages/Admin/Options/OptionsLayout.vue'
import Table from '@/Pages/Admin/Options/Roles/Table.vue'
import Loader from '@/Components/Loader.vue';
import Button from '@/Components/Button.vue';
import Paginate from '@/Components/Paginate.vue';

const can = inject('$can');

const item = ({
    name: null,
    slug: null,
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

const activeModal = computed(() => state.value.isActiveModal ? RolesModal : null)

function fetch(page) {
    state.value.isLoading = true;
    if (page) {
        state.value.currentPage = page;
    }
    axios.get(route('api.roles.index', {'page': state.value.currentPage}))
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
    if (can('destroy-roles')) {
        swal({
            title: 'Видалити?',
            icon: 'warning',
            showCancelButton: true,
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(route('api.roles.destroy', id))
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
    if (can('edit-roles')) {
        axios.get(route('api.roles.edit', id))
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
    if (can('edit-roles')) {
        axios.put(route('api.roles.update', state.value.item.id), state.value.item)
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
    if (can('create-roles')) {
        axios.post(route('api.roles.create'), state.value.item)
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
    if (state.value.modalAction === 'edit' && can('edit-roles')) {
        onUpdate();
    } else if (state.value.modalAction === 'create' && can('create-roles')) {
        onCreate();
    }
}

function create() {
    if (can('create-roles')) {
        Object.assign(state.value.item, item);
        state.value.modalAction = 'create';
        modalFunction();
    }
}
</script>

<template>
    <OptionsLayout title="Ролі">
        <template #header>
            Ролі
        </template>

        <Loader v-if="state.isLoading"/>
        <div v-if="!state.isLoading && can('show-roles')" class="grid grid-cols-1 gap-4">
            <div>
                <Button type="btn" @click="create" v-if="can('create-roles')">
                    Додати
                </Button>
            </div>

            <Table :data="state.data.data"
                   @onEdit="onEdit"
                   @onDestroy="onDestroy"
                   :canDestroy="can('destroy-roles')"
            />

            <div class="text-center">
                <Paginate :pagination="state.data"
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
                   :canDestroy="can('destroy-roles')"
        ></component>
    </OptionsLayout>
</template>
