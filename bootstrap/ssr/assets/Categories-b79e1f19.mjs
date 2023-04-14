import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { useSSRContext } from "vue";
const _sfc_main = {
  __name: "Categories",
  __ssrInlineRender: true,
  props: ["lang", "data"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (__props.data.length) {
        _push(`<div class="grid gap-4 grid-cols-2 md:grid-cols-8"><!--[-->`);
        ssrRenderList(__props.data, (item) => {
          _push(`<div class="border-[1px] border-secondary hover:scale-105 transition-all duration-300 rounded-lg"><a${ssrRenderAttr("href", _ctx.route("category", item.slug))}><div class="h-52"><picture class="w-full"><source${ssrRenderAttr("srcset", item.preview ? _ctx.route("images.350", item.preview.webp_src) : null)} type="image/webp"><img${ssrRenderAttr("src", item.preview ? _ctx.route("images.350", item.preview.src) : null)} class="h-full object-cover w-full rounded-t-lg"${ssrRenderAttr("alt", item.title[__props.lang])}></picture></div><div class="font-bold text-center p-5 font-subheading">${ssrInterpolate(item.title[__props.lang])}</div></a></div>`);
        });
        _push(`<!--]--></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Public/Components/Categories.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
