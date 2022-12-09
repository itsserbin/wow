<template>
    <OptionsLayout>
        <Form :options="state.options" @submitForm="onUpdate" v-if="can('show-scripts-options')"/>
    </OptionsLayout>
</template>

<script setup>
import OptionsLayout from '@/Pages/Admin/Options/OptionsLayout.vue'
import Form from '@/Pages/Admin/Options/Scripts/Form.vue'
import {inject, onMounted, ref} from "vue";

const can = inject('$can');
const swal = inject('$swal');

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
        .then(({data}) => {
            swal({
                title: 'Updated!',
                icon: 'success'
            });
        })
        .catch((response) => {
            swal({
                title: 'Error',
                icon: 'error',
            });
            console.log(response);
        });
}
</script>
