<template>
    <div>
        <div>
            <div class="text-center">
                <button-component
                    type="button"
                    @click="showReviewModalFunction"
                >{{ textGiveReview }}
                </button-component>
            </div>

            <modal v-if="state.showReviewModal"
                   @clickCancel="showReviewModalFunction"
                   @closeModal="showReviewModalFunction"
                   @submitForm="sendReview"
                   submit-button-text="Відправити"
                   cancel-button-text="Відмінити"
                   size="medium"
            >
                <template #heading>
                    {{ textGiveReview }}
                </template>

                <template #content>
                    <div class="grid gap-4">
                        <div class="block">
                            <label-component :required="true">{{ textName }}</label-component>
                            <input-component type="text"
                                             v-model="state.review.name"
                                             :placeholder="textEnterName"
                            />
                        </div>

                        <div class="block">
                            <label-component :required="true">{{ textPhone }}</label-component>
                            <input-component type="tel"
                                             v-maska="'+38 (0##) ###-##-##'"
                                             v-model="state.review.phone"
                                             placeholder="+38 (0"
                                             class="phone"
                            />
                        </div>
                        <div class="block">
                            <label-component :required="true">{{ textComment }}</label-component>
                            <textarea placeholder="Введіть ваш коментар"
                                      v-model="state.review.comment"
                                      rows="4"
                                      class="
                                            border-[0.5px]
                                            rounded-[10px]
                                            box-border
                                            font-[350]
                                            h-[100]
                                            mt-[0.75rem]
                                            p-[1rem]
                                            resize-none
                                            w-[100%]
                                            outline-none
                                            border-red-600
                                            focus:border-red-600
                                            focus:ring-red-600
                                        "
                            ></textarea>
                        </div>
                    </div>
                </template>
            </modal>
        </div>
    </div>
</template>

<script setup>
import {inject, ref} from "vue";

const props = defineProps({
    id: Number,
    textGiveReview: {
        type: String,
        default: 'Залишити відгук'
    },
    textEnterName: {
        type: String,
        default: 'Ваше імʼя'
    },
    textEnterReview: {
        type: String,
        default: 'Ваш відгук'
    },
    textName: {
        type: String,
        default: 'Імʼя'
    },
    textPhone: {
        type: String,
        default: 'Телефон'
    },
    textComment: {
        type: String,
        default: 'Відгук'
    },
});

const state = ref({
    showReviewModal: false,
    review: {
        published: 0,
        product_id: null,
        phone: null,
        name: null,
        comment: null,
    },
    errors: [],
    isLoading: false,
});

const swal = inject('$swal');

function showReviewModalFunction() {
    state.value.showReviewModal = !state.value.showReviewModal;
}

function sendReview() {
    state.value.isLoading = true;
    state.value.review.product_id = props.id;
    axios.post('/api/v1/reviews/create', state.value.review)
        .then(() => {
            state.value.review = {
                phone: null,
                name: null,
                comment: null,
            };
            state.value.isLoading = false;
            state.value.errors = [];
            showReviewModalFunction();
            swal({
                icon: 'success',
                title: 'Ваш коментар надіслано!',
                text: 'Він буде опублікований після перевірки на спам :)',
            })
        })
        .catch(({response}) => {
            state.value.errors = response.data;
            state.value.isLoading = false;
            console.log(response);
            swal({
                icon: 'error',
                title: 'Виникла помилка',
                text: 'Перевірте корректність данних',
            })
        });
}
</script>
