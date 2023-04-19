<script setup>
import Modal from '@/Pages/Admin/Content/Categories/Modal.vue';
import Table from '@/Pages/Admin/Content/Categories/Table.vue';
import ContentLayout from '@/Pages/Admin/Content/ContentLayout.vue'
import Loader from '@/Components/Loader.vue';
import Paginate from '@/Components/Paginate.vue';
import Button from '@/Components/Button.vue';
import CategoriesRepository from "@/Repositories/CategoriesRepository";

import {reactive, onMounted, inject, ref, computed} from "vue";
import {useI18n} from 'vue-i18n';
import {swal} from "@/Includes/swal";

const can = inject('$can');
const {t} = useI18n();

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
    errors: []
});

onMounted(() => {
    fetch(1);
})

const activeModal = computed(() => state.value.isActiveModal ? Modal : null)

const fetch = async (page) => {
    state.value.isLoading = true;
    if (page) {
        state.value.currentPage = page;
    }
    const data = await CategoriesRepository.fetch({'page': state.value.currentPage});
    state.value.categories = data.success ? data.result : [];
    state.value.isLoading = false;
}

const onDestroy = async (id) => {
    if (can('destroy-categories')) {
        const result = await swal({
            title: t('swal.sure'),
            icon: 'warning',
            showCancelButton: true,
        })
        if (result.isConfirmed) {
            const {success} = await CategoriesRepository.destroy(id);
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

const onEdit = async (id, i) => {
    if (can('edit-categories')) {
        const data = await CategoriesRepository.edit(id);
        if (data.success) {
            state.value.item = data.result;
            state.value.modalAction = 'edit';
            state.value.item.index = i;
            modalFunction();
        }
    }
}

const onUpdate = async () => {
    if (can('edit-categories')) {
        const data = await CategoriesRepository.update(state.value.item);
        state.value.errors = [];
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
    if (can('create-categories')) {
        const data = await CategoriesRepository.create(state.value.item);
        state.value.errors = [];
        if (data.success) {
            modalFunction();
            state.value.item = {};
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
    if (state.value.modalAction === 'edit' && can('edit-categories')) {
        await onUpdate();
    } else if (state.value.modalAction === 'create' && can('create-categories')) {
        await onCreate();
    }
}

const create = () => {
    if (can('create-categories')) {
        Object.assign(state.value.item, item);
        state.value.modalAction = 'create';
        state.value.errors = [];
        modalFunction();
    }
}
</script>

<template>
    <ContentLayout :title="$t('categories.page_title')">
        <template #header>{{ $t('categories.page_title') }}</template>

        <Loader v-if="state.isLoading"/>
        <div v-if="!state.isLoading && can('show-categories')" class="grid gap-4 grid-cols-1">
            <div>
                <Button type="btn" @click="create" v-if="can('create-categories')">
                    {{ $t('add') }}
                </Button>
            </div>

            <Table :data="state.categories.data"
                   @onEdit="onEdit"
                   @onDestroy="onDestroy"
                   :canDestroy="can('destroy-categories')"
            />

            <div class="text-center">
                <Paginate :pagination="state.categories"
                          :click-handler="fetch"
                          v-model="state.currentPage"
                />
            </div>
        </div>
        <component :is="activeModal"
                   :item="state.item"
                   :errors="state.errors"
                   @closeModal="modalFunction"
                   @submitForm="submitForm"
                   @declineForm="onDestroy"
                   :canDestroy="can('destroy-categories')"
        ></component>
    </ContentLayout>
</template>
