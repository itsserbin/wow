import { unref, withCtx, createVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { Link } from "@inertiajs/vue3";
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
          _push(`<div class="border-[1px] border-secondary hover:scale-105 transition-all duration-300 rounded-lg">`);
          _push(ssrRenderComponent(unref(Link), {
            href: _ctx.route("category", item.slug)
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="h-52"${_scopeId}><picture class="w-full"${_scopeId}><source${ssrRenderAttr("srcset", item.preview ? _ctx.route("images.350", item.preview.webp_src) : null)} type="image/webp"${_scopeId}><img${ssrRenderAttr("src", item.preview ? _ctx.route("images.350", item.preview.src) : null)} class="h-full object-cover w-full rounded-t-lg"${ssrRenderAttr("alt", item.title[__props.lang])}${_scopeId}></picture></div><div class="font-bold text-center p-5 font-subheading"${_scopeId}>${ssrInterpolate(item.title[__props.lang])}</div>`);
              } else {
                return [
                  createVNode("div", { class: "h-52" }, [
                    createVNode("picture", { class: "w-full" }, [
                      createVNode("source", {
                        srcset: item.preview ? _ctx.route("images.350", item.preview.webp_src) : null,
                        type: "image/webp"
                      }, null, 8, ["srcset"]),
                      createVNode("img", {
                        src: item.preview ? _ctx.route("images.350", item.preview.src) : null,
                        class: "h-full object-cover w-full rounded-t-lg",
                        alt: item.title[__props.lang]
                      }, null, 8, ["src", "alt"])
                    ])
                  ]),
                  createVNode("div", { class: "font-bold text-center p-5 font-subheading" }, toDisplayString(item.title[__props.lang]), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div>`);
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
