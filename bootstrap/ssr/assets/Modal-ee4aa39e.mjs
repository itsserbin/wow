import { computed, mergeProps, withCtx, unref, createTextVNode, toDisplayString, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./Modal-8c93b79c.mjs";
import _sfc_main$2 from "./Form-9e69bc69.mjs";
import "vue-i18n";
import "./Card-1b507b9c.mjs";
import "./Select-b70673dc.mjs";
import "./Label-229c476a.mjs";
import "./Checkbox-c87c898e.mjs";
import "./Textarea-1805d9a6.mjs";
import "./Input-4be85f13.mjs";
import "./Button-6b2e52a5.mjs";
import "./Modal-7465b934.mjs";
import "./Form-edf31129.mjs";
import "./Table-da77c91a.mjs";
import "./Table-df76b95f.mjs";
import "./XCircle-df3891c5.mjs";
import "./ClientOrders-023cb563.mjs";
import "./Table-5286d7ce.mjs";
import "./Modal-e66db442.mjs";
import "./Form-89d71185.mjs";
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
      return props.order.id + " / " + (props.order.client.name ? props.order.client.name : "Імʼя не вказано");
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
