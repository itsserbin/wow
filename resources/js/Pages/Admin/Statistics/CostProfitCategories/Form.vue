<script setup>
import Label from '@/Components/Form/Label.vue';
import InputText from 'primevue/inputtext';
import Dropdown from 'primevue/dropdown';

defineProps(['item'])

const options = [
    {
        code: 0,
        name: 'Витрата',
    },
    {
        code: 1,
        name: 'Прибуток',
    }
];
</script>

<template>
    <form>
        <div class="grid grid-cols-1 gap-4">
            <div class="block">
                <Label value="Назва"/>
                <InputText v-model="item.title"
                           type="text"
                           class="w-full"
                           placeholder="Введіть назву"
                />
            </div>

            <div class="block">
                <Label value="Slug"/>
                <InputText v-model="item.slug"
                           type="text"
                           class="w-full"
                           placeholder="Введіть slug"
                />
            </div>

            <div class="block">
                <Label value="Тип категорії"/>
                <Dropdown v-model="item.type"
                          :options="options"
                          showClear
                          optionLabel="name"
                          placeholder="Оберіть категорію"
                          class="w-full"
                />
            </div>
        </div>
    </form>
</template>
