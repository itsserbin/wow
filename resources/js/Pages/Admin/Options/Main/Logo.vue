<script setup>
import Input from '@/Components/Form/Input.vue';
import Label from '@/Components/Form/Label.vue';
import {useI18n} from 'vue-i18n';
import {ref} from 'vue';
import {swal} from "@/Includes/swal";

const image = ref(null);
const {t} = useI18n();

defineProps(['title']);

const onFileChange = async (file) => {
    const formData = new FormData();
    formData.append('logo', file);

    await axios.post(route('api.images.logo.upload'), formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
        .then(({data}) => {
            image.value = data.result;
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
    await axios.delete(route('api.images.logo.delete'))
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

<template>
    <div class="mb-4">
        <Label :value="$t('options.text_label_logo')"/>
        <div class="mt-2">
            <div v-if="image">
                <picture>
                    <source :srcset="'/storage/' + image + '.webp'" type="image/webp">
                    <img :src="'/storage/' + image + '.jpeg'" :alt="$t('options.text_label_logo')">
                </picture>
                <button type="button" class="text-sm font-medium text-red-500 hover:text-red-700" @click="destroyImage">
                    {{ $t('options.text_destroyLabel') }}
                </button>
            </div>
            <div v-else>
                <Input type="file" @change="onFileChange($event.target.files[0])"/>
                <p class="mt-2 text-sm text-gray-500">{{ $t('options.instructions') }}</p>
            </div>
        </div>
    </div>
</template>
