<script setup>
import {onMounted, ref} from "vue";
import Label from '@/Components/Form/Label.vue';
import Input from '@/Components/Form/Input.vue';
import Multiselect from '@/Components/Multiselect/Multiselect.vue';

defineProps(['item'])

const permissions = ref([]);

onMounted(async () => {
    await axios.get(route('api.permissions.list'))
        .then(({data}) => permissions.value = data.result)
        .catch((response) => console.log(response));
})
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

        <div class="block">
            <Multiselect
                :options="permissions"
                v-model="item.permissions"
                label="name"
                track-by="id"
                :searchable="true"
                :multiple="true"
                :close-on-select="false"
                :clear-on-select="false"
            />
        </div>
    </form>
</template>
