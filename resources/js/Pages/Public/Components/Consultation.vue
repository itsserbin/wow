<script setup>
import Modal from '@/Pages/Public/Components/Modal.vue';
import Input from '@/Pages/Public/Components/Input.vue';
import InputError from '@/Components/Form/InputError.vue';

import {ref} from "vue";
import {swal} from '@/Includes/swal';
import {vMaska} from "@/Includes/maska"

const state = ref({
    show: false,
    isShow: true,
    isLoading: false,
    item: {
        name: null,
        phone: null,
        comment: null,
    },
    errors: []
});

setTimeout(() => {
    if (state.value.isShow) {
        showModal();
    }
}, 60000)

function showModal() {
    state.value.show = !state.value.show;
}

async function sendForm() {
    state.value.isLoading = true;
    await axios.post(route('api.v1.callback.create'), state.value.item)
        .then(() => {
            swal({
                icon: 'success',
                title: 'Ваш запит надіслано!',
                text: 'Наш оператор зателефонує Вам протягом 5 хвилин',
            })
            state.value.item = {
                phone: null,
            };
            state.value.isLoading = false;
            showModal();
        })
        .catch(({response}) => {
            swal({
                icon: 'error',
                title: 'Виникла помилка',
                text: 'Перевірте корректність данних',
            })
            state.value.errors = response.data;
            state.value.isLoading = false;
        })
}
</script>

<template>
    <Modal @closeModal="showModal"
           v-if="state.show"
           size="medium"
           submit-button-text="Відправити"
           @submitForm="sendForm"
           @clickCancel="showModal"
           :is-loading="state.isLoading"
    >
        <template #content>
            <div class="text-[24px] text-[#000] font-bold mb-5 text-center">Потрібна консультація?</div>
            <div class="text-[20px] text-[#000] mb-5 text-center">
                Залиште свій номер телефону, і наш консультант вам зателефонує
            </div>
            <div class="block">
                <Input v-maska
                       data-maska="+38 (0##) ###-##-##"
                       placeholder="+380"
                       v-model="state.item.phone"
                       type="tel"
                ></Input>
                <InputError v-if="state.errors.phone" v-for="error in state.errors.phone" :message="error"/>
            </div>
        </template>
    </Modal>
</template>
