import { mergeProps, withCtx, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { l as _sfc_main$1 } from "../app2.mjs";
import "./vue.m.487fc989.mjs";
import "axios";
import "@inertiajs/inertia-vue3";
import "@inertiajs/progress";
import "./vendor.67403750.mjs";
import "vue-sweetalert2";
import "moment";
import "numeral";
import "@tinymce/tinymce-vue";
import "vue-i18n";
import "./_plugin-vue_export-helper.43be4956.mjs";
import "./Logo.5e8f1180.mjs";
import "@inertiajs/vue3";
import "vuex";
import "@vuepic/vue-datepicker";
import "chart.js";
const _sfc_main = {
  __name: "Table",
  __ssrInlineRender: true,
  props: ["data"],
  setup(__props) {
    const headings = [
      {
        label: "\u0414\u0430\u0442\u0430",
        key: "date"
      },
      {
        label: "\u041D\u043E\u043C\u0435\u0440 \u0437\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F",
        key: "order_id"
      },
      {
        label: "\u0421\u0443\u043C\u0430 \u043F\u043E\u0441\u0442\u0430\u0447\u0430\u043B\u044C\u043D\u0438\u043A\u0430",
        key: "sum_provider_trade_price"
      },
      {
        label: "\u0421\u0443\u043C\u0430 \u0437\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F",
        key: "sum_order_price"
      },
      {
        label: "\u0421\u0443\u043C\u0430 \u0441\u043F\u043B\u0430\u0442\u0438 \u043F\u043E\u0441\u0442\u0430\u0447\u0430\u043B\u044C\u043D\u0438\u043A\u043E\u043C",
        key: "sum_provider_refund"
      },
      {
        label: "\u0421\u0443\u043C\u0430 \u0441\u043F\u043B\u0430\u0442\u0438 \u043A\u043B\u0456\u0454\u043D\u0442\u0443",
        key: "sum_client_refund"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({
        headings,
        rows: __props.data,
        isSlotMode: true
      }, _attrs), {
        date: withCtx(({ data }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$filters.dateFormat(data.row.date))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$filters.dateFormat(data.row.date)), 1)
            ];
          }
        }),
        sum_provider_trade_price: withCtx(({ data }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$filters.formatMoney(data.row.sum_provider_trade_price))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$filters.formatMoney(data.row.sum_provider_trade_price)), 1)
            ];
          }
        }),
        sum_order_price: withCtx(({ data }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$filters.formatMoney(data.row.sum_order_price))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$filters.formatMoney(data.row.sum_order_price)), 1)
            ];
          }
        }),
        sum_provider_refund: withCtx(({ data }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$filters.formatMoney(data.row.sum_provider_refund))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$filters.formatMoney(data.row.sum_provider_refund)), 1)
            ];
          }
        }),
        sum_client_refund: withCtx(({ data }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$filters.formatMoney(data.row.sum_client_refund))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$filters.formatMoney(data.row.sum_client_refund)), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Statistics/Refunds/Table.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
