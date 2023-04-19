<script setup>
import {inject, onMounted, ref} from "vue";
import Label from '@/Components/Form/Label.vue';
import Select from '@/Components/Form/Select.vue';
import Textarea from '@/Components/Form/Textarea.vue';
import UploadImagesInput from '@/Components/Form/UploadImagesInput.vue';

defineProps(['item'])

const publishedStatuses = inject('$publishedStatuses');

const products = ref([]);

onMounted(() => {
    axios.get(route('api.products.list'))
        .then(({data}) => products.value = data.result)
        .catch((response) => console.log(response));
})

function titleProduct({h1}) {
    return h1.ua ? h1.ua : h1.ru;
}

function uploadSocialPreview() {

}
</script>

<template>
    <form class="flex flex-col">
        <div class="block mb-5">
            <Label value="Статус публікації"/>
            <Select v-model="item.published" :options="publishedStatuses"/>
        </div>

        <div class="block mb-5">
            <Label value="Текст відгука"/>
            <Textarea v-model="item.comment" rows="4"/>
        </div>

        <div class="block mb-5">
            <UploadImagesInput :multiple="false"
                               id="uploadCategoryPreview"
                               label="Зображення"
                               @upload="uploadSocialPreview"
                               :images="item.image"
            />
        </div>
    </form>
</template>
