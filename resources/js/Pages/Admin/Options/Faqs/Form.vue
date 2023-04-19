<script setup>
import LangTabs from '@/Components/LangTabs.vue';
import Label from '@/Components/Form/Label.vue';
import Input from '@/Components/Form/Input.vue';
import Select from '@/Components/Form/Select.vue';
import Textarea from '@/Components/Form/Textarea.vue';

import {inject, ref} from "vue";

defineProps(['item'])

const publishedStatuses = inject('$publishedStatuses');
const defaultLang = inject('$defaultLang');

const state = ref({
    activeLang: defaultLang
});

function changeLang(val) {
    state.value.activeLang = val;
}
</script>

<template>
    <form class="grid gap-4">
        <div class="block">
            <Label value="Статус публікації"/>
            <Select v-model="item.published" :options="publishedStatuses"/>
        </div>

        <div>
            <LangTabs @clickLang="changeLang"/>

            <div class="grid gap-4">
                <div class="block">
                    <Label value="Питання"/>
                    <Input v-model="item.question[state.activeLang]" type="text"/>
                </div>

                <div class="block">
                    <Label value="Відповідь"/>
                    <Textarea v-model="item.answer[state.activeLang]" rows="4"/>
                </div>
            </div>
        </div>
    </form>
</template>
