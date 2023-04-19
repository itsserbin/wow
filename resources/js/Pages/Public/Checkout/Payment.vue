<script setup>
defineProps(['order'])
</script>

<template>
    <div class="
                bg-[#fff]
                border-[0.5px]
                border-gray-300
                rounded-[12px]
                shadow-lg
                box-border
                mb-[1.5rem]
                pt-[1.25rem]
                pr-[1rem]
                pb-[1.25rem]
                pl-[1rem]
            "
    >
        <div class="text-2xl font-heading font-[400]">
            <h3>Оплата</h3>
        </div>
        <div class="grid gap-4 font-subheading">
            <label class="
                                text-[1.075rem]
                                text-[#686868]
                                font-[500]
                                w-[100%]
                                flex
                                items-center
                            "
            >
                <input type="radio"
                       name="payment"
                       value="cash_on_delivery"
                       v-model="order.payment_method"
                       class="mr-2 focus:border-red-600
                    focus:ring-red-600"
                >
                <p class="a-text">Накладений платіж</p>
            </label>
            <label class="
                                text-[1.075rem]
                                text-[#686868]
                                font-[500]
                                w-[100%]
                                flex
                                items-center
                            "
            >
                <input type="radio"
                       name="payment"
                       value="minimum_prepayment"
                       v-model="order.payment_method"
                       class="mr-2 focus:border-red-600
                    focus:ring-red-600"
                >
                <p class="a-text">Мінімальна передоплата (10%)</p>
            </label>
            <label class="
                                text-[1.075rem]
                                text-[#686868]
                                font-[500]
                                w-[100%]
                                flex
                                items-center
                            "
            >
                <input type="radio"
                       name="payment"
                       value="full_prepayment"
                       v-model="order.payment_method"
                       class="mr-2 focus:border-red-600
                    focus:ring-red-600"

                >
                <p class="a-text">Повна передоплата</p>
            </label>
        </div>
    </div>
</template>
