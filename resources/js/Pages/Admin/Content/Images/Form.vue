<script setup>
import {computed, ref} from 'vue';
import Card from '@/Components/Card.vue';
import Button from '@/Components/Button.vue';
import Label from '@/Components/Form/Label.vue';
import Input from '@/Components/Form/Input.vue';

const imageSrc = computed(() => (value) => {
    if (activeSize.value === '55') {
        return '/storage/products/55/' + value;
    } else if (activeSize.value === '350') {
        return '/storage/products/350/' + value;
    } else if (activeSize.value === '500') {
        return '/storage/products/500/' + value;
    } else {
        return '/storage/products/' + value;
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

<template>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-5">
        <Button type="button"
                          v-for="item in sizesState"
                          @click="clickSize(item.key)"
                          :active="item.key === activeSize"
        >
            {{ item.label }}
        </Button>
    </div>
    <div v-if="image">
        <Card
            :image="imageSrc(image.src)"
            :image-alt="image.alt"
        />
        <div class="block mt-5">
            <Label value="Alt"/>
            <Input v-model="image.alt" type="text"/>
        </div>
    </div>
</template>
