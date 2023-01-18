<template>
    <div class="font-bold text-black text-center text-2xl font-heading mb-[15px]">
        Перевірити статус замовлення
    </div>
    <form class="grid grid-cols-1 gap-4" @submit.prevent="$emit('submitForm')">
        <div class="block">
            <label-component :required="true">Номер телефону</label-component>
            <input-component type="tel"
                             v-model="item.phone"
                             placeholder="+38 (0"
                             v-maska="'+38 (0##) ###-##-##'"
            />
        </div>
        <div class="block">
            <label-component :required="true">ID замовлення</label-component>
            <input-component type="text"
                             v-model="item.order_id"
            />
        </div>
        <div class="text-center">
            <button-component type="submit">Перевірити</button-component>
        </div>
    </form>
</template>

<script setup>
defineProps(['item']);
defineEmits(['submitForm']);
</script>
