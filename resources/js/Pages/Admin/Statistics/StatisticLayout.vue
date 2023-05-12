<script setup>
import {inject} from "vue";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import Sidebar from '@/Components/Sidebar/Sidebar.vue';
import SidebarItem from '@/Components/Sidebar/SidebarItem.vue';

defineProps(['title']);
const can = inject('$can');

const items = [
    {
        title: 'Головна',
        href: route('admin.statistics.index')
    },
    {
        title: 'Прибуток',
        href: route('admin.statistics.profits.index')
    },
    {
        title: 'Заявки',
        href: route('admin.statistics.orders.index')
    },
    {
        title: 'Маркетинг',
        href: route('admin.statistics.marketing.index')
    },
    {
        title: 'Менеджери',
        href: route('admin.statistics.managers.index')
    },
    {
        title: 'Товари',
        href: route('admin.statistics.products.index')
    },
    {
        title: 'Витрати',
        href: route('admin.statistics.costs.index')
    },
];

const costItems = [
    {
        title: 'Грошові рухи',
        href: route('admin.statistics.bank-card-movements.index'),
        icon: 'pi pi-arrow-right-arrow-left'
    },
    {
        title: 'P&L',
        href: route('admin.statistics.profit-and-loss.index'),
        icon: 'pi pi-percentage'
    },
    {
        title: 'CashFLow',
        href: route('admin.statistics.cash-flow.index'),
        icon: 'pi pi-dollar'
    },
    {
        title: 'Повернення',
        href: route('admin.statistics.refunds.index'),
        icon: 'pi pi-reply'
    },
    {
        title: 'Категорії витрат/прибутків',
        href: route('admin.statistics.costs-and-profit-categories.index'),
        icon: 'pi pi-list'
    },

];
</script>

<template>
    <AuthenticatedLayout :title="title">
        <template #header>
            <slot name="header"></slot>
        </template>

        <div class="grid grid-cols-1 md:grid-cols-12 gap-4" v-if="can('show-bookkeeping')">
            <div class="md:col-span-2">
                <Sidebar class="mb-5">
                    <SidebarItem v-for="item in items"
                                 :item="item"
                                 :active="route(route().current()) === item.href"
                    />
                </Sidebar>

                <Sidebar>
                    <SidebarItem v-for="item in costItems"
                                 :item="item"
                                 :active="route(route().current()) === item.href"
                    />
                </Sidebar>
            </div>
            <div class="w-full md:col-span-10">
                <slot></slot>
            </div>
        </div>

    </AuthenticatedLayout>
</template>
