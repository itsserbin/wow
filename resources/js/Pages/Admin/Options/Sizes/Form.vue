<script setup>
import {inject} from "vue";

import Label from '@/Components/Form/Label.vue';
import Input from '@/Components/Form/Input.vue';
import Select from '@/Components/Form/Select.vue';

defineProps(['item'])
const publishedStatuses = inject('$publishedStatuses');
</script>

<template>
    <form>
        <div class="grid grid-cols-1 mb-5">
            <div class="block mr-2">
                <Label value="Статус публікації"/>
                <Select v-model="item.published" :options="publishedStatuses"/>
            </div>
        </div>

        <div class="grid grid-cols-1 mb-5">
            <div class="block mr-2">
                <Label value="Назва"/>
                <Input v-model="item.title" type="text"/>
            </div>
        </div>
    </form>
</template>
