<script setup>
import {onMounted, ref} from "vue";
import Label from '@/Components/Form/Label.vue'
import Input from '@/Components/Form/Input.vue'
import Multiselect from '@/Components/Multiselect/Multiselect.vue';

const props = defineProps(['item'])

const products = ref([])

onMounted(async () => {
    await axios.get(route('api.products.list'))
        .then(({data}) => products.value = data.result)
        .catch((response) => console.log(response));
})

const h1AndCodeAndId = ({h1, id, vendor_code}) => {
    const title = h1 ? (h1.ua ? h1.ua : h1.ru) : '';
    const separator = title && id ? ' - ' : '';
    const code = vendor_code ? `${vendor_code}/` : '';

    return `${title}${separator}${code}${id}`;
}
</script>

<template>
    <div class="block mb-5 ">
        <Label value="Товар"/>
        <multiselect :options="products"
                     v-model="item.product_id"
                     :custom-label="h1AndCodeAndId"
                     class="mb-5"
                     track-by="id"
                     :close-on-select="true"
                     :searchable="true"/>
    </div>

    <div class="block mb-5 ">
        <Label value="Розмір"/>
        <Input v-model="item.size" type="text"/>
    </div>

    <div class="block mb-5 ">
        <Label value="Колір"/>
        <Input v-model="item.color" type="text"/>
    </div>

    <div class="block mb-5 ">
        <Label value="Кількість"/>
        <Input v-model="item.count" type="number"/>
    </div>

    <div class="block mb-5 ">
        <div class="flex items-center mb-4">
            <input id="resale"
                   v-model="item.resale"
                   type="checkbox"
                   class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
            <label for="resale"
                   class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >Додаткова продажа</label>
        </div>
    </div>

    <div class="block mb-5" v-if="item.resale">
        <Label value="Сума знижки (грн.)"/>
        <Input v-model="item.discount" type="number"/>
    </div>
</template>
