<script setup>
import Label from '@/Components/Form/Label.vue';
import Input from '@/Components/Form/Input.vue';

defineProps(['item'])
</script>

<template>
    <form class="flex flex-col">
        <div class="grid grid-cols-1 mb-5">
            <div class="block mr-2">
                <Label value="Назва"/>
                <Input v-model="item.name" type="text"/>
            </div>
        </div>

        <div class="grid grid-cols-1">
            <div class="block mr-2">
                <Label value="HEX"/>
                <Input v-model="item.hex" type="text"/>
            </div>
        </div>
    </form>
</template>
