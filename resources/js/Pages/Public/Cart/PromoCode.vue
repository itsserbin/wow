<template>
    <div class="
                items-center
                border-gray-300
                flex
                rounded-[15px]
                shadow-lg
                box-border
                justify-between
                p-[1rem]
                mb-3
                flex-col
                md:flex-row
            "
    >
        <label class="
                        text-[#231f20]
                        flex-row
                        text-lg
                        font-subheading
                        font-[500]
                        text-center
                    "
        >Промокод</label>
        <input-component type="text"
                         placeholder="XXX-XXX-XXX"
                         v-model="promo_code"
                         v-if="!store.state.promo_code"
                         class="text-[.875rem] py-1 text-center w-[100%] rounded-[20px] mx-3 my-3 md:my-0 font-heading"
        ></input-component>

        <input-component type="text"
                         placeholder="XXX-XXX-XXX"
                         :value="store.state.promo_code"
                         v-if="store.state.promo_code"
                         class="text-[.875rem] py-1 text-center w-[100%] rounded-[20px] mx-3 my-3 md:my-0 font-heading"
        ></input-component>
        <button-component
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
        </button-component>

        <button-component v-if="!store.state.promo_code" @click="activateCode">
            Активувати
        </button-component>
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
