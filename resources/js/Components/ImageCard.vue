<template>
    <div
        :class="props.class"
        class="w-full mx-auto bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 relative"
    >
        <a :href="cardLink" v-if="link">
            <img class="rounded-lg h-full w-full object-cover"
                 :src="image"
                 :alt="alt ? alt : null"
                 @click="$emit('clickImage')"
            />
        </a>

        <img v-else
             class="rounded-lg h-full w-full object-cover hover:cursor-pointer"
             :src="image"
             :alt="alt ? alt : null"
             @click="$emit('clickImage')"
        />

        <a v-if="destroyIcon"
           href="javascript:"
           class="text-dark destroy-icon absolute top-0 right-0"
           @click="$emit('destroyImage',id)"
        >
            <XCircle/>
        </a>
    </div>
</template>

<script setup>
import {computed} from "vue";
import XCircle from '@/Components/Icons/XCircle.vue';

const props = defineProps(['image', 'alt', 'link', 'destroyIcon', 'id','class'])

defineEmits(['destroyImage','clickImage']);

const cardLink = computed(() => props.link ? props.link : 'javascript:');
</script>
