<template>
    <MasterLayout :categories="categories"
                  :options="options"
                  :lang="lang"
                  :pages="pages"
                  :eventIdPageView="eventIdPageView"
    >
        <div class="max-w-xl mx-auto">
            <Form :item="state.item"
                  @submitForm="submitForm"
                  :errors="state.errors"
            />
        </div>
    </MasterLayout>
</template>

<script setup>
import MasterLayout from '@/Layouts/MasterLayout.vue'
import {inject, onMounted, ref} from "vue";
import Form from '@/Pages/Public/Support/Form.vue';
import {isLoading} from "@/Pages/Public/load";

defineProps([
    'eventIdPageView',
    'categories',
    'options',
    'lang',
    'pages',
])

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

onMounted(() => {
    isLoading.value = false;
})

const submitForm = async () => {
    await axios.post(route('api.v1.support.create'), state.value.item)
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
