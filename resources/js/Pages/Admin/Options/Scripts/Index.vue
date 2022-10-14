<template>
    <OptionsLayout>
        <Form :options="state.options" @submitForm="onUpdate"/>
    </OptionsLayout>
</template>

<script setup>
import OptionsLayout from '@/Pages/Admin/Options/OptionsLayout.vue'
import Form from '@/Pages/Admin/Options/Scripts/Form.vue'
import {onMounted, ref} from "vue";

const state = ref({
    options: {
        head_scripts: null,
        after_body_scripts: null,
        footer_scripts: null,
    }
});

onMounted(() => {
    axios.get(route('api.options.scripts.index'))
        .then(({data}) => state.value.options = data.result)
        .catch((response) => console.log(response));
})

function onUpdate() {
    axios.put(route('api.options.scripts.update'), state.value.options)
        .then(({data}) => console.log(data))
        .catch((response) => console.log(response));
}
</script>
