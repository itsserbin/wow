<script setup>
import {ref} from "vue";
import {swal} from '@/Includes/swal';
import Modal from '@/Pages/Public/Components/Modal.vue'
import Input from '@/Pages/Public/Components/Input.vue'
import Label from '@/Pages/Public/Components/Label.vue'
import InputError from '@/Components/Form/InputError.vue'
import {vMaska} from "@/Includes/maska"

const state = ref({
    show: false,
    isLoading: false,
    item: {
        name: null,
        phone: null,
        comment: null,
    },
    errors: []
});

function showModal() {
    state.value.show = !state.value.show;
}

function sendForm() {
    state.value.isLoading = true;
    axios.post(route('api.v1.callback.create'), state.value.item)
        .then(() => {
            swal({
                icon: 'success',
                title: 'Ваш запит надіслано!',
                text: 'Наш оператор зателефонує Вам протягом 5 хвилин',
            })
            state.value.item = {
                name: null,
                phone: null,
                comment: null
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
    <div>
        <div class="bottom-[5%] block fixed right-[2%] z-10" @click="showModal">
            <div class="
                    items-center
                    bg-button
                    rounded-[50%]
                    cursor-pointer
                    flex
                    h-[50px]
                    justify-center
                    opacity-[0.9]
                    w-[50px]
                    hover:bg-accent
                    transition-all
                    duration-150
            ">
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M29.16 19.5C28.83 19.5 28.485 19.395 28.155 19.32C27.4868 19.1727 26.83 18.9772 26.19 18.735C25.4942 18.4818 24.7293 18.495 24.0425 18.7719C23.3557 19.0488 22.7957 19.5699 22.47 20.235L22.14 20.91C20.679 20.0973 19.3365 19.0878 18.15 17.91C16.9722 16.7235 15.9628 15.381 15.15 13.92L15.78 13.5C16.4451 13.1744 16.9662 12.6143 17.2431 11.9275C17.52 11.2408 17.5332 10.4759 17.28 9.77998C17.0419 9.13862 16.8464 8.48218 16.695 7.81499C16.62 7.48499 16.56 7.13999 16.515 6.79499C16.3329 5.73842 15.7795 4.7816 14.9545 4.09684C14.1295 3.41209 13.0871 3.0444 12.015 3.05999H7.51503C6.86858 3.05392 6.2284 3.18721 5.63809 3.45078C5.04778 3.71436 4.52119 4.10203 4.09417 4.58741C3.66716 5.07279 3.34973 5.64448 3.16351 6.26356C2.97729 6.88264 2.92665 7.53457 3.01503 8.17498C3.81414 14.4591 6.68407 20.2978 11.1715 24.7689C15.6589 29.2401 21.5081 32.0887 27.795 32.865H28.365C29.4712 32.8666 30.5391 32.4608 31.365 31.725C31.8396 31.3006 32.2187 30.7803 32.4772 30.1985C32.7358 29.6167 32.868 28.9866 32.865 28.35V23.85C32.8467 22.8081 32.4672 21.8048 31.7915 21.0115C31.1158 20.2182 30.1858 19.6839 29.16 19.5ZM29.91 28.5C29.9098 28.713 29.8641 28.9234 29.7762 29.1174C29.6883 29.3114 29.56 29.4844 29.4 29.625C29.2324 29.7697 29.0364 29.8778 28.8246 29.9424C28.6128 30.007 28.3899 30.0266 28.17 30C22.5524 29.2797 17.3344 26.7097 13.3391 22.6954C9.34382 18.6811 6.79865 13.451 6.10503 7.82999C6.08116 7.61026 6.10208 7.38798 6.16653 7.17657C6.23099 6.96516 6.33763 6.76902 6.48003 6.59999C6.62059 6.43998 6.79362 6.31175 6.9876 6.22381C7.18157 6.13588 7.39205 6.09026 7.60503 6.08999H12.105C12.4538 6.08222 12.7945 6.1963 13.0682 6.41259C13.342 6.62888 13.5318 6.93384 13.605 7.27499C13.665 7.68499 13.74 8.08998 13.83 8.48998C14.0033 9.2807 14.2339 10.0578 14.52 10.815L12.42 11.79C12.2405 11.8724 12.079 11.9894 11.9448 12.1344C11.8106 12.2794 11.7063 12.4494 11.638 12.6348C11.5697 12.8201 11.5387 13.0172 11.5468 13.2146C11.5549 13.412 11.6018 13.6058 11.685 13.785C13.8438 18.4091 17.5609 22.1262 22.185 24.285C22.5502 24.435 22.9598 24.435 23.325 24.285C23.5121 24.2181 23.684 24.1147 23.8308 23.9808C23.9776 23.8469 24.0963 23.6851 24.18 23.505L25.11 21.405C25.8855 21.6823 26.6769 21.9127 27.48 22.095C27.88 22.185 28.285 22.26 28.695 22.32C29.0362 22.3932 29.3411 22.583 29.5574 22.8568C29.7737 23.1306 29.8878 23.4712 29.88 23.82L29.91 28.5Z"
                        fill="white"></path>
                </svg>
            </div>
        </div>
    </div>

    <Modal @closeModal="showModal"
           v-if="state.show"
           size="medium"
           submit-button-text="Відправити"
           cancel-button-text="Не потрібно"
           @submitForm="sendForm"
           @clickCancel="showModal"
           :is-loading="state.isLoading"
    >
        <template #title>
            Замовити дзвінок
        </template>

        <template #content>
            <div class="grid grid-cols-1 gap-4">
                <div class="block">
                    <Label>Ім`я</Label>
                    <Input placeholder="Введіть ваше ім'я"
                           type="text"
                           v-model="state.item.name"
                    ></Input>
                </div>

                <div class="block">
                    <Label :required="true">Номер телефону</Label>
                    <Input v-maska
                           data-maska="+38 (0##) ###-##-##"
                           placeholder="+380"
                           v-model="state.item.phone"
                           type="tel"
                    ></Input>
                    <InputError v-if="state.errors.phone" v-for="error in state.errors.phone" :message="error"/>
                </div>

                <div class="block">
                    <Label>Коментар</Label>
                    <textarea class="
                                    border-[0.5px]
                                    rounded-[10px]
                                    box-border
                                    font-[350]
                                    h-[100px]
                                    mt-[0.75rem]
                                    p-[1rem]
                                    resize-none
                                    w-[100%]
                                    outline-none
                                    border-red-600
                                    focus:border-red-600
                                    focus:ring-red-600
                                "
                              rows="6"
                              v-model="state.item.comment"
                    ></textarea>
                </div>
            </div>
        </template>
    </Modal>
</template>
