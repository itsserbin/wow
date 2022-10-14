<template>
    <form @submit.prevent="$emit('submitForm')">
        <div class="grid grid-cols-1 gap-4 mb-5">
            <div class="block">
                <label-component value="Head scripts"/>
                <textarea-component v-model="options.head_scripts" rows="6"/>
            </div>
            <div class="block">
                <label-component value="Before body scripts"/>
                <textarea-component v-model="options.after_body_scripts" rows="6"/>
            </div>
            <div class="block">
                <label-component value="Footer scripts"/>
                <textarea-component v-model="options.footer_scripts" rows="6"/>
            </div>
        </div>
        <button-component type="submit">Зберегти</button-component>
    </form>
</template>

<script setup>
defineProps(['options']);
defineEmits(['submitForm']);
</script>
