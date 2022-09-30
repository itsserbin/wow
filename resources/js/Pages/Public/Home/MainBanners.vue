<template>
    <section id="banners" class="banners mb-5" v-if="banners.length">
        <swiper
            class="social-reviews-carousel"
            :slides-per-view="1"
            :space-between="0"
            :modules="modules"
            :navigation="true"
            :loop="true"
            :autoplay="{
              delay: 2500,
              disableOnInteraction: false,
            }"
            :lazy="true"
        >

            <swiper-slide v-for="(banner,i) in banners" :key="i">
                <a :href="lang === 'ru' ? (banner.link.ru ? banner.link.ru : 'javascript:' ) : (lang === 'ua' ? (banner.link.ua ? banner.link.ua : 'javascript:') : 'javascript:')"
                >
                    <picture>
                        <source media="(max-width: 568px)"
                                :srcset="lang === 'ru' ? banner.image_mobile.ru : (lang === 'ua' ? banner.image_mobile.ua : null)"
                        >
                        <source
                            :srcset="lang === 'ru' ? banner.image_table.ru : (lang === 'ua' ? banner.image_table.ua : null)"
                            media="(max-width: 991px)">
                        <source
                            :srcset="lang === 'ru' ? banner.image_desktop.ru : (lang === 'ua' ? banner.image_desktop.ua : null)">
                        <img
                            :srcset="lang === 'ru' ? banner.image_desktop.ru : (lang === 'ua' ? banner.image_desktop.ua : null)"
                            :alt="lang === 'ru' ? banner.title.ru : (lang === 'ua' ? banner.title.ua : null)"
                            class="w-100"
                        >
                    </picture>
                </a>
            </swiper-slide>
        </swiper>

    </section>
</template>

<script>
import {Lazy, Autoplay, Navigation} from "swiper";

export default {
    props: {
        lang: String,
    },
    setup() {
        return {
            modules: [Lazy, Autoplay, Navigation],
        };
    },
    data() {
        return {
            banners: [],
            settings: {
                fade: true,
                dots: true,
                arrows: true,
                infinite: true,
                autoplay: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                focusOnSelect: false,
                responsive: [
                    {
                        breakpoint: 768,
                        settings: {
                            arrows: false,
                        }
                    }
                ]
            }
        }
    },
    created() {
        axios.get('/api/v1/banners/all')
            .then(({data}) => this.banners = data.result)
            .catch((response) => console.log(response));
    },
}
</script>
