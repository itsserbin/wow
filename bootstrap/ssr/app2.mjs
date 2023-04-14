var _a;
import { I } from "./assets/vue.m.487fc989.mjs";
import { computed, mergeProps, unref, useSSRContext, withCtx, openBlock, createBlock, createCommentVNode, createVNode, toDisplayString, ref, onMounted, inject, resolveComponent, onUnmounted, renderSlot, createTextVNode, onBeforeMount, onBeforeUpdate, createApp, h } from "vue";
import { Link, Head, createInertiaApp } from "@inertiajs/inertia-vue3";
import { InertiaProgress } from "@inertiajs/progress";
import { r as resolvePageComponent } from "./assets/vendor.67403750.mjs";
import VueSweetalert2 from "vue-sweetalert2";
import moment from "moment";
import numeral from "numeral";
import Editor from "@tinymce/tinymce-vue";
import { createI18n } from "vue-i18n";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderSlot, ssrRenderComponent, ssrRenderClass, ssrRenderList, ssrLooseContain, ssrGetDynamicModelProps, ssrRenderStyle, ssrRenderSlotInner, ssrIncludeBooleanAttr } from "vue/server-renderer";
import { _ as _export_sfc } from "./assets/_plugin-vue_export-helper.43be4956.mjs";
import _sfc_main$s from "./assets/Logo.5e8f1180.mjs";
import { Link as Link$1 } from "@inertiajs/vue3";
import { useStore, createStore } from "vuex";
import Datepicker from "@vuepic/vue-datepicker";
import { Chart, registerables } from "chart.js";
import "axios";
const i18n = createI18n({
  locale: "ua",
  legacy: false,
  messages: {
    ua: {
      categories: {
        page_title: "\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0456\u0457",
        parent: "\u0411\u0430\u0442\u044C\u043A\u0456\u0432\u0441\u044C\u043A\u0430 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0456\u044F",
        title: "\u041D\u0430\u0437\u0432\u0430 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0456\u0457",
        enter_title: "\u0412\u043A\u0430\u0436\u0456\u0442\u044C \u043D\u0430\u0437\u0432\u0443 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0456\u0457"
      },
      products: {
        page_title: "\u0422\u043E\u0432\u0430\u0440\u0438",
        search_placeholder: "ID \u0430\u0431\u043E \u0430\u0440\u0442\u0438\u043A\u0443\u043B",
        h1: "\u041D\u0430\u0437\u0432\u0430",
        enter_h1: "\u0412\u043A\u0430\u0436\u0456\u0442\u044C \u043D\u0430\u0437\u0432\u0443 \u0442\u043E\u0432\u0430\u0440\u0443",
        vendor_code: "\u0410\u0440\u0442\u0438\u043A\u0443\u043B",
        enter_vendor_code: "\u0412\u043A\u0430\u0436\u0456\u0442\u044C \u0430\u0440\u0442\u0438\u043A\u0443\u043B",
        price: "\u0426\u0456\u043D\u0430",
        enter_price: "\u0412\u043A\u0430\u0436\u0456\u0442\u044C \u0446\u0456\u043D\u0430",
        discount_price: "\u0426\u0456\u043D\u0430 \u0437\u0456 \u0437\u043D\u0438\u0436\u043A\u043E\u044E",
        enter_discount_price: "\u0412\u043A\u0430\u0436\u0456\u0442\u044C \u0446\u0456\u043D\u0443 \u0437\u0456 \u0437\u043D\u0438\u0436\u043A\u043E\u044E",
        trade_price: "\u0426\u0456\u043D\u0430 \u0437\u0430\u043A\u0443\u043F\u043A\u0438",
        enter_trade_price: "\u0412\u043A\u0430\u0436\u0456\u0442\u044C \u0446\u0456\u043D\u0443 \u0437\u0430\u043A\u0443\u043F\u043A\u0438",
        views: "\u041F\u0435\u0440\u0435\u0433\u043B\u044F\u0434\u0456\u0432",
        sales: "\u041F\u043E\u043A\u0443\u043F\u043E\u043A",
        returns: "\u041F\u043E\u0432\u0435\u0440\u043D\u0435\u043D\u044C",
        refunds: "\u041E\u0431\u043C\u0456\u043D\u0456\u0432",
        status: "\u041D\u0430\u044F\u0432\u043D\u0456\u0441\u0442\u044C \u0442\u043E\u0432\u0430\u0440\u0443",
        categories: "\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0456\u0457",
        enter_categories: "\u041E\u0431\u0435\u0440\u0456\u0442\u044C \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0456\u0457",
        provider: "\u041F\u043E\u0441\u0442\u0430\u0447\u0430\u043B\u044C\u043D\u0438\u043A",
        sizes: "\u0420\u043E\u0437\u043C\u0456\u0440\u0438",
        enter_sizes: "\u041E\u0431\u0435\u0440\u0456\u0442\u044C \u0440\u043E\u0437\u043C\u0456\u0440\u0438",
        colors: "\u041A\u043E\u043B\u044C\u043E\u0440\u0438",
        enter_colors: "\u041E\u0431\u0435\u0440\u0456\u0442\u044C \u043A\u043E\u043B\u044C\u043E\u0440\u0438",
        youtube: "Youtube",
        enter_youtube: "\u0412\u0441\u0442\u0430\u0432\u0442\u0435 \u0441\u0441\u0438\u043B\u043A\u0443 \u043D\u0430 youtube",
        content: "\u041E\u043F\u0438\u0441 \u0442\u043E\u0432\u0430\u0440\u0443",
        size_table: "\u0422\u0430\u0431\u043B\u0438\u0446\u044F \u0440\u043E\u0437\u043C\u0456\u0440\u0456\u0432",
        select_characteristic_value: "\u041E\u0431\u0435\u0440\u0456\u0442\u044C \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F"
      },
      images: {
        page_title: "\u0417\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u043D\u044F"
      },
      clients: {
        full_name: "\u0424\u0406\u041E",
        status: "\u0421\u0442\u0430\u0442\u0443\u0441 \u043A\u043B\u0456\u0454\u043D\u0442\u0430",
        sub_status: "\u0414\u043E\u0434\u0430\u0442\u043A\u043E\u0432\u0438\u0439 \u043A\u043B\u0456\u0454\u043D\u0442\u0430",
        export: "\u0415\u043A\u0441\u043F\u043E\u0440\u0442\u0443\u0432\u0430\u0442\u0438",
        page_title: "\u041A\u043B\u0456\u0454\u043D\u0442\u0438",
        all_clients: "\u0412\u0441\u0456 \u043A\u043B\u0456\u0454\u043D\u0442\u0438",
        name: "\u0406\u043C\u02BC\u044F",
        enter_name: "\u0412\u043A\u0430\u0436\u0456\u0442\u044C \u0456\u043C\u02BC\u044F",
        last_name: "\u041F\u0440\u0456\u0437\u0432\u0438\u0449\u0435",
        enter_last_name: "\u0412\u043A\u0430\u0436\u0456\u0442\u044C \u043F\u0440\u0456\u0437\u0432\u0438\u0449\u0435",
        middle_name: "\u041F\u043E-\u0431\u0430\u0442\u044C\u043A\u043E\u0432\u0456",
        enter_middle_name: "\u0412\u043A\u0430\u0436\u0456\u0442\u044C \u043F\u043E-\u0431\u0430\u0442\u044C\u043A\u043E\u0432\u0456",
        phone: "\u0422\u0435\u043B\u0435\u0444\u043E\u043D",
        enter_phone: "\u0412\u043A\u0430\u0436\u0456\u0442\u044C \u0442\u0435\u043B\u0435\u0444\u043E\u043D",
        email: "Email",
        enter_email: "\u0412\u043A\u0430\u0436\u0456\u0442\u044C email",
        comment: "\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440",
        enter_comment: "\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440 \u0449\u043E\u0434\u043E \u043A\u043B\u0456\u0454\u043D\u0442\u0430",
        number_of_purchases: "\u0412\u0441\u044C\u043E\u0433\u043E \u0437\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u044C",
        purchased_goods: "\u0412\u0438\u043A\u043E\u043D\u0430\u043D\u0438\u0445 \u0437\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u044C",
        average_check: "\u0421\u0435\u0440\u0435\u0434\u043D\u0456\u0439 \u0447\u0435\u043A",
        whole_check: "\u0417\u0430\u0433\u0430\u043B\u044C\u043D\u0438\u0439 \u0447\u0435\u043A",
        search_placeholder: "\u0406\u043C\u02BC\u044F, \u043F\u0440\u0456\u0437\u0432\u0438\u0449\u0435, \u043F\u043E-\u0431\u0430\u0442\u044C\u043A\u043E\u0432\u0456, \u0442\u0435\u043B\u0435\u0444\u043E\u043D, email, \u043A\u043E\u043C\u0435\u043D\u0442\u0430\u0440..."
      },
      orders: {
        page_title: "\u0417\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F",
        status: "\u0421\u0442\u0430\u0442\u0443\u0441 \u0437\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F",
        manager_id: "\u041C\u0435\u043D\u0435\u0434\u0436\u0435\u0440",
        discount: "\u0417\u043D\u0438\u0436\u043A\u0430",
        enter_discount_sum: "\u0412\u043A\u0430\u0436\u0456\u0442\u044C \u0441\u0443\u043C\u0430 \u0437\u043D\u0438\u0436\u043A\u0438 (\u0433\u0440\u043D.)",
        sale_of_air: "\u0414\u043E\u0434.\u043F\u0440\u043E\u0434\u0430\u0436 \u043F\u043E\u0432\u0456\u0442\u0440\u044F",
        enter_sale_of_air_price: "\u0412\u043A\u0430\u0436\u0456\u0442\u044C \u0441\u0443\u043C\u0443 \u0434\u043E\u043F.\u043F\u0440\u043E\u0434\u0430\u0436\u0443 \u043F\u043E\u0432\u0456\u0442\u0440\u044F (\u0433\u0440\u043D.)",
        payment_method: "\u0421\u043F\u043E\u0441\u0456\u0431 \u043E\u043F\u043B\u0430\u0442\u0438",
        parcel_reminder: "\u041D\u0430\u0433\u0430\u0434\u0443\u0432\u0430\u043D\u043D\u044F \u043F\u0440\u043E \u043F\u043E\u0441\u0438\u043B\u043A\u0443",
        client_card: "\u041A\u0430\u0440\u0442\u043A\u0430 \u043A\u043B\u0456\u0454\u043D\u0442\u0430",
        total_count: "\u041A\u0456\u043B\u044C\u043A\u0456\u0441\u0442\u044C",
        total_price: "\u0421\u0443\u043C\u0430",
        postal_office: "\u041F\u043E\u0447\u0442\u043E\u0432\u0435 \u0432\u0456\u0434\u0434\u0456\u043B\u0435\u043D\u043D\u044F",
        enter_postal_office: "\u0412\u043A\u0430\u0436\u0456\u0442\u044C \u043F\u043E\u0447\u0442\u043E\u0432\u0435 \u0432\u0456\u0434\u0434\u0456\u043B\u0435\u043D\u043D\u044F",
        city: "\u041C\u0456\u0441\u0442\u043E",
        enter_city: "\u0412\u043A\u0430\u0436\u0456\u0442\u044C \u043C\u0456\u0441\u0442\u043E",
        waybill: "\u041D\u043E\u043C\u0435\u0440 \u043D\u0430\u043A\u043B\u0430\u0434\u043D\u043E\u0457",
        waybill_sent: "\u0422\u0422\u041D \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0430",
        waybill_resent: "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u043F\u043E\u0432\u0442\u043E\u0440\u043D\u043E",
        send_waybill_for_client: "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0422\u0422\u041D \u043A\u043B\u0438\u0435\u043D\u0442\u0443",
        enter_waybill: "\u0412\u043A\u0430\u0436\u0456\u0442\u044C \u043D\u043E\u043C\u0435\u0440 \u043D\u0430\u043A\u043B\u0430\u0434\u043D\u043E\u0457",
        comment: "\u041A\u043E\u043C\u0435\u043D\u0442\u0430\u0440\u0456 \u0434\u043E \u0437\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F",
        enter_comment: "\u0412\u043A\u0430\u0436\u0456\u0442\u044C \u043A\u043E\u043C\u0435\u043D\u0442\u0430\u0440\u0456 \u0434\u043E \u0437\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F",
        refund_other_waybill: "\u041F\u043E\u0432\u0435\u0440\u043D\u0435\u043D\u043D\u044F \u043F\u043E \u0456\u043D\u0448\u0456\u0439 \u0422\u0422\u041D",
        enter_refund_other_waybill: "\u0412\u043A\u0430\u0436\u0456\u0442\u044C \u043D\u043E\u043C\u0435\u0440 \u0422\u0422\u041D"
      },
      pages: {
        page_title: "\u0421\u0442\u043E\u0440\u0456\u043D\u043A\u0438",
        heading: "\u041D\u0430\u0437\u0432\u0430 \u0432 \u043C\u0435\u043D\u044E",
        enter_heading: "\u0412\u043A\u0430\u0436\u0456\u0442\u044C \u043D\u0430\u0437\u0432\u0443 \u0432 \u043C\u0435\u043D\u044E",
        h1: "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A",
        enter_h1: "\u0412\u043A\u0430\u0436\u0456\u0442\u044C \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A"
      },
      options: {
        brand: "\u041D\u0430\u0437\u0432\u0430 \u0431\u0440\u0435\u043D\u0434\u0443",
        enter_brand: "\u0412\u043A\u0430\u0436\u0456\u0442\u044C \u043D\u0430\u0437\u0432\u0443 \u0431\u0440\u0435\u043D\u0434\u0443",
        callback_status: "\u0417\u0432\u043E\u0440\u043E\u0442\u043D\u0456\u0439 \u0437\u0432\u02BC\u044F\u0437\u043E\u043A",
        callback_status_on: "\u0410\u043A\u0442\u0438\u0432\u043D\u0438\u0439",
        callback_status_off: "\u0412\u0438\u043C\u043A\u043D\u0435\u043D\u043D\u0438\u0439",
        consultation_status: "\u041A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0456\u044F \u043A\u043B\u0456\u0454\u043D\u0442\u0430",
        consultation_status_on: "\u0410\u043A\u0442\u0438\u0432\u043D\u0438\u0439",
        consultation_status_off: "\u0412\u0438\u043C\u043A\u043D\u0435\u043D\u043D\u0438\u0439",
        schedule: "\u0413\u0440\u0430\u0444\u0456\u043A \u0440\u043E\u0431\u043E\u0442\u0438",
        enter_schedule: "\u0412\u043A\u0430\u0436\u0456\u0442\u044C \u0433\u0440\u0430\u0444\u0456\u043A \u0440\u043E\u0431\u043E\u0442\u0438",
        phone: "\u0422\u0435\u043B\u0435\u0444\u043E\u043D \u043A\u043E\u043C\u043F\u0430\u043D\u0456\u0457",
        enter_phone: "\u0412\u043A\u0430\u0436\u0456\u0442\u044C \u0442\u0435\u043B\u0435\u0444\u043E\u043D \u043A\u043E\u043C\u043F\u0430\u043D\u0456\u0457",
        email: "\u0415\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0430 \u043F\u043E\u0448\u0442\u0430 \u043A\u043E\u043C\u043F\u0430\u043D\u0456\u0457",
        enter_email: "\u0412\u043A\u0430\u0436\u0456\u0442\u044C \u0435\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0443 \u043F\u043E\u0448\u0442\u0443 \u043A\u043E\u043C\u043F\u0430\u043D\u0456\u0457",
        facebook: "Facebook \u0441\u0442\u043E\u0440\u0456\u043D\u043A\u0430",
        enter_facebook: "\u0412\u043A\u0430\u0436\u0456\u0442\u044C facebook \u0441\u0442\u043E\u0440\u0456\u043D\u043A\u0443",
        instagram: "Instagram \u0441\u0442\u043E\u0440\u0456\u043D\u043A\u0430",
        enter_instagram: "\u0412\u043A\u0430\u0436\u0456\u0442\u044C instagram \u0441\u0442\u043E\u0440\u0456\u043D\u043A\u0443",
        telegram: "Telegram",
        enter_telegram: "\u0412\u043A\u0430\u0436\u0456\u0442\u044C telegram",
        viber: "Viber",
        enter_viber: "\u0412\u043A\u0430\u0436\u0456\u0442\u044C viber",
        whatsapp: "Whatsapp",
        enter_whatsapp: "\u0412\u043A\u0430\u0436\u0456\u0442\u044C whatsapp",
        fb_messenger: "Facebook messenger",
        enter_fb_messenger: "\u0412\u043A\u0430\u0436\u0456\u0442\u044C facebook messenger",
        heading_ua: "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A \u043D\u0430 \u0433\u043E\u043B\u043E\u0432\u043D\u0456\u0439 \u0441\u0442\u043E\u0440\u0456\u043D\u0446\u0456 UA",
        enter_heading_ua: "\u0412\u043A\u0430\u0436\u0456\u0442\u044C \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A \u043D\u0430 \u0433\u043E\u043B\u043E\u0432\u043D\u0456\u0439 \u0441\u0442\u043E\u0440\u0456\u043D\u0446\u0456 UA",
        heading_ru: "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A \u043D\u0430 \u0433\u043E\u043B\u043E\u0432\u043D\u0456\u0439 \u0441\u0442\u043E\u0440\u0456\u043D\u0446\u0456 RU",
        enter_heading_ru: "\u0412\u043A\u0430\u0436\u0456\u0442\u044C \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A \u043D\u0430 \u0433\u043E\u043B\u043E\u0432\u043D\u0456\u0439 \u0441\u0442\u043E\u0440\u0456\u043D\u0446\u0456 RU",
        meta_title_ua: "META Title \u0433\u043E\u043B\u043E\u0432\u043D\u043E\u0457 \u0441\u0442\u043E\u0440\u0456\u043D\u043A\u0438 UA",
        enter_meta_title_ua: "\u0412\u043A\u0430\u0436\u0456\u0442\u044C META Title \u0433\u043E\u043B\u043E\u0432\u043D\u043E\u0457 \u0441\u0442\u043E\u0440\u0456\u043D\u043A\u0438 UA",
        meta_title_ru: "META Title \u0433\u043E\u043B\u043E\u0432\u043D\u043E\u0457 \u0441\u0442\u043E\u0440\u0456\u043D\u043A\u0438 RU",
        enter_meta_title_ru: "\u0412\u043A\u0430\u0436\u0456\u0442\u044C META Title \u0433\u043E\u043B\u043E\u0432\u043D\u043E\u0457 \u0441\u0442\u043E\u0440\u0456\u043D\u043A\u0438 RU",
        meta_description_ua: "META Description \u0433\u043E\u043B\u043E\u0432\u043D\u043E\u0457 \u0441\u0442\u043E\u0440\u0456\u043D\u043A\u0438 UA",
        enter_meta_description_ua: "\u0412\u043A\u0430\u0436\u0456\u0442\u044C META Description \u0433\u043E\u043B\u043E\u0432\u043D\u043E\u0457 \u0441\u0442\u043E\u0440\u0456\u043D\u043A\u0438 UA",
        meta_description_ru: "META Description \u0433\u043E\u043B\u043E\u0432\u043D\u043E\u0457 \u0441\u0442\u043E\u0440\u0456\u043D\u043A\u0438 RU",
        enter_meta_description_ru: "\u0412\u043A\u0430\u0436\u0456\u0442\u044C META Description \u0433\u043E\u043B\u043E\u0432\u043D\u043E\u0457 \u0441\u0442\u043E\u0440\u0456\u043D\u043A\u0438 RU",
        text_delivery_and_payment_ua: "\u0423\u043C\u043E\u0432\u0438 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0438 \u0442\u0430 \u043E\u043F\u043B\u0430\u0442\u0438 \u043D\u0430 \u0441\u0442\u043E\u0440\u0456\u043D\u0446\u0456 \u0442\u043E\u0432\u0430\u0440\u0443 UA",
        text_delivery_and_payment_ru: "\u0423\u043C\u043E\u0432\u0438 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0438 \u0442\u0430 \u043E\u043F\u043B\u0430\u0442\u0438 \u043D\u0430 \u0441\u0442\u043E\u0440\u0456\u043D\u0446\u0456 \u0442\u043E\u0432\u0430\u0440\u0443 RU",
        text_return_and_exchange_ua: "\u0423\u043C\u043E\u0432\u0438 \u043E\u0431\u043C\u0456\u043D\u0443 \u0442\u0430 \u043F\u043E\u0432\u0435\u0440\u043D\u0435\u043D\u043D\u044F \u043D\u0430 \u0441\u0442\u043E\u0440\u0456\u043D\u0446\u0456 \u0442\u043E\u0432\u0430\u0440\u0443 UA",
        text_return_and_exchange_ru: "\u0423\u043C\u043E\u0432\u0438 \u043E\u0431\u043C\u0456\u043D\u0443 \u0442\u0430 \u043F\u043E\u0432\u0435\u0440\u043D\u0435\u043D\u043D\u044F \u043D\u0430 \u0441\u0442\u043E\u0440\u0456\u043D\u0446\u0456 \u0442\u043E\u0432\u0430\u0440\u0443 RU",
        text_home_page_ua: "\u0422\u0435\u043A\u0441\u0442 \u043D\u0430 \u0433\u043E\u043B\u043E\u0432\u043D\u0456\u0439 \u0441\u0442\u043E\u0440\u0456\u043D\u0446\u0456 UA",
        text_home_page_ru: "\u0422\u0435\u043A\u0441\u0442 \u043D\u0430 \u0433\u043E\u043B\u043E\u0432\u043D\u0456\u0439 \u0441\u0442\u043E\u0440\u0456\u043D\u0446\u0456 RU",
        text_label_logo: "\u041B\u043E\u0433\u043E\u0442\u0438\u043F",
        text_destroyLabel: "\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438",
        instructions: "\u0412\u0438\u0431\u0435\u0440\u0456\u0442\u044C \u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u043D\u044F \u043B\u043E\u0433\u043E\u0442\u0438\u043F\u0443"
      },
      meta: {
        title: "META Title",
        enter_title: "\u0412\u043A\u0430\u0436\u0456\u0442\u044C META Title",
        description: "META Description",
        enter_description: "\u0412\u043A\u0430\u0436\u0456\u0442\u044C META Description",
        keywords: "META Keywords",
        enter_keywords: "\u0412\u043A\u0430\u0436\u0456\u0442\u044C META Keywords"
      },
      swal: {
        data_copied: "\u0414\u0430\u043D\u0456 \u0443\u0441\u043F\u0456\u0448\u043D\u043E \u0441\u043A\u043E\u043F\u0456\u0439\u043E\u0432\u0430\u043D\u0456",
        updated: "\u0414\u0430\u043D\u0456 \u0443\u0441\u043F\u0456\u0448\u043D\u043E \u043E\u043D\u043E\u0432\u043B\u0435\u043D\u0456",
        created: "\u0414\u0430\u043D\u0456 \u0443\u0441\u043F\u0456\u0448\u043D\u043E \u0441\u0442\u0432\u043E\u0440\u0435\u043D\u0456",
        destroyed: "\u0414\u0430\u043D\u0456 \u0443\u0441\u043F\u0456\u0448\u043D\u043E \u0432\u0438\u0434\u0430\u043B\u0435\u043D\u0456",
        sure: "\u0412\u0438 \u0432\u043F\u0435\u0432\u043D\u0435\u043D\u0456?",
        error: "\u0412\u0438\u043D\u0438\u043A\u043B\u0430 \u043F\u043E\u043C\u0438\u043B\u043A\u0430",
        check_data: "\u041F\u0435\u0440\u0435\u0432\u0456\u0440\u0442\u0435 \u0434\u0430\u043D\u0456",
        logo: {
          upload: "\u041B\u043E\u0433\u043E\u0442\u0438\u043F \u0431\u0443\u043B\u043E \u0443\u0441\u043F\u0456\u0448\u043D\u043E \u0437\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0435\u043D\u043E!",
          error: "\u0412\u0438\u043D\u0438\u043A\u043B\u0430 \u043F\u043E\u043C\u0438\u043B\u043A\u0430 \u043B\u043E\u0433\u043E\u0442\u0438\u043F \u043D\u0435 \u0431\u0443\u043B\u043E \u0437\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0435\u043D\u043E!",
          destroy: {
            success: "\u041B\u043E\u0433\u043E\u0442\u0438\u043F \u0431\u0443\u043B\u043E \u0443\u0441\u043F\u0456\u0448\u043D\u043E \u0432\u0438\u0434\u0430\u043B\u0435\u043D\u043E!",
            error: "\u0412\u0438\u043D\u0438\u043A\u043B\u0430 \u043F\u043E\u043C\u0438\u043B\u043A\u0430 \u043F\u0456\u0434 \u0447\u0430\u0441 \u0432\u0438\u0434\u0430\u043B\u0435\u043D\u043D\u044F \u043B\u043E\u0433\u043E\u0442\u0438\u043F\u0443!"
          }
        }
      },
      id: "ID",
      status: "\u0421\u0442\u0430\u0442\u0443\u0441",
      sort: "\u0421\u043E\u0440\u0442\u0443\u0432\u0430\u043D\u043D\u044F",
      slug: "\u0427\u041F\u0423",
      save: "\u0417\u0431\u0435\u0440\u0435\u0433\u0442\u0438",
      enter_slug: "\u0412\u043A\u0430\u0436\u0456\u0442\u044C \u0427\u041F\u0423",
      published: "\u0421\u0442\u0430\u0442\u0443\u0441 \u043F\u0443\u0431\u043B\u0456\u043A\u0430\u0446\u0456\u0457",
      add: "\u0414\u043E\u0434\u0430\u0442\u0438",
      seo_text: "SEO \u0422\u0435\u043A\u0441\u0442",
      preview: "\u0413\u043E\u043B\u043E\u0432\u043D\u0435 \u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u043D\u044F",
      select_image: "\u041E\u0431\u0440\u0430\u0442\u0438 \u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u043D\u044F",
      created_at: "\u0421\u0442\u0432\u043E\u0440\u0435\u043D\u043E",
      updated_at: "\u041E\u043D\u043E\u0432\u043B\u0435\u043D\u043E"
    }
  }
});
const _sfc_main$r = {
  __name: "Card",
  __ssrInlineRender: true,
  props: [
    "image",
    "imageAlt",
    "link",
    "title",
    "description",
    "button",
    "class"
  ],
  setup(__props) {
    const props = __props;
    const cardLink = computed(() => props.link ? props.link : "javascript:");
    const imageAlternativeText = computed(() => props.imageAlt ? props.imageAlt : props.title ? props.title : null);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "w-full mx-auto bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700" + props.class ? props.class : null
      }, _attrs))}>`);
      if (__props.image) {
        _push(`<a${ssrRenderAttr("href", unref(cardLink))}><img class="rounded-t-lg mx-auto"${ssrRenderAttr("src", __props.image)}${ssrRenderAttr("alt", unref(imageAlternativeText))}></a>`);
      } else {
        _push(`<!---->`);
      }
      _push(` ${ssrInterpolate(_ctx.$slots.description)} `);
      if (__props.title || __props.description || __props.button) {
        _push(`<div class="p-5">`);
        if (__props.title) {
          _push(`<a${ssrRenderAttr("href", unref(cardLink))}><h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${ssrInterpolate(__props.title ? __props.title : _ctx.$slots.title)}</h5></a>`);
        } else {
          _push(`<!---->`);
        }
        if (__props.description) {
          _push(`<p class="mb-3 font-normal text-gray-700 dark:text-gray-400">${ssrInterpolate(__props.description ? __props.description : _ctx.$slots.description)}</p>`);
        } else {
          _push(`<!---->`);
        }
        if (__props.button) {
          _push(`<a${ssrRenderAttr("href", unref(cardLink))} class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">${ssrInterpolate(__props.button)} <svg aria-hidden="true" class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></a>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$r = _sfc_main$r.setup;
