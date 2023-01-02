<template>
    <ContentLayout title="Зображення">
        <template #header>Зображення</template>

        <loader-component v-if="state.isLoading"/>

        <div v-if="!state.isLoading && can('show-images')" class="grid grid-cols-1 gap-4">
            <div>
                <button-component type="btn" @click.prevent="modalUploadImagesFunction" v-if="can('create-images')">
                    Додати
                </button-component>
            </div>

            <List :images="state.imagesList"
                  @clickImage="openImageModal"
                  @fetch="fetch"
                  @destroyImage="destroyImage"
            />

            <div class="text-center">
                <pagination :pagination="state.imagesList"
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
                   @onUpload="onUpload"
        ></component>
    </ContentLayout>
</template>

<script setup>
import UploadImagesModal from '@/Components/UploadImagesModal.vue';
import List from '@/Pages/Admin/Content/Images/List.vue';
import ImageModal from '@/Pages/Admin/Content/Images/Modal.vue';
import {Head, Link} from '@inertiajs/inertia-vue3';
import {reactive, onMounted, inject, ref, computed} from "vue";
import ContentLayout from '@/Pages/Admin/Content/ContentLayout.vue'

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

function onUpload() {
    fetch();
}

function modalUploadImagesFunction() {
    state.value.isActiveUploadModal = !state.value.isActiveUploadModal;
}

function modalImagesFunction() {
    state.value.isActiveImageModal = !state.value.isActiveImageModal;
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
        state.value.isLoading = true;
        axios.delete(route('api.images.destroy', id))
            .then(() => {
                fetch();
                state.value.isLoading = false;
                swal({
                    icon: 'success',
                    title: 'Destroyed!'
                })
            })
            .catch((response) => {
                console.log(response);
                state.value.isLoading = false;
            });
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
