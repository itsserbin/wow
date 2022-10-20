<template>
    <OptionsLayout title="Банера">
        <template #header>
            Банера
        </template>

        <loader-component v-if="state.isLoading"/>
        <div v-if="!state.isLoading && can('show-banners')">
            <button-component type="btn" @click="create" v-if="can('create-banners')">
                Додати
            </button-component>

            <Table :data="state.data.data"
                   @onEdit="onEdit"
                   @onDestroy="onDestroy"
                   :canDestroy="can('destroy-banners')"
            />

            <pagination :pagination="state.data"
                        :click-handler="fetch"
                        v-model="state.currentPage"
            />
            <component :is="activeModal"
                       :item="state.item"
                       @closeModal="modalFunction"
                       @submitForm="submitForm"
                       @declineForm="onDestroy"
                       @onUploadImage="uploadImage"
                       :canDestroy="can('destroy-banners')"
            ></component>
        </div>
    </OptionsLayout>
</template>

<script setup>
import {reactive, onMounted, inject, ref, computed} from "vue";
import BannersModal from '@/Pages/Admin/Options/Banners/Modal.vue';
import OptionsLayout from '@/Pages/Admin/Options/OptionsLayout.vue'
import Table from '@/Pages/Admin/Options/Banners/Table.vue';

const swal = inject('$swal')
const can = inject('$can');

const item = reactive({
    title: {
        ua: null,
        ru: null,
    },
    image_mobile: {
        ua: null,
        ru: null,
    },
    image_table: {
        ua: null,
        ru: null,
    },
    image_desktop: {
        ua: null,
        ru: null,
    },
    link: {
        ua: null,
        ru: null,
    },
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

const activeModal = computed(() => state.value.isActiveModal ? BannersModal : null)


function fetch(page) {
    state.value.isLoading = true;
    if (page) {
        state.value.currentPage = page;
    }
    axios.get(route('api.banners.index', {'page': state.value.currentPage}))
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
    if (can('destroy-banners')) {
        swal({
            title: 'Видалити?',
            icon: 'warning',
            showCancelButton: true,
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(route('api.banners.destroy', id))
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
    if (can('edit-banners')) {
        axios.get(route('api.banners.edit', id))
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
    if (can('edit-banners')) {
        axios.put(route('api.banners.update', state.value.item.id), state.value.item)
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
    if (can('create-banners')) {
        axios.post(route('api.banners.create'), state.value.item)
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
    if (state.value.modalAction === 'edit' && can('edit-banners')) {
        onUpdate();
    } else if (state.value.modalAction === 'create' && can('create-banners')) {
        onCreate();
    }
}

function create() {
    if (can('create-banners')) {
        Object.assign(state.value.item, item);
        state.value.modalAction = 'create';
        modalFunction();
    }
}


function uploadImage(image, device, lang) {
    let formData = new FormData();
    formData.append('type', device);
    formData.append('banner', image);
    axios.post(route('api.banners.upload'), formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
        .then(({data}) => {
            if (device === 'mobile') {
                if (lang === 'ru') {
                    state.value.item.image_mobile.ru = data.result;
                }
                if (lang === 'ua') {
                    state.value.item.image_mobile.ua = data.result;
                }
            }
            if (device === 'table') {
                if (lang === 'ru') {
                    state.value.item.image_table.ru = data.result;
                }
                if (lang === 'ua') {
                    state.value.item.image_table.ua = data.result;
                }
            }
            if (device === 'desktop') {
                if (lang === 'ru') {
                    state.value.item.image_desktop.ru = data.result;
                }
                if (lang === 'ua') {
                    state.value.item.image_desktop.ua = data.result;
                }
            }
        })
        .catch((response) => console.log(response));
}
</script>
