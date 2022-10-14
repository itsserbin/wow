<template>
    <form @submit.prevent="$emit('submitForm')">
        <div class="block mb-5">
            <label-component value="Brand"/>
            <input-component v-model="options.brand" type="text"/>
        </div>

        <div class="block mb-5">
            <label-component value="Callback"/>
            <div class="grid grid-cols-2 gap-4">
                <div class="flex items-center pl-4 rounded border border-gray-200 dark:border-gray-700">
                    <input name="callback_status"
                           v-model="options.callback_status"
                           value="on"
                           type="radio"
                           class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                    <label
                        class="py-4 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">Активний</label>
                </div>

                <div class="flex items-center pl-4 rounded border border-gray-200 dark:border-gray-700">
                    <input name="callback_status"
                           v-model="options.callback_status"
                           value="off"
                           type="radio"
                           class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                    <label
                        class="py-4 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">Вимкненний</label>
                </div>
            </div>
        </div>


        <div class="grid grid-cols-2 gap-4 mb-5">
            <div class="block">
                <label-component value="Title home page UA"/>
                <input-component v-model="options.text_heading_home_page_ua" type="text"/>
            </div>
            <div class="block">
                <label-component value="Title home page RU"/>
                <input-component v-model="options.text_heading_home_page_ru" type="text"/>
            </div>
        </div>

        <div class="grid grid-cols-2 gap-4 mb-5">
            <div class="block">
                <label-component value="META Title home page UA"/>
                <input-component v-model="options.meta_title_ua" type="text"/>
            </div>
            <div class="block">
                <label-component value="META Title home page RU"/>
                <input-component v-model="options.meta_title_ru" type="text"/>
            </div>
        </div>

        <div class="grid grid-cols-2 gap-4 mb-5">
            <div class="block">
                <label-component value="META Description home page UA"/>
                <textarea-component v-model="options.meta_description_ua"/>
            </div>
            <div class="block">
                <label-component value="META Description home page RU"/>
                <textarea-component v-model="options.meta_description_ru"/>
            </div>
        </div>

        <div class="block mb-5">
            <label-component value="Графік роботи"/>
            <textarea-component v-model="options.schedule" rows="4"/>
        </div>

        <div class="block mb-5">
            <label-component value="Телефон"/>
            <input-component v-model="options.phone" type="text"/>
        </div>

        <div class="block mb-5">
            <label-component value="Email"/>
            <input-component v-model="options.email" type="text"/>
        </div>

        <div class="block mb-5">
            <label-component value="Facebook"/>
            <input-component v-model="options.facebook" type="text"/>
        </div>

        <div class="block mb-5">
            <label-component value="Instagram"/>
            <input-component v-model="options.instagram" type="text"/>
        </div>

        <div class="block mb-5">
            <label-component value="Telegram"/>
            <input-component v-model="options.telegram" type="text"/>
        </div>

        <div class="block mb-5">
            <label-component value="Viber"/>
            <input-component v-model="options.viber" type="text"/>
        </div>

        <div class="block mb-5">
            <label-component value="Whatsapp"/>
            <input-component v-model="options.whatsapp" type="text"/>
        </div>

        <div class="block mb-5">
            <label-component value="Facebook messenger"/>
            <input-component v-model="options.fb_messenger" type="text"/>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
            <div class="block">
                <label-component value="Текст 'Доставка и оплата' на странице товара UA"/>
                <textarea-component v-model="options.text_delivery_and_payment_ua" rows="6"/>
            </div>

            <div class="block">
                <label-component value="Текст 'Доставка и оплата' на странице товара RU"/>
                <textarea-component v-model="options.text_delivery_and_payment_ru" rows="6"/>
            </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
            <div class="block">
                <label-component value="Текст 'Обмен и возврат' на странице товара UA"/>
                <textarea-component v-model="options.text_return_and_exchange_ua" rows="6"/>
            </div>

            <div class="block">
                <label-component value="Текст 'Обмен и возврат' на странице товара RU"/>
                <textarea-component v-model="options.text_return_and_exchange_ru" rows="6"/>
            </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
            <div class="block">
                <label-component value="Текст на главной странице UA"/>
                <textarea-component v-model="options.text_home_page_ua" rows="6"/>
            </div>

            <div class="block">
                <label-component value="Текст на главной странице RU"/>
                <textarea-component v-model="options.text_home_page_ru" rows="6"/>
            </div>
        </div>
        <button-component type="submit">Save</button-component>
    </form>
</template>

<script setup>
defineProps(['options']);
defineEmits(['submitForm']);
</script>
