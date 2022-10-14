<template>
    <form class="grid gap-4">

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="block">
                <label-component value="Назва"/>
                <input-component v-model="item.title" type="text"/>
            </div>

            <div class="block">
                <label-component value="Slug"/>
                <input-component v-model="item.slug" type="text"/>
            </div>
        </div>

        <div class="block">
            <label-component value="Опис"/>
            <textarea-component v-model="item.description"/>
        </div>

        <div class="block">
            <label-component value="Категорія"/>
            <select-component v-model="item.category" :options="state.xmlCategories"/>
        </div>

        <div class="block">
            <label-component value="Товари"/>
            <multiselect
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

<script setup>
import {inject, onMounted, ref} from "vue";

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
