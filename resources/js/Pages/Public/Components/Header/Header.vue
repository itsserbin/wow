<template>
    <div class="shadow-lg ">
        <div class="max-w-7xl mx-auto mt-2 ">
            <div class="flex justify-between items-center mx-auto px-2">
                <div class="w-[40.3%]">
                    <Logo :app-name="appName"/>
                </div>

                <div class="grow-0 shrink-0 basis-[auto]  m-auto mr-[1rem] flex justify-end ml-[47px]"
                     style="margin:auto;">
                    <cart-icon-component :cart-route="route('cart')"></cart-icon-component>
                </div>
                <div class=" flex  items-center w-[23.3%]  mob_position mx-2 justify-end">
                    <div class=" max-w-[55px]">
                        <Langs :lang="lang"/>
                    </div>
                </div>
                <div class="grow-0 shrink-0 basis-[auto] z-50 flex  w-[12.3%]   ml-[20px] justify-end">
                    <Burger :app-email="appEmail"
                            :app-facebook="appFacebook"
                            :app-instagram="appInstagram"
                            :app-phone="appPhone"
                            :app-schedule="appSchedule"
                            :app-telegram="appTelegram"
                            :app-viber="appViber"
                            :lang="lang"
                            :pages="pages"
                    />
                </div>
            </div>

        </div>
        <div class=" bg-[#ffb7b7]">
            <HeaderCategories :categories="JSON.parse(categories)" :lang="lang"/>
        </div>


    </div>


    <button @click="scrollTop" id="myBtn"
            class=" cursor-pointer items-center z-[-1] bg-gray-500 rounded-[50%] h-[50px] justify-center left-[2%] bottom-[5%] fixed w-[50px]"
    >
        <span class="icon-arrow-up2 ">
        <svg xmlns="http://www.w3.org/2000/svg"
             width="16"
             height="16"
             fill="currentColor"
             class="bi bi-arrow-up mx-auto"
             viewBox="0 0 16 16"
        >
                <path fill-rule="evenodd"
                      d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"/>
            </svg>
    </span>
    </button>
</template>

<script setup>
import Burger from '@/Pages/Public/Components/Header/Burger.vue';
import Langs from '@/Pages/Public/Components/Header/Langs.vue';
import Logo from '@/Pages/Public/Components/Header/Logo.vue';
import HeaderCategories from '@/Pages/Public/Components/Header/HeaderCategories.vue';
import {onMounted, ref} from "vue";
import ReviewForm from '../../Product/ReviewForm.vue';


const state = ref({
    showBurger: false,
    langActiveClass: false,

})


function scrollTop() {


    window.scrollTo({scrollX, top: 0, behavior: 'smooth'});


    window.addEventListener('scrollY', function () {
        myBtn.classList.add('hide');
    });

    window.addEventListener('scroll', function () {
        myBtn.classList.remove('hide')
        myBtn.hidden = (scrollY < document.documentElement.clientHeight);
    });
}


const props = defineProps([
    'indexRoute',
    'exchangePolicyRoute',
    'privacyPolicyRoute',
    'logoApp',
    'appName',
    'appPhone',
    'appEmail',
    'appFacebook',
    'appInstagram',
    'appSchedule',
    'appTelegram',
    'appViber',
    'pages',
    'lang',
    'categories',
    'textReviews',
    'reviewsRoute',
]);


const show = ref(false);
const showSecond = ref(false)

function showModalPopup() {
    show.value = !show.value;
}

function showModalPopupSecond() {
    showSecond.value = !showSecond.value;
}


// function handleSCroll(event) {
//     let header = document.querySelector(".header");
//     if (window.scrollY > 50 && !header.className.includes('shadow')) {
//         header.classList.add('shadow');
//     } else if (window.scrollY < 50) {
//         header.classList.remove('shadow');
//     }
// }


</script>

<style scoped>
.hide {
    display: none;
}
</style>
