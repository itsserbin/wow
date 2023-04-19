import { mergeProps, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./Modal-8c93b79c.mjs";
import _sfc_main$2 from "./Form-dbe86646.mjs";
import "./UploadBannersInput-3efbf145.mjs";
import "./ImageCard-96741a4a.mjs";
import "./XCircle-6a269edb.mjs";
import "./Input-4be85f13.mjs";
import "./Label-229c476a.mjs";
import "./Select-b70673dc.mjs";
import "./LangTabs-3c63a9c9.mjs";
import "./Multiselect-c4e07430.mjs";
import "./_plugin-vue_export-helper-cc2b3d55.mjs";
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
    "declineForm",
    "onUploadImage"
  ],
  setup(__props, { emit: emits }) {
    function onUploadImage(image, device, lang) {
      emits("onUploadImage", image, device, lang);
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({
        onCloseModal: ($event) => _ctx.$emit("closeModal"),
        "decline-button": __props.canDestroy,
        onDeclineForm: ($event) => _ctx.$emit("declineForm", __props.item.id),
        onSubmitForm: ($event) => _ctx.$emit("submitForm"),
        onClickCancel: ($event) => _ctx.$emit("closeModal"),
        size: "large"
      }, _attrs), {
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$2, {
              item: __props.item,
              onOnUploadImage: onUploadImage
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$2, {
                item: __props.item,
                onOnUploadImage: onUploadImage
              }, null, 8, ["item"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Options/Banners/Modal.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
