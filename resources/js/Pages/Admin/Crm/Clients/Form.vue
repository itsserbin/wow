<template>
    <form class="grid gap-4">

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="block">
                <Label :value="$t('clients.status')"/>
                <Select v-model="item.status" :options="state.statuses"/>
            </div>
            <div class="block" v-if="item.status === 'experienced' || item.status === 'return'">
                <Label :value="$t('clients.sub_status')"/>
                <Select v-model="item.subStatuses"
                        :options="state.subStatuses.experienced"
                        v-if="item.status === 'experienced'"
                />
                <Select v-model="item.subStatuses"
                        :options="state.subStatuses.return"
                        v-if="item.status === 'return'"
                />
            </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="grid gap-4">
                <div class="block">
                    <Label :value="$t('clients.name')"/>
                    <Input v-model="item.name" type="text"
                           :placeholder="$t('clients.enter_name')"
                    />
                </div>
                <div class="block">
                    <Label :value="$t('clients.last_name')"/>
                    <Input v-model="item.last_name" type="text"
                           :placeholder="$t('clients.enter_last_name')"
                    />
                </div>
                <div class="block">
                    <Label :value="$t('clients.middle_name')"/>
                    <Input v-model="item.middle_name" type="text"
                           :placeholder="$t('clients.enter_middle_name')"
                    />
                </div>
                <div class="block">
                    <Label :value="$t('clients.middle_name')"/>
                    <Input v-model="item.phone" type="tel"
                           :placeholder="$t('clients.enter_phone')"
                    />
                </div>
                <div class="block">
                    <Label :value="$t('clients.email')"/>
                    <Input v-model="item.email" type="email"
                           :placeholder="$t('clients.enter_email')"
                    />
                </div>
            </div>
            <div class="siv">
                <Label :value="$t('clients.comment')"/>
                <Textarea v-model="item.comment" rows="18"
                          :placeholder="$t('clients.enter_comment')"
                />
            </div>
        </div>

        <ItemsTable :data="item.orders" :order-statuses="orderStatuses"/>

        <div class="grid grid-cols-1 md:grid-cols-4 text-center gap-4">
            <div class="block">
                {{$t('clients.number_of_purchases')}}: {{ item.number_of_purchases }}
            </div>
            <div class="block">
                {{$t('clients.purchased_goods')}}: {{ item.purchased_goods }}
            </div>
            <div class="block">
                {{$t('clients.average_check')}}: {{ $filters.formatMoney(item.average_check) }}
            </div>
            <div class="block">
                {{$t('clients.whole_check')}}: {{ $filters.formatMoney(item.whole_check) }}
            </div>
        </div>
    </form>
</template>

<script setup>
import ItemsTable from '@/Pages/Admin/Crm/Clients/ItemsTable.vue';
import Label from '@/Components/Form/Label.vue';
import Select from '@/Components/Form/Select.vue';
import Input from '@/Components/Form/Input.vue';
import Textarea from '@/Components/Form/Textarea.vue';

import {onMounted, ref} from "vue";

const props = defineProps(['item', 'statuses', 'subStatuses','orderStatuses'])

const state = ref({
    itemsModalAction: '',
    statuses: [],
    subStatuses: {
        experienced: [],
        return: [],
    },
})

onMounted(() => {
        for (const [key, value] of Object.entries(props.subStatuses.experienced)) {
            state.value.subStatuses.experienced.push({
                value: value,
                key: key,
            })
        }
        for (const [key, value] of Object.entries(props.subStatuses.return)) {
            state.value.subStatuses.return.push({
                value: value,
                key: key,
            })
        }
        for (const [key, value] of Object.entries(props.statuses)) {
            state.value.statuses.push({
                value: value,
                key: key,
            })
        }
    }
)
</script>
