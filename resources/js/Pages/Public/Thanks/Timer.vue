<script setup>
defineProps(['timer']);
</script>

<template>
    <div class="text-center">
        <div class="grid grid-cols-3 gap-4 max-w-[320px]  mx-auto text-2xl font-bold ">
            <div class="
                        bg-red-100
                        rounded-xl
                        p-5
                        relative
                        after:content-[':']
                        after:right-[-10px]
                        after:absolute
                    "
            >{{ timer.hours }}
            </div>
            <div class="
                        bg-red-100
                        rounded-xl
                        p-5
                        relative
                        after:content-[':']
                        after:right-[-10px]
                        after:absolute
                    "
            >{{ timer.mins }}
            </div>
            <div class="
                        bg-red-100
                        rounded-xl
                        p-5
                        relative
                "
            >{{ timer.secs }}
            </div>
        </div>
    </div>
</template>
