<template>
    <OptionsLayout>
        <Form :options="state.options" @submitForm="onUpdate"/>
    </OptionsLayout>
</template>

<script setup>
import OptionsLayout from '@/Pages/Admin/Options/OptionsLayout.vue'
import Form from '@/Pages/Admin/Options/Main/Form.vue'
import {onMounted, ref} from "vue";

const state = ref({
    options: {}
});

onMounted(() => {
    axios.get(route('api.options.main.index'))
        .then(({data}) => state.value.options = data.result)
        .catch((response) => console.log(response));
})

function onUpdate() {
    axios.put(route('api.options.main.update'), state.value.options)
        .then(({data}) => console.log(data))
        .catch((response) => console.log(response));
}
</script>
