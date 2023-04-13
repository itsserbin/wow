<template>
    <div>
        <div class="
                    fixed
                    top-0
                    right-0
                    left-0
                    z-50
                    w-full
                    md:inset-0
                    h-full
                    justify-center
                    items-center
                    flex
                    overflow-scroll
                ">

            <div class="
                        py-4
                        mb-20
                        w-full
                        h-full
                        md:h-full
                        mx-auto
                        top-10
                        z-50
                        relative
                        overflow-scroll
                        modal-scroll
                " :class="{
                 'max-w-md' : size === 'small',
                 'max-w-lg' : size === 'medium',
                 'max-w-4xl' : size === 'large',
                 'max-w-7xl' : size === 'extralarge',
                }">
                <transition name="fade">
                    <div class="bg-white rounded-lg shadow dark:bg-gray-700 ">
                        <div class="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
                            <h3 class="text-xl font-semibold text-gray-900 dark:text-white" v-if="$slots.title">
                                <slot name="title"></slot>
                            </h3>
                            <button @click="$emit('closeModal')" type="button"
                                    class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                    data-modal-toggle="defaultModal">
                                <svg aria-hidden="true" class="w-5 h-5 test_x" fill="currentColor" viewBox="0 0 20 20"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                          clip-rule="evenodd"></path>
                                </svg>
                                <span class="sr-only">Close modal</span>
                            </button>
                        </div>
                        <div class="p-6 space-y-6" v-if="$slots.content">
                            <div class="text-base leading-relaxed text-gray-500 dark:text-gray-400">

                                <slot name="content">

                                </slot>

                            </div>
                        </div>

                        <div v-if="cancelButton || submitButton"
                             class="grid grid-cols-1 md:grid-cols-2 p-6 rounded-b border-t border-gray-200 dark:border-gray-600">
                            <div class="grid grid-cols-2 gap-4 mb-10 md:mb-0">
                                <button @click="$emit('submitForm')" v-if="submitButton" type="button" class="
                                        col-span-2
                                        md:col-span-1
                                        text-white
                                        bg-blue-700
                                        hover:bg-blue-800
                                        focus:ring-4
                                        focus:outline-none
                                        focus:ring-blue-300
                                        font-medium
                                        rounded-lg
                                        text-sm
                                        px-5
                                        py-2.5
                                        text-center
                                        dark:bg-blue-600
                                        dark:hover:bg-blue-700
                                        dark:focus:ring-blue-800
                                ">
                                    {{ submitButtonText }}
                                </button>

                                <button @click="$emit('clickCancel')" v-if="cancelButton" type="button" class="
                                        col-span-2
                                        md:col-span-1
                                        text-gray-500
                                        bg-white
                                        hover:bg-gray-100
                                        focus:ring-4
                                        focus:outline-none
                                        focus:ring-blue-300
                                        rounded-lg
                                        border
                                        border-gray-200
                                        text-sm
                                        font-medium
                                        px-5
                                        py-2.5
                                        hover:text-gray-900
                                        focus:z-10
                                        dark:bg-gray-700
                                        dark:text-gray-300
                                        dark:border-gray-500
                                        dark:hover:text-white
                                        dark:hover:bg-gray-600
                                        dark:focus:ring-gray-600
                                ">
                                    {{ cancelButtonText }}
                                </button>
                            </div>
                            <div class="grid grid-cols-1 md:grid-cols-2 text-center">
                                <div></div>
                                <button @click="$emit('declineForm')" v-if="declineButton" type="button" class="
                                            text-white
                                            bg-red-600
                                            hover:bg-red-800
                                            focus:ring-4
                                            focus:outline-none
                                            focus:ring-red-300
                                            dark:focus:ring-red-800
                                            font-medium
                                            rounded-lg
                                            text-sm
                                            px-5
                                            py-2.5
                                            text-center
                                    ">
                                    {{ declineButtonText }}
                                </button>

                            </div>
                        </div>
                    </div>
                </transition>
            </div>
        </div>

    </div>
    <div class="bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-30"></div>


</template>

<script setup>
defineProps({
    cancelButton: {
        type: Boolean,
        default: true,
    },
    declineButton: {
        type: Boolean,
        default: true,
    },
    submitButton: {
        type: Boolean,
        default: true,
    },
    cancelButtonText: {
        type: String,
        default: 'Скасувати'
    },
    declineButtonText: {
        type: String,
        default: 'Видалити'
    },
    submitButtonText: {
        type: String,
        default: 'Зберегти'
    },
    size: {
        type: String,
        default: 'medium'
    }
});

defineEmits(['closeModal', 'submitForm', 'clickCancel', 'declineForm'])
</script>


<style>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
