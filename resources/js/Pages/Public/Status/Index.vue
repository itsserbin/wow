<template>
        <Head title="Статус замовлення"/>

        <div v-if="!state.isLoading">
            <Breadcrumbs :current-url="route().current" :options="options" :lang="lang" title="Статус замовлення"/>

            <div class="max-w-xl mx-auto">
                <Form :item="state.item"
                      @submitForm="checkStatus"
                      v-if="!state.order"
                />

                <Status :order="state.order"
                        v-if="state.order"
                        :statuses="state.statuses"
                />
            </div>
        </div>
</template>

<script setup>
import Breadcrumbs from './Breadcrumbs.vue'
import MasterLayout from '@/Layouts/MasterLayout.vue'
import Form from '@/Pages/Public/Status/Form.vue';
import Status from '@/Pages/Public/Status/Status.vue';
import Head from "@/Pages/Public/Components/Head.vue";

import {swal} from '@/Includes/swal';
import {onMounted, ref} from "vue";
import eventTracking from "@/Includes/eventTracking";

defineOptions({layout: MasterLayout})

const props = defineProps([
    'statuses',
    'categories',
    'options',
    'lang',
    'pages',
    'eventIdPageView',
]);

const state = ref({
    item: {
        phone: null,
        order_id: null,
    },
    isLoading: false,
    statuses: [],
    order: null
});

onMounted(async () => {
    if (route().params.order_id && route().params.phone) {
        state.value.item.phone = route().params.phone;
        state.value.item.order_id = route().params.order_id;
        await checkStatus();
    }
    eventTracking('PageView', {}, props.eventIdPageView);
})

const checkStatus = async () => {
    await axios.post(route('api.v1.orders.status'), state.value.item)
        .then(({data}) => {
            if (data.result) {
                state.value.order = data.result;
            } else {
                swal({
                    icon: 'error',
                    title: 'Замовлення не знайдено',
                    text: 'Перевірте введені дані або зверніться за допомогою до менеджера'
                })
            }
        })
}
</script>
