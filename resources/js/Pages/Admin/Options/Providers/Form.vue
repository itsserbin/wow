<template>
    <form @submit.prevent="$emit('submit',item)" class="flex flex-col">
        <div class="mb-5">
            <div class="grid grid-cols-2 gap-4 mb-5">
                <div class="block">
                    <label-component value="Назва"/>
                    <input-component v-model="item.name" type="text"/>
                </div>

                <div class="block">
                    <label-component value="Час відправлення"/>
                    <input-component v-model="item.time_of_dispatch" type="text"/>
                </div>
            </div>

            <div class="grid grid-cols-2 gap-4 mb-5">
                <div class="block">
                    <label-component value="Каталог"/>
                    <input-component v-model="item.catalog" type="text"/>
                </div>

                <div class="block">
                    <label-component value="Наявність"/>
                    <input-component v-model="item.availability" type="text"/>
                </div>
            </div>
        </div>

        <div class="mb-5">
            <div class="grid grid-cols-2 gap-4 mb-5">
                <div class="block">
                    <label-component value="Передоплата"/>
                    <select-component v-model="item.prepayment" :options="selectYesOrNo"/>
                </div>

                <div class="block">
                    <label-component value="Сума передоплати"/>
                    <input-component v-model="item.prepayment_sum" type="number"/>
                </div>
            </div>

            <div class="grid grid-cols-2 gap-4 mb-5">
                <div class="block">
                    <label-component value="Оплата повернення"/>
                    <select-component v-model="item.refunds" :options="selectYesOrNo"/>
                </div>

                <div class="block">
                    <label-component value="Сума повернення"/>
                    <input-component v-model="item.refunds_sum" type="number"/>
                </div>
            </div>
        </div>

        <div class="grid grid-cols-2 gap-4 mb-5">
            <div class="block">
                <label-component value="Контакти"/>
                <textarea-component v-model="item.contacts" rows="4"/>
            </div>

            <div class="block">
                <label-component value="Коментар"/>
                <textarea-component v-model="item.comment" rows="4"/>
            </div>
        </div>
    </form>
</template>

<script setup>
import {inject, onMounted, ref} from "vue";

const emits = defineEmits(['submit'])

const props = defineProps(['item'])

const selectYesOrNo = inject('$selectYesOrNo');

const state = ref({
    publishedOptions: [
        {
            key: 0,
            value: 'Not published'
        },
        {
            key: 1,
            value: 'Published'
        }
    ],
    categories: [],
    categoryPreview: [],
});

onMounted(() => {
    getCategoriesList();
    if (props.item.preview) {
        state.value.categoryPreview.push({
            alt: props.item.title.ua ? props.item.title.ua : (props.item.title.ru ? props.item.title.ru : '-'),
            src: props.item.preview
        })
    }
});

function changeLang(val) {
    state.value.activeLang = val;
}

function getCategoriesList() {
    axios.get(route('api.categories.list'))
        .then(({data}) => {
            data.result.forEach((item) => {
                state.value.categories.push(
                    {
                        key: item.id,
                        value: item.title.ua ? item.title.ua : item.title.ru
                    }
                )
            })
        })
        .catch((response) => console.log(response))
}

function uploadImagesFunction() {
    console.log('uploadImagesFunction')
}
</script>
