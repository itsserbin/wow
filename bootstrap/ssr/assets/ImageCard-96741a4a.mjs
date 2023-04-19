import { computed, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./XCircle-6a269edb.mjs";
const _sfc_main = {
  __name: "ImageCard",
  __ssrInlineRender: true,
  props: [
    "image",
    "alt",
    "link",
    "destroyIcon",
    "id",
    "class",
    "size"
  ],
  emits: ["destroyImage", "clickImage"],
  setup(__props) {
    const props = __props;
    const cardLink = computed(() => props.link ? props.link : "javascript:");
    const imageRoute = function(src) {
      if (src) {
        if (props.size === "55") {
          return route("images.55", src);
        } else if (props.size === "350") {
          return route("images.350", src);
        } else if (props.size === "500") {
          return route("images.500", src);
        } else {
          return route("images", src);
        }
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: [props.class, "w-full relative"]
      }, _attrs))}><a${ssrRenderAttr("href", unref(cardLink))}><picture><source${ssrRenderAttr("srcset", imageRoute(__props.image.webp_src))} type="image/webp"><img${ssrRenderAttr("src", imageRoute(__props.image.src))}${ssrRenderAttr("alt", __props.alt ? __props.alt : null)} class="rounded-lg mx-auto h-full object-cover"></picture></a>`);
      if (__props.destroyIcon) {
        _push(`<a href="javascript:" class="text-dark destroy-icon absolute top-0 right-0">`);
        _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
        _push(`</a>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/ImageCard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
