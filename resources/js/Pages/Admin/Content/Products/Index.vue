<template>
    <ContentLayout title="Товари">
        <template #header>
            Товари
        </template>

        <loader-component v-if="state.isLoading"/>
        <div v-if="!state.isLoading && can('show-products')" class="grid gap-4 grid-cols-1">
            <div>
                <button-component type="btn" @click="create" v-if="can('create-products')">
                    Додати
                </button-component>
            </div>

            <div class="grid grid-cols-1 gap-4">
                <search-component @search="search"
                                  :clear="true"
                                  placeholder="ID або артикул"
                                  @onClear="fetch"
                />
                <Table :data="state.products.data"
                       @onEdit="onEdit"
                       @onDestroy="onDestroy"
                       :canDestroy="can('destroy-products')"
                />
            </div>

            <div class="text-center">
                <pagination :pagination="state.products"
                            :click-handler="fetch"
                            v-model="state.currentPage"
                />
            </div>
        </div>
        <component :is="activeModal"
                   :product="state.item"
                   @closeModal="modalFunction"
                   @submitForm="submitForm"
                   @declineForm="onDestroy"
                   @setProductImages="setProductImages"
                   @destroyImage="destroyImage"
                   :canDestroy="can('destroy-products')"
        ></component>
    </ContentLayout>
</template>

<script setup>
import {reactive, onMounted, inject, ref, computed} from "vue";
import ProductModal from '@/Pages/Admin/Content/Products/Modal.vue';
import Table from '@/Pages/Admin/Content/Products/Table.vue'
import ContentLayout from '@/Pages/Admin/Content/ContentLayout.vue'

const swal = inject('$swal')
const can = inject('$can');

const product = reactive({
    status: null,
    title: {
        ru: null,
        ua: null
    },
    characteristics: {
        ru: null,
        ua: null,
    },
    description: {
        ru: null,
        ua: null
    },
    h1: {
        ru: null,
        ua: null
    },
    content: {
        ru: null,
        ua: null
    },
    published: 0,
    preview: null,
    size_table: null,
    price: null,
    trade_price: null,
    discount_price: null,
    categories: [],
    vendor_code: null,
    provider_id: null,
    youtube: null,
    sizes: [],
    images: [],
    colors: [],
})

const state = ref({
    products: [],
    currentPage: 1,
    isLoading: true,
    isActiveModal: false,
    modalAction: '',
    item: product,
});

onMounted(() => {
    let id = new URLSearchParams(new URL(window.location.href).search).get('product');
    if (id) {
        onEdit(id);
    }

    fetch(1);
})

const activeModal = computed(() => state.value.isActiveModal ? ProductModal : null)

function search(query) {
    state.value.isLoading = true;
    axios.get(route('api.products.search', query))
        .then(({data}) => {
            state.value.currentPage = 1;
            state.value.products = data.result;
            state.value.isLoading = false;
        })
        .catch(errors => {
            console.log(errors);
            state.value.isLoading = false;
        })
}

function fetch(page) {
    state.value.isLoading = true;
    if (page) {
        state.value.currentPage = page;
    }
    axios.get(route('api.products.index', {'page': state.value.currentPage}))
        .then(({data}) => {
            state.value.products = data.result;
            state.value.isLoading = false;
        })
        .catch(errors => {
            console.log(errors);
            state.value.isLoading = false;
        })
}

function onDestroy(id) {
    if (can('destroy-products')) {
        swal({
            title: 'Видалити?',
            icon: 'warning',
            showCancelButton: true,
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(route('api.products.destroy', id))
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

function onEdit(id) {
    axios.get(route('api.products.edit', id))
        .then(({data}) => {
            state.value.item = data.result;
            state.value.modalAction = 'edit';
            modalFunction();
        })
        .catch((response) => console.log(response))
}

function onUpdate() {
    if (can('edit-products')) {
        axios.put(route('api.products.update', state.value.item.id), state.value.item)
            .then(({data}) => {
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
    if (can('create-products')) {
        axios.post(route('api.products.create'), state.value.item)
            .then(({data}) => {
                modalFunction();
                state.value.products.data.unshift(data.result)
                state.value.item = product;
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
    if (state.value.modalAction === 'edit' && can('edit-products')) {
        onUpdate();
    } else if (state.value.modalAction === 'create' && can('create-products')) {
        onCreate();
    }
}

function create() {
    if (can('create-products')) {
        state.value.item = product;
        state.value.modalAction = 'create';
        modalFunction();
    }
}

function setProductImages(images) {
    state.value.item.images = state.value.item.images.concat(images);
}

function destroyImage(image) {
    let index = state.value.item.images.findIndex((item) => {
        return item.id === image;
    })
    state.value.item.images.splice(index, 1)
}
</script>
