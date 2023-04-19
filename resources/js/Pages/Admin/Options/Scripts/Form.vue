<script setup>
import Label from '@/Components/Form/Label.vue';
import Textarea from '@/Components/Form/Textarea.vue';
import Button from '@/Components/Button.vue';

defineProps(['options']);
defineEmits(['submitForm']);
</script>

<template>
    <form @submit.prevent="$emit('submitForm')">
        <div class="grid grid-cols-1 gap-4 mb-5">
            <div class="block">
                <Label value="Head scripts"/>
                <Textarea v-model="options.head_scripts" rows="6"/>
            </div>
            <div class="block">
                <Label value="Before body scripts"/>
                <Textarea v-model="options.after_body_scripts" rows="6"/>
            </div>
            <div class="block">
                <Label value="Footer scripts"/>
                <Textarea v-model="options.footer_scripts" rows="6"/>
            </div>
        </div>
        <Button type="submit">Зберегти</Button>
    </form>
</template>
