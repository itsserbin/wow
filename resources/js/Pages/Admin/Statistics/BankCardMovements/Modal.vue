<script setup>
import Modal from '@/Components/Modal/Modal.vue';
import ButtonPrimary from '@/Components/Button/Primary.vue';
import ButtonSecondary from '@/Components/Button/Secondary.vue';
import Form from './Form.vue'

defineProps(['show', 'item', 'categories']);
const emits = defineEmits(['close', 'submit']);
</script>

<template>
    <Modal :show="show" @close="emits('close')">
        <template #body>
            <Form :item="item" :categories="categories"/>
        </template>
        <template #footer>
            <div class="grid grid-cols-2 gap-x-6">
                <ButtonSecondary @click="emits('close')" type="button" class="justify-center">
                    Скасувати
                </ButtonSecondary>
                <ButtonPrimary @click="emits('submit')" type="button" class="justify-center">
                    Зберегти
                </ButtonPrimary>
            </div>
        </template>
    </Modal>
</template>