_sfc_main$r.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Card.vue");
  return _sfc_setup$r ? _sfc_setup$r(props, ctx) : void 0;
};
const _sfc_main$q = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<aside${ssrRenderAttrs(mergeProps({ class: "w-full" }, _attrs))}><div class="overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800"><ul class="space-y-2">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</ul></div></aside>`);
}
const _sfc_setup$q = _sfc_main$q.setup;
_sfc_main$q.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Sidebar/Sidebar.vue");
  return _sfc_setup$q ? _sfc_setup$q(props, ctx) : void 0;
};
const Sidebar = /* @__PURE__ */ _export_sfc(_sfc_main$q, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$p = {
  __name: "SidebarItem",
  __ssrInlineRender: true,
  props: ["item", "active"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<li${ssrRenderAttrs(_attrs)}>`);
      if (__props.item) {
        _push(ssrRenderComponent(unref(Link), {
          href: __props.item.href ? __props.item.href : "javascript:",
          class: [{ "bg-gray-100 dark:bg-gray-700": __props.active }, "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"]
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if (__props.item.icon) {
                _push2(`<div${_scopeId}>${__props.item.icon}</div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<span class="ml-3"${_scopeId}>${ssrInterpolate(__props.item.title)}</span>`);
            } else {
              return [
                __props.item.icon ? (openBlock(), createBlock("div", {
                  key: 0,
                  innerHTML: __props.item.icon
                }, null, 8, ["innerHTML"])) : createCommentVNode("", true),
                createVNode("span", { class: "ml-3" }, toDisplayString(__props.item.title), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<a href="javascript:" class="${ssrRenderClass([{ "bg-gray-100 dark:bg-gray-700": __props.active }, "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"])}">`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        _push(`</a>`);
      }
      _push(`</li>`);
    };
  }
};
const _sfc_setup$p = _sfc_main$p.setup;
_sfc_main$p.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Sidebar/SidebarItem.vue");
  return _sfc_setup$p ? _sfc_setup$p(props, ctx) : void 0;
};
const _sfc_main$o = {
  __name: "Tabs",
  __ssrInlineRender: true,
  props: ["data", "activeItem", "classes"],
  emits: ["clickTab"],
  setup(__props, { emit: emits }) {
    const props = __props;
    const active = ref(null);
    onMounted(() => {
      if (props.activeItem) {
        active.value = props.activeItem;
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<ul${ssrRenderAttrs(mergeProps({
        class: ["flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400", __props.classes]
      }, _attrs))}><!--[-->`);
      ssrRenderList(__props.data, (item) => {
        _push(`<li class="mr-2"><a href="javascript:" class="${ssrRenderClass({
          "inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300": active.value !== item.key,
          "inline-block p-4 rounded-t-lg text-blue-600 bg-gray-100 active dark:bg-gray-800 dark:text-blue-500": active.value === item.key
        })}">${ssrInterpolate(item.value)}</a></li>`);
      });
      _push(`<!--]--></ul>`);
    };
  }
};
const _sfc_setup$o = _sfc_main$o.setup;
_sfc_main$o.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Tabs.vue");
  return _sfc_setup$o ? _sfc_setup$o(props, ctx) : void 0;
};
const _sfc_main$n = {
  __name: "LangTabs",
  __ssrInlineRender: true,
  props: ["activeItem"],
  emits: ["clickLang"],
  setup(__props, { emit: emits }) {
    const defaultLang = inject("$defaultLang");
    const tabsData = ref([
      {
        key: "ua",
        value: "UA"
      },
      {
        key: "ru",
        value: "RU"
      }
    ]);
    function clickTab(val) {
      emits("clickLang", val);
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$o, mergeProps({
        data: tabsData.value,
        activeItem: __props.activeItem ? __props.activeItem : unref(defaultLang),
        onClickTab: clickTab,
        classes: "justify-center"
      }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup$n = _sfc_main$n.setup;
_sfc_main$n.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/LangTabs.vue");
  return _sfc_setup$n ? _sfc_setup$n(props, ctx) : void 0;
};
const _sfc_main$m = {
  __name: "ArrowUp",
  __ssrInlineRender: true,
  props: ["width", "height"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<svg${ssrRenderAttrs(mergeProps({
        xmlns: "http://www.w3.org/2000/svg",
        width: __props.width ? __props.width : "16",
        height: __props.height ? __props.height : "16",
        fill: "currentColor",
        class: "bi bi-chevron-up",
        viewBox: "0 0 16 16"
      }, _attrs))}><path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"></path></svg>`);
    };
  }
};
const _sfc_setup$m = _sfc_main$m.setup;
_sfc_main$m.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Icons/ArrowUp.vue");
  return _sfc_setup$m ? _sfc_setup$m(props, ctx) : void 0;
};
const _sfc_main$l = {
  __name: "ArrowDown",
  __ssrInlineRender: true,
  props: ["width", "height"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<svg${ssrRenderAttrs(mergeProps({
        xmlns: "http://www.w3.org/2000/svg",
        width: __props.width ? __props.width : "16",
        height: __props.height ? __props.height : "16",
        fill: "currentColor",
        class: "bi bi-chevron-down",
        viewBox: "0 0 16 16"
      }, _attrs))}><path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"></path></svg>`);
    };
  }
};
const _sfc_setup$l = _sfc_main$l.setup;
_sfc_main$l.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Icons/ArrowDown.vue");
  return _sfc_setup$l ? _sfc_setup$l(props, ctx) : void 0;
};
const _sfc_main$k = {
  __name: "Table",
  __ssrInlineRender: true,
  props: {
    headings: Array,
    rows: Array,
    isSlotMode: {
      type: Boolean,
      default: false
    },
    nowrap: {
      type: Boolean,
      default: true
    },
    responsive: {
      type: Boolean,
      default: true
    }
  },
  emits: ["fetch", "sort"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "not-prose relative bg-slate-50 rounded-xl overflow-hidden dark:bg-slate-800/25" }, _attrs))}><div class="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]"></div><div class="relative rounded-xl"><div class="${ssrRenderClass([{ "whitespace-nowrap": __props.nowrap, "overflow-x-scroll": __props.responsive }, "shadow-sm my-8"])}"><table class="border-collapse table-auto w-full text-sm text-center"><thead><tr><!--[-->`);
      ssrRenderList(__props.headings, (heading) => {
        _push(`<th class="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200"><div class="flex items-center justify-center"><span>${heading.label}</span>`);
        if (heading.sortable) {
          _push(`<div class="hover:cursor-pointer ml-2">`);
          _push(ssrRenderComponent(_sfc_main$m, {
            onClick: ($event) => _ctx.$emit("sort", heading.key, "asc")
          }, null, _parent));
          _push(ssrRenderComponent(_sfc_main$l, {
            onClick: ($event) => _ctx.$emit("sort", heading.key, "desc")
          }, null, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></th>`);
      });
      _push(`<!--]--></tr></thead><tbody class="bg-white dark:bg-slate-800"><!--[-->`);
      ssrRenderList(__props.rows, (row, i) => {
        _push(`<tr class="hover:bg-gray-200 dark:hover:bg-gray-700 transition-all"><!--[-->`);
        ssrRenderList(__props.headings, (heading) => {
          _push(`<td class="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">`);
          if (__props.isSlotMode && _ctx.$slots[heading.key]) {
            _push(`<div>`);
            ssrRenderSlot(_ctx.$slots, heading.key, {
              data: { row, i }
            }, null, _push, _parent);
            _push(`</div>`);
          } else {
            _push(`<!--[-->`);
            ssrRenderList(row, (value, key) => {
              _push(`<div>${ssrInterpolate(key === heading.key ? value : null)}</div>`);
            });
            _push(`<!--]-->`);
          }
          _push(`</td>`);
        });
        _push(`<!--]--></tr>`);
      });
      _push(`<!--]--></tbody></table></div></div><div class="absolute inset-0 pointer-events-none border border-black/5 rounded-xl dark:border-white/5"></div></div>`);
    };
  }
};
const _sfc_setup$k = _sfc_main$k.setup;
_sfc_main$k.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Table.vue");
  return _sfc_setup$k ? _sfc_setup$k(props, ctx) : void 0;
};
const _sfc_main$j = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-screen flex justify-center items-center" }, _attrs))}><svg class="mr-2 w-10 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"></path><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"></path></svg></div>`);
}
const _sfc_setup$j = _sfc_main$j.setup;
_sfc_main$j.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Loader.vue");
  return _sfc_setup$j ? _sfc_setup$j(props, ctx) : void 0;
};
const Loader = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["ssrRender", _sfc_ssrRender$1]]);
const Modal_vue_vue_type_style_index_0_lang = "";
const _sfc_main$i = {
  __name: "Modal",
  __ssrInlineRender: true,
  props: {
    cancelButton: {
      type: Boolean,
      default: true
    },
    declineButton: {
      type: Boolean,
      default: true
    },
    submitButton: {
      type: Boolean,
      default: true
    },
    cancelButtonText: {
      type: String,
      default: "\u0421\u043A\u0430\u0441\u0443\u0432\u0430\u0442\u0438"
    },
    declineButtonText: {
      type: String,
      default: "\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438"
    },
    submitButtonText: {
      type: String,
      default: "\u0417\u0431\u0435\u0440\u0435\u0433\u0442\u0438"
    },
    size: {
      type: String,
      default: "medium"
    }
  },
  emits: ["closeModal", "submitForm", "clickCancel", "declineForm"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div><div class="fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-full justify-center items-center flex overflow-scroll"><div class="${ssrRenderClass([{
        "max-w-md": __props.size === "small",
        "max-w-lg": __props.size === "medium",
        "max-w-4xl": __props.size === "large",
        "max-w-7xl": __props.size === "extralarge"
      }, "py-4 mb-20 w-full h-full md:h-full mx-auto top-10 z-50 relative overflow-scroll modal-scroll"])}"><div class="bg-white rounded-lg shadow dark:bg-gray-700"><div class="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">`);
      if (_ctx.$slots.title) {
        _push(`<h3 class="text-xl font-semibold text-gray-900 dark:text-white">`);
        ssrRenderSlot(_ctx.$slots, "title", {}, null, _push, _parent);
        _push(`</h3>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="defaultModal"><svg aria-hidden="true" class="w-5 h-5 test_x" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg><span class="sr-only">Close modal</span></button></div>`);
      if (_ctx.$slots.content) {
        _push(`<div class="p-6 space-y-6"><div class="text-base leading-relaxed text-gray-500 dark:text-gray-400">`);
        ssrRenderSlot(_ctx.$slots, "content", {}, null, _push, _parent);
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.cancelButton || __props.submitButton) {
        _push(`<div class="grid grid-cols-1 md:grid-cols-2 p-6 rounded-b border-t border-gray-200 dark:border-gray-600"><div class="grid grid-cols-2 gap-4 mb-10 md:mb-0">`);
        if (__props.submitButton) {
          _push(`<button type="button" class="col-span-2 md:col-span-1 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">${ssrInterpolate(__props.submitButtonText)}</button>`);
        } else {
          _push(`<!---->`);
        }
        if (__props.cancelButton) {
          _push(`<button type="button" class="col-span-2 md:col-span-1 text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">${ssrInterpolate(__props.cancelButtonText)}</button>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="grid grid-cols-1 md:grid-cols-2 text-center"><div></div>`);
        if (__props.declineButton) {
          _push(`<button type="button" class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center">${ssrInterpolate(__props.declineButtonText)}</button>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div></div><div class="bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-30"></div><!--]-->`);
    };
  }
};
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Modal.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
const _sfc_main$h = {
  __name: "XCircle",
  __ssrInlineRender: true,
  props: {
    width: {
      type: String,
      default: "16"
    },
    height: {
      type: String,
      default: "16"
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<svg${ssrRenderAttrs(mergeProps({
        xmlns: "http://www.w3.org/2000/svg",
        width: __props.width,
        height: __props.height,
        fill: "currentColor",
        class: "bi bi-x-circle",
        viewBox: "0 0 16 16"
      }, _attrs))}><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path><path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"></path></svg>`);
    };
  }
};
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Icons/XCircle.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
const _sfc_main$g = {
  __name: "ImageCard",
  __ssrInlineRender: true,
  props: [
    "image",
    "alt",
    "link",
    "destroyIcon",
    "id",
    "class",
    "size"
  ],
  emits: ["destroyImage", "clickImage"],
  setup(__props) {
    const props = __props;
    const cardLink = computed(() => props.link ? props.link : "javascript:");
    const imageRoute = function(src) {
      if (src) {
        if (props.size === "55") {
          return route("images.55", src);
        } else if (props.size === "350") {
          return route("images.350", src);
        } else if (props.size === "500") {
          return route("images.500", src);
        } else {
          return route("images", src);
        }
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: [props.class, "w-full relative"]
      }, _attrs))}><a${ssrRenderAttr("href", unref(cardLink))}><picture><source${ssrRenderAttr("srcset", imageRoute(__props.image.webp_src))} type="image/webp"><img${ssrRenderAttr("src", imageRoute(__props.image.src))}${ssrRenderAttr("alt", __props.alt ? __props.alt : null)} class="rounded-lg mx-auto h-full object-cover"></picture></a>`);
      if (__props.destroyIcon) {
        _push(`<a href="javascript:" class="text-dark destroy-icon absolute top-0 right-0">`);
        _push(ssrRenderComponent(_sfc_main$h, null, null, _parent));
        _push(`</a>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/ImageCard.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const _sfc_main$f = {
  __name: "Button",
  __ssrInlineRender: true,
  props: {
    type: {
      type: String,
      default: "submit"
    },
    active: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps({
        type: __props.type,
        class: ["items-center px-4 py-2 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:shadow-outline-gray transition ease-in-out duration-150", {
          "outline-none border-gray-900 shadow-outline-gray bg-gray-500": __props.active,
          "bg-gray-800 hover:bg-gray-700": !__props.active
        }]
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</button>`);
    };
  }
};
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Button.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const _sfc_main$e = {
  __name: "Label",
  __ssrInlineRender: true,
  props: ["value"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<label${ssrRenderAttrs(mergeProps({ class: "block font-medium text-sm text-gray-700 dark:text-gray-300 mb-1" }, _attrs))}>`);
      if (__props.value) {
        _push(`<span>${ssrInterpolate(__props.value)}</span>`);
      } else {
        _push(`<span>`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        _push(`</span>`);
      }
      _push(`</label>`);
    };
  }
};
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Form/Label.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const _sfc_main$d = {
  __name: "Checkbox",
  __ssrInlineRender: true,
  props: {
    checked: {
      type: [Array, Boolean],
      default: false
    },
    value: {
      default: null
    }
  },
  emits: ["update:checked"],
  setup(__props, { emit }) {
    const props = __props;
    const proxyChecked = computed({
      get() {
        return props.checked;
      },
      set(val) {
        emit("update:checked", val);
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      let _temp0;
      _push(`<input${ssrRenderAttrs((_temp0 = mergeProps({
        type: "checkbox",
        value: __props.value,
        checked: Array.isArray(unref(proxyChecked)) ? ssrLooseContain(unref(proxyChecked), __props.value) : unref(proxyChecked),
        class: "rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
      }, _attrs), mergeProps(_temp0, ssrGetDynamicModelProps(_temp0, unref(proxyChecked)))))}>`);
    };
  }
};
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Form/Checkbox.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const _sfc_main$c = {
  __name: "Input",
  __ssrInlineRender: true,
  props: ["modelValue", "accept"],
  emits: ["update:modelValue"],
  setup(__props) {
    const input = ref(null);
    onMounted(() => {
      if (input.value.hasAttribute("autofocus")) {
        input.value.focus();
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<input${ssrRenderAttrs(mergeProps({
        class: "block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
        value: __props.modelValue,
        ref_key: "input",
        ref: input,
        accept: __props.accept
      }, _attrs))}>`);
    };
  }
};
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Form/Input.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const _sfc_main$b = {
  __name: "UploadImagesInput",
  __ssrInlineRender: true,
  props: ["label"],
  emits: ["onUpload", "onDestroyImage"],
  setup(__props, { emit: emits }) {
    const isLoading = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_loader_component = resolveComponent("loader-component");
      _push(`<!--[-->`);
      if (isLoading.value) {
        _push(ssrRenderComponent(_component_loader_component, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (!isLoading.value) {
        _push(`<div class="w-full">`);
        if (__props.label) {
          _push(`<label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">${ssrInterpolate(__props.label)}</label>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<input class="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" type="file" multiple></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Form/UploadImagesInput.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const _sfc_main$a = {
  __name: "Textarea",
  __ssrInlineRender: true,
  props: {
    rows: String,
    placeholder: String,
    modelValue: String
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      let _temp0;
      _push(`<textarea${ssrRenderAttrs(_temp0 = mergeProps({
        rows: __props.rows,
        class: "block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
        placeholder: __props.placeholder,
        value: __props.modelValue
      }, _attrs), "textarea")}>${ssrInterpolate("value" in _temp0 ? _temp0.value : "")}</textarea>`);
    };
  }
};
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Form/Textarea.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const _sfc_main$9 = {
  __name: "Select",
  __ssrInlineRender: true,
  props: ["modelValue", "options"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<select${ssrRenderAttrs(mergeProps({
        value: __props.modelValue,
        class: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      }, _attrs))}><option${ssrRenderAttr("value", null)} disabled>\u041D\u0435 \u043E\u0431\u0440\u0430\u043D\u043E</option><!--[-->`);
      ssrRenderList(__props.options, (option) => {
        _push(`<option${ssrRenderAttr("value", option.key)}>${ssrInterpolate(option.value)}</option>`);
      });
      _push(`<!--]--></select>`);
    };
  }
};
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Form/Select.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _sfc_main$8 = {
  __name: "ApplicationLogo",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$s, _attrs, null, _parent));
    };
  }
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/ApplicationLogo.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = {
  __name: "Dropdown",
  __ssrInlineRender: true,
  props: {
    align: {
      default: "right"
    },
    width: {
      default: "48"
    },
    contentClasses: {
      default: () => ["py-1", "bg-white dark:bg-gray-700"]
    }
  },
  setup(__props) {
    const props = __props;
    const closeOnEscape = (e) => {
      if (open.value && e.key === "Escape") {
        open.value = false;
      }
    };
    onMounted(() => document.addEventListener("keydown", closeOnEscape));
    onUnmounted(() => document.removeEventListener("keydown", closeOnEscape));
    const widthClass = computed(() => {
      return {
        48: "w-48"
      }[props.width.toString()];
    });
    const alignmentClasses = computed(() => {
      if (props.align === "left") {
        return "origin-top-left left-0";
      } else if (props.align === "right") {
        return "origin-top-right right-0";
      } else {
        return "origin-top";
      }
    });
    const open = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative" }, _attrs))}><div>`);
      ssrRenderSlot(_ctx.$slots, "trigger", {}, null, _push, _parent);
      _push(`</div><div style="${ssrRenderStyle(open.value ? null : { display: "none" })}" class="fixed inset-0 z-40"></div><div style="${ssrRenderStyle([
        open.value ? null : { display: "none" },
        { "display": "none" }
      ])}" class="${ssrRenderClass([[unref(widthClass), unref(alignmentClasses)], "absolute z-50 mt-2 rounded-md shadow-lg"])}"><div class="${ssrRenderClass([__props.contentClasses, "rounded-md ring-1 ring-black ring-opacity-5"])}">`);
      ssrRenderSlot(_ctx.$slots, "content", {}, null, _push, _parent);
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Dropdown.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = {
  __name: "DropdownLink",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Link$1), mergeProps({ class: "block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-800 transition duration-150 ease-in-out" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/DropdownLink.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = {
  __name: "NavLink",
  __ssrInlineRender: true,
  props: ["href", "active"],
  setup(__props) {
    const props = __props;
    const classes = computed(
      () => props.active ? "inline-flex items-center px-1 pt-1 border-b-2 border-indigo-400 dark:border-indigo-600 text-sm font-medium leading-5 text-gray-900 dark:text-gray-100 focus:outline-none focus:border-indigo-700 transition duration-150 ease-in-out" : "inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-700 focus:outline-none focus:text-gray-700 dark:focus:text-gray-300 focus:border-gray-300 dark:focus:border-gray-700 transition duration-150 ease-in-out"
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Link$1), mergeProps({
        href: __props.href,
        class: unref(classes)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/NavLink.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = {
  __name: "ResponsiveNavLink",
  __ssrInlineRender: true,
  props: ["href", "active"],
  setup(__props) {
    const props = __props;
    const classes = computed(
      () => props.active ? "block w-full pl-3 pr-4 py-2 border-l-4 border-indigo-400 dark:border-indigo-600 text-left text-base font-medium text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-900/50 focus:outline-none focus:text-indigo-800 dark:focus:text-indigo-200 focus:bg-indigo-100 dark:focus:bg-indigo-900 focus:border-indigo-700 dark:focus:border-indigo-300 transition duration-150 ease-in-out" : "block w-full pl-3 pr-4 py-2 border-l-4 border-transparent text-left text-base font-medium text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-gray-300 dark:hover:border-gray-600 focus:outline-none focus:text-gray-800 dark:focus:text-gray-200 focus:bg-gray-50 dark:focus:bg-gray-700 focus:border-gray-300 dark:focus:border-gray-600 transition duration-150 ease-in-out"
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Link$1), mergeProps({
        href: __props.href,
        class: unref(classes)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/ResponsiveNavLink.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {
  __name: "AuthenticatedLayout",
  __ssrInlineRender: true,
  props: ["title", "logo"],
  setup(__props) {
    const showingNavigationDropdown = ref(false);
    const user2 = useStore();
    const can = inject("$can");
    onMounted(() => {
      user2.commit("load");
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(unref(Head), { title: __props.title }, null, _parent));
      _push(`<div class="min-h-screen"><nav class="bg-white border-b border-gray-100 dark:bg-gray-800 dark:border-gray-700"><div class="container mx-auto"><div class="flex justify-between h-16"><div class="flex"><div class="shrink-0 flex items-center">`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("admin.dashboard")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$8, { class: "block h-9 w-auto" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$8, { class: "block h-9 w-auto" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="hidden space-x-8 sm:-my-px sm:ml-10 xl:flex">`);
      _push(ssrRenderComponent(_sfc_main$5, {
        href: _ctx.route("admin.dashboard"),
        active: _ctx.route().current("admin.dashboard")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u0413\u043E\u043B\u043E\u0432\u043D\u0430 `);
          } else {
            return [
              createTextVNode(" \u0413\u043E\u043B\u043E\u0432\u043D\u0430 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      if (unref(can)("show-content")) {
        _push(ssrRenderComponent(_sfc_main$5, {
          href: _ctx.route("admin.content.index"),
          active: _ctx.route().current("admin.content.*")
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` \u041A\u043E\u043D\u0442\u0435\u043D\u0442 `);
            } else {
              return [
                createTextVNode(" \u041A\u043E\u043D\u0442\u0435\u043D\u0442 ")
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(can)("show-crm")) {
        _push(ssrRenderComponent(_sfc_main$5, {
          href: _ctx.route("admin.crm.index"),
          active: _ctx.route().current("admin.crm.*")
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` CRM `);
            } else {
              return [
                createTextVNode(" CRM ")
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(can)("show-bookkeeping")) {
        _push(ssrRenderComponent(_sfc_main$5, {
          href: _ctx.route("admin.statistics.index"),
          active: _ctx.route().current("admin.statistics.*")
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` \u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430 `);
            } else {
              return [
                createTextVNode(" \u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430 ")
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(can)("show-options")) {
        _push(ssrRenderComponent(_sfc_main$5, {
          href: _ctx.route("admin.options.index"),
          active: _ctx.route().current("admin.options.*")
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` \u041D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u043D\u044F `);
            } else {
              return [
                createTextVNode(" \u041D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u043D\u044F ")
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="hidden xl:flex sm:items-center sm:ml-6"><div class="ml-3 relative">`);
      _push(ssrRenderComponent(_sfc_main$7, {
        align: "right",
        width: "48"
      }, {
        trigger: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="inline-flex rounded-md"${_scopeId}><button type="button" class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"${_scopeId}>${ssrInterpolate(_ctx.$page.props.auth.user.name)} <svg class="ml-2 -mr-0.5 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"${_scopeId}><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"${_scopeId}></path></svg></button></span>`);
          } else {
            return [
              createVNode("span", { class: "inline-flex rounded-md" }, [
                createVNode("button", {
                  type: "button",
                  class: "inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                }, [
                  createTextVNode(toDisplayString(_ctx.$page.props.auth.user.name) + " ", 1),
                  (openBlock(), createBlock("svg", {
                    class: "ml-2 -mr-0.5 h-4 w-4",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 20 20",
                    fill: "currentColor"
                  }, [
                    createVNode("path", {
                      "fill-rule": "evenodd",
                      d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
                      "clip-rule": "evenodd"
                    })
                  ]))
                ])
              ])
            ];
          }
        }),
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$6, {
              href: _ctx.route("logout"),
              method: "post",
              as: "button"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Log Out `);
                } else {
                  return [
                    createTextVNode(" Log Out ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$6, {
                href: _ctx.route("logout"),
                method: "post",
                as: "button"
              }, {
                default: withCtx(() => [
                  createTextVNode(" Log Out ")
                ]),
                _: 1
              }, 8, ["href"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="flex items-center xl:hidden"><button class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"><svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24"><path class="${ssrRenderClass({ "hidden": showingNavigationDropdown.value, "inline-flex": !showingNavigationDropdown.value })}" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path><path class="${ssrRenderClass({ "hidden": !showingNavigationDropdown.value, "inline-flex": showingNavigationDropdown.value })}" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button></div></div></div><div class="${ssrRenderClass([{ "block": showingNavigationDropdown.value, "hidden": !showingNavigationDropdown.value }, "xl:hidden"])}"><div class="pt-2 pb-3 space-y-1">`);
      _push(ssrRenderComponent(_sfc_main$4, {
        href: _ctx.route("admin.dashboard"),
        active: _ctx.route().current("admin.dashboard")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u0413\u043E\u043B\u043E\u0432\u043D\u0430 `);
          } else {
            return [
              createTextVNode(" \u0413\u043E\u043B\u043E\u0432\u043D\u0430 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      if (unref(can)("show-content")) {
        _push(ssrRenderComponent(_sfc_main$4, {
          href: _ctx.route("admin.content.index"),
          active: _ctx.route().current("admin.content.*")
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` \u041A\u043E\u043D\u0442\u0435\u043D\u0442 `);
            } else {
              return [
                createTextVNode(" \u041A\u043E\u043D\u0442\u0435\u043D\u0442 ")
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(can)("show-crm")) {
        _push(ssrRenderComponent(_sfc_main$4, {
          href: _ctx.route("admin.crm.index"),
          active: _ctx.route().current("admin.crm.index")
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` CRM `);
            } else {
              return [
                createTextVNode(" CRM ")
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(can)("show-bookkeeping")) {
        _push(ssrRenderComponent(_sfc_main$4, {
          href: _ctx.route("admin.statistics.index"),
          active: _ctx.route().current("admin.statistics.*")
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` \u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430 `);
            } else {
              return [
                createTextVNode(" \u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430 ")
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(can)("show-options")) {
        _push(ssrRenderComponent(_sfc_main$4, {
          href: _ctx.route("admin.options.index"),
          active: _ctx.route().current("admin.options.*")
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` \u041D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u043D\u044F `);
            } else {
              return [
                createTextVNode(" \u041D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u043D\u044F ")
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="pt-4 pb-1 border-t border-gray-200"><div class="px-4"><div class="font-medium text-base text-gray-800">${ssrInterpolate(_ctx.$page.props.auth.user.name)}</div><div class="font-medium text-sm text-gray-500">${ssrInterpolate(_ctx.$page.props.auth.user.email)}</div></div><div class="mt-3 space-y-1">`);
      _push(ssrRenderComponent(_sfc_main$4, {
        href: _ctx.route("logout"),
        method: "post",
        as: "button"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Log Out `);
          } else {
            return [
              createTextVNode(" Log Out ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></nav>`);
      if (_ctx.$slots.header) {
        _push(`<header class="bg-white shadow dark:bg-gray-700"><div class="container mx-auto py-6 px-4 sm:px-6 lg:px-8"><h2 class="font-semibold text-xl text-gray-800 leading-tight dark:text-gray-300">`);
        ssrRenderSlot(_ctx.$slots, "header", {}, null, _push, _parent);
        _push(`</h2></div></header>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<main><div class="py-12"><div class="container mx-auto"><div class="bg-white overflow-hidden shadow-sm sm:rounded-lg"><div class="p-6 bg-white border-gray-200 dark:bg-gray-600">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div></div></div></main></div></div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/AuthenticatedLayout.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
function isEmpty(opt) {
  if (opt === 0)
    return false;
  if (Array.isArray(opt) && opt.length === 0)
    return true;
  return !opt;
}
function not(fun) {
  return (...params) => !fun(...params);
}
function includes(str, query) {
  if (str === void 0)
    str = "undefined";
  if (str === null)
    str = "null";
  if (str === false)
    str = "false";
  const text = str.toString().toLowerCase();
  return text.indexOf(query.trim()) !== -1;
}
function filterOptions(options, search, label, customLabel) {
  return search ? options.filter((option) => includes(customLabel(option, label), search)).sort((a, b) => customLabel(a, label).length - customLabel(b, label).length) : options;
}
function stripGroups(options) {
  return options.filter((option) => !option.$isLabel);
}
function flattenOptions(values, label) {
  return (options) => options.reduce((prev, curr) => {
    if (curr[values] && curr[values].length) {
      prev.push({
        $groupLabel: curr[label],
        $isLabel: true
      });
      return prev.concat(curr[values]);
    }
    return prev;
  }, []);
}
function filterGroups(search, label, values, groupLabel, customLabel) {
  return (groups) => groups.map((group) => {
    if (!group[values]) {
      console.warn(`Options passed to vue-multiselect do not contain groups, despite the config.`);
      return [];
    }
    const groupOptions = filterOptions(group[values], search, label, customLabel);
    return groupOptions.length ? {
      [groupLabel]: group[groupLabel],
      [values]: groupOptions
    } : [];
  });
}
const flow = (...fns) => (x) => fns.reduce((v, f) => f(v), x);
const multiselectMixin = {
  data() {
    return {
      search: "",
      isOpen: false,
      preferredOpenDirection: "below",
      optimizedHeight: this.maxHeight
    };
  },
  props: {
    internalSearch: {
      type: Boolean,
      default: true
    },
    options: {
      type: Array,
      required: true
    },
    multiple: {
      type: Boolean,
      default: false
    },
    trackBy: {
      type: String
    },
    label: {
      type: String
    },
    searchable: {
      type: Boolean,
      default: true
    },
    clearOnSelect: {
      type: Boolean,
      default: true
    },
    hideSelected: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: "Select option"
    },
    allowEmpty: {
      type: Boolean,
      default: true
    },
    resetAfter: {
      type: Boolean,
      default: false
    },
    closeOnSelect: {
      type: Boolean,
      default: true
    },
    customLabel: {
      type: Function,
      default(option, label) {
        if (isEmpty(option))
          return "";
        return label ? option[label] : option;
      }
    },
    taggable: {
      type: Boolean,
      default: false
    },
    tagPlaceholder: {
      type: String,
      default: "Press enter to create a tag"
    },
    tagPosition: {
      type: String,
      default: "top"
    },
    max: {
      type: [Number, Boolean],
      default: false
    },
    id: {
      default: null
    },
    optionsLimit: {
      type: Number,
      default: 1e3
    },
    groupValues: {
      type: String
    },
    groupLabel: {
      type: String
    },
    groupSelect: {
      type: Boolean,
      default: false
    },
    blockKeys: {
      type: Array,
      default() {
        return [];
      }
    },
    preserveSearch: {
      type: Boolean,
      default: false
    },
    preselectFirst: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    if (!this.multiple && this.max) {
      console.warn("[Vue-Multiselect warn]: Max prop should not be used when prop Multiple equals false.");
    }
    if (this.preselectFirst && !this.internalValue.length && this.options.length) {
      this.select(this.filteredOptions[0]);
    }
  },
  computed: {
    internalValue() {
      return this.modelValue || this.modelValue === 0 ? Array.isArray(this.modelValue) ? this.modelValue : [this.modelValue] : [];
    },
    filteredOptions() {
      const search = this.search || "";
      const normalizedSearch = search.toLowerCase().trim();
      let options = this.options.concat();
      if (this.internalSearch) {
        options = this.groupValues ? this.filterAndFlat(options, normalizedSearch, this.label) : filterOptions(options, normalizedSearch, this.label, this.customLabel);
      } else {
        options = this.groupValues ? flattenOptions(this.groupValues, this.groupLabel)(options) : options;
      }
      options = this.hideSelected ? options.filter(not(this.isSelected)) : options;
      if (this.taggable && normalizedSearch.length && !this.isExistingOption(normalizedSearch)) {
        if (this.tagPosition === "bottom") {
          options.push({ isTag: true, label: search });
        } else {
          options.unshift({ isTag: true, label: search });
        }
      }
      return options.slice(0, this.optionsLimit);
    },
    valueKeys() {
      if (this.trackBy) {
        return this.internalValue.map((element) => element[this.trackBy]);
      } else {
        return this.internalValue;
      }
    },
    optionKeys() {
      const options = this.groupValues ? this.flatAndStrip(this.options) : this.options;
      return options.map((element) => this.customLabel(element, this.label).toString().toLowerCase());
    },
    currentOptionLabel() {
      return this.multiple ? this.searchable ? "" : this.placeholder : this.internalValue.length ? this.getOptionLabel(this.internalValue[0]) : this.searchable ? "" : this.placeholder;
    }
  },
  watch: {
    internalValue() {
      if (this.resetAfter && this.internalValue.length) {
        this.search = "";
        this.$emit("update:modelValue", this.multiple ? [] : null);
      }
    },
    search() {
      this.$emit("search-change", this.search);
    }
  },
  emits: ["open", "search-change", "close", "select", "update:modelValue", "remove", "tag"],
  methods: {
    getValue() {
      return this.multiple ? this.internalValue : this.internalValue.length === 0 ? null : this.internalValue[0];
    },
    filterAndFlat(options, search, label) {
      return flow(
        filterGroups(search, label, this.groupValues, this.groupLabel, this.customLabel),
        flattenOptions(this.groupValues, this.groupLabel)
      )(options);
    },
    flatAndStrip(options) {
      return flow(
        flattenOptions(this.groupValues, this.groupLabel),
        stripGroups
      )(options);
    },
    updateSearch(query) {
      this.search = query;
    },
    isExistingOption(query) {
      return !this.options ? false : this.optionKeys.indexOf(query) > -1;
    },
    isSelected(option) {
      const opt = this.trackBy ? option[this.trackBy] : option;
      return this.valueKeys.indexOf(opt) > -1;
    },
    isOptionDisabled(option) {
      return !!option.$isDisabled;
    },
    getOptionLabel(option) {
      if (isEmpty(option))
        return "";
      if (option.isTag)
        return option.label;
      if (option.$isLabel)
        return option.$groupLabel;
      const label = this.customLabel(option, this.label);
      if (isEmpty(label))
        return "";
      return label;
    },
    select(option, key) {
      if (option.$isLabel && this.groupSelect) {
        this.selectGroup(option);
        return;
      }
      if (this.blockKeys.indexOf(key) !== -1 || this.disabled || option.$isDisabled || option.$isLabel)
        return;
      if (this.max && this.multiple && this.internalValue.length === this.max)
        return;
      if (key === "Tab" && !this.pointerDirty)
        return;
      if (option.isTag) {
        this.$emit("tag", option.label, this.id);
        this.search = "";
        if (this.closeOnSelect && !this.multiple)
          this.deactivate();
      } else {
        const isSelected = this.isSelected(option);
        if (isSelected) {
          if (key !== "Tab")
            this.removeElement(option);
          return;
        }
        this.$emit("select", option, this.id);
        if (this.multiple) {
          this.$emit("update:modelValue", this.internalValue.concat([option]));
        } else {
          this.$emit("update:modelValue", option);
        }
        if (this.clearOnSelect)
          this.search = "";
      }
      if (this.closeOnSelect)
        this.deactivate();
    },
    selectGroup(selectedGroup) {
      const group = this.options.find((option) => {
        return option[this.groupLabel] === selectedGroup.$groupLabel;
      });
      if (!group)
        return;
      if (this.wholeGroupSelected(group)) {
        this.$emit("remove", group[this.groupValues], this.id);
        const newValue = this.internalValue.filter(
          (option) => group[this.groupValues].indexOf(option) === -1
        );
        this.$emit("update:modelValue", newValue);
      } else {
        const optionsToAdd = group[this.groupValues].filter(
          (option) => !(this.isOptionDisabled(option) || this.isSelected(option))
        );
        this.$emit("select", optionsToAdd, this.id);
        this.$emit(
          "update:modelValue",
          this.internalValue.concat(optionsToAdd)
        );
      }
      if (this.closeOnSelect)
        this.deactivate();
    },
    wholeGroupSelected(group) {
      return group[this.groupValues].every(
        (option) => this.isSelected(option) || this.isOptionDisabled(option)
      );
    },
    wholeGroupDisabled(group) {
      return group[this.groupValues].every(this.isOptionDisabled);
    },
    removeElement(option, shouldClose = true) {
      if (this.disabled)
        return;
      if (option.$isDisabled)
        return;
      if (!this.allowEmpty && this.internalValue.length <= 1) {
        this.deactivate();
        return;
      }
      const index = typeof option === "object" ? this.valueKeys.indexOf(option[this.trackBy]) : this.valueKeys.indexOf(option);
      this.$emit("remove", option, this.id);
      if (this.multiple) {
        const newValue = this.internalValue.slice(0, index).concat(this.internalValue.slice(index + 1));
        this.$emit("update:modelValue", newValue);
      } else {
        this.$emit("update:modelValue", null);
      }
      if (this.closeOnSelect && shouldClose)
        this.deactivate();
    },
    removeLastElement() {
      if (this.blockKeys.indexOf("Delete") !== -1)
        return;
      if (this.search.length === 0 && Array.isArray(this.internalValue) && this.internalValue.length) {
        this.removeElement(this.internalValue[this.internalValue.length - 1], false);
      }
    },
    activate() {
      if (this.isOpen || this.disabled)
        return;
      this.adjustPosition();
      if (this.groupValues && this.pointer === 0 && this.filteredOptions.length) {
        this.pointer = 1;
      }
      this.isOpen = true;
      if (this.searchable) {
        if (!this.preserveSearch)
          this.search = "";
        this.$nextTick(() => this.$refs.search && this.$refs.search.focus());
      } else {
        this.$el.focus();
      }
      this.$emit("open", this.id);
    },
    deactivate() {
      if (!this.isOpen)
        return;
      this.isOpen = false;
      if (this.searchable) {
        this.$refs.search && this.$refs.search.blur();
      } else {
        this.$el.blur();
      }
      if (!this.preserveSearch)
        this.search = "";
      this.$emit("close", this.getValue(), this.id);
    },
    toggle() {
      this.isOpen ? this.deactivate() : this.activate();
    },
    adjustPosition() {
      if (typeof window === "undefined")
        return;
      const spaceAbove = this.$el.getBoundingClientRect().top;
      const spaceBelow = window.innerHeight - this.$el.getBoundingClientRect().bottom;
      const hasEnoughSpaceBelow = spaceBelow > this.maxHeight;
      if (hasEnoughSpaceBelow || spaceBelow > spaceAbove || this.openDirection === "below" || this.openDirection === "bottom") {
        this.preferredOpenDirection = "below";
        this.optimizedHeight = Math.min(spaceBelow - 40, this.maxHeight);
      } else {
        this.preferredOpenDirection = "above";
        this.optimizedHeight = Math.min(spaceAbove - 40, this.maxHeight);
      }
    }
  }
};
const pointerMixin = {
  data() {
    return {
      pointer: 0,
      pointerDirty: false
    };
  },
  props: {
    showPointer: {
      type: Boolean,
      default: true
    },
    optionHeight: {
      type: Number,
      default: 40
    }
  },
  computed: {
    pointerPosition() {
      return this.pointer * this.optionHeight;
    },
    visibleElements() {
      return this.optimizedHeight / this.optionHeight;
    }
  },
  watch: {
    filteredOptions() {
      this.pointerAdjust();
    },
    isOpen() {
      this.pointerDirty = false;
    },
    pointer() {
      this.$refs.search && this.$refs.search.setAttribute("aria-activedescendant", this.id + "-" + this.pointer.toString());
    }
  },
  methods: {
    optionHighlight(index, option) {
      return {
        "multiselect__option--highlight": index === this.pointer && this.showPointer,
        "multiselect__option--selected": this.isSelected(option)
      };
    },
    groupHighlight(index, selectedGroup) {
      if (!this.groupSelect) {
        return [
          "multiselect__option--disabled",
          { "multiselect__option--group": selectedGroup.$isLabel }
        ];
      }
      const group = this.options.find((option) => {
        return option[this.groupLabel] === selectedGroup.$groupLabel;
      });
      return group && !this.wholeGroupDisabled(group) ? [
        "multiselect__option--group",
        { "multiselect__option--highlight": index === this.pointer && this.showPointer },
        { "multiselect__option--group-selected": this.wholeGroupSelected(group) }
      ] : "multiselect__option--disabled";
    },
    addPointerElement({ key } = "Enter") {
      if (this.filteredOptions.length > 0) {
        this.select(this.filteredOptions[this.pointer], key);
      }
      this.pointerReset();
    },
    pointerForward() {
      if (this.pointer < this.filteredOptions.length - 1) {
        this.pointer++;
        if (this.$refs.list.scrollTop <= this.pointerPosition - (this.visibleElements - 1) * this.optionHeight) {
          this.$refs.list.scrollTop = this.pointerPosition - (this.visibleElements - 1) * this.optionHeight;
        }
        if (this.filteredOptions[this.pointer] && this.filteredOptions[this.pointer].$isLabel && !this.groupSelect)
          this.pointerForward();
      }
      this.pointerDirty = true;
    },
    pointerBackward() {
      if (this.pointer > 0) {
        this.pointer--;
        if (this.$refs.list.scrollTop >= this.pointerPosition) {
          this.$refs.list.scrollTop = this.pointerPosition;
        }
        if (this.filteredOptions[this.pointer] && this.filteredOptions[this.pointer].$isLabel && !this.groupSelect)
          this.pointerBackward();
      } else {
        if (this.filteredOptions[this.pointer] && this.filteredOptions[0].$isLabel && !this.groupSelect)
          this.pointerForward();
      }
      this.pointerDirty = true;
    },
    pointerReset() {
      if (!this.closeOnSelect)
        return;
      this.pointer = 0;
      if (this.$refs.list) {
        this.$refs.list.scrollTop = 0;
      }
    },
    pointerAdjust() {
      if (this.pointer >= this.filteredOptions.length - 1) {
        this.pointer = this.filteredOptions.length ? this.filteredOptions.length - 1 : 0;
      }
      if (this.filteredOptions.length > 0 && this.filteredOptions[this.pointer].$isLabel && !this.groupSelect) {
        this.pointerForward();
      }
    },
    pointerSet(index) {
      this.pointer = index;
      this.pointerDirty = true;
    }
  }
};
const Multiselect_vue_vue_type_style_index_0_lang = "";
const _sfc_main$2 = {
  name: "vue-multiselect",
  mixins: [multiselectMixin, pointerMixin],
  props: {
    name: {
      type: String,
      default: ""
    },
    modelValue: {
      type: null,
      default() {
        return [];
      }
    },
    selectLabel: {
      type: String,
      default: "Press enter to select"
    },
    selectGroupLabel: {
      type: String,
      default: "Press enter to select group"
    },
    selectedLabel: {
      type: String,
      default: "Selected"
    },
    deselectLabel: {
      type: String,
      default: "Press enter to remove"
    },
    deselectGroupLabel: {
      type: String,
      default: "Press enter to deselect group"
    },
    showLabels: {
      type: Boolean,
      default: true
    },
    limit: {
      type: Number,
      default: 99999
    },
    maxHeight: {
      type: Number,
      default: 300
    },
    limitText: {
      type: Function,
      default: (count) => `and ${count} more`
    },
    loading: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    openDirection: {
      type: String,
      default: ""
    },
    showNoOptions: {
      type: Boolean,
      default: true
    },
    showNoResults: {
      type: Boolean,
      default: true
    },
    tabindex: {
      type: Number,
      default: 0
    }
  },
  computed: {
    isSingleLabelVisible() {
      return (this.singleValue || this.singleValue === 0) && (!this.isOpen || !this.searchable) && !this.visibleValues.length;
    },
    isPlaceholderVisible() {
      return !this.internalValue.length && (!this.searchable || !this.isOpen);
    },
    visibleValues() {
      return this.multiple ? this.internalValue.slice(0, this.limit) : [];
    },
    singleValue() {
      return this.internalValue[0];
    },
    deselectLabelText() {
      return this.showLabels ? this.deselectLabel : "";
    },
    deselectGroupLabelText() {
      return this.showLabels ? this.deselectGroupLabel : "";
    },
    selectLabelText() {
      return this.showLabels ? this.selectLabel : "";
    },
    selectGroupLabelText() {
      return this.showLabels ? this.selectGroupLabel : "";
    },
    selectedLabelText() {
      return this.showLabels ? this.selectedLabel : "";
    },
    inputStyle() {
      if (this.searchable || this.multiple && this.modelValue && this.modelValue.length) {
        return this.isOpen ? { width: "100%" } : { width: "0", position: "absolute", padding: "0" };
      }
      return "";
    },
    contentStyle() {
      return this.options.length ? { display: "inline-block" } : { display: "block" };
    },
    isAbove() {
      if (this.openDirection === "above" || this.openDirection === "top") {
        return true;
      } else if (this.openDirection === "below" || this.openDirection === "bottom") {
        return false;
      } else {
        return this.preferredOpenDirection === "above";
      }
    },
    showSearchInput() {
      return this.searchable && (this.hasSingleSelectedSlot && (this.visibleSingleValue || this.visibleSingleValue === 0) ? this.isOpen : true);
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    tabindex: _ctx.searchable ? -1 : $props.tabindex,
    class: [{ "multiselect--active": _ctx.isOpen, "multiselect--disabled": $props.disabled, "multiselect--above": $options.isAbove }, "multiselect"],
    role: "combobox",
    "aria-owns": "listbox-" + _ctx.id
  }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "caret", { toggle: _ctx.toggle }, () => {
    _push(`<div class="multiselect__select"></div>`);
  }, _push, _parent);
  ssrRenderSlot(_ctx.$slots, "clear", { search: _ctx.search }, null, _push, _parent);
  _push(`<div class="multiselect__tags bg-white dark:bg-gray-800 rounded-lg p-5">`);
  ssrRenderSlot(_ctx.$slots, "selection", {
    search: _ctx.search,
    remove: _ctx.removeElement,
    values: $options.visibleValues,
    isOpen: _ctx.isOpen
  }, () => {
    _push(`<div class="multiselect__tags-wrap" style="${ssrRenderStyle($options.visibleValues.length > 0 ? null : { display: "none" })}"><!--[-->`);
    ssrRenderList($options.visibleValues, (option, index) => {
      ssrRenderSlot(_ctx.$slots, "tag", {
        option,
        search: _ctx.search,
        remove: _ctx.removeElement
      }, () => {
        _push(`<span class="multiselect__tag"><span>${ssrInterpolate(_ctx.getOptionLabel(option))}</span><i tabindex="1" class="multiselect__tag-icon"></i></span>`);
      }, _push, _parent);
    });
    _push(`<!--]--></div>`);
    if (_ctx.internalValue && _ctx.internalValue.length > $props.limit) {
      ssrRenderSlot(_ctx.$slots, "limit", {}, () => {
        _push(`<strong class="multiselect__strong">${ssrInterpolate($props.limitText(_ctx.internalValue.length - $props.limit))}</strong>`);
      }, _push, _parent);
    } else {
      _push(`<!---->`);
    }
  }, _push, _parent);
  ssrRenderSlotInner(_ctx.$slots, "loading", {}, () => {
    _push(`<div style="${ssrRenderStyle($props.loading ? null : { display: "none" })}" class="multiselect__spinner"></div>`);
  }, _push, _parent, null, true);
  if (_ctx.searchable) {
    _push(`<input${ssrRenderAttr("name", $props.name)}${ssrRenderAttr("id", _ctx.id)} type="text" autocomplete="off" spellcheck="false"${ssrRenderAttr("placeholder", _ctx.placeholder)} style="${ssrRenderStyle($options.inputStyle)}"${ssrRenderAttr("value", _ctx.search)}${ssrIncludeBooleanAttr($props.disabled) ? " disabled" : ""}${ssrRenderAttr("tabindex", $props.tabindex)} class="multiselect__input text-gray-900 text-sm rounded-l block w-full h-5 ring-0 border-0 dark:bg-gray-800 dark:placeholder-gray-400 dark:text-white dark:focus:text-white focus:ring-0 focus:border-gray-700 focus:pl-0"${ssrRenderAttr("aria-controls", "listbox-" + _ctx.id)}>`);
  } else {
    _push(`<!---->`);
  }
  if ($options.isSingleLabelVisible) {
    _push(`<span class="multiselect__single text-gray-900 dark:text-white">`);
    ssrRenderSlot(_ctx.$slots, "singleLabel", { option: $options.singleValue }, () => {
      _push(`${ssrInterpolate(_ctx.currentOptionLabel)}`);
    }, _push, _parent);
    _push(`</span>`);
  } else {
    _push(`<!---->`);
  }
  if ($options.isPlaceholderVisible) {
    _push(`<span class="multiselect__placeholder text-gray-900 dark:text-white">`);
    ssrRenderSlot(_ctx.$slots, "placeholder", {}, () => {
      _push(`${ssrInterpolate(_ctx.placeholder)}`);
    }, _push, _parent);
    _push(`</span>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div><div class="multiselect__content-wrapper" style="${ssrRenderStyle([
    _ctx.isOpen ? null : { display: "none" },
    { maxHeight: _ctx.optimizedHeight + "px" }
  ])}" tabindex="-1"><ul class="multiselect__content bg-white dark:bg-gray-800 text-gray-900 dark:text-white dark:border-gray-700" style="${ssrRenderStyle($options.contentStyle)}" role="listbox"${ssrRenderAttr("id", "listbox-" + _ctx.id)}>`);
  ssrRenderSlot(_ctx.$slots, "beforeList", {}, null, _push, _parent);
  if (_ctx.multiple && _ctx.max === _ctx.internalValue.length) {
    _push(`<li><span class="multiselect__option">`);
    ssrRenderSlot(_ctx.$slots, "maxElements", {}, () => {
      _push(`Maximum of ${ssrInterpolate(_ctx.max)} options selected. First remove a selected option to select another.`);
    }, _push, _parent);
    _push(`</span></li>`);
  } else {
    _push(`<!---->`);
  }
  if (!_ctx.max || _ctx.internalValue.length < _ctx.max) {
    _push(`<!--[-->`);
    ssrRenderList(_ctx.filteredOptions, (option, index) => {
      _push(`<li class="multiselect__element"${ssrRenderAttr("id", _ctx.id + "-" + index)}${ssrRenderAttr("role", !(option && (option.$isLabel || option.$isDisabled)) ? "option" : null)}>`);
      if (!(option && (option.$isLabel || option.$isDisabled))) {
        _push(`<span class="${ssrRenderClass([_ctx.optionHighlight(index, option), "multiselect__option"])}"${ssrRenderAttr("data-select", option && option.isTag ? _ctx.tagPlaceholder : $options.selectLabelText)}${ssrRenderAttr("data-selected", $options.selectedLabelText)}${ssrRenderAttr("data-deselect", $options.deselectLabelText)}>`);
        ssrRenderSlot(_ctx.$slots, "option", {
          option,
          search: _ctx.search,
          index
        }, () => {
          _push(`<span>${ssrInterpolate(_ctx.getOptionLabel(option))}</span>`);
        }, _push, _parent);
        _push(`</span>`);
      } else {
        _push(`<!---->`);
      }
      if (option && (option.$isLabel || option.$isDisabled)) {
        _push(`<span${ssrRenderAttr("data-select", _ctx.groupSelect && $options.selectGroupLabelText)}${ssrRenderAttr("data-deselect", _ctx.groupSelect && $options.deselectGroupLabelText)} class="${ssrRenderClass([_ctx.groupHighlight(index, option), "multiselect__option"])}">`);
        ssrRenderSlot(_ctx.$slots, "option", {
          option,
          search: _ctx.search,
          index
        }, () => {
          _push(`<span>${ssrInterpolate(_ctx.getOptionLabel(option))}</span>`);
        }, _push, _parent);
        _push(`</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</li>`);
    });
    _push(`<!--]-->`);
  } else {
    _push(`<!---->`);
  }
  _push(`<li style="${ssrRenderStyle($props.showNoResults && (_ctx.filteredOptions.length === 0 && _ctx.search && !$props.loading) ? null : { display: "none" })}"><span class="multiselect__option">`);
  ssrRenderSlot(_ctx.$slots, "noResult", { search: _ctx.search }, () => {
    _push(`No elements found. Consider changing the search query.`);
  }, _push, _parent);
  _push(`</span></li><li style="${ssrRenderStyle($props.showNoOptions && (_ctx.options.length === 0 && !_ctx.search && !$props.loading) ? null : { display: "none" })}"><span class="multiselect__option">`);
  ssrRenderSlot(_ctx.$slots, "noOptions", {}, () => {
    _push(`List is empty.`);
  }, _push, _parent);
  _push(`</span></li>`);
  ssrRenderSlot(_ctx.$slots, "afterList", {}, null, _push, _parent);
  _push(`</ul></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Multiselect/Multiselect.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const Multiselect = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$1 = {
  __name: "Paginate",
  __ssrInlineRender: true,
  props: {
    pagination: {
      type: Object
    },
    modelValue: {
      type: Number
    },
    pageRange: {
      type: Number,
      default: 10
    },
    initialPage: {
      type: Number,
      default: 1
    },
    forcePage: {
      type: Number
    },
    clickHandler: {
      type: Function,
      default: () => {
      }
    },
    marginPages: {
      type: Number,
      default: 1
    },
    prevText: {
      type: String,
      default: "<"
    },
    nextText: {
      type: String,
      default: ">"
    },
    breakViewText: {
      type: String,
      default: "\u2026"
    },
    containerClass: {
      type: String,
      default: "inline-flex -space-x-px rounded-lg  dark:bg-gray-800"
    },
    pageClass: {
      type: String,
      default: "cursor-pointer py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
    },
    pageLinkClass: {
      type: String,
      default: "px-3"
    },
    prevClass: {
      type: String,
      default: "cursor-pointer py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
    },
    prevLinkClass: {
      type: String,
      default: ""
    },
    nextClass: {
      type: String,
      default: "cursor-pointer py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
    },
    nextLinkClass: {
      type: String,
      default: ""
    },
    breakViewClass: {
      type: String
    },
    breakViewLinkClass: {
      type: String
    },
    activeClass: {
      type: String,
      default: "bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-white"
    },
    disabledClass: {
      type: String,
      default: "disabled"
    },
    noLiSurround: {
      type: Boolean,
      default: false
    },
    firstLastButton: {
      type: Boolean,
      default: true
    },
    firstButtonText: {
      type: String,
      default: "<<"
    },
    lastButtonText: {
      type: String,
      default: ">>"
    },
    hidePrevNext: {
      type: Boolean,
      default: false
    }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: emits }) {
    const props = __props;
    const state = ref({
      innerValue: 1,
      pageCount: null
    });
    onBeforeMount(() => {
      state.value.innerValue = props.initialPage;
    });
    onBeforeUpdate(() => {
      if (props.forcePage === void 0)
        return;
      if (props.forcePage !== selected.value) {
        selected.value = props.forcePage;
      }
    });
    const selected = computed({
      get() {
        return props.modelValue || state.value.innerValue;
      },
      set(newValue) {
        state.value.innerValue = newValue;
      }
    });
    const pages = computed(() => {
      let items = {};
      state.value.pageCount = props.pagination.last_page;
      if (state.value.pageCount <= props.pageRange) {
        for (let index = 0; index < state.value.pageCount; index++) {
          items[index] = {
            index,
            content: index + 1,
            selected: index === selected.value - 1
          };
        }
      } else {
        const halfPageRange = Math.floor(props.pageRange / 2);
        let setPageItem = (index) => {
          items[index] = {
            index,
            content: index + 1,
            selected: index === selected.value - 1
          };
        };
        let setBreakView = (index) => {
          items[index] = {
            disabled: true,
            breakView: true
          };
        };
        for (let i = 0; i < props.marginPages; i++) {
          setPageItem(i);
        }
        let selectedRangeLow = 0;
        if (selected.value - halfPageRange > 0) {
          selectedRangeLow = selected.value - 1 - halfPageRange;
        }
        let selectedRangeHigh = selectedRangeLow + props.pageRange - 1;
        if (selectedRangeHigh >= state.value.pageCount) {
          selectedRangeHigh = state.value.pageCount - 1;
          selectedRangeLow = selectedRangeHigh - props.pageRange + 1;
        }
        for (let i = selectedRangeLow; i <= selectedRangeHigh && i <= state.value.pageCount - 1; i++) {
          setPageItem(i);
        }
        if (selectedRangeLow > props.marginPages) {
          setBreakView(selectedRangeLow - 1);
        }
        if (selectedRangeHigh + 1 < state.value.pageCount - props.marginPages) {
          setBreakView(selectedRangeHigh + 1);
        }
        for (let i = state.value.pageCount - 1; i >= state.value.pageCount - props.marginPages; i--) {
          setPageItem(i);
        }
      }
      return items;
    });
    function firstPageSelected() {
      return selected.value === 1;
    }
    function lastPageSelected() {
      return selected.value === state.value.pageCount || state.value.pageCount === 0;
    }
    return (_ctx, _push, _parent, _attrs) => {
      if (!__props.noLiSurround) {
        _push(`<ul${ssrRenderAttrs(mergeProps({ class: __props.containerClass }, _attrs))}>`);
        if (__props.firstLastButton) {
          _push(`<li class="${ssrRenderClass([__props.pageClass, firstPageSelected() ? __props.disabledClass : ""])}"><a class="${ssrRenderClass(__props.pageLinkClass)}"${ssrRenderAttr("tabindex", firstPageSelected() ? -1 : 0)}>${__props.firstButtonText}</a></li>`);
        } else {
          _push(`<!---->`);
        }
        if (!(firstPageSelected() && __props.hidePrevNext)) {
          _push(`<li class="${ssrRenderClass([__props.prevClass, firstPageSelected() ? __props.disabledClass : ""])}"><a class="${ssrRenderClass(__props.prevLinkClass)}"${ssrRenderAttr("tabindex", firstPageSelected() ? -1 : 0)}>${__props.prevText}</a></li>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--[-->`);
        ssrRenderList(unref(pages), (page) => {
          _push(`<li class="${ssrRenderClass([__props.pageClass, page.selected ? __props.activeClass : "", page.disabled ? __props.disabledClass : "", page.breakView ? __props.breakViewClass : ""])}">`);
          if (page.breakView) {
            _push(`<a class="${ssrRenderClass([__props.pageLinkClass, __props.breakViewLinkClass])}" tabindex="0">`);
            ssrRenderSlot(_ctx.$slots, "breakViewContent", {}, () => {
              _push(`${ssrInterpolate(__props.breakViewText)}`);
            }, _push, _parent);
            _push(`</a>`);
          } else if (page.disabled) {
            _push(`<a class="${ssrRenderClass(__props.pageLinkClass)}" tabindex="0">${ssrInterpolate(page.content)}</a>`);
          } else {
            _push(`<a class="${ssrRenderClass(__props.pageLinkClass)}" tabindex="0">${ssrInterpolate(page.content)}</a>`);
          }
          _push(`</li>`);
        });
        _push(`<!--]-->`);
        if (!(lastPageSelected() && __props.hidePrevNext)) {
          _push(`<li class="${ssrRenderClass([__props.nextClass, lastPageSelected() ? __props.disabledClass : ""])}"><a class="${ssrRenderClass(__props.nextLinkClass)}"${ssrRenderAttr("tabindex", lastPageSelected() ? -1 : 0)}>${__props.nextText}</a></li>`);
        } else {
          _push(`<!---->`);
        }
        if (__props.firstLastButton) {
          _push(`<li class="${ssrRenderClass([__props.pageClass, lastPageSelected() ? __props.disabledClass : ""])}"><a class="${ssrRenderClass(__props.pageLinkClass)}"${ssrRenderAttr("tabindex", lastPageSelected() ? -1 : 0)}>${__props.lastButtonText}</a></li>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</ul>`);
      } else {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: __props.containerClass }, _attrs))}>`);
        if (__props.firstLastButton) {
          _push(`<a class="${ssrRenderClass([__props.pageLinkClass, firstPageSelected() ? __props.disabledClass : ""])}" tabindex="0">${__props.firstButtonText}</a>`);
        } else {
          _push(`<!---->`);
        }
        if (!(firstPageSelected() && __props.hidePrevNext)) {
          _push(`<a class="${ssrRenderClass([__props.prevLinkClass, firstPageSelected() ? __props.disabledClass : ""])}" tabindex="0">${__props.prevText}</a>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--[-->`);
        ssrRenderList(unref(pages), (page) => {
          _push(`<!--[-->`);
          if (page.breakView) {
            _push(`<a class="${ssrRenderClass([__props.pageLinkClass, __props.breakViewLinkClass, page.disabled ? __props.disabledClass : ""])}" tabindex="0">`);
            ssrRenderSlot(_ctx.$slots, "breakViewContent", {}, () => {
              _push(`${ssrInterpolate(__props.breakViewText)}`);
            }, _push, _parent);
            _push(`</a>`);
          } else if (page.disabled) {
            _push(`<a class="${ssrRenderClass([__props.pageLinkClass, page.selected ? __props.activeClass : "", __props.disabledClass])}" tabindex="0">${ssrInterpolate(page.content)}</a>`);
          } else {
            _push(`<a class="${ssrRenderClass([__props.pageLinkClass, page.selected ? __props.activeClass : ""])}" tabindex="0">${ssrInterpolate(page.content)}</a>`);
          }
          _push(`<!--]-->`);
        });
        _push(`<!--]-->`);
        if (!(lastPageSelected() && __props.hidePrevNext)) {
          _push(`<a class="${ssrRenderClass([__props.nextLinkClass, lastPageSelected() ? __props.disabledClass : ""])}" tabindex="0">${__props.nextText}</a>`);
        } else {
          _push(`<!---->`);
        }
        if (__props.firstLastButton) {
          _push(`<a class="${ssrRenderClass([__props.pageLinkClass, lastPageSelected() ? __props.disabledClass : ""])}" tabindex="0">${__props.lastButtonText}</a>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      }
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Paginate.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "Search",
  __ssrInlineRender: true,
  props: ["clear", "placeholder"],
  emits: ["search", "onClear"],
  setup(__props, { emit: emits }) {
    const query = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_xcircle_component = resolveComponent("xcircle-component");
      _push(`<form${ssrRenderAttrs(mergeProps({ class: "flex items-center" }, _attrs))}><label for="search" class="sr-only">\u041F\u043E\u0448\u0443\u043A</label><div class="relative w-full"><div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"><svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg></div><input type="text"${ssrRenderAttr("value", query.value)} id="search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"${ssrRenderAttr("placeholder", __props.placeholder)} required>`);
      if (__props.clear) {
        _push(`<button type="button" class="flex absolute inset-y-0 right-0 items-center pr-3">`);
        _push(ssrRenderComponent(_component_xcircle_component, { class: "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white" }, null, _parent));
        _push(`</button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><button type="submit" class="inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><svg aria-hidden="true" class="mr-2 -ml-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg> \u0428\u0443\u043A\u0430\u0442\u0438 </button></form>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Search.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
let user = createStore({
  debug: true,
  state: {
    roles: [],
    permissions: []
  },
  mutations: {
    load(state) {
      axios.get("/api/users/get").then(({ data }) => {
        if (data.result.roles.length) {
          data.result.roles.forEach((item) => {
            state.roles.push(item.slug);
            item.permissions.forEach((permission_item) => {
              state.permissions.push(permission_item.slug);
            });
          });
          state.permissions = state.permissions.reduce((acc, item) => {
            if (acc.includes(item)) {
              return acc;
            }
            return [...acc, item];
          }, []);
        }
      }).catch((response) => console.log(response));
    }
  }
});
Chart.register(...registerables);
const appName = ((_a = window.document.getElementsByTagName("title")[0]) == null ? void 0 : _a.innerText) || "Laravel";
createInertiaApp({
  title: (title) => `${title} - ${appName}`,
  resolve: (name) => resolvePageComponent(`./${name}.vue`, /* @__PURE__ */ Object.assign({ "./Auth/ConfirmPassword.vue": () => import("./assets/ConfirmPassword.73ac05fe.mjs"), "./Auth/ForgotPassword.vue": () => import("./assets/ForgotPassword.8de45457.mjs"), "./Auth/Login.vue": () => import("./assets/Login.d845c2ff.mjs"), "./Auth/Register.vue": () => import("./assets/Register.1bd6c884.mjs"), "./Auth/ResetPassword.vue": () => import("./assets/ResetPassword.501b73b0.mjs"), "./Auth/VerifyEmail.vue": () => import("./assets/VerifyEmail.675310cd.mjs"), "./Content/Categories/Form.vue": () => import("./assets/Form.915feaac.mjs").then((n) => n.F), "./Content/Categories/Index.vue": () => import("./assets/Index.fde0696c.mjs"), "./Content/Categories/Modal.vue": () => import("./assets/Modal.4767be31.mjs"), "./Content/Categories/Table.vue": () => import("./assets/Table.0d081a8f.mjs"), "./Content/ContentLayout.vue": () => import("./assets/ContentLayout.f201d183.mjs"), "./Content/Images/Form.vue": () => import("./assets/Form.96652398.mjs"), "./Content/Images/Index.vue": () => import("./assets/Index.ddd2928d.mjs"), "./Content/Images/List.vue": () => import("./assets/List.a7b80486.mjs"), "./Content/Images/Modal.vue": () => import("./assets/Modal.38b7b180.mjs"), "./Content/Index.vue": () => import("./assets/Index.e9d53e71.mjs"), "./Content/Pages/Form.vue": () => import("./assets/Form.cec16b35.mjs"), "./Content/Pages/Index.vue": () => import("./assets/Index.8012e5dc.mjs"), "./Content/Pages/Modal.vue": () => import("./assets/Modal.4a194aee.mjs"), "./Content/Pages/Table.vue": () => import("./assets/Table.ada59265.mjs"), "./Content/Products/Form.vue": () => import("./assets/Form.1fbdead7.mjs"), "./Content/Products/Images.vue": () => import("./assets/Images.6830a229.mjs"), "./Content/Products/Index.vue": () => import("./assets/Index.02849c7f.mjs"), "./Content/Products/Modal.vue": () => import("./assets/Modal.f4f9c035.mjs"), "./Content/Products/Table.vue": () => import("./assets/Table.7f3199e0.mjs"), "./Content/Reviews/Products/Form.vue": () => import("./assets/Form.1b40c633.mjs"), "./Content/Reviews/Products/Index.vue": () => import("./assets/Index.7d7738b0.mjs"), "./Content/Reviews/Products/Modal.vue": () => import("./assets/Modal.228feb1f.mjs"), "./Content/Reviews/Products/Table.vue": () => import("./assets/Table.228ee074.mjs"), "./Content/Reviews/ReviewsLayout.vue": () => import("./assets/ReviewsLayout.037785a5.mjs"), "./Content/Reviews/Socials/Form.vue": () => import("./assets/Form.934d4441.mjs"), "./Content/Reviews/Socials/Index.vue": () => import("./assets/Index.90f435c9.mjs"), "./Content/Reviews/Socials/Modal.vue": () => import("./assets/Modal.6e20d600.mjs"), "./Content/Reviews/Socials/Table.vue": () => import("./assets/Table.30885e31.mjs"), "./Crm/Callbacks/Form.vue": () => import("./assets/Form.67d86fa9.mjs"), "./Crm/Callbacks/Index.vue": () => import("./assets/Index.7f41a372.mjs"), "./Crm/Callbacks/Modal.vue": () => import("./assets/Modal.86c35693.mjs"), "./Crm/Callbacks/Table.vue": () => import("./assets/Table.58875aae.mjs"), "./Crm/Clients/Form.vue": () => import("./assets/Form.6f4b8d19.mjs"), "./Crm/Clients/Index.vue": () => import("./assets/Index.4211b6f9.mjs"), "./Crm/Clients/Indicators.vue": () => import("./assets/Indicators.6cf36165.mjs"), "./Crm/Clients/ItemsTable.vue": () => import("./assets/ItemsTable.e3d2647e.mjs"), "./Crm/Clients/Modal.vue": () => import("./assets/Modal.5f690232.mjs"), "./Crm/Clients/Table.vue": () => import("./assets/Table.6812c344.mjs"), "./Crm/CrmLayout.vue": () => import("./assets/CrmLayout.daa9a507.mjs"), "./Crm/Index.vue": () => import("./assets/Index.31a94e9d.mjs"), "./Crm/Invoices/Form.vue": () => import("./assets/Form.60f18618.mjs"), "./Crm/Invoices/Index.vue": () => import("./assets/Index.74c37d60.mjs"), "./Crm/Invoices/Modal.vue": () => import("./assets/Modal.684ff0eb.mjs"), "./Crm/Invoices/Table.vue": () => import("./assets/Table.deccef13.mjs"), "./Crm/Orders/ClientOrders.vue": () => import("./assets/ClientOrders.1a5b2550.mjs"), "./Crm/Orders/Form.vue": () => import("./assets/Form.f6636f5b.mjs"), "./Crm/Orders/Index.vue": () => import("./assets/Index.89d2c1ff.mjs"), "./Crm/Orders/InvoicesTable.vue": () => import("./assets/InvoicesTable.98527f8a.mjs"), "./Crm/Orders/Items/Form.vue": () => import("./assets/Form.5bb465ab.mjs"), "./Crm/Orders/Items/Modal.vue": () => import("./assets/Modal.8950875c.mjs"), "./Crm/Orders/Items/Table.vue": () => import("./assets/Table.f76c0f0e.mjs"), "./Crm/Orders/Modal.vue": () => import("./assets/Modal.8f43d676.mjs"), "./Crm/Orders/Table.vue": () => import("./assets/Table.d02b9496.mjs"), "./Crm/Supports/Form.vue": () => import("./assets/Form.5a6d3afb.mjs"), "./Crm/Supports/Index.vue": () => import("./assets/Index.5bed8143.mjs"), "./Crm/Supports/Modal.vue": () => import("./assets/Modal.e60a8e0f.mjs"), "./Crm/Supports/Table.vue": () => import("./assets/Table.670d23b5.mjs"), "./Dashboard.vue": () => import("./assets/Dashboard.81ddcd2e.mjs"), "./Options/Advantages/Form.vue": () => import("./assets/Form.cefacdb2.mjs"), "./Options/Advantages/Index.vue": () => import("./assets/Index.b8d433a4.mjs"), "./Options/Advantages/Modal.vue": () => import("./assets/Modal.0ee852cd.mjs"), "./Options/Advantages/Table.vue": () => import("./assets/Table.459f3e03.mjs"), "./Options/Banners/Form.vue": () => import("./assets/Form.201f45d7.mjs"), "./Options/Banners/Index.vue": () => import("./assets/Index.beb5469c.mjs"), "./Options/Banners/Modal.vue": () => import("./assets/Modal.6cea83c3.mjs"), "./Options/Banners/Table.vue": () => import("./assets/Table.178c7adf.mjs"), "./Options/Banners/UploadBannersInput.vue": () => import("./assets/UploadBannersInput.e69e8658.mjs"), "./Options/Characteristics/Form.vue": () => import("./assets/Form.a2fe2654.mjs"), "./Options/Characteristics/Index.vue": () => import("./assets/Index.45adfc88.mjs"), "./Options/Characteristics/Modal.vue": () => import("./assets/Modal.db6aaee7.mjs"), "./Options/Characteristics/Table.vue": () => import("./assets/Table.991b1147.mjs"), "./Options/Colors/Form.vue": () => import("./assets/Form.a3e53b69.mjs"), "./Options/Colors/Index.vue": () => import("./assets/Index.0a64e69e.mjs"), "./Options/Colors/Modal.vue": () => import("./assets/Modal.312d508b.mjs"), "./Options/Colors/Table.vue": () => import("./assets/Table.a0eeec92.mjs"), "./Options/Faqs/Form.vue": () => import("./assets/Form.271e3dcc.mjs"), "./Options/Faqs/Index.vue": () => import("./assets/Index.d67ffe0b.mjs"), "./Options/Faqs/Modal.vue": () => import("./assets/Modal.26e6f8db.mjs"), "./Options/Faqs/Table.vue": () => import("./assets/Table.e72ce661.mjs"), "./Options/Index.vue": () => import("./assets/Index.02b834ce.mjs"), "./Options/Main/Form.vue": () => import("./assets/Form.fa00fce9.mjs"), "./Options/Main/Index.vue": () => import("./assets/Index.d7e2d807.mjs"), "./Options/Main/Logo.vue": () => import("./assets/Logo.c2124519.mjs"), "./Options/OptionsLayout.vue": () => import("./assets/OptionsLayout.94904958.mjs"), "./Options/Permissions/Form.vue": () => import("./assets/Form.55b51b2e.mjs"), "./Options/Permissions/Index.vue": () => import("./assets/Index.ae484050.mjs"), "./Options/Permissions/Modal.vue": () => import("./assets/Modal.defe2f8e.mjs"), "./Options/Permissions/Table.vue": () => import("./assets/Table.aadacd82.mjs"), "./Options/PromoCodes/Form.vue": () => import("./assets/Form.35da7ef9.mjs"), "./Options/PromoCodes/Index.vue": () => import("./assets/Index.169517c4.mjs"), "./Options/PromoCodes/Modal.vue": () => import("./assets/Modal.5559a2c6.mjs"), "./Options/PromoCodes/Table.vue": () => import("./assets/Table.c462e6fd.mjs"), "./Options/Providers/Form.vue": () => import("./assets/Form.cc529f02.mjs"), "./Options/Providers/Index.vue": () => import("./assets/Index.1c2eba88.mjs"), "./Options/Providers/Modal.vue": () => import("./assets/Modal.818f2083.mjs"), "./Options/Providers/Table.vue": () => import("./assets/Table.598a4f11.mjs"), "./Options/Roles/Form.vue": () => import("./assets/Form.8b743ad0.mjs"), "./Options/Roles/Index.vue": () => import("./assets/Index.e539ff57.mjs"), "./Options/Roles/Modal.vue": () => import("./assets/Modal.51079ed4.mjs"), "./Options/Roles/Table.vue": () => import("./assets/Table.ab2a5147.mjs"), "./Options/Scripts/Form.vue": () => import("./assets/Form.642e2cf4.mjs"), "./Options/Scripts/Index.vue": () => import("./assets/Index.8711ddcf.mjs"), "./Options/Sizes/Form.vue": () => import("./assets/Form.3358223c.mjs"), "./Options/Sizes/Index.vue": () => import("./assets/Index.fb515312.mjs"), "./Options/Sizes/Modal.vue": () => import("./assets/Modal.ececa2c1.mjs"), "./Options/Sizes/Table.vue": () => import("./assets/Table.cb80a85e.mjs"), "./Options/Translations/Form.vue": () => import("./assets/Form.ed90272f.mjs"), "./Options/Translations/Index.vue": () => import("./assets/Index.2461776d.mjs"), "./Options/Translations/Modal.vue": () => import("./assets/Modal.aaf2ffed.mjs"), "./Options/Translations/Table.vue": () => import("./assets/Table.6ab70339.mjs"), "./Options/Users/Form.vue": () => import("./assets/Form.a42c7822.mjs"), "./Options/Users/Index.vue": () => import("./assets/Index.5819db87.mjs"), "./Options/Users/Modal.vue": () => import("./assets/Modal.731cb9e6.mjs"), "./Options/Users/Table.vue": () => import("./assets/Table.52e5378b.mjs"), "./Options/Xmls/Form.vue": () => import("./assets/Form.7589a99f.mjs"), "./Options/Xmls/Index.vue": () => import("./assets/Index.ba470e3d.mjs"), "./Options/Xmls/Modal.vue": () => import("./assets/Modal.1106c137.mjs"), "./Options/Xmls/Table.vue": () => import("./assets/Table.6214cbf6.mjs"), "./Statistics/CostCategories/Form.vue": () => import("./assets/Form.7286cfa9.mjs"), "./Statistics/CostCategories/Index.vue": () => import("./assets/Index.36dfd3ec.mjs"), "./Statistics/CostCategories/Modal.vue": () => import("./assets/Modal.9f3131b0.mjs"), "./Statistics/Costs/Chart.vue": () => import("./assets/Chart.582bab23.mjs"), "./Statistics/Costs/Form.vue": () => import("./assets/Form.2d29a8be.mjs"), "./Statistics/Costs/Index.vue": () => import("./assets/Index.2ae18dc2.mjs"), "./Statistics/Costs/Modal.vue": () => import("./assets/Modal.01bea399.mjs"), "./Statistics/Costs/Table.vue": () => import("./assets/Table.ca81b2a7.mjs"), "./Statistics/Datepicker.vue": () => import("./assets/Datepicker.fce2e4bd.mjs"), "./Statistics/Index.vue": () => import("./assets/Index.7d28ad7a.mjs"), "./Statistics/Managers/Chart.vue": () => import("./assets/Chart.9b125f90.mjs"), "./Statistics/Managers/Index.vue": () => import("./assets/Index.db593a55.mjs"), "./Statistics/Managers/Table.vue": () => import("./assets/Table.7137de61.mjs"), "./Statistics/Marketing/Chart.vue": () => import("./assets/Chart.9ecb36f7.mjs"), "./Statistics/Marketing/Index.vue": () => import("./assets/Index.8fae0bb3.mjs"), "./Statistics/Marketing/Table.vue": () => import("./assets/Table.12694024.mjs"), "./Statistics/Orders/Chart.vue": () => import("./assets/Chart.c282fc66.mjs"), "./Statistics/Orders/Index.vue": () => import("./assets/Index.aefb093c.mjs"), "./Statistics/Orders/Indicators.vue": () => import("./assets/Indicators.ea29e76f.mjs"), "./Statistics/Orders/Table.vue": () => import("./assets/Table.2fc604a3.mjs"), "./Statistics/Products/Chart.vue": () => import("./assets/Chart.6e6d4915.mjs"), "./Statistics/Products/Index.vue": () => import("./assets/Index.1cb81028.mjs"), "./Statistics/Products/Table.vue": () => import("./assets/Table.21012a0f.mjs"), "./Statistics/Profits/Chart.vue": () => import("./assets/Chart.ca294c9d.mjs"), "./Statistics/Profits/Index.vue": () => import("./assets/Index.87fa6c2a.mjs"), "./Statistics/Profits/Table.vue": () => import("./assets/Table.5a83673b.mjs"), "./Statistics/Refunds/Index.vue": () => import("./assets/Index.db38f140.mjs"), "./Statistics/Refunds/Table.vue": () => import("./assets/Table.281f2d04.mjs"), "./Statistics/StatisticLayout.vue": () => import("./assets/StatisticLayout.23465a14.mjs") })),
  setup({ el, App, props, plugin }) {
    const app = createApp({ render: () => h(App, props) }).use(plugin).use(I, Ziggy);
    app.use(VueSweetalert2);
    app.use(user);
    app.use(i18n);
    app.provide("$can", function(val) {
      return user.state.permissions.includes(val);
    });
    app.component("auth-layout", _sfc_main$3);
    app.component("editor", Editor);
    app.component("search-component", _sfc_main);
    app.component("sidebar-component", Sidebar);
    app.component("sidebar-item", _sfc_main$p);
    app.component("lang-tabs", _sfc_main$n);
    app.component("card-component", _sfc_main$r);
    app.component("table-component", _sfc_main$k);
    app.component("loader-component", Loader);
    app.component("modal-component", _sfc_main$i);
    app.component("button-component", _sfc_main$f);
    app.component("checkbox-component", _sfc_main$d);
    app.component("image-card", _sfc_main$g);
    app.component("label-component", _sfc_main$e);
    app.component("input-component", _sfc_main$c);
    app.component("upload-input-component", _sfc_main$b);
    app.component("textarea-component", _sfc_main$a);
    app.component("select-component", _sfc_main$9);
    app.component("xcircle-component", _sfc_main$h);
    app.component("multiselect", Multiselect);
    app.component("pagination", _sfc_main$1);
    app.component("Datepicker", Datepicker);
    app.config.globalProperties.$filters = {
      formatMoney(value) {
        return numeral(value).format("0,0[.]00") + " \u0433\u0440\u043D.";
      },
      dateFormat(value) {
        return moment(value).format("DD.MM.YY");
      },
      dateTimeFormat(value) {
        return moment(value).format("DD.MM.YY HH:mm");
      },
      publishedStatus(value) {
        return value ? "\u041E\u043F\u0443\u0431\u043B\u0456\u043A\u043E\u0432\u0430\u043D\u043E" : "\u041D\u0435 \u043E\u043F\u0443\u0431\u043B\u0456\u043A\u043E\u0432\u0430\u043D\u043E";
      },
      yesOrNo(value) {
        return value ? "\u0422\u0430\u043A" : "\u041D\u0456";
      }
    };
    app.provide("$defaultLang", "ua");
    app.provide("$selectYesOrNo", [
      {
        key: 0,
        value: "\u041D\u0456"
      },
      {
        key: 1,
        value: "\u0422\u0430\u043A"
      }
    ]);
    app.provide("$publishedStatuses", [
      {
        key: 0,
        value: "\u041D\u0435 \u043E\u043F\u0443\u0431\u043B\u0456\u043A\u043E\u0432\u0430\u043D\u043E"
      },
      {
        key: 1,
        value: "\u041E\u043F\u0443\u0431\u043B\u0456\u043A\u043E\u0432\u0430\u043D\u043E"
      }
    ]);
    app.provide("$tiny", {
      api: "ufqphs7puyg4ij1mc3c61o7isu5mxekk5x9yygffpdo89ava",
      settings: {
        plugins: ["table", "code", "lists"],
        height: 300,
        branding: false,
        toolbar: "undo redo styleselect bold italic alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat"
      }
    });
    app.config.globalProperties.$moment = moment;
    app.provide("$moment", moment);
    app.mount(el);
  }
});
InertiaProgress.init({ color: "#4B5563" });
export {
  Loader as L,
  Sidebar as S,
  _sfc_main$e as _,
  _sfc_main$c as a,
  _sfc_main$f as b,
  _sfc_main$8 as c,
  _sfc_main$d as d,
  _sfc_main$9 as e,
  _sfc_main$g as f,
  _sfc_main$n as g,
  _sfc_main$a as h,
  _sfc_main$b as i,
  _sfc_main$1 as j,
  _sfc_main$i as k,
  _sfc_main$k as l,
  _sfc_main$h as m,
  _sfc_main$5 as n,
  _sfc_main$r as o,
  _sfc_main as p,
  _sfc_main$m as q,
  _sfc_main$l as r,
  _sfc_main$p as s,
  _sfc_main$3 as t
};
