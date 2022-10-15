<template>
    <auth-layout title="Товари">
        <template #header>
            Товари
        </template>

        <loader-component v-if="state.isLoading"/>
        <div v-if="!state.isLoading">
            <button-component type="btn" @click="create" v-if="can('create-products')">
                Додати
            </button-component>

            <lang-tabs @clickLang="changeLang"/>

            <table-component :headings="headings"
                             :isSlotMode="true"
                             :rows="state.products.data"
            >
                <template v-slot:id="{data}">
                    <a href="javascript:" @click="onEdit(data.row.id,data.i)">
                        {{ data.row.id }}
                    </a>
                </template>

                <template v-slot:title="{data}">
                    {{
                        state.activeLang === 'ua' ? data.row.h1.ua :
                            (state.activeLang === 'ru' ? data.row.h1.ru : null)
                    }}
                </template>

                <template v-slot:published="{data}">
                    {{ $filters.publishedStatus(data.row.published) }}
                </template>

                <template v-slot:price="{data}">
                    {{ $filters.formatMoney(data.row.price) }}
                </template>

                <template v-slot:discount_price="{data}">
                    {{ $filters.formatMoney(data.row.discount_price) }}
                </template>

                <template v-slot:preview="{data}">
                    <img :src="route('images.products.55',data.row.preview)"
                         :alt="state.activeLang === 'ua' ? data.row.h1.ua :
                            (state.activeLang === 'ru' ? data.row.h1.ru : null)"
                         class="mx-auto"
                    >
                </template>

                <template v-slot:actions="{data}">
                    <a href="javascript:" @click="onDestroy(data.row.id)">
                        <xcircle-component/>
                    </a>
                </template>
            </table-component>

            <paginate :pagination="state.products"
                      :click-handler="fetch"
                      v-model="state.currentPage"
            />

            <component :is="activeModal"
                       :product="state.item"
                       @closeModal="modalFunction"
                       @submitForm="submitForm"
                       @declineForm="onDestroy"
                       @setProductImages="setProductImages"
                       @destroyImage="destroyImage"
            ></component>
        </div>
    </auth-layout>
</template>

<script setup>
import {reactive, onMounted, inject, ref, computed} from "vue";
import ProductModal from '@/Pages/Admin/Products/Modal.vue';

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
    providers: null,
    sizes: [],
    images: [],
    colors: [],
})

const defaultLang = inject('$defaultLang');

const state = ref({
    products: [],
    currentPage: 1,
    isLoading: true,
    isActiveModal: false,
    modalAction: '',
    activeLang: defaultLang,
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

const headings = reactive([
    {
        label: 'ID',
        key: 'id'
    },
    {
        label: 'Головне зображення',
        key: 'preview'
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
        label: 'Артикул',
        key: 'vendor_code'
    },
    {
        label: 'Ціна',
        key: 'price'
    },
    {
        label: 'Ціна зі знижкою',
        key: 'discount_price'
    },
    {
        label: 'Сортування',
        key: 'sort'
    },
    {
        label: "Переглядів<hr class='my-1'>Покупок",
        key: 'sort'
    },
    {
        label: '#',
        key: 'actions'
    }
]);

function changeLang(val) {
    state.value.activeLang = val;
}

function fetch(page) {
    state.value.isLoading = true;
    if (page) {
        state.value.currentPage = page;
    }
    axios.get(route('api.products.index', {'page': state.value.currentPage}))
        .then(response => {
            Object.assign(state.value.products, response.data.result);
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
                Object.assign(state.value.products.data[state.value.item.index], data.result);
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
