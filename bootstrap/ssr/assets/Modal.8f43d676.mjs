import { computed, mergeProps, withCtx, unref, createTextVNode, toDisplayString, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { k as _sfc_main$1 } from "../app2.mjs";
import _sfc_main$2 from "./Form.f6636f5b.mjs";
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
import "./Modal.8950875c.mjs";
import "./Form.5bb465ab.mjs";
import "./Table.f76c0f0e.mjs";
import "./ClientOrders.1a5b2550.mjs";
import "./Table.deccef13.mjs";
import "./Modal.684ff0eb.mjs";
import "./Form.60f18618.mjs";
const _sfc_main = {
  __name: "Modal",
  __ssrInlineRender: true,
  props: [
    "size",
    "order",
    "statuses",
    "paymentMethods",
    "canDestroy",
    "clientStatuses",
    "invoiceStatuses"
  ],
  emits: [
    "closeModal",
    "submitForm",
    "declineForm",
    "submitItemForm",
    "onEditClient"
  ],
  setup(__props) {
    const props = __props;
    const title = computed(() => {
      return props.order.id + " / " + (props.order.client.name ? props.order.client.name : "\u0406\u043C\u02BC\u044F \u043D\u0435 \u0432\u043A\u0430\u0437\u0430\u043D\u043E");
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({
        onCloseModal: ($event) => _ctx.$emit("closeModal"),
        "decline-button": __props.canDestroy,
        onDeclineForm: ($event) => _ctx.$emit("declineForm", __props.order.id),
        onSubmitForm: ($event) => _ctx.$emit("submitForm"),
        onClickCancel: ($event) => _ctx.$emit("closeModal"),
        size: __props.size
      }, _attrs), {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(title))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(title)), 1)
            ];
          }
        }),
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$2, {
              order: __props.order,
              statuses: __props.statuses,
              paymentMethods: __props.paymentMethods,
              invoiceStatuses: __props.invoiceStatuses,
              clientStatuses: __props.clientStatuses,
              onSubmitItemForm: ($event) => _ctx.$emit("submitItemForm"),
              onOnEditClient: ($event) => _ctx.$emit("onEditClient")
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$2, {
                order: __props.order,
                statuses: __props.statuses,
                paymentMethods: __props.paymentMethods,
                invoiceStatuses: __props.invoiceStatuses,
                clientStatuses: __props.clientStatuses,
                onSubmitItemForm: ($event) => _ctx.$emit("submitItemForm"),
                onOnEditClient: ($event) => _ctx.$emit("onEditClient")
              }, null, 8, ["order", "statuses", "paymentMethods", "invoiceStatuses", "clientStatuses", "onSubmitItemForm", "onOnEditClient"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Crm/Orders/Modal.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
