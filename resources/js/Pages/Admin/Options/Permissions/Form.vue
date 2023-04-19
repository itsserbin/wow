<script setup>
import Label from '@/Components/Form/Label.vue';
import Input from '@/Components/Form/Input.vue';

defineProps(['item'])
</script>

<template>
    <form class="grid grid-cols-1 gap-4">
        <div class="block">
            <Label value="Назва"/>
            <Input v-model="item.name" type="text"/>
        </div>

        <div class="block">
            <Label value="Slug"/>
            <Input v-model="item.slug" type="text"/>
        </div>
    </form>
</template>
