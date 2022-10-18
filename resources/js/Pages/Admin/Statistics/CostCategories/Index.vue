<template>
    <StatisticLayout title="Категорії витрат">
        <template #header>
            Категорії витрат
        </template>

        <loader-component v-if="state.isLoading"/>
        <div v-if="!state.isLoading">
            <button-component type="btn" @click="create">
                Додати
            </button-component>

            <table-component :headings="headings"
                             :rows="state.categories.data"
                             :isSlotMode="true"
            >
                <template v-slot:id="{data}">
                    <a href="javascript:" @click="onEdit(data.row.id,data.i)">
                        {{ data.row.id }}
                    </a>
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

            <pagination :pagination="state.categories"
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
    </StatisticLayout>
</template>

<script setup>
import {reactive, onMounted, inject, ref, computed} from "vue";
import CostCategoryModal from '@/Pages/Admin/Statistics/CostCategories/Modal.vue';
import StatisticLayout from '@/Pages/Admin/Statistics/StatisticLayout.vue'

const swal = inject('$swal')
const can = inject('$can');

const item = ({
    title: null,
    slug: null,
})

const state = ref({
    categories: [],
    isLoading: true,
    isActiveModal: false,
    modalAction: '',
    item: {},
    currentPage: 1,

});

onMounted(() => fetch());

const activeModal = computed(() => state.value.isActiveModal ? CostCategoryModal : null)

const headings = reactive([
    {
        label: 'ID',
        key: 'id'
    },
    {
        label: 'Назва',
        key: 'title'
    },
    {
        label: 'Slug',
        key: 'slug'
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
    axios.get(route('api.statistics.costs.categories.index', {
        page: state.value.currentPage
    }))
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
    if (can('show-bookkeeping-costs')) {
        swal({
            title: 'Видалити?',
            icon: 'warning',
            showCancelButton: true,
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(route('api.statistics.costs.categories.destroy', id))
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
    axios.get(route('api.statistics.costs.categories.edit', id))
        .then(({data}) => {
            state.value.item = data.result;
            state.value.modalAction = 'edit';
            state.value.item.index = i;
            modalFunction();
        })
        .catch((response) => console.log(response))
}

function onUpdate() {
    axios.put(route('api.statistics.costs.categories.update', state.value.item.id), state.value.item)
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

function onCreate() {
    axios.post(route('api.statistics.costs.categories.create'), state.value.item)
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

function submitForm() {
    if (state.value.modalAction === 'edit') {
        onUpdate();
    } else if (state.value.modalAction === 'create') {
        onCreate();
    }
}

function create() {
    Object.assign(state.value.item, item);
    state.value.modalAction = 'create';
    modalFunction();
}
</script>
