<script setup>
import {ref, onMounted} from 'vue';
import ApplicationLogo from '@/Components/ApplicationLogo.vue';
import Dropdown from '@/Components/Dropdown.vue';
import DropdownLink from '@/Components/DropdownLink.vue';
import NavLink from '@/Components/NavLink.vue';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink.vue';
import {Link, Head} from '@inertiajs/inertia-vue3';
import {useState, getUser} from "@/Includes/user.js";

const showingNavigationDropdown = ref(false);

defineProps(['title']);

onMounted(() => {
    getUser();
})
</script>

<template>

    <div>
        <Head :title="title"/>

        <div class="min-h-screen">
            <nav class="bg-white border-b border-gray-100 dark:bg-gray-800 dark:border-gray-700">
                <!-- Primary Navigation Menu -->
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="flex justify-between h-16">
                        <div class="flex">
                            <!-- Logo -->
                            <div class="shrink-0 flex items-center">
                                <Link :href="route('admin.dashboard')">
                                    <ApplicationLogo class="block h-9 w-auto"/>
                                </Link>
                            </div>

                            <!-- Navigation Links -->
                            <div class="hidden space-x-8 sm:-my-px sm:ml-10 xl:flex">
                                <NavLink :href="route('admin.dashboard')" :active="route().current('admin.dashboard')">
                                    Головна
                                </NavLink>

                                <NavLink :href="route('admin.products.index')"
                                         :active="route().current('admin.products.index')">
                                    Товари
                                </NavLink>

                                <NavLink :href="route('admin.categories.index')"
                                         :active="route().current('admin.categories.index')">
                                    Категорії
                                </NavLink>

                                <NavLink :href="route('admin.reviews.product.index')"
                                         :active="route().current('admin.reviews.product.index')">
                                    Відгуки
                                </NavLink>

                                <NavLink :href="route('admin.clients.index')"
                                         :active="route().current('admin.clients.index')">
                                    Клієнти
                                </NavLink>

                                <NavLink :href="route('admin.orders.index')"
                                         :active="route().current('admin.orders.index')">
                                    Замовлення
                                </NavLink>

                                <NavLink :href="route('admin.images.index')"
                                         :active="route().current('admin.images.index')">
                                    Зображення
                                </NavLink>

                                <NavLink :href="route('admin.pages.index')"
                                         :active="route().current('admin.pages.index')">
                                    Сторінки
                                </NavLink>

                                <NavLink :href="route('admin.callbacks.index')"
                                         :active="route().current('admin.callbacks.index')">
                                    Callbacks
                                </NavLink>

                                <NavLink :href="route('admin.statistics.index')"
                                         :active="route().current('admin.statistics.index')">
                                    Статистика
                                </NavLink>

                                <NavLink :href="route('admin.options.index')"
                                         :active="route().current('admin.options.index')">
                                    Налаштування
                                </NavLink>
                            </div>
                        </div>

                        <div class="hidden xl:flex sm:items-center sm:ml-6">
                            <!-- Settings Dropdown -->
                            <div class="ml-3 relative">
                                <Dropdown align="right" width="48">
                                    <template #trigger>
                                        <span class="inline-flex rounded-md">
                                            <button type="button"
                                                    class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150">
                                                {{ $page.props.auth.user.name }}

                                                <svg class="ml-2 -mr-0.5 h-4 w-4" xmlns="http://www.w3.org/2000/svg"
                                                     viewBox="0 0 20 20" fill="currentColor">
                                                    <path fill-rule="evenodd"
                                                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                          clip-rule="evenodd"/>
                                                </svg>
                                            </button>
                                        </span>
                                    </template>

                                    <template #content>
                                        <DropdownLink :href="route('logout')" method="post" as="button">
                                            Log Out
                                        </DropdownLink>
                                    </template>
                                </Dropdown>
                            </div>
                        </div>

                        <!-- Hamburger -->
                        <div class="-mr-2 flex items-center xl:hidden">
                            <button @click="showingNavigationDropdown = ! showingNavigationDropdown"
                                    class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out">
                                <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                    <path
                                        :class="{'hidden': showingNavigationDropdown, 'inline-flex': ! showingNavigationDropdown }"
                                        stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M4 6h16M4 12h16M4 18h16"/>
                                    <path
                                        :class="{'hidden': ! showingNavigationDropdown, 'inline-flex': showingNavigationDropdown }"
                                        stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M6 18L18 6M6 6l12 12"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Responsive Navigation Menu -->
                <div :class="{'block': showingNavigationDropdown, 'hidden': ! showingNavigationDropdown}"
                     class="xl:hidden">
                    <div class="pt-2 pb-3 space-y-1">
                        <ResponsiveNavLink :href="route('admin.dashboard')"
                                           :active="route().current('admin.dashboard')">
                            Головна
                        </ResponsiveNavLink>

                        <ResponsiveNavLink :href="route('admin.products.index')"
                                           :active="route().current('admin.products.index')">
                            Товари
                        </ResponsiveNavLink>

                        <ResponsiveNavLink :href="route('admin.categories.index')"
                                           :active="route().current('admin.categories.index')">
                            Категорії
                        </ResponsiveNavLink>

                        <ResponsiveNavLink :href="route('admin.reviews.product.index')"
                                           :active="route().current('admin.reviews.product.index')">
                            Відгуки
                        </ResponsiveNavLink>

                        <ResponsiveNavLink :href="route('admin.orders.index')"
                                           :active="route().current('admin.orders.index')">
                            Замовлення
                        </ResponsiveNavLink>

                        <ResponsiveNavLink :href="route('admin.clients.index')"
                                           :active="route().current('admin.clients.index')">
                            Клієнти
                        </ResponsiveNavLink>

                        <ResponsiveNavLink :href="route('admin.images.index')"
                                           :active="route().current('admin.images.index')">
                            Зображення
                        </ResponsiveNavLink>

                        <ResponsiveNavLink :href="route('admin.pages.index')"
                                           :active="route().current('admin.pages.index')">
                            Сторінки
                        </ResponsiveNavLink>

                        <ResponsiveNavLink :href="route('admin.callbacks.index')"
                                           :active="route().current('admin.callbacks.index')">
                            Callback
                        </ResponsiveNavLink>

                        <ResponsiveNavLink :href="route('admin.statistics.index')"
                                           :active="route().current('admin.statistics.index')">
                            Статистика
                        </ResponsiveNavLink>

                        <ResponsiveNavLink :href="route('admin.options.index')"
                                           :active="route().current('admin.options.index')">
                            Налаштування
                        </ResponsiveNavLink>
                    </div>

                    <!-- Responsive Settings Options -->
                    <div class="pt-4 pb-1 border-t border-gray-200">
                        <div class="px-4">
                            <div class="font-medium text-base text-gray-800">{{ $page.props.auth.user.name }}</div>
                            <div class="font-medium text-sm text-gray-500">{{ $page.props.auth.user.email }}</div>
                        </div>

                        <div class="mt-3 space-y-1">
                            <ResponsiveNavLink :href="route('logout')" method="post" as="button">
                                Log Out
                            </ResponsiveNavLink>
                        </div>
                    </div>
                </div>
            </nav>

            <!-- Page Heading -->
            <header class="bg-white shadow dark:bg-gray-700 " v-if="$slots.header">
                <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <h2 class="font-semibold text-xl text-gray-800 leading-tight dark:text-gray-300">
                        <slot name="header"/>
                    </h2>
                </div>
            </header>

            <!-- Page Content -->
            <main>
                <div class="py-12">
                    <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                            <div class="p-6 bg-white border-gray-200 dark:bg-gray-600">
                                <slot/>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </div>
</template>
