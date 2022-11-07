<template>
    <form @submit.prevent="$emit('submitForm')" class="grid grid-cols-1 gap-4">
        <div class="block">
            <label-component :required="true">Імʼя</label-component>
            <input-component type="text"
                             v-model="item.name"
                             placeholder="Ваше імʼя"
            />
            <input-error v-if="errors.name" v-for="error in errors.name" :message="error"/>
        </div>
        <div class="block">
            <label-component :required="true">Номер телефону</label-component>
            <input-component type="tel"
                             v-model="item.phone"
                             placeholder="+38 (0"
                             v-maska="'+38 (0##) ###-##-##'"
            />
            <input-error v-if="errors.phone" v-for="error in errors.phone" :message="error"/>
        </div>
        <div class="block">
            <label-component :required="true">ID замовлення</label-component>
            <input-component type="text"
                             v-model="item.order_id"
            />
            <input-error v-if="errors.order_id" v-for="error in errors.order_id" :message="error"/>
        </div>
        <div class="block">
            <label-component>Коментар</label-component>
            <textarea-component rows="4"
                                v-model="item.comment"
            />
        </div>
        <div class="text-center">
            <button-component type="submit">Відправити</button-component>
        </div>
    </form>
</template>

<script setup>
defineProps(['item', 'errors']);
defineEmits(['submitForm']);
</script>
