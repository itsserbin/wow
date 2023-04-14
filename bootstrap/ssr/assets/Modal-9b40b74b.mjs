import { computed, resolveComponent, mergeProps, withCtx, unref, createTextVNode, toDisplayString, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import _sfc_main$1 from "./Form-c69040c4.mjs";
const _sfc_main = {
  __name: "Modal",
  __ssrInlineRender: true,
  props: [
    "item",
    "canDestroy"
  ],
  emits: [
    "closeModal",
    "submitForm",
    "declineForm"
  ],
  setup(__props) {
    const props = __props;
    const formHeading = computed(
      () => props.item.id ? props.item.id + (props.item.title ? " / " + props.item.title : null) : null
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_modal_component = resolveComponent("modal-component");
      _push(ssrRenderComponent(_component_modal_component, mergeProps({
        onCloseModal: ($event) => _ctx.$emit("closeModal"),
        "decline-button": __props.canDestroy,
        onDeclineForm: ($event) => _ctx.$emit("declineForm", __props.item.id),
        onSubmitForm: ($event) => _ctx.$emit("submitForm"),
        onClickCancel: ($event) => _ctx.$emit("closeModal"),
        size: "medium"
      }, _attrs), {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(formHeading))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(formHeading)), 1)
            ];
          }
        }),
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$1, { item: __props.item }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$1, { item: __props.item }, null, 8, ["item"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Options/Translations/Modal.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};