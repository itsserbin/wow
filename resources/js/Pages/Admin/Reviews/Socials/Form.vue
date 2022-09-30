<template>
    <form class="flex flex-col">
        <div class="block mb-5">
            <label-component value="Статус публікації"/>
            <select-component v-model="item.published" :options="publishedStatuses"/>
        </div>

        <div class="block mb-5">
            <label-component value="Текст відгука"/>
            <textarea-component v-model="item.comment" rows="4"/>
        </div>

        <div class="block mb-5">
            <upload-input-component :multiple="false"
                                    id="uploadCategoryPreview"
                                    label="Зображення"
                                    @upload="uploadSocialPreview"
                                    :images="item.image"
            />
        </div>
    </form>
</template>

<script setup>
import {inject, onMounted, ref} from "vue";

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
