<template> 
<transition name="fadeLast">
    <div>
       
        <div
            class="
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
                "
        >
            <div class="
                        p-4
                        mb-20
                        w-full
                        h-full
                        md:h-full
                        mx-auto
                        top-10
                        z-50
                        relative
                        overflow-y-scroll
                "
                 :class="{
                             'max-w-md' : size === 'small',
                             'max-w-lg' : size === 'medium',
                             'max-w-4xl' : size === 'large',
                             'max-w-7xl' : size === 'extralarge',
                            }"
            >
                <div class="bg-white rounded-lg shadow ">
                    <div class="flex justify-between items-start p-4 rounded-t border-b">
                        <h3 class="text-xl font-semibold text-gray-900" v-if="$slots.title">
                            <slot name="title"></slot>
                        </h3>
                        <button @click="$emit('closeModal')"
                                type="button"
                                class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                                data-modal-toggle="defaultModal">
                            <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                      clip-rule="evenodd"></path>
                            </svg>
                            <span class="sr-only">Close modal</span>
                        </button>
                    </div>
                    <div class="p-6 space-y-6" v-if="$slots.content">
                        <div class="text-base leading-relaxed text-gray-500">
                            <slot name="content"></slot>
                        </div>
                    </div>
                    <div v-if="cancelButtonText || submitButtonText"
                         class="grid gap-4 p-6 rounded-b border-t border-gray-200">
                            <button @click="$emit('submitForm')"
                                    v-if="submitButtonText"
                                    type="button"
                                    class="
                                        mx-auto
                                        w-48
                                        text-white
                                        bg-red-600
                                        focus:ring-4
                                        focus:outline-none
                                        focus:ring-blue-300
                                        font-medium
                                        rounded-lg
                                        text-sm
                                        px-5
                                        py-2.5
                                        text-center
                                "
                            >
                                {{ submitButtonText }}
                            </button>

                            <button @click="$emit('clickCancel')"
                                    v-if="cancelButtonText"
                                    type="button"
                                    class="
                                        mx-auto
                                        w-48
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
                                "
                            >
                                {{ cancelButtonText }}
                            </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="bg-gray-900 bg-opacity-50 fixed inset-0 z-30"></div>
    
    </div>
</transition>
</template>

<script setup>
defineProps([
    'cancelButtonText',
    'declineButtonText',
    'submitButtonText',
    'size'
])

defineEmits(['closeModal', 'submitForm', 'clickCancel', 'declineForm'])
</script>
