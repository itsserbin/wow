<template>
    <div class="block mb-5 ">
        <label-component value="Product"/>
        <multiselect-component :options="products"
                     v-model="item.product_id"
                     :custom-label="h1AndCodeAndId"
                     placeholder="Выберите товар"
                     class="mb-5"
                     track-by="id"
                     :close-on-select="true"
                     :searchable="true"/>
    </div>

    <div class="block mb-5 ">
        <label-component value="Size"/>
        <input-component v-model="item.size" type="text"/>
    </div>

    <div class="block mb-5 ">
        <label-component value="Color"/>
        <input-component v-model="item.color" type="text"/>
    </div>

    <div class="block mb-5 ">
        <label-component value="Count"/>
        <input-component v-model="item.count" type="number"/>
    </div>
</template>

<script setup>
import {onMounted, ref} from "vue";

defineProps(['item'])

const products = ref([])

function h1AndCodeAndId({title, id, vendor_code}) {
    if (title && id && vendor_code) {
        return `${title} - ${vendor_code}/${id}`;
    } else if (title && id) {
        return `${title} -${id}`;
    } else {
        return `${id}`;
    }
}

onMounted(() => {
    axios.get(route('api.products.list'))
        .then(({data}) => products.value = data.result)
        .catch((response) => console.log(response));
})
</script>
