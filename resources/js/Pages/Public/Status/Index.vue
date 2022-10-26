<template>
    <div>
        <loader v-if="state.isLoading"></loader>
        <div v-if="!state.isLoading" >
            <div class="max-w-xl mx-auto">

            </div>
        </div>
    </div>
</template>

<script setup>
import {ref} from "vue";

const state = ref({
    phone: null,
    order_id: null,
    isLoading: false,
});

function checkStatus(){

}
</script>
