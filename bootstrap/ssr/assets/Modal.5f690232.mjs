import { mergeProps, withCtx, createTextVNode, toDisplayString, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { k as _sfc_main$1 } from "../app2.mjs";
import _sfc_main$2 from "./Form.6f4b8d19.mjs";
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
import "./ItemsTable.e3d2647e.mjs";
import "gsap";
const _sfc_main = {
  __name: "Modal",
  __ssrInlineRender: true,
  props: [
    "size",
    "item",
    "statuses",
    "subStatuses",
    "orderStatuses",
    "canDestroy"
  ],
  emits: [
    "closeModal",
    "submitForm",
    "declineForm",
    "submitItemForm"
  ],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({
        onCloseModal: ($event) => _ctx.$emit("closeModal"),
        "decline-button": __props.canDestroy,
        onDeclineForm: ($event) => _ctx.$emit("declineForm", __props.item.id),
        onSubmitForm: ($event) => _ctx.$emit("submitForm"),
        onClickCancel: ($event) => _ctx.$emit("closeModal"),
        size: __props.size
      }, _attrs), {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(__props.item.id + (__props.item.name ? " / " + __props.item.name : null))}`);
          } else {
            return [
              createTextVNode(toDisplayString(__props.item.id + (__props.item.name ? " / " + __props.item.name : null)), 1)
            ];
          }
        }),
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$2, {
              item: __props.item,
              statuses: __props.statuses,
              "sub-statuses": __props.subStatuses,
              "order-statuses": __props.orderStatuses
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$2, {
                item: __props.item,
                statuses: __props.statuses,
                "sub-statuses": __props.subStatuses,
                "order-statuses": __props.orderStatuses
              }, null, 8, ["item", "statuses", "sub-statuses", "order-statuses"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Crm/Clients/Modal.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
