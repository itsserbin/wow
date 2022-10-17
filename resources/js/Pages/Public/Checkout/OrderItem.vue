<template>
    <div class="grid grid-cols-8 border-[1px] border-gray-300 rounded-[10px]">
        <div class="col-span-2">
            <img :src="route('images.products.350',item.image)"
                 :alt="item.name.ua ? item.name.ua : item.name.ru"
                 class="p-[25px]  pr-[1.25rem]"
            >
        </div>
        <div class="col-span-6 p-[20px] flex items-center">
            <div class="flex space-x-[50px]">
                <div class="text-red-600">Мереживна спідня білизна JENNY</div>
                <div class="font-bold mr-[50px]">
                    969 <span>грн</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps(['item']);
</script>
