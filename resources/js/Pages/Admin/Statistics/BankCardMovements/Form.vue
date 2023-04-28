<script setup>
import Input from '@/Components/Form/Input.vue';
import Label from '@/Components/Form/Label.vue';
import Textarea from '@/Components/Form/Textarea.vue';
import Select from '@/Components/Form/Select.vue';
import Datepicker from 'vue-tailwind-datepicker'

defineProps(['item', 'categories']);
</script>

<template>
    <div class="grid gap-y-4">
        <div class="block">
            <Label value="Сума, грн"/>
            <Input v-model="item.sum"/>
        </div>

        <div class="block">
            <Label value="Категорія"/>
            <Select v-model="item.category_id" :options="categories"/>
        </div>

        <div class="block">
            <Label value="Дата"/>
            <Datepicker v-model="item.date" overlay as-single/>
        </div>

        <div class="block">
            <Label value="Коментар"/>
            <Textarea v-model="item.comment" rows="4"/>
        </div>
    </div>
</template>
