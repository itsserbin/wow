import { reactive, mergeProps, withCtx, createVNode, toDisplayString, createTextVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { l as _sfc_main$1 } from "../app2.mjs";
import { useI18n } from "vue-i18n";
import "./vue.m.487fc989.mjs";
import "axios";
import "@inertiajs/inertia-vue3";
import "@inertiajs/progress";
import "./vendor.67403750.mjs";
import "vue-sweetalert2";
import "moment";
import "numeral";
import "@tinymce/tinymce-vue";
import "./_plugin-vue_export-helper.43be4956.mjs";
import "./Logo.5e8f1180.mjs";
import "@inertiajs/vue3";
import "vuex";
import "@vuepic/vue-datepicker";
import "chart.js";
const _sfc_main = {
  __name: "ItemsTable",
  __ssrInlineRender: true,
  props: ["data", "orderStatuses"],
  emits: ["editOrderItem", "destroyOrderItem"],
  setup(__props) {
    const { t } = useI18n();
    const headings = reactive([
      {
        label: t("id"),
        key: "id"
      },
      {
        label: t("status"),
        key: "status"
      },
      {
        label: t("orders.total_count"),
        key: "total_count"
      },
      {
        label: t("orders.total_price"),
        key: "total_price"
      },
      {
        label: t("updated_at") + "<hr class='my-1 max-w-[40%] mx-auto'>" + t("created_at"),
        key: "timestamps"
      }
    ]);
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
        status: withCtx(({ data }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(__props.orderStatuses[data.row.status])}`);
          } else {
            return [
              createTextVNode(toDisplayString(__props.orderStatuses[data.row.status]), 1)
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
        timestamps: withCtx(({ data }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$filters.dateTimeFormat(data.row.updated_at))} <hr class="my-1 max-w-[40%] mx-auto"${_scopeId}> ${ssrInterpolate(_ctx.$filters.dateTimeFormat(data.row.created_at))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$filters.dateTimeFormat(data.row.updated_at)) + " ", 1),
              createVNode("hr", { class: "my-1 max-w-[40%] mx-auto" }),
              createTextVNode(" " + toDisplayString(_ctx.$filters.dateTimeFormat(data.row.created_at)), 1)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Crm/Clients/ItemsTable.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
