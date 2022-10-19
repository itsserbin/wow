<template>
    <OptionsLayout title="FAQ">
        <template #header>
            FAQ
        </template>

        <loader-component v-if="state.isLoading"/>
        <div v-if="!state.isLoading && can('show-faq')">
            <button-component type="btn" @click="create" v-if="can('create-faq')">
                Додати
            </button-component>

            <lang-tabs @clickLang="changeLang"/>

            <Table :data="state.data.data"
                        @onEdit="onEdit"
                        @onDestroy="onDestroy"
                />

            <pagination :pagination="state.data"
                      :click-handler="fetch"
                      v-model="state.currentPage"
            />
            <component :is="activeModal"
                       :item="state.item"
                       @closeModal="modalFunction"
                       @submitForm="submitForm"
                       @declineForm="onDestroy"
            ></component>
        </div>
    </OptionsLayout>
</template>

<script setup>
import {reactive, onMounted, inject, ref, computed} from "vue";
import Modal from '@/Pages/Admin/Options/Faqs/Modal.vue';
import OptionsLayout from '@/Pages/Admin/Options/OptionsLayout.vue'
import Table from '@/Pages/Admin/Options/Faqs/Table.vue';


const swal = inject('$swal')
const can = inject('$can');

const item = reactive({
    question: {
        ua: null,
        ru: null,
    },
    answer: {
        ua: null,
        ru: null,
    },
    published: 0
})
const defaultLang = inject('$defaultLang');

const state = ref({
    data: [],
    currentPage: 1,
    isLoading: true,
    isActiveModal: false,
    modalAction: '',
    item: item,
    activeLang: defaultLang
});

onMounted(() => {
    fetch(1);
})

const activeModal = computed(() => state.value.isActiveModal ? Modal : null)



function changeLang(val) {
    state.value.activeLang = val;
}

function fetch(page) {
    state.value.isLoading = true;
    if (page) {
        state.value.currentPage = page;
    }
    axios.get(route('api.faqs.index', {'page': state.value.currentPage}))
        .then(response => {
            Object.assign(state.value.data, response.data.result);
            state.value.isLoading = false;
        })
        .catch(errors => {
            console.log(errors);
            state.value.isLoading = false;
        })
}

function onDestroy(id) {
    if (can('destroy-faq')) {
        swal({
            title: 'Видалити?',
            icon: 'warning',
            showCancelButton: true,
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(route('api.faqs.destroy', id))
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
    if (can('edit-faq')) {
        axios.get(route('api.faqs.edit', id))
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
    if (can('edit-faq')) {
        axios.put(route('api.faqs.update', state.value.item.id), state.value.item)
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
    if (can('create-faq')) {
        axios.post(route('api.faqs.create'), state.value.item)
            .then(() => {
                modalFunction();
                state.value.item = item;
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
    if (state.value.modalAction === 'edit' && can('edit-faq')) {
        onUpdate();
    } else if (state.value.modalAction === 'create' && can('create-faq')) {
        onCreate();
    }
}

function create() {
    if (can('create-faq')) {
        Object.assign(state.value.item, item);
        state.value.modalAction = 'create';
        modalFunction();
    }
}

</script>
