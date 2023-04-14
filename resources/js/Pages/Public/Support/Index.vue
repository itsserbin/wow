<template>
        <Head title="Підтримка клієнтів"/>

        <Breadcrumbs :currentUrl="route().current" :options="options" :lang="lang" title="Підтримка"/>

        <div class="max-w-xl mx-auto">
            <Form :item="state.item"
                  @submitForm="submitForm"
                  :errors="state.errors"
            />
        </div>
</template>

<script setup>
import MasterLayout from '@/Layouts/MasterLayout.vue'
import Form from '@/Pages/Public/Support/Form.vue';
import Breadcrumbs from '@/Pages/Public/Support/Breadcrumbs.vue';
import Head from "@/Pages/Public/Components/Head.vue";

import {ref} from "vue";
import {swal} from '@/Includes/swal';
defineOptions({layout: MasterLayout})

defineProps([
    'eventIdPageView',
    'categories',
    'options',
    'lang',
    'pages',
])

const state = ref({
    item: {
        name: null,
        phone: null,
        order_id: null,
        comment: null,
    },
    errors: []
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
                if (typeof window !== 'undefined') {
                    window.location.href = route('home');
                }
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
