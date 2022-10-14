<template>
    <div class="flex justify-center">
        <button class="
                    cursor-pointer
                    w-[250px]
                    h-[50px]
                    text-white
                    bg-[#E02424]
                    text-bold uppercase
                    rounded-[10px]
                "
                type="button"
        >
            <span>{{ text }}</span>
        </button>
    </div>
</template>

<script setup>
defineProps({
    text: {
        type: String,
        default: 'Завантажити ще'
    },
});
</script>
