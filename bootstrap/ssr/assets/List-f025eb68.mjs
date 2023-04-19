import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./ImageCard-96741a4a.mjs";
import "./XCircle-6a269edb.mjs";
const _sfc_main = {
  __name: "List",
  __ssrInlineRender: true,
  props: ["images"],
  emits: [
    "fetch",
    "clickImage",
    "destroyImage"
  ],
  setup(__props, { emit: emits }) {
    const destroyImage = (image) => {
      emits("destroyImage", image);
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid grid-cols-2 md:grid-cols-6 gap-4 mt-3" }, _attrs))}><!--[-->`);
      ssrRenderList(__props.images.data, (image) => {
        _push(ssrRenderComponent(_sfc_main$1, {
          class: "m-1",
          image,
          id: image.id,
          alt: image.alt,
          onClickImage: ($event) => _ctx.$emit("clickImage", image),
          destroyIcon: true,
          onDestroyImage: destroyImage
        }, null, _parent));
      });
      _push(`<!--]--></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Content/Images/List.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
