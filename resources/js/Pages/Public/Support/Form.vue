<template>
    <form @submit.prevent="$emit('submitForm')" class="grid grid-cols-1 gap-4">
        <div class="block">
            <Label :required="true">Імʼя</Label>
            <Input type="text"
                             v-model="item.name"
                             placeholder="Ваше імʼя"
            />
            <InputError v-if="errors.name" v-for="error in errors.name" :message="error"/>
        </div>
        <div class="block">
            <Label :required="true">Номер телефону</Label>
            <Input type="tel"
                             v-model="item.phone"
                             placeholder="+38 (0"
                             v-maska="'+38 (0##) ###-##-##'"
            />
            <InputError v-if="errors.phone" v-for="error in errors.phone" :message="error"/>
        </div>
        <div class="block">
            <Label :required="true">ID замовлення</Label>
            <Input type="text"
                             v-model="item.order_id"
            />
            <InputError v-if="errors.order_id" v-for="error in errors.order_id" :message="error"/>
        </div>
        <div class="block">
            <Label>Коментар</Label>
            <Textarea rows="4"
                                v-model="item.comment"
            />
        </div>
        <div class="text-center">
            <Button type="submit">Відправити</Button>
        </div>
    </form>
</template>

<script setup>
import Label from '@/Pages/Public/Components/Label.vue';
import Input from '@/Pages/Public/Components/Input.vue';
import InputError from '@/Components/Form/InputError.vue';
import Button from '@/Pages/Public/Components/Button.vue';
import Textarea from '@/Pages/Public/Components/Textarea.vue';

defineProps(['item', 'errors']);
defineEmits(['submitForm']);
</script>
