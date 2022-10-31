<template>
    <div>
        <loader v-if="state.isLoading"></loader>
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
import {computed, inject, onMounted, ref} from "vue";
import Form from '@/Pages/Public/Status/Form.vue';
import Status from '@/Pages/Public/Status/Status.vue';

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

onMounted(() => {
    if (route().params.order_id && route().params.phone) {
        state.value.item.phone = route().params.phone;
        state.value.item.order_id = route().params.order_id;
        checkStatus();
    }

    state.value.statuses = JSON.parse(props.statuses);
})

function checkStatus() {
    state.value.isLoading = true;
    axios.post(route('api.v1.orders.status'), state.value.item)
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
            state.value.isLoading = false;
            console.log(data);
        })
}
</script>
