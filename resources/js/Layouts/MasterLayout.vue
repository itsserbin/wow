<template>
    <div v-if="isLoading" class="loader">
        <div class="loader">
            <div class="fixed inset-0 z-50 flex items-center justify-center backdrop-filter backdrop-blur-md">
                <div class="lds-ellipsis inline-block relative w-[80px] h-[80px]">
                    <div class="absolute top-[33px] w-[13px] h-[13px] rounded-[50%] bg-[#ff0000]"></div>
                    <div class="absolute top-[33px] w-[13px] h-[13px] rounded-[50%] bg-[#ff0000]"></div>
                    <div class="absolute top-[33px] w-[13px] h-[13px] rounded-[50%] bg-[#ff0000]"></div>
                    <div class="absolute top-[33px] w-[13px] h-[13px] rounded-[50%] bg-[#ff0000]"></div>
                </div>
            </div>
        </div>
    </div>
    <div v-else>
        <slot></slot>
    </div>

</template>
<script setup>
import {ref} from "vue";

const isLoading = ref(true);

document.addEventListener('DOMContentLoaded', () => {
    isLoading.value = false;
});
</script>
