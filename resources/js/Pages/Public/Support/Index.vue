<template>
    <div>
        <loader v-if="state.isLoading"></loader>
        <div v-if="!state.isLoading">
            <div class="max-w-xl mx-auto">
                <Form :item="state.item"
                      @submitForm="submitForm"
                      :errors="state.errors"
                />
            </div>
        </div>
    </div>
</template>

<script setup>
import {inject, ref} from "vue";
import Form from '@/Pages/Public/Support/Form.vue';

const swal = inject('$swal');

const state = ref({
    isLoading: false,
    item: {
        name: null,
        phone: null,
        order_id: null,
        comment: null,
    },
    errors: []
})

function submitForm() {
    axios.post(route('api.v1.support.create'), state.value.item)
        .then(() => {
            swal({
                icon: 'success',
                title: 'Відправлено!',
                text: 'Ваш запит передано на обробку, чекайте звʼязку з нашим менеджером найближчим часом'
            })
            setTimeout(() => {
                window.location.href = route('home');
            }, 3000)
        })
        .catch(({response}) => {
            state.value.errors = response.data;
            swal({
                icon: 'error',
                title: 'Помилка!',
                text: 'Перевірте коректність даних'
            })
        })
}
</script>
