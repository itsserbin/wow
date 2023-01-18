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
                <label-component :required="true">Ім`я</label-component>
                <input-component placeholder="Введіть ваше ім'я"
                                 type="text"
                                 v-model="order.name"
                />
                <input-error v-if="errors.name" v-for="error in errors.name" :message="error"/>
            </div>

            <div class="block">
                <label-component :required="true">Прізвище</label-component>
                <input-component placeholder="Введіть прізвище"
                                 type="text"
                                 v-model="order.last_name"
                />
                <input-error v-if="errors.last_name" v-for="error in errors.last_name" :message="error"/>
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
                <input-error v-if="errors.phone" v-for="error in errors.phone" :message="error"/>
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps(['order', 'errors'])
</script>
