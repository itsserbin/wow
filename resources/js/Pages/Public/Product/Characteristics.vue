<template>
    <div class="characteristics-table">
        <table>
            <tbody>
            <tr v-for="(value,key) in data">
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

<script setup>
const props = defineProps(['items', 'lang']);
const data = JSON.parse(props.items);
</script>
