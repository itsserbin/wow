<script setup>
defineProps(['items']);
</script>

<template>
    <div class="characteristics-table">
        <table>
            <tbody>
            <tr v-for="(value,key) in items">
                <td>
                    <p><strong>{{ key }}</strong></p>
                </td>
                <td>
                    <span v-for="(val,i) in value">
                        {{ val }}<span v-if="i !== value.length - 1">, </span>
                    </span>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>
