<template>
    <OptionsLayout>
        <Loader v-if="state.isLoading"/>
        <Form :options="state.options" @submitForm="onUpdate"
              v-if="can('show-main-options') && !state.isLoading"/>
    </OptionsLayout>
</template>

<script setup>
import OptionsLayout from '@/Pages/Admin/Options/OptionsLayout.vue'
import Form from '@/Pages/Admin/Options/Main/Form.vue'
import Loader from '@/Components/Loader.vue'

import {inject, onMounted, ref} from "vue";
import OptionsRepository from "@/Repositories/OptionsRepository";
import {useI18n} from 'vue-i18n'

const can = inject('$can');
const swal = inject('$swal');
const {t} = useI18n();

const state = ref({
    isLoading: false,
    options: {}
});

onMounted(() => fetch());

const fetch = async () => {
    state.value.isLoading = true;
    const data = await OptionsRepository.main().index();
    if (data.success) {
        state.value.options = data.result;
    }
    state.value.isLoading = false;
}

const onUpdate = async () => {
    state.value.isLoading = true;
    const data = await OptionsRepository.main().update(state.value.options);
    if (data.success) {
        swal({
            title: t('swal.updated'),
            icon: 'success'
        });
    } else {
        console.log(data);
        swal({
            title: t('swal.error'),
            icon: 'error',
        });
    }
    state.value.isLoading = false;
}
</script>
