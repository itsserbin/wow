<template>
    <div class="font-bold text-black text-center text-2xl font-heading mb-[15px]">
        Перевірити статус замовлення
    </div>
    <form class="grid grid-cols-1 gap-4" @submit.prevent="$emit('submitForm')">
        <div class="block">
            <Label :required="true">Номер телефону</Label>
            <Input type="tel"
                   v-model="item.phone"
                   placeholder="+38 (0"
                   v-maska
                   data-maska="+38 (0##) ###-##-##"
            />
        </div>
        <div class="block">
            <Label :required="true">ID замовлення</Label>
            <Input type="text"
                   v-model="item.order_id"
            />
        </div>
        <div class="text-center">
            <Button type="submit">Перевірити</Button>
        </div>
    </form>
</template>

<script setup>
import Label from '@/Pages/Public/Components/Label.vue';
import Input from '@/Pages/Public/Components/Input.vue';
import Button from '@/Pages/Public/Components/Button.vue';
import { vMaska } from "@/Includes/maska"

defineProps(['item']);
defineEmits(['submitForm']);
</script>
