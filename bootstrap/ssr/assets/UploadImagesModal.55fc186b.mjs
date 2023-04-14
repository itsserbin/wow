import { resolveComponent, mergeProps, withCtx, createTextVNode, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { i as _sfc_main$1 } from "../app2.mjs";
const _sfc_main = {
  __name: "UploadImagesModal",
  __ssrInlineRender: true,
  emits: ["closeModal", "onUpload", "loadMoreImages"],
  setup(__props, { emit: emits }) {
    function onUploadFunction(data) {
      emits("onUpload", data);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_modal_component = resolveComponent("modal-component");
      _push(ssrRenderComponent(_component_modal_component, mergeProps({
        onCloseModal: ($event) => _ctx.$emit("closeModal"),
        "submit-button-text": "\u0417\u0431\u0435\u0440\u0435\u0433\u0442\u0438",
        "cancel-button-text": "\u0421\u043A\u0430\u0441\u0443\u0432\u0430\u0442\u0438",
        onSubmitForm: ($event) => _ctx.$emit("closeModal"),
        onClickCancel: ($event) => _ctx.$emit("closeModal"),
        size: "large",
        declineButton: false
      }, _attrs), {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u0417\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0435\u043D\u043D\u044F \u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u044C `);
          } else {
            return [
              createTextVNode(" \u0417\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0435\u043D\u043D\u044F \u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u044C ")
            ];
          }
        }),
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$1, { onOnUpload: onUploadFunction }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$1, { onOnUpload: onUploadFunction })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/UploadImagesModal.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
