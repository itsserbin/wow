<template>
    <OptionsLayout>
        <div class="mb-4">
            <label class="block font-medium text-gray-700">{{ $t('options.text_label_logo') }}</label>
            <div class="mt-2">
                <div v-if="image">
                    <img :src="image" class="w-[5.625rem] h-[5.625rem] mb-2">
                    <button type="button" class="text-sm font-medium text-red-500 hover:text-red-700"
                        @click="destroyImage">{{ $t('options.text_destroyLabel') }}</button>
                </div>
                <div v-else>
                    <input type="file" @change="onFileChange" :accept="accept">
                    <p class="mt-2 text-sm text-gray-500">{{ $t('options.instructions') }}</p>
                </div>
            </div>
        </div>
    </OptionsLayout>
</template>
<script setup>
import OptionsLayout from '@/Pages/Admin/Options/OptionsLayout.vue'
import { ref, inject } from 'vue';
const swal = inject('$swal')

defineProps(['title']);

const accept = 'image/*';
const image = ref(null);

//Загрузка логотипа
const onFileChange = async (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('logo', file);

    const img = new Image();
    img.src = URL.createObjectURL(file);

    img.onload = async () => {
        await axios.post('/api/images/logo', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(({ data }) => {
                image.value = URL.createObjectURL(file);
                swal({
                    title: 'Success!',
                    text: 'Логотип был успешно загружен!',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                });
            })
            .catch(error => {
                swal({
                    title: 'Error!',
                    text: 'Возникла ошибка логотип не был загружен!',
                    icon: 'error',
                    confirmButtonText: 'Ok'
                });
            });
    }
};

//Удаление логотипа
const destroyImage = async () => {
    await axios.delete(route('api.images.delete'))
        .then(() => {
            image.value = null;
            swal({
                title: 'Success!',
                text: 'Логотип был успешно удален!',
                icon: 'success',
                confirmButtonText: 'Ok'
            });
        })
        .catch(error => {
            swal({
                title: 'Error!',
                text: 'Возникла ошибка при удалении логотипа!',
                icon: 'error',
                confirmButtonText: 'Ok'
            });
        });
};
</script>