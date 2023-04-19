import { mergeProps, withCtx, createTextVNode, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { _ as _sfc_main$2 } from "./UploadImagesInput-b4c72346.mjs";
import { _ as _sfc_main$1 } from "./Modal-8c93b79c.mjs";
const _sfc_main = {
  __name: "UploadImagesModal",
  __ssrInlineRender: true,
  emits: ["closeModal", "onUpload", "loadMoreImages"],
  setup(__props, { emit: emits }) {
    function onUploadFunction(data) {
      emits("onUpload", data);
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({
        onCloseModal: ($event) => _ctx.$emit("closeModal"),
        "submit-button-text": "Зберегти",
        "cancel-button-text": "Скасувати",
        onSubmitForm: ($event) => _ctx.$emit("closeModal"),
        onClickCancel: ($event) => _ctx.$emit("closeModal"),
        size: "large",
        declineButton: false
      }, _attrs), {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Завантаження зображень `);
          } else {
            return [
              createTextVNode(" Завантаження зображень ")
            ];
          }
        }),
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$2, { onOnUpload: onUploadFunction }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$2, { onOnUpload: onUploadFunction })
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
