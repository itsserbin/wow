<script setup>
import {inject, onMounted, ref} from "vue";
import Label from '@/Components/Form/Label.vue';
import Select from '@/Components/Form/Select.vue';
import Input from '@/Components/Form/Input.vue';
import Textarea from '@/Components/Form/Textarea.vue';
import Multiselect from '@/Components/Multiselect/Multiselect.vue';

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
</script>

<template>
    <form class="flex flex-col">
        <div class="block mb-5">
            <Label value="Статус публікації"/>
            <Select v-model="item.published" :options="publishedStatuses"/>
        </div>

        <div class="block mb-5">
            <Label value="Товар"/>
            <Multiselect
                :options="products"
                v-model="item.product"
                :custom-label="titleProduct"
                placeholder="Оберіть товар"
                track-by="id"
                :close-on-select="true"
                :searchable="true"
            />
        </div>

        <div class="block mb-5">
            <Label value="Імʼя"/>
            <Input v-model="item.name" type="text"/>
        </div>

        <div class="block mb-5">
            <Label value="Телефон"/>
            <Input v-model="item.phone" type="text"/>
        </div>

        <div class="block mb-5">
            <Label value="Текст відгука"/>
            <Textarea v-model="item.comment" rows="4"/>
        </div>
    </form>
</template>
