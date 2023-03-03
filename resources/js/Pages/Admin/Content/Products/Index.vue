<template>
    <ContentLayout :title="$t('products.page_title')">
        <template #header>{{ $t('products.page_title') }}</template>

        <Loader v-if="state.isLoading"/>
        <div v-if="!state.isLoading && can('show-products')" class="grid gap-4 grid-cols-1">
            <div>
                <Button type="btn" @click="create" v-if="can('create-products')">
                    {{ $t('add') }}
                </Button>
            </div>

            <div class="grid grid-cols-1 gap-4">
                <Search @search="search"
                        :clear="true"
                        :placeholder="$t('products.search_placeholder')"
                        @onClear="fetch"
                />
                <Table :data="state.products.data"
                       @onEdit="onEdit"
                       @onDestroy="onDestroy"
                       :canDestroy="can('destroy-products')"
                       @onUpdateProductSort="onUpdateProductSort"
                />
            </div>

            <div class="text-center">
                <Paginate :pagination="state.products"
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
                   @setProductImages="setProductImages"
                   @destroyImage="destroyImage"
                   :canDestroy="can('destroy-products')"
        ></component>
    </ContentLayout>
</template>

<script setup>
import ProductModal from '@/Pages/Admin/Content/Products/Modal.vue';
import Table from '@/Pages/Admin/Content/Products/Table.vue'
import Loader from '@/Components/Loader.vue'
import Button from '@/Components/Button.vue'
import Paginate from '@/Components/Paginate.vue'
import Search from '@/Components/Search.vue'
import ContentLayout from '@/Pages/Admin/Content/ContentLayout.vue'

import {reactive, onMounted, inject, ref, computed} from "vue";
import ProductsRepository from "@/Repositories/ProductsRepository";
import {useI18n} from 'vue-i18n';

const swal = inject('$swal')
const can = inject('$can');
const {t} = useI18n();

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
    characteristicsNew: {},
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
    errors: []
});

onMounted(() => {
    let id = new URLSearchParams(new URL(window.location.href).search).get('product');
    if (id) {
        onEdit(id);
    }

    fetch(1);
})

const activeModal = computed(() => state.value.isActiveModal ? ProductModal : null)

const search = async (query) => {
    state.value.isLoading = true;
    const data = await ProductsRepository.search(query);
    if (data.success) {
        state.value.currentPage = 1;
        state.value.products = data.result;
    }
    state.value.isLoading = false;
}

const fetch = async (page) => {
    state.value.isLoading = true;
    if (page) {
        state.value.currentPage = page;
    }
    const data = await ProductsRepository.fetch({'page': state.value.currentPage});
    state.value.products = data.success ? data.result : [];
    state.value.isLoading = false;
}

const onDestroy = async (id) => {
    if (can('destroy-products')) {
        const result = await swal({
            title: t('swal.sure'),
            icon: 'warning',
            showCancelButton: true,
        })
        if (result.isConfirmed) {
            const {success} = await ProductsRepository.destroy(id);
            if (success) {
                await fetch();
                if (state.value.isActiveModal) {
                    modalFunction();
                }
                await swal({
                    icon: 'success',
                    title: t('swal.destroyed')
                })
            }
        }
    }
}

const modalFunction = () => {
    state.value.isActiveModal = !state.value.isActiveModal;
}

const onEdit = async (id) => {
    state.value.isLoading = true;
    const data = await ProductsRepository.edit(id);
    if (data.success) {
        state.value.item = data.result;
        state.value.item.characteristicsNew = {};
        if (state.value.item.characteristics_new.length) {
            state.value.item.characteristics_new.forEach((item) => {
                state.value.item.characteristicsNew[item.characteristic_id] = [];
            })
            state.value.item.characteristics_new.forEach((item) => {
                state.value.item.characteristicsNew[item.characteristic_id].push(item);
            })
        }
        state.value.modalAction = 'edit';
        modalFunction();
    }
    state.value.isLoading = false;
}

const onUpdate = async () => {
    if (can('edit-products')) {
        const data = await ProductsRepository.update(state.value.item);
        if (data.success) {
            modalFunction();
            await fetch();
            await swal({
                title: t('swal.updated'),
                icon: 'success'
            })
        } else {
            state.value.errors = data;
            console.log(data);
            await swal({
                title: t('swal.error'),
                icon: 'error',
                text: t('swal.check_data')
            })
        }
    }
}

const onCreate = async () => {
    if (can('create-products')) {
        const data = await ProductsRepository.create(state.value.item);
        if (data.success) {
            modalFunction();
            state.value.item = product;
            await fetch();
            await swal({
                title: t('swal.created'),
                icon: 'success'
            });
        } else {
            state.value.errors = data;
            console.log(data);
            await swal({
                title: t('swal.error'),
                text: t('swal.check_data'),
                icon: 'error'
            })
        }
    }
}

const submitForm = async () => {
    if (state.value.modalAction === 'edit' && can('edit-products')) {
        await onUpdate();
    } else if (state.value.modalAction === 'create' && can('create-products')) {
        await onCreate();
    }
}

const create = () => {
    if (can('create-products')) {
        state.value.item = product;
        state.value.modalAction = 'create';
        modalFunction();
    }
}

const setProductImages = (images) => {
    state.value.item.images = state.value.item.images.concat(images);
}

const destroyImage = (image) => {
    let index = state.value.item.images.findIndex((item) => {
        return item.id === image;
    })
    state.value.item.images.splice(index, 1)
}

const onUpdateProductSort = async (product_id, sort) => {
    state.value.isLoading = true;
    const data = await ProductsRepository.updateSort(product_id, sort);
    if (data.success) {
        await swal({
            title: t('swal.updated'),
            icon: 'success'
        })
    }
    state.value.isLoading = false;
}
</script>
