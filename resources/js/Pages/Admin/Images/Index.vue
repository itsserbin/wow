<template>
    <Head title="Зображення"/>

    <auth-layout>
        <template #header>Зображення</template>

        <loader-component v-if="state.isLoading"/>

        <div v-if="!state.isLoading && can('show-images')">
            <button-component type="btn" @click.prevent="modalUploadImagesFunction" v-if="can('create-images')">
                Додати
            </button-component>

            <List :images="state.imagesList"
                  @clickImage="openImageModal"
                  @fetch="fetch"
                  @destroyImage="destroyImage"
            />

            <pagination :pagination="state.imagesList"
                        :click-handler="fetch"
                        v-model="state.currentPage"
            />

            <component :is="imageModal"
                       @closeModal="modalImagesFunction"
                       @submitForm="updateImage"
                       @declineForm="destroyImageFromModal"
                       :image="state.imageModal"
                       size="large"
            ></component>

            <component :is="imagesUploadModal"
                       @closeModal="modalUploadImagesFunction"
                       @uploadImages="uploadImages"
                       @loadMoreImages="loadMoreImagesFunction"
                       :images="state.imageUploadModal"
                       size="large"
            ></component>
        </div>
    </auth-layout>
</template>

<script setup>
import UploadImagesModal from '@/Components/UploadImagesModal.vue';
import List from '@/Pages/Admin/Images/List.vue';
import ImageModal from '@/Pages/Admin/Images/Modal.vue';
import {Head, Link} from '@inertiajs/inertia-vue3';
import {reactive, onMounted, inject, ref, computed} from "vue";

const swal = inject('$swal')
const can = inject('$can');

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

function uploadImages(images) {
    if (can('create-images')) {
        Array.from(images).forEach(function (image) {
            let formData = new FormData();
            formData.append('image', image);
            axios.post(route('api.images.upload'), formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
                .then(({data}) => {
                    state.value.imageUploadModal.push({src: data.result});
                    fetch();
                })
                .catch((response) => console.log(response));
        })
    }
}

function modalUploadImagesFunction() {
    state.value.isActiveUploadModal = !state.value.isActiveUploadModal;
}

function modalImagesFunction() {
    state.value.isActiveImageModal = !state.value.isActiveImageModal;
}

function loadMoreImagesFunction() {
    state.value.imageUploadModal = [];
}

function openImageModal(image) {
    modalImagesFunction();
    state.value.imageModal = image;
}

function updateImage() {
    if (can('edit-images')) {
        axios.put(route('api.images.update', state.value.imageModal.id), state.value.imageModal)
            .then(() => {
                modalImagesFunction();
                swal({
                    icon: 'success',
                    title: 'Updated!'
                })
            })
            .catch((response) => console.log(response));
    }
}

function destroyImageFromModal(id) {
    destroyImage(id);
    modalImagesFunction();
}

function destroyImage(id) {
    if (can('destroy-images')) {
        axios.delete(route('api.images.destroy', id))
            .then(() => {
                fetch();
                swal({
                    icon: 'success',
                    title: 'Destroyed!'
                })
            })
            .catch((response) => console.log(response));
    }
}

async function fetch(page) {
    state.value.isLoading = true;
    if (page) {
        state.value.currentPage = page;
    }
    await axios.get(route('api.images.index', {'page': state.value.currentPage}))
        .then(response => {
            Object.assign(state.value.imagesList, response.data.result);
            state.value.isLoading = false;
        })
        .catch(errors => {
            console.log(errors);
            state.value.isLoading = false;
        })
}
</script>
