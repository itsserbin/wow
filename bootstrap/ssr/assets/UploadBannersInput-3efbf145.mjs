import { mergeProps, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttrs, ssrInterpolate } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./ImageCard-96741a4a.mjs";
import "./XCircle-6a269edb.mjs";
const _sfc_main = {
  __name: "UploadBannersInput",
  __ssrInlineRender: true,
  props: ["label", "image"],
  emits: ["upload", "onDestroyImage"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      if (__props.image) {
        _push(ssrRenderComponent(_sfc_main$1, mergeProps({
          destroyIcon: true,
          image: __props.image,
          onDestroyImage: ($event) => _ctx.$emit("onDestroyImage")
        }, _attrs), null, _parent));
      } else {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full" }, _attrs))}>`);
        if (__props.label) {
          _push(`<label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">${ssrInterpolate(__props.label)}</label>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<input class="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" type="file"></div>`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Options/Banners/UploadBannersInput.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
