<template>
    <form class="flex flex-col">
        <div class="block mb-5">
            <label-component value="Статус публікації"/>
            <select-component v-model="item.published" :options="publishedStatuses"/>
        </div>

        <div class="block mb-5">
            <label-component value="Товар"/>
            <multiselect
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
            <label-component value="Імʼя"/>
            <input-component v-model="item.name" type="text"/>
        </div>

        <div class="block mb-5">
            <label-component value="Телефон"/>
            <input-component v-model="item.phone" type="text"/>
        </div>

        <div class="block mb-5">
            <label-component value="Текст відгука"/>
            <textarea-component v-model="item.comment" rows="4"/>
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
</script>
