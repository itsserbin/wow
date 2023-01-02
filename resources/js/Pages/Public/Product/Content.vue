<template>
    <Accordion>
        <AccordionItem>
            <template #accordion-trigger>
                Опис
            </template>
            <template #accordion-content>
                <div class="content" v-html="lang === 'ru' ? state.description.ru : state.description.ua"></div>
            </template>
        </AccordionItem>


        <AccordionItem>
            <template #accordion-trigger>
                Характеристики
            </template>
            <template #accordion-content>
                <div class="characteristics-table flex justify-center"
                     v-html="lang === 'ru' ? state.characteristics.ru : state.characteristics.ua"
                ></div>
            </template>
        </AccordionItem>

        <AccordionItem>
            <template #accordion-trigger>
                Таблиця розмірів
            </template>
            <template #accordion-content>
                <div class="sizes-table"
                     v-html="state.sizeTable"
                ></div>
            </template>
        </AccordionItem>

        <AccordionItem>
            <template #accordion-trigger>
                Доставка і оплата
            </template>
            <template #accordion-content>
                <div class="content"
                     v-html="lang === 'ru' ? deliveryAndPaymentRu : deliveryAndPaymentUa"
                ></div>
            </template>
        </AccordionItem>

        <AccordionItem>
            <template #accordion-trigger>
                Обмін та повернення
            </template>
            <template #accordion-content>
                <div class="content"
                     v-html="lang === 'ru' ? returnAndExchangeRu : returnAndExchangeUa"
                ></div>
            </template>
        </AccordionItem>

        <AccordionItem v-if="youtube">
            <template #accordion-trigger>
                Відео-огляд
            </template>
            <template #accordion-content>
                <iframe width="100%" height="350px" :src="youtube"></iframe>
            </template>
        </AccordionItem>
    </Accordion>
</template>

<script setup>
import Accordion from "@/Components/Accordion/Accordion.vue";
import AccordionItem from "@/Components/Accordion/AccordionItem.vue";

const props = defineProps([
    'lang',
    'description',
    'characteristics',
    'sizeTable',
    'youtube',
    'returnAndExchangeUa',
    'returnAndExchangeRu',
    'deliveryAndPaymentUa',
    'deliveryAndPaymentRu',
])
const state = {
    description: JSON.parse(props.description),
    characteristics: JSON.parse(props.characteristics),
    sizeTable: JSON.parse(props.sizeTable),
}
</script>
