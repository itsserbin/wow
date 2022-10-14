<template>
    <auth-layout title="Сторінки">
        <template #header>
            Сторінки
        </template>

        <loader-component v-if="state.isLoading"/>
        <div v-if="!state.isLoading">
            <button-component type="btn" @click="create" v-if="can('create-pages')">
                Додати
            </button-component>

            <lang-tabs @clickLang="changeLang"/>

            <table-component :headings="headings"
                             :isSlotMode="true"
                             :rows="state.data.data"
            >
                <template v-slot:id="{data}">
                    <a href="javascript:" @click="onEdit(data.row.id,data.i)">
                        {{ data.row.id }}
                    </a>
                </template>

                <template v-slot:heading="{data}">
                    {{
                        state.activeLang === 'ua' ? data.row.heading.ua :
                            (state.activeLang === 'ru' ? data.row.heading.ru : '-')
                    }}
                </template>

                <template v-slot:h1="{data}">
                    {{
                        state.activeLang === 'ua' ? data.row.h1.ua :
                            (state.activeLang === 'ru' ? data.row.h1.ru : '-')
                    }}
                </template>

                <template v-slot:published="{data}">
                    {{ $filters.publishedStatus(data.row.published) }}
                </template>

                <template v-slot:timestamps="{data}">
                    {{ $filters.dateFormat(data.row.updated_at) }}
                    <hr class="my-1">
                    {{ $filters.dateFormat(data.row.created_at) }}
                </template>

                <template v-slot:actions="{data}">
                    <a href="javascript:" @click="onDestroy(data.row.id)">
                        <xcircle-component/>
                    </a>
                </template>
            </table-component>

            <paginate :pagination="state.data"
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
    </auth-layout>
</template>

<script setup>
import {reactive, onMounted, inject, ref, computed} from "vue";
import Modal from '@/Pages/Admin/Pages/Modal.vue';

const swal = inject('$swal')
const can = inject('$can');
const defaultLang = inject('$defaultLang');

const item = reactive({
    slug: null,
    published: 0,
    heading: {
        ru: null,
        ua: null
    },
    h1: {
        ru: null,
        ua: null
    },
    content: {
        ru: null,
        ua: null
    },
    meta_title: {
        ru: null,
        ua: null
    },
    meta_description: {
        ru: null,
        ua: null
    }
})

const state = ref({
    data: [],
    currentPage: 1,
    isLoading: true,
    isActiveModal: false,
    modalAction: '',
    item: {},
    activeLang: defaultLang
});

onMounted(() => {
    fetch(1);
})

function changeLang(val) {
    state.value.activeLang = val;
}

const activeModal = computed(() => state.value.isActiveModal ? Modal : null)

const headings = reactive([
    {
        label: 'ID',
        key: 'id'
    },
    {
        label: 'Назва в меню',
        key: 'heading'
    },
    {
        label: 'Заголовок',
        key: 'h1'
    },
    {
        label: 'Статус публікації',
        key: 'published'
    },
    {
        label: "Оновлено<hr class='my-1'>Створено",
        key: 'timestamps'
    },
    {
        label: '#',
        key: 'actions'
    }
]);


function fetch(page) {
    state.value.isLoading = true;
    if (page) {
        state.value.currentPage = page;
    }
    axios.get(route('api.pages.index', {'page': state.value.currentPage}))
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
    if (can('destroy-pages')) {
        swal({
            title: 'Видалити?',
            icon: 'warning',
            showCancelButton: true,
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(route('api.pages.destroy', id))
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
    if (can('edit-pages')) {
        axios.get(route('api.pages.edit', id))
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
    if (can('edit-pages')) {
        axios.put(route('api.pages.update', state.value.item.id), state.value.item)
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
    if (can('create-pages')) {
        axios.post(route('api.pages.create'), state.value.item)
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
    if (state.value.modalAction === 'edit' && can('edit-pages')) {
        onUpdate();
    } else if (state.value.modalAction === 'create' && can('create-pages')) {
        onCreate();
    }
}

function create() {
    if (can('create-pages')) {
        state.value.item = item;
        state.value.modalAction = 'create';
        modalFunction();
    }
}
</script>
