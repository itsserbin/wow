<template>
    <form class="grid grid-cols-1 gap-4">
        <div class="block">
            <label-component value="Назва"/>
            <input-component v-model="item.name" type="text"/>
        </div>

        <div class="block">
            <label-component value="Slug"/>
            <input-component v-model="item.slug" type="text"/>
        </div>

        <div class="block">
            <multiselect
                :options="permissions"
                v-model="item.permissions"
                label="name"
                track-by="id"
                :searchable="true"
                :multiple="true"
            />
        </div>
    </form>
</template>

<script setup>
import {onMounted, ref} from "vue";

defineProps(['item'])

const permissions = ref([]);

onMounted(() => {
    axios.get(route('api.permissions.list'))
        .then(({data}) => permissions.value = data.result)
        .catch((response) => console.log(response));
})
</script>
