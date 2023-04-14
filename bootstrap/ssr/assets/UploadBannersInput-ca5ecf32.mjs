import { resolveComponent, mergeProps, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttrs, ssrInterpolate } from "vue/server-renderer";
const _sfc_main = {
  __name: "UploadBannersInput",
  __ssrInlineRender: true,
  props: {
    label: String,
    image: String
  },
  emits: ["upload", "onDestroyImage"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_image_card = resolveComponent("image-card");
      if (__props.image) {
        _push(ssrRenderComponent(_component_image_card, mergeProps({
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
