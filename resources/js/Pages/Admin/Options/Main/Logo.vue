<template>
    <OptionsLayout>
        <div class="mb-4">
            <Label :value="$t('options.text_label_logo')" />
            <div class="mt-2">
                <div v-if="image">
                    <img :src="image" class="w-[6.25rem] h-[6.25rem] mb-2">
                    <button type="button" class="text-sm font-medium text-red-500 hover:text-red-700"
                        @click="destroyImage">{{ $t('options.text_destroyLabel') }}</button>
                </div>
                <div v-else>
                    <Input type="file" @change="onFileChange" />
                    <p class="mt-2 text-sm text-gray-500">{{ $t('options.instructions') }}</p>
                </div>
            </div>
        </div>
    </OptionsLayout>
</template>
<script setup>
import OptionsLayout from '@/Pages/Admin/Options/OptionsLayout.vue'
import Input from '@/Components/Form/Input.vue';
import Label from '@/Components/Form/Label.vue';
import { useI18n } from 'vue-i18n';
import { ref, inject } from 'vue';
const swal = inject('$swal');
const { t } = useI18n();

defineProps(['title'], ['accept']);
const image = ref(null);

//Загрузка логотипа
const onFileChange = async (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('logo', file);


    await axios.post('/api/images/logo', formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
        .then(({ data }) => {
            image.value = data.path;
            swal({
                title: t('swal.logo.upload'),
                icon: 'success',
                confirmButtonText: 'Ok'
            })
        })
        .catch(error => {
            console.log(error);
            swal({
                text: t('swal.logo.error'),
                icon: 'error',
                confirmButtonText: 'Ok'
            });
        });
}



//Удаление логотипа
const destroyImage = async () => {
    await axios.delete(route('api.images.delete'))
        .then(() => {
            image.value = null;
            swal({
                title: t('swal.logo.destroy.success'),
                icon: 'success',
                confirmButtonText: 'Ok'
            });
        })
        .catch(error => {
            console.log(error);
            swal({
                title: t('swal.logo.destroy.error'),
                icon: 'error',
                confirmButtonText: 'Ok'
            });
        });
};
</script>