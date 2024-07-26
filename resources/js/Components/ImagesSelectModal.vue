<script setup>
import {onMounted, ref} from "vue";
import Modal from '@/Components/Modal.vue';
import Paginate from '@/Components/Paginate.vue';
import Button from '@/Components/Button.vue';
import Loader from '@/Components/Loader.vue';
import UploadImagesModal from '@/Components/UploadImagesModal.vue';

const props = defineProps({
    multiple: {
        type: Boolean,
        default: false
    }
})

defineEmits([
    'closeModal',
    'submitForm'
]);
const state = ref({
    images: [],
    isLoading: false,
    isImagesUploadModal: false,
    selected: [],
    currentPage: 1
})

onMounted(() => {
    fetch();
})

function onUploadImages() {
    modalUploadImagesFunction();
    fetch();
}

function modalUploadImagesFunction() {
    state.value.isImagesUploadModal = !state.value.isImagesUploadModal;
}

function fetch(page) {
    state.value.isLoading = true;
    if (page) {
        state.value.currentPage = page;
    }
    axios.get(route('api.images.index', {'page': state.value.currentPage}))
        .then(({data}) => {
            state.value.images = data.result
            state.value.isLoading = false;
        })
        .catch((response) => {
            console.log(response);
            state.value.isLoading = false;
        })
}
</script>

<template>
    <Modal @closeModal="$emit('closeModal')"
           submit-button-text="Зберегти"
           cancel-button-text="Відмінити"
           @submitForm="$emit('submitForm', state.selected)"
           @clickCancel="$emit('closeModal')"
           size="extralarge"
    >
        <template #title>Вибір зображення</template>
        <template #content>
            <Button type="btn" @click.prevent="modalUploadImagesFunction">
                Завантажити
            </Button>
            <Loader v-if="state.isLoading"/>
            <div v-else>
                <div class="grid grid-cols-2 md:grid-cols-5 mt-3">
                    <div class="block m-1" v-for="image in state.images.data">
                        <input :type="multiple ? 'checkbox' : 'radio'"
                               name="images"
                               v-model="state.selected"
                               :value="image"
                               :id="image.id"
                               class="hidden peer"
                        >
                        <label
                            :for="image.id"
                            class="
                                inline-flex
                                justify-between
                                items-center
                                p-5
                                w-full
                                text-gray-500
                                bg-white
                                rounded-lg
                                border-2
                                border-gray-200
                                cursor-pointer
                                dark:hover:text-gray-300
                                dark:border-gray-700
                                peer-checked:border-blue-600
                                hover:text-gray-600
                                dark:peer-checked:text-gray-300
                                peer-checked:text-gray-600
                                hover:bg-gray-50
                                dark:text-gray-400
                                dark:bg-gray-800
                                dark:hover:bg-gray-900
                            "
                        >
                            <picture>
                                <source :srcset="`/storage/products/350/${image.webp_src}`" type="image/webp">
                                <img :src="`/storage/products/350/${image.src}`"
                                     class="rounded-lg mx-auto  h-full object-cover"
                                     alt=""
                                >
                            </picture>
                        </label>
                    </div>
                </div>
                <div class="row flex justify-center my-5" v-if="state.images">
                    <Paginate
                        :click-handler="fetch"
                        :pagination="state.images"
                        v-model="state.currentPage"
                    />
                </div>
            </div>

            <UploadImagesModal
                v-if="state.isImagesUploadModal"
                @closeModal="modalUploadImagesFunction"
                @onUpload="onUploadImages"
            />
        </template>
    </Modal>
</template>
