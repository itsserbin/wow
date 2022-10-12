<template>
<Accordion>
    <AccordionItem>
        <template #accordion-trigger>
            Доставка і оплата
        </template>
        <template #accordion-content>
            <h2>Банківський переказ на карту</h2>
    <p>Ви можете сплатити замовлення банківською карткою Visa та MasterCard без комісії, при цьому ви
        заощаджуєте від 50 гривень на покупці.</p>
    <h2>Накладений платіж</h2>
    <p>Ви можете сплатити замовлення після його отримання у службі доставки «Нова пошта». При цьому способі
        оплати ви сплачуєте суму, що складається з: вартості доставки (страхування, транспортування) товару
        за тарифами «Нової пошти» (від 40грн); 2% вартості товару.</p>
    <p class="mt-[1rem]"><strong>Важливо!</strong> Накладений платіж можливий лише з мінімальною
        передоплатою у зв'язку з військовим становищем.</p>
        </template>
    </AccordionItem>
</Accordion>
</template>

<script setup>
import Accordion from "@/Components/Accordion/Accordion.vue";
import AccordionItem from "@/Components/Accordion/AccordionItem.vue";
</script>