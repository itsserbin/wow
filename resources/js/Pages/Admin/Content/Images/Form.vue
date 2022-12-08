<template>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-5">
        <button-component type="button"
                          v-for="item in sizesState"
                          @click="clickSize(item.key)"
                          :active="item.key === activeSize"
        >
            {{ item.label }}
        </button-component>
    </div>
    <div v-if="image">
        <Card
            :image="imageSrc(image.src)"
            :image-alt="image.alt"
        />
        <div class="block mt-5">
            <label-component value="Alt"/>
            <input-component v-model="image.alt" type="text"/>
        </div>
    </div>
</template>

<script setup>
import {computed, ref} from 'vue';
import Card from '@/Components/Card.vue';

const imageSrc = computed(() => (value) => {
    if (activeSize.value === '55') {
        return route('images.55', value);
    } else if (activeSize.value === '350') {
        return route('images.350', value);
    } else if (activeSize.value === '500') {
        return route('images.500', value);
    } else {
        return route('images', value);
    }
})

const sizesState = [
    {
        label: '55',
        key: '55'
    },
    {
        label: '350',
        key: '350'
    },
    {
        label: '500',
        key: '500'
    },
    {
        label: 'Oригінал',
        key: null
    },
];

const activeSize = ref('350');

defineProps(['image']);

function clickSize(val) {
    activeSize.value = val;
}
</script>
