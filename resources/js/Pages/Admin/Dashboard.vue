<script setup>
import {Head} from '@inertiajs/inertia-vue3';
</script>

<template>
    <Head title="Dashboard"/>

    <auth-layout>
        <template #header>
            Dashboard
        </template>

        <p> You're logged in! hui</p>
    </auth-layout>
</template>
