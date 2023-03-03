<template>
    <ContentLayout :title="$t('pages.page_title')">
        <template #header>{{ $t('pages.page_title') }}</template>

        <Loader v-if="state.isLoading"/>
        <div v-if="!state.isLoading && can('show-pages')" class="grid gap-4 grid-cols-1">
            <div>
                <Button type="btn" @click="create" v-if="can('create-pages')">
                    {{ $t('add') }}
                </Button>
            </div>

            <div>
                <Table :data="state.data.data"
                       @onEdit="onEdit"
                       @onDestroy="onDestroy"
                       :canDestroy="can('destroy-pages')"
                />
            </div>

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
                   :canDestroy="can('destroy-pages')"
        ></component>
    </ContentLayout>
</template>

<script setup>
import Loader from '@/Components/Loader.vue';
import Button from '@/Components/Button.vue';
import Paginate from '@/Components/Paginate.vue';
import Modal from '@/Pages/Admin/Content/Pages/Modal.vue';
import Table from '@/Pages/Admin/Content/Pages/Table.vue'
import ContentLayout from '@/Pages/Admin/Content/ContentLayout.vue'

import {reactive, onMounted, inject, ref, computed} from "vue";
import PagesRepository from "@/Repositories/PagesRepository";
import {useI18n} from 'vue-i18n'

const swal = inject('$swal')
const can = inject('$can');
const {t} = useI18n();

const item = reactive({
    slug: null,
    published: 0,
    heading: {
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
    meta_title: {
        ru: null,
        ua: null
    },
    meta_description: {
        ru: null,
        ua: null
    }
})

const state = ref({
    data: [],
    currentPage: 1,
    isLoading: true,
    isActiveModal: false,
    modalAction: '',
    errors: [],
    item: {},
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
    const data = await PagesRepository.fetch({'page': state.value.currentPage});
    state.value.data = data.success ? data.result : [];
    state.value.isLoading = false;
}

const onDestroy = async (id) => {
    if (can('destroy-pages')) {
        const result = await swal({
            title: t('swal.sure'),
            icon: 'warning',
            showCancelButton: true,
        })
        if (result.isConfirmed) {
            const {success} = await PagesRepository.destroy(id);
            if (success) {
                await fetch();
                if (state.value.isActiveModal) {
                    modalFunction();
                }
                await swal({
                    icon: 'success',
                    title: t('swal.destroyed')
                });
            }
        }
    }
}

const modalFunction = () => {
    state.value.isActiveModal = !state.value.isActiveModal;
}

const onEdit = async (id, i) => {
    if (can('edit-pages')) {
        const data = await PagesRepository.edit(id);
        if (data.success) {
            state.value.item = data.result;
            state.value.modalAction = 'edit';
            state.value.item.index = i;
            modalFunction();
        }
    }
}

const onUpdate = async () => {
    if (can('edit-pages')) {
        const data = await PagesRepository.update(state.value.item);
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
    if (can('create-pages')) {
        const data = await PagesRepository.create(state.value.item);
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
    if (state.value.modalAction === 'edit' && can('edit-pages')) {
        await onUpdate();
    } else if (state.value.modalAction === 'create' && can('create-pages')) {
        await onCreate();
    }
}

const create = () => {
    if (can('create-pages')) {
        state.value.item = item;
        state.value.modalAction = 'create';
        modalFunction();
    }
}
</script>
