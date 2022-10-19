<template>
    <ReviewsLayout title="Відгуки про товар">
        <template #header>
            Відгуки про товар
        </template>

        <loader-component v-if="state.isLoading"/>
        <div v-if="!state.isLoading && can('show-reviews')">
            <div>
                <button-component type="btn"
                                  @click="create"
                                  v-if="can('create-reviews')"
                                  class="mb-5"
                >
                    Додати
                </button-component>
            </div>

            <Table :data="state.reviews.data"
                   class="mb-5"
                   @onEdit="onEdit"
                   @onDestroy="onDestroy"
                   @publishReview="publishReview"
            />
            <div class="text-center">
                <pagination :pagination="state.reviews"
                            :click-handler="fetch"
                            v-model="state.currentPage"
                />
            </div>
        </div>
        <component :is="activeModal"
                   :item="state.item"
                   @closeModal="modalFunction"
                   @submitForm="submitForm"
                   @declineForm="onDestroy"
        ></component>
    </ReviewsLayout>
</template>

<script setup>
import {reactive, onMounted, inject, ref, computed} from "vue";
import ProductReviewModal from '@/Pages/Admin/Reviews/Products/Modal.vue';
import Table from '@/Pages/Admin/Reviews/Products/Table.vue';
import ReviewsLayout from '@/Pages/Admin/Reviews/ReviewsLayout.vue';

const swal = inject('$swal')
const can = inject('$can');

const item = reactive({
    name: null,
    comment: null,
    phone: null,
    product: null,
    published: 0,
})

const state = ref({
    reviews: [],
    currentPage: 1,
    isLoading: true,
    isActiveModal: false,
    modalAction: '',
    item: {},
});

onMounted(() => {
    fetch(1);
})

const activeModal = computed(() => state.value.isActiveModal ? ProductReviewModal : null)


function fetch(page) {
    state.value.isLoading = true;
    if (page) {
        state.value.currentPage = page;
    }
    axios.get(route('api.reviews.product.index', {'page': state.value.currentPage}))
        .then(response => {
            Object.assign(state.value.reviews, response.data.result);
            state.value.isLoading = false;
        })
        .catch(errors => {
            console.log(errors);
            state.value.isLoading = false;
        })
}

function onDestroy(id) {
    if (can('destroy-reviews')) {
        swal({
            title: 'Видалити?',
            icon: 'warning',
            showCancelButton: true,
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(route('api.reviews.product.destroy', id))
                    .then(() => {
                        fetch();
                        if (state.value.isActiveModal) {
                            modalFunction();
                        }
                        swal({
                            icon: 'success',
                            title: 'Destroyed!'
                        })
                    })
                    .catch(errors => {
                        console.log(errors);
                        swal({
                            icon: 'error',
                            title: 'Error!'
                        })
                    })
            }
        })

    }
}

function modalFunction() {
    state.value.isActiveModal = !state.value.isActiveModal;
}

function onEdit(id, i) {
    if (can('edit-reviews')) {
        axios.get(route('api.reviews.product.edit', id))
            .then(({data}) => {
                state.value.item = data.result;
                state.value.modalAction = 'edit';
                state.value.item.index = i;
                modalFunction();
            })
            .catch((response) => console.log(response))
    }
}

function onUpdate() {
    if (can('edit-reviews')) {
        axios.put(route('api.reviews.product.update', state.value.item.id), state.value.item)
            .then(() => {
                modalFunction();
                fetch();
                swal({
                    title: 'Success!',
                    icon: 'success'
                })
            })
            .catch((response) => {
                console.log(response);
                swal({
                    title: 'Error!',
                    icon: 'error'
                })
            })
    }
}

function onCreate() {
    if (can('create-reviews')) {
        axios.post(route('api.reviews.product.create'), state.value.item)
            .then(({data}) => {
                modalFunction();
                state.value.item = {};
                fetch();
                swal({
                    title: 'Success!',
                    icon: 'success'
                })
            })
            .catch((response) => {
                console.log(response);
                swal({
                    title: 'Error!',
                    icon: 'error'
                })
            })
    }
}

function submitForm() {
    if (state.value.modalAction === 'edit' && can('edit-reviews')) {
        onUpdate();
    } else if (state.value.modalAction === 'create' && can('create-reviews')) {
        onCreate();
    }
}

function create() {
    if (can('create-reviews')) {
        Object.assign(state.value.item, item);
        state.value.modalAction = 'create';
        modalFunction();
    }
}

function publishReview(id) {
    axios.post(route('api.reviews.product.accept', id))
        .then(() => {
            fetch();
            swal({
                title: 'Success!',
                icon: 'success'
            })
        })
        .catch((response) => {
            console.log(response);
            swal({
                title: 'Error!',
                icon: 'error'
            })
        })
}
</script>
