<script setup>
import GuestLayout from '@/Layouts/GuestLayout.vue';
import InputError from '@/Components/Form/InputError.vue';
import InputLabel from '@/Components/Form/Label.vue';
import PrimaryButton from '@/Components/Button.vue';
import TextInput from '@/Components/Form/Input.vue';
import {Head, useForm} from '@inertiajs/inertia-vue3';

defineOptions({layout: GuestLayout})

const props = defineProps({
    email: String,
    token: String,
});

const form = useForm({
    token: props.token,
    email: props.email,
    password: '',
    password_confirmation: '',
});

const submit = () => {
    form.post(route('password.update'), {
        onFinish: () => form.reset('password', 'password_confirmation'),
    });
};
</script>

<template>
    <Head title="Reset Password"/>

    <form @submit.prevent="submit">
        <div>
            <InputLabel for="email" value="Email"/>
            <TextInput id="email" type="email" class="mt-1 block w-full" v-model="form.email" required autofocus
                       autocomplete="username"/>
            <InputError class="mt-2" :message="form.errors.email"/>
        </div>

        <div class="mt-4">
            <InputLabel for="password" value="Password"/>
            <TextInput id="password" type="password" class="mt-1 block w-full" v-model="form.password" required
                       autocomplete="new-password"/>
            <InputError class="mt-2" :message="form.errors.password"/>
        </div>

        <div class="mt-4">
            <InputLabel for="password_confirmation" value="Confirm Password"/>
            <TextInput id="password_confirmation" type="password" class="mt-1 block w-full"
                       v-model="form.password_confirmation" required autocomplete="new-password"/>
            <InputError class="mt-2" :message="form.errors.password_confirmation"/>
        </div>

        <div class="flex items-center justify-end mt-4">
            <PrimaryButton :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                Reset Password
            </PrimaryButton>
        </div>
    </form>
</template>
