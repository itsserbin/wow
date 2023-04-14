import { resolveComponent, mergeProps, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import _sfc_main$1 from "./Form.5a6d3afb.mjs";
const _sfc_main = {
  __name: "Modal",
  __ssrInlineRender: true,
  props: [
    "item",
    "statuses",
    "canDestroy"
  ],
  emits: [
    "closeModal",
    "submitForm",
    "declineForm"
  ],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_modal_component = resolveComponent("modal-component");
      _push(ssrRenderComponent(_component_modal_component, mergeProps({
        onCloseModal: ($event) => _ctx.$emit("closeModal"),
        onDeclineForm: ($event) => _ctx.$emit("declineForm", __props.item.id),
        onSubmitForm: ($event) => _ctx.$emit("submitForm"),
        onClickCancel: ($event) => _ctx.$emit("closeModal"),
        size: "extralarge",
        "decline-button": __props.canDestroy
      }, _attrs), {
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$1, {
              item: __props.item,
              statuses: __props.statuses
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$1, {
                item: __props.item,
                statuses: __props.statuses
              }, null, 8, ["item", "statuses"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Crm/Supports/Modal.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
