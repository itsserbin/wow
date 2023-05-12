<script setup>
import Label from '@/Components/Form/Label.vue';
import Datepicker from '@vuepic/vue-datepicker';
import InputText from 'primevue/inputtext';
import Dropdown from 'primevue/dropdown';
import Textarea from 'primevue/textarea';

defineProps(['item', 'categories'])
</script>

<template>
    <div class="grid gap-y-4">
        <div class="block">
            <Label value="Сума, грн"/>
            <InputText v-model="item.sum"
                       type="number"
                       placeholder="Введіть суму"
                       class="w-full"
            />
        </div>

        <div class="block">
            <Label value="Категорія"/>
            <Dropdown v-model="item.category_id"
                      showClear
                      :options="categories"
                      optionLabel="name"
                      placeholder="Оберіть категорію"
                      class="w-full"
            />
        </div>

        <div class="block">
            <Label value="Дата"/>
            <Datepicker class="w-full"
                        v-model="item.date"
                        placeholder="Оберіть дату"
                        autoApply
                        :monthChangeOnScroll="false"
                        :enableTimePicker="true"
                        enable-seconds
            />
        </div>

        <div class="block">
            <Label value="Коментар"/>
            <Textarea v-model="item.comment" rows="4" class="w-full"/>
        </div>
    </div>
</template>
