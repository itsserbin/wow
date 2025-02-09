<script setup>
import Table from '@/Components/Table.vue';
import XCircle from '@/Components/Icons/XCircle.vue';

defineProps(['data', 'statuses', 'canDestroy']);
const emits = defineEmits(['onDestroy', 'onEdit', 'onSendInvoiceSms'])

const headings = [
    {
        label: 'ID',
        key: 'id'
    },
    {
        label: 'Статус',
        key: 'status'
    },
    {
        label: 'Номер замовлення',
        key: 'order_id'
    },
    {
        label: 'Сумма',
        key: 'sum'
    },
    {
        label: 'Посилання для оплати',
        key: 'invoice_url'
    },
    {
        label: 'SMS',
        key: 'sms'
    },
    {
        label: 'Кіль-сть SMS',
        key: 'sms_count'
    },
    {
        label: "Оновлено<hr class='my-1'>Створено",
        key: 'timestamps'
    },
    {
        label: '#',
        key: 'actions'
    }
];

function copy(value) {
    navigator.clipboard.writeText(value);
}

function sendSms(id) {
    axios.post(route('api.sms.invoice', id))
        .then(() => {
            emits('onSendInvoiceSms');
        })
        .catch((response) => console.log(response));
}
</script>

<template>
    <Table :headings="headings" :isSlotMode="true" :rows="data">
        <template #status="{data}">
            {{ statuses[data.row.status] }}
        </template>

        <template #invoice_url="{data}">
            <a href="javascript:" @click="copy(data.row.invoice_url)" class="flex" v-if="data.row.invoice_url">
                {{ data.row.invoice_url ? data.row.invoice_url.substr(0, 30) + '...' : '-' }}
                <svg xmlns="http://www.w3.org/2000/svg" width="15px" height="15px" viewBox="0 0 115.77 122.88"
                     class="dark:invert">
                    <g>
                        <path class="st0"
                              d="M89.62,13.96v7.73h12.19h0.01v0.02c3.85,0.01,7.34,1.57,9.86,4.1c2.5,2.51,4.06,5.98,4.07,9.82h0.02v0.02 v73.27v0.01h-0.02c-0.01,3.84-1.57,7.33-4.1,9.86c-2.51,2.5-5.98,4.06-9.82,4.07v0.02h-0.02h-61.7H40.1v-0.02 c-3.84-0.01-7.34-1.57-9.86-4.1c-2.5-2.51-4.06-5.98-4.07-9.82h-0.02v-0.02V92.51H13.96h-0.01v-0.02c-3.84-0.01-7.34-1.57-9.86-4.1 c-2.5-2.51-4.06-5.98-4.07-9.82H0v-0.02V13.96v-0.01h0.02c0.01-3.85,1.58-7.34,4.1-9.86c2.51-2.5,5.98-4.06,9.82-4.07V0h0.02h61.7 h0.01v0.02c3.85,0.01,7.34,1.57,9.86,4.1c2.5,2.51,4.06,5.98,4.07,9.82h0.02V13.96L89.62,13.96z M79.04,21.69v-7.73v-0.02h0.02 c0-0.91-0.39-1.75-1.01-2.37c-0.61-0.61-1.46-1-2.37-1v0.02h-0.01h-61.7h-0.02v-0.02c-0.91,0-1.75,0.39-2.37,1.01 c-0.61,0.61-1,1.46-1,2.37h0.02v0.01v64.59v0.02h-0.02c0,0.91,0.39,1.75,1.01,2.37c0.61,0.61,1.46,1,2.37,1v-0.02h0.01h12.19V35.65 v-0.01h0.02c0.01-3.85,1.58-7.34,4.1-9.86c2.51-2.5,5.98-4.06,9.82-4.07v-0.02h0.02H79.04L79.04,21.69z M105.18,108.92V35.65v-0.02 h0.02c0-0.91-0.39-1.75-1.01-2.37c-0.61-0.61-1.46-1-2.37-1v0.02h-0.01h-61.7h-0.02v-0.02c-0.91,0-1.75,0.39-2.37,1.01 c-0.61,0.61-1,1.46-1,2.37h0.02v0.01v73.27v0.02h-0.02c0,0.91,0.39,1.75,1.01,2.37c0.61,0.61,1.46,1,2.37,1v-0.02h0.01h61.7h0.02 v0.02c0.91,0,1.75-0.39,2.37-1.01c0.61-0.61,1-1.46,1-2.37h-0.02V108.92L105.18,108.92z"/>
                    </g>
                </svg>
            </a>
        </template>

        <template #sms="{data}">
            {{ data.row.sms ? 'Надіслано' : 'Не надіслано' }}
            <div v-if="!data.row.sms">
                <br/>
                <a href="javascript:" v-if="data.row.invoice_url" @click="sendSms(data.row.id)" class="text-blue-600">Відправити
                    SMS</a>
            </div>
        </template>
        <template #timestamps="{data}">
            {{ $filters.dateTimeFormat(data.row.updated_at) }}
            <hr class="my-1">
            {{ $filters.dateTimeFormat(data.row.created_at) }}
        </template>

        <template #actions="{data}">
            <a href="javascript:"
               @click="$emit('onDestroy', data.row.id)"
               v-if="canDestroy"
            >
                <XCircle/>
            </a>
        </template>
    </Table>
</template>
