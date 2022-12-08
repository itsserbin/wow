<template>
    <div class="block mb-5 ">
        <label-component value="Товар"/>
        <multiselect :options="products"
                     v-model="item.product_id"
                     :custom-label="h1AndCodeAndId"
                     class="mb-5"
                     track-by="id"
                     :close-on-select="true"
                     :searchable="true"/>
    </div>

    <div class="block mb-5 ">
        <label-component value="Розмір"/>
        <input-component v-model="item.size" type="text"/>
    </div>

    <div class="block mb-5 ">
        <label-component value="Колір"/>
        <input-component v-model="item.color" type="text"/>
    </div>

    <div class="block mb-5 ">
        <label-component value="Кількість"/>
        <input-component v-model="item.count" type="number"/>
    </div>
</template>

<script setup>
import {onMounted, ref} from "vue";

defineProps(['item'])

const products = ref([])

function h1AndCodeAndId({h1, id, vendor_code}) {
    if (h1 && id && vendor_code) {
        return `${h1.ua ? h1.ua : h1.ru} - ${vendor_code}/${id}`;
    } else if (h1 && id) {
        return `${h1.ua ? h1.ua : h1.ru} -${id}`;
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
