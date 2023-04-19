<script setup>
import {inject, ref} from "vue";
import Label from '@/Components/Form/Label.vue'
import Input from '@/Components/Form/Input.vue'
import Button from '@/Components/Button.vue'
import LangTabs from '@/Components/LangTabs.vue'

const props = defineProps(['item'])
const defaultLang = inject('$defaultLang');

const state = ref({
    activeLang: defaultLang
});

function changeLang(val) {
    state.value.activeLang = val;
}

function addInput() {
    props.item.values.push(
        {
            title: {
                ua: null,
                ru: null,
            }
        }
    )
}

function removeValue(i) {
    props.item.values.splice(i, 1);
}

</script>

<template>
    <form class="flex flex-col">
        <LangTabs @clickLang="changeLang"/>

        <div class="grid grid-cols-1 gap-4">
            <div class="block">
                <Label value="Назва"/>
                <Input v-model="item.title[state.activeLang]" type="text" placeholder="Вкажіть назву характеристики"/>
            </div>

            <div class="block">
                <Label value="Опції" v-if="item.values.length"/>
                <div class="grid gap-4">
                    <div class="flex" v-for="(item,i) in item.values">
                        <Input
                            v-model="item.title[state.activeLang]"
                            type="text"
                            placeholder="Вкажіть значення характеристики"
                        />
                        <div class="flex items-center justify-center pl-3 cursor-pointer" @click="removeValue(i)">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                 class="bi bi-dash-square" viewBox="0 0 16 16">
                                <path
                                    d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                                <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
                            </svg>
                        </div>
                    </div>
                    <div class="text-center">
                        <Button type="button" @click="addInput">Додати опцію</Button>
                    </div>
                </div>
            </div>
        </div>
    </form>
</template>
