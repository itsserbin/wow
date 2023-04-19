<script setup>
import {inject, onMounted, ref} from "vue";

import Label from '@/Components/Form/Label.vue';
import Input from '@/Components/Form/Input.vue';
import Textarea from '@/Components/Form/Textarea.vue';
import Select from '@/Components/Form/Select.vue';
import Multiselect from '@/Components/Multiselect/Multiselect.vue';

defineProps(['item'])

const publishedStatuses = inject('$publishedStatuses');
const defaultLang = inject('$defaultLang');

const state = ref({
    xmlCategories: [
        {
            key: 'fb',
            value: 'Facebook'
        }
    ],
    products: []
});

onMounted(() => {
    axios.get(route('api.products.list'))
        .then(({data}) => state.value.products = data.result)
        .catch((response) => console.log(response))
})

function changeLang(val) {
    state.value.activeLang = val;
}

function h1AndCodeAndId({h1, id}) {
    if (h1 && id) {
        return `${h1.ua ? h1.ua : h1.ru} - ${id}`;
    } else {
        return `${id}`;
    }
}
</script>

<template>
    <form class="grid gap-4">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="block">
                <Label value="Назва"/>
                <Input v-model="item.title" type="text"/>
            </div>

            <div class="block">
                <Label value="Slug"/>
                <Input v-model="item.slug" type="text"/>
            </div>
        </div>

        <div class="block">
            <Label value="Опис"/>
            <Textarea v-model="item.description"/>
        </div>

        <div class="block">
            <Label value="Категорія"/>
            <Select v-model="item.category" :options="state.xmlCategories"/>
        </div>

        <div class="block">
            <Label value="Товари"/>
            <Multiselect
                :options="state.products"
                v-model="item.products"
                :custom-label="h1AndCodeAndId"
                placeholder="Оберіть товари"
                track-by="id"
                :close-on-select="false"
                :searchable="true"
                :multiple="true"
            />
        </div>
    </form>
</template>
