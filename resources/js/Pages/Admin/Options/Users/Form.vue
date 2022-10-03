<template>
    <form>
        <div class="grid grid-cols-1 md:grid-cols-2 mb-5 gap-4">
            <div class="block">
                <label-component value="Назва"/>
                <input-component v-model="item.name" type="text"/>
            </div>

            <div class="block">
                <label-component value="Email"/>
                <input-component v-model="item.email" type="email"/>
            </div>
        </div>

        <div class="grid grid-cols-1 mb-5">
            <label-component value="Ролі"/>
            <multiselect
                :options="roles"
                v-model="item.roles"
                label="name"
                placeholder="Оберіть ролі"
                track-by="id"
                :close-on-select="true"
                :searchable="true"
                multiple
            />
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 mb-5 gap-4">
            <div class="block">
                <label-component value="Новий пароль"/>
                <input-component v-model="item.password" type="password"/>
            </div>
            <div class="block">
                <label-component value="Підтвердження паролю"/>
                <input-component v-model="item.password_confirmation" type="password"/>
            </div>
        </div>
    </form>
</template>

<script setup>
import {inject, onMounted, ref} from "vue";

defineProps(['item'])

const publishedStatuses = inject('$publishedStatuses');

const roles = ref([]);

onMounted(() => {
    axios.get(route('api.roles.list'))
        .then(({data}) => roles.value = data.result)
})
</script>
