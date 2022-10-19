<template>
    <Modal @closeModal="$emit('closeModal')"
           submit-button-text="Save"
           cancel-button-text="Cancel"
           @submitForm="submitForm"
           @clickCancel="$emit('closeModal')"
           size="large"
    >
        <template #title>Select images</template>
        <template #content>
            <button-component type="btn" @click.prevent="modalUploadImagesFunction">
                Add
            </button-component>
            <div class="grid grid-cols-2 md:grid-cols-5 mt-3">
                <div class="block m-1" v-for="image in state.images.data">
                    <input type="checkbox"
                           v-model="state.imagesSelected"
                           :value="image"
                           :id="image.id"
                           class="hidden peer"
                    >
                    <label
                        :for="image.id"
                        class="inline-flex justify-between items-center p-5 w-full text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                        <div class="block">
                            <ImageCard
                                class="m-1"
                                :image="route('images.products.350',image.src)"
                                :alt="image.alt"
                                @click="$emit('clickImage',image)"
                            />
                        </div>
                    </label>
                </div>
            </div>
            <div class="row flex justify-center my-5" v-if="state.images">
                <pagination
                    :click-handler="fetch"
                    :pagination="state.images"
                    v-model="state.currentPage"
                />
            </div>

            <component :is="imagesUploadModal"
                       @closeModal="modalUploadImagesFunction"
                       @uploadImages="uploadImages"
                       @loadMoreImages="loadMoreImagesFunction"
                       :images="state.imageUploadModal"
                       size="large"
            ></component>
        </template>
    </Modal>


</template>

<script setup>
import ImageCard from '@/Components/ImageCard.vue';
import UploadImagesModal from "@/Components/UploadImagesModal.vue";
import Modal from '@/Components/Modal.vue';
import {computed, onMounted, ref} from "vue";

const emits = defineEmits(['submitForm', 'closeModal', 'clickImage', 'destroyImage'])

const state = ref({
    images: {},
    pagination: {},
    imagesSelected: [],
    imageUploadModal: [],
    isLoading: false,
    isActiveUploadModal: false,
    currentPage: 1,
});

onMounted(() => fetch());

const imagesUploadModal = computed(() => state.value.isActiveUploadModal ? UploadImagesModal : null);

async function fetch(page) {
    state.value.isLoading = true;
    if (page) {
        state.value.currentPage = page;
    }
    await axios.get(route('api.images.index', {'page': state.value.currentPage}))
        .then(response => {
            state.value.images = response.data.result
            state.value.isLoading = false;
        })
        .catch(errors => {
            console.log(errors);
            state.value.isLoading = false;
        })
}

function submitForm() {
    emits('submitForm', state.value.imagesSelected)
}

function modalUploadImagesFunction() {
    state.value.isActiveUploadModal = !state.value.isActiveUploadModal;
}

function uploadImages(images) {
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

function loadMoreImagesFunction() {
    state.value.imageUploadModal = [];
}
</script>
