<template>
    <OptionsLayout title="Банера">
        <template #header>
            Банера
        </template>

        <loader-component v-if="state.isLoading"/>
        <div v-if="!state.isLoading">
            <button-component type="btn" @click="create" v-if="can('create-banners')">
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

                <template v-slot:image="{data}">
                    <img :src="state.activeLang === 'ua' ? data.row.image_mobile.ua :
                            (state.activeLang === 'ru' ? data.row.image_mobile.ru : null)"
                         :alt=" state.activeLang === 'ua' ? data.row.title.ua :
                            (state.activeLang === 'ru' ? data.row.title.ru : null)"
                         class="w-1/4 mx-auto"
                    >
                </template>

                <template v-slot:title="{data}">
                    {{
                        state.activeLang === 'ua' ? data.row.title.ua :
                            (state.activeLang === 'ru' ? data.row.title.ru : null)
                    }}
                </template>

                <template v-slot:published="{data}">
                    {{$filters.publishedStatus(data.row.published)}}
                </template>

                <template v-slot:link="{data}">
                    {{
                        state.activeLang === 'ua' ? data.row.link.ua :
                            (state.activeLang === 'ru' ? data.row.link.ru : null)
                    }}
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
                       @onUploadImage="uploadImage"
            ></component>
        </div>
    </OptionsLayout>
</template>

<script setup>
import {reactive, onMounted, inject, ref, computed} from "vue";
import BannersModal from '@/Pages/Admin/Options/Banners/Modal.vue';
import OptionsLayout from '@/Pages/Admin/Options/OptionsLayout.vue'

const swal = inject('$swal')
const can = inject('$can');

const item = reactive({
    title: {
        ua: null,
        ru: null,
    },
    image_mobile: {
        ua: null,
        ru: null,
    },
    image_table: {
        ua: null,
        ru: null,
    },
    image_desktop: {
        ua: null,
        ru: null,
    },
    link: {
        ua: null,
        ru: null,
    },
    published: 0,
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

const activeModal = computed(() => state.value.isActiveModal ? BannersModal : null)

const headings = reactive([
    {
        label: 'ID',
        key: 'id'
    },
    {
        label: 'Фото',
        key: 'image'
    },
    {
        label: 'Назва',
        key: 'title'
    },
    {
        label: 'Статус',
        key: 'published'
    },
    {
        label: 'Посилання',
        key: 'link'
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

function changeLang(val) {
    state.value.activeLang = val;
}

function fetch(page) {
    state.value.isLoading = true;
    if (page) {
        state.value.currentPage = page;
    }
    axios.get(route('api.banners.index', {'page': state.value.currentPage}))
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
    if (can('destroy-banners')) {
        swal({
            title: 'Видалити?',
            icon: 'warning',
            showCancelButton: true,
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(route('api.banners.destroy', id))
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
    if (can('edit-banners')) {
        axios.get(route('api.banners.edit', id))
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
    if (can('edit-banners')) {
        axios.put(route('api.banners.update', state.value.item.id), state.value.item)
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
    if (can('create-banners')) {
        axios.post(route('api.banners.create'), state.value.item)
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
    if (state.value.modalAction === 'edit' && can('edit-banners')) {
        onUpdate();
    } else if (state.value.modalAction === 'create' && can('create-banners')) {
        onCreate();
    }
}

function create() {
    if (can('create-banners')) {
        Object.assign(state.value.item, item);
        state.value.modalAction = 'create';
        modalFunction();
    }
}


function uploadImage(image, device, lang) {
    let formData = new FormData();
    formData.append('type', device);
    formData.append('banner', image);
    axios.post(route('api.banners.upload'), formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
        .then(({data}) => {
            if (device === 'mobile') {
                if (lang === 'ru') {
                    state.value.item.image_mobile.ru = data.result;
                }
                if (lang === 'ua') {
                    state.value.item.image_mobile.ua = data.result;
                }
            }
            if (device === 'table') {
                if (lang === 'ru') {
                    state.value.item.image_table.ru = data.result;
                }
                if (lang === 'ua') {
                    state.value.item.image_table.ua = data.result;
                }
            }
            if (device === 'desktop') {
                if (lang === 'ru') {
                    state.value.item.image_desktop.ru = data.result;
                }
                if (lang === 'ua') {
                    state.value.item.image_desktop.ua = data.result;
                }
            }
        })
        .catch((response) => console.log(response));
}
</script>
