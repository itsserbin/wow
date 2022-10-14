<template>
    <div class="
                items-center
                border-gray-300
                flex
                bg-[#fff]
                rounded-[15px]
                shadow-lg
                box-border
                justify-between
                p-[1rem]
                mb-3
            "
    >
        <label class="
                        text-[#231f20]
                        flex-row
                        text-[1rem]
                        font-[500]
                        mb-0
                        whitespace-nowrap
                        w-[100%]
                        items-center
                        flex
                    "
        >Промокод
            <input class="
                            border-[0.5px]
                            border-red-600
                            box-border
                            text-[.875rem]
                            p-[1rem]
                            text-center
                            w-[100%]
                            rounded-[20px]
                            mx-3
                    "
                   type="text"
                   placeholder="XXX-XXX-XXX"
                   v-model="promo_code"
                   v-if="!store.state.promo_code"
            >
            <input class="
                            border-[0.5px]
                            border-red-600
                            box-border
                            text-[.875rem]
                            p-[1rem]
                            text-center
                            w-[100%]
                            rounded-[20px]
                            mx-3
                    "
                   type="text"
                   placeholder="XXX-XXX-XXX"
                   :value="store.state.promo_code"
                   v-if="store.state.promo_code"
            >
        </label>
        <a href="javascript:"
           v-if="store.state.promo_code"
           @click="deactivateCode"
           class="
                    items-center
                    bg-[#e3342f]
                    border-[1px]
                    border-red-600
                    rounded-[0.625rem]
                    text-[#fff]
                    cursor-pointer
                    flex
                    font-[400]
                    justify-center
                    p-[0.875rem]
                    no-underline
                "
        >
            Деактивувати
        </a>

        <a href="javascript:"
           v-if="!store.state.promo_code"
           @click="activateCode"
           class="
                    items-center
                    bg-[#e3342f]
                    border-[1px]
                    border-red-600
                    rounded-[0.625rem]
                    text-[#fff]
                    cursor-pointer
                    flex
                    font-[400]
                    justify-center
                    p-[0.875rem]
                    no-underline
                "
        >
            Активувати
        </a>
    </div>
</template>

<script setup>
import {inject, ref} from "vue";
import {useStore} from "vuex";

const promo_code = ref(null);

const swal = inject('$swal');
const store = useStore();

function activateCode() {
    axios.post('/api/v1/cart/promo-code/activate', {
        promo_code: promo_code.value
    })
        .then(({data}) => {
            if (data.result) {
                swal({
                    icon: 'success',
                    title: 'Промо-код активирован',
                });
                store.commit('loadCart');
            } else {
                swal({
                    icon: 'error',
                    title: 'Произошла ошибка :(',
                    text: 'Возможно, промо-код введен некорректно, или же истек срок действия',
                });
            }
        })
        .catch((response) => console.log(response));
}

function deactivateCode() {
    axios.post('/api/v1/cart/promo-code/deactivate')
        .then(() => {
            swal({
                'title': 'Промо-код деактивирован!',
                'icon': 'success'
            })
            store.commit('loadCart');
        })
        .catch((response) => console.log(response));
}
</script>
