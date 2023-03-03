<template>
    <ContentLayout :title="$t('images.page_title')">
        <template #header>{{ $t('images.page_title') }}</template>

        <Loader v-if="state.isLoading"/>

        <div v-if="!state.isLoading && can('show-images')" class="grid grid-cols-1 gap-4">
            <div>
                <Button type="btn" @click.prevent="modalUploadImagesFunction"
                        v-if="can('create-images')">
                    {{ $t('add') }}
                </Button>
            </div>

            <List :images="state.imagesList"
                  @clickImage="openImageModal"
                  @fetch="fetch"
                  @destroyImage="destroyImage"
            />

            <div class="text-center">
                <Paginate :pagination="state.imagesList"
                          :click-handler="fetch"
                          v-model="state.currentPage"
                />
            </div>
        </div>

        <component :is="imageModal"
                   @closeModal="modalImagesFunction"
                   @submitForm="updateImage"
                   @declineForm="destroyImageFromModal"
                   :image="state.imageModal"
                   size="large"
        ></component>

        <component :is="imagesUploadModal"
                   @closeModal="modalUploadImagesFunction"
                   @onUpload="fetch"
        ></component>
    </ContentLayout>
</template>

<script setup>
import Loader from '@/Components/Loader.vue';
import Button from '@/Components/Button.vue';
import Paginate from '@/Components/Paginate.vue';
import UploadImagesModal from '@/Components/UploadImagesModal.vue';
import List from '@/Pages/Admin/Content/Images/List.vue';
import ImageModal from '@/Pages/Admin/Content/Images/Modal.vue';
import ContentLayout from '@/Pages/Admin/Content/ContentLayout.vue'

import {onMounted, inject, ref, computed} from "vue";
import ImagesRepository from "@/Repositories/ImagesRepository";
import {useI18n} from 'vue-i18n'

const swal = inject('$swal')
const can = inject('$can');
const {t} = useI18n();

const state = ref({
    imagesList: [],
    isActiveUploadModal: false,
    isActiveImageModal: false,
    imageUploadModal: [],
    imageModal: {
        id: null,
        src: null,
        alt: null,
    },
    currentPage: 1,
    isLoading: true,
});

const imagesUploadModal = computed(() => state.value.isActiveUploadModal ? UploadImagesModal : null);
const imageModal = computed(() => state.value.isActiveImageModal ? ImageModal : null);

onMounted(() => fetch());

const modalUploadImagesFunction = () => {
    state.value.isActiveUploadModal = !state.value.isActiveUploadModal;
}

const modalImagesFunction = () => {
    state.value.isActiveImageModal = !state.value.isActiveImageModal;
}

const openImageModal = (image) => {
    modalImagesFunction();
    state.value.imageModal = image;
}

const updateImage = async () => {
    if (can('edit-images')) {
        const {success} = await ImagesRepository.update(state.value.imageModal);
        if (success) {
            modalImagesFunction();
            await swal({
                icon: 'success',
                title: t('swal.updated')
            })
        }
    }
}

const destroyImageFromModal = async (id) => {
    await destroyImage(id);
    modalImagesFunction();
}

const destroyImage = async (id) => {
    if (can('destroy-images')) {
        const result = await swal({
            title: t('swal.sure'),
            icon: 'warning',
            showCancelButton: true,
        });

        if (result.isConfirmed) {
            state.value.isLoading = true;
            const {success} = await ImagesRepository.destroy(id);
            if (success) {
                await fetch();
                await swal({
                    icon: 'success',
                    title: t('swal.destroyed')
                });
            }
            state.value.isLoading = false;
        }
    }
}

const fetch = async (page) => {
    state.value.isLoading = true;
    if (page) {
        state.value.currentPage = page;
    }
    const data = await ImagesRepository.fetch({'page': state.value.currentPage});
    state.value.imagesList = data.success ? data.result : [];
    state.value.isLoading = false;
}
</script>
