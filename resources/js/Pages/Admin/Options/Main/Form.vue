<template>
    <Logo />
    <form @submit.prevent="$emit('submitForm')">
        <div class="block mb-5">
            <Label :value="$t('options.brand')" />
            <Input v-model="options.brand" type="text" :placeholder="$t('options.enter_brand')" />
        </div>

        <div class="block mb-5">
            <Label :value="$t('options.callback_status')" />
            <div class="grid grid-cols-2 gap-4">
                <RadioBordered name="callback_status" value="on" :label="$t('options.callback_status_on')"
                    v-model="options.callback_status" />
                <RadioBordered name="callback_status" value="off" :label="$t('options.callback_status_off')"
                    v-model="options.callback_status" />
            </div>
        </div>

        <div class="block mb-5">
            <Label :value="$t('options.consultation_status')" />
            <div class="grid grid-cols-2 gap-4">
                <RadioBordered name="consultation_status" value="on" :label="$t('options.consultation_status_on')"
                    v-model="options.consultation_status" />
                <RadioBordered name="consultation_status" value="off" :label="$t('options.consultation_status_off')"
                    v-model="options.consultation_status" />
            </div>
        </div>


        <div class="grid grid-cols-2 gap-4 mb-5">
            <div class="block">
                <Label :value="$t('options.heading_ua')" />
                <Input v-model="options.text_heading_home_page_ua" type="text"
                    :placeholder="$t('options.enter_heading_ua')" />
            </div>
            <div class="block">
                <Label :value="$t('options.heading_ru')" />
                <Input v-model="options.text_heading_home_page_ru" type="text"
                    :placeholder="$t('options.enter_heading_ru')" />
            </div>
        </div>

        <div class="grid grid-cols-2 gap-4 mb-5">
            <div class="block">
                <Label :value="$t('options.meta_title_ua')" />
                <Input v-model="options.meta_title_ua" type="text" :placeholder="$t('options.enter_meta_title_ua')" />
            </div>
            <div class="block">
                <Label :value="$t('options.meta_title_ru')" />
                <Input v-model="options.meta_title_ru" type="text" :placeholder="$t('options.enter_meta_title_ru')" />
            </div>
        </div>

        <div class="grid grid-cols-2 gap-4 mb-5">
            <div class="block">
                <Label :value="$t('options.meta_description_ua')" />
                <Textarea v-model="options.meta_description_ua" :placeholder="$t('options.enter_meta_description_ua')" />
            </div>
            <div class="block">
                <Label :value="$t('options.meta_description_ru')" />
                <Textarea v-model="options.meta_description_ru" :placeholder="$t('options.enter_meta_description_ru')" />
            </div>
        </div>

        <div class="block mb-5">
            <Label :value="$t('options.schedule')" />
            <Textarea v-model="options.schedule" rows="4" :placeholder="$t('options.enter_schedule')" />
        </div>

        <div class="block mb-5">
            <Label :value="$t('options.phone')" />
            <Input v-model="options.phone" type="text" :placeholder="$t('options.enter_phone')" />
        </div>

        <div class="block mb-5">
            <Label :value="$t('options.email')" />
            <Input v-model="options.email" type="text" :placeholder="$t('options.enter_email')" />
        </div>

        <div class="block mb-5">
            <Label :value="$t('options.facebook')" />
            <Input v-model="options.facebook" type="text" :placeholder="$t('options.enter_facebook')" />
        </div>

        <div class="block mb-5">
            <Label :value="$t('options.instagram')" />
            <Input v-model="options.instagram" type="text" :placeholder="$t('options.enter_instagram')" />
        </div>

        <div class="block mb-5">
            <Label :value="$t('options.telegram')" />
            <Input v-model="options.telegram" type="text" :placeholder="$t('options.enter_telegram')" />
        </div>

        <div class="block mb-5">
            <Label :value="$t('options.viber')" />
            <Input v-model="options.viber" type="text" :placeholder="$t('options.enter_viber')" />
        </div>

        <div class="block mb-5">
            <Label :value="$t('options.whatsapp')" />
            <Input v-model="options.whatsapp" type="text" :placeholder="$t('options.enter_whatsapp')" />
        </div>

        <div class="block mb-5">
            <Label :value="$t('options.fb_messenger')" />
            <Input v-model="options.fb_messenger" type="text" :placeholder="$t('options.enter_fb_messenger')" />
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
            <div class="block">
                <Label :value="$t('options.text_delivery_and_payment_ua')" />
                <editor :api-key="tiny.api" v-model="options.text_delivery_and_payment_ua" :init="tiny.settings" />
            </div>

            <div class="block">
                <Label :value="$t('options.text_delivery_and_payment_ru')" />
                <editor :api-key="tiny.api" v-model="options.text_delivery_and_payment_ru" :init="tiny.settings" />
            </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
            <div class="block">
                <Label :value="$t('options.text_return_and_exchange_ua')" />
                <editor :api-key="tiny.api" v-model="options.text_return_and_exchange_ua" :init="tiny.settings" />
            </div>

            <div class="block">
                <Label :value="$t('options.text_return_and_exchange_ru')" />
                <editor :api-key="tiny.api" v-model="options.text_return_and_exchange_ru" :init="tiny.settings" />
            </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
            <div class="block">
                <Label :value="$t('options.text_home_page_ua')" />
                <editor :api-key="tiny.api" v-model="options.text_home_page_ua" :init="tiny.settings" />
            </div>

            <div class="block">
                <Label :value="$t('options.text_home_page_ru')" />
                <editor :api-key="tiny.api" v-model="options.text_home_page_ru" :init="tiny.settings" />
            </div>
        </div>
        <Button type="submit">{{ $t('save') }}</Button>
    </form>
</template>

<script setup>
import Label from '@/Components/Form/Label.vue'
import Input from '@/Components/Form/Input.vue'
import Textarea from '@/Components/Form/Textarea.vue'
import RadioBordered from '@/Components/Form/RadioBordered.vue'
import Button from '@/Components/Button.vue'
import Logo from '@/Pages/Admin/Options/Main/Logo.vue';

import { inject } from "vue";

const tiny = inject('$tiny');

defineProps(['options']);
defineEmits(['submitForm']);
</script>
