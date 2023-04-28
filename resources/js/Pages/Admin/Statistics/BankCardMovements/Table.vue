<script setup>
import Table from '@/Components/Table.vue';
import XCircle from '@/Components/Icons/XCircle.vue';
import PrimaryButton from '@/Components/Button/Primary.vue'
import SecondaryButton from '@/Components/Button/Secondary.vue'
import Modal from '@/Components/Modal/Modal.vue';
import Select from '@/Components/Form/Select.vue';
import Label from '@/Components/Form/Label.vue';
import {reactive} from "vue";
import {swal} from "@/Includes/swal";
import {useI18n} from "vue-i18n";

defineProps(['data', 'categories']);
const emits = defineEmits(['onDestroy', 'onEdit', 'onUpdate', 'getCategories']);

const {t} = useI18n();

const headings = [
    {
        label: 'Дата',
        key: 'date'
    },
    {
        label: 'Категорія',
        key: 'category_id'
    },
    {
        label: 'Сума',
        key: 'sum'
    },
    {
        label: 'Залишок',
        key: 'balance'
    },
    {
        label: 'Коментар',
        key: 'comment'
    },
    {
        label: '#',
        key: 'actions'
    }
];

const state = reactive({
    categories: [],
    isCategoriseModal: false,
    item: {
        id: null,
        category_id: null
    },
});

const toggleCategoriesModal = () => {
    state.isCategoriseModal = !state.isCategoriseModal;
}

const setCategory = async () => {
    try {
        const {data} = await axios.post(route('api.statistics.bank-card-movements.category.update'), state.item);
        if (data.success) {
            state.item = {
                id: null,
                category_id: null
            }
            toggleCategoriesModal();
            emits('onUpdate');
            await swal({
                icon: 'success',
                title: t('swal.updated')
            })
        }

    } catch (e) {
        console.error(e);
    }
}

const editCategory = (val) => {
    if (val.sum < 0) {
        console.log(val.sum);
        emits('getCategories', 0);
    } else {
        emits('getCategories', 1);
    }
    toggleCategoriesModal();
    state.item.id = val.id;
}
</script>

<template>
    <Table :headings="headings" :rows="data" :isSlotMode="true">
        <template #date="{data}">
            <a href="javascript:" @click="$emit('onEdit',data.row.id,data.i)">
                {{ $filters.dateFormat(data.row.date) }}
                <br>
                <span class="text-[0.7rem]">
                    {{ $filters.timeFormat(data.row.date) }}
                </span>
            </a>
        </template>

        <template #category_id="{data}">
            <div v-if="data.row.category_id">
                <div v-if="data.row.category">
                    {{ data.row.category.title }}
                </div>
                <div v-else>
                    Категорія видалена
                </div>
            </div>
            <div v-else>
                <SecondaryButton type="button" @click="editCategory(data.row)">
                    Обрати
                </SecondaryButton>
            </div>
        </template>

        <template #sum="{data}">
            {{ $filters.formatMoney(data.row.sum) }}
        </template>

        <template #balance="{data}">
            {{ $filters.formatMoney(data.row.balance) }}
        </template>

        <template #actions="{data}">
            <a href="javascript:" @click="$emit('onDestroy',data.row.id)">
                <XCircle/>
            </a>
        </template>
    </Table>
    <Modal :show="state.isCategoriseModal" maxWidth="sm" @close="toggleCategoriesModal">
        <template #body>
            <div class="grid gap-y-4">
                <div class="block">
                    <Label value="Оберіть категорію"/>
                    <Select v-model="state.item.category_id" :options="categories"/>
                </div>
                <PrimaryButton @click="setCategory" type="button" class="justify-center">
                    Зберегти
                </PrimaryButton>
            </div>
        </template>
    </Modal>
</template>
