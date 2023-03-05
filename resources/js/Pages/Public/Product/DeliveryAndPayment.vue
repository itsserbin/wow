<template>
    <Accordion>
        <AccordionItem>
            <template #accordion-trigger>
                Доставка і оплата
            </template>
            <template #accordion-content>
                <h2 class="text-[24px] font-[600] mt-[15x] mb-[15px]">Банківський переказ на карту</h2>
                <p>Ви можете сплатити замовлення банківською карткою Visa та MasterCard без комісії, при цьому ви
                    заощаджуєте від 50 гривень на покупці.</p>
                <h2 class="text-[24px] font-[600] mt-[15x] mb-[15px]">Накладений платіж</h2>
                <p>Ви можете сплатити замовлення після його отримання у службі доставки «Нова пошта». При цьому способі
                    оплати ви сплачуєте суму, що складається з: вартості доставки (страхування, транспортування) товару
                    за тарифами «Нової пошти» (від 40грн); 2% вартості товару.</p>
                <p class="mt-[1rem]"><strong>Важливо!</strong> Накладений платіж можливий лише з мінімальною
                    передоплатою у зв'язку з військовим становищем.</p>
            </template>
        </AccordionItem>


        <AccordionItem>
            <template #accordion-trigger>
                Умови повернення та обміну товару
            </template>
            <template #accordion-content>
                <h2 class="text-[24px] font-[600] mt-[15x] mb-[15px]">Умови повернення та обміну товару</h2>
                <p>Відповідно до закону «Про захист прав споживачів», нижня білизна та панчішно-шкарпеткові вироби
                    включені до «Переліку непродовольчих товарів належної якості», які не підлягають поверненню чи
                    обміну на аналогічні моделі інших розмірів, форм, габаритів, фасонів, забарвлення чи
                    комплектації.</p>
                <p class="mt-[15px] mb-[15px]">Але! Ми завжди лояльні до наших клієнтів, тому у нас, на відміну від
                    інших інтернет-магазинів, є обмін купальників, якщо вам не підійде розмір або колір, ви без проблем
                    зможете обміняти його на іншу модель купальника! (Обмін робимо протягом 3-4х робочих днів після
                    отримання товару)</p>
                <p>Повернення на категорію спідньої білизни немає!</p>
            </template>
        </AccordionItem>
    </Accordion>
</template>

<script setup>
import Accordion from "@/Pages/Public/Components/Accordion/Accordion.vue";
import AccordionItem from "@/Pages/Public/Components/Accordion/AccordionItem.vue";
</script>


<style>
.accordion-enter-active, .accordion-leave-active {
    transition: opacity .5s ease;
}

.accordion-enter-from, .accordion-leave-to {
    opacity: 0;
}
</style>
