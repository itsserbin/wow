<script setup>
import {onMounted, inject, ref} from "vue";

import Select from '@/Components/Form/Select.vue';
import Label from '@/Components/Form/Label.vue';
import Input from '@/Components/Form/Input.vue';
import Datepicker from '@vuepic/vue-datepicker';

const publishedStatuses = inject('$publishedStatuses')
const props = defineProps(['item'])

const state = ref({
    discount_type: '',
    discountTypeOptions: [
        {
            key: 'discount_in_hryvnia',
            value: 'Знижка в гривнях'
        },
        {
            key: 'percent_discount',
            value: 'Знижка в відсотках'
        }
    ]
});

onMounted(() => {
    if (props.item.discount_in_hryvnia) {
        state.value.discount_type = 'discount_in_hryvnia';
    }
    if (props.item.percent_discount) {
        state.value.discount_type = 'percent_discount';
    }
})

function onChangeDiscountType() {
    if (state.value.discount_type === 'discount_in_hryvnia') {
        props.item.percent_discount = null
    }
    if (state.value.discount_type === 'percent_discount') {
        props.item.discount_in_hryvnia = null
    }
}
</script>

<template>
    <form class="grid gap-4">
        <div class="block">
            <Label value="Статус публікації"/>
            <Select v-model="item.published" :options="publishedStatuses"/>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="block">
                <Label value="Код"/>
                <Input v-model="item.code" type="text"/>
            </div>

            <div class="block">
                <Label value="Кінцева дата"/>
                <Datepicker v-model="item.end_date"
                            class="w-100"
                            locale="ru"
                            placeholder="Оберіть дату"
                            autoApply
                            :monthChangeOnScroll="false"
                            :enableTimePicker="false"
                ></Datepicker>
            </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="block">
                <Label value="Тип знижки"/>
                <Select v-model="state.discount_type"
                        :options="state.discountTypeOptions"
                        @change="onChangeDiscountType"
                />
            </div>

            <div class="block" v-if="state.discount_type">
                <Label value="Сума знижки"/>
                <Input v-if="state.discount_type === 'discount_in_hryvnia'"
                       v-model="item.discount_in_hryvnia"
                       type="number"
                />
                <Input v-if="state.discount_type === 'percent_discount'"
                       v-model="item.percent_discount"
                       type="number"
                />
            </div>

        </div>
    </form>
</template>
