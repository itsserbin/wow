<script setup>
import {computed} from "vue";
import XCircle from '@/Components/Icons/XCircle.vue';

const props = defineProps([
    'image',
    'alt',
    'link',
    'destroyIcon',
    'id',
    'class',
    'size'
]);

defineEmits(['destroyImage', 'clickImage']);

const cardLink = computed(() => props.link ? props.link : 'javascript:');

const imageRoute = function (src) {
    if (src) {
        if (props.size === '55') {
            return '/storage/products/55/' + src;
        } else if (props.size === '350') {
            return '/storage/products/350/' + src;
        } else if (props.size === '500') {
            return '/storage/products/500/' + src;
        } else {
            return '/storage/products/' + src;
        }
    }
}
</script>

<template>
    <div :class="props.class" class="w-full relative">
        <a :href="cardLink">
            <picture>
                <source :srcset="imageRoute(image.webp_src)" type="image/webp">
                <img :src="imageRoute(image.src)"
                     :alt="alt ? alt : null"
                     class="rounded-lg mx-auto  h-full object-cover"
                >
            </picture>
        </a>

        <a v-if="destroyIcon"
           href="javascript:"
           class="text-dark destroy-icon absolute top-0 right-0"
           @click="$emit('destroyImage',id)"
        >
            <XCircle/>
        </a>
    </div>
</template>
