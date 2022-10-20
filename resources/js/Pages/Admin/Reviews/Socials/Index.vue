<template>
    <ReviewsLayout title="Відгуки про товар">
        <template #header>
            Відгуки про товар
        </template>

        <loader-component v-if="state.isLoading"/>
        <div v-if="!state.isLoading && can('show-reviews')">
            <button-component type="btn" @click="create" v-if="can('create-reviews')">
                Додати
            </button-component>

            <Table :data="state.reviews.data"
                   @onEdit="onEdit"
                   @onDestroy="onDestroy"
                   :canDestroy="can('destroy-reviews')"
            />

            <pagination :pagination="state.reviews"
                        :click-handler="fetch"
                        v-model="state.currentPage"
            />
            <component :is="activeModal"
                       :item="state.item"
                       @closeModal="modalFunction"
                       @submitForm="submitForm"
                       @declineForm="onDestroy"
                       :canDestroy="can('destroy-reviews')"
            ></component>
        </div>
    </ReviewsLayout>
</template>

<script setup>
import {reactive, onMounted, inject, ref, computed} from "vue";
import SocialReviewModal from '@/Pages/Admin/Reviews/Socials/Modal.vue';
import ReviewsLayout from '@/Pages/Admin/Reviews/ReviewsLayout.vue';
import Table from '@/Pages/Admin/Reviews/Socials/Table.vue'


const swal = inject('$swal')
const can = inject('$can');

const item = reactive({
    image: [],
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

const activeModal = computed(() => state.value.isActiveModal ? SocialReviewModal : null)

function fetch(page) {
    state.value.isLoading = true;
    if (page) {
        state.value.currentPage = page;
    }
    axios.get(route('api.reviews.social.index', {'page': state.value.currentPage}))
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
                axios.delete(route('api.reviews.social.destroy', id))
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
        axios.get(route('api.reviews.social.edit', id))
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
        axios.put(route('api.reviews.social.update', state.value.item.id), state.value.item)
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
        axios.post(route('api.reviews.social.create'), state.value.item)
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
</script>
