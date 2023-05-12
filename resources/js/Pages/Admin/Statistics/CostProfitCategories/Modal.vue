<script setup>
import Modal from '@/Components/Modal/Modal.vue';
import CostCategoryForm from '@/Pages/Admin/Statistics/CostProfitCategories/Form.vue';
import ButtonPrimary from '@/Components/Button/Primary.vue';
import ButtonSecondary from '@/Components/Button/Secondary.vue';

defineProps(['item', 'show']);

const emits = defineEmits(['close', 'submit']);
</script>

<template>
    <Modal :show="show" @close="emits('close')">
        <template #body>
            <CostCategoryForm :item="item"/>
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
