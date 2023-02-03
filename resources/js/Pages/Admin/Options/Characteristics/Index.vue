<template>
    <OptionsLayout title="Характеристики товарів">
        <template #header>
            Характеристики товарів
        </template>

        <Loader v-if="state.isLoading"/>
        <div v-if="!state.isLoading && can('show-characteristics')" class="grid grid-cols-1 gap-4">
            <div>
                <Button type="btn" @click="create" v-if="can('create-characteristics')">
                    Додати
                </Button>
            </div>

            <Table :data="state.data.data"
                   @onEdit="onEdit"
                   @onDestroy="onDestroy"
                   :canDestroy="can('destroy-characteristics')"
            />

            <div class="text-center">
                <Paginate :pagination="state.data"
                          :click-handler="fetch"
                          v-model="params.currentPage"
                />
            </div>
        </div>
        <component :is="activeModal"
                   :item="state.item"
                   @closeModal="modalFunction"
                   @submitForm="submitForm"
                   @declineForm="onDestroy"
                   :canDestroy="can('destroy-characteristics')"
        ></component>
    </OptionsLayout>
</template>

<script setup>
import {reactive, onMounted, inject, ref, computed} from "vue";
import Button from '@/Components/Button.vue';
import Loader from '@/Components/Loader.vue';
import Paginate from '@/Components/Paginate.vue';
import Modal from '@/Pages/Admin/Options/Characteristics/Modal.vue';
import OptionsLayout from '@/Pages/Admin/Options/OptionsLayout.vue'
import Table from '@/Pages/Admin/Options/Characteristics/Table.vue'
import {CharacteristicsRepository} from "@/Repositories/CharacteristicsRepository.js";

const swal = inject('$swal')
const can = inject('$can');

const params = ref({
    currentPage: 1,
})

const item = {
    title: {
        ua: null,
        ru: null
    },
    values: [
        {
            title: {
                ua: null,
                ru: null
            }
        }
    ]
};

const state = ref({
    data: [],
    isLoading: true,
    isActiveModal: false,
    modalAction: '',
    item: {},
});

onMounted(() => {
    fetch(1);
})

const activeModal = computed(() => state.value.isActiveModal ? Modal : null)

async function fetch() {
    try {
        const data = await CharacteristicsRepository().fetch(params.value);
        if (data.success) {
            state.value.data = data.result;
        }
        state.value.isLoading = false;
    } catch (e) {
        console.error(e);
        state.value.isLoading = false;
    }
}

async function onDestroy(id) {
    try {
        if (can('destroy-characteristics')) {
            const confirm = await swal({
                title: 'Видалити?',
                icon: 'warning',
                showCancelButton: true,
            });
            if (confirm.isConfirmed) {
                await CharacteristicsRepository().destroy(id);
                state.value.isLoading = false;
                await fetch();
                if (state.value.isActiveModal) {
                    modalFunction();
                }
                swal({
                    title: 'Success!',
                    icon: 'success'
                });
            }
        }
    } catch (errors) {
        console.error(errors);
        swal({
            title: 'Error!',
            icon: 'error',
            text: errors.response.data.message || 'An error occurred, please try again later'
        });
    }
}

function modalFunction() {
    state.value.isActiveModal = !state.value.isActiveModal;
}

async function onEdit(id, i) {
    try {
        const {result, success} = await CharacteristicsRepository().edit(id);
        if (success) {
            state.value.item.index = i;
            state.value.item = result;
            state.value.modalAction = 'edit';
            modalFunction();
            state.value.isLoading = false;
        }
    } catch (error) {
        state.value.isLoading = false;
        console.error(error);
        swal({
            title: 'Error!',
            icon: 'error',
            text: error.response.data.message || 'An error occurred, please try again later'
        });
    }
}

async function onUpdate() {
    try {
        if (can('edit-characteristics')) {
            const {success} = await CharacteristicsRepository().update(state.value.item.id, state.value.item);
            if (success) {
                modalFunction();
                await fetch();
                swal({
                    title: 'Success!',
                    icon: 'success'
                })
            }
        }
    } catch (error) {
        state.value.isLoading = false;
        console.error(error);
        swal({
            title: 'Error!',
            icon: 'error',
            text: error.response.data.message || 'An error occurred, please try again later'
        });
    }
}

async function onCreate() {
    try {
        if (can('create-characteristics')) {
            const {success} = await CharacteristicsRepository().create(state.value.item);
            if (success) {
                state.value.item = {};
                modalFunction();
                await fetch();
                swal({
                    title: 'Success!',
                    icon: 'success'
                })
            }
        }
    } catch (error) {
        state.value.isLoading = false;
        console.error(error);
        swal({
            title: 'Error!',
            icon: 'error',
            text: error || 'An error occurred, please try again later'
        });
    }
}

function submitForm() {
    if (state.value.modalAction === 'edit' && can('edit-characteristics')) {
        onUpdate();
    } else if (state.value.modalAction === 'create' && can('create-characteristics')) {
        onCreate();
    }
}

function create() {
    if (can('create-characteristics')) {
        state.value.item = JSON.parse(JSON.stringify(item));
        state.value.modalAction = 'create';
        modalFunction();
    }
}
</script>
