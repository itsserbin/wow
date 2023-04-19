<script setup>
import Label from '@/Pages/Public/Components/Label.vue'
import Input from '@/Pages/Public/Components/Input.vue'

import {ref} from 'vue';

defineProps(['order']);

const state = ref({
    cities: [],
    isLoadingCities: false
});
//
// function searchCity(query) {
//     // state.value.isLoadingCities = true;
//     axios.post('/api/v1/nova-poshta/search-city', {query: query})
//         .then(({data}) => {
//             // state.value.isLoadingCities = false;
//             // state.value.cities = data.result.map((item) => {
//             //     return {value: item.Ref, label: item.Description}
//             // });
//             // console.log(state.value.cities)
//             let test = [];
//             data.result.forEach((item) => {
//                 test.push({
//                     value: item.Ref,
//                     label: item.Description
//                 })
//             });
//             return test;
//
//         })
//         .catch((response) => console.log(response));
// }
</script>

<template>
    <div class="
                rounded-[15px]
                bg-[#fff]
                border-[0.5px]
                border-gray-300
                shadow-lg
                mb-[1.5rem]
                pt-[1.25rem]
                pr-[1rem]
                pb-[1.25rem]
                pl-[1rem]
            "
    >
        <div class="text-2xl font-heading font-[400]">
            <h3>Доставка</h3>
        </div>
        <div class="grid gap-4">
            <div class="block">
                <Label>Місто</Label>
                <Input type="text"
                       placeholder="Вкажіть місто"
                       v-model="order.city"
                />
            </div>
            <div class="block">
                <Label>Відділення Нова Пошта</Label>
                <Input type="text"
                       placeholder="Вкажіть відділення НП"
                       v-model="order.postal_office"
                />
            </div>
        </div>
    </div>
</template>
