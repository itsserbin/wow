import { mergeProps, withCtx, createVNode, toDisplayString, createTextVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
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
  __name: "ClientOrders",
  __ssrInlineRender: true,
  props: ["data", "statuses"],
  emits: ["editOrderItem", "destroyOrderItem"],
  setup(__props) {
    const headings = [
      {
        label: "ID",
        key: "id"
      },
      {
        label: "\u041A\u0456\u043B\u044C\u043A\u0456\u0441\u0442\u044C",
        key: "total_count"
      },
      {
        label: "\u0421\u0443\u043C\u0430",
        key: "total_price"
      },
      {
        label: "\u0421\u0442\u0430\u0442\u0443\u0441",
        key: "status"
      },
      {
        label: "\u0414\u0430\u0442\u0430 \u0441\u0442\u0432\u043E\u0440\u0435\u043D\u043D\u044F",
        key: "created_at"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({
        isSlotMode: true,
        rows: __props.data,
        headings
      }, _attrs), {
        id: withCtx(({ data }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<a${ssrRenderAttr("href", _ctx.route("admin.crm.orders", { id: data.row.id }))} target="_blank"${_scopeId}>${ssrInterpolate(data.row.id)}</a>`);
          } else {
            return [
              createVNode("a", {
                href: _ctx.route("admin.crm.orders", { id: data.row.id }),
                target: "_blank"
              }, toDisplayString(data.row.id), 9, ["href"])
            ];
          }
        }),
        total_price: withCtx(({ data }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$filters.formatMoney(data.row.total_price))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$filters.formatMoney(data.row.total_price)), 1)
            ];
          }
        }),
        status: withCtx(({ data }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(__props.statuses[data.row.status])}`);
          } else {
            return [
              createTextVNode(toDisplayString(__props.statuses[data.row.status]), 1)
            ];
          }
        }),
        created_at: withCtx(({ data }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$filters.dateFormat(data.row.created_at))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$filters.dateFormat(data.row.created_at)), 1)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Crm/Orders/ClientOrders.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
