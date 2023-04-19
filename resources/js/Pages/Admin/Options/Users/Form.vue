<script setup>
import {onMounted, ref} from "vue";

import Label from '@/Components/Form/Label.vue';
import Input from '@/Components/Form/Input.vue';
import Multiselect from '@/Components/Multiselect/Multiselect.vue';

defineProps(['item'])

const roles = ref([]);

onMounted(async () => {
    await axios.get(route('api.roles.list'))
        .then(({data}) => roles.value = data.result)
        .catch((response) => console.error(response));
})
</script>

<template>
    <form class="grid grid-cols-1 gap-4">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="block">
                <Label value="Назва"/>
                <Input v-model="item.name" type="text"/>
            </div>

            <div class="block">
                <Label value="Email"/>
                <Input v-model="item.email" type="email"/>
            </div>
        </div>

        <div class="block">
            <Label value="Ролі"/>
            <Multiselect
                :options="roles"
                v-model="item.roles"
                label="name"
                placeholder="Оберіть ролі"
                track-by="id"
                :close-on-select="false"
                :searchable="true"
                multiple
            />
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="block">
                <Label value="Новий пароль"/>
                <Input v-model="item.password" type="password"/>
            </div>
            <div class="block">
                <Label value="Підтвердження паролю"/>
                <Input v-model="item.password_confirmation" type="password"/>
            </div>
        </div>
    </form>
</template>
