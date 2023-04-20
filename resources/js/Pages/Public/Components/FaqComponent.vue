<script setup>
import Accordion from "@/Pages/Public/Components/Accordion/Accordion.vue";
import AccordionItem from "@/Pages/Public/Components/Accordion/AccordionItem.vue";

defineProps({
    data: {
        type: Array
    },
    lang: {
        type: String,
        default: 'ua'
    },
    textFaqHeading: {
        type: String,
        default: 'FAQ'
    },
});
</script>

<template>
    <div class="w-full" v-if="data.length">
        <div class="font-bold text-[22px] text-center text-black mb-3">{{ textFaqHeading }}</div>
        <Accordion>
            <AccordionItem v-for="faq in data">
                <template #accordion-trigger>
                    {{ lang === 'ua' ? faq.question.ua : faq.question.ru }}
                </template>
                <template #accordion-content>
                    <div v-html="lang === 'ua' ? faq.answer.ua : faq.answer.ru"></div>
                </template>
            </AccordionItem>
        </Accordion>
    </div>
</template>
