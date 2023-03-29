<template>
    <div>
        <div v-if="!state.isLoading">
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
    </div>
</template>

<script setup>
import {inject, onMounted, ref} from "vue";
import Form from '@/Pages/Public/Status/Form.vue';
import Status from '@/Pages/Public/Status/Status.vue';
import {isLoading} from "@/Pages/Public/load";

const props = defineProps(['statuses']);

const swal = inject('$swal');
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
    state.value.statuses = JSON.parse(props.statuses);
    isLoading.value = false;
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
