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
        <div class="text-[1.625rem] font-[400]">
            <h3>Доставка</h3>
        </div>
        <div class="grid gap-4">
            <div class="block">
                <label-component>Місто</label-component>
                <input-component type="email"
                                 placeholder="Вкажіть місто"
                                 v-model="order.city"
                />
            </div>
            <div class="block">
                <label-component>Відділення Нова Пошта</label-component>
                <input-component type="email"
                                 placeholder="Вкажіть відділення НП"
                                 v-model="order.postal_office"
                />
            </div>
        </div>
    </div>
</template>

<script setup>
import {ref} from 'vue';

defineProps(['order']);

const state = ref({
    cities: [],
    options: [
        {
            value: 'hui',
            label: 'hui',
        }
    ],
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
