<template>
    <auth-layout title="Категорії">
        <template #header>
            Категорії
        </template>

        <loader-component v-if="state.isLoading"/>
        <div v-if="!state.isLoading">
            <button-component type="btn" @click="create" v-if="can('create-products')">
                Додати
            </button-component>

            <lang-tabs @clickLang="changeLang"/>

            <table-component :headings="headings"
                             :isSlotMode="true"
                             :rows="state.categories.data"
            >
                <template v-slot:id="{data}">
                    <a href="javascript:" @click="onEdit(data.row.id,data.i)">
                        {{ data.row.id }}
                    </a>
                </template>

                <template v-slot:preview="{data}">
                    <img :src="'/storage/images/55/' + data.row.preview"
                         :alt="state.activeLang === 'ua' ? data.row.title.ua :
                                (state.activeLang === 'ru' ? data.row.title.ru : '-')"
                         class="mx-auto"
                    >
                </template>

                <template v-slot:title="{data}">
                    <a href="javascript:">
                        {{
                            state.activeLang === 'ua' ? data.row.title.ua :
                                (state.activeLang === 'ru' ? data.row.title.ru : '-')
                        }}
                    </a>
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

            <paginate :pagination="state.categories"
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
import CategoryModal from '@/Pages/Admin/Categories/Modal.vue';

const swal = inject('$swal')
const can = inject('$can');
const defaultLang = inject('$defaultLang');

const item = reactive({
    published: 0,
    slug: null,
    parent_id: null,
    preview: null,
    title: {
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
    },
    meta_keyword: {
        ru: null,
        ua: null
    },
    seo_text: {
        ru: null,
        ua: null
    }
})

const state = ref({
    categories: [],
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

const activeModal = computed(() => state.value.isActiveModal ? CategoryModal : null)

const headings = reactive([
    {
        label: 'ID',
        key: 'id'
    },
    {
        label: 'Головне зображення',
        key: 'preview'
    },
    {
        label: 'Назва',
        key: 'title'
    },
    {
        label: 'Статус публікації',
        key: 'published'
    },
    {
        label: 'Батьківська категорія',
        key: 'parent_id'
    },
    {
        label: 'Сортування',
        key: 'sort'
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
    axios.get(route('api.categories.index', {'page': state.value.currentPage}))
        .then(response => {
            Object.assign(state.value.categories, response.data.result);
            state.value.isLoading = false;
        })
        .catch(errors => {
            console.log(errors);
            state.value.isLoading = false;
        })
}

function onDestroy(id) {
    if (can('destroy-categories')) {
        swal({
            title: 'Видалити?',
            icon: 'warning',
            showCancelButton: true,
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(route('api.categories.destroy', id))
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
    if (can('edit-categories')) {
        axios.get(route('api.categories.edit', id))
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
    if (can('edit-categories')) {
        axios.put(route('api.categories.update', state.value.item.id), state.value.item)
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
    if (can('create-categories')) {

        axios.post(route('api.categories.create'), state.value.item)
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
    if (state.value.modalAction === 'edit' && can('edit-categories')) {
        onUpdate();
    } else if (state.value.modalAction === 'create' && can('create-categories')) {
        onCreate();
    }
}

function create() {
    if (can('create-categories')) {
        Object.assign(state.value.item, item);
        state.value.modalAction = 'create';
        modalFunction();
    }
}
</script>
