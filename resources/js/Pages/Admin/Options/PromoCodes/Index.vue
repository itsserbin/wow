<script setup>
import {reactive, onMounted, inject, ref, computed} from "vue";
import {swal} from "@/Includes/swal";

import Modal from '@/Pages/Admin/Options/PromoCodes/Modal.vue';
import OptionsLayout from '@/Pages/Admin/Options/OptionsLayout.vue'
import Table from '@/Pages/Admin/Options/PromoCodes/Table.vue';
import Loader from '@/Components/Loader.vue';
import Button from '@/Components/Button.vue';
import Paginate from '@/Components/Paginate.vue';

const can = inject('$can');

const item = reactive({
    code: null,
    percent_discount: null,
    discount_in_hryvnia: null,
    end_date: null,
    published: 0,
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
    axios.get(route('api.promo-codes.index', {'page': state.value.currentPage}))
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
    if (can('destroy-promo-codes')) {
        swal({
            title: 'Видалити?',
            icon: 'warning',
            showCancelButton: true,
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(route('api.promo-codes.destroy', id))
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
    if (can('edit-promo-codes')) {
        axios.get(route('api.promo-codes.edit', id))
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
    if (can('edit-promo-codes')) {
        axios.put(route('api.promo-codes.update', state.value.item.id), state.value.item)
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
    if (can('create-promo-codes')) {
        axios.post(route('api.promo-codes.create'), state.value.item)
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
    if (state.value.modalAction === 'edit' && can('edit-promo-codes')) {
        onUpdate();
    } else if (state.value.modalAction === 'create' && can('create-promo-codes')) {
        onCreate();
    }
}

function create() {
    if (can('create-promo-codes')) {
        Object.assign(state.value.item, item);
        state.value.modalAction = 'create';
        modalFunction();
    }
}

</script>

<template>
    <OptionsLayout title="Промо-коди">
        <template #header>
            Промо-коди
        </template>

        <Loader v-if="state.isLoading"/>
        <div v-if="!state.isLoading && can('show-promo-codes')">
            <Button type="btn" @click="create" v-if="can('create-promo-codes')">
                Додати
            </Button>

            <Table :data="state.data.data"
                   @onEdit="onEdit"
                   @onDestroy="onDestroy"
                   :canDestroy="can('destroy-promo-codes')"
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
                       :canDestroy="can('destroy-promo-codes')"
            ></component>
        </div>
    </OptionsLayout>
</template>
