<template>
    <div class="
                bg-[#fff]
                border-[0.5px]
                rounded-[15px]
                shadow-lg
                box-border
                mb-[1.5rem]
                pt-[1.5rem]
                pr-[1rem]
                pb-[1.25rem]
                pl-[1rem]
            "
    >
        <div class="text-2xl font-heading font-[400] ">
            <h3>Персональні дані</h3>
        </div>
        <div class="grid gap-4">
            <div class="block">
                <Label :required="true">Ім`я</Label>
                <Input placeholder="Введіть ваше ім'я"
                       type="text"
                       v-model="order.name"
                />
                <InputError v-if="errors.name" v-for="error in errors.name" :message="error"/>
            </div>

            <div class="block">
                <Label :required="true">Прізвище</Label>
                <Input placeholder="Введіть прізвище"
                       type="text"
                       v-model="order.last_name"
                />
                <InputError v-if="errors.last_name" v-for="error in errors.last_name" :message="error"/>
            </div>

            <div class="block">
                <Label>По батькові</Label>
                <Input placeholder="Введіть по батькові"
                       type="text"
                       v-model="order.middle_name"
                />
            </div>

            <div class="block">
                <Label :required="true">Номер телефону</Label>
                <Input placeholder="+38 (0"
                       type="tel"
                       v-model="order.phone"
                       ref="phone"
                       v-maska="'+38 (0##) ###-##-##'"
                />
                <InputError v-if="errors.phone" v-for="error in errors.phone" :message="error"/>
            </div>
        </div>
    </div>
</template>

<script setup>
import Label from '@/Pages/Public/Components/Label.vue'
import Input from '@/Pages/Public/Components/Input.vue'
import InputError from '@/Components/Form/InputError.vue'
import {maska as vMaska} from 'maska'

defineProps(['order', 'errors'])
</script>
