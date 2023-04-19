<script setup>
import {reactive, onMounted, inject, ref, computed} from "vue";
import {swal} from "@/Includes/swal";

import Button from '@/Components/Button.vue';
import Loader from '@/Components/Loader.vue';
import Paginate from '@/Components/Paginate.vue';
import Modal from '@/Pages/Admin/Options/Advantages/Modal.vue';
import OptionsLayout from '@/Pages/Admin/Options/OptionsLayout.vue'
import Table from '@/Pages/Admin/Options/Advantages/Table.vue';

const can = inject('$can');

const item = reactive({
    text: {
        ua: null,
        ru: null,
    },
    icon: null,
    published: 0
})

const state = ref({
    data: [],
    currentPage: 1,
    isLoading: true,
    isActiveModal: false,
    modalAction: '',
    item: item,
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
    axios.get(route('api.advantages.index', {'page': state.value.currentPage}))
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
    if (can('destroy-advantages')) {
        swal({
            title: 'Видалити?',
            icon: 'warning',
            showCancelButton: true,
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(route('api.advantages.destroy', id))
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
    if (can('edit-advantages')) {
        axios.get(route('api.advantages.edit', id))
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
    if (can('edit-advantages')) {
        axios.put(route('api.advantages.update', state.value.item.id), state.value.item)
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
    if (can('create-advantages')) {
        axios.post(route('api.advantages.create'), state.value.item)
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
    if (state.value.modalAction === 'edit' && can('edit-advantages')) {
        onUpdate();
    } else if (state.value.modalAction === 'create' && can('create-advantages')) {
        onCreate();
    }
}

function create() {
    if (can('create-advantages')) {
        Object.assign(state.value.item, item);
        state.value.modalAction = 'create';
        modalFunction();
    }
}

</script>

<template>
    <OptionsLayout title="Переваги">
        <template #header>
            Переваги
        </template>

        <Loader v-if="state.isLoading"/>
        <div v-if="!state.isLoading && can('show-advantages')">
            <Button type="btn" @click="create" v-if="can('create-advantages')">
                Додати
            </Button>


            <Table :data="state.data.data"
                   @onEdit="onEdit"
                   @onDestroy="onDestroy"
                   :canDestroy="can('destroy-advantages')"
            />

            <Paginate :pagination="state.data"
                      :click-handler="fetch"
                      v-model="state.currentPage"
            />
            <component :is="activeModal"
                       :item="state.item"
                       @closeModal="modalFunction"
                       @submitForm="submitForm"
                       @declineForm="onDestroy"
                       :canDestroy="can('destroy-advantages')"
            ></component>
        </div>
    </OptionsLayout>
</template>
