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
        <div class="text-[1.625rem] font-[400] ">
            <h3>Персональні дані</h3>
        </div>
        <div class="grid gap-4">
            <div class="block">
                <label-component>Ім`я</label-component>
                <input-component placeholder="Введіть ваше ім'я"
                                 type="text"
                                 v-model="order.name"
                />
            </div>

            <div class="block">
                <label-component>Прізвище</label-component>
                <input-component placeholder="Введіть прізвище"
                                 type="text"
                                 v-model="order.last_name"
                />
            </div>

            <div class="block">
                <label-component>По батькові</label-component>
                <input-component placeholder="Введіть по батькові"
                                 type="text"
                                 v-model="order.middle_name"
                />
            </div>

            <div class="block">
                <label-component :required="true">Номер телефону</label-component>
                <input-component placeholder="+38 (0"
                                 type="tel"
                                 v-maska="'+38 (0##) ###-##-##'"
                                 v-model="order.phone"
                />
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps(['order'])
</script>
