import { computed, mergeProps, withCtx, unref, createTextVNode, toDisplayString, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./Modal-8c93b79c.mjs";
import _sfc_main$2 from "./Form-d5f865ef.mjs";
import "./Label-229c476a.mjs";
import "./Input-4be85f13.mjs";
import "./Select-b70673dc.mjs";
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
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({
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
            _push2(ssrRenderComponent(_sfc_main$2, { item: __props.item }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$2, { item: __props.item }, null, 8, ["item"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Options/Sizes/Modal.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
