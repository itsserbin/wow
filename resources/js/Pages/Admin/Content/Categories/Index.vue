<template>
    <ContentLayout title="Категорії">
        <template #header>
            Категорії
        </template>

        <loader-component v-if="state.isLoading"/>
        <div v-if="!state.isLoading && can('show-categories')" class="grid gap-4 grid-cols-1">
            <div>
                <button-component type="btn" @click="create" v-if="can('create-categories')">
                    Додати
                </button-component>
            </div>

            <Table :data="state.categories.data"
                   @onEdit="onEdit"
                   @onDestroy="onDestroy"
                   :canDestroy="can('destroy-categories')"
            />

            <div class="text-center">
                <pagination :pagination="state.categories"
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
                   :canDestroy="can('destroy-categories')"
        ></component>
    </ContentLayout>
</template>

<script setup>
import {reactive, onMounted, inject, ref, computed} from "vue";
import Modal from '@/Pages/Admin/Content/Categories/Modal.vue';
import Table from '@/Pages/Admin/Content/Categories/Table.vue';
import ContentLayout from '@/Pages/Admin/Content/ContentLayout.vue'

const swal = inject('$swal')
const can = inject('$can');

const item = reactive({
    published: 0,
    slug: null,
    parent_id: null,
    preview_id: null,
    preview: null,
    title: {
        ru: null,
        ua: null
    },
    meta_title: {
        ru: null,
        ua: null
    },
    meta_description: {
        ru: null,
        ua: null
    },
    meta_keyword: {
        ru: null,
        ua: null
    },
    seo_text: {
        ru: null,
        ua: null
    }
})

const state = ref({
    categories: [],
    currentPage: 1,
    isLoading: true,
    isActiveModal: false,
    modalAction: '',
    item: {},
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
    axios.get(route('api.categories.index', {'page': state.value.currentPage}))
        .then(response => {
            Object.assign(state.value.categories, response.data.result);
            state.value.isLoading = false;
        })
        .catch(errors => {
            console.log(errors);
            state.value.isLoading = false;
        })
}

function onDestroy(id) {
    if (can('destroy-categories')) {
        swal({
            title: 'Видалити?',
            icon: 'warning',
            showCancelButton: true,
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(route('api.categories.destroy', id))
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
    if (can('edit-categories')) {
        axios.get(route('api.categories.edit', id))
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
    if (can('edit-categories')) {
        axios.put(route('api.categories.update', state.value.item.id), state.value.item)
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
    if (can('create-categories')) {

        axios.post(route('api.categories.create'), state.value.item)
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
    if (state.value.modalAction === 'edit' && can('edit-categories')) {
        onUpdate();
    } else if (state.value.modalAction === 'create' && can('create-categories')) {
        onCreate();
    }
}

function create() {
    if (can('create-categories')) {
        Object.assign(state.value.item, item);
        state.value.modalAction = 'create';
        modalFunction();
    }
}
</script>
