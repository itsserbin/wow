<script setup>
import Table from '@/Components/Table.vue';
import {onMounted, reactive} from "vue";
import {swal} from "@/Includes/swal";
import {useI18n} from "vue-i18n";

const props = defineProps(['data']);

const {t} = useI18n();

const headings = [
    {
        label: 'Назва',
        key: 'name'
    },
    {
        label: 'Сума',
        key: 'sum'
    },
];

const state = reactive({
    data: [
        {
            'name': 'Прибуток',
            'sum': props.data.profit
        },
        {
            'name': 'Надходження',
            'sum': props.data.receipts
        },
        {
            'name': 'Витрати',
            'sum': props.data.costs.total
        },
    ],
    categories: [],
    isCategoriseModal: false,
    item: {
        id: null,
        category_id: null
    },
});


onMounted(() => {
    Object.keys(props.data.costs).forEach((key) => {
        if (key !== 'total') {
            state.data.push({
                'name': '--- ' + key,
                'sum': props.data.costs[key],
            })
        }
    })
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

const editCategory = (id) => {
    toggleCategoriesModal();
    state.item.id = id;
}
</script>

<template>
    <Table :headings="headings" :rows="state.data" :isSlotMode="true">
        <template #sum="{data}">
            {{ $filters.formatMoney(data.row.sum) }}
        </template>

        <template #name="{data}">
            <div class="text-start">
                {{ data.row.name }}
            </div>
        </template>
    </Table>
</template>
