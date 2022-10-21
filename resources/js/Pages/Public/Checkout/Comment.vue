<template>
    <div class="
                bg-[#fff]
                border-[0.5px]
                border-gray-300
                rounded-[12px]
                shadow-lg
                box-border
                mb-[1.5rem]
                pt-[1.25rem]
                pr-[1rem]
                pb-[1.25rem]
                pl-[1rem]
            "
    >
        <div class="text-[1.625rem] font-[400]">
            <h3>Коментар</h3>
        </div>
        <label class="text-[1.075rem] font-[500] text-[#686868]  w-[100%]">
            <textarea placeholder="Введіть ваш коментар"
                      v-model="order.comment"
                      class="
                                border-[0.5px]
                                rounded-[10px]
                                box-border
                                font-[350]
                                h-[100]
                                mt-[0.75rem]
                                p-[1rem]
                                resize-none
                                w-[100%]
                                outline-none
                                border-red-600
                                focus:border-red-600
                                focus:ring-red-600
                                "
            ></textarea>
        </label>
    </div>
</template>

<script setup>
defineProps(['order'])
</script>
